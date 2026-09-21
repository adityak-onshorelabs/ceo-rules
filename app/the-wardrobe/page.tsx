import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Sequence } from "@/components/Sequence";
import { Closing } from "@/components/sections/Breath";
import { wardrobe } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Wardrobe — CEO Rules",
  description:
    "Better combinations, not more clothes. Suits, shirts, jackets, tuxedos, bandhgalas and sherwanis, cut in Bandra.",
};

// What CEO Rules creates (brief §9, §18): the six garments as consecutive
// moments beside one photograph, not a catalogue grid.
export default function TheWardrobePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          kicker={wardrobe.hero.kicker}
          title={wardrobe.hero.title}
          image={wardrobe.hero.image}
          alt={wardrobe.hero.alt}
          position="50% 40%"
        />
        <Sequence
          labelledBy="wardrobe-title"
          header={
            <>
              <Reveal as="h2" className="h-breath">
                <span id="wardrobe-title">{wardrobe.breath.title}</span>
              </Reveal>
              <p className="body mt-[clamp(24px,3.5vh,36px)] text-[rgba(28,26,23,.74)]">{wardrobe.breath.body}</p>
            </>
          }
          moments={wardrobe.pieces.map((p) => ({ ...p, line: p.title }))}
        />
        <Closing kicker={wardrobe.close.kicker} title={wardrobe.close.title} ground="ink" />
      </main>
      <Footer />
    </>
  );
}
