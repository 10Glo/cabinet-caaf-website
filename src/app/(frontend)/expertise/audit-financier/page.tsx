import { auditFinancierConfig } from "@/content/expertises/audit-financier"
import { ExpertiseHero } from "@/components/expertise/shared/expertise-hero"
import { ExpertiseSousServices } from "@/components/expertise/shared/expertise-sous-services"
import { ExpertiseApproche } from "@/components/expertise/shared/expertise-approche"
import { ExpertisePourquoi } from "@/components/expertise/shared/expertise-pourquoi"
import { ExpertiseSecteurs } from "@/components/expertise/shared/expertise-secteurs"
import { ExpertiseCas } from "@/components/expertise/shared/expertise-cas"
import { ExpertiseCta } from "@/components/expertise/shared/expertise-cta"

const BREADCRUMB = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/expertises" },
  { label: "Audit & Assurance", href: "/expertises#audit-assurance" },
  { label: "Audit Financier", href: "/expertises/audit-financier" },
]

export default function AuditFinancierPage() {
  return (
    <main>
      <ExpertiseHero config={auditFinancierConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={auditFinancierConfig.sousServices} />
      <ExpertiseApproche config={auditFinancierConfig.approche} />
      <ExpertisePourquoi config={auditFinancierConfig.pourquoi} />
      <ExpertiseSecteurs config={auditFinancierConfig.secteurs} />
      <ExpertiseCas config={auditFinancierConfig.cas} />
      <ExpertiseCta config={auditFinancierConfig.cta} />
    </main>
  )
}