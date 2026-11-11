import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

// Brief §19: a standalone QR contact card. No site navigation, no bio, no
// form, no marketing. Shared by the personal cards (/kazim, /anees); each page
// sets its own unindexed metadata.

export type ContactAction = { label: string; href: string; external?: boolean };

const action =
  "flex min-h-14 w-full items-center justify-between border border-[rgba(28,26,23,.3)] px-6 text-[13px] uppercase tracking-[0.22em] text-ink transition-colors duration-[240ms] hover:bg-ink hover:text-cream";

export function ContactCard({ name, place, actions }: { name: string; place: string; actions: ContactAction[] }) {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-cream px-6 py-16 text-center">
      <BrandLogo tone="blue" priority className="h-5 w-auto" />
      <h1 className="mt-14 text-[clamp(28px,8vw,40px)] tracking-[-0.03em] text-ink">{name}</h1>
      <p className="mt-3 text-[14px] tracking-[0.08em] text-[rgba(28,26,23,.7)]">{place}</p>
      <div className="mt-12 flex w-full max-w-[320px] flex-col gap-3">
        {actions.map((a) =>
          a.external ? (
            <a key={a.label} href={a.href} target="_blank" rel="noopener noreferrer" className={action}>
              {a.label} <span aria-hidden>↗</span>
            </a>
          ) : (
            <Link key={a.label} href={a.href} className={action}>
              {a.label} <span aria-hidden>↗</span>
            </Link>
          ),
        )}
      </div>
    </main>
  );
}
