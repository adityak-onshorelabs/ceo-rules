import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { founder } from "@/lib/content";

// The emotional centre. He appears as a mentor, never an "About" card.
export function MeetAnis() {
  return (
    <section
      id="founder"
      data-nav="dark"
      className="on-dark section mx-auto max-w-editorial"
    >
      <div className="grid grid-cols-1 items-center gap-x-[clamp(3rem,7vw,7rem)] gap-y-14 lg:grid-cols-[1fr_0.82fr]">
        {/* words */}
        <div>
          <Reveal as="p" className="eyebrow mb-10">
            {founder.eyebrow}
          </Reveal>

          <Reveal>
            <blockquote className="t-h2 max-w-[20ch] italic text-ink-dark">
              &ldquo;{founder.quote}&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-6 font-sans text-[0.8rem] uppercase tracking-[0.14em] text-ink-dark-muted">
              {founder.attribution}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-12 max-w-measure t-lede text-ink-dark-muted">{founder.body}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-10 font-serif text-[clamp(1.1rem,1.5vw,1.4rem)] text-gold-on-dark">
              {founder.roles}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-4 text-[0.9rem] italic text-ink-dark-muted">{founder.note}</p>
          </Reveal>
        </div>

        {/* portrait */}
        <Reveal as="figure" delay={0.14}>
          <Plate
            src={founder.image}
            alt={founder.imageAlt}
            className="aspect-[4/5] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
