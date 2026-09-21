"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { sound } from "@/lib/content";

// Optional atelier ambience (brief §16).
// - Lives in the root layout, so it carries on across page changes.
// - Starts only after the visitor's first genuine interaction (a click, tap or
//   key press; never on scroll, never a splash screen), fading in over ~2s to
//   ~12% volume. Browser autoplay rules are respected by construction.
// - A discreet Sound on / Sound off control; the choice is kept for the session.
// - Only appears once a licensed track is configured at `sound.src`.

type Ctx = { available: boolean; on: boolean; toggle: () => void };
const SoundContext = createContext<Ctx>({ available: false, on: false, toggle: () => {} });
const KEY = "ceo-sound";

export function SoundProvider({ children }: { children: ReactNode }) {
  const audio = useRef<HTMLAudioElement | null>(null);
  const fade = useRef<number | null>(null);
  const [available, setAvailable] = useState(false);
  const [on, setOn] = useState(false);

  // No configured track, no control (and no request).
  useEffect(() => {
    setAvailable(Boolean(sound.src));
  }, []);

  const ramp = useCallback((to: number, then?: () => void) => {
    const el = audio.current;
    if (!el) return;
    if (fade.current) cancelAnimationFrame(fade.current);
    const from = el.volume;
    const start = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / sound.fadeMs);
      el.volume = from + (to - from) * k;
      if (k < 1) fade.current = requestAnimationFrame(step);
      else then?.();
    };
    fade.current = requestAnimationFrame(step);
  }, []);

  const play = useCallback(() => {
    if (!sound.src) return;
    if (!audio.current) {
      audio.current = new Audio(sound.src);
      audio.current.loop = true;
      audio.current.volume = 0;
    }
    audio.current.play().then(
      () => {
        setOn(true);
        ramp(sound.volume);
      },
      () => {},
    );
  }, [ramp]);

  const stop = useCallback(() => {
    setOn(false);
    ramp(0, () => audio.current?.pause());
  }, [ramp]);

  // First genuine interaction: fade in, unless the visitor has turned it off.
  useEffect(() => {
    if (!available) return;
    let pref: string | null = null;
    try {
      pref = sessionStorage.getItem(KEY);
    } catch {}
    if (pref === "off") return;
    const first = (e: Event) => {
      // The sound control handles itself.
      if ((e.target as HTMLElement | null)?.closest?.("[data-sound-toggle]")) return;
      play();
      remove();
    };
    const remove = () => {
      window.removeEventListener("pointerdown", first);
      window.removeEventListener("keydown", first);
    };
    window.addEventListener("pointerdown", first);
    window.addEventListener("keydown", first);
    return remove;
  }, [available, play]);

  const toggle = useCallback(() => {
    const next = !on;
    try {
      sessionStorage.setItem(KEY, next ? "on" : "off");
    } catch {}
    if (next) play();
    else stop();
    window.dispatchEvent(new CustomEvent("ceo:track", { detail: { name: next ? "sound_on" : "sound_off" } }));
  }, [on, play, stop]);

  return <SoundContext.Provider value={{ available, on, toggle }}>{children}</SoundContext.Provider>;
}

export function SoundToggle({ className = "" }: { className?: string }) {
  const { available, on, toggle } = useContext(SoundContext);
  if (!available) return null;
  return (
    <button
      type="button"
      data-sound-toggle
      onClick={toggle}
      aria-pressed={on}
      className={`inline-flex min-h-11 items-center gap-2.5 whitespace-nowrap text-[12px] uppercase tracking-[0.2em] ${className}`}
    >
      <span aria-hidden className="flex h-3 items-end gap-[2px]">
        {[0.5, 1, 0.7].map((h, i) => (
          <span
            key={i}
            className="w-px bg-current transition-transform duration-300"
            style={{ height: "100%", transform: `scaleY(${on ? h : 0.25})`, transformOrigin: "bottom" }}
          />
        ))}
      </span>
      {on ? "Sound on" : "Sound off"}
    </button>
  );
}
