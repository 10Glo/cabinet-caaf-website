// src/app/expertises/audit-interne/page.tsx

import { auditInterneConfig } from "@/content/expertises/audit-interne"
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
  { label: "Risk Assurance Services", href: "/expertises#risk-assurance" },
  { label: "Audit Interne", href: "/expertises/audit-interne" },
]

export default function AuditInternePage() {
  return (
    <main>
      <ExpertiseHero config={auditInterneConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={auditInterneConfig.sousServices} />
      <ExpertiseApproche config={auditInterneConfig.approche} />
      <ExpertisePourquoi config={auditInterneConfig.pourquoi} />
      <ExpertiseSecteurs config={auditInterneConfig.secteurs} />
      <ExpertiseCas config={auditInterneConfig.cas} />
      <ExpertiseCta config={auditInterneConfig.cta} />
    </main>
  )
}