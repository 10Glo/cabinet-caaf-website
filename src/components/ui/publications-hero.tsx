import { PageHero, type PageHeroConfig } from "@/components/shared/page-hero"
import subHeroBg from "@/assets/6.jpg"

const config: PageHeroConfig = {
  breadcrumb: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/" },
    { label: "Publications" },
  ],
  eyebrow: "Publications · Ressources professionnelles",
  title: "Rapports, analyses et guides",
  titleMuted: "pour les décideurs.",
  description:
    "Nos publications reflètent notre expertise sectorielle et notre veille réglementaire permanente. Conçues pour les dirigeants, les DAF et les comités d'audit.",
  image: { src: subHeroBg, alt: "" },
  imageOpacity: "opacity-20",
}

export function PublicationsHero() {
  return <PageHero config={config} />
}
