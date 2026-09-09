// src/components/ui/expertise/expertise-page.tsx
import type { ExpertisePageConfig } from "@/content/expertises/types"
import { ExpertiseHero } from "./expertise-hero"
import { ProofBanner } from "../proof-banner"
import { ExpertiseSousServices, ExpertiseApproche, ExpertisePourquoi, ExpertiseSecteurs, ExpertiseCas, ExpertiseCta } from "./expertise-sections"

export function ExpertisePage({ config, breadcrumbLabel }: { config: ExpertisePageConfig; breadcrumbLabel?: string }) {
  return (
    <main>
      <ExpertiseHero hero={config.hero} breadcrumbLabel={breadcrumbLabel ?? config.hero.title} />
      <ProofBanner />
      <ExpertiseSousServices config={config.sousServices} />
      <ExpertiseApproche config={config.approche} />
      <ExpertisePourquoi config={config.pourquoi} />
      <ExpertiseSecteurs config={config.secteurs} />
      <ExpertiseCas config={config.cas} />
      <ExpertiseCta config={config.cta} />
    </main>
  )
}
