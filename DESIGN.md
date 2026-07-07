# Design

The visual system for the CEO Rules brand-experience site. Warm, editorial, restrained. Images
dominate, copy supports, gold is precious. Every value below is a commitment, not a suggestion:
change tokens here, not ad hoc in components.

Governing feel: **an editorial daylight atelier.** Ivory paper you'd find in a 145-year-old
tailoring house, charcoal ink, a few dark cinematic moments where the story deepens. Warm and
Mumbai-grounded, never cold-European. Luxury whispers.

---

## Theme

Light-primary with cinematic dark sections. The default canvas is warm ivory (the "paper");
select full-bleed moments (hero, the founder, occasional transitions) invert to a warm dark
"cinema" surface. Not a user-toggled light/dark mode: the light/dark rhythm is authored, part of
the story pacing. No `#000`, no `#fff`: every neutral is tinted warm (hue ~60–80).

Scene sentence: *a self-made man, alone at night on his phone, scrolling a house that feels like
warm daylight and old paper, not a cold luxury storefront.*

## Color

Strategy: **Restrained.** Warm neutrals (ivory, charcoal, brown) carry everything; **gold is the
single accent, used ≤10% and only where it means something** (a rule beside 1881, a mark, a hairline
under a live link). Forest green is reserved, deep, and rare (at most one moment, e.g. a single
section field or the footer) so it never becomes decorative. All values OKLCH.

### Light surface (default "paper")

| Role | OKLCH | Use |
|---|---|---|
| `--bg` | `oklch(0.955 0.010 78)` | Ivory canvas, the paper |
| `--surface` | `oklch(0.925 0.012 76)` | Slightly recessed blocks, quote fields |
| `--ink` | `oklch(0.235 0.012 62)` | Warm charcoal, primary text & headlines |
| `--ink-muted` | `oklch(0.435 0.028 58)` | Warm brown-gray, secondary text, captions |
| `--ink-faint` | `oklch(0.620 0.022 62)` | Eyebrows, meta, disabled |
| `--hairline` | `oklch(0.235 0.012 62 / 0.14)` | Thin rules & borders (full borders only) |
| `--gold` | `oklch(0.735 0.088 82)` | Precious accent. Marks, rules, live-link underline |
| `--gold-ink` | `oklch(0.560 0.078 74)` | Gold as *text* on ivory (contrast-safe, small use) |
| `--forest` | `oklch(0.340 0.046 156)` | Reserved deep green, one rare moment only |

### Dark surface ("cinema", full-bleed sections)

| Role | OKLCH | Use |
|---|---|---|
| `--bg-dark` | `oklch(0.185 0.012 58)` | Warm near-black charcoal canvas |
| `--surface-dark` | `oklch(0.235 0.014 58)` | Raised block on dark |
| `--ink-dark` | `oklch(0.945 0.010 80)` | Warm ivory text on dark |
| `--ink-dark-muted` | `oklch(0.760 0.020 72)` | Secondary text on dark |
| `--hairline-dark` | `oklch(0.945 0.010 80 / 0.16)` | Rules on dark |
| `--gold-on-dark` | `oklch(0.780 0.100 84)` | Gold accent on dark (sings here; primary gold home) |

### Rules
- Gold never fills large areas and never decorates for its own sake. If gold is not carrying
  meaning (heritage, a single primary CTA mark, an active link), remove it.
- Body text is always `--ink` on light / `--ink-dark` on dark. Never gold body text.
- Contrast: `--ink` on `--bg` ≈ 11:1; `--ink-muted` on `--bg` ≈ 5.4:1; `--gold-ink` on `--bg`
  ≥ 4.5:1 for small text. Large display type may use lighter warm tones down to 3:1.

## Typography

Two families. **Serif headlines, sans body.**

