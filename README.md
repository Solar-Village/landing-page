# SolarVillage Landing Page

Public landing page for SolarVillage at <https://solarvillage.xyz>.

The app is a Vite, React, and TypeScript site with shadcn/ui components, Tailwind CSS, Vitest tests, Vercel-style API handlers, and browser-side Supabase writes for public interest forms.

## Local Setup

Use pnpm for local work.

```sh
pnpm install
pnpm dev
```

The Vite dev server is configured in `vite.config.ts` for HTTP on port `8080`.

## Scripts

```sh
pnpm dev        # start the local dev server
pnpm test       # run Vitest
pnpm lint       # run ESLint
pnpm build      # build production assets
pnpm preview    # preview the production build
```

## Environment

Create `.env.local` from `.env.example` for local development.

| Variable | Required | Runtime | Purpose |
| --- | --- | --- | --- |
| `VITE_SUPABASE_URL` | Yes | Browser | Supabase project URL used by public signup forms. |
| `VITE_SUPABASE_ANON_KEY` | Yes | Browser | Supabase anon key used by public signup forms. |
| `VITE_SENTRY_DSN` | No | Browser | Enables Sentry monitoring when present. |
| `OG_IMAGE_PATH` | No | API handler | Overrides the image served by `api/og-image.ts`; defaults to `src/assets/solar-village-preview.png`. |

Do not place service-role keys or privileged Supabase credentials in browser-visible `VITE_*` variables.

## Supabase Contract

Browser-side Supabase writes are intentional for this landing page. The public forms use the anon key and should be protected by database constraints, RLS/write policies, and operational spam controls rather than by privileged browser credentials.

Current browser-written tables:

| Feature | Source | Table | Write shape |
| --- | --- | --- | --- |
| Village/community interest form | `src/components/SignUp.tsx` | `solar_village_signups` | Public insert. |
| Investor managed-service form | `src/components/SolarFundingInvesting.tsx` | `investor_signups` | Public insert; duplicate `email,signup_type` is treated as already submitted. |
| Solar Bond waitlist form | `src/components/SolarFundingInvesting.tsx` | `investor_signups` | Public insert; duplicate `email,signup_type` is treated as already submitted. |

Migrations live under `supabase/migrations/`. The current authoritative public-schema baseline is `supabase/migrations/20260519212500_remote_public_schema_baseline.sql`.

Public Supabase Storage image URLs in `src/data/newsReel.ts` point at the hosted SolarVillage Supabase project bucket `homepage-news`. Keep those assets public, or replace them with repo-local/public-hosted images before changing that bucket or project.

## API Handlers

- `api/health.ts` returns a no-store JSON health response.
- `api/og-image.ts` serves the default preview image or `OG_IMAGE_PATH`.

## Deployment

Deploy the static build output from `pnpm build` with the hosting provider. The current source layout also supports Vercel-style `api/` handlers for health and OG image routes.

Production/preview environments need the required Supabase browser variables configured in the hosting platform.
