---
name: layout-slop-bans
description: Hard-banned layout and structural patterns that read as AI-generated ("slop") — eyebrow overuse, zigzag repetition, hero overload, split-headers, section-number scaffolding. Use when building or reviewing landing pages, portfolios, or any multi-section marketing site. Pairs with visual-bans and copy-bans.
---

# Layout Slop Bans

Structural tells at the section and page level. These are the patterns that make a page feel "templated" even when individual components look fine in isolation.

## How to use this skill

Run this pass after individual components are built, looking at the page as a whole sequence of sections. Count instances mechanically where a rule specifies a ratio — don't eyeball it.

---

## 1. Eyebrow overuse (the #1 violated rule in production)

An "eyebrow" is the small uppercase wide-tracking label above a section headline (`FOUR COLORWAYS`, `SELECTED WORK`, `THE HARDWARE`). Typical CSS signature: `text-[11px] uppercase tracking-[0.18em]`.

**Hard limit: maximum 1 eyebrow per 3 sections.** Hero counts as 1. A 9-section page may use at most 3 eyebrows total. If section A has an eyebrow, the next 2 sections cannot have one.

**Mechanical check:** count instances of `uppercase tracking` (or equivalent small-caps mono labels) across all section components. If `count > ceil(sectionCount / 3)`, the page fails.

**Instead of an eyebrow:** drop it entirely. The headline alone is enough. The section's position on the page already categorizes it.

## 2. Numbered section markers as scaffolding

`00 / INDEX`, `001 · Capabilities`, `002 · Featured commission`, `06 · how it works` used as default decoration on every section.

**Rewrite:** numbers earn their place only when the section IS a real sequence (an actual 3-step process, a typed timeline) and the order carries real information. One deliberate numbered sequence per page is voice; numbered eyebrows on every section is AI grammar.

## 3. Split-header pattern

Left big headline (col-span-7/8) + right small explainer paragraph (col-span-4/5) as a section header, with no real compositional reason for the split.

**Rewrite:** stack vertically instead — headline on top, body below, max-width 65ch. Reach for the split only when the right column carries a real visual or interactive element, not filler text.

## 4. Zigzag alternation overuse

Alternating "left-image + right-text" then "left-text + right-image" layout, repeated across sections.

**Hard limit: maximum 2 consecutive sections with this pattern.** The 3rd consecutive image+text split is a fail. Break it with a full-width section, a vertical stack, a bento grid, a marquee, or a different layout family entirely.

## 5. Section-layout repetition

Once a layout family (3-column-image-cards, full-width-quote, split-text-image) is used for one section, it can appear at most once more on the page — and ideally not at all again.

**Hard limit:** a landing page with 8 sections must use at least 4 different layout families. "Selected commissions" must not look structurally identical to "What we do."

## 6. Hero overload

The hero must fit in the initial viewport with no scroll required to see the primary CTA.

**Hard limits:**
- Headline ≤ 2 lines on desktop
- Subtext ≤ 20 words AND ≤ 4 lines
- Top padding ≤ `pt-24` (~6rem) at desktop — beyond that the hero content floats and reads as broken, not intentional
- **Maximum 4 text elements in the hero:** (1) eyebrow OR brand strip — pick zero or one, never both; (2) headline; (3) subtext; (4) CTAs (1 primary + max 1 secondary)

**Banned inside the hero regardless of the 4-element budget:**
- A tiny tagline below the CTAs ("Works with GitHub, GitLab, and self-hosted Git")
- A trust micro-strip ("Used by engineering teams at...")
- A pricing teaser
- A feature bullet list
- A social-proof avatar row
- Trust logo walls ("Used by / Trusted by") — these belong in a dedicated section directly below the hero, never stuffed into the hero's flex row

## 7. Bento grid cell mismatch

A bento grid must have exactly as many cells as there is real content for. 3 items → 3 cells. 5 items → 5 cells (2+3, 3+2, hero+4, etc.).

**Rewrite:** if the grid has an empty cell in the middle or at the end, the grid shape was planned wrong — re-shape it, don't paste a blank tile.

**Also required:** at least 2–3 cells in any multi-cell bento need real visual variation (an actual image, a brand-appropriate gradient, a pattern, a tinted background). An all-white, all-typography bento reads as boring AI default even when everything else on the page is good.

