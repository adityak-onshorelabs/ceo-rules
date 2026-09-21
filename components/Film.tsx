"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { AuditNote, type AuditPlacement } from "@/components/AuditNote";

// A silent, looping film in place of a photograph. The poster renders first
// (server and client alike); the video file is only attached once the frame
// nears the viewport, and it pauses when scrolled away. Reduced motion and
// Save-Data keep the poster alone.
export function Film({
  src,
  poster,
  alt,
  position = "50% 50%",
  filter = "saturate(.72) contrast(1.06) brightness(.86)",
  sizes = "100vw",
  audit,
  auditAt = "bl",
  className = "absolute inset-0",
}: {
  src: string;
  poster: string;
  alt: string;
  position?: string;
  filter?: string;
  sizes?: string;
  audit?: string;
  auditAt?: AuditPlacement;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const box = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [attach, setAttach] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData ?? false;
    if (reduce || saveData || !box.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setAttach(true);
          video.current?.play().catch(() => {});
        } else {
          video.current?.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    obs.observe(box.current);
    return () => obs.disconnect();
  }, [reduce]);

  const media = { objectFit: "cover" as const, objectPosition: position, filter };

  return (
    <div ref={box} className={`overflow-hidden bg-ink-deep ${className}`}>
      <Image src={poster} alt={alt} fill sizes={sizes} quality={85} className="object-cover" style={media} />
      {attach ? (
        <video
          ref={video}
          src={src}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-hidden
          onPlaying={() => setPlaying(true)}
          className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${playing ? "opacity-100" : "opacity-0"}`}
          style={media}
        />
      ) : null}
      {audit ? <AuditNote text={audit} at={auditAt} /> : null}
    </div>
  );
}
