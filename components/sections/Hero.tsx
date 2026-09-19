import { Plate } from "@/components/Plate";
import { AppointmentCta } from "@/components/AppointmentCta";
import { hero } from "@/lib/content";
import { img } from "@/lib/images";

export function Hero() {
  const image = img(hero.imageId);
  const [ceo, rules] = hero.headline.split(" ");

  return (
    <section id="top" className="relative bg-navy">
      <div className="relative min-h-[94svh] w-full md:min-h-[100svh] md:aspect-[1024/682]">
        <div className="absolute inset-0">
          <Plate
            image={image}
            priority
            quality={84}
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="h-full w-full"
          />
        </div>

        <div className="relative z-10 flex min-h-[94svh] flex-col justify-end px-[var(--page-pad)] pb-12 pt-28 md:absolute md:inset-0 md:min-h-0 md:justify-start md:pb-16 md:pt-28 lg:pt-32">
          <div className="max-w-[17rem] text-bg md:max-w-[20rem] lg:ml-[clamp(0.25rem,2vw,2rem)]">
            <p className="t-meta opacity-[0.82]">{hero.eyebrow}</p>
            <h1 className="mt-5 font-sans text-[clamp(2.6rem,6.4vw,4.1rem)] font-medium uppercase leading-[0.9] tracking-[-0.04em]">
              <span className="block">{ceo}</span>
              <span className="block">{rules}</span>
            </h1>
            <p className="mt-6 max-w-[22ch] text-[1.0625rem] leading-snug opacity-90 md:text-[1.125rem]">
              {hero.lede}
            </p>
            <div className="mt-8">
              <AppointmentCta label={hero.cta.label} tone="ivory" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
