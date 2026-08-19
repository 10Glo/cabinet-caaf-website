import { CtaSection, type CtaSectionConfig } from "@/components/shared/cta-section"
import ctaImage from "@/assets/3.png"
import { CONTACT_PHONE_HREF } from "@/lib/contact"

const config: CtaSectionConfig = {
  eyebrow: "Votre secteur, notre expertise",
  titleLead: "Quel que soit votre secteur,",
  titleMuted: "nous avons l'expertise.",
  description:
    "Notre approche sectorielle nous permet de mobiliser les bonnes compétences, de comprendre vos enjeux spécifiques et de formuler des recommandations immédiatement actionnables.",
  primaryCta: { label: "Planifier un entretien", href: "/contact" },
  secondaryCta: {
    label: "Appeler directement",
    href: CONTACT_PHONE_HREF,
    kind: "none",
  },
  trailingArrow: "glyph",
  trustPoints: [
    "Réponse qualifiée sous 24h",
    "Interlocuteur senior dès le premier échange",
    "Proposition adaptée à votre secteur",
    "Confidentialité absolue garantie",
  ],
  trustClassName: "text-xs text-white/30",
  trustLayout: "grid",
  image: { src: ctaImage, alt: "Secteurs CAAF SAS — Expertise multi-sectorielle" },
  motionInitialY: 16,
}

export function SectorsFinalCta() {
  return <CtaSection config={config} />
}
