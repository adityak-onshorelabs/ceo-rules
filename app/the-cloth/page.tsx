import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Plate } from "@/components/Plate";
import { Grain } from "@/components/Grain";
import { Cloth } from "@/components/sections/Cloth";
import { Footer } from "@/components/Footer";
import { cloth } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Cloth — CEO Rules",
  description:
    "The cloth remembers where it came from. The world's finest houses, kept and cut in Bandra: Dormeuil, Loro Piana, Zegna, Holland & Sherry, Scabal.",
};

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
        <Cloth />
        {/* Full-bleed material band: the cloth given the whole frame. */}
        <div data-nav="dark" className="relative overflow-hidden">
          <Plate
            src={cloth.fabricImage}
            alt={cloth.fabricAlt}
            scrim="full"
            className="h-[clamp(24rem,55svh,40rem)] w-full"
          />
          <Grain />
        </div>
      </main>
      <Footer />
    </>
  );
}
