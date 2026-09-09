// src/app/(frontend)/expertises/[slug]/page.tsx — route dynamique Payload
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getPayload } from "payload"
import config from "@/payload.config"
import { ExpertisePage } from "@/components/ui/expertise/expertise-page"
import type { ExpertisePageConfig } from "@/content/expertises/types"
import { buildMetadata } from "@/lib/seo"
import type { Media, Expertise } from "@/payload-types"

interface Props {
  params: Promise<{ slug: string }>
}

const FALLBACK_SLUGS = [
  "assistance-comptable",
  "audit-financier",
  "audit-informatique",
  "audit-interne",
  "commissariat-aux-comptes",
  "conseil-fiscal",
  "controle-interne",
  "due-diligence",
  "gestion-commerciale",
  "gestion-de-paie",
  "gestion-des-risques",
  "maitrise-des-risques",
  "manuels-de-procedure",
  "restructuration",
  "support-logiciels",
]

function mediaSrc(m: unknown): { src: string } {
  if (!m || typeof m === "number") return { src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1920&auto=format&fit=crop" }
  const url = (m as Media).url
  return { src: url ?? "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1920&auto=format&fit=crop" }
}

function resolveLink(link: unknown): { label: string; href: string } {
  if (!link || typeof link !== "object") return { label: "", href: "/contact" }
  const l = link as { label?: string; type?: string | null; url?: string | null; reference?: { relationTo?: string; value?: { slug?: string } | number } | null }
  const label = (l.label as string) ?? ""
  if (l.type === "external" && l.url) return { label, href: l.url }
  if (l.reference?.value && typeof l.reference.value === "object" && (l.reference.value as { slug?: string }).slug) {
    const rel = l.reference.relationTo ?? "pages"
    const slug = (l.reference.value as { slug: string }).slug
    // map relation to path prefix
    const prefixMap: Record<string, string> = {
      pages: "",
      expertises: "/expertises",
      articles: "/actualites",
      publications: "/publications",
    }
    const prefix = prefixMap[rel] ?? ""
    return { label, href: prefix ? `${prefix}/${slug}` : `/${slug}` }
  }
  if (l.url) return { label, href: l.url }
  return { label, href: "/contact" }
}

function mapExpertiseToConfig(doc: Expertise): ExpertisePageConfig {
  const heroRaw = doc.hero as unknown as Record<string, unknown>
  const sousServicesRaw = doc.sousServices as unknown as Record<string, unknown>
  const approcheRaw = doc.approche as unknown as Record<string, unknown>
  const pourquoiRaw = doc.pourquoi as unknown as Record<string, unknown>
  const secteursRaw = doc.secteurs as unknown as Record<string, unknown>
  const casRaw = doc.cas as unknown as Record<string, unknown>
  const ctaRaw = doc.cta as unknown as Record<string, unknown>

  const toStrArray = (arr: unknown, key = "text"): string[] => {
    if (!Array.isArray(arr)) return []
    return arr.map((x) => ((x as Record<string, unknown>)[key] as string) ?? "").filter(Boolean)
  }

  return {
    slug: (doc.slug as string) ?? "",
    hero: {
      category: (heroRaw?.category as string) ?? "",
      categoryHref: (heroRaw?.categoryHref as string) ?? "/services",
      title: (heroRaw?.title as string) ?? (doc.title as string) ?? "",
      titleAccent: (heroRaw?.titleAccent as string) ?? "",
      description: (heroRaw?.description as string) ?? "",
      ctaPrimary: resolveLink(heroRaw?.ctaPrimary),
      ctaSecondary: resolveLink(heroRaw?.ctaSecondary),
      stats: Array.isArray(heroRaw?.stats)
        ? (heroRaw.stats as Array<{ value: string; label: string }>).map((s) => ({ value: s.value, label: s.label }))
        : [],
      image: mediaSrc(heroRaw?.image),
    },
    sousServices: {
      eyebrow: (sousServicesRaw?.eyebrow as string) ?? "",
      title: (sousServicesRaw?.title as string) ?? "",
      titleAccent: (sousServicesRaw?.titleAccent as string) ?? "",
      description: (sousServicesRaw?.description as string) ?? "",
      sectionId: (sousServicesRaw?.sectionId as string) ?? "sous-services",
      headerLabel: (sousServicesRaw?.headerLabel as string) ?? "",
      items: Array.isArray(sousServicesRaw?.items)
        ? (sousServicesRaw.items as Array<Record<string, unknown>>).map((it) => ({
            id: (it.id as string) ?? "",
            icon: (it.icon as string) ?? "ShieldCheck",
            title: (it.title as string) ?? "",
            subtitle: (it.subtitle as string) ?? "",
            description: (it.description as string) ?? "",
            deliverables: toStrArray(it.deliverables),
          }))
        : [],
    },
    approche: {
      eyebrow: (approcheRaw?.eyebrow as string) ?? "",
      title: (approcheRaw?.title as string) ?? "",
      titleAccent: (approcheRaw?.titleAccent as string) ?? "",
      description: (approcheRaw?.description as string) ?? "",
      totalSteps: (approcheRaw?.totalSteps as string) ?? "05",
      stepLabel: (approcheRaw?.stepLabel as string) ?? "Étape",
      steps: Array.isArray(approcheRaw?.steps)
        ? (approcheRaw.steps as Array<Record<string, unknown>>).map((s) => ({
            number: (s.number as string) ?? "",
            id: (s.id as string) ?? "",
            icon: (s.icon as string) ?? "ClipboardCheck",
            title: (s.title as string) ?? "",
            description: (s.description as string) ?? "",
            details: toStrArray(s.details),
          }))
        : [],
    },
    pourquoi: {
      eyebrow: (pourquoiRaw?.eyebrow as string) ?? "",
      title: (pourquoiRaw?.title as string) ?? "",
      description: (pourquoiRaw?.description as string) ?? "",
      items: Array.isArray(pourquoiRaw?.items)
        ? (pourquoiRaw.items as Array<Record<string, unknown>>).map((it) => ({
            icon: (it.icon as string) ?? "ShieldCheck",
            title: (it.title as string) ?? "",
            description: (it.description as string) ?? "",
          }))
        : [],
    },
    secteurs: {
      eyebrow: (secteursRaw?.eyebrow as string) ?? "",
      title: (secteursRaw?.title as string) ?? "",
      description: (secteursRaw?.description as string) ?? "",
      stripText: (secteursRaw?.stripText as string) ?? "",
      stripHighlight: (secteursRaw?.stripHighlight as string) ?? "",
      stripCta: (secteursRaw?.stripCta as string) ?? "",
      items: Array.isArray(secteursRaw?.items)
        ? (secteursRaw.items as Array<Record<string, unknown>>).map((it) => ({
            icon: (it.icon as string) ?? "Building2",
            title: (it.title as string) ?? "",
            description: (it.description as string) ?? "",
            tags: toStrArray(it.tags),
            featured: Boolean(it.featured),
          }))
        : [],
    },
    cas: {
      eyebrow: (casRaw?.eyebrow as string) ?? "",
      title: (casRaw?.title as string) ?? "",
      description: (casRaw?.description as string) ?? "",
      sectionCta: (casRaw?.sectionCta as string) ?? "",
      items: Array.isArray(casRaw?.items)
        ? (casRaw.items as Array<Record<string, unknown>>).map((it) => ({
            id: (it.id as string) ?? "",
            sector: (it.sector as string) ?? "",
            sectorIcon: (it.sectorIcon as string) ?? "Building2",
            title: (it.title as string) ?? "",
            location: (it.location as string) ?? "",
            context: (it.context as string) ?? "",
            approach: toStrArray(it.approach),
            results: Array.isArray(it.results)
              ? (it.results as Array<Record<string, unknown>>).map((r) => ({
                  icon: (r.icon as string) ?? "CheckCircle2",
                  label: (r.label as string) ?? "",
                }))
              : [],
            quote: (it.quote as string) ?? "",
            quoteAuthor: (it.quoteAuthor as string) ?? "",
          }))
        : [],
    },
    cta: {
      eyebrow: (ctaRaw?.eyebrow as string) ?? "",
      title: (ctaRaw?.title as string) ?? "",
      titleAccent: (ctaRaw?.titleAccent as string) ?? "",
      description: (ctaRaw?.description as string) ?? "",
      trustPoints: toStrArray(ctaRaw?.trustPoints),
      primaryCta: resolveLink(ctaRaw?.primaryCta),
      secondaryCta: resolveLink(ctaRaw?.secondaryCta),
      watermarkIcon: (ctaRaw?.watermarkIcon as string) ?? "ShieldCheck",
      contactOptions: Array.isArray(ctaRaw?.contactOptions)
        ? (ctaRaw.contactOptions as Array<Record<string, unknown>>).map((o) => {
            const ctaResolved = resolveLink(o.cta)
            return {
              icon: (o.icon as string) ?? "Mail",
              title: (o.title as string) ?? "",
              description: (o.description as string) ?? "",
              href: (o.href as string) ?? ctaResolved.href,
              cta: ctaResolved.label || "Contact",
              primary: Boolean(o.primary),
            }
          })
        : [],
      stats: Array.isArray(ctaRaw?.stats)
        ? (ctaRaw.stats as Array<{ value: string; label: string }>).map((s) => ({ value: s.value, label: s.label }))
        : [],
    },
  }
}

async function fetchExpertise(slug: string) {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    for (const locale of ["fr", "en"] as const) {
      const res = await payload.find({
        collection: "expertises",
        locale,
          depth: 1,
        limit: 1,
        where: {
          slug: { equals: slug },
          _status: { equals: "published" },
        },
      })
      if (res.docs[0]) return res.docs[0] as unknown as Expertise
    }
    return null
  } catch {
    return null
  }
}

