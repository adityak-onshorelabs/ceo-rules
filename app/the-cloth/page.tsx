import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Cloth } from "@/components/sections/Cloth";
import { Footer } from "@/components/Footer";
import { cloth } from "@/lib/content";
import { img } from "@/lib/images";

const opening = img("clothTable");

export const metadata: Metadata = {
  title: "The Cloth — CEO Rules",
  description:
    "The cloth remembers where it came from. Loro Piana, Zegna, Scabal, ALUMO, and Söktas, kept and cut in Bandra.",
};

export default function TheClothPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          eyebrow={cloth.eyebrow}
          title={cloth.headline}
          lede={cloth.lead}
          image={opening.desktopSrc}
          imageAlt={opening.alt}
          objectPosition={opening.desktopObjectPosition}
          imageClassName="aspect-[16/9] w-full md:aspect-auto md:h-[min(78svh,42rem)]"
          sizes="(min-width: 1024px) 1024px, 100vw"
          quality={opening.quality}
        />
        <Cloth />
      </main>
      <Footer />
    </>
  );
}
