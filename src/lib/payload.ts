// src/lib/payload.ts — helpers Local API Payload (server components)
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { SeoDefault, SiteSetting, Page, Expertise, Article, Publication } from '@/payload-types'

let _payload: Awaited<ReturnType<typeof getPayload>> | null = null

export async function getPayloadClient() {
  if (_payload) return _payload
  const payloadConfig = await config
  _payload = await getPayload({ config: payloadConfig })
  return _payload
}

// ——— Globals ———

export async function getSeoDefaults(locale: 'fr' | 'en' = 'fr'): Promise<SeoDefault | null> {
  try {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({
      slug: 'seo-defaults',
      locale,
    })
    return data as unknown as SeoDefault
  } catch {
    return null
  }
}

export async function getSiteSettings(locale: 'fr' | 'en' = 'fr'): Promise<SiteSetting | null> {
  try {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({
      slug: 'site-settings',
      locale,
    })
    return data as unknown as SiteSetting
  } catch {
    return null
  }
}

// ——— Collections helpers ———

export async function getPage(slug: string, locale: 'fr' | 'en' = 'fr'): Promise<Page | null> {
  try {
    const payload = await getPayloadClient()
    const res = await payload.find({
      collection: 'pages',
      locale,
      depth: 1,
      limit: 1,
      where: {
        slug: { equals: slug },
        _status: { equals: 'published' },
      } as unknown as any,
    })
    return (res.docs[0] as Page) ?? null
  } catch {
    return null
  }
}

export async function getExpertise(slug: string, locale: 'fr' | 'en' = 'fr'): Promise<Expertise | null> {
  try {
    const payload = await getPayloadClient()
    const res = await payload.find({
      collection: 'expertises',
      locale,
      depth: 1,
      limit: 1,
      where: {
        slug: { equals: slug },
        _status: { equals: 'published' },
      } as unknown as any,
    })
    return (res.docs[0] as Expertise) ?? null
  } catch {
    return null
  }
}

export async function getArticle(slug: string, locale: 'fr' | 'en' = 'fr'): Promise<Article | null> {
  try {
    const payload = await getPayloadClient()
    const res = await payload.find({
      collection: 'articles',
      locale,
      depth: 2,
      limit: 1,
      where: {
        slug: { equals: slug },
        _status: { equals: 'published' },
      } as unknown as any,
    })
    return (res.docs[0] as Article) ?? null
  } catch {
    return null
  }
}

export async function getPublication(slug: string, locale: 'fr' | 'en' = 'fr'): Promise<Publication | null> {
  try {
    const payload = await getPayloadClient()
    const res = await payload.find({
      collection: 'publications',
      locale,
      depth: 1,
      limit: 1,
      where: {
        slug: { equals: slug },
        _status: { equals: 'published' },
      } as unknown as any,
    })
    return (res.docs[0] as Publication) ?? null
  } catch {
    return null
  }
}
