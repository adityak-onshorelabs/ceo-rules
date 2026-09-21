import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Identity } from "@/components/sections/Identity";
import { MillBand } from "@/components/sections/MillBand";
import { MeetAnis } from "@/components/sections/MeetAnis";
import { Craft } from "@/components/sections/Craft";
import { Testimonials } from "@/components/sections/Testimonials";
import { Heritage } from "@/components/sections/Heritage";
import { Visit } from "@/components/sections/Visit";
import { Footer } from "@/components/Footer";

// Curiosity → Respect → Trust → Connection → Aspiration → Action.
// Heritage is the plot twist: 1881 lands late, after the visitor is invested.
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Identity />
        <MillBand />
        <MeetAnis />
        <Craft />
        <Testimonials />
        <Heritage />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
