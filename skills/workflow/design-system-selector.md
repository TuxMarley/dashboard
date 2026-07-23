---
name: design-system-selector
description: Maps a design brief to the right foundation — an official design-system package (Fluent, Material, Carbon, Polaris, Primer, GOV.UK, USWDS, Radix, shadcn) or an honest native-CSS implementation of an aesthetic (glassmorphism, bento, brutalism, editorial). Use right after the brief-inference-and-dials skill, before writing any component code. Prevents reinventing CSS for systems that already have an official package, and prevents mislabeling an aesthetic as an "official" system that doesn't exist.
---

# Design System Selector

Do not invent CSS for things that have an official package. Do not pretend an aesthetic trend is an official design system. This skill routes the brief to the correct foundation before any component gets written.

## Step 1: Does the brief map to a real design system?

| Brief reads as… | Reach for | Why |
|---|---|---|
| Microsoft / enterprise SaaS / dashboards | `@fluentui/react-components` or `@fluentui/web-components` | Official Fluent UI, Microsoft tokens, accessibility done |
| Google-ish UI, Material-flavored product | `@material/web` + Material 3 tokens | Official, theme-able via Material Theming |
| IBM-style B2B / enterprise analytics | `@carbon/react` + `@carbon/styles` | Official Carbon, mature data-density patterns |
| Shopify app surfaces | Polaris web components (`polaris.js`) | Required for Shopify admin UI |
| Atlassian / Jira-style product | `@atlaskit/*` + `@atlaskit/tokens` | Official Atlassian DS |
| GitHub-style devtool / community page | `@primer/css` or `@primer/react-brand` | Official Primer; Brand variant for marketing |
| Public-sector UK service | `govuk-frontend` | Legally / regulatorily expected |
| US public-sector / trust-first | `uswds` | Same |
| Fast local-business / agency MVP | Bootstrap 5.3 | Boring, fast, works |
| Modern accessible React foundation | `@radix-ui/themes` | Primitives + polished theme |
| Modern SaaS where you own the components | shadcn/ui (`npx shadcn@latest add ...`) | You own the code, easy to customize; never ship default state |
| Tailwind-based modern SaaS / AI marketing | Tailwind v4 utilities + `dark:` variant | Default for indie + small team builds |

**Honesty rule:** if the brief matches one of the systems above, install and use the **official** package. Do not recreate its CSS by hand. Do not import a system's tokens and then override 90% of them.

**One system per project.** Never mix Fluent React with Carbon in the same tree. Never import shadcn/ui components into a Material 3 app.

### Install commands

```bash
npm install @material/web                          # Material Web (Material 3)
npm install @fluentui/react-components              # Fluent UI React (v9)
npm install @fluentui/web-components @fluentui/tokens  # Fluent UI Web Components
npm install @carbon/react @carbon/styles            # IBM Carbon
npm install @radix-ui/themes                        # Radix Themes
npx shadcn@latest init                              # shadcn/ui
npm install --save @primer/css                      # Primer CSS (devtool)
npm install @primer/react-brand                      # Primer Brand (marketing)
npm install govuk-frontend                          # GOV.UK Frontend
npm install uswds                                   # USWDS
yarn add @atlaskit/css-reset @atlaskit/tokens @atlaskit/button  # Atlaskit
npm install bootstrap                               # Bootstrap 5.3
```

Shopify app HTML head:
```html
<meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
<script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script>
```

## Step 2: If the brief is an aesthetic, not a system

There is **no single official package** for these. Build with native CSS + Tailwind + a maintained component library, and be honest in code comments about what's borrowed inspiration vs. official material.

| Aesthetic | Honest implementation |
|---|---|
| Glassmorphism / "frosted glass" | `backdrop-filter`, layered borders, highlight overlays. Solid-fill fallback for `prefers-reduced-transparency`. |
| Bento (Apple-style tile grids) | CSS Grid with mixed cell sizes. No single library owns this. |
| Brutalism | Native CSS, monospace, raw borders. No library. |
| Editorial / magazine | Serif type, asymmetric grid, generous whitespace. No library. |
| Dark tech / hacker | Mono + accent neon, terminal motifs. No library. |
| Aurora / mesh gradients | SVG or layered radial gradients. No library. |
| Kinetic typography | Native CSS animations, scroll-driven animations, GSAP for hijacks. No library. |
| **Apple Liquid Glass** | Apple documents this for Apple platforms only. **There is no official `liquid-glass.css`.** Web implementations are approximations using `backdrop-filter` + layered borders + highlights. Label clearly as approximation (see skeleton below). |

### Apple Liquid Glass web approximation (labeled honestly)

```css
.liquid-glass-web-approx {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-radius: 999px;
  border: 1px solid rgb(255 255 255 / .32);
  background:
    linear-gradient(135deg, rgb(255 255 255 / .30), rgb(255 255 255 / .08)),
    rgb(255 255 255 / .12);
  backdrop-filter: blur(24px) saturate(180%) contrast(1.05);
  -webkit-backdrop-filter: blur(24px) saturate(180%) contrast(1.05);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / .48),
    inset 0 -1px 0 rgb(255 255 255 / .12),
    0 18px 60px rgb(0 0 0 / .18);
}

@media (prefers-color-scheme: dark) {
  .liquid-glass-web-approx {
    border-color: rgb(255 255 255 / .18);
    background:
      linear-gradient(135deg, rgb(255 255 255 / .16), rgb(255 255 255 / .04)),
      rgb(15 23 42 / .42);
  }
}

@media (prefers-reduced-transparency: reduce) {
  .liquid-glass-web-approx {
    background: rgb(255 255 255 / .96);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```

`prefers-reduced-transparency` has uneven browser support — test it, and always provide enough contrast even without blur.

## Step 3: Default architecture when no system applies

### Stack
- **Framework:** React or Next.js, default to Server Components (RSC)
- **Styling:** Tailwind v4 (default; v3 only if the project demands it). For v4, use `@tailwindcss/postcss` or the Vite plugin, not the old `tailwindcss` PostCSS plugin.
- **Animation:** Motion (`motion/react`), formerly Framer Motion
- **Icons:** `@phosphor-icons/react` > `hugeicons-react` > `@radix-ui/react-icons` > `@tabler/icons-react`. Never hand-roll SVG icons. One family per project. `lucide-react` only on explicit user request.
- **Fonts:** `next/font` (Next.js) or self-hosted `@font-face` + `font-display: swap`. Never `<link>` to Google Fonts in production.

### State
- `useState`/`useReducer` for isolated UI
- Zustand/Jotai/context only to avoid deep prop-drilling
- **Never** track continuous input-driven values (mouse position, scroll progress, pointer physics) in `useState` — use Motion's `useMotionValue`/`useTransform`/`useScroll`. `useState` re-renders the tree every frame and collapses on mobile.

### Responsiveness
- Breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`
- Contain page layouts with `max-w-7xl mx-auto` or `max-w-[1400px]`
- Never `h-screen` for full-height hero — always `min-h-[100dvh]` (prevents iOS Safari address-bar jump)
- Never flexbox percentage math (`w-[calc(33%-1rem)]`) — always CSS Grid (`grid grid-cols-1 md:grid-cols-3 gap-6`)

### Dependency verification
Before importing any 3rd-party library, check `package.json`. If missing, output the install command first. Never assume a library exists.

## Step 4: RSC and Client boundary rules (Next.js / React Server Components)

- Global state works ONLY in Client Components. Wrap providers in a `"use client"` component.
- Any component using Motion, scroll listeners, or pointer physics MUST be an isolated leaf with `'use client'` at the top. Server Components render static layouts only.
