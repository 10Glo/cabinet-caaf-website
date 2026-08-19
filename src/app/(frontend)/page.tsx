import Image from 'next/image'
import React from 'react'

import Hero from '@/components/ui/hero'
import { ActivitiesOverview } from '@/components/ui/activities-overview'
import { Big4LocalExpertiseSection } from '@/components/ui/big4-local-expertise'
import { ClientMandatesSection } from '@/components/ui/client-mandates-section'
import { SuccessStoryFeature } from '@/components/ui/success-story-feature'

import crdb_logo from '@/assets/CRDB_BANK_logo.svg'
import midema_logo from '@/assets/ACG-LOGO-MIDEMA.png'
import ppc_logo from '@/assets/ppc.png'
import cilu_logo from '@/assets/cilu.png'
import enge_logo from '@/assets/engen_logo.png'
import metalkol from '@/assets/Metakol-banner.png'
import Chemaf from '@/assets/chemaf.png'
import ABM from '@/assets/alphamin-logo-primary.png'
import frontier from '@/assets/horizontal-black.png'
import weir_minerals from '@/assets/weir minerals.png'
import ivanhoe from '@/assets/ivanhoe.png'
import sek from '@/assets/kipoi.webp'
import { MethodologyOverview } from '@/components/ui/methodology-overview'
import { SectorsOverview } from '@/components/ui/sectors-overview'
import { FinalCta } from '@/components/ui/final-cta'
import { AuditStatsSection } from '@/components/ui/audit-stats-section'
import StatsSection from '@/components/ui/stats-section'

export default async function HomePage() {
  return (
    <>
      <Hero />
      <AuditStatsSection />
      <Big4LocalExpertiseSection />
      <ActivitiesOverview />
      <ClientMandatesSection />
      <SectorsOverview />
      <FinalCta />
    </>
  )
}
