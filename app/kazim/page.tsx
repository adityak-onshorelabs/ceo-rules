import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { kazim } from "@/lib/content";

// Brief §19: a standalone QR contact card. No site navigation, no bio, no
// form, no marketing, not indexed. Kazim's own WhatsApp, not Anis's.
export const metadata: Metadata = {
  title: "Kazim Soomar — CEO Rules",
  robots: { index: false, follow: false },
};

const action =
  "flex min-h-14 w-full items-center justify-between border border-[rgba(28,26,23,.3)] px-6 text-[13px] uppercase tracking-[0.22em] text-ink transition-colors duration-[240ms] hover:bg-ink hover:text-cream";

export default function KazimPage() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-cream px-6 py-16 text-center">
      <BrandLogo tone="blue" priority className="h-5 w-auto" />
      <h1 className="mt-14 text-[clamp(28px,8vw,40px)] tracking-[-0.03em] text-ink">{kazim.name}</h1>
      <p className="mt-3 text-[14px] tracking-[0.08em] text-[rgba(28,26,23,.7)]">{kazim.place}</p>
      <div className="mt-12 flex w-full max-w-[320px] flex-col gap-3">
        <a href={kazim.whatsapp} target="_blank" rel="noopener noreferrer" className={action}>
          WhatsApp <span aria-hidden>↗</span>
        </a>
        <Link href={kazim.website} className={action}>
          Website <span aria-hidden>↗</span>
        </Link>
      </div>
    </main>
  );
}
