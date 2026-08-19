import { CtaSection, type CtaSectionConfig } from "@/components/shared/cta-section"
import ctaImage from "@/assets/3.png"

const config: CtaSectionConfig = {
  eyebrow: "Confiance vérifiable",
  titleLead: "Nos accréditations sont",
  titleMuted: "votre garantie.",
  description:
    "Vous souhaitez vérifier nos certifications, obtenir une attestation ou discuter de vos exigences en matière de conformité ? Notre direction est à votre disposition.",
  primaryCta: { label: "Demander une attestation", href: "/contact" },
  secondaryCta: {
    label: "Télécharger le profil",
    href: "/firm-profile.pdf",
    element: "anchor",
    variant: "default",
  },
  trailingArrow: "glyph",
  trustPoints: ["IFAC", "ONEC", "OHADA", "ISA"],
  trustClassName: "font-mono text-[11px] uppercase tracking-[0.14em] text-white/20",
  image: { src: ctaImage, alt: "Certifications CAAF SAS — Accréditations et conformité" },
  motion: { initialY: 16, dividerDelay: 0.5, trustDelay: 0.55 },
}

export function CertificationsCta() {
  return <CtaSection config={config} />
}
