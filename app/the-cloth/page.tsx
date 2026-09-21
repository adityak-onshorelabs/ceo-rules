import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Closing } from "@/components/sections/Breath";
import { cloth } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Cloth — CEO Rules",
  description:
    "The cloth remembers where it came from. The houses we keep — Loro Piana, Zegna, Scabal, ALUMO, Canclini and more — cut in Bandra.",
};

export default function TheClothPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          kicker={cloth.hero.kicker}
          title={cloth.hero.title}
          lede={cloth.hero.lede}
          image={cloth.hero.image}
          alt={cloth.hero.alt}
          position="58% 50%"
          titleWidth="max-w-[16ch]"
        />

        {/* The houses, as a ledger: name and provenance. Names are proof, not a
            wall of logos (brief §6, §28). */}
        <section className="section bg-cream">
          <div className="mx-auto max-w-wide">
            <p className="kicker text-[rgba(28,26,23,.55)]">{cloth.housesLabel}</p>
            <ul className="border-t border-[rgba(28,26,23,.18)]">
              {cloth.houses.map((h) => (
                <Reveal
                  as="li"
                  key={h.name}
                  className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-baseline gap-x-[var(--breath-gap)] gap-y-3 border-b border-[rgba(28,26,23,.18)] py-[clamp(32px,5vh,56px)]"
                >
                  <h2 className="text-[clamp(26px,2.6vw,40px)] leading-[1.1] tracking-[-0.03em]">{h.name}</h2>
                  <p className="body text-[rgba(28,26,23,.72)]">{h.line}</p>
                  <p className="label text-[rgba(28,26,23,.5)] min-[900px]:text-right">{h.place}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <div className="relative h-[clamp(380px,70vh,760px)]">
          <Photo
            src={cloth.plate.image}
            alt={cloth.plate.alt}
            position={cloth.plate.position}
            grade="plate"
            motion="drift"
          />
        </div>

        <Closing kicker={cloth.teach.kicker} title={cloth.teach.title} body={cloth.teach.body} />
      </main>
      <Footer />
    </>
  );
}
