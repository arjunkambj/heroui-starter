# Repository Guidelines

## Project Structure & Module Organization
- `src/app` holds App Router routes; the `(app)` group isolates shell-level layouts while `marketing/` serves the public marketing flow.
- Reusable UI lives under `src/components`, with layout primitives in `src/components/layout/` and the shared `HeroUIProvider.tsx` wiring HeroUI and theme context.
- State is centralized in `src/store/atoms.ts` (Jotai) and shared configuration in `src/constants/`.
- Styling utilities sit in `src/styles/`, with Tailwind v4 tokens configured through `components.json`. Static assets belong in `public/`.
- Import shared code through the path alias, for example:
  ```ts
  import SidebarToggle from "@/components/layout/SidebarToggle";
  ```

## Build, Test, and Development Commands
- `npm run dev` (or `bun run dev`) starts the Next.js dev server with Turbopack.
- `npm run build` builds the production bundle; run before shipping infra changes.
- `npm run start` serves the production build locally for smoke checks.
- `npm run lint` executes the Next + React ESLint ruleset.
- `npm run check-types` performs a strict TypeScript pass without emitting files.

## Coding Style & Naming Conventions
- Write idiomatic React + TypeScript components; favor named exports that mirror the file name (`SidebarContent.tsx` → `SidebarContent`).
- Stick to 2-space indentation, single quotes in JSX props, and descriptive prop names.
- Organize Tailwind classes by layout → spacing → color, and extract variants with `class-variance-authority` when styles branch.
- Keep hooks in `src/hooks/` prefixed with `use`; colocate module-specific utilities under `src/lib/` when they are shared.
- Run `npm run lint && npm run check-types` before opening a PR.

## Testing Guidelines
- Automated tests are not scaffolded yet; when adding a harness, create `npm run test` and place specs alongside the code as `*.test.ts(x)`.
- Document manual verification steps in the PR body until automated coverage lands.
- Prioritize component-level checks (HeroUI interactions, Jotai state) and smoke-test marketing routes via `npm run start`.

## Commit & Pull Request Guidelines
- Follow the existing history: use short, imperative summaries (e.g., `Add marketing sidebar toggle`) and detail rationale plus links in the body.
- Group related changes per commit; avoid mixing refactors with feature work.
- PRs should include: purpose, notable implementation choices, testing evidence (commands run, screenshots for UI tweaks), and any follow-up tasks.
- Tag reviewers who own the touched area (`app/`, `components/`, etc.) and call out new dependencies or required env vars explicitly.
