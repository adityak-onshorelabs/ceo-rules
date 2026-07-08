import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { process } from "@/lib/content";

// The Atelier (Aman model): the visit as an unhurried sequence. Numbered beats
// beside the one photograph of the thing itself, a conversation over coffee.
export function Process() {
  return (
    <section
      id="process"
      data-nav="light"
      className="section mx-auto max-w-editorial"
    >
      <div className="max-w-[44rem]">
        <Reveal as="p" className="eyebrow mb-8">
          {process.eyebrow}
        </Reveal>
        <Reveal>
          <h2 className="t-h1 text-balance text-ink">{process.headline}</h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-8 max-w-measure t-lede text-ink">{process.lead}</p>
        </Reveal>
      </div>

      <div className="mt-[clamp(3.5rem,9vh,7rem)] grid grid-cols-1 gap-x-[clamp(3rem,7vw,7rem)] gap-y-14 lg:grid-cols-[1fr_0.72fr]">
        {/* The sequence */}
        <ol>
          {process.steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={0.03}
              className="grid grid-cols-[auto_1fr] gap-x-[clamp(1.25rem,3vw,2.5rem)] border-t border-hairline py-[clamp(1.5rem,4vh,2.75rem)] last:border-b"
            >
              <span
                aria-hidden
                className="font-serif leading-none text-ink-faint text-[clamp(1.75rem,3.5vw,2.75rem)]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="max-w-measure">
                <h3 className="t-h2 text-ink">{s.title}</h3>
                <p className="mt-3 text-ink-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* The photograph */}
        <Reveal as="figure" delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
          <Plate
            src={process.image}
            alt={process.imageAlt}
            className="aspect-[4/5] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
