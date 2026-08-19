import { CtaSection, type CtaSectionConfig } from "@/components/shared/cta-section"
import ctaImage from "@/assets/3.png"
import { CONTACT_PHONE_HREF } from "@/lib/contact"

const config: CtaSectionConfig = {
  eyebrow: "Contact",
  titleLead: "Vous avez un projet,",
  titleMuted: "nous avons l'expertise.",
  description:
    "Notre direction reste accessible et attentive. Que vous soyez un groupe industriel, une institution financière ou un investisseur international, un premier échange confidentiel nous permettra de comprendre vos enjeux.",
  primaryCta: { label: "Planifier un entretien", href: "/contact" },
  secondaryCta: {
    label: "Appeler directement",
    href: CONTACT_PHONE_HREF,
    element: "link",
    variant: "phone-icon",
  },
  trailingArrow: "icon",
  trustPoints: [
    "Réponse garantie sous 24h",
    "Premier échange sans engagement",
    "Confidentialité absolue",
    "Interlocuteur senior dédié",
  ],
  image: { src: ctaImage, alt: "Accompagnement et conseil CAAF SAS" },
  motion: { initialY: 20, dividerDelay: 0.55, trustDelay: 0.6 },
}

export function HistoryCta() {
  return <CtaSection config={config} />
}
