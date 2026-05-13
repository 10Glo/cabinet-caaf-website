// src/app/expertises/gestion-de-paie/page.tsx

import { gestionDePaieConfig } from "@/content/expertises/gestion-de-paie"
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
  { label: "Gestion de Paie", href: "/expertises/gestion-de-paie" },
]

export default function GestionDePaiePage() {
  return (
    <main>
      <ExpertiseHero config={gestionDePaieConfig.hero} breadcrumb={BREADCRUMB} />
      <ExpertiseSousServices config={gestionDePaieConfig.sousServices} />
      <ExpertiseApproche config={gestionDePaieConfig.approche} />
      <ExpertisePourquoi config={gestionDePaieConfig.pourquoi} />
      <ExpertiseSecteurs config={gestionDePaieConfig.secteurs} />
      <ExpertiseCas config={gestionDePaieConfig.cas} />
      <ExpertiseCta config={gestionDePaieConfig.cta} />
    </main>
  )
}