-- Если базу уже создавали раньше: выполни этот файл один раз в Supabase -> SQL Editor.
-- Добавляет обложку, «был(а) в сети» и значок подтверждённого аккаунта.

alter table public.profiles add column if not exists banner_url text;
alter table public.profiles add column if not exists last_seen timestamptz;
alter table public.profiles add column if not exists verified boolean not null default false;

revoke update on public.profiles from authenticated;
grant update (display_name, bio, avatar_url, banner_url, last_seen, settings) on public.profiles to authenticated;

-- Синяя галочка рядом с именем (выдаётся только отсюда, из приложения её не поставить):
-- update public.profiles set verified = true where username = 'твой_ник';
