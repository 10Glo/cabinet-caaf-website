import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { assistanceComptableConfig } from "@/content/expertises/assistance-comptable"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Services Comptables", href: "/expertises#services-comptables" },
  { label: "Assistance Comptable", href: "/expertises/assistance-comptable" },
]

export default function AssistanceComptablePage() {
  return <ExpertisePage config={assistanceComptableConfig} breadcrumb={BREADCRUMB} />
}
