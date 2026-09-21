import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { home } from "@/lib/content";

// 03 Making. Cut, canvas, fit, finish: a 2×2 photographic grid.
export function Craft() {
  const c = home.craft;
  return (
    <section id="craft" className="bg-cream pb-[clamp(110px,16vh,190px)] pt-[var(--section-y)]">
      <div className="mx-auto max-w-wide px-[var(--gutter)]">
        <p className="kicker text-[rgba(28,26,23,.55)]">{c.kicker}</p>
        <Reveal as="h2" className="h-section">
          {c.title}
        </Reveal>
      </div>

      <div className="card-grid mx-auto mt-[clamp(64px,10vh,130px)] max-w-wide px-[var(--gutter)]">
        {c.steps.map((s) => (
          <article
            key={s.label}
            className="on-dark relative flex min-h-[clamp(430px,62vh,660px)] items-end overflow-hidden bg-ink-deep"
          >
            <Photo
              src={s.image}
              alt={s.alt}
              position={s.position}
              grade="card"
              scrims={["card"]}
              sizes="(min-width: 960px) 50vw, 100vw"
              audit={s.audit}
              auditAt="tl"
            />
            <div className="relative z-10 p-[clamp(30px,3.6vw,54px)]">
              <p className="mb-3.5 text-[10.5px] uppercase tracking-[0.24em] text-[rgba(244,241,234,.62)]">
                {s.label}
              </p>
              <p className="max-w-[16ch] font-serif text-[clamp(22px,1.9vw,30px)] font-light leading-[1.2] tracking-[-0.02em]">
                {s.line}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
