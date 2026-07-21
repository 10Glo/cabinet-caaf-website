// src/app/expertises/assistance-comptable/page.tsx

import { assistanceComptableConfig } from "@/content/expertises/assistance-comptable"
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
  { label: "Services Comptables", href: "/expertises#services-comptables" },
  { label: "Assistance Comptable", href: "/expertises/assistance-comptable" },
]

export default function AssistanceComptablePage() {
  return (
    <main>
      <ExpertiseHero config={assistanceComptableConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={assistanceComptableConfig.sousServices} />
      <ExpertiseApproche config={assistanceComptableConfig.approche} />
      <ExpertisePourquoi config={assistanceComptableConfig.pourquoi} />
      <ExpertiseSecteurs config={assistanceComptableConfig.secteurs} />
      <ExpertiseCas config={assistanceComptableConfig.cas} />
      <ExpertiseCta config={assistanceComptableConfig.cta} />
    </main>
  )
}