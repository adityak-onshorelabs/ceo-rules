import { NextResponse } from "next/server";
import { CalendlyError, getEventInfo, getSlots, isConfigured } from "@/lib/calendly";

export const dynamic = "force-dynamic";

// Open appointment times for the next three weeks, straight from Anis's
// Calendly availability. The browser never sees the Calendly token.
export async function GET() {
  if (!isConfigured()) return NextResponse.json({ configured: false, slots: [] });
  try {
    const start = new Date(Date.now() + 5 * 60 * 1000); // Calendly needs a start in the future
    const end = new Date(start.getTime() + 21 * 86400000); // within the 31-day limit
    const [info, slots] = await Promise.all([getEventInfo(), getSlots(start.toISOString(), end.toISOString())]);
    return NextResponse.json({ configured: true, duration: info.duration, slots });
  } catch (e) {
    const status = e instanceof CalendlyError ? e.status : 500;
    console.error("[booking/slots]", status, e instanceof Error ? e.message : e);
    return NextResponse.json({ configured: true, error: "unavailable", slots: [] }, { status: 502 });
  }
}
