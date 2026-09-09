// src/app/(frontend)/secteurs/page.tsx
import { ProofBanner } from "@/components/ui/proof-banner";
import { SectorsBentoGrid } from "@/components/ui/sectors-bento-grid";
import { SectorsHero } from "@/components/ui/sectors-hero";
import { SectorsTechnicalExpertise } from "@/components/ui/sectors-technical-expertise";
import { SectorsFinalCta } from "@/components/ui/sectors-final-cta";

export default function SectorsPage() {
  return (
    <>
      <SectorsHero />
      <ProofBanner />
      {/* Détail sectoriel — construit à partir des 6 secteurs du Home (sectors-overview) */}
      <SectorsBentoGrid />
      <SectorsTechnicalExpertise />
      <SectorsFinalCta />
    </>
  )
}