// src/components/ui/publications-list.tsx
"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  FileText,
  BarChart3,
  Lightbulb,
  FileDown,
  ArrowRight,
  Calendar,
  Tag,
  Filter,
  BookOpen,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

type PublicationCategory = "Tous" | "Rapport" | "Analyse" | "Guide"

type Publication = {
  title: string
  description: string
  category: "Rapport" | "Analyse" | "Guide"
  date: string
  sector: string
  downloadUrl?: string
  featured?: boolean
}

const CATEGORY_CONFIG: Record<
  "Rapport" | "Analyse" | "Guide",
  { icon: LucideIcon; color: string }
> = {
  Rapport: {
    icon: FileText,
    color: "border-brand-navy/20 bg-brand-navy/5 text-brand-navy",
  },
  Analyse: {
    icon: BarChart3,
    color: "border-primary/20 bg-primary/5 text-primary",
  },
  Guide: {
    icon: Lightbulb,
    color: "border-amber-500/20 bg-amber-50 text-amber-700",
  },
}

const PUBLICATIONS: Publication[] = [
  {
    title: "Rapport annuel sur la conformité fiscale en RDC — Exercice 2024",
    description:
      "Synthèse des évolutions réglementaires majeures, des zones de risque fiscaux et des recommandations pratiques pour les entreprises opérant en RDC.",
    category: "Rapport",
    date: "Janvier 2025",
    sector: "Multi-sectoriel",
    downloadUrl: "#",
    featured: true,
  },
  {
    title: "Analyse : Impact du SYSCOHADA révisé sur la consolidation des groupes",
    description:
      "Note technique sur les implications comptables du SYSCOHADA révisé pour les holdings et groupes multi-filiales en zone OHADA.",
    category: "Analyse",
    date: "Décembre 2024",
    sector: "Groupes & Holdings",
    downloadUrl: "#",
  },
  {
    title: "Guide pratique : Préparer un audit financier — Check-list pour les DAF",
    description:
      "Guide opérationnel destiné aux directions financières pour anticiper et structurer efficacement une mission d'audit externe.",
    category: "Guide",
    date: "Novembre 2024",
    sector: "Multi-sectoriel",
    downloadUrl: "#",
    featured: true,
  },
  {
    title: "Rapport sectoriel : Enjeux d'audit dans le secteur minier congolais",
    description:
      "Étude approfondie des risques d'audit, des obligations déclaratives et des meilleures pratiques pour les opérateurs miniers en RDC.",
    category: "Rapport",
    date: "Octobre 2024",
    sector: "Mines & Ressources",
    downloadUrl: "#",
  },
  {
    title: "Analyse : Nouvelles exigences BCC en matière de contrôle interne bancaire",
    description:
      "Décryptage des circulaires récentes de la Banque Centrale du Congo et de leurs implications pour les institutions financières.",
    category: "Analyse",
    date: "Septembre 2024",
    sector: "Banque & Services Financiers",
    downloadUrl: "#",
  },
  {
    title: "Guide pratique : Due diligence financière — Méthodologie et livrables",
    description:
      "Cadre méthodologique pour la conduite de due diligence dans le contexte des transactions et acquisitions en RDC.",
    category: "Guide",
    date: "Août 2024",
    sector: "Advisory",
    downloadUrl: "#",
  },
  {
    title: "Rapport : Transparence et conformité dans le secteur des ONG en RDC",
    description:
      "Analyse des exigences des bailleurs internationaux et recommandations pour renforcer les pratiques de reporting et de gouvernance.",
    category: "Rapport",
    date: "Juillet 2024",
    sector: "ONG & Développement",
  },
  {
    title: "Analyse : Conversion IFRS — Défis et opportunités pour les entreprises congolaises",
    description:
      "Note d'orientation sur les enjeux de la transition vers les normes IFRS pour les entités soumises à des obligations de reporting international.",
    category: "Analyse",
    date: "Juin 2024",
    sector: "Multi-sectoriel",
  },
]

const CATEGORIES: PublicationCategory[] = ["Tous", "Rapport", "Analyse", "Guide"]

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
        active
          ? "border-primary bg-primary/5 text-primary"
          : "border-hairline bg-white text-ink/40 hover:border-primary/30 hover:text-primary"
      )}
    >
      {children}
    </button>
  )
}

