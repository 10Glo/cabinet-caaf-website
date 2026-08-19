import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { dueDiligenceConfig } from "@/content/expertises/due-diligence"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Conseil & Advisory", href: "/expertises#conseil-advisory" },
  { label: "Due Diligence", href: "/expertises/due-diligence" },
]

export default function DueDiligencePage() {
  return <ExpertisePage config={dueDiligenceConfig} breadcrumb={BREADCRUMB} />
}
