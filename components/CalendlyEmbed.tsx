"use client";

import { useEffect, useState } from "react";

// Anis's Calendly booking flow (brief §12), embedded inline and styled to the
// house: House Ivory ground, House Ink text, the official blue as the accent,
// Calendly's cookie banner hidden. Calendly posts a message when a booking
// completes; the page answers it in its own voice.
export function CalendlyEmbed({ url }: { url: string }) {
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      const data = e.data as { event?: string } | undefined;
      if (data?.event === "calendly.event_scheduled") {
        setBooked(true);
        window.dispatchEvent(new CustomEvent("ceo:track", { detail: { name: "calendly_booking_complete" } }));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const src = `${url}?${new URLSearchParams({
    embed_type: "Inline",
    hide_gdpr_banner: "1",
    background_color: "f4f1ea",
    text_color: "1c1a17",
    primary_color: "0d3088",
  })}`;

  return (
    <div>
      <iframe
        src={src}
        title="Book a private appointment with Anis Soomar"
        loading="lazy"
        className="block h-[1080px] w-full border-0 sm:h-[760px]"
      />
      <p role="status" aria-live="polite" className={booked ? "mt-6 text-[15px] leading-[1.7] text-ink" : "sr-only"}>
        {booked ? "Thank you. The hour is held, and a confirmation is on its way to your inbox." : ""}
      </p>
    </div>
  );
}
