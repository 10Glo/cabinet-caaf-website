import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { auditInformatiqueConfig } from "@/content/expertises/audit-informatique"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Risk Assurance Services", href: "/expertises#risk-assurance" },
  { label: "Audit Informatique", href: "/expertises/audit-informatique" },
]

export default function AuditInformatiquePage() {
  return <ExpertisePage config={auditInformatiqueConfig} breadcrumb={BREADCRUMB} />
}
