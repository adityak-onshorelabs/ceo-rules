import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

// Interior-page opener.
// Desktop: a full-bleed graded photograph with the type at the lower left over
// a local pool of tone (brief §5: no generic full-frame overlay).
// Mobile: the photograph leads and the type follows on House Ink, since a
// portrait crop leaves no quiet area to set it in (brief §21).
export function PageHero({
  kicker,
  title,
  lede,
  image,
  alt,
  position = "50% 45%",
  mobilePosition,
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
  mobilePosition?: string;
  /** Desktop minimum height, e.g. "min-h-[82vh]". */
  height?: string;
  titleWidth?: string;
  audit?: string;
}) {
  const heroH = height.match(/\[(.+)\]/)?.[1] ?? "78vh";
  return (
    <section
      className="on-dark relative overflow-hidden bg-ink-deep lg:flex lg:min-h-[var(--hero-h)] lg:items-end"
      style={{ "--hero-h": heroH } as React.CSSProperties}
    >
      <div className="relative h-[52svh] min-h-[300px] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0">
        <Photo
          src={image}
          alt={alt}
          position={position}
          mobilePosition={mobilePosition}
          grade="interior"
          scrims={["deepen-bl"]}
          scrimCls={{ "deepen-bl": "hidden lg:block" }}
          motion="load"
          priority
          audit={audit}
        />
      </div>
      <div className="relative z-10 max-w-[1000px] px-[var(--gutter)] pb-[clamp(56px,9vh,96px)] pt-[clamp(36px,6vh,56px)] lg:halo-cream lg:pb-[clamp(80px,12vh,150px)] lg:pt-40">
        <Reveal onLoad as="p" className="kicker !mb-9 text-cream">
          {kicker}
        </Reveal>
        <Reveal onLoad as="h1" className={`h-hero !text-[clamp(40px,6vw,100px)] ${titleWidth}`}>
          {title}
        </Reveal>
        {lede ? (
          <Reveal onLoad delay={0.1} as="p" className="body mt-[clamp(30px,4.5vh,48px)] max-w-[48ch] text-[rgba(244,241,234,.92)]">
            {lede}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
