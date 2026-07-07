"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

// The page alternates dark and ivory bands, so the nav reads whichever band sits
// under it (via [data-nav="dark"|"light"] markers) and adapts its colours.
export function Nav() {
  const [onDark, setOnDark] = useState(true);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const probeY = 32; // a point just inside the nav
    const update = () => {
      setSolid(window.scrollY > 24);
      const els = document.querySelectorAll<HTMLElement>("[data-nav]");
      let theme: "dark" | "light" = "dark";
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= probeY && r.bottom > probeY) {
          theme = (el.dataset.nav as "dark" | "light") ?? theme;
        }
      });
      setOnDark(theme === "dark");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const atTop = !solid;
  const headerBg = atTop
    ? "bg-transparent"
    : onDark
      ? "border-b border-hairline-dark bg-bg-dark/80 backdrop-blur-[3px]"
      : "border-b border-hairline bg-bg/90 backdrop-blur-[3px]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-out-quart ${headerBg} ${
        onDark ? "text-ink-dark" : "text-ink"
      }`}
      style={
        // Legibility glow only when ivory text sits over a dark image (the hero).
        atTop && onDark
          ? { textShadow: "0 1px 16px oklch(0.14 0.012 58 / 0.65)" }
          : undefined
      }
    >
      <nav className="mx-auto flex max-w-editorial items-center justify-between px-[clamp(1.5rem,6vw,6rem)] py-5">
        <Link
          href="/"
          className="font-sans text-sm font-semibold uppercase tracking-[0.22em]"
        >
          {nav.wordmark}
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-[0.8rem] uppercase tracking-[0.14em] opacity-95 transition-opacity duration-300 hover:opacity-100"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
