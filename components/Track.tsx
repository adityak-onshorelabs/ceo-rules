"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Basic conversion measurement (brief §25), nothing invasive: no cookies, no
// identifiers. Events go to window.dataLayer, which whichever analytics the
// client connects (GA4 via GTM, Vercel Analytics) can read. Tracked:
// appointment CTAs, Calendly bookings, WhatsApp, directions, phone, Instagram
// and Reels, sound on/off, and page views.
type Detail = { name: string; [k: string]: unknown };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function push(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

function classify(a: HTMLAnchorElement): string | null {
  if (a.dataset.track) return a.dataset.track;
  const href = a.getAttribute("href") ?? "";
  if (href.startsWith("https://wa.me")) return "whatsapp_click";
  if (href.startsWith("tel:")) return "phone_click";
  if (href.includes("google.com/maps")) return "directions_click";
  if (href.includes("instagram.com")) return "instagram_click";
  if (href.startsWith("/appointment")) return "book_appointment_click";
  return null;
}

export function Track() {
  const pathname = usePathname();

  useEffect(() => {
    push("page_view", { path: pathname });
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a) return;
      const name = classify(a);
      if (name) push(name, { href: a.getAttribute("href"), path: window.location.pathname });
    };
    const onCustom = (e: Event) => {
      const d = (e as CustomEvent<Detail>).detail;
      if (d?.name) push(d.name, { path: window.location.pathname });
    };
    document.addEventListener("click", onClick);
    window.addEventListener("ceo:track", onCustom);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("ceo:track", onCustom);
    };
  }, []);

  return null;
}
