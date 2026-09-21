import { NextResponse } from "next/server";
import { book, CalendlyError, isConfigured } from "@/lib/calendly";

export const dynamic = "force-dynamic";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Books the chosen hour in Anis's Calendly (Scheduling API, POST /invitees).
export async function POST(req: Request) {
  if (!isConfigured()) return NextResponse.json({ error: "not_configured" }, { status: 503 });
  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  const s = (k: string, max = 500) => (typeof b[k] === "string" ? (b[k] as string).trim().slice(0, max) : "");
  const input = {
    start: s("start", 40),
    name: s("name", 120),
    email: s("email", 200),
    phone: s("phone", 40),
    reason: s("reason", 60),
    notes: s("notes", 1000),
    timezone: s("timezone", 60),
  };
  if (!input.start || Number.isNaN(Date.parse(input.start)) || input.name.length < 2 || !EMAIL.test(input.email)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  try {
    const res = await book(input);
    return NextResponse.json({ ok: true, ...res });
  } catch (e) {
    const status = e instanceof CalendlyError ? e.status : 500;
    console.error("[booking/book]", status, e instanceof Error ? e.message : e);
    // Calendly answers 404 when the slot has just been taken.
    if (status === 404 || status === 409) return NextResponse.json({ error: "slot_taken" }, { status: 409 });
    if (status === 400) return NextResponse.json({ error: "invalid" }, { status: 400 });
    return NextResponse.json({ error: "unavailable" }, { status: 502 });
  }
}
