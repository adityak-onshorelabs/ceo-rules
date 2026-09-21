import { MediaField } from "@/components/MediaField";
import { homeEye } from "@/lib/content";
import { img } from "@/lib/images";

export function TheEye() {
  const nameLines = homeEye.name.split(" ");

  return (
    <section id="anis">
      <MediaField
        image={img(homeEye.workImageId)}
        videoReady
        sizes="100vw"
        objectPosition="48% 28%"
        objectPositionTablet="46% 24%"
        objectPositionMobile="44% 22%"
        className="h-[min(88svh,40rem)] w-full sm:h-[92svh] lg:h-[96svh]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[48%] bg-gradient-to-t from-[color-mix(in_srgb,var(--navy)_52%,transparent)] via-[color-mix(in_srgb,var(--navy)_18%,transparent)] to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 z-[2] px-[var(--page-pad)] pb-[clamp(1.75rem,5vh,3.25rem)] pt-20">
          <div className="max-w-[34ch]">
            <p className="t-meta text-bg/70">{homeEye.kicker}</p>
            <h2 className="t-statement mt-4 text-bg">
              {nameLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-[28ch] font-sans text-[clamp(1.05rem,1.6vw,1.2rem)] font-medium leading-[1.35] tracking-[-0.02em] text-bg/90">
              {homeEye.approach}
            </p>
          </div>
        </div>
      </MediaField>
    </section>
  );
}
