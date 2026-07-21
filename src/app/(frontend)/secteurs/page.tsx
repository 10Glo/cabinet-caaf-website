// src/app/(frontend)/secteurs/page.tsx
import { SectorApproachDifference } from "@/components/ui/sector-approach-difference";
import { SectorCaseStudies } from "@/components/ui/sector-case-studies";
import { SectorsBentoGrid } from "@/components/ui/sectors-bento-grid";
import { SectorsFinalCta } from "@/components/ui/sectors-final-cta";
import { SectorsHero } from "@/components/ui/sectors-hero";
import { SectorsQuote } from "@/components/ui/sectors-quote";
import { SectorsTechnicalExpertise } from "@/components/ui/sectors-technical-expertise";
import UnderConstruction from "../underConstruction";

export default function SectorsPage() {
  return (
    <>
      <SectorsHero />
      <UnderConstruction />
      {/* <SectorsBentoGrid />
      <SectorsQuote />
      <SectorsTechnicalExpertise />
      <SectorApproachDifference />
      <SectorCaseStudies />
      <SectorsFinalCta /> */}
    </>
  )
}