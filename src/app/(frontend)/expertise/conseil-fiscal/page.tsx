// src/app/expertises/conseil-fiscal/page.tsx

import { conseilFiscalConfig } from "@/content/expertises/conseil-fiscal"
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
  { label: "Conseil Fiscal", href: "/expertises/conseil-fiscal" },
]

export default function ConseilFiscalPage() {
  return (
    <main>
      <ExpertiseHero config={conseilFiscalConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={conseilFiscalConfig.sousServices} />
      <ExpertiseApproche config={conseilFiscalConfig.approche} />
      <ExpertisePourquoi config={conseilFiscalConfig.pourquoi} />
      <ExpertiseSecteurs config={conseilFiscalConfig.secteurs} />
      <ExpertiseCas config={conseilFiscalConfig.cas} />
      <ExpertiseCta config={conseilFiscalConfig.cta} />
    </main>
  )
}