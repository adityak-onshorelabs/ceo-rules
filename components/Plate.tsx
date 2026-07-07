"use client";

import Image from "next/image";
import { useState } from "react";

// Prototype image plate. A warm tonal gradient always sits underneath, so if a
// (stand-in stock) image fails to load, the section still reads warm and intentional
// instead of broken. Real photography replaces these later (brief: authentic only).
export function Plate({
  src,
  alt,
  priority = false,
  className = "",
  scrim = "none",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  scrim?: "none" | "bottom" | "full";
}) {
  const [ok, setOk] = useState(true);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: "var(--plate)" }}
    >
      {ok && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          onError={() => setOk(false)}
          className="object-cover"
          style={{ filter: "saturate(0.9) contrast(1.02)" }}
        />
      )}
      {scrim !== "none" && (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              scrim === "full"
                ? "linear-gradient(180deg, oklch(0.185 0.012 58 / 0.35), oklch(0.185 0.012 58 / 0.6))"
                : "linear-gradient(180deg, transparent 35%, oklch(0.185 0.012 58 / 0.72))",
          }}
        />
      )}
    </div>
  );
}
