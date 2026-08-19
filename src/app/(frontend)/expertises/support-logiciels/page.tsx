import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { supportLogicielsConfig } from "@/content/expertises/support-logiciels"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Support Opérationnel", href: "/expertises#support-operationnel" },
  { label: "Support aux Logiciels", href: "/expertises/support-logiciels" },
]

export default function SupportLogicielsPage() {
  return <ExpertisePage config={supportLogicielsConfig} breadcrumb={BREADCRUMB} />
}
