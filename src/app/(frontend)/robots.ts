// src/app/(frontend)/robots.ts — depuis SeoDefaults global
import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const dynamic = 'force-dynamic'

export default async function robots(): Promise<MetadataRoute.Robots> {
  let siteUrl = 'https://caaf-sas.com'
  let robotsIndex = true
  let robotsFollow = true
  let disallow: string[] = []

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const seoDefaults = await payload.findGlobal({ slug: 'seo-defaults' }) as unknown as {
      siteUrl?: string
      robots?: { index?: boolean | null; follow?: boolean | null; disallow?: Array<{ text: string }> | null }
    }
    if (seoDefaults?.siteUrl) siteUrl = seoDefaults.siteUrl.replace(/\/$/, '')
    if (typeof seoDefaults?.robots?.index === 'boolean') robotsIndex = seoDefaults.robots.index
    if (typeof seoDefaults?.robots?.follow === 'boolean') robotsFollow = seoDefaults.robots.follow
    if (seoDefaults?.robots?.disallow?.length) {
      disallow = seoDefaults.robots.disallow.map((d) => d.text).filter(Boolean)
    }
  } catch {
    // fallback defaults
  }

  // Always disallow admin/api if not already listed
  const defaultDisallow = ['/admin', '/api']
  for (const d of defaultDisallow) {
    if (!disallow.includes(d)) disallow.push(d)
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: robotsIndex ? '/' : undefined,
        disallow: disallow.length ? disallow : (robotsIndex ? undefined : '/'),
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
