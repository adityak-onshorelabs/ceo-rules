"use client";

import { appointment } from "@/lib/content";

// How long the appointment runs (appointment.durations in lib/content.ts).
// Each length is its own Calendly event type, chosen by slug.
export function DurationSelect({ value, onChange }: { value: string; onChange: (slug: string) => void }) {
  return (
    <label className="block max-w-[260px]">
      <span className="text-[12px] uppercase tracking-[0.22em] text-[rgba(28,26,23,.66)]">Duration</span>
      <span className="relative mt-2 block">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full cursor-pointer appearance-none rounded-none border-0 border-b border-[rgba(28,26,23,.3)] bg-transparent py-3 pl-0 pr-8 text-[16px] text-ink outline-none transition-colors hover:border-ink focus:border-ink focus-visible:outline-none"
        >
          {appointment.durations.map((d) => (
            <option key={d.slug} value={d.slug}>
              {d.label}
            </option>
          ))}
        </select>
        <span aria-hidden className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[12px] text-[rgba(28,26,23,.66)]">
          ▾
        </span>
      </span>
    </label>
  );
}
