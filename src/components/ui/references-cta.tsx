import { CtaSection, type CtaSectionConfig } from "@/components/shared/cta-section"
import ctaImage from "@/assets/3.png"

const config: CtaSectionConfig = {
  eyebrow: "Rejoignez nos clients",
  titleLead: "Construisons une relation",
  titleMuted: "de confiance durable.",
  description:
    "Que vous soyez un groupe minier, une institution financière, une ONG ou un opérateur industriel, un premier échange nous permettra de comprendre vos enjeux et de vous présenter notre approche.",
  primaryCta: { label: "Planifier un échange", href: "/contact" },
  secondaryCta: {
    label: "Profil du cabinet",
    href: "/firm-profile.pdf",
    kind: "none",
  },
  trailingArrow: "glyph",
  trustPoints: [
    "Réponse sous 24h",
    "Références sectorielles sur demande",
    "Confidentialité garantie",
    "Interlocuteur senior dédié",
  ],
  trustClassName: "text-xs text-white/30",
  trustLayout: "grid",
  image: { src: ctaImage, alt: "Références CAAF SAS — Clients et partenaires" },
  motionInitialY: 16,
}

export function ReferencesCta() {
  return <CtaSection config={config} />
}
