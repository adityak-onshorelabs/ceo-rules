import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  objectPosition,
  imageClassName,
  sizes = "100vw",
  quality,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  imageClassName?: string;
  sizes?: string;
  quality?: number;
}) {
  return (
    <section className="bg-bg pt-24">
      <Plate
        src={image}
        alt={imageAlt}
        priority
        sizes={sizes}
        quality={quality}
        objectPosition={objectPosition}
        objectPositionTablet={objectPosition}
        objectPositionMobile={objectPosition}
        className={imageClassName ?? "h-[min(70svh,36rem)] w-full"}
      />
      <div className="mx-auto max-w-editorial px-[var(--page-pad)] py-[clamp(2.5rem,6vh,4.5rem)]">
        <Reveal as="p" className="eyebrow mb-5">
          {eyebrow}
        </Reveal>
        <Reveal>
          <h1 className="t-display max-w-[16ch] text-ink">{title}</h1>
        </Reveal>
        {lede ? (
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-measure t-lede">{lede}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
