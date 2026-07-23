---
name: review-pr
description: >
  ALWAYS invoke when the user asks to review code, review a PR,
  check a diff, or asks "what do you think of this code".
  Do not provide code review feedback without this skill.
---

# Skill: PR Review

This skill forces Claude to review against the project's actual conventions and return feedback in a format that is easy to act on. A one-off "review this PR" prompt usually produces generic feedback. This skill produces structured, severity-ranked, project-specific feedback.

## Why this exists

Without this skill, Claude reviews code against general best practices instead of your team's specific patterns. It may flag things that are intentional conventions in your codebase, or miss things that violate patterns only documented in `CONVENTIONS.md`.

A good PR review skill also separates correctness from style. Bugs and broken assumptions should appear before naming or formatting comments. Otherwise, serious issues get buried under low-stakes suggestions.

## Steps

1. **Read context docs first, in this order:**
   - `docs/contexto/convenciones.md` (or `CONVENTIONS.md` si no existe el sistema de contexto) — patrones, naming, prohibidos
   - `docs/contexto/decisiones.md` — no reviertas decisiones ya tomadas
   - `docs/contexto/errores-conocidos.md` — gotchas conocidos del proyecto
   
   If none of these files exist, fall back to the `CONVENTIONS.md` template below.

2. **Check the diff against these categories:**
   - **Correctness:** logic errors, off-by-one errors, race conditions, null/undefined handling
   - **Type safety:** implicit `any`, missing types, unsafe casts
   - **React patterns:** missing keys, incorrect dependency arrays, unnecessary re-renders, wrong client/server boundary
   - **State management:** unnecessary state, derived state stored as state, state that should be global
   - **CSS/styling:** arbitrary values instead of design tokens, inline styles, broken responsive behavior
   - **Accessibility:** missing aria labels, non-semantic HTML, keyboard navigation issues
   - **Performance:** missing memoization where needed, expensive operations in render, missing Suspense boundaries
   - **Conventions:** naming, file location, export style, test co-location (per CONVENTIONS.md)

3. **For each issue found:**
   - File and line
   - What is wrong (one sentence)
   - Suggested fix (code, not prose)

4. **Severity:** `must fix` | `should fix` | `nit`

5. **If nothing found in a category, skip it. Do not pad the review.**

## Output format

```
## Review: [PR title or description]

### Must fix
**[file]:[line]** — [what is wrong]
```suggestion
[corrected code]
```

### Should fix
**[file]:[line]** — [what is wrong]
```suggestion
[corrected code]
```

### Nits
- **[file]:[line]** — [one-line suggestion]

### No issues found in
- Accessibility
- Performance
```

## CONVENTIONS.md fallback template

Use this only if the project has no `docs/contexto/convenciones.md`. For new projects, use the context system instead — it covers more ground and stays better maintained.

```markdown
# Project Conventions

## Component location
- Feature components: src/features/[feature]/components/[Name]/
- Shared components: src/components/[Name]/
- Layouts: src/layouts/[Name]/

## Client vs Server Components
- Default: Server Component
- Client boundary: add 'use client' only at the lowest possible level
- Never put 'use client' on a layout or page unless unavoidable

## State
- Local UI state: useState
- Shared UI state (modals, sidebar): Zustand store
- Server state: React Query / TanStack Query
- Never store derived data in state

## TypeScript
- Explicit return types on all exported functions
- No implicit any
- Prefer interface over type for component props
- Use zod for runtime validation at API boundaries

## CSS
- Tailwind classes only; no arbitrary values (no text-[13px])
- No inline styles
- Responsive: mobile-first (sm: md: lg:)
- Dark mode via dark: variant

## Testing
- Co-located: [Name].test.tsx next to [Name].tsx
- Test behavior, not implementation
- Mock at the module boundary, not inside components
- No snapshot tests

## Imports
- Absolute imports via @ alias (import { Button } from '@/components/Button')
- No relative imports beyond one level up (../../ is a smell)
- Group: external deps | internal | relative
```

## Why "skip empty categories"

If you ask Claude to review every category, it may invent weak comments just to satisfy the checklist. Telling it to skip empty categories reduces padding. The last line of the Steps is doing real work.

## For larger teams

This skill works best as a pre-review step rather than a replacement for human review. It catches the mechanical issues so human reviewers can focus on design decisions and business logic.
