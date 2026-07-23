---
name: css-first
description: >
  ALWAYS invoke when the user asks to style a component, handle
  responsive behavior, add layout, manage visual state, or build
  any UI that involves appearance or interaction. Do not reach for
  JavaScript for visual behavior without checking CSS first.
---

# Skill: CSS-First Architecture

This skill makes CSS-first thinking the default for all visual behavior. Before adding JavaScript for layout, responsiveness, or visual state, Claude must check whether CSS handles it natively.

## Why this exists

Claude defaults to JavaScript for visual behavior. When you ask it to make a sidebar responsive, it may reach for a `useState` + `window.resize` listener when a media query would work. When you ask for a hover effect that reads parent state, it may add a `useState` when `:has()` solves it in CSS.

JavaScript solutions for visual behavior add bundle size, require cleanup, can fail on the server, and are harder to test. CSS solutions are declarative, free, and handled by the browser.

A CSS-first skill forces Claude to check native platform capabilities before adding JavaScript. That does not mean JavaScript is wrong. It means JavaScript should be a deliberate choice, not the default answer for every layout or interaction problem.

## CSS-first rules

Prefer these CSS approaches over their JavaScript equivalents:

| Instead of | Use |
|---|---|
| JS `resize-observer` + breakpoint variables | `container queries` |
| JS `window.scroll` listener for animations | `scroll-driven animations` (`animation-timeline: view()`) |
| JS virtualization for lists under 10,000 items | `content-visibility: auto` |
| JS parent-state toggling via `useState` | `:has()` selector |
| Arbitrary Tailwind values (`text-[13px]`) | Design tokens from Tailwind config |
| Physical CSS properties (`margin-left`) | Logical properties (`margin-inline-start`) |

## Steps

1. **Read the component requirements**

2. **For each visual behavior, check if CSS handles it natively:**
   - Layout: CSS Grid, Flexbox, container queries
   - Responsive: media queries, container queries, `clamp()`
   - State: `:hover`, `:focus`, `:checked`, `:has()`, `data-*` attributes
   - Animation: CSS transitions, `@keyframes`, scroll-driven animations
   - Visibility: `content-visibility`, `display`, `visibility`, `opacity`

3. **Only reach for JS when CSS genuinely cannot handle the behavior:**
   - Drag-and-drop interactions
   - Complex gesture handling (multi-touch, velocity-based)
   - Canvas / WebGL rendering
   - Lists exceeding 10,000 items (use a proper virtualizer)
   - Real-time data that drives visual changes

4. **For each CSS solution, include browser support notes** if the feature is not yet baseline (e.g., container queries, `:has()`, scroll-driven animations)

## Examples of CSS replacing JavaScript

### Responsive sidebar (CSS, not JS)
```css
/* Instead of: useState + window.resize + conditional render */
.layout {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .layout {
    grid-template-columns: 240px 1fr;
  }
}
```

### Parent-state hover effect (CSS :has(), not JS)
```css
/* Instead of: useState onMouseEnter on parent, pass prop to child */
.card:has(.card__button:hover) .card__title {
  color: var(--color-primary);
}
```

### Scroll-driven animation (CSS, not JS scroll listener)
```css
/* Instead of: useEffect + window.addEventListener('scroll', ...) */
@keyframes reveal {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.section {
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 30%;
}
```

### Container query for component-level responsiveness
```css
/* Instead of: window.resize + breakpoint context + conditional classes */
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 120px 1fr;
  }
}
```

### Long-list performance (CSS, not JS virtualizer for small lists)
```css
/* Instead of: react-virtual for a 500-item list */
.list {
  content-visibility: auto;
  contain-intrinsic-size: 0 48px; /* estimated row height */
}
```

## Browser support notes to include

When using newer CSS features, always add a comment:
```css
/* container queries: baseline 2023, Chrome 105+, Safari 16+, Firefox 110+ */
/* :has(): baseline 2023, Chrome 105+, Safari 15.4+, Firefox 121+ */
/* scroll-driven animations: Chrome 115+, Firefox 110+ (partial), Safari not yet */
/* content-visibility: Chrome 85+, Firefox 125+, Safari 18+ */
```

## This skill pairs with

- **`scaffold-component`** — use CSS-first when building the component styles
- **`review-pr`** — CSS-first violations (JS for layout/responsive) should be flagged as `should fix`
