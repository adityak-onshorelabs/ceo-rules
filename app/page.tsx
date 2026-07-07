import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Identity } from "@/components/sections/Identity";
import { MeetAnis } from "@/components/sections/MeetAnis";
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
        <MeetAnis />
        <Testimonials />
        <Heritage />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
