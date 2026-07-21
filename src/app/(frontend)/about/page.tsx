// src/app/about/page.tsx
import { AboutCta } from '@/components/ui/about-cta'
import { AboutHero } from '@/components/ui/about-hero'
import { AboutStory } from '@/components/ui/about-story'
import { FeaturedQuoteSection } from '@/components/ui/featured-quote-section'
import { LeadershipSection } from '@/components/ui/leadership-section'
import { ValuesSection } from '@/components/ui/values-section'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <FeaturedQuoteSection />
      <ValuesSection />
      <LeadershipSection />
      <AboutCta />
    </>
  )
}
