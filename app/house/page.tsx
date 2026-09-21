import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Timeline } from "@/components/sections/Timeline";
import { World } from "@/components/sections/World";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/Footer";
import { house } from "@/lib/content";

export const metadata: Metadata = {
  title: "The House — CEO Rules",
  description:
    "Clothiers and tailors of impeccable pedigree. Four generations of one family, from an 1881 fabrics house to the tailoring house of Anis Soomar.",
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
        <Timeline />
        <World />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
