/**
 * Seed principal CAAF SAS — idempotent
 * Ordre: Media → Users → ArticleCategories → Authors → Tags → Sectors → Clients → Certifications → Milestones → Publications → Jobs → Roles → Offices → Faqs → Testimonials → Articles → Expertises → Pages → Globals
 *
 * Idempotence: find({ where: { slug: { equals }}}) → skip si existe, sinon create(locale fr) + update(locale en)
 * Usage: pnpm payload run src/payload/seed/index.ts  ou  pnpm seed
 */

import payload from 'payload'
import config from '../../payload.config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// ── Sources contenus ──────────────────────────────────────────────
import { CATEGORIES, ARTICLES } from '../../content/actualites/articles'
import {
  ARTICLE_CONTENT_SYSCOHADA,
  ARTICLE_CONTENT_CONTROLE_FISCAL,
  ARTICLE_CONTENT_AUDIT_INTERNE,
  ARTICLE_CONTENT_PRIX_TRANSFERT,
  ARTICLE_CONTENT_SECTEUR_MINIER,
  ARTICLE_CONTENT_CAC_OHADA,
  ARTICLE_CONTENT_TVA_RDC,
  ARTICLE_CONTENT_COSO,
  ARTICLE_CONTENT_BCC,
  ARTICLE_CONTENT_CAAF_30ANS,
  ARTICLE_CONTENT_CYBERSECURITE,
  ARTICLE_CONTENT_OHADA_ACTE_UNIFORME,
} from '../../content/actualites/article-content'

// Expertises — 15 configs
import { assistanceComptableConfig } from '../../content/expertises/assistance-comptable'
import { auditFinancierConfig } from '../../content/expertises/audit-financier'
import { auditInformatiqueConfig } from '../../content/expertises/audit-informatique'
import { auditInterneConfig } from '../../content/expertises/audit-interne'
import { commissariatAuxComptesConfig } from '../../content/expertises/commissariat-aux-comptes'
import { conseilFiscalConfig } from '../../content/expertises/conseil-fiscal'
import { controleInterneConfig } from '../../content/expertises/controle-interne'
import { dueDiligenceConfig } from '../../content/expertises/due-diligence'
import { gestionCommercialeConfig } from '../../content/expertises/gestion-commerciale'
import { gestionDePaieConfig } from '../../content/expertises/gestion-de-paie'
import { gestionDesRisquesConfig } from '../../content/expertises/gestion-des-risques'
import { maitriseDesRisquesConfig } from '../../content/expertises/maitrise-des-risques'
import { manuelsDeProcedureConfig } from '../../content/expertises/manuels-de-procedure'
import { restructurationConfig } from '../../content/expertises/restructuration'
import { supportLogicielsConfig } from '../../content/expertises/support-logiciels'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ── Helpers ───────────────────────────────────────────────────────

