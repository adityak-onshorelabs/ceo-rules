# CEO Rules — Brand Experience Website

Digital flagship for CEO Rules, a bespoke tailoring house (est. 1881, Bandra, Mumbai). Not a
tailoring site: a brand experience for a philosophy that happens to express itself through tailoring.

## Foundation

- **Strategy / content:** `docs/CEO-Rules-Content-Foundation.md`
- **Product strategy:** `PRODUCT.md`
- **Design system (source of truth for tokens):** `DESIGN.md`
- **Original brief:** `docs/CEO Rules - Wesbite Brief.pdf`

## Status

High-fidelity **prototype** of the homepage vertical slice: **Hero → Manifesto → Identity**.
Copy is provisional (see `lib/content.ts`) and imagery is stand-in stock. Real photography and
final copy replace these later (brief: authentic imagery only, no stock/AI).

## Stack

Next.js 14 (App Router, TS) · Tailwind CSS 3 · Framer Motion. Fonts via `next/font`
(Fraunces display serif, Hanken Grotesk body).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build / typecheck
```

## Structure

```
app/            layout (fonts), globals (design tokens), page (composition)
components/     Nav, Reveal (motion), Plate (image + warm fallback), CtaLink
components/sections/  Hero, Manifesto, Identity
lib/content.ts  provisional copy
```

## Notes

- Design tokens are CSS variables in `app/globals.css`, mirrored into `tailwind.config.ts`. Change
  them in one place.
- Motion respects `prefers-reduced-motion`.
- Stand-in images load from Unsplash (configured in `next.config.mjs`); a warm gradient sits behind
  each so a failed image never looks broken.
