import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { CtaLink } from "@/components/CtaLink";
import { MeasureTicks } from "@/components/MeasureTicks";
import { Footer } from "@/components/Footer";
import { bespoke, nav } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bespoke — CEO Rules",
  description:
    "One garment, cut for one man. A commission takes four to six weeks and three visits: the conversation, the cloth, the pattern, the fittings, the finish.",
};

export default function BespokePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={bespoke.hero.eyebrow}
          title={bespoke.hero.title}
          lede={bespoke.hero.lede}
          image={bespoke.hero.image}
          imageAlt={bespoke.hero.imageAlt}
        />

        <section data-nav="light" className="section mx-auto max-w-editorial">
          <Reveal>
            <MeasureTicks className="mb-6 h-2.5 w-32 text-gold-ink" />
          </Reveal>
          <div className="grid grid-cols-1 gap-x-[clamp(2.5rem,6vw,6rem)] gap-y-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Reveal>
              <h2 className="t-h1 max-w-[16ch] text-ink">{bespoke.intro.headline}</h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="max-w-measure t-lede text-ink">{bespoke.intro.body}</p>
            </Reveal>
          </div>

          {/* The commission, step by step: numeral, words, the thing itself. */}
          <ol className="mt-[clamp(3.5rem,9vh,7rem)]">
            {bespoke.steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={0.03}
                className="grid grid-cols-1 items-start gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-5 stitch-top py-[clamp(2rem,5vh,3.5rem)] last:stitch-bottom md:grid-cols-[auto_1fr_0.8fr]"
              >
                <span aria-hidden className="font-serif leading-none text-ink-faint text-[clamp(2.25rem,4vw,3.5rem)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="max-w-measure">
                  <h3 className="t-h2 text-ink">{s.title}</h3>
                  <p className="eyebrow mt-3">{s.when}</p>
                  <p className="mt-5 text-ink-muted">{s.body}</p>
                </div>
                <Plate src={s.image} alt={s.alt} className="aspect-[3/2] w-full" />
              </Reveal>
            ))}
          </ol>

          {/* What it costs: the one recessed field on the page. */}
          <Reveal delay={0.06} className="mt-[clamp(3.5rem,8vh,6rem)] bg-surface p-[clamp(1.75rem,4vw,3.5rem)]">
            <p className="eyebrow mb-4 text-gold-ink">{bespoke.price.eyebrow}</p>
            <p className="max-w-[48ch] font-serif text-[clamp(1.3rem,2vw,1.8rem)] leading-snug text-ink">
              {bespoke.price.body}
            </p>
            <div className="mt-8">
              <CtaLink href={nav.cta.href + "#book"}>Hold an hour with Anis</CtaLink>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
