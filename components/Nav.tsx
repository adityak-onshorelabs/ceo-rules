"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { nav } from "@/lib/content";
import { BrandLogo } from "@/components/BrandLogo";
import { CtaLink } from "@/components/CtaLink";

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link href={href} aria-current={active ? "page" : undefined} className="group inline-flex flex-col items-start">
      <span className="font-sans text-[0.8rem] uppercase tracking-[0.12em]">{label}</span>
      <span
        aria-hidden
        className={`mt-1 h-px w-full origin-left transition-transform duration-300 ease-out-quart ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
        style={{ backgroundColor: "var(--brand-blue)" }}
      />
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const links = [...nav.leftLinks, ...nav.rightLinks];

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>("a, button");
    focusable?.[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg text-ink">
      <nav
        className="relative flex w-full items-center justify-center px-[var(--page-pad)] py-5"
        aria-label="Primary"
      >
        <div className="absolute left-[var(--page-pad)] hidden items-center gap-x-[clamp(1.25rem,2.2vw,2.25rem)] lg:flex">
          {nav.leftLinks.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} active={isActive(l.href)} />
          ))}
        </div>

        <Link href="/" aria-label="CEO Rules" className="relative z-10 block w-[176px] lg:w-[220px]">
          <BrandLogo variant="blue" size="nav" priority decorative />
        </Link>

        <div className="absolute right-[var(--page-pad)] hidden items-center gap-x-[clamp(1.25rem,2.2vw,2.25rem)] lg:flex">
          {nav.rightLinks.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} active={isActive(l.href)} />
          ))}
          <CtaLink href={nav.cta.href} tone="ink">
            {nav.cta.label}
          </CtaLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={panelId}
          className="absolute right-[var(--page-pad)] z-10 -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="relative block h-3.5 w-6" aria-hidden>
            <span
              className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-all duration-300 ease-out-quart ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-[1.5px] w-6 bg-current transition-all duration-300 ease-out-quart ${
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id={panelId}
        ref={panelRef}
        className={`fixed inset-0 z-0 bg-bg text-ink transition-opacity duration-300 ease-out-quart lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="flex h-full flex-col justify-center gap-1 px-[var(--page-pad)]"
          aria-label="Mobile"
        >
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="py-3 font-sans text-[clamp(1.75rem,7vw,2.35rem)] leading-tight"
              >
                <span className={active ? "text-ink" : "text-ink-muted"}>{l.label}</span>
              </Link>
            );
          })}
          <div className="mt-8">
            <CtaLink href={nav.cta.href}>{nav.cta.label}</CtaLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
