import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/sections/Process";
import { Arrival } from "@/components/sections/Arrival";
import { Footer } from "@/components/Footer";
import { process } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Atelier — CEO Rules",
  description:
    "Come sit with us in Bandra. There is nothing to buy today, only a conversation, and a good cup of coffee.",
};

// Aman model: the atelier as a place you arrive at. The door, what the first
// hour is like, then where to find it and how to hold the hour.
export default function AtelierPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="The Atelier"
          title="Come sit with us in Bandra."
          lede={process.lead}
          image="/images/storefront.jpg"
          imageAlt="The CEO Rules storefront at dusk, Bandra"
        />
        <Process />
        <Arrival />
      </main>
      <Footer />
    </>
  );
}
