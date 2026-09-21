import { Reveal } from "@/components/Reveal";
import { MediaField } from "@/components/MediaField";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  objectPosition,
  objectPositionTablet,
  objectPositionMobile,
  imageClassName,
  sizes = "100vw",
  quality,
  videoReady = false,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  objectPositionTablet?: string;
  objectPositionMobile?: string;
  imageClassName?: string;
  sizes?: string;
  quality?: number;
  videoReady?: boolean;
}) {
  return (
    <section className="bg-bg pt-24">
      <MediaField
        src={image}
        alt={imageAlt}
        priority
        videoReady={videoReady}
        sizes={sizes}
        quality={quality}
        objectPosition={objectPosition}
        objectPositionTablet={objectPositionTablet ?? objectPosition}
        objectPositionMobile={objectPositionMobile ?? objectPosition}
        className={imageClassName ?? "aspect-[3/2] w-full"}
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
