"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Lightweight smooth scrolling: a rAF lerp toward a wheel-driven target, plus
// smooth in-page anchor clicks. No dependencies. Disabled on touch and for
// reduced-motion (native scrolling there), so it never harms usability.
const NAV_OFFSET = 72;
const EASE = 0.095;

export function SmoothScroll() {
  const pathname = usePathname();

  // Cross-page section links (e.g. "/#visit" from another route): after landing,
  // scroll to the hashed section. Next's App Router doesn't do this reliably.
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;
    let tries = 0;
    let raf = 0;
    const settle = () => {
      const el = document.getElementById(hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo(0, Math.max(0, top));
      } else if (tries++ < 10) {
        raf = requestAnimationFrame(settle);
      }
    };
    raf = requestAnimationFrame(settle);
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  useEffect(() => {
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqCoarse = window.matchMedia("(pointer: coarse)");
    if (mqReduce.matches || mqCoarse.matches) return;

    let target = window.scrollY;
    let current = window.scrollY;
    let running = false;
    let rafId = 0;

    const maxScroll = () =>
      Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
    const clamp = (v: number) => Math.max(0, Math.min(v, maxScroll()));

    const loop = () => {
      current += (target - current) * EASE;
      if (Math.abs(target - current) < 0.4) {
        current = target;
        window.scrollTo(0, current);
        running = false;
        return;
      }
      window.scrollTo(0, current);
      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!running) {
        running = true;
        current = window.scrollY;
        rafId = requestAnimationFrame(loop);
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // let pinch-zoom through
      const unit =
        e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
      e.preventDefault();
      target = clamp(target + e.deltaY * unit);
      start();
    };

    // Keep target in sync when the user scrolls by other means (keyboard, drag).
    const onScroll = () => {
      if (!running) target = window.scrollY;
    };

    const onResize = () => {
      target = clamp(target);
    };

    // Smooth in-page anchor clicks (nav links like /#wardrobe, #visit).
    // Capture phase + stopImmediatePropagation so we win over Next's <Link>,
    // which would otherwise snap-scroll to the hash instantly.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const link = (e.target as HTMLElement)?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const hash = href.includes("#") ? href.slice(href.indexOf("#") + 1) : "";
      if (!hash) return;
      const el = document.getElementById(hash);
      if (!el) return; // different page: let the router handle it
      e.preventDefault();
      e.stopImmediatePropagation();
      const top =
        el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      target = clamp(top);
      history.pushState(null, "", href);
      start();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("click", onClick, true);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
