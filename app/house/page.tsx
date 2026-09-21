import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Lineage } from "@/components/sections/Lineage";
import { Footer } from "@/components/Footer";
import { house } from "@/lib/content";
import { img } from "@/lib/images";

const opening = img("houseHero");

export const metadata: Metadata = {
  title: "The House — CEO Rules",
  description:
    "Clothiers and tailors of impeccable pedigree. Six generations of one family, from an 1881 fabrics house to the tailoring house of Anis Soomar.",
};

export default function HousePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          eyebrow={house.hero.eyebrow}
          title={house.hero.title}
          lede={house.hero.lede}
          image={opening.desktopSrc}
          imageAlt={opening.alt}
          objectPosition={opening.desktopObjectPosition}
          objectPositionTablet={opening.tabletObjectPosition}
          objectPositionMobile={opening.mobileObjectPosition}
          imageClassName="aspect-[4/3] w-full"
          quality={opening.quality}
        />
        <Lineage />
      </main>
      <Footer />
    </>
  );
}
