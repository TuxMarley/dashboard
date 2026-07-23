---
name: hero-patterns-and-content-density
description: A vocabulary of named hero/layout/component patterns to reach for deliberately (Asymmetric Split Hero, Sticky-Stack, Magnetic Button, etc.), plus hard content-density rules for landing pages (section copy limits, quote limits, spec-table alternatives, image asset strategy). Use when composing landing page sections after the dials and design system are already chosen, to pick concrete named patterns instead of defaulting to generic layouts.
---

# Hero Patterns & Content Density

A reference vocabulary plus density discipline. Use the named patterns to compose deliberately; use the density rules to keep every section readable at a glance rather than becoming a data dump.

## Hero paradigms

- **Asymmetric Split Hero** — text on one side, asset on the other, generous white space
- **Editorial Manifesto Hero** — large type, no asset, almost-poster
- **Video / Media Mask Hero** — type cut out as a mask over video background
- **Kinetic-Type Hero** — animated typography as the primary visual
- **Curtain-Reveal Hero** — hero parts open on scroll like a curtain
- **Scroll-Pinned Hero** — hero stays pinned while content scrolls behind it

## Navigation & menus

- **Dock Magnification** — edge nav, icons scale fluidly on hover
- **Magnetic Button** — pulls toward the cursor
- **Gooey Menu** — sub-items detach like viscous liquid
- **Dynamic Island** — morphing pill for status/alerts
- **Mega Menu Reveal** — full-screen dropdown, stagger-fade content

## Layout & grids

- **Bento Grid** — asymmetric tile grouping (Apple Control Center style)
- **Masonry Layout** — staggered grid, no fixed row height
- **Split-Screen Scroll** — two halves sliding in opposite directions
- **Sticky-Stack Sections** — sections that pin and stack on scroll

## Cards & containers

- **Parallax Tilt Card** — 3D tilt tracking mouse coordinates
- **Spotlight Border Card** — border illuminates under cursor
- **Glassmorphism Panel** — frosted glass with inner refraction (see design-system-selector for the honest implementation)
- **Morphing Modal** — a button expands into its own dialog

## Scroll animations

- **Sticky Scroll Stack** — cards stick and physically stack (see the GSAP skeleton below)
- **Horizontal Scroll Hijack** — vertical scroll drives a horizontal pan
- **Zoom Parallax** — a central background image zooms on scroll
- **Scroll Progress Path** — an SVG line draws itself along scroll position

### Sticky-Stack canonical skeleton (GSAP)

```tsx
"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export function StickyStack({ cards }: { cards: React.ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;
    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".stack-card");
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",           // must pin at viewport top, not "top center"
          endTrigger: cardEls[cardEls.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <div ref={ref} className="relative">
      {cards.map((card, i) => (
        <div key={i} className="stack-card sticky top-0 min-h-[100dvh] flex items-center justify-center">
          {card}
        </div>
      ))}
    </div>
  );
}
```

Common failure: trigger fires halfway through scroll instead of pinning at viewport top. Fix is always `start: "top top"`, never `"top center"` or `"top 80%"`.

### Horizontal-Pan canonical skeleton (GSAP)

```tsx
"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export function HorizontalPan({ children }: { children: React.ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return;
    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section ref={wrap} className="relative overflow-hidden">
      <div ref={track} className="flex h-[100dvh] items-center">{children}</div>
    </section>
  );
}
```

### Scroll-Reveal Stagger (lighter, no pinning needed)

```tsx
"use client";
import { motion, useReducedMotion } from "motion/react";

export function RevealStagger({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  return (
    <ul className="grid gap-6">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
```

Use `whileInView` for simple "enter on scroll" moments (feature lists, testimonial grids, logo walls). Reserve GSAP for actual pin/scrub work.

**Forbidden regardless of pattern:** `window.addEventListener("scroll", ...)` for anything visual. Use Motion's `useScroll()`, GSAP ScrollTrigger, IntersectionObserver, or CSS `animation-timeline: view()`.

---

## Content density rules

Landing pages live on the first impression, not the full read. Cut ruthlessly.

- **Default content shape per section:** headline ≤ 8 words + sub-paragraph ≤ 25 words + one visual asset OR one CTA. Anything more must be justified by the section's job.
- **No data-dump sections.** A 20-row publication table or a full pricing matrix on a marketing page is the wrong layout. Use top 3-5 highlights + "View full list," a marquee/carousel for breadth, or a dedicated page.
- **Lists over 5 items need a different UI component, not a longer list:** 2-column split, card grid with image+label, tabs/accordion, scroll-snap pills, or a carousel.
- **Spec sheets specifically** (the cookware/hardware/apparel pattern): never a `border-b`-per-row table. Use a 2-col card grid (spec name + large display value + one-line "why it matters"), scroll-snap pills, grouped clusters (3 logical groups, one divider each), or featured-vs-rest with a disclosure for the remainder.
- **Quotes: max 3 lines** of body. Attribution = name + role + optional company, never name-only. Real typographic quotes, not straight ASCII.
- **Copy self-audit before shipping:** re-read every visible string for grammatical breaks, unclear referents, or AI-hallucinated cute phrasing (see the copy-bans skill for the full list).
- **One copy register per page.** Don't mix technical mono metrics, editorial prose, and marketing punch unless the brand voice explicitly calls for it.

## Image & visual asset strategy

Landing pages and portfolios are visual products; text-only pages with fake-screenshot divs are slop.

**Priority order:**
1. **Image-generation tool first**, if available in the environment — generate section-specific assets at the right aspect ratio.
2. **Real web images second** — `https://picsum.photos/seed/{descriptive-seed}/{w}/{h}` for placeholders, real stock/brand URLs when the brief provides them, or open-license sources if explicitly allowed.
3. **Last resort: tell the user.** Leave clearly labeled placeholder slots (`<!-- TODO: hero product photo, 1600x1200 -->`) and state at the end exactly what images are needed and where.

**Even minimalist sites need real images.** A pure-text page is not minimalism — it's incomplete work. An editorial Linear-style site still needs 2-3 real images (hero, one product/lifestyle shot, one supporting image).

**Real logos for social proof.** Use Simple Icons (`https://cdn.simpleicons.org/{slug}/ffffff`) or devicon for tech logos. For invented brand names, generate a simple monogram SVG rather than a plain text wordmark. Ensure logos render in both light and dark mode. Logo wall = logos only, no category labels underneath.

**Never:** div-based fake product previews (fake task lists, fake terminals, fake dashboards built from styled divs) — this is the #1 hero-section tell. Use a real screenshot, a generated image, an actual mini-preview of the real UI, or skip the preview and use editorial photography instead.
