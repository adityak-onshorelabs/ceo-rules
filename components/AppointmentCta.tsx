import { visit } from "@/lib/content";

const PREFILL = "Hello, I would like to visit the atelier.";

export function AppointmentCta({
  label = "Request an Appointment",
  tone = "ink",
}: {
  label?: string;
  tone?: "ink" | "ivory" | "current";
}) {
  const href = `${visit.whatsapp.href}?text=${encodeURIComponent(PREFILL)}`;
  const className =
    tone === "ivory"
      ? "group inline-flex flex-col items-start gap-1 font-sans text-[0.95rem] text-bg"
      : tone === "current"
        ? "group inline-flex flex-col items-start gap-1 font-sans text-[0.95rem] text-current transition-opacity duration-200 ease-out-quart hover:opacity-80"
        : "group inline-flex flex-col items-start gap-1 font-sans text-[0.95rem] text-ink transition-colors duration-200 ease-out-quart hover:text-walnut";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens WhatsApp)`}
      className={className}
    >
      <span>{label}</span>
      <span
        aria-hidden
        className={`h-px w-full origin-left transition-transform duration-300 ease-out-quart group-hover:scale-y-[1.6] ${
          tone === "ivory"
            ? "bg-bg opacity-[0.58] transition-opacity duration-200 ease-out-quart group-hover:opacity-100"
            : tone === "current"
              ? "bg-current opacity-40"
              : "bg-brass"
        }`}
      />
    </a>
  );
}
