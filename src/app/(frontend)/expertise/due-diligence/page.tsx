// src/app/expertises/due-diligence/page.tsx

import { dueDiligenceConfig } from "@/content/expertises/due-diligence"
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
  { label: "Conseil & Advisory", href: "/expertises#conseil-advisory" },
  { label: "Due Diligence", href: "/expertises/due-diligence" },
]

export default function DueDiligencePage() {
  return (
    <main>
      <ExpertiseHero config={dueDiligenceConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={dueDiligenceConfig.sousServices} />
      <ExpertiseApproche config={dueDiligenceConfig.approche} />
      <ExpertisePourquoi config={dueDiligenceConfig.pourquoi} />
      <ExpertiseSecteurs config={dueDiligenceConfig.secteurs} />
      <ExpertiseCas config={dueDiligenceConfig.cas} />
      <ExpertiseCta config={dueDiligenceConfig.cta} />
    </main>
  )
}