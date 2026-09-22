"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { nav } from "@/lib/content";

const linkCls =
  "whitespace-nowrap border-b pb-[3px] text-[12px] uppercase tracking-[0.2em] transition-colors duration-[240ms] ease-linear hover:border-gold";

// Brief §17: House + Bespoke left, the official logo centred, Wardrobe + The
// Rules + Visit the Atelier right. The bar sits on House Ivory so the wordmark
// keeps its original blue (brief §3: never recoloured white over photography).
// A spacer of the same height follows, so every page begins below the bar and
// photographs are never covered. Below 1140px the groups give way to a
// full-screen menu, art-directed for the phone rather than a shrunk desktop bar.
export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1140px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const renderLink = (l: { label: string; href: string }) => {
    const active = pathname === l.href;
    return (
      <Link
        key={l.href}
        href={l.href}
        aria-current={active ? "page" : undefined}
        className={`${linkCls} ${active ? "border-gold" : "border-transparent"}`}
      >
        {l.label}
      </Link>
    );
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] flex h-[var(--nav-h)] items-center gap-8 border-b bg-cream px-[clamp(20px,4.2vw,64px)] text-ink transition-[border-color] duration-300 ${
          scrolled ? "border-[rgba(28,26,23,.12)]" : "border-transparent"
        }`}
      >
        <nav aria-label="Primary" className="hidden flex-1 items-center gap-[clamp(20px,2.4vw,34px)] min-[1140px]:flex">
          {nav.left.map(renderLink)}
        </nav>

        <Link href="/" aria-label="CEO Rules, home" className="mx-auto flex flex-none items-center">
          <BrandLogo tone="blue" priority className="h-[clamp(15px,1.45vw,20px)] w-auto" />
        </Link>

        <nav
          aria-label="Secondary"
          className="hidden flex-1 items-center justify-end gap-[clamp(20px,2.4vw,34px)] min-[1140px]:flex"
        >
          {nav.right.map(renderLink)}
          <Link
            href={nav.cta.href}
            data-track="book_appointment_click"
            className="whitespace-nowrap border border-[rgba(28,26,23,.4)] px-[18px] py-[10px] text-[12px] uppercase tracking-[0.2em] transition-colors duration-[240ms] ease-linear hover:bg-ink hover:text-cream"
          >
            {nav.cta.label}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="site-menu"
          className="absolute right-[clamp(20px,4.2vw,64px)] top-1/2 flex h-11 w-11 -translate-y-1/2 flex-col items-end justify-center gap-1.5 min-[1140px]:hidden"
        >
          <span className="block h-px w-[26px] bg-ink" />
          <span className="block h-px w-[18px] bg-ink" />
        </button>
      </header>
      {/* Reserve the bar's height so no page starts underneath it. */}
      <div aria-hidden className="h-[var(--nav-h)]" />

      <AnimatePresence>
        {open ? (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex flex-col bg-cream px-[clamp(20px,6vw,64px)] pb-[clamp(32px,6vh,64px)] text-ink"
          >
            <div className="flex h-[var(--nav-h)] flex-none items-center justify-between gap-6">
              <Link href="/" onClick={() => setOpen(false)} aria-label="CEO Rules, home">
                <BrandLogo tone="blue" className="h-[16px] w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                autoFocus
                className="-mr-2 grid h-11 w-11 place-items-center text-[26px] font-light"
              >
                ×
              </button>
            </div>
            <nav aria-label="Menu" className="my-auto flex flex-col gap-[clamp(14px,2.6vh,26px)]">
              {[...nav.left, ...nav.right].map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="flex items-baseline gap-5 border-b border-[rgba(28,26,23,.12)] pb-[clamp(14px,2.6vh,26px)]"
                >
                  <span className="w-6 text-[12px] tracking-[0.2em] text-[rgba(28,26,23,.5)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-[clamp(30px,8vw,42px)] font-light leading-[1.05] tracking-[-0.02em]">
                    {l.label}
                  </span>
                </Link>
              ))}
            </nav>
            <Link
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-4 bg-ink px-6 py-5 text-[12px] uppercase tracking-[0.2em] text-cream"
            >
              {nav.cta.label} <span aria-hidden>→</span>
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
