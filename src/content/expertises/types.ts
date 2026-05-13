

// ─── Hero ───────────────────────────────────────────────────────────────────

export interface ExpertiseHeroStat {
  value: string
  label: string
}

export interface ExpertiseHeroConfig {
  category: string
  categoryHref: string
  title: string
  titleAccent: string
  description: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary: { label: string; href: string }
  stats: ExpertiseHeroStat[]
  image: { src: string; alt?: string }
}

// ─── Sous-services ──────────────────────────────────────────────────────────

export interface SubService {
  id: string
  icon: string          // ← string au lieu de LucideIcon
  title: string
  subtitle: string
  description: string
  deliverables: string[]
}

export interface ExpertiseSousServicesConfig {
  eyebrow: string
  title: string
  titleAccent?: string
  description: string
  sectionId: string
  headerLabel: string
  items: SubService[]
}

// ─── Approche ───────────────────────────────────────────────────────────────

export interface ApproacheStep {
  number: string
  id: string
  icon: string          // ← string
  title: string
  description: string
  details: string[]
}

export interface ExpertiseApprocheConfig {
  eyebrow: string
  title: string
  titleAccent?: string
  description: string
  totalSteps: string
  stepLabel: string
  steps: ApproacheStep[]
}

// ─── Pourquoi CAAF ──────────────────────────────────────────────────────────

export interface Differentiator {
  icon: string          // ← string
  title: string
  description: string
}

export interface ExpertisePourquoiConfig {
  eyebrow: string
  title: string
  description: string
  items: Differentiator[]
}

// ─── Secteurs ───────────────────────────────────────────────────────────────

export interface Sector {
  icon: string          // ← string
  title: string
  description: string
  tags: string[]
  featured: boolean
}

export interface ExpertiseSecteursConfig {
  eyebrow: string
  title: string
  description: string
  stripText: string
  stripHighlight: string
  stripCta: string
  items: Sector[]
}

// ─── Cas d'intervention ─────────────────────────────────────────────────────

export interface CaseResult {
  icon: string          // ← string
  label: string
}

export interface CaseStudy {
  id: string
  sector: string
  sectorIcon: string    // ← string
  title: string
  location: string
  context: string
  approach: string[]
  results: CaseResult[]
  quote: string
  quoteAuthor: string
}

export interface ExpertiseCasConfig {
  eyebrow: string
  title: string
  description: string
  sectionCta: string
  items: CaseStudy[]
}

// ─── CTA ────────────────────────────────────────────────────────────────────

export interface CtaContactOption {
  icon: string          // ← string
  title: string
  description: string
  href: string
  cta: string
  primary: boolean
}

export interface CtaStat {
  value: string
  label: string
}

export interface ExpertiseCtaConfig {
  eyebrow: string
  title: string
  titleAccent: string
  description: string
  trustPoints: string[]
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  watermarkIcon: string // ← string
  contactOptions: CtaContactOption[]
  stats: CtaStat[]
}

// ─── Config complète ────────────────────────────────────────────────────────

export interface ExpertisePageConfig {
  slug: string
  hero: ExpertiseHeroConfig
  sousServices: ExpertiseSousServicesConfig
  approche: ExpertiseApprocheConfig
  pourquoi: ExpertisePourquoiConfig
  secteurs: ExpertiseSecteursConfig
  cas: ExpertiseCasConfig
  cta: ExpertiseCtaConfig
}