import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Breath } from "@/components/sections/Breath";
import { Visit } from "@/components/sections/Visit";
import { atelier } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Atelier — CEO Rules",
  description:
    "Come sit with us in Bandra. There is nothing to buy today, only a conversation, and a good cup of coffee.",
};

export default function AtelierPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          kicker={atelier.hero.kicker}
          title={atelier.hero.title}
          lede={atelier.hero.lede}
          image={atelier.hero.image}
          alt={atelier.hero.alt}
          position="32% 45%"
          height="min-h-[82vh]"
        />
        <Breath title={atelier.breath.title} body={atelier.breath.body} />

        <section className="bg-cream px-[var(--gutter)] pb-[var(--section-y)]">
          <ol className="mx-auto max-w-wide border-t border-[rgba(28,26,23,.18)]">
            {atelier.steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-baseline gap-x-[var(--breath-gap)] gap-y-4 border-b border-[rgba(28,26,23,.18)] py-[clamp(40px,6vh,72px)]"
              >
                <div className="flex items-baseline gap-[clamp(20px,3vw,40px)]">
                  <span aria-hidden className="numeral text-[rgba(28,26,23,.22)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[clamp(24px,2.4vw,36px)] leading-[1.15] tracking-[-0.02em]">{s.title}</h2>
                </div>
                <p className="body text-[rgba(28,26,23,.72)]">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        <Visit />
      </main>
      <Footer />
    </>
  );
}
