---
name: brief-inference-and-dials
description: Reads a design brief and turns it into three explicit numeric dials (variance, motion, density) before any code is written. Use at the START of any landing page, portfolio, or redesign task, before picking colors, fonts, or layout. Prevents the model from defaulting to a generic aesthetic instead of reading the actual brief.
---

# Brief Inference & The Three Dials

Most bad AI design output happens because the model jumps to a default aesthetic instead of reading the brief. This skill forces an explicit reading step before any visual decision gets made.

## Step 1: Read these signals first

1. **Page kind** — landing (SaaS / consumer / agency / event), portfolio (dev / designer / studio), redesign (preserve vs overhaul), editorial / blog, dashboard / app
2. **Vibe words** the user used — "minimalist," "calm," "Linear-style," "Awwwards," "brutalist," "premium consumer," "Apple-y," "playful," "serious B2B," "editorial," "dark tech"
3. **Reference signals** — URLs linked, screenshots pasted, products named, brands they're competing with
4. **Audience** — B2B procurement panel vs. design-conscious consumer vs. recruiter scanning a portfolio. The audience picks the aesthetic, not your taste.
5. **Existing brand assets** — logo, color, type, photography. For redesigns these are starting material, not optional input.
6. **Quiet constraints** — accessibility-first audiences, public-sector, regulated industries, kids' products. These OVERRIDE aesthetic preference.

## Step 2: State a one-line "Design Read" before writing any code

Format: **"Reading this as: \<page kind> for \<audience>, with a \<vibe> language, leaning toward \<design system or aesthetic family>."**

Examples:
- *"Reading this as: B2B SaaS landing for technical buyers, with a Linear-style minimalist language, leaning toward Tailwind utilities + Geist + restrained motion."*
- *"Reading this as: solo designer portfolio for hiring managers, with an editorial/kinetic-type language, leaning toward native CSS + scroll-driven animation + custom typography."*
- *"Reading this as: redesign of a public-sector service site, with a trust-first language, leaning toward GOV.UK Frontend or USWDS."*

If the brief is ambiguous, ask exactly **one** clarifying question — never a multi-question dump. If you can confidently infer, don't ask; just declare the read and proceed.

## Step 3: Set the three dials

- **`DESIGN_VARIANCE`** — 1 = perfect symmetry, 10 = artsy chaos
- **`MOTION_INTENSITY`** — 1 = static, 10 = cinematic/physics-driven
- **`VISUAL_DENSITY`** — 1 = art gallery/airy, 10 = cockpit/packed data

**Baseline when nothing else applies: `8 / 6 / 4`.**

### Dial inference table

| Signal | VARIANCE | MOTION | DENSITY |
|---|---|---|---|
| "minimalist / clean / calm / editorial / Linear-style" | 5-6 | 3-4 | 2-3 |
| "premium consumer / Apple-y / luxury / brand" | 7-8 | 5-7 | 3-4 |
| "playful / wild / Dribbble / Awwwards / experimental / agency" | 9-10 | 8-10 | 3-4 |
| "landing page / portfolio / marketing site (default)" | 7-9 | 6-8 | 3-5 |
| "trust-first / public-sector / regulated / accessibility-critical" | 3-4 | 2-3 | 4-5 |
| "dashboard / tool / admin" | 4-6 | 3-5 | 6-8 |
| "redesign - preserve" | match existing | +1 | match existing |
| "redesign - overhaul" | +2 | +2 | match existing |

### Use-case presets

| Use case | VARIANCE | MOTION | DENSITY |
|---|---|---|---|
| Landing (SaaS, mainstream) | 7 | 6 | 4 |
| Landing (Agency / creative) | 9 | 8 | 3 |
| Landing (Premium consumer) | 7 | 6 | 3 |
| Portfolio (Designer / studio) | 8 | 7 | 3 |
| Portfolio (Developer) | 6 | 5 | 4 |
| Editorial / Blog | 6 | 4 | 3 |
| Public-sector service | 3 | 2 | 5 |

## Step 4: Use the dials as literal variables

Every subsequent layout, motion, and density decision is gated by these exact values — not vibes. Cross-references in other skills use these exact variable names (`DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`); never invent aliases like `LAYOUT_VARIANCE`.

**Motion claim check:** if `MOTION_INTENSITY > 4` is declared, the page must actually move — entry transitions on hero, scroll-reveal on key sections, hover physics on CTAs, at minimum. A static page that claims `MOTION_INTENSITY: 7` is broken. If you can't ship working motion in scope, drop the dial to 3 and ship a clean static page instead of half-built motion.

## Anti-Default Discipline

Do not default to: AI-purple gradients, centered hero over dark mesh, three equal feature cards, generic glassmorphism on everything, infinite-loop micro-animations everywhere, Inter + slate-900. These are the LLM defaults. Reach past them deliberately based on the design read.

## The two-altitude slop check

Before committing to an aesthetic direction, run this check:

- **First-order:** if someone could guess the theme + palette from the category alone, that's the first training-data reflex. Rework the scene sentence and color strategy until the answer isn't obvious from the domain.
- **Second-order:** if someone could guess the aesthetic family from category-plus-anti-references ("AI workflow tool that's not SaaS-cream → editorial-typographic," "fintech that's not navy-and-gold → terminal-native dark mode"), that's the trap one tier deeper. Rework until both answers are non-obvious.
