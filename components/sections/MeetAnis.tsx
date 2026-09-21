import { Reveal } from "@/components/Reveal";
import { Film } from "@/components/Film";
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
          <Reveal as="p" className="eyebrow mb-8">
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
            <p className="mt-8 font-serif text-[clamp(1.1rem,1.5vw,1.4rem)] text-gold-on-dark">
              {founder.roles}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-3 text-[0.9rem] italic text-ink-dark-muted">{founder.note}</p>
          </Reveal>
        </div>

        {/* The man at his desk, a length of cloth under his hand: a silent loop. */}
        <Reveal as="figure" delay={0.14}>
          <div className="relative aspect-[4/5] w-full">
            <Film
              src={founder.video}
              poster={founder.poster}
              alt={founder.videoAlt}
              position="8% 50%"
              sizes="(min-width: 1024px) 45vw, 100vw"
              audit={founder.videoAudit}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
