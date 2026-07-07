import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Identity } from "@/components/sections/Identity";
import { Craft } from "@/components/sections/Craft";
import { MeetAnis } from "@/components/sections/MeetAnis";
import { Wardrobe } from "@/components/sections/Wardrobe";
import { Testimonials } from "@/components/sections/Testimonials";
import { Heritage } from "@/components/sections/Heritage";
import { Visit } from "@/components/sections/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Identity />
        <Craft />
        <MeetAnis />
        <Wardrobe />
        <Testimonials />
        <Heritage />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
