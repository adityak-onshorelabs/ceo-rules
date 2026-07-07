import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { identity } from "@/lib/content";

export function Identity() {
  return (
    <section id="identity" aria-label="The name, and the truth">
      {/* Band A — the name. Warm dark, tight, loud. The expectation.
          A darkened cloth texture sits behind, felt more than seen. */}
      <div
        data-nav="dark"
        className="on-dark relative flex min-h-[80svh] items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Plate
            src={identity.nameImage}
            alt={identity.nameImageAlt}
            className="h-full w-full"
          />
        </div>
        {/* base darkening */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "oklch(0.15 0.012 58 / 0.66)" }}
        />
        {/* darker bed under the left-aligned copy so text never blends over bright cloth */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-full md:w-[70%]"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.13 0.012 58 / 0.9) 0%, oklch(0.13 0.012 58 / 0.62) 45%, transparent 100%)",
          }}
        />
        <div
          className="relative z-10 section mx-auto w-full max-w-editorial"
          style={{ textShadow: "0 1px 20px oklch(0.12 0.012 58 / 0.6)" }}
        >
          <Reveal as="p" className="eyebrow mb-10">
            {identity.eyebrow}
          </Reveal>
          <Reveal>
            <p className="t-h1 max-w-[18ch] text-ink-dark">{identity.heard}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 max-w-measure t-lede text-ink-dark-muted">
              {identity.loud}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Band B — the truth. Same editorial layout as the Manifesto. */}
      <div data-nav="light" className="section mx-auto max-w-editorial">
        <div className="grid grid-cols-1 items-center gap-x-[clamp(2.5rem,6vw,6rem)] gap-y-14 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <Reveal>
              <h2 className="t-h1 max-w-[16ch] text-balance text-ink">
                {identity.quiet}
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-8 max-w-measure t-lede text-ink">{identity.reality}</p>
            </Reveal>
            <Reveal
              delay={0.1}
              className="mt-14 max-w-measure border-t border-hairline pt-8"
            >
              <p className="t-lede italic text-gold-ink">{identity.reconcile}</p>
            </Reveal>
          </div>
          <Reveal as="figure" delay={0.12} className="hidden lg:block">
            <Plate
              src={identity.truthImageB}
              alt={identity.truthImageBAlt}
              className="aspect-[3/4] w-full"
            />
          </Reveal>
        </div>
      </div>

      {/* The shopfront beat: invitation on the dark surface, then the storefront
          shown whole at its native aspect (no crop, no text over it). */}
      <div data-nav="dark" className="on-dark section mx-auto max-w-editorial">
        <Reveal>
          <h2 className="t-h2 max-w-[24ch] text-ink-dark">
            {identity.placeLead}{" "}
            <span className="italic text-gold-on-dark">{identity.placeAccent}</span>
          </h2>
        </Reveal>
        <Reveal as="figure" delay={0.1} className="mt-[clamp(2.5rem,6vh,5rem)]">
          <Plate
            src={identity.image}
            alt={identity.imageAlt}
            className="aspect-square w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
