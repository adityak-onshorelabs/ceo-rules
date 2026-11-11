import type { Metadata } from "next";
import { ContactCard } from "@/components/ContactCard";
import { anees } from "@/lib/content";

// Anis's own WhatsApp, not the house number.
export const metadata: Metadata = {
  title: "Anis Soomar — CEO Rules",
  robots: { index: false, follow: false },
};

export default function AneesPage() {
  return (
    <ContactCard
      name={anees.name}
      actions={[
        { label: "WhatsApp", href: anees.whatsapp, external: true },
        { label: "Instagram", href: anees.instagram, external: true },
        { label: "Website", href: anees.website },
      ]}
    />
  );
}
