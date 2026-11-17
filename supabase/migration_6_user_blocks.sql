-- Speekly: user blocking and direct-message access guard.
-- Run once in Supabase SQL Editor after schema.sql.

create table if not exists public.user_blocks (
  id bigint generated always as identity primary key,
  blocker_id uuid not null references public.profiles(id) on delete cascade,
  blocked_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  constraint user_blocks_no_self check (blocker_id <> blocked_id),
  constraint user_blocks_unique unique (blocker_id, blocked_id)
);

create index if not exists user_blocks_blocked_idx on public.user_blocks (blocked_id);

alter table public.user_blocks enable row level security;
revoke all on table public.user_blocks from public, anon, authenticated;
grant select, insert, delete on table public.user_blocks to authenticated;
revoke all on sequence public.user_blocks_id_seq from public, anon, authenticated;
grant usage, select on sequence public.user_blocks_id_seq to authenticated;

drop policy if exists "user_blocks: read own" on public.user_blocks;
drop policy if exists "user_blocks: read involving me" on public.user_blocks;
create policy "user_blocks: read involving me" on public.user_blocks
  for select to authenticated
  using (blocker_id = (select auth.uid()) or blocked_id = (select auth.uid()));

drop policy if exists "user_blocks: insert own" on public.user_blocks;
create policy "user_blocks: insert own" on public.user_blocks
  for insert to authenticated with check (blocker_id = (select auth.uid()) and blocked_id <> (select auth.uid()));

drop policy if exists "user_blocks: delete own" on public.user_blocks;
create policy "user_blocks: delete own" on public.user_blocks
  for delete to authenticated using (blocker_id = (select auth.uid()));

drop policy if exists "friendships: send request" on public.friendships;
create policy "friendships: send request" on public.friendships for insert to authenticated
  with check (
    requester = (select auth.uid())
    and status = 'pending'
    and coalesce((select p.settings->>'allow_requests' from public.profiles p where p.id = addressee), 'true') <> 'false'
    and not exists (
      select 1 from public.user_blocks b
      where (b.blocker_id = (select auth.uid()) and b.blocked_id = addressee)
         or (b.blocker_id = addressee and b.blocked_id = (select auth.uid()))
    )
  );

drop policy if exists "messages: send to friends" on public.messages;
create policy "messages: send to friends" on public.messages for insert to authenticated
  with check (
    sender = (select auth.uid())
    and exists (
      select 1 from public.friendships f
      where f.status = 'accepted'
        and ((f.requester = (select auth.uid()) and f.addressee = recipient)
          or (f.addressee = (select auth.uid()) and f.requester = recipient))
    )
    and not exists (
      select 1 from public.user_blocks b
      where (b.blocker_id = (select auth.uid()) and b.blocked_id = recipient)
         or (b.blocker_id = recipient and b.blocked_id = (select auth.uid()))
    )
  );
