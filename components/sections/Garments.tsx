import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { MeasureTicks } from "@/components/MeasureTicks";
import { garments } from "@/lib/content";

// The six things the house makes, laid out as an editorial spread: two
// columns, the second set lower, photographs of differing heights with the
// name and one line beneath. A spread, not a catalogue grid.
export function Garments() {
  const left = garments.items.filter((_, i) => i % 2 === 0);
  const right = garments.items.filter((_, i) => i % 2 === 1);

  const piece = (g: (typeof garments.items)[number], i: number) => (
    <Reveal as="figure" key={g.name} delay={i * 0.05}>
      <Plate src={g.image} alt={g.alt} position={g.position} className={`${g.aspect} w-full`} />
      <figcaption className="stitch-top mt-5 pt-5">
        <p className="font-serif text-[clamp(1.4rem,2.2vw,2rem)] leading-tight text-ink">{g.name}</p>
        <p className="mt-2 max-w-[38ch] text-[0.95rem] text-ink-muted">{g.line}</p>
      </figcaption>
    </Reveal>
  );

  return (
    <section id="garments" data-nav="light" className="section mx-auto max-w-editorial">
      <Reveal>
        <MeasureTicks className="mb-6 h-2.5 w-32 text-gold-ink" />
      </Reveal>
      <Reveal as="p" className="eyebrow mb-8">
        {garments.eyebrow}
      </Reveal>
      <div className="grid grid-cols-1 gap-x-[clamp(2.5rem,6vw,6rem)] gap-y-6 lg:grid-cols-[1fr_1fr] lg:items-end">
        <Reveal>
          <h2 className="t-h1 max-w-[16ch] text-ink">{garments.headline}</h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="max-w-measure t-lede text-ink">{garments.lead}</p>
        </Reveal>
      </div>

      <div className="mt-[clamp(3rem,8vh,6rem)] grid grid-cols-1 gap-x-[clamp(1.5rem,4vw,4rem)] sm:grid-cols-2">
        <div className="space-y-[clamp(3rem,8vh,6rem)]">{left.map(piece)}</div>
        <div className="mt-[clamp(3rem,8vh,6rem)] space-y-[clamp(3rem,8vh,6rem)] sm:mt-[clamp(6rem,18vh,12rem)]">
          {right.map(piece)}
        </div>
      </div>
    </section>
  );
}
