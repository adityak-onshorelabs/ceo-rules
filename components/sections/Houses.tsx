import Image from "next/image";
import Link from "next/link";
import { mills } from "@/lib/content";

// The houses we keep: the mills' own marks, end to end, on the ivory ground
// (client request). All eight are drawn in House Ink so no one mark shouts
// over the others; `scale` in content evens out their optical weight.
export function Houses() {
  const set = (hidden: boolean) =>
    mills.map((m) => (
      <li key={`${m.name}-${hidden}`} aria-hidden={hidden || undefined} className="flex flex-none items-center px-[clamp(28px,3.4vw,56px)]">
        <Image
          src={m.logo}
          alt={hidden ? "" : m.name}
          width={300}
          height={123}
          className="h-[clamp(64px,7vw,96px)] w-auto opacity-[.86] [filter:brightness(0)]"
          style={{ transform: `scale(${m.scale})` }}
        />
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
