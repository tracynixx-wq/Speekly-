-- Если базу уже создавали раньше: выполни этот файл один раз в Supabase -> SQL Editor.
-- Добавляет фото и файлы в чатах.

alter table public.messages add column if not exists file_url text;
alter table public.messages add column if not exists file_name text;
alter table public.messages add column if not exists file_type text;
alter table public.messages add column if not exists file_size bigint;

alter table public.messages alter column body set default '';
alter table public.messages drop constraint if exists messages_body_check;
alter table public.messages add constraint messages_body_check check (char_length(body) <= 4000);
alter table public.messages drop constraint if exists messages_body_or_file;
alter table public.messages add constraint messages_body_or_file check (char_length(body) > 0 or file_url is not null);

insert into storage.buckets (id, name, public, file_size_limit)
  values ('chat-files', 'chat-files', true, 26214400)
  on conflict (id) do nothing;

create policy "chat-files: read" on storage.objects for select using (bucket_id = 'chat-files');
create policy "chat-files: insert own" on storage.objects for insert to authenticated
  with check (bucket_id = 'chat-files' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "chat-files: delete own" on storage.objects for delete to authenticated
  using (bucket_id = 'chat-files' and (storage.foldername(name))[1] = auth.uid()::text);
