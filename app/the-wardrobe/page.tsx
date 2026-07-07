import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Craft } from "@/components/sections/Craft";
import { Wardrobe } from "@/components/sections/Wardrobe";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Wardrobe — CEO Rules",
  description:
    "The craft, and the wardrobe. Bespoke suits, bandhgalas, sherwanis, and the details that finish a man.",
};

export default function TheWardrobePage() {
  return (
    <>
      <Nav />
      <main>
        <Craft />
        <Wardrobe />
      </main>
      <Footer />
    </>
  );
}
