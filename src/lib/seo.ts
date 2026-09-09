// src/lib/seo.ts — merge SeoDefaults + page seo → Next Metadata
import type { Metadata } from 'next'
import type { SeoDefault, Media } from '@/payload-types'

type SeoGroup = {
  title?: string | null
  description?: string | null
  keywords?: string | null
  image?: number | Media | null
  canonicalURL?: string | null
  noIndex?: boolean | null
  noFollow?: boolean | null
  ogTitle?: string | null
  ogDescription?: string | null
  ogImage?: number | Media | null
  twitterTitle?: string | null
  twitterDescription?: string | null
  twitterImage?: number | Media | null
  structuredData?: unknown
}

type BuildMetadataArgs = {
  seo?: SeoGroup | null
  defaults?: SeoDefault | null
  slug?: string
  locale?: 'fr' | 'en'
  /** For path prefix, e.g. "/expertises/audit-financier" */
  path?: string
}

function mediaUrl(m: number | Media | null | undefined): string | undefined {
  if (!m) return undefined
  if (typeof m === 'number') return undefined
  return (m as Media).url ?? undefined
}

function absoluteUrl(siteUrl: string, path: string): string {
  const base = siteUrl.replace(/\/$/, '')
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}

export function buildMetadata({ seo, defaults, slug: _slug, locale = 'fr', path }: BuildMetadataArgs): Metadata {
  const siteUrl = defaults?.siteUrl?.replace(/\/$/, '') ?? 'https://caaf-sas.com'
  const titleSuffix = defaults?.titleSuffix ?? ' | CAAF SAS'

  // Title: seo.title + suffix, fallback to defaults.defaultTitle
  const rawTitle = seo?.title?.trim() || seo?.ogTitle?.trim() || ''
  const fallbackTitle = defaults?.defaultTitle ?? 'CAAF SAS'
  let title: string
  if (rawTitle) {
    title = titleSuffix && !rawTitle.endsWith(titleSuffix) ? `${rawTitle}${titleSuffix}` : rawTitle
  } else {
    title = fallbackTitle
  }

  const description = seo?.description?.trim() || seo?.ogDescription?.trim() || defaults?.defaultDescription || ''

  // Canonical
  const canonical = seo?.canonicalURL?.trim() || (path ? absoluteUrl(siteUrl, path) : undefined) || (defaults?.canonicalBase?.trim() || undefined)

  // Images
  const ogImg = mediaUrl(seo?.ogImage) ?? mediaUrl(seo?.image) ?? mediaUrl(defaults?.defaultOgImage as Media | null)
  const twitterImg = mediaUrl(seo?.twitterImage) ?? ogImg

  // Robots: seo noIndex/noFollow override defaults robots
  const robotsIndex = seo?.noIndex ? false : (defaults?.robots?.index ?? true)
  const robotsFollow = seo?.noFollow ? false : (defaults?.robots?.follow ?? true)

  const metadata: Metadata = {
    title,
    description: description || undefined,
    metadataBase: new URL(siteUrl),
    keywords: seo?.keywords ? seo.keywords.split(',').map((k) => k.trim()).filter(Boolean) : undefined,
    alternates: {
      canonical: canonical || undefined,
      languages: defaults?.hreflang?.length
        ? Object.fromEntries(defaults.hreflang.map((h) => [h.locale, h.url]))
        : locale === 'fr'
          ? { fr: canonical ?? siteUrl, 'en': canonical ? canonical.replace(siteUrl, `${siteUrl}/en`) : `${siteUrl}/en` }
          : undefined,
    },
    openGraph: {
      title: seo?.ogTitle?.trim() || title,
      description: seo?.ogDescription?.trim() || description || undefined,
      url: canonical || undefined,
      siteName: fallbackTitle,
      locale: locale === 'en' ? 'en_US' : 'fr_CD',
      type: 'website',
      images: ogImg ? [{ url: ogImg }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.twitterTitle?.trim() || seo?.ogTitle?.trim() || title,
      description: seo?.twitterDescription?.trim() || seo?.ogDescription?.trim() || description || undefined,
      images: twitterImg ? [twitterImg] : undefined,
      creator: defaults?.twitterHandle || undefined,
    },
    robots: {
      index: robotsIndex,
      follow: robotsFollow,
      googleBot: {
        index: robotsIndex,
        follow: robotsFollow,
      },
    },
  }

  return metadata
}
