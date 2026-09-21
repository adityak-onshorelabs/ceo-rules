import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactSheet } from "@/components/ContactSheet";
import { Closing } from "@/components/sections/Breath";
import { wardrobe } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Wardrobe — CEO Rules",
  description:
    "Better combinations, not more clothes. Suits, shirts, jackets, tuxedos, bandhgalas and sherwanis, cut in Bandra.",
};

// What CEO Rules creates (brief §9, §18): the six garments as a contact sheet
// of two edge-to-edge strips, not a catalogue grid.
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
        <ContactSheet
          labelledBy="wardrobe-title"
          perRow={3}
          header={
            <div className="breath">
              <Reveal as="h2" className="h-breath">
                <span id="wardrobe-title">{wardrobe.breath.title}</span>
              </Reveal>
              <p className="body text-[rgba(244,241,234,.82)]">{wardrobe.breath.body}</p>
            </div>
          }
          frames={wardrobe.pieces.map((p) => ({ ...p, line: p.title }))}
        />
        <Closing kicker={wardrobe.close.kicker} title={wardrobe.close.title} ground="ink" />
      </main>
      <Footer />
    </>
  );
}
