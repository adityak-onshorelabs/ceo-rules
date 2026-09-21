import { Reveal } from "@/components/Reveal";
import { MediaField } from "@/components/MediaField";
import { MeasureTicks } from "@/components/MeasureTicks";
import { process } from "@/lib/content";
import { img } from "@/lib/images";

export function Process() {
  const conversation = img("conversation");

  return (
    <section
      id="process"
      data-nav="light"
      className="section mx-auto max-w-editorial"
    >
      <div className="max-w-[44rem]">
        <Reveal>
          <MeasureTicks className="mb-6 h-2.5 w-32 text-walnut" />
        </Reveal>
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

      <div className="mt-[clamp(3.5rem,9vh,7rem)] grid grid-cols-1 items-start gap-x-[clamp(3rem,7vw,7rem)] gap-y-14 lg:grid-cols-[1fr_minmax(0,32rem)]">
        <ol>
          {process.steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={0.03}
              className="grid grid-cols-[auto_1fr] gap-x-[clamp(1.25rem,3vw,2.5rem)] stitch-top py-[clamp(1.5rem,4vh,2.75rem)] last:stitch-bottom"
            >
              <span
                aria-hidden
                className="font-serif leading-none text-ink-muted text-[clamp(1.75rem,3.5vw,2.75rem)]"
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

        <Reveal as="figure" delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
          <MediaField
            image={conversation}
            videoReady
            sizes="(min-width: 1024px) 512px, 100vw"
            className="aspect-[4/5] w-full max-w-[32rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
