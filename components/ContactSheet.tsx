import type { ReactNode } from "react";
import { Photo } from "@/components/Photo";

export type Frame = {
  label: string;
  line: string;
  body?: string;
  image: string;
  alt: string;
  position: string;
  audit?: string;
};

// Consecutive moments as a contact sheet (brief §7, §28: photography
// dominates; no cards, no feature grid). On the dark atelier ground the
// frames run edge to edge in strips of unequal widths, joined by hairline
// seams, so they read as film rather than a grid. Each frame carries its own
// label and line on a local pool of shade at its base.
// Mobile: one strip you swipe, frames near full width.
const WIDTHS = ["lg:flex-[1.35]", "lg:flex-[1]", "lg:flex-[1.2]", "lg:flex-[0.95]", "lg:flex-[1.1]", "lg:flex-[1.25]"];

export function ContactSheet({
  id,
  labelledBy,
  header,
  frames,
  perRow = 4,
}: {
  id?: string;
  labelledBy?: string;
  header: ReactNode;
  frames: Frame[];
  /** Frames per desktop strip; six frames at 3 make two strips. */
  perRow?: number;
}) {
  const rows: Frame[][] = [];
  for (let i = 0; i < frames.length; i += perRow) rows.push(frames.slice(i, i + perRow));

  const frame = (f: Frame, i: number, reveal: boolean, sizes: string, extra: string) => (
    <figure key={f.label} className={`relative ${extra}`}>
      <Photo
        src={f.image}
        alt={f.alt}
        position={f.position}
        grade="plate"
        scrims={[f.body ? "frame-base-tall" : "frame-base"]}
        motion={reveal ? "reveal" : "none"}
        sizes={sizes}
        audit={f.audit}
        auditAt="tl"
      />
      <figcaption className="halo-cream absolute inset-x-0 bottom-0 z-10 p-[clamp(20px,2vw,32px)]">
        <p className="text-[12px] uppercase tracking-[0.24em] text-cream">{f.label}</p>
        <p className="mt-2 max-w-[18ch] font-serif text-[clamp(20px,1.7vw,26px)] font-light leading-[1.12] tracking-[-0.02em] text-cream">
          {f.line}
        </p>
        {f.body ? (
          <p className="mt-3 max-w-[34ch] text-[14px] leading-[1.6] text-[rgba(244,241,234,.9)]">{f.body}</p>
        ) : null}
      </figcaption>
    </figure>
  );

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className="on-dark bg-ink-deep pb-[clamp(72px,12vh,140px)] pt-[clamp(88px,14vh,160px)]"
    >
      <div className="mx-auto max-w-wide px-[var(--gutter)]">{header}</div>

      {/* Desktop: edge-to-edge strips. */}
      <div className="mt-[clamp(48px,8vh,88px)] hidden flex-col gap-[3px] lg:flex">
        {rows.map((row, r) => (
          <div key={r} className="flex gap-[3px]">
            {row.map((f, i) =>
              frame(
                f,
                i,
                true,
                `${Math.round(100 / row.length) + 8}vw`,
                `h-[min(72svh,720px)] flex-1 ${WIDTHS[(i + r * 2) % WIDTHS.length]}`,
              ),
            )}
          </div>
        ))}
      </div>

      {/* Mobile: one strip to swipe. No reveal here, so off-screen frames are ready. */}
      <div
        aria-label="Swipe for more"
        className="no-scrollbar mt-[clamp(40px,6vh,64px)] flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-[3px] overflow-x-auto px-[var(--gutter)] lg:hidden"
      >
        {frames.map((f, i) => frame(f, i, false, "82vw", "h-[68svh] min-h-[420px] w-[82vw] flex-none snap-start"))}
      </div>
    </section>
  );
}
