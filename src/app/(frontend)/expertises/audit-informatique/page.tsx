// src/app/expertises/audit-informatique/page.tsx

import { auditInformatiqueConfig } from "@/content/expertises/audit-informatique"
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
  { label: "Audit Informatique", href: "/expertises/audit-informatique" },
]

export default function AuditInformatiquePage() {
  return (
    <main>
      <ExpertiseHero config={auditInformatiqueConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={auditInformatiqueConfig.sousServices} />
      <ExpertiseApproche config={auditInformatiqueConfig.approche} />
      <ExpertisePourquoi config={auditInformatiqueConfig.pourquoi} />
      <ExpertiseSecteurs config={auditInformatiqueConfig.secteurs} />
      <ExpertiseCas config={auditInformatiqueConfig.cas} />
      <ExpertiseCta config={auditInformatiqueConfig.cta} />
    </main>
  )
}