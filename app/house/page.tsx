import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HouseHero } from "@/components/sections/HouseHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Breath } from "@/components/sections/Breath";
import { TheEye } from "@/components/sections/TheEye";
import { house, site, testimonial } from "@/lib/content";

export const metadata: Metadata = {
  title: "The House — CEO Rules",
  description:
    "Six generations in cloth. A family house of bespoke tailoring that began in Crawford Market in 1881 and carries on in Bandra.",
};

export default function HousePage() {
  return (
    <>
      <Nav />
      <main>
        <HouseHero />
        <Breath title={house.breath.title} body={house.breath.body} />

        {/* The house in three frames, edge to edge (brief §2: the photograph is
            the section, not a card on a cream box). */}
        <section aria-label="Inside the house" className="grid grid-cols-1 gap-[3px] bg-ink-deep sm:grid-cols-3">
          {house.plates.map((p) => (
            <div key={p.image} className="relative aspect-[4/5] sm:aspect-auto sm:min-h-[clamp(420px,72vh,760px)]">
              <Photo
                src={p.image}
                alt={p.alt}
                position={p.position}
                grade="plate"
                motion="reveal"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
          ))}
        </section>

        <TheEye
          image={house.portrait.image}
          alt={house.portrait.alt}
          position={house.portrait.position}
          audit={house.portrait.audit}
        />

        <section className="section bg-cream">
          <div className="mx-auto max-w-wide">
            <div className="breath">
              <div>
                <p className="kicker text-[rgba(28,26,23,.55)]">{house.world.kicker}</p>
                <Reveal as="h2" className="h-breath">
                  {house.world.title}
                </Reveal>
              </div>
              <p className="body text-[rgba(28,26,23,.72)] min-[700px]:pt-[58px]">{house.world.body}</p>
            </div>
            <div className="mt-[clamp(56px,9vh,110px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[var(--grid-gap)]">
              {house.world.plates.map((p) => (
                <figure key={p.image}>
                  <div className="relative aspect-[4/5]">
                    <Photo
                      src={p.image}
                      alt={p.alt}
                      position={p.position}
                      grade="plate"
                      motion="reveal"
                      sizes="(min-width: 960px) 33vw, 100vw"
                    />
                  </div>
                  <figcaption className="mt-4 max-w-[36ch] text-[12px] uppercase leading-[1.7] tracking-[0.18em] text-[rgba(28,26,23,.55)]">
                    {p.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section-accent on-cream bg-cream-deep">
          <div className="mx-auto max-w-page">
            <p className="kicker text-[rgba(28,26,23,.55)]">In their words</p>
            <Reveal as="figure">
              <blockquote className="max-w-[34ch] text-[clamp(22px,2.4vw,38px)] leading-[1.4] tracking-[-0.015em]">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-7 text-[12px] uppercase tracking-[0.2em] text-[rgba(28,26,23,.55)]">
                {testimonial.by}
              </figcaption>
            </Reveal>
            <Link href={site.appointment} className="link-box mt-[clamp(48px,7vh,90px)]">
              Book a Private Appointment <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
