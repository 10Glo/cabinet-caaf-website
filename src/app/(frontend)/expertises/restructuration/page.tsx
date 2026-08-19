import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { restructurationConfig } from "@/content/expertises/restructuration"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Conseil & Advisory", href: "/expertises#conseil-advisory" },
  { label: "Restructuration", href: "/expertises/restructuration" },
]

export default function RestructurationPage() {
  return <ExpertisePage config={restructurationConfig} breadcrumb={BREADCRUMB} />
}
