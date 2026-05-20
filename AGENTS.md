# Agent Guide

## Repo Shape

This repository is a pnpm workspace for SolarVillage web apps.

- Landing page app under `apps/landing-page/`
- Hub app under `apps/hub/`
- Public pages and sections under `apps/landing-page/src/pages/` and `apps/landing-page/src/components/`
- Browser-side Supabase writes through `apps/landing-page/src/lib/supabase.ts`
- Vercel-style API handlers in `apps/landing-page/api/`
- Supabase migrations in `supabase/migrations/`
- Agent control-plane notes in `agent-context/`

## Startup

Before making changes:

1. Check `git status --short --branch`.
2. Read `agent-context/todo.md` and the current/recent daily files in `agent-context/session-log/`.
3. Keep changes scoped to the active todo unless the user explicitly broadens the session.

## Branch And Publish Workflow

The current checkout tracks `origin/main`. Use pull-request based changes unless the user explicitly asks for a direct push.

For publish work:

- Create a focused branch.
- Commit only the intended files.
- Push and open a PR against the requested base branch.
- Wait for validation before treating the work as done.

## Package Manager

This repo is a pnpm workspace with apps declared in `pnpm-workspace.yaml`. Root default scripts delegate to the landing-page app with `pnpm --filter @solar-village/landing-page ...`. Use `:hub` scripts or `pnpm --filter @solar-village/hub ...` for the hub app.

Use pnpm for installs, scripts, and lockfile updates. Do not add npm, Yarn, Bun, or other package-manager lockfiles.

## Validation

Prefer the narrowest validation that proves the change:

- `pnpm test` for component, route, API handler, and behavior changes.
- `pnpm lint` for TypeScript and lint-sensitive changes.
- `pnpm build` for release-facing frontend changes.

If dependencies are not installed yet, document that explicitly in the session log before stopping.

## Supabase Rules

Browser-side Supabase writes are acceptable for this landing page. Treat them as intentional product behavior, not as an automatic architecture violation.

Remote Supabase modifications require explicit human consent before running them. This includes push, sync, link-and-push, migration repair, SQL execution against hosted databases, or any other hosted project write. Read-only remote inspection is allowed. Local Supabase can be reset when needed without explicit consent.

Use the `solar-village` Colima profile for local Docker/Supabase work. When the user asks to run dev, start both local Supabase and the Vite dev server, and leave both running for the user. Otherwise, stop local Supabase immediately when finished and at the end of each session unless the user explicitly asks to keep it running.

Local dev ports:

- Landing page: `http://localhost:8080/`
- Hub: `http://localhost:8081/`

Still keep the Supabase contract explicit:

- Document every browser-written table.
- Keep migrations aligned with the tables used by the UI.
- Keep public insert/upsert assumptions visible in docs or migrations.
- Do not add privileged service-role behavior to browser code.

Current browser-write features:

- Village/community interest form in `apps/landing-page/src/components/SignUp.tsx`, writing to `solar_village_signups`.
- Investor managed-service and Solar Bond waitlist forms in `apps/landing-page/src/components/SolarFundingInvesting.tsx`, writing to `investor_signups`.

## Agent Context Files

Use `agent-context/todo.md` as the active roadmap. Keep unstarted todos grouped under thematic headings, without per-todo metadata tags. Keep carried-over active work under the top `Ongoing` heading with what remains to complete.

Use one session-log file per UTC day in `agent-context/session-log/`, named `YYYY-MM-DD.md`. Append new completed session-log entries to the bottom of that day's file instead of creating a new file. A coding session means one human prompt that starts work and is completed. Memory compaction does not start a new session, and steering or clarification from the user during the same task usually stays in the same session. If the user asks for more than one todo in one go, complete each todo separately: append a session-log entry and commit after each todo before starting the next one.

Daily session-log files should include file-level frontmatter with `date`, `timezone: UTC`, `branch`, and `head`. Each appended session entry should include metadata with at least `timestamp`, `branch`, `head`, `theme`, and `status` when relevant. All timestamps must be UTC ISO-8601 values ending in `Z`.

Do not use `agent-context/ongoing/` as a folder. At the beginning of a session, leave the active todo in place while working. At the end of the session, move the todo card either into the daily session-log entry if complete, or into the `Ongoing` section of `agent-context/todo.md` with notes on what has been done and what remains.

Use `agent-context/future-ideas.md` only as a deferred-reference parking lot, not as an active roadmap.
