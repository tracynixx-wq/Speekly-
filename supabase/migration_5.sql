-- Speekly security and query-planning hardening.
-- Apply once to databases created from schema.sql before this hardening was added.
revoke execute on function public.handle_new_user() from public, anon, authenticated;

create index if not exists friendships_requester_idx on public.friendships (requester);
create index if not exists friendships_addressee_idx on public.friendships (addressee);

drop policy if exists "profiles: update own" on public.profiles;
create policy "profiles: update own" on public.profiles for update to authenticated
  using (id = (select auth.uid())) with check (id = (select auth.uid()));

drop policy if exists "friendships: read own" on public.friendships;
create policy "friendships: read own" on public.friendships for select to authenticated
  using (requester = (select auth.uid()) or addressee = (select auth.uid()));

drop policy if exists "friendships: send request" on public.friendships;
create policy "friendships: send request" on public.friendships for insert to authenticated
  with check (
    requester = (select auth.uid())
    and status = 'pending'
    and coalesce((select p.settings->>'allow_requests' from public.profiles p where p.id = addressee), 'true') <> 'false'
  );

drop policy if exists "friendships: accept" on public.friendships;
create policy "friendships: accept" on public.friendships for update to authenticated
  using (addressee = (select auth.uid()) and status = 'pending')
  with check (addressee = (select auth.uid()) and status = 'accepted');

drop policy if exists "friendships: delete own" on public.friendships;
create policy "friendships: delete own" on public.friendships for delete to authenticated
  using (requester = (select auth.uid()) or addressee = (select auth.uid()));

drop policy if exists "messages: read own" on public.messages;
create policy "messages: read own" on public.messages for select to authenticated
  using (sender = (select auth.uid()) or recipient = (select auth.uid()));

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
  );

drop policy if exists "messages: mark read" on public.messages;
create policy "messages: mark read" on public.messages for update to authenticated
  using (recipient = (select auth.uid()))
  with check (recipient = (select auth.uid()));

drop policy if exists "key_backups: read own" on public.key_backups;
create policy "key_backups: read own" on public.key_backups for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "key_backups: insert own" on public.key_backups;
create policy "key_backups: insert own" on public.key_backups for insert to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "key_backups: update own" on public.key_backups;
create policy "key_backups: update own" on public.key_backups for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));
