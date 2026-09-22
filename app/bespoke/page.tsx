import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Breath, Closing } from "@/components/sections/Breath";
import { Stages } from "@/components/sections/Stages";
import { bespoke } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Bespoke — CEO Rules",
  description:
    "One garment, cut for one man. Private consultation, fabric selection, measurement, fitting and reshaping, hand-finishing and delivery.",
};

// The bespoke process lives here rather than cluttering the homepage (brief §15).
export default function BespokePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          kicker={bespoke.hero.kicker}
          title={bespoke.hero.title}
          lede={bespoke.hero.lede}
          image={bespoke.hero.image}
          alt={bespoke.hero.alt}
          audit={bespoke.hero.audit}
          position="50% 46%"
          titleWidth="max-w-[14ch]"
        />
        <Breath title={bespoke.breath.title} body={bespoke.breath.body} />
        <Stages stages={bespoke.steps} label="The bespoke process, in six stages" />
        <Closing kicker={bespoke.price.kicker} title={bespoke.price.title} body={bespoke.price.body} />
      </main>
      <Footer />
    </>
  );
}
