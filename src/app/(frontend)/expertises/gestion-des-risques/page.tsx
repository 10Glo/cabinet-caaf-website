import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { gestionDesRisquesConfig } from "@/content/expertises/gestion-des-risques"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Risk Assurance Services", href: "/expertises#risk-assurance" },
  { label: "Gestion des Risques", href: "/expertises/gestion-des-risques" },
]

export default function GestionDesRisquesPage() {
  return <ExpertisePage config={gestionDesRisquesConfig} breadcrumb={BREADCRUMB} />
}
