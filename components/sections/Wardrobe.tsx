import { MediaField } from "@/components/MediaField";
import { CtaLink } from "@/components/CtaLink";
import { homeWardrobe } from "@/lib/content";
import { img } from "@/lib/images";

export function Wardrobe() {
  return (
    <section id="wardrobe">
      <MediaField
        image={img(homeWardrobe.imageId)}
        videoReady
        sizes="100vw"
        objectPosition="center 12%"
        objectPositionTablet="center 10%"
        objectPositionMobile="center 8%"
        className="h-[min(82svh,36rem)] w-full sm:h-[88svh] lg:h-[92svh]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[46%] bg-gradient-to-b from-[color-mix(in_srgb,var(--navy)_46%,transparent)] via-[color-mix(in_srgb,var(--navy)_14%,transparent)] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[28%] bg-gradient-to-t from-[color-mix(in_srgb,var(--navy)_40%,transparent)] via-[color-mix(in_srgb,var(--navy)_10%,transparent)] to-transparent"
        />
        <div className="absolute inset-0 z-[2] flex flex-col justify-between px-[var(--page-pad)] py-[clamp(1.75rem,4.5vh,3rem)]">
          <div className="max-w-[28ch]">
            <p className="t-meta text-bg/70">The Wardrobe</p>
            <h2 className="t-observation mt-4 text-bg">{homeWardrobe.observation}</h2>
            <p className="t-body mt-4 max-w-[32ch] text-bg/80">{homeWardrobe.lead}</p>
            <div className="mt-7">
              <CtaLink href={homeWardrobe.link.href} tone="ivory">
                {homeWardrobe.link.label}
              </CtaLink>
            </div>
          </div>

          <p className="t-meta max-w-[48rem] text-bg/65">
            {homeWardrobe.pieces.map((p) => p.name.toUpperCase()).join(" · ")}
          </p>
        </div>
      </MediaField>
    </section>
  );
}
