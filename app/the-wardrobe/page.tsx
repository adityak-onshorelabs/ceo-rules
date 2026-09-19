import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { wardrobe } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Wardrobe — CEO Rules",
  description:
    "Bespoke suits, shirts, jackets, tuxedos, bandhgalas, and sherwanis, cut in Bandra.",
};

export default function TheWardrobePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="chapter bg-bg">
          <div className="mx-auto max-w-editorial">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
