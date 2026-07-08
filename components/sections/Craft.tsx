import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { MeasureTicks } from "@/components/MeasureTicks";
import { mastery } from "@/lib/content";

// Brief §5: demonstrate mastery through visuals, not paragraphs. A quiet triptych
// of fabric, construction, and finish.
export function Craft() {
  return (
    <section id="craft" data-nav="light" className="section mx-auto max-w-editorial">
      <Reveal>
        <MeasureTicks className="mb-6 h-2.5 w-32 text-gold-ink" />
      </Reveal>
      <Reveal as="p" className="eyebrow mb-10">
        {mastery.eyebrow}
      </Reveal>
      <div className="grid grid-cols-1 gap-x-[clamp(2.5rem,6vw,6rem)] gap-y-6 lg:grid-cols-[1fr_1fr] lg:items-end">
        <Reveal>
          <h2 className="t-h1 max-w-[16ch] text-balance text-ink">
            {mastery.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="max-w-measure t-lede text-ink">{mastery.lead}</p>
        </Reveal>
      </div>

      {/* The making, shown. */}
      <div className="mt-[clamp(3rem,7vh,5rem)] grid grid-cols-1 gap-[clamp(1rem,2vw,1.75rem)] sm:grid-cols-3">
        {mastery.pieces.map((p, i) => (
          <Reveal as="figure" key={p.label} delay={i * 0.08}>
            <Plate src={p.src} alt={p.alt} className="aspect-[4/5] w-full" />
            <figcaption className="eyebrow mt-4">{p.label}</figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