function toLexical(paragraphs: string[]) {
  // Convertit tableau markdown minimal → Lexical JSON Payload
  const children = paragraphs.map((raw) => {
    const text = raw.trim()
    if (!text) return null
    if (text.startsWith('> ')) {
      return {
        type: 'quote',
        children: [{ type: 'paragraph', children: [{ type: 'text', text: text.replace(/^> /, ''), format: 0 }] }],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      }
    }
    if (text.startsWith('### ')) {
      return {
        type: 'heading',
        tag: 'h3',
        children: [{ type: 'text', text: text.replace(/^### /, ''), format: 0 }],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      }
    }
    if (text.startsWith('## ')) {
      return {
        type: 'heading',
        tag: 'h2',
        children: [{ type: 'text', text: text.replace(/^## /, ''), format: 0 }],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      }
    }
    if (text.startsWith('- ')) {
      const items = text.split('\n').map((l) => ({
        type: 'listitem',
        children: [{ type: 'text', text: l.replace(/^- /, ''), format: 0 }],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
        value: 1,
      }))
      return { type: 'list', listType: 'bullet', tag: 'ul', children: items, direction: 'ltr', format: '', indent: 0, version: 1 }
    }
    if (text.startsWith('![')) {
      // image markdown → skip en lexical, remplacé par paragraphe avec caption
      const caption = text.match(/!\[(.*?)\]/)?.[1] ?? 'Illustration'
      return {
        type: 'paragraph',
        children: [{ type: 'text', text: `🖼 ${caption}`, format: 2 }],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      }
    }
    return {
      type: 'paragraph',
      children: [{ type: 'text', text, format: 0 }],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    }
  }).filter(Boolean)

  return {
    root: {
      type: 'root',
      children,
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
    },
  }
}

function enSuffix(fr: string): string {
  // Traduction basique FR → EN (suffixe). Pour les champs critiques on fournit mapping manuel ci-dessous.
  return `${fr} (EN)`
}

function getMimeType(filename: string): string {
  const ext = path.extname(filename).toLowerCase()
  if (ext === '.svg') return 'image/svg+xml'
  if (ext === '.png') return 'image/png'
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg'
  if (ext === '.webp') return 'image/webp'
  if (ext === '.pdf') return 'application/pdf'
  return 'application/octet-stream'
}

// Idempotence générique par slug/code/question/author
async function findOneBySlug(collection: string, slug: string) {
  const res = await (payload as any).find({
    collection,
    where: { slug: { equals: slug } },
    limit: 1,
    locale: 'fr',
    overrideAccess: true,
    depth: 0,
  })
  return res.docs[0] ?? null
}

// ── Seed ──────────────────────────────────────────────────────────

export async function seed(): Promise<void> {
  console.log('🌱 CAAF seed — démarrage')
  try {
    // Payload 3.x : getPayload({config}) ; fallback payload.init pour compat spec
    const pl: any = payload as any
    if (typeof pl.init === 'function') {
      try {
        await pl.init({ config })
      } catch (e) {
        // si déjà initialisé ou getPayload requis
        const { getPayload } = await import('payload')
        const instance = await getPayload({ config })
        Object.assign(payload, instance)
      }
    } else {
      const { getPayload } = await import('payload')
      const instance = await getPayload({ config })
      Object.assign(payload, instance)
    }
    console.log('✓ Payload initialisé')
  } catch (e) {
    console.error('✗ Payload init échoué', e)
    throw e
  }

  // ── 1. Media (upload src/assets/* + seed/media/*) ─────────────
  const mediaIds: Record<string, string> = {}
  try {
    console.log('\n[1/19] Media — upload assets')
    const assetsDir = path.resolve(__dirname, '../../assets')
    const seedMediaDir = path.resolve(__dirname, './media')
    const candidates: string[] = []

    for (const dir of [assetsDir, seedMediaDir]) {
      if (!fs.existsSync(dir)) continue
      for (const f of fs.readdirSync(dir)) {
        const full = path.join(dir, f)
        if (fs.statSync(full).isFile() && !f.startsWith('.') && f !== 'README.md') candidates.push(full)
      }
    }

    // Déduplicate par basename
    const seen = new Set<string>()
    const files = candidates.filter((f) => {
      const b = path.basename(f)
      if (seen.has(b)) return false
      seen.add(b)
      return true
    })

    // Fallback: au moins logo.png si aucun fichier
    for (const full of files.slice(0, 12)) {
      const filename = path.basename(full)
      const altFr = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
      const altEn = enSuffix(altFr)
      // idempotence: find by alt fr (localized)
      let existing: any = null
      try {
        const res = await (payload as any).find({
          collection: 'media',
          where: { alt: { equals: altFr } },
          limit: 1,
          locale: 'fr',
          overrideAccess: true,
        })
        existing = res.docs[0]
      } catch {}
      if (existing) {
        console.log(`  ↺ media skip ${filename} (${existing.id})`)
        mediaIds[filename] = existing.id
        mediaIds['default'] ??= existing.id
        continue
      }
      try {
        const data = fs.readFileSync(full)
        const created = await (payload as any).create({
          collection: 'media',
          data: { alt: altFr, caption: `Asset ${altFr}` },
          file: { data, mimetype: getMimeType(filename), name: filename, size: data.length },
          locale: 'fr',
          overrideAccess: true,
        })
        // update EN
        try {
          await (payload as any).update({ collection: 'media', id: created.id, data: { alt: altEn }, locale: 'en', overrideAccess: true })
        } catch {}
        console.log(`  + media ${filename} → ${created.id}`)
        mediaIds[filename] = created.id
        mediaIds['default'] ??= created.id
      } catch (e: any) {
        console.warn(`  ! media upload échoué ${filename}:`, e?.message ?? e)
      }
    }
    // Si toujours vide (pas d'assets), créer un media placeholder via external URL trick → skip, log
    if (!mediaIds['default']) {
      console.warn('  ! aucun média uploadé — les relations media utiliseront null (placer fichiers dans src/assets ou src/payload/seed/media)')
    } else {
      console.log(`  → ${Object.keys(mediaIds).length} médias prêts (default=${mediaIds['default']})`)
    }
  } catch (e) {
    console.error('  ✗ Media échoué', e)
  }

  const defaultMediaId: string | null = mediaIds['default'] ?? null
  // helper pour récupérer un mediaId existant ou null
  const pickMedia = (preferred?: string) => {
    if (preferred && mediaIds[preferred]) return mediaIds[preferred]
    return defaultMediaId
  }

  // ── 2. Users (admin/editor) ───────────────────────────────────
  try {
    console.log('\n[2/19] Users')
    const users = [
      { email: 'admin@caaf-sas.com', password: 'Admin123!', role: 'admin' as const },
      { email: 'redac@caaf-sas.com', password: 'Redac123!', role: 'editor' as const },
    ]
    for (const u of users) {
      const res = await (payload as any).find({ collection: 'users', where: { email: { equals: u.email } }, limit: 1, overrideAccess: true })
      if (res.docs.length) {
        console.log(`  ↺ user skip ${u.email}`)
        continue
      }
      const created = await (payload as any).create({ collection: 'users', data: u, overrideAccess: true })
      console.log(`  + user ${u.email} (${u.role}) → ${created.id}`)
    }
  } catch (e) {
    console.error('  ✗ Users', e)
  }

  // ── 3. ArticleCategories (6) ──────────────────────────────────
  const categoryIds: Record<string, string> = {}
  try {
    console.log('\n[3/19] ArticleCategories (6)')
    const enLabels: Record<string, string> = { all: 'All', audit: 'Audit & Assurance', fiscal: 'Tax', ohada: 'OHADA & Regulation', secteur: 'Sectors', cabinet: 'Firm Life' }
    for (const c of CATEGORIES) {
      const slug = c.slug
      const labelFr = c.label
      const labelEn = enLabels[slug] ?? enSuffix(labelFr)
      const existing = await findOneBySlug('article-categories', slug)
      if (existing) {
        console.log(`  ↺ category skip ${slug}`)
        categoryIds[slug] = existing.id
        continue
      }
      const created = await (payload as any).create({
        collection: 'article-categories',
        data: { label: labelFr, slug },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({ collection: 'article-categories', id: created.id, data: { label: labelEn, slug }, locale: 'en', overrideAccess: true })
      } catch {}
      console.log(`  + category ${slug} → ${created.id}`)
      categoryIds[slug] = created.id
    }
  } catch (e) {
    console.error('  ✗ ArticleCategories', e)
  }

  // ── 4. Authors (3) ────────────────────────────────────────────
  const authorIds: Record<string, string> = {}
  try {
    console.log('\n[4/19] Authors (3)')
    const authors = [
      { name: 'Jean-Marc Kalala', roleFr: 'Associé Senior', roleEn: 'Senior Partner', slug: 'jean-marc-kalala', bioFr: 'Associé Senior, 20 ans d’expérience en audit et commissariat aux comptes.', bioEn: 'Senior Partner, 20 years in audit and statutory auditing.' },
      { name: 'Marie Tshimanga', roleFr: 'Directrice Fiscale', roleEn: 'Tax Director', slug: 'marie-tshimanga', bioFr: 'Directrice fiscale, spécialiste TVA et prix de transfert.', bioEn: 'Tax Director, VAT and transfer pricing specialist.' },
      { name: 'Patrick Mbuyu', roleFr: 'Manager Audit', roleEn: 'Audit Manager', slug: 'patrick-mbuyu', bioFr: 'Manager Audit, expert COSO et contrôle interne.', bioEn: 'Audit Manager, COSO and internal control expert.' },
    ]
    for (const a of authors) {
      const existing = await findOneBySlug('authors', a.slug)
      if (existing) {
        console.log(`  ↺ author skip ${a.slug}`)
        authorIds[a.name] = existing.id
        continue
      }
      const created = await (payload as any).create({
        collection: 'authors',
        data: { name: a.name, role: a.roleFr, bio: a.bioFr, slug: a.slug, avatar: defaultMediaId ?? undefined },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({ collection: 'authors', id: created.id, data: { role: a.roleEn, bio: a.bioEn, slug: a.slug }, locale: 'en', overrideAccess: true })
      } catch {}
      console.log(`  + author ${a.name} → ${created.id}`)
      authorIds[a.name] = created.id
    }
  } catch (e) {
    console.error('  ✗ Authors', e)
  }

  // ── 5. Tags (~10) ────────────────────────────────────────────
  const tagIds: Record<string, string> = {}
  try {
    console.log('\n[5/19] Tags (~10)')
    const uniqueTags = Array.from(new Set(ARTICLES.flatMap((a) => a.tags))).slice(0, 12)
    // fallback si moins de 10
    const extra = ['TVA', 'OHADA', 'IFRS']
    for (const t of extra) if (!uniqueTags.includes(t) && uniqueTags.length < 10) uniqueTags.push(t)
    for (const label of uniqueTags) {
      const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      const existing = await findOneBySlug('tags', slug)
      if (existing) {
        tagIds[label] = existing.id
        continue
      }
      const created = await (payload as any).create({ collection: 'tags', data: { label, slug }, locale: 'fr', overrideAccess: true })
      try {
        await (payload as any).update({ collection: 'tags', id: created.id, data: { label: enSuffix(label), slug }, locale: 'en', overrideAccess: true })
      } catch {}
      tagIds[label] = created.id
      console.log(`  + tag ${label} → ${created.id}`)
    }
    console.log(`  → ${Object.keys(tagIds).length} tags`)
  } catch (e) {
    console.error('  ✗ Tags', e)
  }

  // ── 6. Sectors (8) — hardcodé depuis sectors-bento SECTORS ─
  const sectorIds: Record<string, string> = {}
  try {
    console.log('\n[6/19] Sectors (8)')
    const SECTORS = [
      { titleFr: 'Mines & Ressources Naturelles', titleEn: 'Mining & Natural Resources', slug: 'mines-ressources', descriptionFr: 'De la conformité artisanale à l’audit industriel à grande échelle.', descriptionEn: 'From artisanal compliance to large-scale industrial audit.', icon: 'pickaxe', tags: ['Audit des revenus', 'ESG & Conformité', 'Due diligence minière'], accent: true },
      { titleFr: 'Banque & Services Financiers', titleEn: 'Banking & Financial Services', slug: 'banque-services-financiers', descriptionFr: 'Audit de conformité BCC, contrôle interne bancaire, reporting IFRS.', descriptionEn: 'BCC compliance audit, banking internal control, IFRS reporting.', icon: 'landmark', tags: ['Conformité BCC', 'Reporting IFRS', 'Gouvernance'] },
      { titleFr: 'Télécommunications', titleEn: 'Telecommunications', slug: 'telecommunications', descriptionFr: 'Évaluation des licences spectrales, conformité ARPTC.', descriptionEn: 'Spectrum licence assessment, ARPTC compliance.', icon: 'radio', tags: ['Licences spectrales', 'Conformité ARPTC'] },
      { titleFr: 'Industrie & Production', titleEn: 'Industry & Manufacturing', slug: 'industrie-production', descriptionFr: 'Rationalisation des coûts et optimisation des processus industriels.', descriptionEn: 'Cost rationalisation and industrial process optimisation.', icon: 'factory', tags: ['Supply chain', 'Audit opérationnel'] },
      { titleFr: 'ONG & Développement', titleEn: 'NGOs & Development', slug: 'ong-developpement', descriptionFr: 'Audit des subventions et reporting de transparence pour bailleurs.', descriptionEn: 'Grant audit and transparency reporting for donors.', icon: 'globe-2', tags: ['Audit bailleurs', 'Transparence'] },
      { titleFr: 'Institutions & Secteur Public', titleEn: 'Institutions & Public Sector', slug: 'institutions-secteur-public', descriptionFr: 'Audit de projets financés, conformité PTF et gouvernance publique.', descriptionEn: 'Funded project audit, DCP compliance and public governance.', icon: 'building-2', tags: ['Projets financés', 'Gouvernance'] },
      { titleFr: 'Groupes & Holdings', titleEn: 'Groups & Holdings', slug: 'groupes-holdings', descriptionFr: 'Consolidation des comptes, audit des filiales et planification fiscale.', descriptionEn: 'Consolidation, subsidiary audit and tax planning.', icon: 'briefcase', tags: ['Consolidation', 'Filiales'] },
      { titleFr: 'Santé & Éducation', titleEn: 'Healthcare & Education', slug: 'sante-education', descriptionFr: 'Conformité réglementaire et audit des flux financiers.', descriptionEn: 'Regulatory compliance and financial flow audit.', icon: 'hospital', tags: ['Réglementaire', 'Flux financiers'] },
    ]
    for (const s of SECTORS) {
      const existing = await findOneBySlug('sectors', s.slug)
      if (existing) {
        sectorIds[s.slug] = existing.id
        sectorIds[s.titleFr] = existing.id
        console.log(`  ↺ sector skip ${s.slug}`)
        continue
      }
      const created = await (payload as any).create({
        collection: 'sectors',
        data: { title: s.titleFr, slug: s.slug, description: s.descriptionFr, icon: s.icon, tags: s.tags.map((t) => ({ text: t })), accent: s.accent ?? false },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({ collection: 'sectors', id: created.id, data: { title: s.titleEn, slug: s.slug, description: s.descriptionEn, tags: s.tags.map((t) => ({ text: enSuffix(t) })) }, locale: 'en', overrideAccess: true })
      } catch {}
      console.log(`  + sector ${s.slug} → ${created.id}`)
      sectorIds[s.slug] = created.id
      sectorIds[s.titleFr] = created.id
      sectorIds[s.titleEn] = created.id
    }
  } catch (e) {
    console.error('  ✗ Sectors', e)
  }

  // ── 7. Clients (12) — references-grid CLIENTS ───────────────
  try {
    console.log('\n[7/19] Clients (12)')
    const CLIENTS: Array<{ name: string; slug: string; sectorSlug: string; sectorType: string; featured?: boolean }> = [
      { name: 'CRDB Bank', slug: 'crdb-bank', sectorSlug: 'banque-services-financiers', sectorType: 'Institution financière' },
      { name: 'MIDEMA', slug: 'midema', sectorSlug: 'industrie-production', sectorType: 'Production industrielle' },
      { name: 'CILU', slug: 'cilu', sectorSlug: 'industrie-production', sectorType: 'Cimenterie' },
      { name: 'PPC', slug: 'ppc', sectorSlug: 'industrie-production', sectorType: 'Matériaux de construction' },
      { name: 'Engen', slug: 'engen', sectorSlug: 'industrie-production', sectorType: 'Distribution pétrolière' },
      { name: 'Metalkol', slug: 'metalkol', sectorSlug: 'mines-ressources', sectorType: 'Exploitation minière' },
      { name: 'Frontier', slug: 'frontier', sectorSlug: 'mines-ressources', sectorType: 'Exploration minière' },
      { name: 'Chemaf', slug: 'chemaf', sectorSlug: 'mines-ressources', sectorType: 'Traitement de minerais' },
      { name: 'ABM', slug: 'abm', sectorSlug: 'mines-ressources', sectorType: 'Ressources minières' },
      { name: 'Weir Minerals', slug: 'weir-minerals', sectorSlug: 'mines-ressources', sectorType: 'Équipements miniers' },
      { name: 'Ivanhoe', slug: 'ivanhoe', sectorSlug: 'mines-ressources', sectorType: 'Développement minier' },
      { name: 'SEK', slug: 'sek', sectorSlug: 'mines-ressources', sectorType: 'Cuivre & Cobalt' },
    ]
    for (const c of CLIENTS) {
      const existing = await findOneBySlug('clients', c.slug)
      if (existing) {
        console.log(`  ↺ client skip ${c.slug}`)
        continue
      }
      const sectorId = sectorIds[c.sectorSlug] ?? Object.values(sectorIds)[0]
      const created = await (payload as any).create({
        collection: 'clients',
        data: { name: c.name, slug: c.slug, sector: sectorId, sectorType: c.sectorType, logo: defaultMediaId ?? undefined, featured: c.name === 'CRDB Bank' || c.name === 'Metalkol' },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({ collection: 'clients', id: created.id, data: { name: enSuffix(c.name), slug: c.slug, sectorType: enSuffix(c.sectorType) }, locale: 'en', overrideAccess: true })
      } catch {}
      console.log(`  + client ${c.slug} → ${created.id}`)
    }
  } catch (e) {
    console.error('  ✗ Clients', e)
  }

  // ── 8. Certifications (4) — certifications-detail CERTIFICATIONS
  try {
    console.log('\n[8/19] Certifications (4)')
    const CERTS = [
      { code: 'IFAC', fullNameFr: 'International Federation of Accountants', fullNameEn: 'International Federation of Accountants', descriptionFr: 'Conformité aux normes IFAC — ISA, IESBA, ISQM.', descriptionEn: 'IFAC compliance — ISA, IESBA, ISQM standards.', icon: 'award', scope: ['Normes internationales d’audit (ISA)', 'Code de déontologie IESBA', 'Normes de contrôle qualité (ISQM)', 'Formation professionnelle continue'], implications: ['Rapports acceptés par les investisseurs internationaux', 'Méthodologie alignée sur les Big Four', 'Crédibilité auprès des bailleurs de fonds'] },
      { code: 'ONEC RDC', fullNameFr: 'Ordre National des Experts-Comptables de la RDC', fullNameEn: 'National Order of Chartered Accountants of DRC', descriptionFr: 'Inscription à l’ONEC, condition légale d’exercice.', descriptionEn: 'ONEC registration — legal condition to practice.', icon: 'shield-check', scope: ['Inscription au tableau de l’Ordre', 'Respect du code de déontologie national', 'Assurance RC professionnelle', 'Contrôle qualité périodique'], implications: ['Habilitation légale à certifier les comptes', 'Reconnaissance par les juridictions congolaises', 'Protection juridique des missions'] },
      { code: 'OHADA', fullNameFr: 'Organisation pour l’Harmonisation en Afrique du Droit des Affaires', fullNameEn: 'Organization for the Harmonization of Business Law in Africa', descriptionFr: 'Maîtrise du SYSCOHADA révisé, plan comptable OHADA.', descriptionEn: 'SYSCOHADA revised mastery, OHADA chart of accounts.', icon: 'scale', scope: ['SYSCOHADA révisé (2017)', 'Plan comptable OHADA', 'Normes de consolidation', 'Traitement des instruments financiers'], implications: ['États financiers conformes dans toute la zone OHADA', 'Harmonisation multi-pays', 'Base solide pour conversion IFRS'] },
      { code: 'ISA', fullNameFr: 'International Standards on Auditing', fullNameEn: 'International Standards on Auditing', descriptionFr: 'Corpus ISA complet — approche par les risques, documentation et rapport normé.', descriptionEn: 'Full ISA corpus — risk approach, documentation and standardized report.', icon: 'file-check', scope: ['ISA 200 à 810 — corpus complet', 'Approche par les risques', 'Documentation et traçabilité', 'Rapport d’audit normé'], implications: ['Missions reconnues par les sièges internationaux', 'Rapports lisibles par tout auditeur mondial', 'Qualité d’exécution vérifiable'] },
    ]
    for (const c of CERTS) {
      const res = await (payload as any).find({ collection: 'certifications', where: { code: { equals: c.code } }, limit: 1, overrideAccess: true })
      if (res.docs.length) {
        console.log(`  ↺ certification skip ${c.code}`)
        continue
      }
      const created = await (payload as any).create({
        collection: 'certifications',
        data: { code: c.code, fullName: c.fullNameFr, description: c.descriptionFr, icon: c.icon, scope: c.scope.map((t) => ({ text: t })), implications: c.implications.map((t) => ({ text: t })), doc: defaultMediaId ?? undefined },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({ collection: 'certifications', id: created.id, data: { fullName: c.fullNameEn, description: c.descriptionEn, scope: c.scope.map((t) => ({ text: enSuffix(t) })), implications: c.implications.map((t) => ({ text: enSuffix(t) })) }, locale: 'en', overrideAccess: true })
      } catch {}
      console.log(`  + certification ${c.code} → ${created.id}`)
    }
  } catch (e) {
    console.error('  ✗ Certifications', e)
  }

  // ── 9. Milestones (6 avec 1968) — history-timeline MILESTONES ─
  try {
    console.log('\n[9/19] Milestones (6)')
    const MILESTONES = [
      { year: '1968', titleFr: 'Création du cabinet', titleEn: 'Firm founded', textFr: 'Création à Kinshasa d’un cabinet d’audit et de conseil à vocation régionale.', textEn: 'Founded in Kinshasa as a regional audit and advisory firm.', order: 1 },
      { year: '1990', titleFr: 'Intégration au réseau PwC', titleEn: 'Joined PwC network', textFr: 'Accès aux méthodologies et standards internationaux du réseau PricewaterhouseCoopers.', textEn: 'Access to PwC international methodologies and quality standards.', order: 2 },
      { year: '2005', titleFr: 'Expansion sectorielle', titleEn: 'Sector expansion', textFr: 'Montée en puissance dans les secteurs minier et bancaire.', textEn: 'Scale-up in mining and banking sectors.', order: 3 },
      { year: '2012', titleFr: 'Ouverture de Lubumbashi', titleEn: 'Lubumbashi office opened', textFr: 'Inauguration du bureau régional pour proximité Haut-Katanga / Lualaba.', textEn: 'Regional office opened for proximity in Haut-Katanga / Lualaba.', order: 4 },
      { year: '2023', titleFr: 'Naissance de CAAF SAS', titleEn: 'CAAF SAS created', textFr: 'Devient Congo Auditing and Advisory Firm, en préservant l’intégralité du savoir-faire.', textEn: 'Becomes Congo Auditing and Advisory Firm, preserving full expertise.', order: 5 },
      { year: "Aujourd'hui", titleFr: '40+ professionnels, 2 bureaux', titleEn: '40+ professionals, 2 offices', textFr: 'Plus de 80 clients actifs dans 12 secteurs, mêmes standards de qualité.', textEn: '80+ active clients across 12 sectors, same quality standards.', order: 6 },
    ]
    for (const m of MILESTONES) {
      const res = await (payload as any).find({ collection: 'milestones', where: { year: { equals: m.year } }, limit: 1, locale: 'fr', overrideAccess: true })
      if (res.docs.length) {
        console.log(`  ↺ milestone skip ${m.year}`)
        continue
      }
      const created = await (payload as any).create({
        collection: 'milestones',
        data: { year: m.year, title: m.titleFr, text: m.textFr, order: m.order, image: defaultMediaId ?? undefined },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({ collection: 'milestones', id: created.id, data: { title: m.titleEn, text: m.textEn }, locale: 'en', overrideAccess: true })
      } catch {}
      console.log(`  + milestone ${m.year} → ${created.id}`)
    }
  } catch (e) {
    console.error('  ✗ Milestones', e)
  }

  // ── 10. PublicationCategories + Publications (8) ──────────────
  const pubCatIds: Record<string, string> = {}
  try {
    console.log('\n[10/19] Publications (8)')
    const cats = [
      { labelFr: 'Rapport', labelEn: 'Report', slug: 'rapport' },
      { labelFr: 'Analyse', labelEn: 'Analysis', slug: 'analyse' },
      { labelFr: 'Guide', labelEn: 'Guide', slug: 'guide' },
    ]
    for (const c of cats) {
      const existing = await findOneBySlug('publication-categories', c.slug)
      if (existing) {
        pubCatIds[c.slug] = existing.id
        continue
      }
      const created = await (payload as any).create({ collection: 'publication-categories', data: { label: c.labelFr, slug: c.slug }, locale: 'fr', overrideAccess: true })
      try {
        await (payload as any).update({ collection: 'publication-categories', id: created.id, data: { label: c.labelEn, slug: c.slug }, locale: 'en', overrideAccess: true })
      } catch {}
      pubCatIds[c.slug] = created.id
      console.log(`  + pub-category ${c.slug} → ${created.id}`)
    }

    const PUBS: Array<{ titleFr: string; titleEn: string; slug: string; excerptFr: string; category: string; date: string; sector?: string; featured?: boolean }> = [
      { titleFr: 'Rapport annuel sur la conformité fiscale en RDC — Exercice 2024', titleEn: 'Annual report on tax compliance in DRC — FY 2024', slug: 'rapport-conformite-fiscale-2024', excerptFr: 'Synthèse des évolutions réglementaires et recommandations pratiques.', category: 'rapport', date: '2025-01-15', featured: true },
      { titleFr: 'Analyse : Impact du SYSCOHADA révisé sur la consolidation des groupes', titleEn: 'Analysis: Impact of revised SYSCOHADA on group consolidation', slug: 'analyse-syscohada-consolidation', excerptFr: 'Note technique pour holdings et groupes multi-filiales en zone OHADA.', category: 'analyse', date: '2024-12-01' },
      { titleFr: 'Guide pratique : Préparer un audit financier — Check-list pour les DAF', titleEn: 'Practical guide: Preparing a financial audit — CFO checklist', slug: 'guide-preparer-audit-financier', excerptFr: 'Guide opérationnel pour structurer une mission d’audit externe.', category: 'guide', date: '2024-11-15', featured: true },
      { titleFr: 'Rapport sectoriel : Enjeux d’audit dans le secteur minier congolais', titleEn: 'Sector report: Audit challenges in Congolese mining', slug: 'rapport-audit-minier', excerptFr: 'Risques, obligations déclaratives et meilleures pratiques pour opérateurs miniers.', category: 'rapport', date: '2024-10-15' },
      { titleFr: 'Analyse : Nouvelles exigences BCC en matière de contrôle interne bancaire', titleEn: 'Analysis: New BCC requirements for banking internal control', slug: 'analyse-bcc-controle-interne', excerptFr: 'Décryptage des circulaires BCC et implications pour banques.', category: 'analyse', date: '2024-09-15' },
      { titleFr: 'Guide pratique : Due diligence financière — Méthodologie et livrables', titleEn: 'Practical guide: Financial due diligence — Methodology and deliverables', slug: 'guide-due-diligence', excerptFr: 'Cadre méthodologique pour transactions et acquisitions en RDC.', category: 'guide', date: '2024-08-15' },
      { titleFr: 'Rapport : Transparence et conformité dans le secteur des ONG en RDC', titleEn: 'Report: Transparency and compliance in DRC NGO sector', slug: 'rapport-transparence-ong', excerptFr: 'Exigences bailleurs et recommandations de gouvernance.', category: 'rapport', date: '2024-07-15' },
      { titleFr: 'Analyse : Conversion IFRS — Défis et opportunités', titleEn: 'Analysis: IFRS conversion — Challenges and opportunities', slug: 'analyse-conversion-ifrs', excerptFr: 'Note d’orientation sur la transition IFRS.', category: 'analyse', date: '2024-06-15' },
    ]
    for (const p of PUBS) {
      const existing = await findOneBySlug('publications', p.slug)
      if (existing) {
        console.log(`  ↺ publication skip ${p.slug}`)
        continue
      }
      const catId = pubCatIds[p.category]
      const created = await (payload as any).create({
        collection: 'publications',
        data: { title: p.titleFr, slug: p.slug, excerpt: p.excerptFr, category: catId, date: p.date, featured: !!p.featured, pdf: defaultMediaId ?? undefined, cover: defaultMediaId ?? undefined, content: toLexical([p.excerptFr, 'Contenu détaillé disponible en PDF.']) },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({ collection: 'publications', id: created.id, data: { title: p.titleEn, slug: p.slug, excerpt: enSuffix(p.excerptFr) }, locale: 'en', overrideAccess: true })
      } catch {}
      console.log(`  + publication ${p.slug} → ${created.id}`)
    }
  } catch (e) {
    console.error('  ✗ Publications', e)
  }

  // ── 11. Jobs (5) — careers-openings OPENINGS ────────────────
  try {
    console.log('\n[11/19] Jobs (5)')
    const JOBS = [
      { titleFr: 'Auditeur Financier Senior', titleEn: 'Senior Financial Auditor', slug: 'auditeur-financier-senior', department: 'Audit', location: 'Kinshasa', contract: 'CDI', experienceFr: '5+ ans', experienceEn: '5+ years', descriptionFr: 'Piloter des missions d’audit financier, encadrement juniors.', descriptionEn: 'Lead financial audit missions and mentor juniors.', featured: true },
      { titleFr: 'Consultant en Stratégie & Croissance', titleEn: 'Strategy & Growth Consultant', slug: 'consultant-strategie-croissance', department: 'Advisory', location: 'Lubumbashi', contract: 'CDI', experienceFr: '3–5 ans', experienceEn: '3–5 years', descriptionFr: 'Accompagner opérateurs miniers et industriels en restructuration.', descriptionEn: 'Support mining and industrial operators in restructuring.', featured: false },
      { titleFr: 'Responsable Fiscalité & Conformité', titleEn: 'Tax & Compliance Manager', slug: 'responsable-fiscalite-conformite', department: 'Fiscalité', location: 'Kinshasa', contract: 'CDI', experienceFr: '7+ ans', experienceEn: '7+ years', descriptionFr: 'Superviser missions de conseil fiscal et veille OHADA/DGI.', descriptionEn: 'Supervise tax advisory and OHADA/DGI watch.', featured: false },
      { titleFr: 'Auditeur Junior', titleEn: 'Junior Auditor', slug: 'auditeur-junior', department: 'Audit', location: 'Kinshasa', contract: 'CDI', experienceFr: '1–3 ans', experienceEn: '1–3 years', descriptionFr: 'Participer aux missions sous supervision de seniors.', descriptionEn: 'Participate in missions supervised by seniors.', featured: false },
      { titleFr: 'Stagiaire Audit & Conseil', titleEn: 'Audit & Advisory Intern', slug: 'stagiaire-audit-conseil', department: 'Support', location: 'Lubumbashi', contract: 'Stage', experienceFr: 'Étudiant BAC+4/5', experienceEn: 'Student Master 4/5', descriptionFr: 'Stage 6 mois, exposition multi-sectorielle et formation.', descriptionEn: '6-month internship, multi-sector exposure and training.', featured: false },
    ]
    for (const j of JOBS) {
      const existing = await findOneBySlug('jobs', j.slug)
      if (existing) {
        console.log(`  ↺ job skip ${j.slug}`)
        continue
      }
      const created = await (payload as any).create({
        collection: 'jobs',
        data: { title: j.titleFr, slug: j.slug, department: j.department as any, location: j.location as any, contract: j.contract as any, experience: j.experienceFr, description: j.descriptionFr, featured: !!j.featured },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({ collection: 'jobs', id: created.id, data: { title: j.titleEn, slug: j.slug, experience: j.experienceEn, description: j.descriptionEn }, locale: 'en', overrideAccess: true })
      } catch {}
      console.log(`  + job ${j.slug} → ${created.id}`)
    }
  } catch (e) {
    console.error('  ✗ Jobs', e)
  }

  // ── 12. Roles (6) — careers-roles ROLES ─────────────────────
  try {
    console.log('\n[12/19] Roles (6)')
    const ROLES = [
      { titleFr: 'Auditeur Junior', titleEn: 'Junior Auditor', slug: 'auditeur-junior-role', subtitleFr: '0–2 ans · Kinshasa / Lubumbashi', levelFr: 'Début de carrière', descriptionFr: 'Porte d’entrée dans l’audit, supervision senior, terrain.', descriptionEn: 'Entry point into audit, senior supervision, field work.', profilFr: 'BAC+4/5 CCA, Finance, Audit — Excel, ISA/OHADA.', profilEn: 'Master in CCA/Finance/Audit — Excel, ISA/OHADA.', evolutionFr: '→ Auditeur Confirmé en 18–24 mois → Senior', pourquoiFr: 'Jumelage senior, restitutions client, formation ISA/OHADA.', missions: ['Collecte et contrôle documentaire', 'Tests de conformité, circularisations', 'Participation aux inventaires', 'Tests substantifs achats-ventes-trésorerie'], qualites: ['Rigueur', 'Curiosité', 'Esprit d’équipe', 'Organisation'] },
      { titleFr: 'Auditeur Confirmé / Senior', titleEn: 'Confirmed / Senior Auditor', slug: 'auditeur-confirme', subtitleFr: '3–5 ans · Kinshasa / Lubumbashi', levelFr: 'Autonomie opérationnelle', descriptionFr: 'Pilote des sections à risque, encadre 2–3 juniors.', descriptionEn: 'Leads risk sections, mentors 2–3 juniors.', profilFr: '3–5 ans audit externe, ISA/OHADA/IFRS.', profilEn: '3–5 years external audit, ISA/OHADA/IFRS.', evolutionFr: '→ Chef de mission / Manager en 2–3 ans', pourquoiFr: 'Responsabilités rapides, mentorat manager.', missions: ['Planification par les risques', 'Supervision travaux juniors', 'Entretiens de contrôle (COSO)', 'Préparation points d’audit'], qualites: ['Leadership', 'Esprit critique', 'Relationnel', 'Priorisation'] },
      { titleFr: 'Chef de Mission / Manager Audit', titleEn: 'Engagement Manager / Audit Manager', slug: 'chef-de-mission', subtitleFr: '5–8 ans · Kinshasa', levelFr: "Responsabilité d'engagement", descriptionFr: 'Porte responsabilité d’engagements complets.', descriptionEn: 'Holds full engagement responsibility.', profilFr: 'DEC / mémorialiste, 5–8 ans dont Big4.', profilEn: 'Chartered accountant, 5–8 years incl. Big4.', evolutionFr: '→ Directeur Audit → Associé', pourquoiFr: 'Responsable d’engagement, comités d’audit.', missions: ['Cadrage et proposition commerciale', 'Pilotage missions multi-sites', 'Revue critique et opinion', 'Gestion budget et rentabilité'], qualites: ['Vision stratégique', 'Leadership', 'Négociation', 'Rigueur'] },
      { titleFr: 'Collaborateur Comptable / Expert-Comptable', titleEn: 'Accounting Associate / Chartered Accountant', slug: 'collaborateur-comptable', subtitleFr: '2–7 ans · Kinshasa / Lubumbashi', levelFr: 'Accompagnement comptable', descriptionFr: 'Gère portefeuille, sécurise conformité comptable.', descriptionEn: 'Manages portfolio, secures accounting compliance.', profilFr: 'DECF/DSCG ou Master CCA, Sage/Quadratus/SAP.', profilEn: 'DECF/DSCG or Master CCA, Sage/Quadratus/SAP.', evolutionFr: '→ Responsable de portefeuille → Expert-Comptable', pourquoiFr: 'Portefeuille diversifié, outils modernes.', missions: ['Tenue et révision OHADA', 'États financiers et liasses', 'Conseil et tableaux de bord', 'Interface CAC/banques/DGI'], qualites: ['Fiabilité', 'Service', 'Pédagogie', 'Confidentialité'] },
      { titleFr: 'Fiscaliste', titleEn: 'Tax Consultant', slug: 'fiscaliste', subtitleFr: '3–7 ans · Kinshasa', levelFr: 'Conseil fiscal', descriptionFr: 'Sécurise positions fiscales, veille CGI, contentieux.', descriptionEn: 'Secures tax positions, CGI watch, litigation.', profilFr: 'Master Droit fiscal, 3–7 ans fiscalité entreprise.', profilEn: 'Master in Tax Law, 3–7 years corporate tax.', evolutionFr: '→ Senior Tax Manager → Directeur Fiscal', pourquoiFr: 'Combine audit et fiscalité, dossiers techniques.', missions: ['Revue fiscale et diagnostic CGI', 'Prix de transfert', 'Contentieux DGI/DGDA', 'Veille CGI'], qualites: ['Analyse juridique', 'Résistance au stress', 'Conviction', 'Veille'] },
      { titleFr: 'Consultant Risk & Contrôle Interne', titleEn: 'Risk & Internal Control Consultant', slug: 'consultant-risk-controle-interne', subtitleFr: '2–6 ans · Kinshasa / Lubumbashi', levelFr: 'Advisory', descriptionFr: 'Cartographie des risques → maîtrise opérationnelle.', descriptionEn: 'Risk mapping → operational control.', profilFr: 'École de commerce / Ingénieur / Master Audit-Contrôle.', profilEn: 'Business/Engineering school / Master Audit-Control.', evolutionFr: '→ Manager Risk Advisory → Directeur Advisory', pourquoiFr: 'Missions à fort impact multisectoriel.', missions: ['Cartographie COSO / ISO 31000', 'Audit interne externalisé', 'Manuels de procédures', 'Accompagnement ERP/data'], qualites: ['Esprit structuré', 'Écoute', 'Curiosité', 'Formalisation'] },
    ]
    for (const r of ROLES) {
      const existing = await findOneBySlug('roles', r.slug)
      if (existing) {
        console.log(`  ↺ role skip ${r.slug}`)
        continue
      }
      const created = await (payload as any).create({
        collection: 'roles',
        data: {
          title: r.titleFr, subtitle: r.subtitleFr, level: r.levelFr, description: r.descriptionFr, profil: r.profilFr, evolution: r.evolutionFr, pourquoi: r.pourquoiFr, slug: r.slug,
          missions: r.missions.map((t) => ({ text: t })),
          qualites: r.qualites.map((t) => ({ text: t })),
        },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({
          collection: 'roles', id: created.id,
          data: {
            title: r.titleEn, subtitle: enSuffix(r.subtitleFr), level: enSuffix(r.levelFr), description: r.descriptionEn, profil: r.profilEn, evolution: enSuffix(r.evolutionFr), pourquoi: enSuffix(r.pourquoiFr), slug: r.slug,
            missions: r.missions.map((t) => ({ text: enSuffix(t) })),
            qualites: r.qualites.map((t) => ({ text: enSuffix(t) })),
          },
          locale: 'en', overrideAccess: true,
        })
      } catch {}
      console.log(`  + role ${r.slug} → ${created.id}`)
    }
  } catch (e) {
    console.error('  ✗ Roles', e)
  }

  // ── 13. Offices (2 avec phones +243 et coords) ────────────
  const officeIds: string[] = []
  try {
    console.log('\n[13/19] Offices (2)')
    const OFFICES = [
      {
        cityFr: 'Kinshasa', cityEn: 'Kinshasa', typeFr: 'Bureau Kinshasa', typeEn: 'Bureau Kinshasa',
        addressFr: [{ text: '13 Avenue Mongala' }, { text: 'Commune de la Gombe' }, { text: 'Kinshasa, RDC' }],
        addressEn: [{ text: '13 Mongala Avenue' }, { text: 'Gombe' }, { text: 'Kinshasa, DRC' }],
        phone: '+243 999 309 901', phone2: '+243 810 372 645', email: 'contact@caaf.cd',
        hoursFr: 'Lun — Ven · 08h00 — 17h30', hoursEn: 'Mon — Fri · 08:00 — 17:30',
        // Group {lng, lat}
        location: { lng: 15.30666, lat: -4.302915 },
      },
      {
        cityFr: 'Lubumbashi', cityEn: 'Lubumbashi', typeFr: 'Bureau Lubumbashi', typeEn: 'Bureau Lubumbashi',
        addressFr: [{ text: '1034 Avenue Kilela Balanda' }, { text: 'Centre-ville' }, { text: 'Lubumbashi, Haut-Katanga' }],
        addressEn: [{ text: '1034 Kilela Balanda Avenue' }, { text: 'Downtown' }, { text: 'Lubumbashi, Haut-Katanga' }],
        phone: '+243 990 658 737', phone2: '+243 817 103 993', email: 'contact@caaf.cd',
        hoursFr: 'Lun — Ven · 08h00 — 17h00', hoursEn: 'Mon — Fri · 08:00 — 17:00',
        location: { lng: 27.476984, lat: -11.647864 },
      },
    ]
    for (const o of OFFICES) {
      const res = await (payload as any).find({ collection: 'offices', where: { city: { equals: o.cityFr } }, limit: 1, locale: 'fr', overrideAccess: true })
      if (res.docs.length) {
        console.log(`  ↺ office skip ${o.cityFr}`)
        officeIds.push(res.docs[0].id)
        continue
      }
      const created = await (payload as any).create({
        collection: 'offices',
        data: { city: o.cityFr, type: o.typeFr, address: o.addressFr, phone: o.phone, phone2: o.phone2, email: o.email, hours: o.hoursFr, location: o.location },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({ collection: 'offices', id: created.id, data: { city: o.cityEn, type: o.typeEn, address: o.addressEn, hours: o.hoursEn }, locale: 'en', overrideAccess: true })
      } catch {}
      console.log(`  + office ${o.cityFr} → ${created.id}`)
      officeIds.push(created.id)
    }
  } catch (e) {
    console.error('  ✗ Offices', e)
  }

  // ── 14. Faqs (8) — contact-faq FAQ_ITEMS ───────────────────
  try {
    console.log('\n[14/19] Faqs (8)')
    const FAQS = [
      { categoryFr: 'Prise de contact', categoryEn: 'Contact', questionFr: 'Quel est le délai de réponse après une demande de consultation ?', answerFr: 'Nous répondons sous 24h ouvrées. Un interlocuteur senior qualifie votre besoin.', order: 1 },
      { categoryFr: 'Prise de contact', categoryEn: 'Contact', questionFr: 'Le premier échange est-il payant ?', answerFr: 'Non. Le premier entretien est exploratoire, sans engagement.', order: 2 },
      { categoryFr: 'Missions', categoryEn: 'Engagements', questionFr: 'Quels types de missions réalisez-vous ?', answerFr: 'Audit financier et légal, commissariat aux comptes, contrôle interne, due diligence, conseil fiscal et advisory.', order: 3 },
      { categoryFr: 'Missions', categoryEn: 'Engagements', questionFr: 'Intervenez-vous en dehors de Kinshasa et Lubumbashi ?', answerFr: 'Oui, sur l’ensemble du territoire de la RDC, y compris Lualaba et Haut-Katanga.', order: 4 },
      { categoryFr: 'Confidentialité', categoryEn: 'Confidentiality', questionFr: 'Comment garantissez-vous la confidentialité des échanges ?', answerFr: 'Secret professionnel et protocoles stricts de protection des données.', order: 5 },
      { categoryFr: 'Confidentialité', categoryEn: 'Confidentiality', questionFr: 'Puis-je demander des références avant de mandater CAAF ?', answerFr: 'Oui, références anonymisées ou contacts directs avec accord client.', order: 6 },
      { categoryFr: 'Facturation', categoryEn: 'Billing', questionFr: 'Comment sont structurés vos honoraires ?', answerFr: 'Lettre de mission détaillée, estimation précise avant démarrage, pas de frais cachés.', order: 7 },
      { categoryFr: 'Carrières', categoryEn: 'Careers', questionFr: 'Comment postuler chez CAAF SAS ?', answerFr: 'Via la page Carrières ou recrutement@caaf-sas.com.', order: 8 },
    ]
    for (const f of FAQS) {
      const res = await (payload as any).find({ collection: 'faqs', where: { question: { equals: f.questionFr } }, limit: 1, locale: 'fr', overrideAccess: true })
      if (res.docs.length) {
        console.log(`  ↺ faq skip order ${f.order}`)
        continue
      }
      const created = await (payload as any).create({
        collection: 'faqs',
        data: { category: f.categoryFr, question: f.questionFr, answer: toLexical([f.answerFr]), order: f.order },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({ collection: 'faqs', id: created.id, data: { category: f.categoryEn, question: enSuffix(f.questionFr), answer: toLexical([enSuffix(f.answerFr)]) }, locale: 'en', overrideAccess: true })
      } catch {}
      console.log(`  + faq ${f.order} → ${created.id}`)
    }
  } catch (e) {
    console.error('  ✗ Faqs', e)
  }

  // ── 15. Testimonials (6) ───────────────────────────────────
  try {
    console.log('\n[15/19] Testimonials (6)')
    const TESTIMONIALS = [
      { quoteFr: 'CAAF nous accompagne depuis 5 ans avec une rigueur exemplaire. Leur maîtrise OHADA et leur réactivité font la différence.', quoteEn: 'CAAF has supported us for 5 years with exemplary rigour.', author: 'Jean Kabongo', roleFr: 'Directeur Financier', roleEn: 'CFO', company: 'CRDB Bank', sectorFr: 'Banque', featured: true },
      { quoteFr: 'Un audit incisif et des recommandations actionnables. Nos comités apprécient la clarté et le pragmatisme.', quoteEn: 'Incisive audit and actionable recommendations.', author: 'Sophie Lunda', roleFr: 'Directrice des Risques', roleEn: 'Risk Director', company: 'MIDEMA', sectorFr: 'Industrie', featured: true },
      { quoteFr: 'Leur présence à Lubumbashi a sécurisé nos opérations minières. Proximité opérationnelle réelle.', quoteEn: 'Their presence in Lubumbashi secured our mining operations.', author: 'Marc Weber', roleFr: 'CEO', roleEn: 'CEO', company: 'Metalkol', sectorFr: 'Mines', featured: false },
      { quoteFr: 'Due diligence approfondie et livrée dans les délais. Partenaire de confiance pour nos transactions.', quoteEn: 'Thorough due diligence delivered on time.', author: 'Amina Diallo', roleFr: 'Directrice Générale', roleEn: 'General Manager', company: 'CILU', sectorFr: 'Industrie', featured: false },
      { quoteFr: 'Support fiscal réactif, veille de qualité et défense solide lors du contrôle DGI.', quoteEn: 'Responsive tax support and strong defence during DGI audit.', author: 'Paul Nsenga', roleFr: 'DAF', roleEn: 'Finance Director', company: 'PPC', sectorFr: 'Industrie', featured: false },
      { quoteFr: 'Reporting bailleur conforme et transparent. CAAF comprend les exigences des donateurs internationaux.', quoteEn: 'Compliant donor reporting. CAAF understands international donor requirements.', author: 'Grace Mbayo', roleFr: 'Country Director', roleEn: 'Country Director', company: 'ONG Partenaire', sectorFr: 'ONG', featured: false },
    ]
    for (const t of TESTIMONIALS) {
      const res = await (payload as any).find({ collection: 'testimonials', where: { author: { equals: t.author } }, limit: 1, overrideAccess: true })
      if (res.docs.length) {
        console.log(`  ↺ testimonial skip ${t.author}`)
        continue
      }
      const created = await (payload as any).create({
        collection: 'testimonials',
        data: { quote: t.quoteFr, author: t.author, role: t.roleFr, company: t.company, sector: t.sectorFr, avatar: defaultMediaId ?? undefined, featured: t.featured },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({ collection: 'testimonials', id: created.id, data: { quote: t.quoteEn, role: t.roleEn, sector: enSuffix(t.sectorFr) }, locale: 'en', overrideAccess: true })
      } catch {}
      console.log(`  + testimonial ${t.author} → ${created.id}`)
    }
  } catch (e) {
    console.error('  ✗ Testimonials', e)
  }

  // ── 16. Articles (12 avec content lexical) ──────────────────
  try {
    console.log('\n[16/19] Articles (12)')
    const contentMap: Record<string, string[]> = {
      'syscohada-revise-2024-ce-qui-change': ARTICLE_CONTENT_SYSCOHADA,
      'controle-fiscal-rdc-2024-comment-se-preparer': ARTICLE_CONTENT_CONTROLE_FISCAL,
      'audit-interne-externalise-avantages-pme': ARTICLE_CONTENT_AUDIT_INTERNE,
      'prix-de-transfert-rdc-guide-pratique': ARTICLE_CONTENT_PRIX_TRANSFERT,
      'secteur-minier-rdc-enjeux-audit-2024': ARTICLE_CONTENT_SECTEUR_MINIER,
      'commissaire-aux-comptes-nomination-ohada': ARTICLE_CONTENT_CAC_OHADA,
      'tva-rdc-erreurs-frequentes': ARTICLE_CONTENT_TVA_RDC,
      'controle-interne-coso-implementation-rdc': ARTICLE_CONTENT_COSO,
      'banque-bcc-audit-exigences-2024': ARTICLE_CONTENT_BCC,
      'caaf-30-ans-expertise': ARTICLE_CONTENT_CAAF_30ANS,
      'audit-informatique-cybersecurite-rdc': ARTICLE_CONTENT_CYBERSECURITE,
      'ohada-acte-uniforme-societes-commerciales': ARTICLE_CONTENT_OHADA_ACTE_UNIFORME,
    }
    for (const a of ARTICLES) {
      const existing = await findOneBySlug('articles', a.slug)
      if (existing) {
        console.log(`  ↺ article skip ${a.slug}`)
        continue
      }
      const catId = categoryIds[a.categorySlug] ?? categoryIds['audit'] ?? Object.values(categoryIds)[0]
      const authId = authorIds[a.author.name] ?? Object.values(authorIds)[0]
      const aTagIds = a.tags.map((t) => tagIds[t]).filter(Boolean)
      const lexical = contentMap[a.slug] ? toLexical(contentMap[a.slug]) : toLexical([a.excerpt])
      const titleEn = enSuffix(a.title)
      const excerptEn = enSuffix(a.excerpt)
      const created = await (payload as any).create({
        collection: 'articles',
        data: {
          title: a.title, slug: a.slug, excerpt: a.excerpt,
          category: catId, author: authId, date: a.date, readTime: a.readTime,
          image: defaultMediaId ?? undefined, featured: !!a.featured, tags: aTagIds, content: lexical,
          seo: { title: a.title, description: a.excerpt.slice(0, 155) },
        },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({
          collection: 'articles', id: created.id,
          data: { title: titleEn, slug: a.slug, excerpt: excerptEn, content: toLexical([excerptEn]) },
          locale: 'en', overrideAccess: true,
        })
      } catch {}
      console.log(`  + article ${a.slug} → ${created.id}`)
    }
  } catch (e) {
    console.error('  ✗ Articles', e)
  }

  // ── 17. Expertises (15) ─────────────────────────────────────
  try {
    console.log('\n[17/19] Expertises (15)')
    const allExpertises: Array<{ slug: string; config: any }> = [
      { slug: assistanceComptableConfig.slug, config: assistanceComptableConfig },
      { slug: auditFinancierConfig.slug, config: auditFinancierConfig },
      { slug: auditInformatiqueConfig.slug, config: auditInformatiqueConfig },
      { slug: auditInterneConfig.slug, config: auditInterneConfig },
      { slug: commissariatAuxComptesConfig.slug, config: commissariatAuxComptesConfig },
      { slug: conseilFiscalConfig.slug, config: conseilFiscalConfig },
      { slug: controleInterneConfig.slug, config: controleInterneConfig },
      { slug: dueDiligenceConfig.slug, config: dueDiligenceConfig },
      { slug: gestionCommercialeConfig.slug, config: gestionCommercialeConfig },
      { slug: gestionDePaieConfig.slug, config: gestionDePaieConfig },
      { slug: gestionDesRisquesConfig.slug, config: gestionDesRisquesConfig },
      { slug: maitriseDesRisquesConfig.slug, config: maitriseDesRisquesConfig },
      { slug: manuelsDeProcedureConfig.slug, config: manuelsDeProcedureConfig },
      { slug: restructurationConfig.slug, config: restructurationConfig },
      { slug: supportLogicielsConfig.slug, config: supportLogicielsConfig },
    ]
    for (const { slug, config: c } of allExpertises) {
      const existing = await findOneBySlug('expertises', slug)
      if (existing) {
        console.log(`  ↺ expertise skip ${slug}`)
        continue
      }
      // Mappe ExpertisePageConfig → fields Payload (hero + groupes)
      const payloadData: any = {
        title: c.hero.title.replace(',', '').trim() || c.sousServices.title,
        slug,
        hero: {
          category: c.hero.category,
          categoryHref: c.hero.categoryHref,
          title: c.hero.title,
          titleAccent: c.hero.titleAccent,
          description: c.hero.description,
          ctaPrimary: { label: c.hero.ctaPrimary.label, href: c.hero.ctaPrimary.href, type: 'internal' as const },
          ctaSecondary: { label: c.hero.ctaSecondary.label, href: c.hero.ctaSecondary.href, type: 'internal' as const },
          stats: c.hero.stats.map((s: any) => ({ value: s.value, label: s.label })),
          image: defaultMediaId ?? undefined,
        },
        sousServices: {
          eyebrow: c.sousServices.eyebrow,
          title: c.sousServices.title,
          titleAccent: c.sousServices.titleAccent,
          description: c.sousServices.description,
          sectionId: c.sousServices.sectionId,
          headerLabel: c.sousServices.headerLabel,
          items: c.sousServices.items.map((it: any) => ({
            id: it.id, icon: it.icon, title: it.title, subtitle: it.subtitle, description: it.description,
            deliverables: (it.deliverables ?? []).map((t: string) => ({ text: t })),
          })),
        },
        approche: {
          eyebrow: c.approche.eyebrow,
          title: c.approche.title,
          titleAccent: c.approche.titleAccent,
          description: c.approche.description,
          totalSteps: c.approche.totalSteps,
          stepLabel: c.approche.stepLabel,
          steps: c.approche.steps.map((s: any) => ({ number: s.number, id: s.id, icon: s.icon, title: s.title, description: s.description, details: (s.details ?? []).map((t: string) => ({ text: t })) })),
        },
        pourquoi: {
          eyebrow: c.pourquoi.eyebrow,
          title: c.pourquoi.title,
          description: c.pourquoi.description,
          items: c.pourquoi.items.map((it: any) => ({ icon: it.icon, title: it.title, description: it.description })),
        },
        secteurs: {
          eyebrow: c.secteurs.eyebrow,
          title: c.secteurs.title,
          description: c.secteurs.description,
          stripText: c.secteurs.stripText,
          stripHighlight: c.secteurs.stripHighlight,
          stripCta: c.secteurs.stripCta,
          items: c.secteurs.items.map((it: any) => ({ icon: it.icon, title: it.title, description: it.description, tags: (it.tags ?? []).map((t: string) => ({ text: t })), featured: !!it.featured })),
        },
        cas: {
          eyebrow: c.cas.eyebrow,
          title: c.cas.title,
          description: c.cas.description,
          sectionCta: c.cas.sectionCta,
          items: c.cas.items.map((cs: any) => ({
            id: cs.id, sector: cs.sector, sectorIcon: cs.sectorIcon, title: cs.title, location: cs.location, context: cs.context,
            approach: (cs.approach ?? []).map((t: string) => ({ text: t })),
            results: (cs.results ?? []).map((r: any) => ({ icon: r.icon, label: r.label })),
            quote: cs.quote, quoteAuthor: cs.quoteAuthor,
          })),
        },
        cta: {
          eyebrow: c.cta.eyebrow,
          title: c.cta.title,
          titleAccent: c.cta.titleAccent,
          description: c.cta.description,
          trustPoints: (c.cta.trustPoints ?? []).map((t: string) => ({ text: t })),
          primaryCta: { label: c.cta.primaryCta.label, href: c.cta.primaryCta.href, type: 'internal' as const },
          secondaryCta: { label: c.cta.secondaryCta.label, href: c.cta.secondaryCta.href, type: 'internal' as const },
          watermarkIcon: c.cta.watermarkIcon,
          contactOptions: (c.cta.contactOptions ?? []).map((co: any) => ({ icon: co.icon, title: co.title, description: co.description, href: co.href, cta: co.cta, primary: !!co.primary })),
          stats: (c.cta.stats ?? []).map((s: any) => ({ value: s.value, label: s.label })),
        },
        seo: { title: c.hero.title + ' | CAAF SAS', description: c.hero.description.slice(0, 155) },
      }
      const created = await (payload as any).create({ collection: 'expertises', data: payloadData, locale: 'fr', overrideAccess: true })
      try {
        await (payload as any).update({
          collection: 'expertises', id: created.id,
          data: { title: enSuffix(payloadData.title), slug, hero: { title: enSuffix(c.hero.title), titleAccent: enSuffix(c.hero.titleAccent), description: enSuffix(c.hero.description) } },
          locale: 'en', overrideAccess: true,
        })
      } catch {}
      console.log(`  + expertise ${slug} → ${created.id}`)
    }
  } catch (e) {
    console.error('  ✗ Expertises', e)
  }

  // ── 18. Pages (home/about/services etc. avec blocks) ───────
  try {
    console.log('\n[18/19] Pages')
    const PAGES: Array<{ titleFr: string; titleEn: string; slug: string; template: string; sections?: any[] }> = [
      { titleFr: 'Accueil', titleEn: 'Home', slug: 'home', template: 'home', sections: [{ blockType: 'hero', title: 'Congo Auditing and Advisory Firm', subtitle: 'Audit · Conseil · Expertise depuis 1968', description: 'Cabinet d’audit et de conseil de référence en RDC.' }, { blockType: 'stats', items: [{ value: '1968', label: 'Année de création' }, { value: '40+', label: 'Professionnels' }, { value: '80+', label: 'Clients actifs' }] }] },
      { titleFr: 'À propos', titleEn: 'About', slug: 'a-propos', template: 'about', sections: [{ blockType: 'hero', title: 'Un cabinet ancré, des standards internationaux' }, { blockType: 'timeline' }, { blockType: 'values' }] },
      { titleFr: 'Services', titleEn: 'Services', slug: 'services', template: 'services', sections: [{ blockType: 'hero', title: 'Nos expertises' }, { blockType: 'bentoServices' }] },
      { titleFr: 'Secteurs', titleEn: 'Sectors', slug: 'secteurs', template: 'secteurs', sections: [{ blockType: 'hero', title: 'Des environnements complexes, une lecture sectorielle adaptée' }, { blockType: 'bentoSecteurs' }] },
      { titleFr: 'Références', titleEn: 'References', slug: 'references', template: 'references', sections: [{ blockType: 'hero', title: 'Des missions auprès d’acteurs de premier plan' }, { blockType: 'clientsGrid' }, { blockType: 'testimonials' }] },
      { titleFr: 'Histoire', titleEn: 'History', slug: 'histoire', template: 'history', sections: [{ blockType: 'hero', title: 'Cinq décennies d’évolution' }, { blockType: 'timeline' }] },
      { titleFr: 'Certifications', titleEn: 'Certifications', slug: 'certifications', template: 'certifications', sections: [{ blockType: 'hero', title: 'Chaque certification, un engagement concret' }, { blockType: 'certificationsDetail' }] },
      { titleFr: 'Publications', titleEn: 'Publications', slug: 'publications', template: 'publications', sections: [{ blockType: 'hero', title: 'Nos publications' }] },
      { titleFr: 'Carrières', titleEn: 'Careers', slug: 'carrieres', template: 'carrieres', sections: [{ blockType: 'hero', title: 'Rejoignez CAAF SAS' }] },
      { titleFr: 'Contact', titleEn: 'Contact', slug: 'contact', template: 'contact', sections: [{ blockType: 'hero', title: 'Parlons de votre projet' }, { blockType: 'officesMap' }, { blockType: 'faq' }, { blockType: 'contactForm' }] },
      { titleFr: 'Actualités', titleEn: 'News', slug: 'actualites', template: 'actualites', sections: [{ blockType: 'hero', title: 'Actualités & Insights' }] },
    ]
    for (const p of PAGES) {
      const existing = await findOneBySlug('pages', p.slug)
      if (existing) {
        console.log(`  ↺ page skip ${p.slug}`)
        continue
      }
      const created = await (payload as any).create({
        collection: 'pages',
        data: { title: p.titleFr, slug: p.slug, template: p.template as any, sections: p.sections ?? [], seo: { title: `${p.titleFr} | CAAF SAS`, description: `CAAF SAS — ${p.titleFr}` } },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).update({ collection: 'pages', id: created.id, data: { title: p.titleEn, slug: p.slug }, locale: 'en', overrideAccess: true })
      } catch {}
      console.log(`  + page ${p.slug} (${p.template}) → ${created.id}`)
    }
  } catch (e) {
    console.error('  ✗ Pages', e)
  }

  // ── 19. Globals (SiteSettings, Header, Footer, SeoDefaults) ─
  try {
    console.log('\n[19/19] Globals')
    // SiteSettings
    try {
      await (payload as any).updateGlobal({
        slug: 'site-settings',
        data: {
          siteName: 'CAAF SAS',
          alternateName: 'Congo Auditing and Advisory Firm',
          siteUrl: 'https://caaf-sas.com',
          description: 'Cabinet d’audit, d’expertise comptable et de conseil — référence en RDC depuis 1968.',
          logo: defaultMediaId ?? undefined,
          address: { street: '13 Avenue Mongala', district: 'Gombe', city: 'Kinshasa', country: 'CD' },
          phone: '+243 999 309 901',
          phone2: '+243 810 372 645',
          lubPhone: '+243 990 658 737',
          lubPhone2: '+243 817 103 993',
          foundingYear: '1968',
          email: 'contact@caaf.cd',
          sameAs: [{ text: 'https://www.linkedin.com/company/caaf-sas' }],
        },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).updateGlobal({
          slug: 'site-settings',
          data: {
            siteName: 'CAAF SAS',
            alternateName: 'Congo Auditing and Advisory Firm',
            description: 'Audit, accounting and advisory firm — trusted in DRC since 1968.',
            address: { street: '13 Mongala Avenue', district: 'Gombe', city: 'Kinshasa', country: 'CD' },
          },
          locale: 'en',
          overrideAccess: true,
        })
      } catch {}
      console.log('  ✓ SiteSettings')
    } catch (e: any) {
      console.warn('  ! SiteSettings échoué:', e?.message ?? e)
    }

    // Header
    try {
      await (payload as any).updateGlobal({
        slug: 'header',
        data: {
          menu: [
            { label: 'Services', type: 'dropdown', columns: [{ heading: 'Audit & Conseil', links: [{ title: 'Audit Financier', href: '/expertises/audit-financier' }, { title: 'Audit Interne', href: '/expertises/audit-interne' }, { title: 'Conseil Fiscal', href: '/expertises/conseil-fiscal' }] }, { heading: 'Expertises', links: [{ title: 'Assistance Comptable', href: '/expertises/assistance-comptable' }, { title: 'Due Diligence', href: '/expertises/due-diligence' }] }] },
            { label: 'Secteurs', type: 'dropdown', columns: [{ heading: 'Secteurs', links: [{ title: 'Mines', href: '/secteurs#mines-ressources' }, { title: 'Banque', href: '/secteurs#banque-services-financiers' }] }] },
            { label: 'Références', type: 'link', href: '/references' },
            { label: 'À propos', type: 'link', href: '/a-propos' },
            { label: 'Contact', type: 'link', href: '/contact' },
          ],
          cta: { label: 'Planifier un échange', href: '/contact', type: 'internal' },
          langSwitcher: { showSwitcher: true },
        },
        locale: 'fr',
        overrideAccess: true,
      })
      console.log('  ✓ Header')
    } catch (e: any) {
      console.warn('  ! Header échoué:', e?.message ?? e)
    }

    // Footer
    try {
      await (payload as any).updateGlobal({
        slug: 'footer',
        data: {
          description: 'Cabinet d’audit et de conseil de référence en RDC depuis 1968.',
          columns: [
            { title: 'Services', links: [{ label: 'Audit Financier', href: '/expertises/audit-financier' }, { label: 'Conseil Fiscal', href: '/expertises/conseil-fiscal' }, { label: 'Due Diligence', href: '/expertises/due-diligence' }] },
            { title: 'Secteurs', links: [{ label: 'Mines', href: '/secteurs' }, { label: 'Banque', href: '/secteurs' }, { label: 'ONG', href: '/secteurs' }] },
            { title: 'Société', links: [{ label: 'À propos', href: '/a-propos' }, { label: 'Histoire', href: '/histoire' }, { label: 'Carrières', href: '/carrieres' }, { label: 'Contact', href: '/contact' }] },
          ],
          social: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/caaf-sas', icon: 'linkedin' }],
          offices: officeIds,
          bottomText: '© 2026 CAAF SAS — Tous droits réservés. OHADA · ISA · IFRS',
          credentials: [{ text: 'OHADA' }, { text: 'ISA' }, { text: 'IFRS' }],
          newsletter: { title: 'Restez informé', description: 'Actualités fiscales et réglementaires.', placeholder: 'Votre email', buttonLabel: 'S’abonner' },
        },
        locale: 'fr',
        overrideAccess: true,
      })
      console.log('  ✓ Footer')
    } catch (e: any) {
      console.warn('  ! Footer échoué:', e?.message ?? e)
    }

    // SeoDefaults
    try {
      await (payload as any).updateGlobal({
        slug: 'seo-defaults',
        data: {
          defaultTitle: 'CAAF SAS — Cabinet d’audit et de conseil en RDC',
          titleSuffix: ' | CAAF SAS',
          defaultDescription: 'CAAF SAS — Congo Auditing and Advisory Firm. Audit, expertise comptable et conseil depuis 1968. Kinshasa & Lubumbashi.',
          defaultOgImage: defaultMediaId ?? undefined,
          twitterHandle: '@caaf_sas',
          siteUrl: 'https://caaf-sas.com',
          canonicalBase: 'https://caaf-sas.com',
          robots: { index: true, follow: true, disallow: [{ text: '/admin' }, { text: '/api' }] },
          hreflang: [{ locale: 'fr', url: 'https://caaf-sas.com' }, { locale: 'en', url: 'https://caaf-sas.com/en' }],
        },
        locale: 'fr',
        overrideAccess: true,
      })
      try {
        await (payload as any).updateGlobal({
          slug: 'seo-defaults',
          data: {
            defaultTitle: 'CAAF SAS — Audit & Advisory Firm in DRC',
            defaultDescription: 'CAAF SAS — Congo Auditing and Advisory Firm. Audit, accounting and advisory since 1968. Kinshasa & Lubumbashi.',
          },
          locale: 'en',
          overrideAccess: true,
        })
      } catch {}
      console.log('  ✓ SeoDefaults')
    } catch (e: any) {
      console.warn('  ! SeoDefaults échoué:', e?.message ?? e)
    }
  } catch (e) {
    console.error('  ✗ Globals', e)
  }

  console.log('\n✅ Seed terminé — idempotent (relance sans doublons)')
}

// ── CLI entry ───────────────────────────────────────────────────
if (import.meta.url === `file://${process.argv[1]}`) {
  seed()
    .then(() => {
      console.log('Done')
      process.exit(0)
    })
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
}
