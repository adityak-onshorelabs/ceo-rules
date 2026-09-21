import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { arrival, visit } from "@/lib/content";

// The Atelier as a destination (Aman model): the address set large and calm,
// as you would read it on arrival, the room beside it, and one way to hold an
// hour. Anchored at #book so every "appointment" link lands here.
export function Arrival() {
  return (
    <section id="book" data-nav="light" className="section mx-auto max-w-editorial scroll-mt-20">
      <div className="grid grid-cols-1 items-start gap-x-[clamp(3rem,7vw,7rem)] gap-y-14 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <Reveal as="p" className="eyebrow mb-8">
            {arrival.eyebrow}
          </Reveal>
          <Reveal>
            <h2 className="t-display max-w-[12ch] text-ink">{arrival.headline}</h2>
          </Reveal>

          <Reveal delay={0.06}>
            <address className="mt-10 font-serif text-[clamp(1.25rem,1.9vw,1.7rem)] not-italic leading-snug text-ink">
              {visit.address.slice(1).map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </Reveal>

          <Reveal delay={0.08} className="stitch-top mt-12 grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">{visit.hoursLabel}</p>
              <p className="text-ink-muted">
                {visit.hours.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">Finding us</p>
              <a
                href={visit.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-gold pb-0.5 text-[0.95rem] text-ink transition-colors duration-300 hover:text-gold-ink"
              >
                {visit.mapLabel}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 max-w-measure">
            <p className="t-lede text-ink">{arrival.lead}</p>
            {/* DESIGN.md primary CTA: ink text over a 1px gold rule, no fill. */}
            <a
              href={arrival.book.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex flex-col items-start gap-1 font-sans text-[0.95rem] tracking-wide text-ink transition-colors duration-300 ease-out-quart hover:text-gold-ink"
            >
              <span>{arrival.book.label}</span>
              <span
                aria-hidden
                className="h-px w-full origin-left bg-gold transition-transform duration-500 ease-out-expo group-hover:scale-y-[1.6]"
              />
            </a>
            <p className="mt-4 text-[0.9rem] text-ink-muted">{visit.whatsapp.label}</p>
          </Reveal>
        </div>

        <Reveal as="figure" delay={0.12} className="lg:sticky lg:top-28">
          <Plate src={arrival.image} alt={arrival.imageAlt} className="aspect-[4/5] w-full" />
        </Reveal>
      </div>
    </section>
  );
}
