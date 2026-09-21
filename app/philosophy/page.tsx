import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Insights } from "@/components/sections/Insights";
import { Closing } from "@/components/sections/Breath";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Rules — CEO Rules",
  description:
    "What the founder sees. A little of what Anis has learned on fit, fabric, and dressing well, shared freely.",
};

export default function PhilosophyPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          kicker={insights.hero.kicker}
          title={insights.hero.title}
          lede={insights.hero.lede}
          image={insights.hero.image}
          alt={insights.hero.alt}
          position="50% 40%"
        />
        <Insights />
        <Closing
          kicker="Where to start"
          title="Come in with the wardrobe you have. We will tell you what is missing."
          ground="ink"
        />
      </main>
      <Footer />
    </>
  );
}
