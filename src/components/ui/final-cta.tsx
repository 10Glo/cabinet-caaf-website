import { CtaSection, type CtaSectionConfig } from "@/components/shared/cta-section"
import ctaImage from "@/assets/3.png"
import { FINAL_CTA_PHONE_HREF } from "@/lib/contact"

const config: CtaSectionConfig = {
  eyebrow: "Contact",
  titleLead: "Vous avez un besoin",
  titleMuted: "d'accompagnement ?",
  description:
    "Remplissez le formulaire de contact ci-dessous pour nous permettre de répondre au mieux à votre besoin. Nos experts vous accompagnent avec rigueur et discrétion.",
  primaryCta: { label: "Contactez-nous", href: "/contact" },
  secondaryCta: {
    label: "Nous appeler",
    href: FINAL_CTA_PHONE_HREF,
    element: "link",
    variant: "phone-icon",
  },
  trailingArrow: "icon",
  trustPoints: [
    "Réponse sous 24h",
    "Premier entretien sans engagement",
    "Accompagnement sur mesure",
    "Confidentialité garantie",
  ],
  image: { src: ctaImage, alt: "Accompagnement et conseil CAAF SAS" },
  motion: { initialY: 20, dividerDelay: 0.55, trustDelay: 0.6 },
}

export function FinalCta() {
  return <CtaSection config={config} />
}
