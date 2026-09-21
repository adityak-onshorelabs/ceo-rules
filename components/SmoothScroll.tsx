"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Lightweight smooth scrolling: a rAF lerp toward a wheel-driven target, plus
// smooth in-page anchor clicks. No dependencies. Disabled on touch and for
// reduced-motion (native scrolling there), so it never harms usability.
const NAV_OFFSET = 72;
const EASE = 0.095;

export function SmoothScroll() {
  const pathname = usePathname();
  // Set by the scroll loop below so the route-change effect can hard-reset the
  // loop's internal target/current. Null on touch/reduced-motion (loop is off).
  const resetRef = useRef<((y: number) => void) | null>(null);

  // On every route change, put the new page where it belongs: the hashed section
  // if the URL has one, otherwise the top. Without this, the smooth loop's stale
  // target (e.g. the previous page's bottom) overrides the browser scroll reset.
  useEffect(() => {
    const jump = (y: number) => {
      if (resetRef.current) resetRef.current(y);
      else window.scrollTo(0, y);
    };

    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) {
      jump(0);
      return;
    }

    let tries = 0;
    let raf = 0;
    const settle = () => {
      const el = document.getElementById(hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        jump(Math.max(0, top));
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

    // Hard reset: stop any in-flight animation and snap both target and current
    // to y. Used by the route-change effect so a new page never inherits the old
    // page's scroll target.
    const reset = (y: number) => {
      running = false;
      cancelAnimationFrame(rafId);
      target = clamp(y);
      current = target;
      window.scrollTo(0, target);
    };
    resetRef.current = reset;

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
      resetRef.current = null;
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
