import { CtaSection, type CtaSectionConfig } from "@/components/shared/cta-section"
import ctaImage from "@/assets/3.png"

const config: CtaSectionConfig = {
  eyebrow: "Besoin d'un contenu spécifique ?",
  titleLead: "Nous publions aussi",
  titleMuted: "sur demande.",
  description:
    "Si vous recherchez une analyse sectorielle spécifique, une note technique sur un sujet réglementaire ou un guide adapté à votre contexte, notre équipe peut produire un contenu sur mesure.",
  primaryCta: { label: "Demander un contenu", href: "/contact" },
  secondaryCta: {
    label: "Profil du cabinet",
    href: "/firm-profile.pdf",
    element: "anchor",
    variant: "default",
  },
  trailingArrow: "glyph",
  trustPoints: [
    "Rapports sectoriels",
    "Notes réglementaires",
    "Guides pratiques",
    "Analyses sur mesure",
  ],
  trustClassName: "text-xs text-white/30",
  image: { src: ctaImage, alt: "Publications CAAF SAS — Ressources professionnelles" },
  motion: { initialY: 16, dividerDelay: 0.5, trustDelay: 0.55 },
}

export function PublicationsCta() {
  return <CtaSection config={config} />
}
