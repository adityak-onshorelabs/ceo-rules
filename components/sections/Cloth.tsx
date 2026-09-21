import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { CtaLink } from "@/components/CtaLink";
import { MeasureTicks } from "@/components/MeasureTicks";
import { cloth } from "@/lib/content";

// The Cloth (Loro Piana model): material as hero. The finest houses read as an
// editorial ledger, name and provenance, never a grid of logos.
export function Cloth() {
  return (
    <section
      id="cloth"
      data-nav="light"
      className="section mx-auto max-w-editorial"
    >
      {/* Opening statement */}
      <div className="max-w-[46rem]">
        <Reveal>
          <MeasureTicks className="mb-6 h-2.5 w-32 text-gold-ink" />
        </Reveal>
        <Reveal as="p" className="eyebrow mb-8">
          {cloth.eyebrow}
        </Reveal>
        <Reveal>
          <h2 className="t-h1 text-balance text-ink">{cloth.headline}</h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-8 max-w-measure t-lede text-ink">{cloth.lead}</p>
        </Reveal>
      </div>

      {/* The houses, as a ledger + a tall detail plate alongside */}
      <div className="mt-[clamp(3.5rem,9vh,7rem)] grid grid-cols-1 gap-x-[clamp(3rem,7vw,7rem)] gap-y-14 lg:grid-cols-[1fr_0.62fr]">
        <div>
          <Reveal as="p" className="eyebrow mb-8 text-ink-faint">
            {cloth.housesLabel}
          </Reveal>
          <ul>
            {cloth.houses.map((h, i) => (
              <Reveal
                as="li"
                key={h.name}
                delay={0.03}
                className={`grid grid-cols-1 gap-y-1 stitch-top py-[clamp(1.25rem,3vh,2rem)] sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-x-8 ${
                  i === cloth.houses.length - 1 ? "stitch-bottom" : ""
                }`}
              >
                <div>
                  <p className="font-serif text-[clamp(1.35rem,2.2vw,2rem)] text-ink">
                    {h.name}
                  </p>
                  <p className="mt-1.5 max-w-measure text-[0.95rem] text-ink-muted">
                    {h.line}
                  </p>
                </div>
                <p className="eyebrow text-ink-faint sm:text-right">{h.place}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal as="figure" delay={0.1} className="hidden lg:block">
          <Plate
            src={cloth.detailImage}
            alt={cloth.detailAlt}
            className="aspect-[3/4] w-full"
          />
        </Reveal>
      </div>

      {/* One education pull, then out to Philosophy */}
      <Reveal
        delay={0.06}
        className="mt-[clamp(3.5rem,8vh,6rem)] max-w-measure stitch-top-gold pt-10"
      >
        <p className="eyebrow mb-4 text-gold-ink">{cloth.teach.eyebrow}</p>
        <p className="t-lede italic text-ink">{cloth.teach.body}</p>
        <div className="mt-8">
          <CtaLink href={cloth.teach.link.href}>{cloth.teach.link.label}</CtaLink>
        </div>
      </Reveal>
    </section>
  );
}
