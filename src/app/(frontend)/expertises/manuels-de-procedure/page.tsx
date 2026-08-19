import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { manuelsDeProcedureConfig } from "@/content/expertises/manuels-de-procedure"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Support Opérationnel", href: "/expertises#support-operationnel" },
  { label: "Manuels de Procédure", href: "/expertises/manuels-de-procedure" },
]

export default function ManuelsDeProcedurePage() {
  return <ExpertisePage config={manuelsDeProcedureConfig} breadcrumb={BREADCRUMB} />
}
