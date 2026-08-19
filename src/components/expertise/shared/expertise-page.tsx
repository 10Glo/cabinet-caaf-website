import { ExpertiseApproche } from "@/components/expertise/shared/expertise-approche"
import { ExpertiseCas } from "@/components/expertise/shared/expertise-cas"
import { ExpertiseCta } from "@/components/expertise/shared/expertise-cta"
import { ExpertiseHero } from "@/components/expertise/shared/expertise-hero"
import { ExpertisePourquoi } from "@/components/expertise/shared/expertise-pourquoi"
import { ExpertiseSecteurs } from "@/components/expertise/shared/expertise-secteurs"
import { ExpertiseSousServices } from "@/components/expertise/shared/expertise-sous-services"
import type { ExpertisePageConfig } from "@/content/expertises/types"

interface ExpertisePageProps {
  config: ExpertisePageConfig
  breadcrumb: { label: string; href: string }[]
}

export function ExpertisePage({ config, breadcrumb }: ExpertisePageProps) {
  return (
    <main>
      <ExpertiseHero config={config.hero} breadcrumb={breadcrumb} />
      <ExpertiseSousServices config={config.sousServices} />
      <ExpertiseApproche config={config.approche} />
      <ExpertisePourquoi config={config.pourquoi} />
      <ExpertiseSecteurs config={config.secteurs} />
      <ExpertiseCas config={config.cas} />
      <ExpertiseCta config={config.cta} />
    </main>
  )
}
