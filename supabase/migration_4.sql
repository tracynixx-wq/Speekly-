-- Если базу уже создавали раньше: выполни этот файл один раз в Supabase -> SQL Editor.
-- Добавляет сквозное шифрование: публичные ключи и резервную копию приватного ключа.

alter table public.profiles add column if not exists public_key text;

revoke update on public.profiles from authenticated;
grant update (display_name, bio, avatar_url, banner_url, last_seen, public_key, settings) on public.profiles to authenticated;

-- шифртекст длиннее открытого текста
alter table public.messages drop constraint if exists messages_body_check;
alter table public.messages add constraint messages_body_check check (char_length(body) <= 24000);

-- зашифрованный файл на 16 байт больше исходного
update storage.buckets set file_size_limit = 27262976 where id = 'chat-files';

create table if not exists public.key_backups (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  data text not null,
  updated_at timestamptz not null default now()
);
alter table public.key_backups enable row level security;
create policy "key_backups: read own" on public.key_backups for select to authenticated using (user_id = auth.uid());
create policy "key_backups: insert own" on public.key_backups for insert to authenticated with check (user_id = auth.uid());
create policy "key_backups: update own" on public.key_backups for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
