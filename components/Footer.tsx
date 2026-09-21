import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-14 gap-y-[26px] border-t border-[rgba(244,241,234,.14)] bg-ink px-[var(--gutter)] py-[clamp(58px,8vh,96px)] text-[rgba(244,241,234,.6)]">
      <Link href="/" aria-label="CEO Rules, home">
        <BrandLogo className="h-[14px] w-auto opacity-90" />
      </Link>
      <span className="text-[12px] tracking-[0.06em]">{footer.line}</span>
      <nav aria-label="Footer" className="flex flex-wrap gap-6">
        {footer.links.map((l) =>
          l.external ? (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] uppercase tracking-[0.18em] transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ) : (
            <Link
              key={l.href}
              href={l.href}
              className="text-[12px] uppercase tracking-[0.18em] transition-colors hover:text-cream"
            >
              {l.label}
            </Link>
          ),
        )}
      </nav>
    </footer>
  );
}
