import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { wardrobe } from "@/lib/content";

// Editorial, not a catalogue. On a dark band, the garments framed as identity.
export function Wardrobe() {
  return (
    <section
      id="wardrobe"
      data-nav="dark"
      className="on-dark section mx-auto max-w-editorial"
    >
      <div className="grid grid-cols-1 items-center gap-x-[clamp(2.5rem,6vw,6rem)] gap-y-14 lg:grid-cols-[1fr_0.72fr]">
        <div>
          <Reveal as="p" className="eyebrow mb-10">
            {wardrobe.eyebrow}
          </Reveal>
          <Reveal>
            <h2 className="t-h1 max-w-[16ch] text-balance text-ink-dark">
              {wardrobe.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-measure t-lede text-ink-dark-muted">
              {wardrobe.lead}
            </p>
          </Reveal>

          {/* the pieces, each with a reason, not a price */}
          <div className="mt-12 max-w-measure stitch-top-dark">
            {wardrobe.pieces.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 0.05}
                className="flex items-baseline justify-between gap-6 stitch-bottom-dark py-5"
              >
                <span className="font-serif text-[clamp(1.15rem,1.6vw,1.5rem)] text-ink-dark">
                  {p.name}
                </span>
                <span className="max-w-[24ch] text-right text-[0.9rem] text-ink-dark-muted">
                  {p.line}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal as="figure" delay={0.12} className="hidden lg:block">
          <Plate
            src={wardrobe.image}
            alt={wardrobe.imageAlt}
            className="aspect-[4/5] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
