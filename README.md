# SolarVillage Web

SolarVillage web apps live in this pnpm workspace.

## Apps

| App | Path | Purpose |
| --- | --- | --- |
| `@solar-village/landing-page` | `apps/landing-page` | Public landing page for <https://solarvillage.xyz>. |
| `@solar-village/hub` | `apps/hub` | SolarVillage dashboard hub app imported from `solardash-hub-fork`. |

Add future Vite apps as siblings under `apps/`.

## Local Setup

Use pnpm for local work.

```sh
pnpm install
pnpm dev
```

The root `pnpm dev` script currently starts the landing page app. The landing page dev server uses HTTP on port `8080`; the hub dev server uses HTTP on port `8081`.

## Scripts

Root scripts delegate to `@solar-village/landing-page`:

```sh
pnpm dev        # start the landing page dev server
pnpm test       # run landing page Vitest tests
pnpm lint       # run landing page ESLint
pnpm build      # build landing page production assets
pnpm preview    # preview the landing page production build
```

App-specific aliases are also available, such as `pnpm dev:landing-page`.
Hub aliases are also available, such as `pnpm dev:hub`, `pnpm lint:hub`, and `pnpm build:hub`.

## Environment

Landing page env files live with the app in `apps/landing-page/`. Create `apps/landing-page/.env.local` from `apps/landing-page/.env.example` for local development.

| Variable | Required | Runtime | Purpose |
| --- | --- | --- | --- |
| `VITE_SUPABASE_URL` | Yes | Browser | Supabase project URL used by public signup forms. |
| `VITE_SUPABASE_ANON_KEY` | Yes | Browser | Supabase anon key used by public signup forms. |
| `VITE_SENTRY_DSN` | No | Browser | Enables Sentry monitoring when present. |
| `OG_IMAGE_PATH` | No | API handler | Overrides the image served by the landing page OG image endpoint; defaults to `apps/landing-page/src/assets/solar-village-preview.png`. |

Do not place service-role keys or privileged Supabase credentials in browser-visible `VITE_*` variables.

## Supabase Contract

Browser-side Supabase writes are intentional for this landing page. The public forms use the anon key and should be protected by database constraints, RLS/write policies, and operational spam controls rather than by privileged browser credentials.

Current browser-written tables:

| Feature | Source | Table | Write shape |
| --- | --- | --- | --- |
| Village/community interest form | `apps/landing-page/src/components/SignUp.tsx` | `solar_village_signups` | Public insert. |
| Investor managed-service form | `apps/landing-page/src/components/SolarFundingInvesting.tsx` | `investor_signups` | Public insert; duplicate `email,signup_type` is treated as already submitted. |
| Solar Bond waitlist form | `apps/landing-page/src/components/SolarFundingInvesting.tsx` | `investor_signups` | Public insert; duplicate `email,signup_type` is treated as already submitted. |

Migrations live under `supabase/migrations/`. The current authoritative public-schema baseline is `supabase/migrations/20260519212500_remote_public_schema_baseline.sql`.

Public Supabase Storage image URLs in `apps/landing-page/src/data/newsReel.ts` point at the hosted SolarVillage Supabase project bucket `homepage-news`. Keep those assets public, or replace them with repo-local/public-hosted images before changing that bucket or project.

## API Handlers

The landing page app owns Vercel-style API handlers in `apps/landing-page/api/`:

- `apps/landing-page/api/health.ts` returns a no-store JSON health response.
- `apps/landing-page/api/og-image.ts` serves the default preview image or `OG_IMAGE_PATH`.

## Deployment

Deploy the landing page from `apps/landing-page` with `pnpm build`. Hosting platforms should use `apps/landing-page` as the project/root directory for the landing page.

Production/preview environments need the required Supabase browser variables configured in the hosting platform.
