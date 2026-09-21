import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Film } from "@/components/Film";
import { MillBand } from "@/components/sections/MillBand";
import { Cloth } from "@/components/sections/Cloth";
import { Footer } from "@/components/Footer";
import { cloth, founder } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Cloth — CEO Rules",
  description:
    "The cloth remembers where it came from. The houses we keep, from Loro Piana, Zegna and Scabal to the finest shirting mills, cut in Bandra.",
};

// Loro Piana model: material as hero, provenance over paragraphs. The mills'
// marks first, then each house in the ledger, then the cloth in the hand.
export default function TheClothPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={cloth.eyebrow}
          title={cloth.headline}
          image="/images/IMG_3736.jpg"
          imageAlt="A fan of jacketing cloths, edge on, in the house's colours"
        />
        <MillBand />
        <Cloth />
        {/* Full-bleed: the cloth in Anis's hands, looped silently. */}
        <div data-nav="dark" className="relative h-[clamp(24rem,70svh,46rem)] overflow-hidden">
          <Film
            src={founder.video}
            poster="/images/bespoke-cloth.jpg"
            alt="A length of grey suiting handled at the desk"
            position="50% 60%"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
