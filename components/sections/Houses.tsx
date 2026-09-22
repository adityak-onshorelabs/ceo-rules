import Image from "next/image";
import Link from "next/link";
import { mills } from "@/lib/content";

// The houses we keep: the mills' own marks, end to end, on the ivory ground
// (client request). Every mark is drawn in House Ink so no one shouts over the
// others; `scale` in content evens out their optical weight. Mills whose logo
// has not arrived yet are set as their name in the serif.
export function Houses() {
  const set = (hidden: boolean) =>
    mills.map((m) => (
      <li key={`${m.name}-${hidden}`} aria-hidden={hidden || undefined} className="flex flex-none items-center px-[clamp(28px,3.4vw,56px)]">
        {m.logo ? (
          <Image
            src={m.logo}
            alt={hidden ? "" : m.name}
            width={300}
            height={123}
            unoptimized={m.logo.endsWith(".svg")}
            className="h-[clamp(64px,7vw,96px)] w-auto opacity-[.86] [filter:brightness(0)]"
            style={{ transform: `scale(${m.scale ?? 1})` }}
          />
        ) : (
          // No mark supplied yet: the name, set in the serif at the logos' height.
          <span className="flex h-[clamp(64px,7vw,96px)] items-center whitespace-nowrap font-serif text-[clamp(22px,2.2vw,32px)] font-light tracking-[-0.01em] text-ink opacity-[.86]">
            {m.name}
          </span>
        )}
      </li>
    ));
  return (
    <section aria-labelledby="houses-title" className="houses overflow-hidden border-b border-[rgba(28,26,23,.12)] bg-cream py-[clamp(56px,9vh,96px)]">
      <div className="mx-auto flex max-w-wide flex-wrap items-end justify-between gap-4 px-[var(--gutter)]">
        <h2 id="houses-title" className="kicker !mb-0 !font-sans text-[rgba(28,26,23,.62)]">
          The houses we keep
        </h2>
        <Link href="/the-cloth" className="link-line !pb-1.5 text-[rgba(28,26,23,.76)]">
          The Cloth <span aria-hidden>→</span>
        </Link>
      </div>
      <ul className="houses-track mt-[clamp(32px,5vh,56px)] flex w-max items-center">
        {set(false)}
        {set(true)}
      </ul>
    </section>
  );
}
