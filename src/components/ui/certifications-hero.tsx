import { PageHero, type PageHeroConfig } from "@/components/shared/page-hero"
import subHeroBg from "@/assets/6.jpg"

const config: PageHeroConfig = {
  breadcrumb: [
    { label: "Accueil", href: "/" },
    { label: "À Propos", href: "/about" },
    { label: "Certifications" },
  ],
  eyebrow: "Certifications & Accréditations",
  title: "La rigueur certifiée,",
  titleMuted: "la conformité comme standard.",
  description:
    "Nos accréditations et certifications garantissent à nos clients, investisseurs et partenaires que chaque mission est conduite selon les plus hauts standards de qualité, d'indépendance et de conformité technique.",
  image: { src: subHeroBg, alt: "" },
  imageOpacity: "opacity-30",
}

export function CertificationsHero() {
  return <PageHero config={config} />
}
