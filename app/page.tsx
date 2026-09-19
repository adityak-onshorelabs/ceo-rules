import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { ClothHome } from "@/components/sections/ClothHome";
import { Craft } from "@/components/sections/Craft";
import { TheEye } from "@/components/sections/TheEye";
import { Wardrobe } from "@/components/sections/Wardrobe";
import { House } from "@/components/sections/House";
import { Visit } from "@/components/sections/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <ClothHome />
        <Craft />
        <TheEye />
        <Wardrobe />
        <House />
        <Visit variant="arrival" />
      </main>
      <Footer />
    </>
  );
}
