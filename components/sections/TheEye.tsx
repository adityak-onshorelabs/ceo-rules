import Link from "next/link";
import { Film } from "@/components/Film";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { site, theEye } from "@/lib/content";

// 04 Maker. Anis, split screen on the deep navy ground. Shared by Home and The
// House; Home passes a film, The House a still portrait.
export function TheEye({
  image,
  alt,
  position,
  mobilePosition,
  video,
  audit,
}: {
  image: string;
  alt: string;
  position: string;
  mobilePosition?: string;
  video?: string;
  audit?: string;
}) {
  const sizes = "(min-width: 860px) 50vw, 100vw";
  return (
    <section id="eye" className="split on-dark relative bg-eye">
      <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[clamp(440px,92vh,900px)]">
        {video ? (
          <Film src={video} poster={image} alt={alt} position={position} mobilePosition={mobilePosition} sizes={sizes} audit={audit} />
        ) : (
          <Photo src={image} alt={alt} position={position} mobilePosition={mobilePosition} grade="plate" motion="reveal" sizes={sizes} audit={audit} auditAt="bl" />
        )}
      </div>
      <div className="flex flex-col justify-center px-[clamp(24px,6vw,110px)] py-[clamp(100px,15vh,200px)]">
        <p className="kicker text-[rgba(244,241,234,.6)]">{theEye.kicker}</p>
        <Reveal as="h2" className="text-[clamp(32px,3.6vw,58px)] leading-[1.04] tracking-[-0.024em]">
          {theEye.name}
        </Reveal>
        <p className="pull mt-[clamp(26px,4vh,40px)] text-[rgba(244,241,234,.9)]">{theEye.pull}</p>
        <p className="mt-[clamp(24px,3.5vh,34px)] max-w-[44ch] text-[clamp(14.5px,1.1vw,16.5px)] leading-[1.75] text-[rgba(244,241,234,.74)]">
          {theEye.body}
        </p>
        <Link href={site.appointment} className="link-line mt-[clamp(30px,4.5vh,48px)] self-start">
          {theEye.cta} <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
