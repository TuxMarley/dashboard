---
name: preflight-checklist
description: The final mechanical pre-ship checklist for any landing page, portfolio, or marketing site build — theme lock, color lock, shape lock, contrast checks, motion checks, dark mode, mobile collapse. Use as the LAST step before declaring any frontend task complete. If a single box cannot be honestly ticked, the page is not done.
---

# Final Pre-Flight Check

Run this matrix before outputting code or declaring a task complete. This is the last filter — not optional, not a suggestion. If a single checkbox cannot be honestly ticked, the page is not done.

**Before starting:** if the project has `docs/contexto/errores-conocidos.md`, read it first — project-specific gotchas can invalidate checklist items before you even reach them.

## Design read & dials

- [ ] **Design Read** declared as a one-liner before code was written
- [ ] **Dial values** (`DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`) explicit and reasoned from the brief, not silently defaulted
- [ ] **Design system** chosen deliberately (official package, or aesthetic honestly labeled as native-CSS) — no invented "official" system

## Consistency locks

- [ ] **Page Theme Lock:** one theme (light, dark, or auto) for the whole page — no section flips to inverted mode mid-page
- [ ] **Color Consistency Lock:** one accent color used identically across every section
- [ ] **Shape Consistency Lock:** one corner-radius system applied consistently (or a documented rule like "buttons full-pill, cards 16px, inputs 8px" followed everywhere)

## Contrast & legibility

- [ ] **Button Contrast:** every CTA's text is readable against its background, WCAG AA 4.5:1 minimum
- [ ] **Form Contrast:** inputs, placeholders, focus rings, labels, and error text all pass WCAG AA against the section background
- [ ] **CTA no-wrap:** no CTA label wraps to 2+ lines at desktop
- [ ] **Body text contrast:** ≥4.5:1 against its background; large text (≥18px or bold ≥14px) ≥3:1

## Typography

- [ ] **Serif discipline:** if a serif is used, it's not `Fraunces` or `Instrument_Serif` (or it is, with explicit brand justification) — and differs from the previous project's serif choice
- [ ] **Italic descender clearance:** every italic word containing `y g j p q` has `leading-[1.1]` minimum + `pb-1` reserve
- [ ] **Display letter-spacing** ≥ -0.04em (not tighter — letters shouldn't touch)
- [ ] **Body line length** ≤ 65-75ch

## Hero

- [ ] **Hero fits the viewport:** headline ≤ 2 lines, subtext ≤ 20 words AND ≤ 4 lines, CTA visible without scroll, font scale planned around the hero image
- [ ] **Hero top padding** ≤ `pt-24` at desktop — hero content doesn't float halfway down the viewport
- [ ] **Hero stack discipline:** max 4 text elements (eyebrow OR brand strip, headline, subtext, CTAs) — no tiny tagline below CTAs, no trust micro-strip inside the hero

## Section-level structure

- [ ] **Eyebrow count (mechanical):** instances of `uppercase tracking` micro-labels ≤ ceil(sectionCount / 3), hero counted as 1
- [ ] **Split-Header Ban:** no "left big headline + right small explainer paragraph" section header without a genuine visual reason on the right
- [ ] **Zigzag cap:** no 3+ consecutive sections with the same image+text-split pattern
- [ ] **Layout diversity:** at least 4 different layout families across an 8-section page
- [ ] **Bento cell count:** exactly N cells for N items, no empty cells in the middle or end; at least 2-3 cells carry real visual variation
- [ ] **No duplicate CTA intent** anywhere on the page

## Assets & imagery

- [ ] **Real images used** (gen-tool first, then Picsum-seed, then explicit placeholder slots) — no div-based fake screenshots, no hand-rolled decorative SVGs, no pure-text minimalism
- [ ] **Logo wall** lives under the hero (not inside it), uses real SVG logos or generated marks, no category labels below logos
- [ ] **No pills/labels overlaid on images**, no fake photo-credit captions

## Copy

- [ ] **Zero em-dashes (`—`)** anywhere visible: headlines, eyebrows, pills, body, quotes, attribution, captions, buttons, alt text
- [ ] **Copy self-audit:** every visible string re-read, no grammatically-broken or AI-hallucinated phrases shipped
- [ ] **No decoration text strip** at hero bottom, no floating top-right corner sub-text, no scroll cues, no version labels (unless a real launch)

## Motion

- [ ] **Motion motivated:** every animation justifiable in one sentence (hierarchy / storytelling / feedback / state transition) — no GSAP-for-show
- [ ] **Marquee max one per page**
- [ ] **Motion claimed = motion shown:** if `MOTION_INTENSITY > 4`, the page actually animates
- [ ] **No `window.addEventListener('scroll')`** anywhere — Motion `useScroll()` / ScrollTrigger / IntersectionObserver / CSS scroll-driven animations only
- [ ] **Reduced motion** wrapped for everything above `MOTION_INTENSITY > 3`
- [ ] **GSAP sticky-stack / horizontal-pan** uses `start: "top top"` and `pin: true` correctly if used

## Responsive & technical

- [ ] **Navigation** on one line at desktop, height ≤ 80px
- [ ] **Mobile collapse** explicit per section — not assumed
- [ ] **Viewport stability:** `min-h-[100dvh]`, never `h-screen`
- [ ] **Dark mode** tokens defined and tested in both modes
- [ ] **Icons** from an allowed library only (Phosphor / HugeIcons / Radix / Tabler), no hand-rolled SVG paths
- [ ] **Motion isolated** in client-leaf components with `'use client'` at the top
- [ ] **`useEffect` animations** have strict cleanup functions
- [ ] **Empty / loading / error states** provided for every interactive component
- [ ] **Core Web Vitals plausible:** LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] **One design system per project** — no Material + shadcn mixed

If a single checkbox above cannot be honestly ticked, fix it before delivering. Do not ship with an unticked box explained away as "minor."
