import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { visit } from "@/lib/content";

// The natural ending: an invitation, not a pitch. Everything here removes friction.
export function Visit() {
  return (
    <section id="visit" data-nav="light" className="section mx-auto max-w-editorial">
      <div className="grid grid-cols-1 items-center gap-x-[clamp(2.5rem,6vw,6rem)] gap-y-14 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <Reveal as="p" className="eyebrow mb-8">
            {visit.eyebrow}
          </Reveal>
          <Reveal>
            <h2 className="t-h1 max-w-[16ch] text-balance text-ink">
              {visit.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-measure t-lede text-ink">{visit.lead}</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <Reveal delay={0.08}>
              <p className="eyebrow mb-3">{visit.addressLabel}</p>
              <address className="not-italic text-ink-muted">
                {visit.address.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <a
                href={visit.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block border-b border-gold pb-0.5 text-[0.9rem] text-ink transition-colors duration-300 hover:text-gold-ink"
              >
                {visit.mapLabel}
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow mb-3">{visit.hoursLabel}</p>
              <p className="text-ink-muted">
                {visit.hours.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
              <a
                href={visit.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block border-b border-gold pb-0.5 text-[0.9rem] text-ink transition-colors duration-300 hover:text-gold-ink"
              >
                {visit.whatsapp.label}
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal as="figure" delay={0.14} className="hidden lg:block">
          <Plate
            src={visit.image}
            alt={visit.imageAlt}
            className="aspect-[4/3] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
