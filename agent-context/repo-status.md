# Repo Status

| Requirement | Current status |
| --- | --- |
| Repo shape | Pass - Single Vite, React, TypeScript landing-page app with Vercel-style `api/` handlers and a small Supabase migration footprint. |
| Branch and integration workflow | Pass - Local `main` tracks `origin/main`, and `AGENTS.md` defines branch, PR, validation, Supabase, and agent-context expectations. |
| README quality | Pass - README documents local setup, scripts, env vars, Supabase table contracts, API handlers, and deployment assumptions. |
| License | Missing - No `LICENSE` or `LICENCE` file found. |
| Agent guidance | Pass - Root `AGENTS.md` now documents repo shape, startup guidance, branch workflow, validation, Supabase rules, and agent-context metadata. |
| Session log | Pass - `agent-context/session-log/` stores one daily UTC file with appended session entries. |
| Ongoing work log | Pass - Carried-over active work lives under the top `Ongoing` heading in `agent-context/todo.md`. |
| Future ideas parking lot | Pass - `agent-context/future-ideas.md` exists and marks deferred ideas as non-roadmap references. |
| Technical docs placement | Pass - `docs/engineering/supabase-architecture.md` documents the current Supabase architecture and browser-write contract. |
| Cubid usage | Not applicable - No meaningful Cubid runtime integration found; only a logo asset is present. |
| Testing strategy | Partial - Vitest and Testing Library suites exist, but there is no documented testing strategy or coverage governance. |
| Local acceptance harness | Missing - Unit/component tests cover important flows, but there is no documented local end-to-end acceptance harness. |
| CI validation | Missing - No `.github/workflows/` directory found, so PR validation is not currently enforced by GitHub Actions. |
| Supabase access rules | Pass - Browser writes are explicitly acceptable and documented in README plus `docs/engineering/supabase-architecture.md`; the migration baseline covers the hosted public schema inventory from project `cmzhtpkjwquncfwmirtt`. |
| Environment and script conventions | Partial - `.env.example` documents required Supabase browser vars, optional Sentry, and OG image override. Multiple lockfiles remain until the package-manager cleanup todo standardizes on pnpm. |
| Disposable artifacts and git hygiene | Pass - No tracked build output or local dependency directory found during the initial audit. |
