import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { Cloth } from "@/components/sections/Cloth";
import { Craft } from "@/components/sections/Craft";
import { TheEye } from "@/components/sections/TheEye";
import { Wardrobe } from "@/components/sections/Wardrobe";
import { Reels } from "@/components/sections/Reels";
import { Heritage } from "@/components/sections/Heritage";
import { Visit } from "@/components/sections/Visit";
import { home } from "@/lib/content";

// The brief's narrative sequence: Place, Material, Making, Maker, Man,
// From the House, History, Invitation.
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Statement />
        <Cloth />
        <Craft />
        <TheEye
          image={home.eye.image}
          alt={home.eye.alt}
          position={home.eye.position}
          audit={home.eye.audit}
        />
        <Wardrobe />
        <Reels />
        <Heritage />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
