// src/app/about/page.tsx
import { AboutCta } from '@/components/ui/about-cta'
import { HistoryTimeline } from '@/components/ui/history-timeline'
import { FeaturedQuoteSection } from '@/components/ui/featured-quote-section'
import { HistoryHero } from '@/components/ui/history-hero'
import { HistoryStory } from '@/components/ui/history-story'
import { LeadershipSection } from '@/components/ui/leadership-section'
import { HistoryValues } from '@/components/ui/history-values'
import { HistoryCta } from '@/components/ui/history-cta'

export default function HistoryPage() {
  return (
    <>
      <HistoryHero />
      <HistoryStory />
      <FeaturedQuoteSection />
      <HistoryTimeline />
      <HistoryValues />
      <HistoryCta />
    </>
  )
}
