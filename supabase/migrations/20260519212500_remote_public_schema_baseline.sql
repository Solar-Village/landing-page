-- SolarVillage public schema baseline.
-- Reconstructed from the hosted Supabase project cmzhtpkjwquncfwmirtt on 2026-05-19
-- using `supabase gen types typescript --project-id cmzhtpkjwquncfwmirtt --schema public`.
--
-- Remote write operations require explicit human consent. This file is source
-- control only until a human approves applying it to a hosted Supabase project.

create schema if not exists extensions;
create extension if not exists pgcrypto with schema extensions;

do $$
begin
  create type public.app_role as enum (
    'admin',
    'consumer',
    'agent',
    'operator',
    'investor',
    'platform'
  );
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type public.village_role as enum (
    'consumer',
    'agent',
    'operator'
  );
exception
  when duplicate_object then null;
end $$;

create table if not exists public.cron_logs (
  id uuid primary key default extensions.gen_random_uuid(),
  timestamp timestamptz,
  status text,
  note text
);

create table if not exists public.dashboards (
  id uuid primary key default extensions.gen_random_uuid(),
  key text not null unique,
  label text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key default extensions.gen_random_uuid(),
  user_id uuid not null unique references public.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  phone text,
  address text,
  city text,
  state text,
  zip_code text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.investor_preferences (
  id uuid primary key default extensions.gen_random_uuid(),
  user_id uuid not null unique references public.users(id) on delete cascade,
  investment_type text,
  budget text,
  timeline text,
  expected_returns text,
  microgrid_types text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.villages (
  id uuid primary key default extensions.gen_random_uuid(),
  name text not null,
  location text,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.village_meters (
  id uuid primary key default extensions.gen_random_uuid(),
  village_id uuid not null references public.villages(id) on delete cascade,
  serial_number text not null unique,
  status text not null default 'available',
  assigned_user_id uuid references public.users(id) on delete set null,
  provisioned_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.village_memberships (
  id uuid primary key default extensions.gen_random_uuid(),
  village_id uuid not null references public.villages(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  role public.village_role not null,
  status text not null default 'active',
  meter_id uuid references public.village_meters(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (village_id, user_id)
);

create table if not exists public.membership_requests (
  id uuid primary key default extensions.gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  village_id uuid references public.villages(id) on delete set null,
  proposed_village_name text,
  proposed_village_location text,
  role public.village_role not null,
  status text not null default 'pending',
  reviewed_by uuid references public.users(id) on delete set null,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.invites (
  id uuid primary key default extensions.gen_random_uuid(),
  email text not null,
  village_id uuid references public.villages(id) on delete cascade,
  role public.village_role not null,
  token text not null unique default encode(extensions.gen_random_bytes(24), 'hex'),
  invited_by uuid not null references public.users(id) on delete cascade,
  redeemed_by uuid references public.users(id) on delete set null,
  redeemed_at timestamptz,
  expires_at timestamptz not null default (now() + interval '7 days'),
  created_at timestamptz not null default now()
);

create table if not exists public.user_roles (
  id uuid primary key default extensions.gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

create table if not exists public.role_dashboard_access (
  role public.app_role not null,
  dashboard_id uuid not null references public.dashboards(id) on delete cascade,
  primary key (role, dashboard_id)
);

create table if not exists public.investor_signups (
  id bigint generated by default as identity primary key,
  signup_type text not null check (signup_type in ('managed_service', 'solar_bond_waitlist')),
  email text not null,
  full_name text,
  organization text,
  geographic_area text,
  investment_preference text check (investment_preference in ('individual_projects', 'solar_bond', 'both')),
  ticket_size text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (email, signup_type)
);

create table if not exists public.solar_village_signups (
  id uuid primary key default extensions.gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  role text not null,
  phone_number text not null,
  email text not null,
  village_name text not null,
  state text not null,
  household_count integer not null,
  ip_addresses text[] not null default '{}'::text[],
  created_at timestamptz not null default now(),
  check (household_count >= 5)
);

create index if not exists cron_logs_timestamp_idx
  on public.cron_logs (timestamp);

create index if not exists investor_preferences_user_id_idx
  on public.investor_preferences (user_id);

create index if not exists investor_signups_email_idx
  on public.investor_signups (email);

create index if not exists investor_signups_signup_type_idx
  on public.investor_signups (signup_type);

create index if not exists invites_email_idx
  on public.invites (email);

create index if not exists invites_token_idx
  on public.invites (token);

create index if not exists membership_requests_user_id_idx
  on public.membership_requests (user_id);

create index if not exists membership_requests_village_id_idx
  on public.membership_requests (village_id);

create index if not exists profiles_user_id_idx
  on public.profiles (user_id);

create index if not exists solar_village_signups_email_idx
  on public.solar_village_signups (email);

create index if not exists solar_village_signups_village_name_idx
  on public.solar_village_signups (village_name);

create index if not exists solar_village_signups_state_idx
  on public.solar_village_signups (state);

create index if not exists user_roles_user_id_idx
  on public.user_roles (user_id);

create index if not exists village_memberships_user_id_idx
  on public.village_memberships (user_id);

create index if not exists village_memberships_village_id_idx
  on public.village_memberships (village_id);

create index if not exists village_meters_serial_number_idx
  on public.village_meters (serial_number);

create index if not exists village_meters_village_id_idx
  on public.village_meters (village_id);

create or replace view public.user_aggregate as
select
  u.id as user_id,
  u.email,
  p.display_name,
  p.avatar_url,
  p.phone,
  p.address,
  p.city,
  p.state,
  p.zip_code,
  (
    select coalesce(jsonb_agg(ur.role order by ur.role), '[]'::jsonb)
    from public.user_roles ur
    where ur.user_id = u.id
  ) as roles,
  (
    select to_jsonb(ip.*)
    from public.investor_preferences ip
    where ip.user_id = u.id
    limit 1
  ) as investor_preferences,
  (
    select coalesce(
      jsonb_agg(
        jsonb_build_object(
          'id', v.id,
          'name', v.name,
          'location', v.location,
          'status', v.status,
          'role', vm.role,
          'membership_status', vm.status,
          'meter_id', vm.meter_id
        )
        order by v.name
      ),
      '[]'::jsonb
    )
    from public.village_memberships vm
    join public.villages v on v.id = vm.village_id
    where vm.user_id = u.id
  ) as villages,
  now() as refreshed_at
from public.users u
left join public.profiles p on p.user_id = u.id;

create or replace function public.get_user_role(_user_id uuid)
returns public.app_role
language sql
stable
security definer
set search_path = public
as $$
  select role
  from public.user_roles
  where user_id = _user_id
  order by
    case role
      when 'admin' then 1
      when 'platform' then 2
      when 'operator' then 3
      when 'agent' then 4
      when 'investor' then 5
      when 'consumer' then 6
      else 99
    end
  limit 1;
$$;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  );
$$;

create or replace function public.is_village_operator(_user_id uuid, _village_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.village_memberships
    where user_id = _user_id
      and village_id = _village_id
      and role = 'operator'
      and status = 'active'
  );
$$;

alter table public.cron_logs enable row level security;
alter table public.dashboards enable row level security;
alter table public.investor_preferences enable row level security;
alter table public.investor_signups enable row level security;
alter table public.invites enable row level security;
alter table public.membership_requests enable row level security;
alter table public.profiles enable row level security;
alter table public.role_dashboard_access enable row level security;
alter table public.solar_village_signups enable row level security;
alter table public.user_roles enable row level security;
alter table public.users enable row level security;
alter table public.village_memberships enable row level security;
alter table public.village_meters enable row level security;
alter table public.villages enable row level security;

drop policy if exists "public can create investor signups" on public.investor_signups;
create policy "public can create investor signups"
  on public.investor_signups
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "public can create village signups" on public.solar_village_signups;
create policy "public can create village signups"
  on public.solar_village_signups
  for insert
  to anon, authenticated
  with check (true);

grant usage on schema public to anon, authenticated;
grant insert on public.solar_village_signups to anon, authenticated;
grant insert on public.investor_signups to anon, authenticated;
grant usage, select on sequence public.investor_signups_id_seq to anon, authenticated;

drop policy if exists "users can read own user row" on public.users;
create policy "users can read own user row"
  on public.users
  for select
  to authenticated
  using (id = auth.uid());

drop policy if exists "users can read own profile" on public.profiles;
create policy "users can read own profile"
  on public.profiles
  for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "users can update own profile" on public.profiles;
create policy "users can update own profile"
  on public.profiles
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists "users can read own roles" on public.user_roles;
create policy "users can read own roles"
  on public.user_roles
  for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "users can read own investor preferences" on public.investor_preferences;
create policy "users can read own investor preferences"
  on public.investor_preferences
  for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "users can write own investor preferences" on public.investor_preferences;
create policy "users can write own investor preferences"
  on public.investor_preferences
  for all
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists "users can read own memberships" on public.village_memberships;
create policy "users can read own memberships"
  on public.village_memberships
  for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "users can read own membership requests" on public.membership_requests;
create policy "users can read own membership requests"
  on public.membership_requests
  for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "users can create own membership requests" on public.membership_requests;
create policy "users can create own membership requests"
  on public.membership_requests
  for insert
  to authenticated
  with check (user_id = auth.uid());

drop policy if exists "authenticated users can read dashboards" on public.dashboards;
create policy "authenticated users can read dashboards"
  on public.dashboards
  for select
  to authenticated
  using (true);

drop policy if exists "authenticated users can read villages" on public.villages;
create policy "authenticated users can read villages"
  on public.villages
  for select
  to authenticated
  using (true);
