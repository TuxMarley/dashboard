---
name: copy-slop-bans
description: Hard-banned copywriting patterns that read as AI-generated text ("slop") — em-dashes, filler verbs, generic names, fake-precise numbers, meta-criticism, poetic scaffolding. Use when writing or reviewing any user-facing copy on a website, app, or landing page. Pairs with visual-bans and layout-bans.
---

# Copy Slop Bans

Text-level tells that mark a page as AI-written even when the visual design is strong. Run this as a literal find-and-replace pass over every visible string before shipping.

## How to use this skill

1. Re-read every visible string on the page: headlines, subheads, eyebrows, button labels, body copy, captions, alt text, footer text, error messages, quote attributions.
2. Flag any match against the bans below.
3. Rewrite. Do not soften a ban into "use sparingly" — every rule here is binary.

---

## 1. Em-dash ban (the single most-violated rule)

**The em-dash (`—`) is completely banned. Zero occurrences, anywhere visible.** Not "limited use," not "fine in body copy" — zero.

Banned in:
- Headlines → use a period or comma instead
- Eyebrows / labels / pills / button text / captions / nav items → line breaks, columns, or hairlines instead
- Body copy → restructure into two sentences, or use a comma, parentheses, or colon
- Quote attribution → use a normal hyphen with spaces (` - `)
- En-dash (`–`) as a separator too → date ranges (`2018-2026`) and number ranges (`€40-80k`) use a plain hyphen

The only permitted dash characters anywhere on the page: the regular hyphen `-` (compound words, ranges) and the minus sign in math (`-5°C`).

**Why this rule is phrased as binary, not "sparingly":** models historically ignore soft limits on em-dash use. Zero is the only enforceable threshold.

## 2. Filler verbs

Banned verbs in headlines, CTAs, and body copy: **Elevate, Seamless, Unleash, Next-Gen, Revolutionize, Delve, Empower, Underscore, Pivotal, Game-changer.**

**Rewrite:** use concrete verbs that name the actual action ("ship," "track," "compare," "export" — whatever the product literally does).

## 3. Generic placeholder names

Banned: "John Doe," "Sarah Chan," "Jack Su," or any name that reads as a stock filler identity.

**Rewrite:** invent creative, realistic, locale-appropriate names that fit the brand's actual audience.

## 4. Generic avatars

Banned: SVG "egg" avatars, default Lucide/Heroicons user-outline icons as a stand-in for a person.

**Rewrite:** believable photo placeholders (via an image-gen tool or a real photo source), or a distinct illustrated style if the brand calls for it.

## 5. Fake-perfect or fake-precise numbers

Banned round numbers that read as invented: `99.99%`, `50%`, `1234567`.

Also banned: fake engineering precision the brand doesn't actually claim — `92%`, `4.1×`, `48k`, `5.8mm`, `13.4lb` invented purely for "spec aesthetic."

**Rewrite:** use organic, messy real data (`47.2%`, `+1 (312) 847-1928`), or explicitly label mock data (`<!-- mock -->`, "example," "sample data").

## 6. Startup-slop brand names

Banned invented brand names: "Acme," "Nexus," "SmartFlow," "Cloudly," "Flowbit," "Quantumly," "NovaCore."

**Rewrite:** invent a contextual, specific name that sounds like it belongs to the actual category and audience — not a generic startup-name-generator output.

## 7. Meta-criticism / strawman copy

Naming a concept and then layering an ironic modifier on it ("not just another dashboard"), or staging a strawman position only to knock it down ("Some tools make you choose. We didn't.").

**Rewrite:** make the specific, positive claim directly. Don't perform criticism of an unnamed competitor as a rhetorical device.

## 8. Poetic / performative-craftsman labels

Banned section labels: "Field notes," "Currently on the bench," "On our desks," "Loose plates," "From the field."

Banned social-proof headers: "Quietly trusted by," "Quietly in use at."