- **Display / headlines:** **Fraunces** (variable, opsz, incl. italic). Weight ~420, tight tracking
  (`-0.02 to -0.015em`) at large sizes. Warm, editorial, ages well. Italic for accent phrases
  (e.g. *You leave significant*). CSS var `--font-serif`; applies to `h1–h3`, `.t-display/.t-h1/.t-h2`,
  and the Tailwind `font-serif` class.
- **Body / UI / ledes:** **Montserrat** (variable, incl. italic), ~400 body / 500 emphasis,
  `letter-spacing: -0.003em`. CSS var `--font-sans`.
- **Eyebrow / labels / meta:** Montserrat, uppercase, weight 500, letter-spacing `0.14em`,
  size `0.75rem`, color `--ink-muted` (AA on ivory). The only place we track type wide.
- Load via `next/font/google`, `display: swap`. Serif fallback `Georgia, serif`; sans fallback
  `system-ui, sans-serif`.

### Scale (fluid, ratio ≈ 1.3, clamp min→max)

| Token | clamp | Family / notes |
|---|---|---|
| `--t-display` | `clamp(3.2rem, 7vw, 7rem)` | Fraunces, line-height 0.98, tracking -0.02em |
| `--t-h1` | `clamp(2.4rem, 4.5vw, 4rem)` | Fraunces, lh 1.04 |
| `--t-h2` | `clamp(1.8rem, 3vw, 2.6rem)` | Fraunces, lh 1.1 |
| `--t-h3` | `clamp(1.3rem, 2vw, 1.6rem)` | Fraunces or Hanken 500, lh 1.2 |
| `--t-lede` | `clamp(1.15rem, 1.6vw, 1.4rem)` | Hanken 400, lh 1.55, for section ledes |
| `--t-body` | `1.0625rem` | Hanken 400, lh 1.65, max width 66ch |
| `--t-small` | `0.875rem` | captions, meta |
| `--t-eyebrow` | `0.75rem` | uppercase, tracked |

Body measure capped at **66ch**. One idea per line in display copy; let it break intentionally.

## Layout & Spacing

Whitespace communicates the luxury, not decoration. Vary rhythm; never pad everything equally.

- **Space scale (rem):** `0.25 · 0.5 · 0.75 · 1 · 1.5 · 2 · 3 · 4 · 6 · 8 · 12 · 16`. Tokens
  `--s-1`…`--s-16`. Use large steps between sections, small within.
- **Section rhythm:** vertical padding `clamp(6rem, 12vh, 12rem)`. Cinematic/founder sections may go
  to full viewport height. Do not use uniform section spacing: alternate denser and airier.
- **Content width:** text column `min(66ch, 92vw)`; wide editorial `min(78rem, 92vw)`; full-bleed
  imagery breaks the grid edge-to-edge.
- **Grid:** 12-col on desktop, generous gutters (`--s-3`+), collapses to 1-col mobile-first.
- **No card reflex.** Sections are editorial compositions (image + type on the page), not boxes.
  Avoid containers, avoid nested boxes. Testimonials and the wardrobe are laid out editorially, not
  as identical card grids.

## Imagery

Images dominate; they are the medium of emotion (brief: authentic only, no stock, no AI people).

- Full-bleed and large. Warm, textured, human, editorial. Prefer duotone-safe warm grading.
- On dark cinematic sections, apply a subtle warm charcoal gradient scrim
  (`--bg-dark` at 0→55% alpha) behind text for legibility, never a flat wash over the whole image.
- Corners: **square** (radius 0) for editorial imagery. Slight `2px` only if an image sits inside a
  UI affordance. No heavy shadows on images; separation via space and hairlines.
- Aspect: portrait and 3:2 favored; avoid perfect squares (reads like a catalogue/IG grid).
- `next/image`, priority on hero only, lazy elsewhere; provide warm-tone blur placeholders.

## Components

### Buttons / CTAs
Text-forward and refined. **No oversized rounded pills, no flashy hover.**
- Primary: `--ink` text with a `1px` gold rule beneath (`--gold`), or on dark, ivory text with gold
  rule. Hover: the rule draws/thickens to `1.5px` over 300ms; label shifts to `--gold-ink`. No fill
  jump, no scale, no shadow.
