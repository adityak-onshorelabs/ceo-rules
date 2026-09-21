import { Reveal } from "@/components/Reveal";
import { house } from "@/lib/content";

// The House, told as a line handed down. Each beat carries a large serif marker
// (the same numeral gravitas as Heritage) beside a short body. Dark cinema surface.
export function Lineage() {
  const { lineage } = house;

  return (
    <section
      data-nav="dark"
      className="on-dark section mx-auto max-w-editorial"
    >
      <Reveal as="p" className="eyebrow mb-8">
        {lineage.eyebrow}
      </Reveal>
      <Reveal>
        <p className="max-w-measure t-h2 text-ink-dark">{lineage.intro}</p>
      </Reveal>

      <div className="mt-[clamp(3rem,8vh,6rem)] space-y-[clamp(2.5rem,6vh,4.5rem)]">
        {lineage.beats.map((b, i) => (
          <Reveal
            key={b.marker}
            delay={0.04}
            className="grid grid-cols-1 items-baseline gap-x-[clamp(2rem,5vw,5rem)] gap-y-3 stitch-top-dark pt-[clamp(1.5rem,4vh,3rem)] sm:grid-cols-[0.4fr_1fr]"
          >
            <div>
              <p className="font-serif leading-none text-gold-on-dark text-[clamp(3rem,7vw,5.5rem)] tracking-[-0.02em]">
                {b.marker}
              </p>
              <p className="mt-3 eyebrow">{b.label}</p>
            </div>
            <p className="max-w-measure t-lede text-ink-dark-muted">{b.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.06}>
        <p className="mt-[clamp(3rem,7vh,5rem)] font-serif text-[clamp(1.2rem,1.7vw,1.6rem)] italic text-gold-on-dark">
          {lineage.close}
        </p>
      </Reveal>

      {/* Pedigree close. */}
      <Reveal delay={0.08}>
        <p className="mt-[clamp(2.5rem,6vh,4rem)] max-w-[24ch] font-serif text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.15] text-ink-dark">
          {house.tagline}
        </p>
      </Reveal>
    </section>
  );
}