Banned mock-humble asides: "We respect the French ones" (or any similar cute industry-reference aside).

**Rewrite:** plain functional labels ("Testimonials," "Latest writing," "Now working on," "Trusted by," "Used at") — or skip the label entirely if the content speaks for itself.

## 9. Micro-meta-sentences under eyebrows

A sentence sitting under a section heading that explains the section's own honesty or scope ("Each of these is a feature we ship today, not a roadmap promise. The list will stay short on purpose.").

**Rewrite:** delete it. Eyebrow + headline + body is enough; don't narrate your own restraint.

## 10. Generic step labels

Banned: "Stage 1 / Stage 2 / Stage 3," "Step 1 / Step 2 / Step 3," "Phase 01 / Phase 02," "Pass One / Pass Two."

**Rewrite:** the actual verb-noun content is the label ("Install," "Configure," "Ship") — not a generic ordinal wrapper around it.

## 11. Locale / time / weather decoration strips

Banned unless the brief is genuinely about a globally-distributed studio, a travel brand, or a real physical venue: "Lisbon, working with founders," "LIS 14:23 · 18°C," atmospheric city-name strips in nav or footer.

**Rewrite:** a single factual contact address in the footer is fine. An atmospheric locale strip is decoration and should be cut.

## 12. Scroll cues

Banned: "Scroll," "↓ scroll," "Scroll to explore," animated mouse-wheel icons.

**Rewrite:** delete. If the user hasn't scrolled yet, they're looking at the hero and already know what scrolling is.

## 13. Version labels and fake system footers

Banned in hero or footer of marketing pages: `V0.6`, `v2.0`, `BETA`, `INVITE-ONLY PREVIEW`, `EARLY ACCESS`, `v1.4.2`, `Build 0048`, `last sync 4s ago · main`.

**Rewrite:** delete, unless the brief is explicitly about a product launch / preview status, in which case use it once and mean it.

## 14. Middle-dot separator overuse

The middle-dot (`·`) is rationed to at most 1 per line in metadata strips. Using it as the default separator for everything ("foo · bar · baz · qux") is a tell.

**Rewrite:** line breaks, hairlines, or columns for anything beyond a single simple pairing.

## 15. Grammatically broken or AI-hallucinated phrasing

Watch specifically for:
- Grammatically broken fragments ("free on its past," "two plans but one is honest")
- Unclear referents ("we plan to stay that way" with no prior antecedent)
- Cute-but-wrong wordplay or forced metaphors that don't actually track
- Passive-aggressive humility or fake-craftsman phrasing that reads like an LLM "trying to sound thoughtful"

**Rewrite:** replace with a plain, functional sentence. Boring-but-correct beats clever-but-broken every time.

---

## Copy self-audit checklist

Run this before declaring any copy task complete:

- [ ] Zero em-dashes (`—`) or en-dashes-as-separator (`–`) anywhere visible
- [ ] Zero filler verbs (Elevate, Seamless, Unleash, Next-Gen, Revolutionize, Delve, Empower)
- [ ] No generic placeholder names (John Doe, Sarah Chan)
- [ ] No generic egg/user-outline avatars
- [ ] No fake-perfect numbers (99.99%, 50%, 1234567) or unlabeled fake-precise specs
- [ ] No startup-slop invented brand names (Acme, Nexus, SmartFlow)
- [ ] No meta-criticism / strawman rhetorical copy
- [ ] No poetic performative-craftsman section labels
- [ ] No micro-meta-sentence narrating the section's own honesty
- [ ] No generic "Step 1/2/3" or "Phase 01/02" labels
- [ ] No locale/time/weather decoration strip (unless brief-justified)
- [ ] No scroll cues ("Scroll," "↓ scroll")
- [ ] No version labels or fake system footers (unless brief is a real launch)
- [ ] Middle-dot (`·`) used at most once per line
- [ ] Every string re-read for grammatical breaks, unclear referents, or hallucinated phrasing
