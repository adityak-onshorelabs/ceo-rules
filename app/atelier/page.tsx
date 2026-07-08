import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/sections/Process";
import { Visit } from "@/components/sections/Visit";
import { Footer } from "@/components/Footer";
import { process } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Atelier — CEO Rules",
  description:
    "Come sit with us in Bandra. There is nothing to buy today, only a conversation, and a good cup of coffee.",
};

export default function AtelierPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="The Atelier"
          title="Come sit with us in Bandra."
          lede={process.lead}
          image="/images/storefront.webp"
          imageAlt="The CEO Rules storefront at dusk, Bandra"
        />
        <Process />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
