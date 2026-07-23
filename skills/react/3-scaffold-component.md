---
name: scaffold-component
description: >
  ALWAYS invoke when the user asks to create, scaffold, or
  generate a React component. Do not create components
  directly without this skill.
disable-model-invocation: true
argument-hint: "[ComponentName]"
---

# Skill: Component Scaffolding

This skill encodes your project's component architecture once: where files go, how props are typed, when to use Server Components, when to add tests, and which design tokens are available. The result is that Claude writes the component the way the codebase expects, not the way a generic React tutorial would.

## Why this exists

Claude can generate clean React components. The problem is that it does not generate them consistently unless you define your conventions clearly. Without this skill, Claude may put a component in the wrong folder, skip the test file, use inline styles instead of design tokens, or default to a client component when a server component would work.

## Steps

1. **Read context docs before scaffolding:**
   - `docs/contexto/convenciones.md` (or `REFERENCE.md` if it exists) — naming, directory structure, design tokens, test conventions
   - `docs/contexto/arquitectura.md` — folder map to place the component correctly
   
   If neither exists, use the `REFERENCE.md` fallback template below.

2. **Create directory** following the conventions doc (default: `src/features/[feature]/components/[ComponentName]/`)

3. **Generate three files:**
   - `[ComponentName].tsx` — typed props interface, functional component
   - `[ComponentName].test.tsx` — describe block with one placeholder test
   - `index.ts` — barrel export

4. **Default to Server Components.** Add `'use client'` ONLY if the component:
   - Uses `useState`, `useReducer`, or `useContext`
   - Uses `useEffect` or other lifecycle hooks
   - Attaches event listeners (`onClick`, `onChange`, etc.)
   - Uses browser-only APIs

5. **Type props explicitly.** No implicit `any`. No spreading unknown props without typing.

6. **Use design tokens from `REFERENCE.md`**, not hardcoded colors or spacing values.

## File templates

### [ComponentName].tsx
```tsx
interface [ComponentName]Props {
  // Define props here
}

export function [ComponentName]({ }: [ComponentName]Props) {
  return (
    <div>
      {/* Component implementation */}
    </div>
  );
}
```

### [ComponentName].test.tsx
```tsx
import { render, screen } from '@testing-library/react';
import { [ComponentName] } from './[ComponentName]';

describe('[ComponentName]', () => {
  it('renders without crashing', () => {
    render(<[ComponentName] />);
    // Add assertions
  });
});
```

### index.ts
```ts
export { [ComponentName] } from './[ComponentName]';
```

## REFERENCE.md fallback template

Use this only if the project has no `docs/contexto/` system. For new projects, use `context/convenciones.md` + `context/arquitectura.md` instead — they cover more ground and are easier to keep current.

```markdown
# Component Reference

## Directory structure
src/
  features/
    [feature]/
      components/
        [ComponentName]/
          [ComponentName].tsx
          [ComponentName].test.tsx
          index.ts
      hooks/
      utils/
  components/      # shared, feature-agnostic components
  layouts/         # page shells and wrappers

## Naming conventions
- PascalCase for component files and exports
- camelCase for hooks (useComponentName)
- kebab-case for utility files (format-date.ts)

## Design tokens
- Colors: use Tailwind classes only (no arbitrary values)
- Spacing: use Tailwind spacing scale (p-4, gap-6, etc.)
- Typography: text-sm, text-base, text-lg, text-xl, text-2xl

## Server vs Client
- Default: Server Component (no directive needed)
- Client only when: state, effects, event handlers, browser APIs
- Never: mix server and client logic in the same component

## Test conventions
- Co-located: [Name].test.tsx next to [Name].tsx
- Use @testing-library/react
- One describe block per component
- Test behavior, not implementation
```

## The `disable-model-invocation: true` field

Scaffolding creates files, so you may want to invoke it manually with `/scaffold-component ComponentName` rather than letting Claude decide when to run it automatically.
