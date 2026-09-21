import Link from "next/link";
import { MillLogo } from "@/components/MillLogo";
import { mills } from "@/lib/content";

// The houses we keep: an edge-to-edge band of the mills' own marks, drifting
// slowly. The set is rendered twice so the loop is seamless; hovering pauses
// it, and under reduced motion it settles into a static, centred wrap.
export function Mills() {
  const row = (dup: boolean) => (
    <ul
      aria-hidden={dup || undefined}
      className={`flex flex-none items-center gap-[clamp(64px,8vw,140px)] pr-[clamp(64px,8vw,140px)] ${dup ? "marquee-dup" : ""}`}
    >
      {mills.map((m) => (
        <li key={m.name} className="flex-none">
          <MillLogo
            name={dup ? "" : m.name}
            logo={m.logo}
            tone="ink"
            className="w-auto"
            style={{ height: `calc(clamp(72px, 7vw, 110px) * ${m.scale})` }}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-labelledby="mills-title" className="bg-cream py-[clamp(96px,14vh,170px)]">
      <div className="mx-auto flex max-w-wide flex-wrap items-end justify-between gap-6 px-[var(--gutter)]">
        <div>
          <p className="kicker text-[rgba(28,26,23,.55)]">The houses we keep</p>
          <h2 id="mills-title" className="h-breath !max-w-[20ch]">
            Eight mills, chosen for what they do in the hand.
          </h2>
        </div>
        <Link href="/the-cloth" className="link-line text-[rgba(28,26,23,.75)]">
          The Cloth <span aria-hidden>→</span>
        </Link>
      </div>

      <div
        className="marquee mt-[clamp(56px,9vh,110px)] overflow-hidden border-y border-[rgba(28,26,23,.14)] py-[clamp(40px,6vh,72px)]"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
