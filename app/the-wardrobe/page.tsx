import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Breath, Closing } from "@/components/sections/Breath";
import { wardrobe } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Wardrobe — CEO Rules",
  description:
    "Better combinations, not more clothes. Suits, shirts, jackets, tuxedos, bandhgalas and sherwanis, cut in Bandra.",
};

export default function TheWardrobePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          kicker={wardrobe.hero.kicker}
          title={wardrobe.hero.title}
          image={wardrobe.hero.image}
          alt={wardrobe.hero.alt}
          position="50% 40%"
        />
        <Breath title={wardrobe.breath.title} body={wardrobe.breath.body} />

        <section className="bg-cream pb-[var(--section-y)]">
          <div className="mx-auto grid max-w-wide grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-[var(--grid-gap)] px-[var(--gutter)]">
            {wardrobe.pieces.map((p) => (
              <article
                key={p.label}
                className="on-dark relative flex min-h-[clamp(440px,66vh,700px)] items-end overflow-hidden bg-ink-deep"
              >
                <Photo
                  src={p.image}
                  alt={p.alt}
                  position={p.position}
                  grade="card"
                  scrims={["interior"]}
                  sizes="(min-width: 900px) 50vw, 100vw"
                  audit={p.audit}
                  auditAt="tl"
                />
                <div className="relative z-10 p-[clamp(30px,3.6vw,54px)]">
                  <p className="mb-3.5 text-[10.5px] uppercase tracking-[0.24em] text-[rgba(244,241,234,.62)]">
                    {p.label}
                  </p>
                  <h3 className="h-card">{p.title}</h3>
                  <p className="mt-4 max-w-[34ch] text-[14.5px] leading-[1.7] text-[rgba(244,241,234,.74)]">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Closing kicker={wardrobe.close.kicker} title={wardrobe.close.title} ground="ink" />
      </main>
      <Footer />
    </>
  );
}
