// src/app/about/page.tsx
import { AboutCta } from "@/components/ui/about-cta"
import { AboutHero } from "@/components/ui/about-hero"
import { AboutStory } from "@/components/ui/about-story"
import { FeaturedQuoteSection } from "@/components/ui/featured-quote-section"
import { LeadershipSection } from "@/components/ui/leadership-section"
import { ValuesSection } from "@/components/ui/values-section"

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <ValuesSection />
      
      <FeaturedQuoteSection
        quote="Notre cabinet existe pour apporter la clarté, la sécurité et la confiance nécessaires aux projets les plus ambitieux de la RDC, afin qu’ils puissent atteindre une maturité conforme aux standards internationaux."
        author="Managing Partner"
        role="CAAF SAS"
        note="Clarté · Conformité · Confiance"
      />

      <LeadershipSection
        leaders={[
          {
            name: "Nom du Managing Partner",
            role: "Managing Partner",
            bio: "Avec plus de deux décennies d’expérience dans l’audit, la fiscalité stratégique et l’accompagnement des groupes opérant en RDC, il pilote la vision du cabinet avec une exigence constante de qualité, d’indépendance et de fiabilité.",
            // image: managingPartnerImg,
            location: "Kinshasa",
            highlights: [
              "Audit stratégique",
              "Fiscalité minière",
              "Gouvernance",
            ],
          },
          {
            name: "Nom du Directeur",
            role: "Directeur",
            bio: "Il supervise l’exécution des missions, le suivi méthodologique et la coordination des équipes, avec une forte expertise en conformité réglementaire, structuration financière et accompagnement opérationnel.",
            // image: directeurImg,
            location: "Lubumbashi",
            highlights: [
              "Conformité",
              "OHADA / IFRS",
              "Pilotage mission",
            ],
          },
        ]}
      />

       <AboutCta />
    </>
  )
}