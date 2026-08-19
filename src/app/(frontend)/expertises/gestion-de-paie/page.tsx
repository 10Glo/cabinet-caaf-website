import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { gestionDePaieConfig } from "@/content/expertises/gestion-de-paie"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Services Comptables", href: "/expertises#services-comptables" },
  { label: "Gestion de Paie", href: "/expertises/gestion-de-paie" },
]

export default function GestionDePaiePage() {
  return <ExpertisePage config={gestionDePaieConfig} breadcrumb={BREADCRUMB} />
}
