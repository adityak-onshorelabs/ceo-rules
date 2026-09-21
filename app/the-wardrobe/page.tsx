import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Craft } from "@/components/sections/Craft";
import { Wardrobe } from "@/components/sections/Wardrobe";
import { Garments } from "@/components/sections/Garments";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Wardrobe — CEO Rules",
  description:
    "The craft, and the wardrobe. Bespoke suits, bandhgalas, tuxedos, jackets, shirts and sherwanis, cut in Bandra.",
};

export default function TheWardrobePage() {
  return (
    <>
      <Nav />
      <main>
        <Wardrobe />
        <Garments />
        <Craft />
      </main>
      <Footer />
    </>
  );
}
