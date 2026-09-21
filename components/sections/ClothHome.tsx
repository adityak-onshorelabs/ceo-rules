import { MediaField } from "@/components/MediaField";
import { homeCloth } from "@/lib/content";
import { img } from "@/lib/images";

export function ClothHome() {
  const houses = [...homeCloth.suiting, ...homeCloth.shirting];

  return (
    <section id="cloth">
      <MediaField
        image={img(homeCloth.primaryImageId)}
        videoReady
        sizes="100vw"
        objectPosition="62% 42%"
        objectPositionTablet="58% 40%"
        objectPositionMobile="55% 38%"
        className="h-[min(78svh,34rem)] w-full sm:h-[84svh] lg:h-[88svh]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(72%,28rem)] bg-gradient-to-r from-[color-mix(in_srgb,var(--navy)_42%,transparent)] via-[color-mix(in_srgb,var(--navy)_14%,transparent)] to-transparent"
        />
        <div className="absolute inset-0 z-[2] flex flex-col justify-between px-[var(--page-pad)] py-[clamp(1.75rem,4.5vh,3rem)]">
          <div className="max-w-[32ch]">
            <p className="t-meta text-bg/70">{homeCloth.kicker}</p>
            <h2 className="t-observation mt-4 text-bg">
              {homeCloth.observation.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="t-body mt-5 max-w-[40ch] text-bg/80">{homeCloth.body}</p>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-1.5 max-w-[42rem]">
            {houses.map((house) => (
              <li key={house.name} className="t-meta text-bg/60">
                {house.name}
              </li>
            ))}
          </ul>
        </div>
      </MediaField>
    </section>
  );
}