- Secondary: uppercase eyebrow-style link with a hairline underline that draws on hover.
- Radius `2px` max if a bordered variant is ever needed; padding `0.75rem 1.25rem`. Luxury whispers.

### Links
Inline links carry a `1px` gold underline at `0.12` alpha that rises to full on hover (underline
draw, 250ms). Never blue, never bold-colored.

### Eyebrow label
Uppercase tracked Hanken 500, `--ink-faint`, often preceding a serif headline. The house's quiet
section signposting.

### Section
A composition unit: optional eyebrow → serif headline → lede (Hanken) → body/image. Each section
should hand its emotion to the next (Curiosity → Respect → Trust → Connection → Aspiration → Action)
and leave one small true takeaway (education woven in).

### Founder block ("Meet Anis Soomar")
Emotional center. Dark cinema surface. Large warm portrait, generous negative space, a short first-
person line set in Fraunces italic. Never a corporate headshot card, never "Founder/CEO" label.

### Testimonial
Single quote at a time or a slow editorial sequence. Fraunces for the quote, small Hanken
attribution. No stars, no logos, no card grid. Reserve `--surface` field or `--forest` for at most
one such moment.

### Navigation
Minimal: wordmark + 2–3 quiet links + one gold-ruled CTA (*Visit the Atelier*). Transparent over
hero, resolves to ivory (or stays on dark over cinema sections) on scroll. No dropdown clutter.

### Footer
Minimal, elegant, nothing unnecessary. Optionally the single `--forest` moment. Addresses (both
Bandra stores), WhatsApp, hours, wordmark. No newsletter nag.

## Elevation

Luxury via space, not shadow. Default is **flat**. Separation comes from whitespace, hairlines, and
the light/dark surface shift. At most one soft, warm, low shadow reserved for a floating nav or a
lifted image:
`--shadow-soft: 0 1px 2px oklch(0.235 0.012 62 / 0.06), 0 8px 24px oklch(0.235 0.012 62 / 0.08)`.
No glassmorphism. No glow. No neumorphism.

## Motion

Motion should move like fabric: slow, weighted, intentional. **Never bounce, never elastic, never
playful.** Elegance, not excitement.

- **Durations:** micro 200ms · standard 400–600ms · cinematic reveals 700–900ms.
- **Easing:** ease-out-expo `cubic-bezier(0.16, 1, 0.3, 1)` for reveals; ease-out-quart
  `cubic-bezier(0.25, 1, 0.5, 1)` for UI. No spring/bounce curves.
- **Animate transform & opacity only** (never layout properties). Section content rises `16–24px`
  and fades in on scroll; images do slow parallax/scale (≤1.06) over long distances.
- **Stagger:** 60–90ms between sibling reveals; unhurried.
- **`prefers-reduced-motion: reduce`:** disable parallax, scroll reveals, and any autoplay; content
  appears static and fully legible. Motion is never load-bearing.
- Tech: prefer CSS + Framer Motion; GSAP/ScrollTrigger only where a scroll-scrubbed sequence truly
  needs it (per brief). No animation may reduce usability.

## Iconography

Sparse. Thin (1.25–1.5px stroke), understated line icons only where functional (WhatsApp, map pin,
menu). No decorative icon sets, no icon-in-a-box grids.

---

## Do / Don't recap

- **Do:** lead with the serif, let images fill the frame, keep gold rare and meaningful, leave
  breathing room, author the light→dark rhythm, keep motion slow and weighted.
- **Don't:** card grids, gradient text, side-stripe borders, glass, big rounded buttons, flashy
  hovers, uniform spacing, cold pure-black/white, gold-as-decoration, bounce.

Register: **brand**. When in doubt, remove it (brief: if a thing can't justify why it exists, it
shouldn't).
