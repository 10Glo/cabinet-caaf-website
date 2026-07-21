// src/app/expertises/manuels-de-procedure/page.tsx

import { manuelsDeProcedureConfig } from "@/content/expertises/manuels-de-procedure"
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
  { label: "Support Opérationnel", href: "/expertises#support-operationnel" },
  { label: "Manuels de Procédure", href: "/expertises/manuels-de-procedure" },
]

export default function ManuelsDeProcedurePage() {
  return (
    <main>
      <ExpertiseHero config={manuelsDeProcedureConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={manuelsDeProcedureConfig.sousServices} />
      <ExpertiseApproche config={manuelsDeProcedureConfig.approche} />
      <ExpertisePourquoi config={manuelsDeProcedureConfig.pourquoi} />
      <ExpertiseSecteurs config={manuelsDeProcedureConfig.secteurs} />
      <ExpertiseCas config={manuelsDeProcedureConfig.cas} />
      <ExpertiseCta config={manuelsDeProcedureConfig.cta} />
    </main>
  )
}