---
name: color-contrast-audit
description: A concrete auditing procedure for color, contrast, and accessibility issues in a frontend interface — exact WCAG ratios, exact anti-pattern hex ranges, exact fix snippets. Use when reviewing existing UI code for color/contrast problems, or as a final pass before shipping any interface with text on colored/tinted backgrounds.
---

# Color & Contrast Audit

A mechanical audit procedure, not a vibe check. Every finding must cite a ratio and a fix.

## Step 1: Familiarize with the project

Read at least one existing CSS/token/theme file before auditing. Don't propose a fix that conflicts with an established, working token system.

## Step 2: Run the mandatory contrast checks

- **Body text:** ≥4.5:1 against its background
- **Large text** (≥18px or bold ≥14px): ≥3:1
- **Placeholder text:** same rule as body text — 4.5:1, not the default muted-gray
- **Button text:** verify legibility against the button's actual background, not the button's border color
- **UI components** (borders, icons that convey meaning): ≥3:1

**The single most common failure:** muted gray body text on a tinted near-white background. If the contrast is even close to failing, bump the body color toward the ink end of the ramp — light gray "for elegance" is the single biggest reason AI-generated designs read as hard to read.

## Step 3: Check for color anti-patterns

| Anti-pattern | Why it fails | Fix |
|---|---|---|
| Gray text on a colored background | Reads desaturated, washed out | Use a darker shade of the background's own hue, or apply transparency to the text color instead of a flat gray |
| Cream/sand/beige as body background | OKLCH L 0.84-0.97, C < 0.06, hue 40-100 reads as cream/paper/parchment regardless of token name — the saturated AI default of the era | A saturated brand color, a true chroma-0 off-white, or a darker tinted neutral toward the brand's own hue |
| Pure `#000000` or `#ffffff` | Kills perceived depth | Off-black (`zinc-950`, `#0a0a0a`) and off-white |
| AI-purple / neon gradient with no brand justification | Generic, unearned | Neutral base + one high-contrast singular accent |
| Two accent colors fighting for attention | Breaks the Color Consistency Lock | Pick one accent, lock it, audit every component before shipping |

## Step 4: Report format

For every finding:

```
BLOCKER | IMPROVEMENT | NIT
Problem: [description]
Location: [component / selector]
Current ratio: [X:1]
Required ratio: [Y:1]
Fix:
  /* Before */
  color: #888;
  /* After */
  color: #555;
```

## Step 5: Verify in both color modes

Dual-mode is the default. Never ship light-only or dark-only without explicit instruction.

- Design for both modes from the start — don't retrofit
- Use Tailwind's `dark:` variant OR CSS variables, one strategy per project
- Maintain WCAG AA contrast (AAA target for hero copy) in **both** modes
- Verify the brand's primary color stays recognizable in dark mode — don't desaturate the brand away
- No pure `#000000`/`#ffffff` in either mode
- Respect `prefers-color-scheme` unless the brand insists on one mode; add a manual toggle if either mode would lose key brand expression
- **Open the page in both modes during development.** Never ship a page you've only seen in one mode.

## Step 6: Color Consistency Lock verification

Once an accent color is chosen for a page, it must be used identically on the whole page:

- [ ] No warm-gray site suddenly gets a blue CTA in a later section
- [ ] No rose-accented site gets a teal status badge in the footer
- [ ] Every component using the accent uses the exact same value (not a slightly-different shade)

## Color strategy classification

Before auditing further, classify the page's declared color strategy — a finding that contradicts the declared strategy is a blocker, one that's simply "not maximally bold" is not:

- **Restrained** — tinted neutrals + one accent ≤10% of the surface
- **Committed** — one saturated color carries 30-60% of the surface
- **Full palette** — 3-4 named roles, each used deliberately
- **Drenched** — the surface IS the color

## Quick-reference contrast table

| Element | Minimum ratio |
|---|---|
| Body text (any size < 18px, not bold) | 4.5:1 |
| Large text (≥18px, or bold ≥14px) | 3:1 |
| Placeholder text | 4.5:1 (same as body) |
| UI component borders/icons conveying meaning | 3:1 |
| Focus indicator against adjacent colors | 3:1 |
