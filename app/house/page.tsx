import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Lineage } from "@/components/sections/Lineage";
import { Custodians } from "@/components/sections/Custodians";
import { Footer } from "@/components/Footer";
import { house } from "@/lib/content";

export const metadata: Metadata = {
  title: "The House — CEO Rules",
  description:
    "Clothiers and tailors of impeccable pedigree. Four generations of one family, from an 1881 fabrics house to the tailoring house of Anis and Arshad Soomar.",
};

export default function HousePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={house.hero.eyebrow}
          title={house.hero.title}
          lede={house.hero.lede}
          image={house.hero.image}
          imageAlt={house.hero.imageAlt}
        />
        <Lineage />
        <Custodians />
      </main>
      <Footer />
    </>
  );
}
