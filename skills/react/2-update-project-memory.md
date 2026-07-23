---
name: update-project-memory
description: >
  ALWAYS invoke after completing any task that adds, removes,
  renames, or relocates files, components, routes, API endpoints,
  dependencies, or design tokens. Also invoke when project
  conventions change. Do not skip this after structural changes.
---

# Skill: Project Memory

This skill maintains a current project index (`PROJECT-STATE.md`) and updates only the parts that changed. It prevents the "stale reference" problem where other skills reason from outdated structure.

## Why this exists

Most skills that reference project structure — scaffolding, PR review, architecture — read from a reference file. That reference goes stale the moment you move a component or rename a route. A project memory skill keeps the index current so other skills never reason from outdated information.

The problem is simple: your reference file says `UserProfile` lives in `src/features/user/`, but the component moved three weeks ago. Now your scaffolding skill writes to a dead directory. Your PR review skill checks against an outdated convention.

## Steps

1. **Read `PROJECT-STATE.md`** (create it if it does not exist with the structure below)

2. **Diff what changed** against what is currently documented

3. **Update ONLY the sections that changed:**
   - `Components:` name, path, client/server, purpose (one line)
   - `Routes:` path, page component, layout
   - `API endpoints:` path, method, what it does
   - `Dependencies:` package, why it is here, version
   - `Design tokens:` new/removed tokens in Tailwind config
   - `Conventions:` any pattern that changed

4. **Timestamp the update** at the top of the file

5. **Do NOT rewrite sections that did not change**

6. **Keep each entry to one line.** This is an index, not documentation.

7. **If the project uses the context system (`docs/contexto/`), also update:**
   - `arquitectura.md` — if the stack, folder structure, or integrations changed
   - `convenciones.md` — if a naming pattern, prohibited pattern, or test convention changed
   - `decisiones.md` — if a new technical decision was made or an old one was superseded
   - `glosario.md` — if a new entity or domain term was introduced
   
   PROJECT-STATE.md is the *structural index*; the context docs are the *reasoning layer*. Both must stay in sync.

## PROJECT-STATE.md template

```markdown
# Project State
Last updated: [timestamp]

## Components
- UserProfile | src/features/user/components/UserProfile/ | client | displays user avatar and name
- SearchBar | src/components/SearchBar/ | client | debounced search input with suggestions
- DashboardLayout | src/layouts/DashboardLayout/ | server | main app shell with sidebar

## Routes
- /dashboard | DashboardPage | DashboardLayout
- /user/:id | UserProfilePage | DashboardLayout
- /api/search | SearchPage | none

## API Endpoints
- GET /api/users/:id | fetch user profile data
- POST /api/search | search across components and routes
- PUT /api/user/preferences | update user preferences

## Dependencies
- zustand | global UI state (modal open/close, sidebar) | 4.5.0
- react-query | server state, caching, background refetch | 5.0.0
- zod | API response validation | 3.22.0

## Design Tokens
- --color-primary: #6366f1 (Tailwind: indigo-500)
- --color-surface: #f8fafc (Tailwind: slate-50)
- --spacing-section: 2rem

## Conventions
- Components default to Server Components; add 'use client' only for interactivity
- Feature folders: src/features/[feature]/components/[Name]/
- Barrel exports via index.ts in every component folder
- Tests co-located: [ComponentName].test.tsx next to component
```

## The "one line" rule

Without it, Claude tends to turn the project index into full documentation. That sounds helpful until the file becomes too long to scan and too expensive to keep current. Keep it as an index.

## This file as a handoff artifact

A technical writer or onboarding engineer can expand the index into documentation without reverse-engineering the repo from scratch. Keep it accurate and it pays dividends beyond AI tooling.
