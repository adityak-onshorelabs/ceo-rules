import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { world } from "@/lib/content";

// Beyond Bandra: the house among the tailoring world. Three photographs of
// different heights on a staggered baseline, captioned like an album, never a
// grid of equal cards.
export function World() {
  return (
    <section data-nav="light" className="section mx-auto max-w-editorial">
      <div className="grid grid-cols-1 gap-x-[clamp(2.5rem,6vw,6rem)] gap-y-6 lg:grid-cols-[1fr_1fr] lg:items-end">
        <div>
          <Reveal as="p" className="eyebrow mb-8">
            {world.eyebrow}
          </Reveal>
          <Reveal>
            <h2 className="t-h1 text-ink">{world.headline}</h2>
          </Reveal>
        </div>
        <Reveal delay={0.06}>
          <p className="max-w-measure t-lede text-ink">{world.lead}</p>
        </Reveal>
      </div>

      <div className="mt-[clamp(3rem,8vh,6rem)] grid grid-cols-1 items-start gap-[clamp(1.25rem,2.4vw,2rem)] sm:grid-cols-3">
        {world.plates.map((p, i) => (
          <Reveal
            as="figure"
            key={p.image}
            delay={i * 0.08}
            className={i === 1 ? "sm:mt-[clamp(3rem,10vh,7rem)]" : i === 2 ? "sm:mt-[clamp(1.5rem,5vh,3.5rem)]" : ""}
          >
            <Plate src={p.image} alt={p.alt} className={`${p.aspect} w-full`} />
            <figcaption className="mt-4 max-w-[30ch] text-[0.9rem] italic text-ink-muted">{p.caption}</figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
