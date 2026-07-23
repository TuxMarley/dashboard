---
name: visual-slop-bans
description: Hard-banned visual CSS patterns that read as AI-generated ("slop"). Use when building or reviewing any frontend interface to catch and refuse these specific patterns before they ship. Pairs with copy-bans and layout-bans for full anti-slop coverage.
---

# Visual Slop Bans

A match-and-refuse list. If you are about to write any pattern below, stop and rewrite the element with different structure. These are hard bans, not stylistic suggestions — each one is a documented, repeatedly-observed tell that an interface was AI-generated.

## How to use this skill

Before shipping any component or reviewing a diff, scan for every pattern below. A single match is a blocker, not a nit. State the rewrite, don't just flag it.

---

## 1. Gradient text

`background-clip: text` combined with a gradient background on headings.

```css
/* BANNED */
.heading {
  background: linear-gradient(90deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

**Rewrite:** single solid color. Emphasize with weight or size, not gradient.

## 2. Glassmorphism as default

`backdrop-filter: blur()` + translucent background applied decoratively to cards, sections, or panels with no functional reason (nothing behind them needs blurring).

**Rewrite:** solid surface color. Reserve glass effects for genuinely floating/overlapping UI (a sticky nav over scrolling content, a modal over a dimmed backdrop) — and even then, provide a solid fallback under `prefers-reduced-transparency: reduce`.

## 3. AI-purple / neon glows

Automatic button glows, random neon accent gradients, purple-to-blue gradients with no brand justification.

```css
/* BANNED */
.button {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  box-shadow: 0 0 24px rgba(139, 92, 246, 0.6);
}
```

**Rewrite:** neutral base (zinc/slate/stone) + one high-contrast singular accent chosen for the brand. No outer glow by default; use inner borders or subtle tinted shadows instead.

## 4. Side-stripe borders

`border-left` or `border-right` greater than 1px used as a colored accent on cards, list items, callouts, or alerts.

```css
/* BANNED */
.callout {
  border-left: 4px solid #10b981;
}
```

**Rewrite:** full border, background tint, a leading icon/number, or nothing at all.

## 5. Ghost-card pattern (Codex tell)

`border: 1px solid X` combined with `box-shadow` where the shadow blur ≥ 16px, on the same element.

```css
/* BANNED */
.card {
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

**Rewrite:** pick one. Either a single solid border at the brand color, OR a defined shadow at ≤ 8px blur. Never both as decoration.

## 6. Over-rounded corners

`border-radius: 24px+` on cards, sections, or inputs.

**Rewrite:** cards top out at 12–16px. Full-pill (`border-radius: 9999px`) is fine for tags/buttons/pills only, never for containers.

## 7. Hero-metric template

Big number + small label + supporting stats + gradient accent. The generic SaaS-cliché stat block.

**Rewrite:** if metrics matter, present them as part of the narrative (inline in a sentence, in a caption under a real image) rather than as an isolated stat-card row.

## 8. Identical card grids

Three or more same-sized cards with icon + heading + text, repeated with no visual variation.

**Rewrite:** asymmetric grid (e.g. `grid-template-columns: 2fr 1fr 1fr`), zigzag 2-column, scroll-pinned stack, or bento with mixed cell sizes and at least 2–3 cells carrying real visual variation (image, tinted background, pattern).

## 9. Pure black / pure white

`#000000` or `#ffffff` used as a primary surface or text color.

**Rewrite:** off-black (`zinc-950`, `#0a0a0a`) and off-white. Pure values kill perceived depth.

## 10. Cream/sand/beige as the default "warm" background

The entire warm-neutral band — OKLCH lightness 0.84–0.97, chroma < 0.06, hue 40–100 — reads as cream/sand/paper regardless of the token name (`--paper`, `--cream`, `--sand`, `--bone`, `--linen`, `--parchment`). This is the saturated AI default for "warm/artisan/traditional" briefs.

**Rewrite:** pick one of:
- a saturated brand color as the body background (terracotta, oxblood, deep ochre, near-black)
- a true off-white at chroma 0
- a darker mid-tone neutral tinted toward the brand's own hue

Carry "warmth" through accent color, typography, and imagery — not through body background.

## 11. Premium-consumer beige+brass+espresso palette

For cookware/wellness/artisan/luxury/heritage-craft briefs, the following exact hex families are banned as defaults:
- Backgrounds: `#f5f1ea`, `#f7f5f1`, `#fbf8f1`, `#efeae0`, `#ece6db`, `#faf7f1`, `#e8dfcb`
- Accents: `#b08947`, `#b6553a`, `#9a2436`, `#9c6e2a`, `#bc7c3a`, `#7d5621`
- Text: `#1a1714`, `#1a1814`, `#1b1814`

**Rewrite (rotate, never repeat across projects):**
- Cold Luxury: silver-grey + chrome + smoke
- Forest: deep green + bone + amber accent
- Black and Tan: true off-black + warm tan, sharp contrast, no beige
- Cobalt + Cream: saturated blue against a single neutral
- Terracotta + Slate: warm rust against cool grey
- Pure monochrome + one saturated pop color

## 12. Repeating stripe / grid decorative backgrounds

`repeating-linear-gradient()` diagonal stripes, or two-axis CSS grid overlays built from `linear-gradient(... 1px, transparent 1px)` used purely for texture, with no functional surface (map, blueprint, measurement tool) behind them.

**Rewrite:** plain surface, real product imagery, or a texture that maps to an actual concept in the brand.

## 13. Hand-drawn / sketchy SVG illustrations

Classes like `loose-sketch`, `doodle`, `wavy`; `feTurbulence`/`feDisplacementMap` "paper grain" filters; crude 5–30 path scenes depicting a literal subject (an otter, a table setting, an album cover).

**Rewrite:** if you can't render the scene with real photography or a generated image, ship no illustration at all. Simple geometric marks (a circle, a square, a monogram) are the only acceptable hand-drawn fallback.

## 14. Div-based fake screenshots

A "product preview" built from `<div>` rectangles simulating a task list, terminal, or dashboard, often with a fake version footer (`v0.6.2-rc.1`, `last sync 4s ago`).

**Rewrite:** a real screenshot, a generated image, an actual mini-version of the real UI, or skip the preview and use editorial photography instead.

## 15. Custom mouse cursors

Any `cursor: url(...)` replacement of the system cursor for decorative purposes.

**Rewrite:** never. Outdated, accessibility-hostile, and performance-hostile. Use the system default and `cursor: pointer` on interactive elements only.

## 16. Decorative status dots

A colored dot before nav items, list rows, badges, or labels that doesn't map to real semantic state.

**Rewrite:** remove by default. Only acceptable when the dot conveys real state (an actual server status, a genuine live/offline flag) and appears sparingly — at most once per page section.

## 17. Scoring bars with filled background tracks

`bg-zinc-200` filled-track progress bars used purely as a decorative "X vs Y" comparison visual on a marketing page.

**Rewrite:** a number + small icon, or a thin inline bar with no background track.

---

## Verification checklist

Before shipping, confirm zero matches for:

- [ ] Gradient text (`background-clip: text` + gradient)
- [ ] Decorative glassmorphism with no solid fallback
- [ ] Purple/neon glow with no brand justification
- [ ] Side-stripe borders (`border-left/right` > 1px as accent)
- [ ] Ghost-card pattern (1px border + shadow blur ≥16px)
- [ ] `border-radius` ≥ 24px on cards/sections/inputs
- [ ] Hero-metric stat-card template
- [ ] 3+ identical cards in a row with no visual variation
- [ ] Pure `#000000` / `#ffffff`
- [ ] Cream/sand/beige body background with no brand justification
- [ ] Premium-consumer beige+brass+espresso palette
- [ ] Decorative repeating-stripe or grid-overlay backgrounds
- [ ] Hand-drawn sketchy SVG illustrations
- [ ] Div-based fake screenshots
- [ ] Custom cursor
- [ ] Decorative status dots with no real semantic state
- [ ] Filled-track scoring bars as decoration
