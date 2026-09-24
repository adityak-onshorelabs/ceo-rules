"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// The Reels as moving photography (brief §13, §14): the house's own frame and
// controls, never Instagram's player. Films play muted and inline while in
// view; one discreet control gives a film its sound. Only one film speaks at a
// time, and the atelier ambience steps aside while it does (see Sound.tsx).
// Reduced motion keeps the poster until the visitor presses play.

const SOUND_EVENT = "ceo:reel-sound";

const ctrl =
  "grid h-11 min-w-11 place-items-center border border-[rgba(244,241,234,.5)] px-3 text-[12px] uppercase tracking-[0.18em] text-cream transition-colors duration-[240ms] hover:border-gold focus-visible:border-gold";

function Caption({ label, line }: { label: string; line: string }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-[linear-gradient(0deg,rgba(14,13,11,.86)_0%,rgba(14,13,11,.55)_55%,rgba(14,13,11,0)_100%)] px-6 pb-[76px] pt-24">
      <p className="text-[12px] uppercase tracking-[0.22em] text-[rgba(244,241,234,.86)]">{label}</p>
      <p className="mt-2 max-w-[20ch] font-serif text-[clamp(19px,1.5vw,22px)] font-light leading-[1.25] text-cream">{line}</p>
    </div>
  );
}

export function ReelFilm({
  video,
  poster,
  alt,
  label,
  line,
}: {
  video: string;
  poster: string;
  alt: string;
  label: string;
  line: string;
}) {
  const id = useId();
  const reduce = useReducedMotion();
  const box = useRef<HTMLDivElement>(null);
  const el = useRef<HTMLVideoElement>(null);
  const [attach, setAttach] = useState(false);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState(false);

  // Attach the file only near the viewport; play while at least half in view.
  useEffect(() => {
    if (!box.current) return;
    const obs = new IntersectionObserver(([e]) => setVisible(e.intersectionRatio >= 0.5), {
      threshold: [0, 0.5, 1],
    });
    const near = new IntersectionObserver(([e]) => e.isIntersecting && setAttach(true), { rootMargin: "400px 0px" });
    obs.observe(box.current);
    near.observe(box.current);
    return () => {
      obs.disconnect();
      near.disconnect();
    };
  }, []);

  useEffect(() => {
    const v = el.current;
    if (!v) return;
    if (visible && (!reduce || sound)) v.play().catch(() => {});
    else v.pause();
  }, [visible, reduce, sound, attach]);

  // Another film took the sound: fall silent.
  useEffect(() => {
    const other = (e: Event) => {
      if ((e as CustomEvent<string | null>).detail !== id) setSound(false);
    };
    window.addEventListener(SOUND_EVENT, other);
    return () => window.removeEventListener(SOUND_EVENT, other);
  }, [id]);

  // Leaving the frame hands the sound back.
  useEffect(() => {
    if (!visible && sound) {
      setSound(false);
      window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: null }));
    }
  }, [visible, sound]);

  const toggleSound = () => {
    const next = !sound;
    setAttach(true);
    setSound(next);
    window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: next ? id : null }));
    if (next) {
      requestAnimationFrame(() => {
        const v = el.current;
        if (!v) return;
        v.muted = false;
        v.play().catch(() => {});
      });
      window.dispatchEvent(new CustomEvent("ceo:track", { detail: { name: "reel_sound_on", label } }));
    }
  };

  useEffect(() => {
    if (el.current) el.current.muted = !sound;
  }, [sound]);

  return (
    <div ref={box} className="absolute inset-0 overflow-hidden bg-ink-deep">
      <Image
        src={poster}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 30vw, 80vw"
        quality={80}
        className={`object-cover transition-opacity duration-500 ${playing ? "opacity-0" : "opacity-100"}`}
      />
      {attach ? (
        <video
          ref={el}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          onPlaying={() => setPlaying(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <Caption label={label} line={line} />
      <button
        type="button"
        onClick={toggleSound}
        aria-label={sound ? `Turn sound off: ${line}` : reduce && !playing ? `Play with sound: ${line}` : `Turn sound on: ${line}`}
        className={`${ctrl} absolute bottom-5 right-5 z-20 gap-2 bg-[rgba(14,13,11,.35)]`}
      >
        {sound ? "Turn sound off" : "Turn sound on"}
      </button>
    </div>
  );
}

export function ReelSlides({ slides, alt, label, line }: { slides: string[]; alt: string; label: string; line: string }) {
  const reduce = useReducedMotion();
  const box = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(false);
  const [held, setHeld] = useState(false);
  const n = slides.length;

  useEffect(() => {
    if (!box.current) return;
    const obs = new IntersectionObserver(([e]) => setVisible(e.intersectionRatio >= 0.5), { threshold: [0, 0.5] });
    obs.observe(box.current);
    return () => obs.disconnect();
  }, []);

  // Turns its own pages while in view, like the post does; any touch hands
  // control to the visitor.
  useEffect(() => {
    if (!visible || reduce || held) return;
    const t = window.setInterval(() => setI((x) => (x + 1) % n), 4200);
    return () => window.clearInterval(t);
  }, [visible, reduce, held, n]);

  const go = (d: number) => {
    setHeld(true);
    setI((x) => (x + d + n) % n);
  };

  return (
    <div
      ref={box}
      className="absolute inset-0 overflow-hidden bg-ink-deep"
      role="group"
      aria-roledescription="carousel"
      aria-label={alt}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      {/* The post is 4:5; it sits in the vertical frame on the ink ground. */}
      <div className="absolute inset-x-0 top-[5%] aspect-[4/5]">
        {slides.map((s, k) => (
          <Image
            key={s}
            src={s}
            alt={k === i ? `${alt}: slide ${k + 1} of ${n}` : ""}
            aria-hidden={k !== i}
            fill
            sizes="(min-width: 1024px) 30vw, 80vw"
            quality={82}
            className={`object-cover transition-opacity duration-700 ease-out ${k === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      <Caption label={label} line={line} />
      <div className="absolute inset-x-5 bottom-5 z-20 flex items-center justify-between">
        <p aria-live={held ? "polite" : "off"} className="text-[12px] tabular-nums tracking-[0.18em] text-[rgba(244,241,234,.86)]">
          {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button type="button" onClick={() => go(-1)} aria-label="Previous slide" className={`${ctrl} bg-[rgba(14,13,11,.35)]`}>
            <span aria-hidden>←</span>
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next slide" className={`${ctrl} bg-[rgba(14,13,11,.35)]`}>
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
