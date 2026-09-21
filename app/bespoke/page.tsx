import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Breath, Closing } from "@/components/sections/Breath";
import { bespoke } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Bespoke — CEO Rules",
  description:
    "One garment, cut for one man. A bespoke commission takes four to six weeks and three visits: the conversation, the cloth, the pattern, the fittings, the finish.",
};

export default function BespokePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          kicker={bespoke.hero.kicker}
          title={bespoke.hero.title}
          lede={bespoke.hero.lede}
          image={bespoke.hero.image}
          alt={bespoke.hero.alt}
          position="50% 46%"
          titleWidth="max-w-[14ch]"
        />
        <Breath title={bespoke.breath.title} body={bespoke.breath.body} />

        <section className="bg-cream px-[var(--gutter)] pb-[var(--section-y)]">
          <ol className="mx-auto max-w-wide border-t border-[rgba(28,26,23,.18)]">
            {bespoke.steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(36px,5vw,110px)] border-b border-[rgba(28,26,23,.18)] py-[clamp(48px,7vh,90px)] last:border-b-0"
              >
                <div>
                  <p aria-hidden className="numeral mb-5 text-[rgba(28,26,23,.22)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="max-w-[14ch] text-[clamp(24px,2.4vw,36px)] leading-[1.15] tracking-[-0.02em]">
                    {s.title}
                  </h3>
                  <p className="mt-[18px] text-[11px] uppercase tracking-[0.2em] text-[rgba(28,26,23,.5)]">
                    {s.when}
                  </p>
                </div>
                <p className="body max-w-[46ch] text-[rgba(28,26,23,.72)]">{s.body}</p>
                <div className="relative min-h-[clamp(240px,34vh,340px)]">
                  <Photo
                    src={s.image}
                    alt={s.alt}
                    position={s.position}
                    grade="plate"
                    sizes="(min-width: 1100px) 33vw, 100vw"
                  />
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        <Closing kicker={bespoke.price.kicker} title={bespoke.price.title} body={bespoke.price.body} />
      </main>
      <Footer />
    </>
  );
}