## 8. Navigation overflow

Navigation must render on a single line on desktop. If items don't fit at `lg` (1024px), condense labels, drop secondary items, or move to a hamburger — a two-line nav at desktop is broken, not "responsive."

**Height cap:** 80px max desktop, 64–72px default. No oversized "agency" nav bars eating 15% of viewport height.

## 9. Duplicate CTA intent

Two or more CTAs on the same page with the same underlying intent, worded differently:
- "Get in touch" + "Contact us" + "Let's talk" + "Reach out" → all "contact" intent
- "Try free" + "Get started" + "Sign up free" → all "signup" intent
- "View work" + "See selected work" + "Browse projects" → all "portfolio" intent

**Rule:** pick ONE label per intent and use it everywhere on the page (nav, hero, footer).

## 10. Logo wall labeling

A "Trusted by / Used by" logo wall printing an industry/category label under each logo ("Vercel" + "hosting," "Stripe" + "payments").

**Rewrite:** logo wall = logos and nothing else. The logo is the credibility; the category label adds nothing the user doesn't already know. Alt-text for screen readers and an optional link to the brand's site is the only acceptable metadata.

## 11. Pills/labels overlaid on images

`<span>` overlays on photos with tags like `Brand · 02`, `PLATE · BRAND`, `Field notes - journal`.

**Rewrite:** let the image speak alone, or add a caption directly below it, outside the image frame.

## 12. Fake photo-credit captions

Strings like `Field study no. 12 · Ines Caetano`, `Plate 03 · House archive` under stock/generated images with no real photographer being credited.

**Rewrite:** skip the caption, or use a one-line functional caption ("The 6-quart, in Sage."). Photo credit is only appropriate when crediting a real photographer for a real photo with permission.

## 13. Bottom-of-hero decoration text strips

Small mono-caps strips across the bottom of the hero like `BRAND. MOTION. SPATIAL.`, `TYPE / FORM / MOTION`, `ESTD. 2018 · LISBON`.

**Rewrite:** delete, unless the strip carries real navigable links (a sticky bottom nav) or real status info (a cookie banner, build info on a docs site).

## 14. Floating top-right corner sub-text

A section with a giant left-aligned headline and a small explainer paragraph floating in the top-right corner with no clear alignment relationship to anything else.

**Rewrite:** put the sub-text directly under the headline, or build a clean 2-column header (left: headline, right: aligned body) — never a corner floater.

## 15. Spec-table hairline overload

A long specification table with `border-b` on every single row (the "Marrow-cookware pattern").

**Rewrite (pick one):**
- 2-col card grid: each spec its own card with name, large display value, and one-line "why it matters"
- Scroll-snap horizontal pills
- Grouped chunks: cluster 10 specs into 3 logical groups, one soft divider + heading per cluster
- Featured-vs-rest: 3–4 hero specs as large display tiles, rest under a "View full specifications" disclosure

---

## Verification checklist

- [ ] Eyebrow count ≤ ceil(sectionCount / 3), counting hero as 1
- [ ] Zero numbered section-marker scaffolding unless the section is a real sequence
- [ ] Zero split-header pattern without a genuine right-column visual reason
- [ ] Zero 3+ consecutive zigzag image+text-split sections
- [ ] At least 4 distinct layout families across an 8-section page
- [ ] Hero: headline ≤ 2 lines, subtext ≤ 20 words/4 lines, top padding ≤ `pt-24`, ≤ 4 text elements, no trust micro-strip/tagline/logo-wall inside it
- [ ] Bento grid cell count matches content count exactly, no empty cells
- [ ] At least 2–3 bento cells carry real visual variation
- [ ] Navigation on one line at desktop, height ≤ 80px
- [ ] No duplicate CTA intent anywhere on the page
- [ ] Logo wall = logos only, no category labels
- [ ] No pills/labels overlaid directly on images
- [ ] No fake photo-credit captions
- [ ] No bottom-of-hero decoration text strip (unless functional)
- [ ] No floating top-right corner sub-text in section headers
- [ ] No `border-b`-on-every-row spec tables for lists > 5 items
