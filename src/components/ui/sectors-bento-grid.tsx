// src/components/ui/sectors-bento-grid.tsx
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import type { StaticImageData } from "next/image"
import {
  ArrowRight,
  Landmark,
  Factory,
  Building2,
  Briefcase,
  Globe2,
  Hospital,
  Pickaxe,
  Radio,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

// ─── Types ───────────────────────────────────────────────
type SectorCard = {
  title: string
  description: string
  href: string
  icon: LucideIcon
  tags?: string[]
  image?: string | StaticImageData
  variant: "featured" | "standard" | "dark" | "accent"
  highlights?: string[]
  stats?: { value: string; label: string }[]
}

// ─── Sectors Data ────────────────────────────────────────
const SECTORS: SectorCard[] = [
  {
    title: "Mines & Ressources Naturelles",
    description:
      "De la conformité artisanale à l'audit industriel à grande échelle : nous accompagnons les opérateurs miniers dans le respect des normes IFAC, la sécurisation des flux de revenus et la conformité aux exigences des sièges internationaux.",
    href: "#mines-ressources",
    icon: Pickaxe,
    variant: "featured",
    image:
      "https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?q=80&w=1200&auto=format&fit=crop",
    tags: ["Audit des revenus", "ESG & Conformité", "Due diligence minière"],
    stats: [
      { value: "40+", label: "missions minières" },
      { value: "Katanga", label: "présence terrain" },
    ],
  },
  {
    title: "Banque & Services Financiers",
    description:
      "Audit de conformité BCC, contrôle interne bancaire, reporting IFRS, dispositifs de gouvernance et gestion des risques pour les institutions financières.",
    href: "#banque-services-financiers",
    icon: Landmark,
    variant: "standard",
    tags: ["Conformité BCC", "Reporting IFRS", "Gouvernance"],
    highlights: [
      "Institutions régulées",
      "Normes prudentielles",
      "Audit interne",
    ],
  },
  {
    title: "Télécommunications",
    description:
      "Audit du backbone numérique de la RDC. Évaluation des licences spectrales, conformité réglementaire et vérification des transactions à haut volume.",
    href: "#telecommunications",
    icon: Radio,
    variant: "dark",
    tags: ["Licences spectrales", "Conformité ARPTC", "Audit transactionnel"],
  },
  {
    title: "Industrie & Production",
    description:
      "Rationalisation des coûts, optimisation des processus industriels, audit opérationnel et restructuration des chaînes de valeur dans les zones industrielles émergentes.",
    href: "#industrie-production",
    icon: Factory,
    variant: "standard",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    tags: ["Supply chain", "Contrôle inventaire", "Audit opérationnel"],
  },
  {
    title: "ONG & Développement",
    description:
      "Audit des subventions, reporting de transparence pour les bailleurs internationaux et agences de développement opérant dans la région des Grands Lacs.",
    href: "#ong-developpement",
    icon: Globe2,
    variant: "accent",
    tags: ["Audit bailleurs", "Transparence", "Développement"],
  },
  {
    title: "Institutions & Secteur Public",
    description:
      "Audit de projets financés, conformité aux exigences des partenaires techniques et financiers, renforcement institutionnel et gouvernance publique.",
    href: "#institutions-secteur-public",
    icon: Building2,
    variant: "standard",
    tags: ["Projets financés", "PTF", "Renforcement"],
  },
  {
    title: "Groupes & Holdings",
    description:
      "Consolidation des comptes, audit des filiales, évaluation des risques de groupe, harmonisation comptable et planification fiscale multi-entités.",
    href: "#groupes-holdings",
    icon: Briefcase,
    variant: "standard",
    tags: ["Consolidation", "Filiales", "Planification fiscale"],
  },
  {
    title: "Santé & Éducation",
    description:
      "Conformité réglementaire, audit des flux financiers, accompagnement structurel et optimisation de la gestion des établissements.",
    href: "#sante-education",
    icon: Hospital,
    variant: "standard",
    tags: ["Réglementaire", "Flux financiers", "Accompagnement"],
  },
]

// ─── Tag Component ───────────────────────────────────────
function SectorTag({
  children,
  variant = "light",
}: {
  children: React.ReactNode
  variant?: "light" | "dark" | "accent"
}) {
  const styles = {
    light:
      "border-hairline bg-canvas text-ink/40",
    dark:
      "border-white/10 bg-white/[0.04] text-white/50",
    accent:
      "border-primary/20 bg-primary/5 text-primary/70",
  }

  return (
    <span
      className={`inline-flex border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] ${styles[variant]}`}
    >
      {children}
    </span>
  )
}

// ─── Arrow Link ──────────────────────────────────────────
function SectorLink({
  href,
  children,
  variant = "light",
}: {
  href: string
  children: React.ReactNode
  variant?: "light" | "dark"
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3 ${
        variant === "dark"
          ? "text-white/70 hover:text-white"
          : "text-primary"
      }`}
    >
      {children}
      <ArrowRight
        size={15}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════
export function SectorsBentoGrid() {
  return (
    <section id="secteurs" className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Vue d&apos;ensemble
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Des environnements complexes,
              <br />
              <span className="text-ink/40">
                une lecture sectorielle adaptée.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            Chaque secteur a ses réalités réglementaires, ses risques propres et
            ses attentes en matière de conformité. Notre équipe adapte ses
            interventions au contexte précis de chaque industrie.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-5">
          {/* ═══ 1. FEATURED: Mines — 8 cols ═══ */}
          <article className="group relative col-span-12 overflow-hidden border border-hairline bg-white md:col-span-8">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ opacity: 0.15 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/20" />
            </div>

            {/* Accent line */}
            <div className="absolute left-0 top-0 h-full w-[3px] bg-primary" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[460px] flex-col justify-end p-8 md:p-12">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5">
                  <Pickaxe className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                  Secteur prioritaire
                </span>
              </div>

              <h3 className="max-w-lg font-serif text-3xl text-white md:text-4xl">
                Mines & Ressources Naturelles
              </h3>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/60">
                De la conformité artisanale à l'audit industriel à grande
                échelle : nous accompagnons les opérateurs miniers dans le
                respect des normes IFAC, la sécurisation des flux de revenus et
                la conformité aux exigences internationales.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <SectorTag variant="dark">Audit des revenus</SectorTag>
                <SectorTag variant="dark">ESG & Conformité</SectorTag>
                <SectorTag variant="dark">Due diligence minière</SectorTag>
              </div>

              <div className="mt-8 flex items-center gap-8">
                <SectorLink href="#mines-ressources" variant="dark">
                  Explorer ce secteur
                </SectorLink>

                <div className="hidden items-center gap-6 border-l border-white/10 pl-8 md:flex">
                  <div>
                    <p className="font-serif text-2xl text-white">40+</p>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/35">
                      missions
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-white">Katanga</p>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/35">
                      présence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ═══ 2. Banque — 4 cols ═══ */}
          <article className="col-span-12 flex flex-col justify-between border border-hairline bg-surface-card p-8 md:col-span-4 md:p-10">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                <Landmark className="h-6 w-6 text-primary" strokeWidth={1.7} />
              </div>

              <h3 className="font-serif text-2xl text-brand-navy">
                Banque & Services Financiers
              </h3>

              <p className="mt-4 text-sm leading-7 text-ink/55">
                Conformité BCC, contrôle interne bancaire, reporting IFRS et
                renforcement des dispositifs de gouvernance pour les
                institutions financières.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <SectorTag>Conformité BCC</SectorTag>
                <SectorTag>Reporting IFRS</SectorTag>
                <SectorTag>Gouvernance</SectorTag>
              </div>
            </div>

            <div className="mt-8 border-t border-hairline pt-6">
              <SectorLink href="#banque-services-financiers">
                Détails du secteur
              </SectorLink>
            </div>
          </article>

          {/* ═══ 3. Télécommunications — 4 cols dark ═══ */}
          <article className="col-span-12 flex flex-col justify-between border border-white/10 bg-surface-dark p-8 md:col-span-4 md:p-10">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5">
                <Radio className="h-6 w-6 text-primary" strokeWidth={1.7} />
              </div>

              <h3 className="font-serif text-2xl text-white">
                Télécommunications
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Audit du backbone numérique de la RDC. Évaluation des licences,
                conformité réglementaire ARPTC et vérification des transactions
                à haut volume.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <SectorTag variant="dark">Licences spectrales</SectorTag>
                <SectorTag variant="dark">Conformité ARPTC</SectorTag>
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.06] pt-6">
              <SectorLink href="#telecommunications" variant="dark">
                Explorer ce secteur
              </SectorLink>
            </div>
          </article>

          {/* ═══ 4. Industrie — 4 cols with image ═══ */}
          <article className="col-span-12 overflow-hidden border border-hairline bg-white md:col-span-4">
            <div className="h-48 w-full bg-surface-card">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                alt=""
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
            <div className="p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/5">
                <Factory className="h-5 w-5 text-primary" strokeWidth={1.7} />
              </div>

              <h3 className="font-serif text-xl text-brand-navy">
                Industrie & Production
              </h3>

              <p className="mt-3 text-sm leading-7 text-ink/55">
                Optimisation des chaînes d'approvisionnement, contrôle des
                inventaires et audit opérationnel en zones industrielles
                émergentes.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <SectorTag>Supply chain</SectorTag>
                <SectorTag>Contrôle</SectorTag>
              </div>
            </div>
          </article>

          {/* ═══ 5. ONG & Développement — 4 cols accent ═══ */}
          <article className="col-span-12 border border-hairline bg-white p-8 md:col-span-4 md:p-10">
            <div className="mb-2 h-[3px] w-12 bg-primary" />

            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
              <Globe2 className="h-6 w-6 text-primary" strokeWidth={1.7} />
            </div>

            <h3 className="font-serif text-2xl text-brand-navy">
              ONG & Développement
            </h3>

            <p className="mt-4 text-sm leading-7 text-ink/55">
              Audit des subventions et reporting de transparence pour les
              bailleurs internationaux et agences de développement opérant dans
              la région des Grands Lacs.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <CheckCircle2
                className="h-4 w-4 text-primary"
                strokeWidth={1.7}
              />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Certifié conforme bailleurs
              </span>
            </div>

            <div className="mt-8 border-t border-hairline pt-6">
              <SectorLink href="#ong-developpement">
                Voir les détails
              </SectorLink>
            </div>
          </article>

          {/* ═══ 6. Wide: Institutions + Holdings + Santé — 12 cols ═══ */}
          <article className="col-span-12 border border-hairline bg-white p-8 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Autres secteurs d&apos;intervention
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Institutions & Secteur Public",
                  description:
                    "Audit de projets financés, conformité PTF, renforcement institutionnel et gouvernance publique.",
                  icon: Building2,
                  tags: ["Projets financés", "PTF", "Gouvernance"],
                  href: "#institutions",
                },
                {
                  title: "Groupes & Holdings",
                  description:
                    "Consolidation des comptes, audit des filiales, évaluation des risques et planification fiscale multi-entités.",
                  icon: Briefcase,
                  tags: ["Consolidation", "Filiales", "Fiscal"],
                  href: "#groupes-holdings",
                },
                {
                  title: "Santé & Éducation",
                  description:
                    "Conformité réglementaire, audit des flux financiers et accompagnement des établissements de santé et d'éducation.",
                  icon: Hospital,
                  tags: ["Réglementaire", "Flux", "Structures"],
                  href: "#sante-education",
                },
              ].map((sector) => (
                <div
                  key={sector.title}
                  className="group border-l border-hairline pl-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/5 transition-colors group-hover:bg-primary/10">
                    <sector.icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={1.7}
                    />
                  </div>

                  <h4 className="font-serif text-xl text-brand-navy">
                    {sector.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-ink/55">
                    {sector.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {sector.tags.map((tag) => (
                      <SectorTag key={tag}>{tag}</SectorTag>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={sector.href}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
                    >
                      En savoir plus
                      <ChevronRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-hairline bg-canvas px-8 py-5 md:flex-row">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.7} />
            <p className="text-sm text-ink/60">
              Votre secteur n&apos;apparaît pas ?{" "}
              <span className="font-medium text-ink/80">
                Notre méthodologie est adaptable à tout environnement
                réglementaire.
              </span>
            </p>
          </div>

          <Link
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
          >
            Nous consulter
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}