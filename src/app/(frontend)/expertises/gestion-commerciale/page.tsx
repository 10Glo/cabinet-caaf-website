// src/app/expertises/gestion-commerciale/page.tsx

import { gestionCommercialeConfig } from "@/content/expertises/gestion-commerciale"
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
  { label: "Gestion Commerciale", href: "/expertises/gestion-commerciale" },
]

export default function GestionCommercialePage() {
  return (
    <main>
      <ExpertiseHero config={gestionCommercialeConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={gestionCommercialeConfig.sousServices} />
      <ExpertiseApproche config={gestionCommercialeConfig.approche} />
      <ExpertisePourquoi config={gestionCommercialeConfig.pourquoi} />
      <ExpertiseSecteurs config={gestionCommercialeConfig.secteurs} />
      <ExpertiseCas config={gestionCommercialeConfig.cas} />
      <ExpertiseCta config={gestionCommercialeConfig.cta} />
    </main>
  )
}