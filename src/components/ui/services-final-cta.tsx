import { CtaSection, type CtaSectionConfig } from "@/components/shared/cta-section"
import ctaImage from "@/assets/3.png"
import { CONTACT_PHONE_HREF } from "@/lib/contact"

const config: CtaSectionConfig = {
  eyebrow: "Passer à l'action",
  titleLead: "Prêt à sécuriser vos enjeux",
  titleMuted: "financiers et réglementaires ?",
  description:
    "Nos associés et directeurs sont disponibles pour analyser votre situation, clarifier vos priorités et structurer avec vous une intervention adaptée.",
  primaryCta: { label: "Planifier une consultation", href: "/contact" },
  secondaryCta: {
    label: "Appeler directement",
    href: CONTACT_PHONE_HREF,
    kind: "phone-icon",
  },
  trailingArrow: "icon",
  trustPoints: [
    "Réponse sous 24h",
    "Échange confidentiel avec un senior",
    "Approche adaptée à votre contexte",
    "Vision claire des risques et priorités",
  ],
  image: {
    src: ctaImage,
    alt: "Sécuriser vos enjeux financiers — CAAF SAS",
  },
  motionInitialY: 20,
}

export function ServicesFinalCta() {
  return <CtaSection config={config} />
}
