import { PageHero, type PageHeroConfig } from "@/components/shared/page-hero"
import subHeroBg from "@/assets/6.jpg"

const config: PageHeroConfig = {
  breadcrumb: [
    { label: "Accueil", href: "/" },
    { label: "À Propos", href: "/a-propos" },
    { label: "Notre Histoire" },
  ],
  eyebrow: "Notre histoire · Depuis 1994",
  title: "Heritage congolais.",
  titleMuted: "Standards mondiaux.",
  description:
    "Depuis plus de 30 ans, CAAF SAS accompagne les entreprises, institutions et groupes stratégiques en RDC. Retour sur trois décennies d'engagement, de rigueur et de croissance.",
  image: { src: subHeroBg, alt: "" },
  imageOpacity: "opacity-40",
}

export function HistoryHero() {
  return <PageHero config={config} />
}
