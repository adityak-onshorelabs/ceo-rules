import type { Metadata } from "next";
import { ContactCard } from "@/components/ContactCard";
import { kazim } from "@/lib/content";

// Kazim's own WhatsApp, not the house number.
export const metadata: Metadata = {
  title: "Kazim Soomar — CEO Rules",
  robots: { index: false, follow: false },
};

export default function KazimPage() {
  return (
    <ContactCard
      name={kazim.name}
      actions={[
        { label: "WhatsApp", href: kazim.whatsapp, external: true },
        { label: "Website", href: kazim.website },
      ]}
    />
  );
}