function FeaturedPublicationCard({ pub }: { pub: Publication }) {
  const config = CATEGORY_CONFIG[pub.category]

  return (
    <article className="group border border-white/10 bg-surface-dark p-8 transition-all hover:border-primary/30 md:p-10">
      <div className="absolute right-0 top-0 hidden h-16 w-16 lg:block">
        <div className="absolute right-0 top-0 h-px w-16 bg-gradient-to-l from-primary/40 to-transparent" />
        <div className="absolute right-0 top-0 h-16 w-px bg-gradient-to-b from-primary/40 to-transparent" />
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
              {pub.category}
            </span>
            <span className="border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/40">
              À la une
            </span>
            <span className="flex items-center gap-1 text-xs text-white/35">
              <Calendar className="h-3 w-3" strokeWidth={1.7} />
              {pub.date}
            </span>
          </div>

          <h3 className="max-w-2xl font-serif text-2xl text-white transition-colors group-hover:text-primary md:text-3xl">
            {pub.title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
            {pub.description}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <Tag className="h-3 w-3 text-white/30" strokeWidth={1.7} />
            <span className="text-xs text-white/35">{pub.sector}</span>
          </div>
        </div>

        {pub.downloadUrl && (
          <a
            href={pub.downloadUrl}
            className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/5 transition-all group-hover:border-primary/30 group-hover:bg-primary/10"
          >
            <FileDown
              className="h-5 w-5 text-white/40 transition-colors group-hover:text-primary"
              strokeWidth={1.7}
            />
          </a>
        )}
      </div>
    </article>
  )
}

function PublicationCard({ pub }: { pub: Publication }) {
  const config = CATEGORY_CONFIG[pub.category]

  return (
    <article className="group flex flex-col justify-between border border-hairline bg-white p-6 transition-all hover:border-primary/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:p-8">
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]",
              config.color
            )}
          >
            {pub.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-ink/35">
            <Calendar className="h-3 w-3" strokeWidth={1.7} />
            {pub.date}
          </span>
        </div>

        <h3 className="font-serif text-xl text-brand-navy transition-colors group-hover:text-primary">
          {pub.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-ink/50">
          {pub.description}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <Tag className="h-3 w-3 text-ink/25" strokeWidth={1.7} />
          <span className="text-xs text-ink/35">{pub.sector}</span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-hairline pt-5">
        <Link
          href="#"
          className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
        >
          Lire la publication
          <ArrowRight
            size={14}
            className="transition-transform group-hover/link:translate-x-0.5"
          />
        </Link>

        {pub.downloadUrl && (
          <a
            href={pub.downloadUrl}
            className="flex h-8 w-8 items-center justify-center border border-hairline bg-canvas transition-all hover:border-primary/30 hover:bg-primary/5"
          >
            <FileDown className="h-4 w-4 text-ink/30 hover:text-primary" strokeWidth={1.7} />
          </a>
        )}
      </div>
    </article>
  )
}

export function PublicationsList() {
  const [activeCategory, setActiveCategory] = useState<PublicationCategory>("Tous")

  const featuredPubs = PUBLICATIONS.filter((p) => p.featured)
  const regularPubs = PUBLICATIONS.filter((p) => !p.featured)

  const filteredPubs =
    activeCategory === "Tous"
      ? regularPubs
      : regularPubs.filter((p) => p.category === activeCategory)

  const filteredFeatured =
    activeCategory === "Tous"
      ? featuredPubs
      : featuredPubs.filter((p) => p.category === activeCategory)

  return (
    <section id="publications-list" className="bg-canvas px-10 py-section">
      <div className="w-full">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Bibliothèque
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Nos publications
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-ink/30" strokeWidth={1.7} />
            {CATEGORIES.map((cat) => (
              <FilterButton
                key={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === "Tous" ? "Toutes" : `${cat}s`}
              </FilterButton>
            ))}
          </div>
        </div>

        {filteredFeatured.length > 0 && (
          <div className="mb-5 space-y-5">
            {filteredFeatured.map((pub) => (
              <FeaturedPublicationCard key={pub.title} pub={pub} />
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredPubs.map((pub) => (
            <PublicationCard key={pub.title} pub={pub} />
          ))}
        </div>

        {filteredPubs.length === 0 && filteredFeatured.length === 0 && (
          <div className="border border-hairline bg-white px-8 py-16 text-center">
            <p className="text-sm text-ink/40">
              Aucune publication dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}