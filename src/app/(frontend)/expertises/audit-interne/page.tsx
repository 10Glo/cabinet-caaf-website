import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { auditInterneConfig } from "@/content/expertises/audit-interne"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Risk Assurance Services", href: "/expertises#risk-assurance" },
  { label: "Audit Interne", href: "/expertises/audit-interne" },
]

export default function AuditInternePage() {
  return <ExpertisePage config={auditInterneConfig} breadcrumb={BREADCRUMB} />
}
