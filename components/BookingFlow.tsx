"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { site } from "@/lib/content";

// The appointment booking, in the house's own design (brief §12: no iframe).
// Availability and bookings go through our /api/booking routes to Anis's
// Calendly (Scheduling API); the Calendly UI never appears.
//
// Choose a day → choose a time → your details → the hour is held.
// Times are shown in India Standard Time, where the house is.

type Slot = { start: string };
type Phase = "loading" | "choose" | "sending" | "done" | "offline";

const TZ = "Asia/Kolkata";
const REASONS = ["Suit", "Shirt", "Jacket", "Tuxedo", "Bandhgala", "Sherwani", "Fitting", "Other"];

const dayKey = (iso: string) => new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(new Date(iso));
const fmt = (iso: string, o: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-IN", { timeZone: TZ, ...o }).format(new Date(iso));

const label = "text-[12px] uppercase tracking-[0.22em] text-[rgba(28,26,23,.66)]";
const field =
  "mt-2 w-full border-0 border-b border-[rgba(28,26,23,.3)] bg-transparent px-0 py-3 text-[16px] text-ink outline-none transition-colors placeholder:text-[rgba(28,26,23,.4)] focus:border-ink focus-visible:outline-none";

export function BookingFlow() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [slots, setSlots] = useState<Slot[]>([]);
  const [duration, setDuration] = useState<number | null>(null);
  const [day, setDay] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [reason, setReason] = useState("");
  const [notice, setNotice] = useState("");
  // Once opened, the details form stays put, so a taken hour never wipes what was typed.
  const [formOpen, setFormOpen] = useState(false);
  const [result, setResult] = useState<{ name: string; email: string; start: string; cancelUrl: string; rescheduleUrl: string } | null>(null);
  const timesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const load = async () => {
    try {
      const r = await fetch("/api/booking/slots", { cache: "no-store" });
      const j = await r.json();
      if (!j.configured || j.error || !Array.isArray(j.slots)) {
        setPhase("offline");
        return;
      }
      setSlots(j.slots);
      setDuration(typeof j.duration === "number" ? j.duration : null);
      setPhase("choose");
    } catch {
      setPhase("offline");
    }
  };

  useEffect(() => {
    load();
  }, []);

  // Next 21 days, each with its open times (empty days stay visible, disabled).
  const days = useMemo(() => {
    const byDay = new Map<string, Slot[]>();
    for (const s of slots) {
      const k = dayKey(s.start);
      byDay.set(k, [...(byDay.get(k) ?? []), s]);
    }
    const out: { key: string; iso: string; slots: Slot[] }[] = [];
    const now = Date.now();
    for (let i = 0; i < 21; i++) {
      const iso = new Date(now + i * 86400000).toISOString();
      const k = dayKey(iso);
      out.push({ key: k, iso, slots: byDay.get(k) ?? [] });
    }
    return out;
  }, [slots]);

  const daySlots = days.find((d) => d.key === day)?.slots ?? [];

  const pickDay = (k: string) => {
    setDay(k);
    setTime(null);
    setNotice("");
    requestAnimationFrame(() => timesRef.current?.focus());
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!time) return;
    const fd = new FormData(e.currentTarget);
    const body = {
      start: time,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      reason,
      notes: String(fd.get("notes") ?? ""),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    setPhase("sending");
    setNotice("");
    try {
      const r = await fetch("/api/booking/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const j = await r.json();
      if (r.ok && j.ok) {
        setResult({ name: body.name.split(" ")[0], email: body.email, start: time, cancelUrl: j.cancelUrl, rescheduleUrl: j.rescheduleUrl });
        setPhase("done");
        window.dispatchEvent(new CustomEvent("ceo:track", { detail: { name: "calendly_booking_complete" } }));
        return;
      }
      if (j.error === "slot_taken") {
        setNotice("That hour has just been taken. Here are the times still open.");
        setTime(null);
        await load();
        return;
      }
      setNotice(j.error === "invalid" ? "Please check your name and email." : "We could not hold the hour just now. Please try again, or message us on WhatsApp.");
      setPhase("choose");
    } catch {
      setNotice("We could not hold the hour just now. Please try again, or message us on WhatsApp.");
      setPhase("choose");
    }
  };

  const whatsapp = (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      data-track="whatsapp_click"
      className="inline-flex min-h-12 items-center gap-4 border border-[rgba(28,26,23,.4)] px-6 py-4 text-[12px] uppercase tracking-[0.2em] text-ink transition-colors duration-[240ms] hover:bg-ink hover:text-cream"
    >
      Message us on WhatsApp <span aria-hidden>↗</span>
    </a>
  );

  if (phase === "loading") {
    return (
      <p role="status" className="py-12 text-[15px] text-[rgba(28,26,23,.66)]">
        Finding the open hours…
      </p>
    );
  }

  if (phase === "offline") {
    return (
      <div className="border-t border-[rgba(28,26,23,.16)] pt-8">
        <p className="max-w-[44ch] text-[16px] leading-[1.7] text-[rgba(28,26,23,.8)]">
          Tell us a day that suits you and we will hold the hour.
        </p>
        <div className="mt-6">{whatsapp}</div>
      </div>
    );
  }

  if (phase === "done" && result) {
    return (
      <div role="status" aria-live="polite" className="border-t border-[rgba(28,26,23,.16)] pt-10">
        <p className={label}>The hour is held</p>
        <p className="mt-4 max-w-[20ch] font-serif text-[clamp(28px,3vw,42px)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
          Thank you, {result.name}. We will see you on {fmt(result.start, { weekday: "long", day: "numeric", month: "long" })}.
        </p>
        <p className="mt-5 text-[16px] leading-[1.7] text-[rgba(28,26,23,.8)]">
          {fmt(result.start, { hour: "numeric", minute: "2-digit" })} India time, at the house in Bandra West. A confirmation is on its way
          to {result.email}.
        </p>
        <p className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[12px] uppercase tracking-[0.2em]">
          <a href={result.rescheduleUrl} className="border-b border-[rgba(28,26,23,.35)] pb-1 hover:border-gold">
            Change the time
          </a>
          <a href={result.cancelUrl} className="border-b border-[rgba(28,26,23,.35)] pb-1 hover:border-gold">
            Cancel
          </a>
        </p>
      </div>
    );
  }

  const openDays = days.filter((d) => d.slots.length).length;

  return (
    <div className="border-t border-[rgba(28,26,23,.16)] pt-8">
      {notice ? (
        <p role="alert" className="mb-6 border-l-0 bg-cream-deep px-5 py-4 text-[15px] leading-[1.6] text-ink">
          {notice}
        </p>
      ) : null}

      {/* 1 · Day */}
      <fieldset className="min-w-0">
        <legend className={label}>
          <span className="tabular-nums">01</span> · Choose a day
        </legend>
        {openDays === 0 ? (
          <div className="mt-5">
            <p className="text-[15px] text-[rgba(28,26,23,.8)]">Every hour in the next three weeks is taken. Message us and we will find one.</p>
            <div className="mt-5">{whatsapp}</div>
          </div>
        ) : (
          <div className="no-scrollbar -mx-[clamp(24px,5vw,88px)] mt-5 flex snap-x gap-2 overflow-x-auto px-[clamp(24px,5vw,88px)] lg:mx-0 lg:grid lg:grid-cols-7 lg:overflow-visible lg:px-0">
            {days.map((d) => {
              const open = d.slots.length > 0;
              const on = day === d.key;
              return (
                <button
                  key={d.key}
                  type="button"
                  disabled={!open}
                  aria-pressed={on}
                  aria-label={`${fmt(d.iso, { weekday: "long", day: "numeric", month: "long" })}${open ? "" : ", fully booked"}`}
                  onClick={() => pickDay(d.key)}
                  className={`flex min-h-[76px] w-[64px] flex-none snap-start flex-col items-center justify-center gap-1 border transition-colors duration-200 lg:w-auto ${
                    on
                      ? "border-ink bg-ink text-cream"
                      : open
                        ? "border-[rgba(28,26,23,.2)] text-ink hover:border-ink"
                        : "cursor-not-allowed border-transparent text-[rgba(28,26,23,.3)] line-through"
                  }`}
                >
                  <span className="text-[12px] uppercase tracking-[0.16em]">{fmt(d.iso, { weekday: "short" })}</span>
                  <span className="text-[22px] leading-none tabular-nums">{fmt(d.iso, { day: "numeric" })}</span>
                  <span className="text-[12px] tracking-[0.06em]">{fmt(d.iso, { month: "short" })}</span>
                </button>
              );
            })}
          </div>
        )}
      </fieldset>

      {/* 2 · Time */}
      {day ? (
        <fieldset className="min-w-0 mt-10">
          <legend className={label}>
            <span className="tabular-nums">02</span> · Choose a time
          </legend>
          <div ref={timesRef} tabIndex={-1} className="mt-5 grid grid-cols-3 gap-2 outline-none sm:grid-cols-4">
            {daySlots.map((s) => {
              const on = time === s.start;
              return (
                <button
                  key={s.start}
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    setTime(s.start);
                    setFormOpen(true);
                    setNotice("");
                    requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>("input[name=name]")?.focus());
                  }}
                  className={`min-h-12 border text-[15px] tabular-nums transition-colors duration-200 ${
                    on ? "border-ink bg-ink text-cream" : "border-[rgba(28,26,23,.2)] text-ink hover:border-ink"
                  }`}
                >
                  {fmt(s.start, { hour: "numeric", minute: "2-digit" })}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-[13px] text-[rgba(28,26,23,.6)]">
            India Standard Time{duration ? ` · ${duration >= 60 && duration % 60 === 0 ? `${duration / 60} hour` : `${duration} minutes`}` : ""}
          </p>
        </fieldset>
      ) : null}

      {/* 3 · Details */}
      {formOpen ? (
        <form ref={formRef} onSubmit={submit} className="mt-10">
          <fieldset className="min-w-0">
            <legend className={label}>
              <span className="tabular-nums">03</span> · Your details
            </legend>
            <p className="mt-3 text-[15px] text-ink" aria-live="polite">
              {time
                ? `${fmt(time, { weekday: "long", day: "numeric", month: "long" })} at ${fmt(time, { hour: "numeric", minute: "2-digit" })}`
                : "Choose a time above."}
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className={label}>Name</span>
                <input name="name" required minLength={2} autoComplete="name" className={field} />
              </label>
              <label className="block">
                <span className={label}>Email</span>
                <input name="email" type="email" required autoComplete="email" className={field} />
              </label>
              <label className="block sm:col-span-2">
                <span className={label}>Phone or WhatsApp</span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="+91" className={field} />
              </label>
            </div>
            <div className="mt-8" role="radiogroup" aria-label="What brings you in?">
              <span className={label}>What brings you in?</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {REASONS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    role="radio"
                    aria-checked={reason === r}
                    onClick={() => setReason(reason === r ? "" : r)}
                    className={`min-h-11 border px-4 text-[14px] transition-colors duration-200 ${
                      reason === r ? "border-ink bg-ink text-cream" : "border-[rgba(28,26,23,.2)] text-ink hover:border-ink"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <label className="mt-8 block">
              <span className={label}>Anything we should know (optional)</span>
              <textarea name="notes" rows={3} className={`${field} resize-none`} />
            </label>
          </fieldset>
          <button
            type="submit"
            disabled={phase === "sending" || !time}
            className="mt-10 inline-flex min-h-12 items-center gap-4 bg-blue px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-cream transition-colors duration-[240ms] hover:bg-ink disabled:opacity-60"
          >
            {phase === "sending" ? "Holding the hour…" : "Hold this hour"} <span aria-hidden>→</span>
          </button>
        </form>
      ) : null}

      <p className="mt-12 text-[15px] leading-[1.7] text-[rgba(28,26,23,.76)]">
        Rather speak first?{" "}
        <a
          href={site.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp_click"
          className="border-b border-[rgba(28,26,23,.35)] pb-0.5 text-ink transition-colors hover:border-gold"
        >
          Message us on WhatsApp
        </a>
        .
      </p>
    </div>
  );
}
