import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { gestionCommercialeConfig } from "@/content/expertises/gestion-commerciale"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Services Comptables", href: "/expertises#services-comptables" },
  { label: "Gestion Commerciale", href: "/expertises/gestion-commerciale" },
]

export default function GestionCommercialePage() {
  return <ExpertisePage config={gestionCommercialeConfig} breadcrumb={BREADCRUMB} />
}
