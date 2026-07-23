---
name: redesign-protocol
description: A decision protocol for redesigning an existing site or app — detect greenfield vs preserve vs overhaul mode, audit the current state before touching anything, and lock down what must never change silently (URLs, nav labels, form field names, analytics events). Use whenever the task is "redesign," "modernize," "refresh," or "update" an EXISTING site, as opposed to building one from scratch.
---

# Redesign Protocol

Misclassifying greenfield vs. redesign is the single biggest source of bad redesign output. This skill forces mode detection and an audit before any visual change happens.

## Step 1: Detect the mode

- **Greenfield** — no existing site, or a full overhaul has been explicitly approved. Use dial baseline from the brief-inference-and-dials skill.
- **Redesign – Preserve** — modernize without breaking the brand. Audit first, extract brand tokens, evolve gradually.
- **Redesign – Overhaul** — new visual language on top of existing content. Treat visuals as greenfield; preserve content and information architecture.

**If ambiguous, ask once:** *"Should this redesign preserve the existing brand, or are we starting visually from scratch?"*

## Step 2: Audit before touching anything

**If the project has `docs/contexto/`:** read `arquitectura.md` and `decisiones.md` first — they may document brand tokens, stack decisions, and what must not change. Don't ask things already answered there.

Document the current state before proposing changes:

- **Brand tokens** — primary/accent colors, type stack, logo treatment, corner-radius system
- **Information architecture** — page tree, primary nav, key conversion paths
- **Content blocks** — what exists, what's doing work, what's filler
- **Patterns to preserve** — signature interactions, recognizable hero, copy voice
- **Patterns to retire** — AI-slop tells, broken layouts, dead links, generic stock imagery, perf traps
- **Dial reading of the existing site** — infer current `DESIGN_VARIANCE`/`MOTION_INTENSITY`/`VISUAL_DENSITY`. That's the starting point, not the baseline.
- **SEO baseline** — current ranking pages, meta titles, structured data, OG cards. **SEO migration is the #1 redesign risk.**

## Step 3: Preservation rules

- **Do not change information architecture** unless asked. Keep page slugs, anchor IDs, and primary nav labels stable for SEO and muscle memory.
- **Extract brand colors before applying any anti-slop color rule.** A brand that's already purple stays purple.
- **Preserve copy voice** unless a rewrite was explicitly requested. Visual modernization is not a content rewrite.
- **Honor existing accessibility wins.** Do not regress focus states, alt text, keyboard nav, or contrast that already work.
- **Respect existing analytics events.** Do not rename buttons, form fields, or section IDs that downstream tracking depends on.

## Step 4: Modernization levers, in priority order

Apply in order — stop once the brief is satisfied:

1. **Typography refresh** — biggest visual lift per unit of risk
2. **Spacing & rhythm** — increase section padding, fix vertical rhythm
3. **Color recalibration** — desaturate, unify neutrals, keep the brand accent
4. **Motion layer** — add dial-appropriate micro-interactions to existing components
5. **Hero & key-section recomposition** — restructure top-of-funnel
6. **Full block replacement** — only when the existing block is genuinely unsalvageable

## Step 5: Decide targeted evolution vs full redesign

- IA, content, and SEO are sound → **targeted evolution** (levers 1-4 only). ~70% of the value at ~40% of the risk.
- Visual debt is structural (broken IA, no design system, broken mobile) → **full redesign** with strict content preservation.
- The brand itself is changing → **greenfield**.

## Step 6: What never changes without explicit approval

Never modify silently:
- URL structure / route slugs
- Primary nav labels
- Form field names or order (breaks analytics + browser autofill)
- Brand logo or wordmark
- Existing legal / consent / cookie copy

## Redesign checklist

- [ ] Mode detected (greenfield / preserve / overhaul) — asked once if ambiguous
- [ ] Full audit completed before any code changed
- [ ] Existing brand tokens extracted and respected (color, type, radius)
- [ ] IA and page slugs unchanged unless explicitly requested
- [ ] Copy voice preserved unless a rewrite was requested
- [ ] Existing accessibility wins not regressed
- [ ] Analytics-critical names (buttons, form fields, section IDs) unchanged
- [ ] Modernization levers applied in priority order, stopping once brief is met
- [ ] SEO baseline (meta, structured data, OG) checked against the new build
