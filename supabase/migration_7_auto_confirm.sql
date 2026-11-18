-- Speekly: подтверждать только внутренние username-логины приложения.
-- Не отключает подтверждение для обычных email-аккаунтов в этом Supabase project.
-- Выполняется один раз в Supabase SQL Editor, если Confirm email оставлен включённым.

create or replace function public.auto_confirm_speekly_user()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog
as $$
begin
  if new.email is not null
     and lower(new.email) like '%@speekly.app'
     and new.email_confirmed_at is null then
    new.email_confirmed_at := pg_catalog.now();
  end if;
  return new;
end;
$$;

revoke all on function public.auto_confirm_speekly_user() from public, anon, authenticated;

drop trigger if exists speekly_auto_confirm on auth.users;
create trigger speekly_auto_confirm
  before insert on auth.users
  for each row
  execute function public.auto_confirm_speekly_user();
