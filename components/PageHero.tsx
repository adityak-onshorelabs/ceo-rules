import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

// Interior-page opener: a full-bleed graded photograph, type at the base.
export function PageHero({
  kicker,
  title,
  lede,
  image,
  alt,
  position = "50% 45%",
  height = "min-h-[78vh]",
  titleWidth = "max-w-[15ch]",
  audit,
}: {
  kicker: string;
  title: string;
  lede?: string;
  image: string;
  alt: string;
  position?: string;
  height?: string;
  titleWidth?: string;
  audit?: string;
}) {
  return (
    <section className={`on-dark relative flex items-end overflow-hidden bg-ink-deep ${height}`}>
      <Photo
        src={image}
        alt={alt}
        position={position}
        grade="interior"
        scrims={["interior"]}
        motion="load"
        priority
        audit={audit}
      />
      <div className="relative z-10 max-w-[1000px] px-[var(--gutter)] pb-[clamp(80px,12vh,150px)] pt-40">
        <Reveal onLoad as="p" className="kicker !mb-9 text-[rgba(244,241,234,.75)]">
          {kicker}
        </Reveal>
        <Reveal onLoad as="h1" className={`h-hero !text-[clamp(40px,6vw,100px)] ${titleWidth}`}>
          {title}
        </Reveal>
        {lede ? (
          <Reveal onLoad delay={0.1} as="p" className="body mt-[clamp(30px,4.5vh,48px)] max-w-[48ch] text-[rgba(244,241,234,.74)]">
            {lede}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
