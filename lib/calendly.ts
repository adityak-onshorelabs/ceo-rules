// Server only: imported solely by the route handlers in app/api/booking.

// Calendly Scheduling API, called from our own routes so the booking UI can be
// entirely the house's own (brief §12: no raw iframe). The token never reaches
// the browser.
//
// Environment (set in Vercel, never committed):
//   CALENDLY_TOKEN       Personal Access Token from Anis's Calendly account.
//                        The Scheduling API needs a paid Calendly plan.
//   CALENDLY_EVENT_SLUG  Event type slug; defaults to "30min"
//                        (calendly.com/anis-ceorules/30min).
//   CALENDLY_MOCK=1      Local development only: fake slots and bookings so the
//                        flow can be built and tested without the live account.

const API = "https://api.calendly.com";

export type Slot = { start: string };
export type EventInfo = {
  uri: string;
  duration: number;
  location: { kind: string; location?: string } | null;
  questions: { name: string; position: number }[];
};

export class CalendlyError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

export const isMock = () => process.env.CALENDLY_MOCK === "1" && process.env.NODE_ENV !== "production";
export const isConfigured = () => isMock() || Boolean(process.env.CALENDLY_TOKEN);

async function call<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${process.env.CALENDLY_TOKEN}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new CalendlyError(res.status, body.slice(0, 300));
  }
  return (await res.json()) as T;
}

let cached: { at: number; info: EventInfo } | null = null;

// Resolve the event type once (then every 10 minutes): its URI, length,
// location and any custom intake questions set up in Calendly.
export async function getEventInfo(): Promise<EventInfo> {
  if (isMock()) {
    return {
      uri: "mock",
      duration: 60,
      location: { kind: "physical", location: "CEO Rules, Shabistan CHSL, Bandra West" },
      questions: [],
    };
  }
  if (cached && Date.now() - cached.at < 10 * 60 * 1000) return cached.info;
  const slug = process.env.CALENDLY_EVENT_SLUG || "30min";
  const me = await call<{ resource: { uri: string } }>("/users/me");
  const list = await call<{
    collection: {
      uri: string;
      slug: string;
      duration: number;
      active: boolean;
      locations?: { kind: string; location?: string }[] | null;
      custom_questions?: { name: string; position: number; enabled: boolean }[];
    }[];
  }>(`/event_types?user=${encodeURIComponent(me.resource.uri)}&count=100`);
  const et = list.collection.find((e) => e.slug === slug && e.active);
  if (!et) throw new CalendlyError(404, `No active event type with slug "${slug}"`);
  const info: EventInfo = {
    uri: et.uri,
    duration: et.duration,
    location: et.locations?.[0] ?? null,
    questions: (et.custom_questions ?? []).filter((q) => q.enabled).map((q) => ({ name: q.name, position: q.position })),
  };
  cached = { at: Date.now(), info };
  return info;
}

export async function getSlots(startISO: string, endISO: string): Promise<Slot[]> {
  if (isMock()) {
    const out: Slot[] = [];
    const start = new Date(startISO);
    for (let d = 0; d < 21; d++) {
      const day = new Date(start.getTime() + d * 86400000);
      if (day.getUTCDay() === 0 && d % 2 === 0) continue; // some closed days, to exercise the UI
      for (const h of [5, 6, 8, 9, 11, 12]) {
        // 10:30 to 17:30 IST
        const s = new Date(Date.UTC(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(), h, 0));
        if (s > new Date() && (h + d) % 4 !== 0) out.push({ start: s.toISOString() });
      }
    }
    return out.filter((s) => s.start < endISO);
  }
  const info = await getEventInfo();
  const q = new URLSearchParams({ event_type: info.uri, start_time: startISO, end_time: endISO });
  const res = await call<{ collection: { status: string; start_time: string }[] }>(`/event_type_available_times?${q}`);
  return res.collection.filter((s) => s.status === "available").map((s) => ({ start: s.start_time }));
}

export type BookingInput = {
  start: string;
  name: string;
  email: string;
  phone: string;
  reason: string;
  notes: string;
  timezone: string;
};

// Map our intake answers onto whatever custom questions the event type has,
// by the question's wording. Unmatched answers are simply not sent.
function answersFor(info: EventInfo, b: BookingInput) {
  const pick = (re: RegExp) => info.questions.find((q) => re.test(q.name));
  const out: { question: string; answer: string; position: number }[] = [];
  const add = (q: { name: string; position: number } | undefined, answer: string) => {
    if (q && answer) out.push({ question: q.name, answer, position: q.position });
  };
  add(pick(/phone|whatsapp|mobile|number/i), b.phone);
  add(pick(/bring|interest|looking|commission|what/i), b.reason);
  add(pick(/note|anything|share|else|message/i), b.notes);
  return out;
}

export async function book(b: BookingInput) {
  if (isMock()) {
    if (b.email.includes("taken")) throw new CalendlyError(404, "Slot no longer available");
    return { cancelUrl: "#", rescheduleUrl: "#" };
  }
  const info = await getEventInfo();
  const [first, ...rest] = b.name.trim().split(/\s+/);
  const phone = b.phone.replace(/[^\d+]/g, "");
  const body: Record<string, unknown> = {
    event_type: info.uri,
    start_time: b.start,
    invitee: {
      name: b.name.trim(),
      first_name: first,
      last_name: rest.join(" ") || undefined,
      email: b.email.trim(),
      timezone: b.timezone || "Asia/Kolkata",
      ...(/^\+\d{8,15}$/.test(phone) ? { text_reminder_number: phone } : {}),
    },
    questions_and_answers: answersFor(info, b),
    tracking: { utm_source: "website", utm_medium: "website", utm_campaign: "appointment" },
  };
  if (info.location) body.location = { kind: info.location.kind, ...(info.location.location ? { location: info.location.location } : {}) };
  const res = await call<{ resource: { cancel_url: string; reschedule_url: string } }>("/invitees", {
    method: "POST",
    body: JSON.stringify(body),
  });
  return { cancelUrl: res.resource.cancel_url, rescheduleUrl: res.resource.reschedule_url };
}
