import { ExpertisePage } from "@/components/expertise/shared/expertise-page"
import { auditFinancierConfig } from "@/content/expertises/audit-financier"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Audit & Assurance", href: "/expertises#audit-assurance" },
  { label: "Audit Financier", href: "/expertises/audit-financier" },
]

export default function AuditFinancierPage() {
  return <ExpertisePage config={auditFinancierConfig} breadcrumb={BREADCRUMB} />
}
