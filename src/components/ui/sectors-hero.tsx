import { PageHero, type PageHeroConfig } from "@/components/shared/page-hero"
import subHeroBg from "@/assets/6.jpg"

const config: PageHeroConfig = {
  breadcrumb: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Secteurs" },
  ],
  eyebrow: "Secteurs d'activité",
  title: "Une expertise sectorielle",
  titleMuted: "pour les environnements les plus exigeants.",
  description:
    "CAAF SAS intervient auprès d'acteurs stratégiques opérant dans des secteurs à forte intensité réglementaire, financière et opérationnelle.",
  image: { src: subHeroBg, alt: "" },
  imageOpacity: "opacity-20",
}

export function SectorsHero() {
  return <PageHero config={config} />
}
