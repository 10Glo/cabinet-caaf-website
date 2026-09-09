// src/app/(frontend)/sitemap.ts — sitemap dynamique depuis Payload
import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const dynamic = 'force-dynamic'

const LOCALES: ('fr' | 'en')[] = ['fr', 'en']

function resolveSiteUrl(defaults: { siteUrl?: string | null; canonicalBase?: string | null } | null): string {
  return (defaults?.siteUrl ?? defaults?.canonicalBase ?? 'https://caaf-sas.com').replace(/\/$/, '')
}

function mediaNotNeeded() { return }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = []
  let siteUrl = 'https://caaf-sas.com'

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Resolve siteUrl from SeoDefaults
    try {
      const seoDefaults = await payload.findGlobal({ slug: 'seo-defaults' }) as unknown as { siteUrl?: string; canonicalBase?: string | null }
      siteUrl = resolveSiteUrl(seoDefaults)
    } catch {
      // fallback to https://caaf-sas.com
    }

    const wherePublishedNotNoIndex = {
      and: [
        { _status: { equals: 'published' } },
        { 'seo.noIndex': { not_equals: true } },
      ],
    } as unknown as any

    // Helper to push entries
    const pushDocs = (
      docs: Array<{ slug?: string | null; seo?: { canonicalURL?: string | null; noIndex?: boolean | null } | null; updatedAt?: string; publishedAt?: string | null; date?: string | null }>,
      prefix: string,
      priority: number,
      locale: string,
    ) => {
      for (const doc of docs) {
        if (!doc.slug) continue
        if (doc.seo?.noIndex) continue
        const canonical = doc.seo?.canonicalURL?.trim()
        // localized slug already resolved via locale query
        const slug = String(doc.slug).replace(/^\//, '')
        const url = canonical || `${siteUrl}${prefix}/${slug}`
        // For pages where prefix is '' (root), handle special case
        const finalUrl = prefix === '' ? (canonical || `${siteUrl}/${slug}`) : url
        const lastMod = doc.updatedAt || doc.publishedAt || doc.date || undefined
        entries.push({
          url: finalUrl,
          lastModified: lastMod ? new Date(lastMod) : undefined,
          changeFrequency: 'weekly',
          priority,
          alternates: {
            languages: {
              fr: finalUrl,
              en: finalUrl,
            },
          },
        } as MetadataRoute.Sitemap[number])
      }
    }

    // Query per locale to respect slug localized
    for (const locale of LOCALES) {
      // Pages — priority 0.8
      try {
        const pages = await payload.find({
          collection: 'pages',
          locale,
          depth: 0,
          limit: 100,
          pagination: false,
          overrideAccess: false,
          where: wherePublishedNotNoIndex as unknown as any,
        })
        // Pages at root: /{slug} — but avoid duplicating across locales if same slug? keep both, let canonical handle
        pushDocs(pages.docs as unknown as Array<{ slug?: string | null; seo?: { canonicalURL?: string | null } | null; updatedAt?: string }>, '', 0.8, locale)
      } catch {}

      // Expertises — priority 0.9
      try {
        const expertises = await payload.find({
          collection: 'expertises',
          locale,
          depth: 0,
          limit: 100,
          pagination: false,
          overrideAccess: false,
          where: wherePublishedNotNoIndex as unknown as any,
        })
        pushDocs(expertises.docs as unknown as Array<{ slug?: string | null; seo?: { canonicalURL?: string | null } | null; updatedAt?: string }>, '/expertises', 0.9, locale)
      } catch {}

      // Articles — priority 0.7
      try {
        const articles = await payload.find({
          collection: 'articles',
          locale,
          depth: 0,
          limit: 200,
          pagination: false,
          overrideAccess: false,
          where: wherePublishedNotNoIndex as unknown as any,
        })
        pushDocs(articles.docs as unknown as Array<{ slug?: string | null; seo?: { canonicalURL?: string | null } | null; updatedAt?: string; date?: string }>, '/actualites', 0.7, locale)
      } catch {}

      // Publications — priority 0.7
      try {
        const publications = await payload.find({
          collection: 'publications',
          locale,
          depth: 0,
          limit: 200,
          pagination: false,
          overrideAccess: false,
          where: wherePublishedNotNoIndex as unknown as any,
        })
        pushDocs(publications.docs as unknown as Array<{ slug?: string | null; seo?: { canonicalURL?: string | null } | null; updatedAt?: string; date?: string }>, '/publications', 0.7, locale)
      } catch {}
    }

    // Always include homepage
    const hasHome = entries.some((e) => e.url === siteUrl || e.url === `${siteUrl}/`)
    if (!hasHome) {
      entries.unshift({
        url: siteUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      })
    }

    // Deduplicate by url
    const seen = new Set<string>()
    const deduped = entries.filter((e) => {
      if (seen.has(e.url)) return false
      seen.add(e.url)
      return true
    })

    return deduped
  } catch {
    // Fallback if Payload unavailable
    return [
      {
        url: siteUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
    ]
  }
}
