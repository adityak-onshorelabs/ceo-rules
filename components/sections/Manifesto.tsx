import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { manifesto } from "@/lib/content";

export function Manifesto() {
  return (
    // Same container as the other sections so the left edge aligns.
    <section id="manifesto" data-nav="light" className="section mx-auto max-w-editorial">
      <div className="grid grid-cols-1 items-center gap-x-[clamp(2.5rem,6vw,6rem)] gap-y-14 lg:grid-cols-[1fr_0.72fr]">
        {/* Left: the words */}
        <div>
          <Reveal as="p" className="eyebrow mb-8">
            {manifesto.eyebrow}
          </Reveal>

          <div className="space-y-2">
            {manifesto.lines.map((line, i) => (
              <Reveal key={line} delay={i * 0.08} as="p">
                <span className="t-h1 block text-balance text-ink">{line}</span>
              </Reveal>
            ))}
          </div>

          {/* Education woven in: one true takeaway, set quietly apart. */}
          <Reveal delay={0.1} className="mt-12 max-w-measure stitch-top-gold pt-8">
            <p className="t-lede italic">{manifesto.takeaway}</p>
          </Reveal>
        </div>

        {/* Right: a tall editorial image filling the width */}
        <Reveal as="figure" delay={0.15} className="hidden lg:block">
          <Plate
            src={manifesto.image}
            alt={manifesto.imageAlt}
            className="aspect-[3/4] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
