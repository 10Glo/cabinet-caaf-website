import { PageHero, type PageHeroConfig } from "@/components/shared/page-hero"
import subHeroBg from "@/assets/6.jpg"

const config: PageHeroConfig = {
  breadcrumb: [
    { label: "Accueil", href: "/" },
    { label: "À Propos", href: "/a-propos" },
    { label: "Références" },
  ],
  eyebrow: "Références · Clients & Partenaires",
  title: "La confiance des acteurs",
  titleMuted: "qui comptent en RDC.",
  description:
    "Depuis plus de 30 ans, des institutions financières, des groupes miniers, des opérateurs industriels et des organisations internationales nous confient leurs missions les plus sensibles.",
  image: { src: subHeroBg, alt: "" },
  imageOpacity: "opacity-20",
}

export function ReferencesHero() {
  return <PageHero config={config} />
}
