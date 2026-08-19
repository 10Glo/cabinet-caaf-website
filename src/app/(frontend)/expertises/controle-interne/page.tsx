import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { controleInterneConfig } from "@/content/expertises/controle-interne"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Risk Assurance Services", href: "/expertises#risk-assurance" },
  { label: "Contrôle Interne", href: "/expertises/controle-interne" },
]

export default function ControleInternePage() {
  return <ExpertisePage config={controleInterneConfig} breadcrumb={BREADCRUMB} />
}