// Fallback configs map — lazy import to avoid bundling all at once if not needed
async function getFallbackConfig(slug: string): Promise<ExpertisePageConfig | null> {
  try {
    const map: Record<string, string> = {
      "assistance-comptable": "@/content/expertises/assistance-comptable",
      "audit-financier": "@/content/expertises/audit-financier",
      "audit-informatique": "@/content/expertises/audit-informatique",
      "audit-interne": "@/content/expertises/audit-interne",
      "commissariat-aux-comptes": "@/content/expertises/commissariat-aux-comptes",
      "conseil-fiscal": "@/content/expertises/conseil-fiscal",
      "controle-interne": "@/content/expertises/controle-interne",
      "due-diligence": "@/content/expertises/due-diligence",
      "gestion-commerciale": "@/content/expertises/gestion-commerciale",
      "gestion-de-paie": "@/content/expertises/gestion-de-paie",
      "gestion-des-risques": "@/content/expertises/gestion-des-risques",
      "maitrise-des-risques": "@/content/expertises/maitrise-des-risques",
      "manuels-de-procedure": "@/content/expertises/manuels-de-procedure",
      "restructuration": "@/content/expertises/restructuration",
      "support-logiciels": "@/content/expertises/support-logiciels",
    }
    // dynamic import via known slugs — use switch for static analysis
    switch (slug) {
      case "audit-financier": {
        const m = await import("@/content/expertises/audit-financier")
        return m.auditFinancierConfig
      }
      case "conseil-fiscal": {
        const m = await import("@/content/expertises/conseil-fiscal")
        return m.conseilFiscalConfig
      }
      case "assistance-comptable": {
        const m = await import("@/content/expertises/assistance-comptable")
        return (m as Record<string, ExpertisePageConfig>)[Object.keys(m).find((k) => k.endsWith("Config"))!]
      }
      case "audit-informatique": {
        const m = await import("@/content/expertises/audit-informatique")
        return (m as Record<string, ExpertisePageConfig>)[Object.keys(m).find((k) => k.endsWith("Config"))!]
      }
      case "audit-interne": {
        const m = await import("@/content/expertises/audit-interne")
        return (m as Record<string, ExpertisePageConfig>)[Object.keys(m).find((k) => k.endsWith("Config"))!]
      }
      case "commissariat-aux-comptes": {
        const m = await import("@/content/expertises/commissariat-aux-comptes")
        return (m as Record<string, ExpertisePageConfig>)[Object.keys(m).find((k) => k.endsWith("Config"))!]
      }
      case "controle-interne": {
        const m = await import("@/content/expertises/controle-interne")
        return (m as Record<string, ExpertisePageConfig>)[Object.keys(m).find((k) => k.endsWith("Config"))!]
      }
      case "due-diligence": {
        const m = await import("@/content/expertises/due-diligence")
        return (m as Record<string, ExpertisePageConfig>)[Object.keys(m).find((k) => k.endsWith("Config"))!]
      }
      case "gestion-commerciale": {
        const m = await import("@/content/expertises/gestion-commerciale")
        return (m as Record<string, ExpertisePageConfig>)[Object.keys(m).find((k) => k.endsWith("Config"))!]
      }
      case "gestion-de-paie": {
        const m = await import("@/content/expertises/gestion-de-paie")
        return (m as Record<string, ExpertisePageConfig>)[Object.keys(m).find((k) => k.endsWith("Config"))!]
      }
      case "gestion-des-risques": {
        const m = await import("@/content/expertises/gestion-des-risques")
        return (m as Record<string, ExpertisePageConfig>)[Object.keys(m).find((k) => k.endsWith("Config"))!]
      }
      case "maitrise-des-risques": {
        const m = await import("@/content/expertises/maitrise-des-risques")
        return (m as Record<string, ExpertisePageConfig>)[Object.keys(m).find((k) => k.endsWith("Config"))!]
      }
      case "manuels-de-procedure": {
        const m = await import("@/content/expertises/manuels-de-procedure")
        return (m as Record<string, ExpertisePageConfig>)[Object.keys(m).find((k) => k.endsWith("Config"))!]
      }
      case "restructuration": {
        const m = await import("@/content/expertises/restructuration")
        return (m as Record<string, ExpertisePageConfig>)[Object.keys(m).find((k) => k.endsWith("Config"))!]
      }
      case "support-logiciels": {
        const m = await import("@/content/expertises/support-logiciels")
        return (m as Record<string, ExpertisePageConfig>)[Object.keys(m).find((k) => k.endsWith("Config"))!]
      }
      default:
        return null
    }
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const res = await payload.find({
      collection: "expertises",
      locale: "fr",
      depth: 0,
      limit: 100,
      pagination: false,
      where: { _status: { equals: "published" } },
    })
    const slugs = (res.docs as Array<{ slug?: string }>)
      .map((d) => d.slug)
      .filter(Boolean) as string[]
    if (slugs.length) return slugs.map((slug) => ({ slug }))
  } catch {}
  return FALLBACK_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const defaults = (await payload.findGlobal({ slug: "seo-defaults", locale: "fr" })) as unknown as Parameters<typeof buildMetadata>[0]["defaults"]
    const doc = await fetchExpertise(slug)
    if (doc) {
      return buildMetadata({
        seo: (doc.seo ?? null) as Parameters<typeof buildMetadata>[0]["seo"],
        defaults,
        locale: "fr",
        path: `/expertises/${slug}`,
      })
    }
    const fallback = await getFallbackConfig(slug)
    if (fallback) {
      return buildMetadata({
        seo: { title: fallback.hero.title, description: fallback.hero.description },
        defaults,
        locale: "fr",
        path: `/expertises/${slug}`,
      })
    }
  } catch {}
  return {}
}

export default async function ExpertiseSlugPage({ params }: Props) {
  const { slug } = await params
  const doc = await fetchExpertise(slug)

  if (doc) {
    const cfg = mapExpertiseToConfig(doc)
    return <ExpertisePage config={cfg} breadcrumbLabel={doc.title as string} />
  }

  // Fallback to static content if Payload unavailable
  const fallback = await getFallbackConfig(slug)
  if (fallback) {
    return <ExpertisePage config={fallback} breadcrumbLabel={fallback.hero.title} />
  }

  notFound()
}
