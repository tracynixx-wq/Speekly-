-- Запусти целиком в Supabase: SQL Editor -> New query -> Run

-- ===== Таблицы =====
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null check (username ~ '^[a-z0-9_]{3,20}$'),
  display_name text not null default '' check (char_length(display_name) <= 40),
  bio text not null default '' check (char_length(bio) <= 200),
  avatar_url text,
  banner_url text,
  last_seen timestamptz,
  verified boolean not null default false,
  public_key text,
  settings jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table public.friendships (
  id bigint generated always as identity primary key,
  requester uuid not null references public.profiles(id) on delete cascade,
  addressee uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending','accepted')),
  created_at timestamptz not null default now(),
  check (requester <> addressee)
);
create unique index friendships_pair on public.friendships (least(requester, addressee), greatest(requester, addressee));

create table public.messages (
  id bigint generated always as identity primary key,
  sender uuid not null references public.profiles(id) on delete cascade,
  recipient uuid not null references public.profiles(id) on delete cascade,
  body text not null default '' check (char_length(body) <= 24000),
  file_url text,
  file_name text,
  file_type text,
  file_size bigint,
  created_at timestamptz not null default now(),
  read_at timestamptz,
  check (char_length(body) > 0 or file_url is not null)
);
create index messages_sender_idx on public.messages (sender, created_at desc);
create index messages_recipient_idx on public.messages (recipient, created_at desc);

-- ===== Профиль создаётся автоматически при регистрации =====
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, username, display_name)
  values (new.id, lower(new.raw_user_meta_data->>'username'), coalesce(new.raw_user_meta_data->>'username', ''));
  return new;
end $$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ===== Права на колонки =====
revoke update on public.profiles from authenticated;
grant update (display_name, bio, avatar_url, banner_url, last_seen, public_key, settings) on public.profiles to authenticated;
revoke update on public.messages from authenticated;
grant update (read_at) on public.messages to authenticated;
revoke update on public.friendships from authenticated;
grant update (status) on public.friendships to authenticated;

-- ===== RLS =====
alter table public.profiles enable row level security;
alter table public.friendships enable row level security;
alter table public.messages enable row level security;

create policy "profiles: read" on public.profiles for select to authenticated using (true);
create policy "profiles: update own" on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

create policy "friendships: read own" on public.friendships for select to authenticated
  using (requester = auth.uid() or addressee = auth.uid());
create policy "friendships: send request" on public.friendships for insert to authenticated
  with check (
    requester = auth.uid()
    and status = 'pending'
    and coalesce((select p.settings->>'allow_requests' from public.profiles p where p.id = addressee), 'true') <> 'false'
  );
create policy "friendships: accept" on public.friendships for update to authenticated
  using (addressee = auth.uid() and status = 'pending') with check (status = 'accepted');
create policy "friendships: delete own" on public.friendships for delete to authenticated
  using (requester = auth.uid() or addressee = auth.uid());

create policy "messages: read own" on public.messages for select to authenticated
  using (sender = auth.uid() or recipient = auth.uid());
create policy "messages: send to friends" on public.messages for insert to authenticated
  with check (
    sender = auth.uid()
    and exists (
      select 1 from public.friendships f
      where f.status = 'accepted'
        and ((f.requester = auth.uid() and f.addressee = recipient)
          or (f.addressee = auth.uid() and f.requester = recipient))
    )
  );
create policy "messages: mark read" on public.messages for update to authenticated
  using (recipient = auth.uid()) with check (recipient = auth.uid());

-- ===== Realtime =====
alter publication supabase_realtime add table public.messages;
alter publication supabase_realtime add table public.friendships;

-- ===== Аватарки (Storage) =====
insert into storage.buckets (id, name, public) values ('avatars', 'avatars', true)
  on conflict (id) do nothing;

create policy "avatars: read" on storage.objects for select using (bucket_id = 'avatars');
create policy "avatars: insert own" on storage.objects for insert to authenticated
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "avatars: update own" on storage.objects for update to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "avatars: delete own" on storage.objects for delete to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

-- ===== Файлы и фото в чатах (Storage) =====
insert into storage.buckets (id, name, public, file_size_limit)
  values ('chat-files', 'chat-files', true, 27262976)
  on conflict (id) do nothing;

create policy "chat-files: read" on storage.objects for select using (bucket_id = 'chat-files');
create policy "chat-files: insert own" on storage.objects for insert to authenticated
  with check (bucket_id = 'chat-files' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "chat-files: delete own" on storage.objects for delete to authenticated
  using (bucket_id = 'chat-files' and (storage.foldername(name))[1] = auth.uid()::text);

-- ===== Сквозное шифрование: резервная копия приватного ключа =====
-- Хранится только в виде шифртекста (ключ шифрования выводится из пароля пользователя),
-- читать и менять запись может только её владелец.
create table public.key_backups (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  data text not null,
  updated_at timestamptz not null default now()
);
alter table public.key_backups enable row level security;
create policy "key_backups: read own" on public.key_backups for select to authenticated using (user_id = auth.uid());
create policy "key_backups: insert own" on public.key_backups for insert to authenticated with check (user_id = auth.uid());
create policy "key_backups: update own" on public.key_backups for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
