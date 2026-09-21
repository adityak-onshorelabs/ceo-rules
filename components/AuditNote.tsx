"use client";

import { useEffect, useState } from "react";

export type AuditPlacement = "br" | "bl" | "tl" | "tr";

const PLACE: Record<AuditPlacement, string> = {
  br: "right-[clamp(14px,3vw,40px)] bottom-[clamp(14px,3vw,40px)]",
  bl: "left-[14px] bottom-[14px]",
  tl: "left-[14px] top-[14px]",
  tr: "right-[clamp(14px,3vw,40px)] top-[clamp(84px,12vh,130px)]",
};

// Photo-replacement notes from the design handoff. Review-only: rendered when
// the page is opened with ?audit in the URL, invisible to everyone else.
export function AuditNote({ text, at = "br" }: { text: string; at?: AuditPlacement }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(new URLSearchParams(window.location.search).has("audit"));
  }, []);

  if (!on) return null;

  return (
    <p
      className={`absolute z-20 max-w-[280px] border border-[rgba(232,160,60,.55)] bg-[rgba(14,13,11,.75)] px-3.5 py-3 text-[11.5px] leading-[1.5] text-[rgba(244,241,234,.86)] ${PLACE[at]}`}
    >
      <span className="mb-1.5 block text-[9.5px] uppercase tracking-[0.2em] text-[#E8A03C]">
        Photo note
      </span>
      {text}
    </p>
  );
}
