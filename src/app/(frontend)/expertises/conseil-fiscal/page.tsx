import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { conseilFiscalConfig } from "@/content/expertises/conseil-fiscal"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Conseil & Advisory", href: "/expertises#conseil-advisory" },
  { label: "Conseil Fiscal", href: "/expertises/conseil-fiscal" },
]

export default function ConseilFiscalPage() {
  return <ExpertisePage config={conseilFiscalConfig} breadcrumb={BREADCRUMB} />
}
