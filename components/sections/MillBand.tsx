import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { MeasureTicks } from "@/components/MeasureTicks";
import { MillLogo } from "@/components/MillLogo";
import { millBand, mills } from "@/lib/content";

// The houses we keep (Loro Piana model: material first). The mills' own marks
// drift edge to edge between two lines of basting stitch. The set is rendered
// twice so the loop is seamless; hover pauses it; reduced motion stills it into
// a row you can scroll.
export function MillBand() {
  const row = (dup: boolean) => (
    <ul
      aria-hidden={dup || undefined}
      className={`flex flex-none items-center gap-[clamp(4rem,8vw,9rem)] pr-[clamp(4rem,8vw,9rem)] ${
        dup ? "marquee-dup" : "pl-[clamp(1.75rem,6vw,7rem)]"
      }`}
    >
      {mills.map((m) => (
        <li key={m.name} className="flex-none">
          <MillLogo
            name={dup ? "" : m.name}
            logo={m.logo}
            tone="ink"
            className="w-auto"
            style={{ height: `calc(clamp(4.25rem, 6.5vw, 6.5rem) * ${m.scale})` }}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section data-nav="light" aria-labelledby="mill-band" className="py-[var(--section-y)]">
      <div className="mx-auto grid max-w-editorial grid-cols-1 items-end gap-y-8 px-[clamp(1.75rem,6vw,7rem)] lg:grid-cols-[1fr_auto]">
        <div>
          <Reveal>
            <MeasureTicks className="mb-6 h-2.5 w-32 text-gold-ink" />
          </Reveal>
          <Reveal as="p" className="eyebrow mb-8">
            {millBand.eyebrow}
          </Reveal>
          <Reveal>
            <h2 id="mill-band" className="t-h1 max-w-[18ch] text-ink">
              {millBand.headline}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.06}>
          <CtaLink href={millBand.link.href}>{millBand.link.label}</CtaLink>
        </Reveal>
      </div>

      <div
        className="marquee stitch-top stitch-bottom mt-[clamp(3rem,7vh,5rem)] overflow-hidden py-[clamp(2.5rem,6vh,4.5rem)]"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
