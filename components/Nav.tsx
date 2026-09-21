"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { nav } from "@/lib/content";

const linkCls =
  "whitespace-nowrap border-b pb-[3px] text-[11.5px] uppercase tracking-[0.2em] transition-colors duration-[240ms] ease-linear hover:border-gold";

// Fixed header over the hero: transparent with a top-down scrim, wordmark centred
// between two flex:1 link groups. Once the page scrolls it settles onto a solid
// ink ground so cream type never lands on a cream section. Below 1140px the
// groups drop out (CSS, so there is no flash on load) for a full-screen overlay.
export function Nav({ solid: alwaysSolid = false }: { solid?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solid = alwaysSolid || scrolled;

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

  // Widening past the breakpoint closes the overlay.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1140px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
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
        className={`fixed inset-x-0 top-0 z-[60] flex items-center gap-8 px-[clamp(24px,4.2vw,64px)] text-cream transition-[padding] duration-300 ease-house ${
          solid ? "py-[18px]" : "py-[30px]"
        }`}
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(180deg, rgba(20,18,15,.55) 0%, rgba(20,18,15,0) 100%)" }}
        />
        <div
          aria-hidden
          className={`absolute inset-0 -z-10 border-b border-[rgba(244,241,234,.1)] bg-[rgba(20,18,15,.94)] transition-opacity duration-300 ${
            solid ? "opacity-100" : "opacity-0"
          }`}
        />

        <nav aria-label="Primary" className="hidden flex-1 items-center gap-[clamp(20px,2.4vw,34px)] min-[1140px]:flex">
          {nav.left.map(renderLink)}
        </nav>

        <Link href="/" aria-label="CEO Rules, home" className="mx-auto flex flex-none items-center">
          <BrandLogo priority />
        </Link>

        <nav
          aria-label="Secondary"
          className="hidden flex-1 items-center justify-end gap-[clamp(20px,2.4vw,34px)] min-[1140px]:flex"
        >
          {nav.right.map(renderLink)}
          <Link
            href={nav.cta.href}
            className="whitespace-nowrap border border-[rgba(244,241,234,.55)] px-[18px] py-[10px] text-[11.5px] uppercase tracking-[0.2em] transition-colors duration-[240ms] ease-linear hover:bg-cream hover:text-ink"
          >
            {nav.cta.label}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="absolute right-[clamp(24px,4.2vw,64px)] top-1/2 flex h-11 w-11 -translate-y-1/2 flex-col items-end justify-center gap-1.5 min-[1140px]:hidden"
        >
          <span className="block h-px w-[26px] bg-cream" />
          <span className="block h-px w-[18px] bg-cream" />
        </button>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink-deep px-[clamp(24px,6vw,64px)] pb-[clamp(40px,8vh,80px)] pt-[30px] text-cream"
          >
            <div className="flex items-center justify-between gap-6">
              <Link href="/" onClick={() => setOpen(false)} aria-label="CEO Rules, home">
                <BrandLogo className="h-[16px] w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                autoFocus
                className="grid h-11 w-11 place-items-center text-[22px]"
              >
                ×
              </button>
            </div>
            <nav aria-label="Menu" className="my-auto flex flex-col gap-[clamp(20px,3.4vh,32px)]">
              {[...nav.left, ...nav.right].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[clamp(26px,7vw,38px)] leading-[1.1] tracking-[-0.025em] transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <Link
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-4 border border-[rgba(244,241,234,.5)] px-6 py-5 text-[12px] uppercase tracking-[0.2em]"
            >
              {nav.cta.label} <span aria-hidden>→</span>
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
