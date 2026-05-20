# Supabase Architecture

This document records the landing-page repo's current Supabase contract. The hosted project inspected for this pass is:

```text
project_ref: cmzhtpkjwquncfwmirtt
project_name: SolarVillageProd
schema_inspected_at: 2026-05-19T21:25:00Z
inspection_command: supabase gen types typescript --project-id cmzhtpkjwquncfwmirtt --schema public
```

Remote Supabase writes require explicit human consent before they run. The inspection above was read-only. The CLI `db dump` and `db pull` paths were unavailable in this environment because they require Docker, so the baseline migration is reconstructed from the generated remote public-schema types plus the app's documented browser-write policy.

## Source Of Truth

The repo-local migration baseline is intended to be the authoritative public schema definition for this app:

```text
supabase/migrations/20260519212500_remote_public_schema_baseline.sql
```

The previous narrow lead-form migrations were replaced because the hosted public schema contains the broader SolarVillage app model, not only the landing-page forms.

Before applying this migration to any hosted project, get explicit human approval and verify the hosted database state with a read-only schema pull or dashboard review.

## Landing Page Runtime Contract

The public landing page only writes to lead-capture tables from browser code:

| Feature | Source | Table | Operation |
| --- | --- | --- | --- |
| Village/community interest form | `src/components/SignUp.tsx` | `solar_village_signups` | Insert |
| Investor managed-service form | `src/components/SolarFundingInvesting.tsx` | `investor_signups` | Insert; duplicate `email,signup_type` is treated as already submitted |
| Solar Bond waitlist form | `src/components/SolarFundingInvesting.tsx` | `investor_signups` | Insert; duplicate `email,signup_type` is treated as already submitted |

Browser-side Supabase writes are acceptable for this landing page. They must use the anon key only. Do not add service-role keys or privileged Supabase credentials to browser-visible `VITE_*` variables.

## Public Schema Inventory

The current hosted public schema includes these tables:

| Table | Purpose | Landing-page use |
| --- | --- | --- |
| `cron_logs` | Operational cron/status notes. | Not used by the current landing page. |
| `dashboards` | Dashboard catalog keyed by role/access. | Not used by the current landing page. |
| `investor_preferences` | Authenticated investor preference profile. | Not used by public landing-page forms. |
| `investor_signups` | Public lead capture for managed-service investors and Solar Bond waitlist users. | Written by `SolarFundingInvesting`. |
| `invites` | Village/member invite workflow. | Not used by the current landing page. |
| `membership_requests` | Authenticated request workflow for village membership. | Not used by the current landing page. |
| `profiles` | Authenticated user profile fields. | Not used by the current landing page. |
| `role_dashboard_access` | Mapping between app roles and dashboards. | Not used by the current landing page. |
| `solar_village_signups` | Public lead capture for village/community interest. | Written by `SignUp`. |
| `user_roles` | App-level role assignments. | Not used by the current landing page. |
| `users` | Public app user mirror of `auth.users`. | Not used by the current landing page. |
| `village_memberships` | User-to-village membership and role records. | Not used by the current landing page. |
| `village_meters` | Meter assignment/provisioning records. | Not used by the current landing page. |
| `villages` | Village records. | Not used by the current landing page. |

The current hosted public schema includes one view:

| View | Purpose |
| --- | --- |
| `user_aggregate` | Aggregates user profile, roles, investor preferences, and village memberships into one read model. |

The current hosted public schema includes these functions:

| Function | Purpose |
| --- | --- |
| `get_user_role(_user_id uuid)` | Returns the highest-priority app role for a user. |
| `has_role(_user_id uuid, _role app_role)` | Checks whether a user has a role. |
| `is_village_operator(_user_id uuid, _village_id uuid)` | Checks whether a user is an active operator for a village. |

The current hosted public schema includes these enums:

| Enum | Values |
| --- | --- |
| `app_role` | `admin`, `consumer`, `agent`, `operator`, `investor`, `platform` |
| `village_role` | `consumer`, `agent`, `operator` |

## Lead Capture Tables

### `investor_signups`

Used by `src/components/SolarFundingInvesting.tsx`.

Key contract:

- `id` is a generated numeric primary key.
- `signup_type` is either `managed_service` or `solar_bond_waitlist`.
- `(email, signup_type)` is unique so duplicate submissions do not create multiple rows.
- `investment_preference` is one of `individual_projects`, `solar_bond`, or `both` when present.
- Public clients may insert.
- Public clients should not have broad read access.

### `solar_village_signups`

Used by `src/components/SignUp.tsx`.

Key contract:

- `id` is a UUID primary key in the hosted schema.
- Required fields match the form payload: first name, last name, role, phone number, email, village name, state, and household count.
- `household_count` must be at least 5.
- `ip_addresses` stores the optional IP values collected before insert.
- Public clients may insert.
- Public clients should not have broad read access.

## Authenticated App Tables

The public schema also contains authenticated app tables for dashboards, user profiles, roles, villages, memberships, meters, invites, and investor preferences. They are included in the baseline so the repo can recreate the current hosted schema from source control.

These tables are not currently exercised by the public landing page, so changes to their behavior should be validated against the authenticated app that uses `https://app.solarvillage.xyz`, not only this landing-page repo.

## RLS And Policy Intent

The baseline enables RLS on all public tables and encodes the policy intent needed by this repo:

- Public insert for `solar_village_signups`.
- Public insert for `investor_signups`.
- No public broad reads for lead-capture tables.
- Authenticated users can read/update their own profile and preference records.
- Authenticated users can read their own roles, village memberships, and membership requests.
- Authenticated users can create their own membership requests.
- Authenticated users can read dashboard and village catalog records.

Because the remote schema was available through generated types rather than a full `pg_dump`, policy names and exact hosted policy definitions should be verified before applying the baseline to production.

## Storage Asset Ownership

`src/data/newsReel.ts` references public Supabase Storage objects under:

```text
https://cmzhtpkjwquncfwmirtt.supabase.co/storage/v1/object/public/homepage-news/
```

Those assets are treated as SolarVillage-owned public homepage assets. If the Supabase project, bucket, or object paths change, either:

- migrate the objects and update `src/data/newsReel.ts`, or
- replace the URLs with repo-local assets under `public/` or `src/assets/`.

Do not leave the news reel dependent on private or expiring storage URLs.

## Maintenance Procedure

For future schema maintenance:

1. Inspect the remote schema read-only.
2. Update `supabase/migrations/` so it can recreate the intended schema from source control.
3. Update this document when table/function/policy intent changes.
4. Get explicit human consent before any remote Supabase write, including push, sync, migration repair, or SQL execution.
