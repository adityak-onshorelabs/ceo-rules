import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Craft } from "@/components/sections/Craft";
import { Wardrobe } from "@/components/sections/Wardrobe";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Wardrobe — CEO Rules",
  description:
    "A gentleman isn't born, he is built. Bespoke suits, bandhgalas, sherwanis, and the details that finish a man.",
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
