import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { maitriseDesRisquesConfig } from "@/content/expertises/maitrise-des-risques"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Risk Assurance Services", href: "/expertises#risk-assurance" },
  { label: "Maîtrise des Risques", href: "/expertises/maitrise-des-risques" },
]

export default function MaitriseDesRisquesPage() {
  return <ExpertisePage config={maitriseDesRisquesConfig} breadcrumb={BREADCRUMB} />
}
