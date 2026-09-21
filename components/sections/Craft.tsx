import { MediaField } from "@/components/MediaField";
import { homeCraft } from "@/lib/content";
import { img } from "@/lib/images";
import type { ImageId } from "@/lib/images";

export function Craft() {
  const cut = homeCraft.beats[0];
  const canvas = homeCraft.beats[1];
  const fit = homeCraft.beats[2];
  const finish = homeCraft.beats[3];
  const cutImage = img(cut.imageId as ImageId);
  const canvasImage = img(canvas.imageId as ImageId);
  const fitImage = img(fit.imageId as ImageId);
  const finishImage = img(finish.imageId as ImageId);

  return (
    <section id="craft">
      {/* 03A — Cut + Craft intro as one photographic environment */}
      <div>
        <MediaField
          image={cutImage}
          videoReady
          sizes="100vw"
          objectPosition="68% 48%"
          objectPositionTablet="65% 46%"
          objectPositionMobile="62% 42%"
          className="h-[min(82svh,36rem)] w-full sm:h-[88svh] lg:h-[92svh]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(68%,30rem)] bg-gradient-to-r from-[color-mix(in_srgb,var(--navy)_48%,transparent)] via-[color-mix(in_srgb,var(--navy)_16%,transparent)] to-transparent"
          />
          <div className="absolute inset-0 z-[2] flex flex-col justify-between px-[var(--page-pad)] py-[clamp(1.75rem,4.5vh,3rem)]">
            <div className="max-w-[28ch]">
              <p className="t-meta text-bg/70">The Craft</p>
              <h2 className="t-observation mt-4 text-bg">
                {homeCraft.observation.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <div className="max-w-[26ch]">
              <p className="t-meta text-bg/75">{cut.label}</p>
              <p className="t-annotate mt-2 text-bg/90">{cut.body}</p>
            </div>
          </div>
        </MediaField>
      </div>

      {/* 03B — Canvas */}
      <div>
        <MediaField
          image={canvasImage}
          videoReady
          sizes="100vw"
          objectPosition="38% 42%"
          objectPositionTablet="40% 40%"
          objectPositionMobile="42% 38%"
          className="h-[min(72svh,32rem)] w-full sm:h-[78svh] lg:h-[82svh]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[min(55%,24rem)] bg-gradient-to-l from-[color-mix(in_srgb,var(--navy)_38%,transparent)] via-[color-mix(in_srgb,var(--navy)_12%,transparent)] to-transparent"
          />
          <div className="absolute bottom-0 right-0 z-[2] px-[var(--page-pad)] py-[clamp(1.75rem,4.5vh,3rem)] lg:max-w-[26ch]">
            <p className="t-meta text-bg/75">{canvas.label}</p>
            <p className="t-annotate mt-2 max-w-[24ch] text-bg/90">{canvas.body}</p>
          </div>
        </MediaField>
      </div>

      {/* 03C — Fit — REPLACE IMAGE; full-bleed architecture, no navy rescue */}
      <div>
        <MediaField
          image={fitImage}
          videoReady
          sizes="100vw"
          objectPosition="62% 42%"
          objectPositionTablet="58% 40%"
          objectPositionMobile="55% 38%"
          className="h-[min(78svh,34rem)] w-full sm:h-[85svh] lg:h-[90svh]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(62%,28rem)] bg-gradient-to-r from-[color-mix(in_srgb,var(--navy)_44%,transparent)] via-[color-mix(in_srgb,var(--navy)_14%,transparent)] to-transparent"
          />
          <div className="absolute inset-0 z-[2] flex items-end px-[var(--page-pad)] py-[clamp(1.75rem,4.5vh,3rem)] lg:items-center">
            <div className="max-w-[26ch]">
              <p className="t-meta text-bg/75">{fit.label}</p>
              <p className="t-annotate mt-2 text-bg/90">{fit.body}</p>
            </div>
          </div>
        </MediaField>
      </div>

      {/* 03D — Finish */}
      <div>
        <MediaField
          image={finishImage}
          videoReady
          sizes="100vw"
          objectPosition="center 36%"
          objectPositionTablet="center 34%"
          objectPositionMobile="center 32%"
          className="h-[min(72svh,32rem)] w-full sm:h-[78svh] lg:h-[82svh]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[42%] bg-gradient-to-b from-[color-mix(in_srgb,var(--navy)_40%,transparent)] via-[color-mix(in_srgb,var(--navy)_12%,transparent)] to-transparent"
          />
          <div className="absolute left-0 top-0 z-[2] px-[var(--page-pad)] py-[clamp(1.75rem,4.5vh,3rem)]">
            <div className="max-w-[26ch]">
              <p className="t-meta text-bg/75">{finish.label}</p>
              <p className="t-annotate mt-2 text-bg/90">{finish.body}</p>
            </div>
          </div>
        </MediaField>
      </div>
    </section>
  );
}
