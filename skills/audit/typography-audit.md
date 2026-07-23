---
name: typography-audit
description: A concrete auditing procedure for typography issues — font pairing, hierarchy, line length, letter-spacing, italic descender clearance, serif discipline. Use when reviewing existing UI/marketing copy for typographic problems, or as a pass before shipping any interface with display type.
---

# Typography Audit

A mechanical audit procedure for type. Every finding must cite the exact rule violated and give an exact fix value — not "make it bigger" or "feels off."

## Step 1: Check the type scale exists and is used

Verify a coherent hierarchy exists, not ad-hoc sizes scattered per component:

```css
--text-xs:    0.75rem;   /* 12px - captions, labels */
--text-sm:    0.875rem;  /* 14px - secondary body */
--text-base:  1rem;      /* 16px - body */
--text-lg:    1.125rem;  /* 18px - lead */
--text-xl:    1.25rem;   /* 20px - h4 */
--text-2xl:   1.5rem;    /* 24px - h3 */
--text-3xl:   1.875rem;  /* 30px - h2 */
--text-4xl:   2.25rem;   /* 36px - h1 small */
--text-5xl:   3rem;      /* 48px - h1 */
--text-6xl:   3.75rem;   /* 60px - display */
```

## Step 2: Line length

- **Body copy:** max-width ≤ 75ch, target 65ch
- **Fix:** `max-width: 65ch` on the prose container, not on individual paragraphs

## Step 3: Letter-spacing (tracking) rules

- **Display/hero headings:** `letter-spacing` floor of **≥ -0.04em**. Tighter than that and letters visually touch — cramped, not "designed." (Common bad defaults seen in the wild: -0.05 to -0.085em — these are all violations.)
- **Small text (captions, labels, mono metadata):** slightly positive tracking (`0.05em` to `0.1em`) for legibility, especially in uppercase.
- **Never use one fixed `letter-spacing` value across all sizes.** Tracking is size-specific: tighten headings, leave body near `0`.

## Step 4: Line-height (leading) rules

- **Large display text:** tight leading, `1.0`–`1.1`
- **Body copy:** looser leading, `1.5`–`1.6` for comfortable reading
- **Leading tracks size inversely** — this is not optional. A fixed `line-height` across all sizes is a finding.

## Step 5: Hero heading ceiling

- **Max `clamp()` ceiling for hero/display headings: ≤ 6rem (~96px).** Above that, the page is shouting, not designing.
- Verify the clamp's max value explicitly — don't eyeball it.

## Step 6: Font pairing

- **Never pair two fonts that are similar but not identical** — two geometric sans-serifs, or two humanist sans-serifs, next to each other. This reads as an accidental mismatch, not a deliberate choice.
- **Pair on a contrast axis:** serif + sans, or geometric + humanist. Or use a single family across multiple weights instead of pairing at all.
- **Known good pairings:** `Geist` + `Geist Mono`, `Satoshi` + `JetBrains Mono`, `Cabinet Grotesk` + `Inter Tight`, `GT America` + `IBM Plex Mono`.

## Step 7: Serif discipline

- **Serif is discouraged as the default** for any project. "It feels creative/premium/editorial" is not sufficient justification — this exact reasoning is the most-tested AI tell in production.
- **Serif is acceptable only when:** the brand brief literally names a serif font, OR the aesthetic is genuinely editorial/luxury/publication/manuscript/heritage AND you can articulate why this specific serif fits this specific brand.
- **Banned as defaults regardless of justification:** `Fraunces`, `Instrument_Serif` — the two most LLM-favorite display serifs, and therefore the most detectable.
- **If a serif is justified, rotate — never reuse the same serif across consecutive projects.** Pool: PP Editorial New, GT Sectra Display, Cardinal Grotesque, Reckless Neue, Tiempos Headline, Recoleta, Cormorant Garamond, Playfair Display, EB Garamond, IvyPresto, Migra, Domaine Display, Canela, Schnyder, Tobias, NB Architekt, ITC Galliard.

## Step 8: Sans font choice

- **`Inter` is discouraged as a default** when a more distinctive alternative is available and the brief doesn't specifically call for neutrality.
- **`Inter` is acceptable when:** the brief explicitly asks for a neutral/standard/Linear-style feel, or the site is public-sector/accessibility-first.
- **Preferred alternatives:** `Geist`, `Outfit`, `Cabinet Grotesk`, `Satoshi`, `PP Neue Montreal`, `ABC Diatype`, `Söhne Breit`.

## Step 9: Emphasis rule

- **To emphasize a word within a headline** (the "and *this* matters" move): use italic or bold of the SAME font family.
- **Never inject a random serif word into a sans headline** (or vice versa) purely to add visual interest — this is a mixed-family emphasis tell and reads as amateur.

## Step 10: Italic descender clearance (mandatory when italic display type is used)

- When italic is used in display type and the word contains a descender letter (`y g j p q`), `leading-[1]` or `leading-none` will visibly clip the descender.
- **Fix:** use `leading-[1.1]` minimum and add `pb-1` or `mb-1` reserve on the wrapping element.
- **Audit every italic word in every display headline before shipping** — this is a mechanical check, not a judgment call.

## Step 11: `text-wrap` usage

- **`text-wrap: balance`** on h1–h3 for even line lengths.
- **`text-wrap: pretty`** on long-form prose to reduce orphans (a single word alone on the last line).

## Step 12: Overflow check

- Test every heading's copy at every breakpoint. If it overflows its container, **reduce the clamp max or rewrite the copy** — never let text spill past its container. The viewport is part of the design, not an afterthought.

## Report format

```
BLOCKER | IMPROVEMENT | NIT
Problem: [description]
Location: [component / selector]
Current value: [e.g. letter-spacing: -0.06em]
Required value: [e.g. letter-spacing: -0.03em]
Fix:
  /* Before */
  h1 { letter-spacing: -0.06em; }
  /* After */
  h1 { letter-spacing: -0.03em; }
```

## Verification checklist

- [ ] Coherent type scale exists and is actually used (no ad-hoc sizes)
- [ ] Body line length ≤ 75ch
- [ ] Display letter-spacing ≥ -0.04em
- [ ] Small-text tracking is slightly positive, not zero, on uppercase labels
- [ ] Leading is size-inverse (tight on display, loose on body) — no fixed value across all sizes
- [ ] Hero heading clamp ceiling ≤ 6rem
- [ ] No two similar-but-not-identical fonts paired together
- [ ] Serif used only with explicit justification; not Fraunces/Instrument_Serif unless justified and rotated
- [ ] Inter used only when explicitly justified
- [ ] Emphasis via same-family italic/bold, never a mixed-family word injection
- [ ] Every italic word with a descender (`y g j p q`) has `leading-[1.1]`+ `pb-1` clearance
- [ ] `text-wrap: balance` on h1-h3, `text-wrap: pretty` on long prose
- [ ] All headings tested at every breakpoint for overflow
