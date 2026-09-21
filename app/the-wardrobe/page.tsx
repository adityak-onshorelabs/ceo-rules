import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { MediaField } from "@/components/MediaField";
import { Footer } from "@/components/Footer";
import { wardrobe } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "The Wardrobe — CEO Rules",
  description:
    "Bespoke suits, shirts, jackets, tuxedos, bandhgalas, and sherwanis, cut in Bandra.",
};

export default function TheWardrobePage() {
  const ties = img("silkTies");

  return (
    <>
      <Nav />
      <main id="main">
        <section className="chapter bg-bg">
          <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-[clamp(2rem,4vw,4rem)]">
            <div className="lg:col-span-6">
              <p className="t-meta text-ink-muted">{wardrobe.eyebrow}</p>
              <h1 className="t-observation mt-6 max-w-[14ch] text-ink">{wardrobe.headline}</h1>
              <p className="t-body mt-5 max-w-[36ch] text-ink-muted">{wardrobe.lead}</p>
              <ul className="mt-14 max-w-[28rem]">
                {wardrobe.pieces.map((p) => (
                  <li key={p.name} className="border-t border-hairline/50 py-5">
                    <p className="font-sans text-[clamp(1.65rem,3vw,2.15rem)] font-medium tracking-[-0.03em] text-ink">
                      {p.name}
                    </p>
                    <p className="t-annotate mt-1 text-ink-muted">{p.line}</p>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="field-edge-right mt-12 lg:col-span-5 lg:col-start-8 lg:mt-2">
              <MediaField
                image={ties}
                videoReady
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="aspect-[3/4] w-full"
              />
            </figure>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
