import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'


import config from '@/payload.config'
import Hero from '@/components/ui/hero'
import { ActivitiesOverview } from '@/components/ui/activities-overview'
import { Big4LocalExpertiseSection } from '@/components/ui/big4-local-expertise'
import { ClientMandatesSection } from "@/components/ui/client-mandates-section"
import { SuccessStoryFeature } from "@/components/ui/success-story-feature"

import crdb_logo from "@/assets/CRDB_BANK_logo.svg"
import midema_logo from "@/assets/ACG-LOGO-MIDEMA.png"
import ppc_logo from "@/assets/ppc.png"
import cilu_logo from "@/assets/cilu.png"
import enge_logo from "@/assets/engen_logo.png"
import metalkol from "@/assets/Metakol-banner.png"
import Chemaf from "@/assets/chemaf.png"
import ABM from "@/assets/alphamin-logo-primary.png"
import frontier from "@/assets/horizontal-black.png"
import weir_minerals from "@/assets/weir minerals.png"
import ivanhoe from "@/assets/ivanhoe.png"
import sek from "@/assets/kipoi.webp"
import { MethodologyOverview } from '@/components/ui/methodology-overview'
import { SectorsOverview } from '@/components/ui/sectors-overview'
import { FinalCta } from '@/components/ui/final-cta'
import { AuditStatsSection } from '@/components/ui/audit-stats-section'

const clients = [
  { name: "CRDB Bank", img: crdb_logo, sector: "Institution financière" },
  { name: "MIDEMA R.D Congo", img: midema_logo, sector: "Industrie" },
  { name: "CILU", img: cilu_logo, sector: "Production" },
  { name: "PPC", img: ppc_logo, sector: "Matériaux" },
  { name: "Engen", img: enge_logo, sector: "Énergie" },
  { name: "Metalkol", img: metalkol, sector: "Mines" },
  { name: "Frontier", img: frontier, sector: "Mines" },
  { name: "Chemaf", img: Chemaf, sector: "Mines" },
  { name: "ABM", img: ABM, sector: "Ressources" },
  { name: "Weir Minerals", img: weir_minerals, sector: "Industrie minière" },
  { name: "Ivanhoe", img: ivanhoe, sector: "Mines" },
  { name: "SEK", img: sek, sector: "Industrie" },
]

const AUDIT_STATS = [
  {
    value: 30,
    suffix: "+",
    label: "Années d'expérience",
    description: "Au service des entreprises, institutions et groupes en RDC.",
  },
  {
    value: 500,
    suffix: "+",
    label: "Missions réalisées",
    description: "Audit, fiscalité, conseil et accompagnement opérationnel.",
  },
  {
    value: 98,
    suffix: "%",
    label: "Taux de satisfaction",
    description: "Une relation durable fondée sur la confiance et la rigueur.",
  },
  {
    value: 150,
    suffix: "+",
    label: "Clients actifs",
    description: "Des acteurs locaux et internationaux dans des secteurs clés.",
  },
]

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

 
  return (
    <>
      <Hero />

      <AuditStatsSection
        eyebrow="Chiffres clés"
        title="Une expertise qui inspire confiance."
        description="Depuis plus de trois décennies, CAAF SAS accompagne les organisations avec une exigence constante de qualité, de conformité et d'impact."
        stats={AUDIT_STATS}
        theme="dark"
      />

      <ActivitiesOverview />
      <Big4LocalExpertiseSection />

      <ClientMandatesSection
        clients={clients}
        title="Des missions conduites auprès d’acteurs de premier plan"
        description="Nos équipes interviennent auprès d’institutions financières, de groupes miniers, d’acteurs industriels et de sociétés stratégiques opérant en RDC et dans la région."
        ctaHref="#contact"
        ctaLabel="Demander des références sectorielles"
      />

      <SuccessStoryFeature
        eyebrow="Mission emblématique"
        title="Optimisation de la conformité et sécurisation fiscale dans le secteur minier"
        description="À l’occasion d’une mission d’audit fiscal et de restructuration pour un opérateur stratégique de la chaîne logistique minière au Lualaba, CAAF SAS a identifié des zones de surcoût, sécurisé les traitements fiscaux sensibles et renforcé durablement la conformité documentaire."
        metrics={[
          { value: "$2M", label: "coûts fiscaux identifiés" },
          { value: "100%", label: "conformité sécurisée" },
          { value: "3", label: "axes de remédiation" },
        ]}
        sector="Secteur minier"
        quote="L’intervention de CAAF nous a permis de clarifier nos risques, de sécuriser nos traitements et de rétablir un cadre de conformité robuste."
        ctaHref="#contact"
        ctaLabel="Échanger sur une mission similaire"
      />

      <MethodologyOverview />

      <SectorsOverview />

      <FinalCta />
    </>
  )
}
