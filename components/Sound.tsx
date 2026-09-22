"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { sound } from "@/lib/content";

// Optional atelier ambience (brief §16).
// - Lives in the root layout, so it carries on across page changes; loops
//   endlessly, and resumes from the same moment after a reload or in a new tab.
// - The track downloads as soon as the page loads, then starts on the
//   visitor's first genuine interaction (a click, tap or key press; browsers
//   allow nothing earlier, and scrolling does not count), fading in over about
//   a second to ~12% volume. No splash screen.
// - A floating Sound on / Sound off button (SoundButton); the choice is kept
//   for the session.
// - Only appears once a licensed track is configured at `sound.src`.

type Ctx = { available: boolean; on: boolean; toggle: () => void };
const SoundContext = createContext<Ctx>({ available: false, on: false, toggle: () => {} });
const KEY = "ceo-sound";
const POS_KEY = "ceo-sound-t";

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

  // Create the element and start downloading the track straight away, so the
  // first click can play it at once instead of waiting on the network.
  const ensure = useCallback((): HTMLAudioElement | null => {
    if (!sound.src) return null;
    if (!audio.current) {
      const el = new Audio();
      el.preload = "auto";
      el.loop = true;
      el.volume = 0;
      // Pick up where the visitor left off after a reload or in a new tab.
      el.addEventListener(
        "loadedmetadata",
        () => {
          try {
            const t = Number(sessionStorage.getItem(POS_KEY));
            if (t > 0 && t < el.duration) el.currentTime = t;
          } catch {}
        },
        { once: true },
      );
      el.addEventListener("timeupdate", () => {
        try {
          sessionStorage.setItem(POS_KEY, String(el.currentTime));
        } catch {}
      });
      el.src = sound.src;
      el.load();
      audio.current = el;
    }
    return audio.current;
  }, []);

  const play = useCallback(
    (): Promise<boolean> => {
      const el = ensure();
      if (!el) return Promise.resolve(false);
      return el.play().then(
        () => {
          setOn(true);
          ramp(sound.volume);
          // Playing counts as choosing it, so a reload tries to carry on.
          try {
            sessionStorage.setItem(KEY, "on");
          } catch {}
          return true;
        },
        () => false,
      );
    },
    [ramp, ensure],
  );

  const stop = useCallback(() => {
    setOn(false);
    ramp(0, () => audio.current?.pause());
  }, [ramp]);

  // Start as soon as the browser allows: straight away if the visitor already
  // chose Sound on earlier in the session (some browsers permit this after a
  // reload), otherwise on their first genuine interaction. Never if they
  // turned it off.
  useEffect(() => {
    if (!available) return;
    let pref: string | null = null;
    try {
      pref = sessionStorage.getItem(KEY);
    } catch {}
    if (pref === "off") return;
    ensure();
    const events = ["pointerdown", "click", "touchend", "keydown"] as const;
    const remove = () => events.forEach((n) => window.removeEventListener(n, first));
    const first = (e: Event) => {
      // The sound control handles itself.
      if ((e.target as HTMLElement | null)?.closest?.("[data-sound-toggle]")) return remove();
      play().then((ok) => ok && remove());
    };
    events.forEach((n) => window.addEventListener(n, first));
    if (pref === "on") play().then((ok) => ok && remove());
    return remove;
  }, [available, play, ensure]);

  // A Reel given its sound takes the room: the ambience fades out under it
  // and returns when the Reel falls silent. The visitor's own choice is untouched.
  const ducked = useRef(false);
  useEffect(() => {
    const onReel = (e: Event) => {
      const speaking = (e as CustomEvent<string | null>).detail !== null;
      const el = audio.current;
      if (!el) return;
      if (speaking && !el.paused) {
        ducked.current = true;
        ramp(0, () => el.pause());
      } else if (!speaking && ducked.current) {
        ducked.current = false;
        if (on) el.play().then(() => ramp(sound.volume), () => {});
      }
    };
    window.addEventListener("ceo:reel-sound", onReel);
    return () => window.removeEventListener("ceo:reel-sound", onReel);
  }, [on, ramp]);

  const toggle = useCallback(() => {
    const next = !on;
    try {
      sessionStorage.setItem(KEY, next ? "on" : "off");
    } catch {}
    if (next) play();
    else stop();
    window.dispatchEvent(new CustomEvent("ceo:track", { detail: { name: next ? "sound_on" : "sound_off" } }));
  }, [on, play, stop]);

  return <SoundContext.Provider value={{ available, on, toggle }}>
      {children}
      <SoundButton />
    </SoundContext.Provider>;
}

// The sound control: a small round button that floats at the bottom right of
// every page. Before the visitor has chosen, a soft gold ring breathes around
// it to draw the eye; while music plays its bars move. On hover (or keyboard
// focus) it opens into a pill that names the state. Hidden on /kazim, which is
// a standalone contact card.
export function SoundButton() {
  const { available, on, toggle } = useContext(SoundContext);
  const pathname = usePathname();
  const [chosen, setChosen] = useState(true);

  useEffect(() => {
    try {
      setChosen(sessionStorage.getItem(KEY) !== null);
    } catch {
      setChosen(false);
    }
  }, []);

  if (!available || pathname?.startsWith("/kazim")) return null;

  const onClick = () => {
    setChosen(true);
    toggle();
  };

  return (
    <button
      type="button"
      data-sound-toggle
      onClick={onClick}
      aria-pressed={on}
      aria-label={on ? "Sound on. Turn the music off" : "Sound off. Turn the music on"}
      className="sound-fab group fixed bottom-[clamp(16px,3vw,32px)] right-[clamp(16px,3vw,32px)] z-50 flex h-14 min-w-14 items-center justify-center rounded-full border border-gold bg-ink-deep px-[18px] text-cream shadow-[0_12px_32px_-10px_rgba(20,18,15,.6),0_0_0_4px_rgba(168,130,60,.14)] transition-[padding,background-color] duration-500 ease-out hover:bg-ink focus-visible:bg-ink"
      data-state={on ? "on" : "off"}
      data-invite={!chosen && !on ? "" : undefined}
    >
      <span aria-hidden className="sound-bars flex h-5 w-[18px] items-end justify-between">
        {[0.55, 1, 0.75, 0.4].map((h, i) => (
          <span key={i} className="block w-[2.5px] rounded-full bg-gold" style={{ height: `${h * 100}%` }} />
        ))}
      </span>
      <span className="grid grid-cols-[minmax(0,0fr)] transition-[grid-template-columns] duration-500 ease-out group-hover:grid-cols-[minmax(0,1fr)] group-focus-visible:grid-cols-[minmax(0,1fr)]">
        <span className="min-w-0 overflow-hidden whitespace-nowrap pl-3 text-[11px] uppercase tracking-[0.22em]">
          {on ? "Sound on" : "Sound off"}
        </span>
      </span>
    </button>
  );
}
