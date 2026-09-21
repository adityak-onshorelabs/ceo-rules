import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { MediaField } from "@/components/MediaField";
import { Cloth } from "@/components/sections/Cloth";
import { Footer } from "@/components/Footer";
import { cloth } from "@/lib/content";
import { img } from "@/lib/images";

const opening = img(cloth.openingImageId);

export const metadata: Metadata = {
  title: "The Cloth — CEO Rules",
  description:
    "The cloth remembers where it came from. Loro Piana, Zegna, Scabal, ALUMO, and Söktas, kept and cut in Bandra.",
};

export default function TheClothPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="bg-bg pt-24">
          <MediaField
            image={opening}
            priority
            videoReady
            sizes="(min-width: 1024px) 640px, 100vw"
            className="mx-auto aspect-[4/5] w-full max-w-[40rem] md:aspect-square"
          />
          <div className="mx-auto max-w-editorial px-[var(--page-pad)] py-[clamp(2.5rem,6vh,4.5rem)]">
            <Reveal as="p" className="eyebrow mb-5">
              {cloth.eyebrow}
            </Reveal>
            <Reveal>
              <h1 className="t-display max-w-[16ch] text-ink">{cloth.headline}</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-measure t-lede">{cloth.lead}</p>
            </Reveal>
          </div>
        </section>
        <Cloth />
      </main>
      <Footer />
    </>
  );
}
