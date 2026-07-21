// src/components/ui/publications-list.tsx
"use client"

import React, { useCallback, useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"

// ─── Constants ───────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const
const ITEMS_PER_PAGE = 6

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

const CATEGORIES: PublicationCategory[] = [
  "Tous",
  "Rapport",
  "Analyse",
  "Guide",
]

// ─── Featured Card ──────────────────────────────────────

function FeaturedPublicationCard({
  pub,
  index,
}: {
  pub: Publication
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: EASE_OUT }}
      className="group border border-[#111A4A]/[0.06] bg-white p-8 transition-all duration-300 hover:border-[#111A4A]/12 md:p-10"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          {/* Meta row */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-primary/70">
              {pub.category}
            </span>
            <span className="h-0.5 w-0.5 rounded-full bg-[#111A4A]/10" />
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#7C7F88]/40">
              À la une
            </span>
            <span className="h-0.5 w-0.5 rounded-full bg-[#111A4A]/10" />
            <span className="font-mono text-[9px] text-[#7C7F88]/40">
              {pub.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="max-w-3xl font-serif text-[22px] text-[#111A4A] transition-colors duration-300 group-hover:text-primary md:text-[26px]">
            {pub.title}
          </h3>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#7C7F88]">
            {pub.description}
          </p>

          {/* Sector + links */}
          <div className="mt-5 flex flex-wrap items-center gap-5">
            <span className="text-[11px] text-[#7C7F88]/50">
              {pub.sector}
            </span>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-primary transition-all hover:gap-2.5"
            >
              Lire la publication
              <span className="text-[14px] leading-none">&rarr;</span>
            </Link>
            {pub.downloadUrl && (
              <a
                href={pub.downloadUrl}
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C7F88]/30 transition-colors hover:text-primary"
              >
                PDF
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="mt-8 h-[2px] w-0 bg-primary/30 transition-all duration-700 group-hover:w-full" />
    </motion.article>
  )
}

// ─── Publication Card ───────────────────────────────────

function PublicationCard({
  pub,
  index,
}: {
  pub: Publication
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: EASE_OUT }}
      className="group flex h-full flex-col justify-between border border-[#111A4A]/[0.06] bg-white p-6 transition-all duration-300 hover:border-[#111A4A]/12 md:p-8"
    >
      <div>
        {/* Meta row */}
        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-primary/70">
            {pub.category}
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-[#111A4A]/10" />
          <span className="font-mono text-[9px] text-[#7C7F88]/40">
            {pub.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl text-[#111A4A] transition-colors duration-300 group-hover:text-primary">
          {pub.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-[#7C7F88]">
          {pub.description}
        </p>

        {/* Sector */}
        <span className="mt-3 block text-[11px] text-[#7C7F88]/50">
          {pub.sector}
        </span>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-[#111A4A]/[0.06] pt-5">
        <Link
          href="#"
          className="group/link inline-flex items-center gap-2 text-[13px] font-medium text-primary transition-all hover:gap-2.5"
        >
          Lire la publication
          <span className="text-[14px] leading-none transition-transform duration-200 group-hover/link:translate-x-0.5">
            &rarr;
          </span>
        </Link>

        {pub.downloadUrl && (
          <a
            href={pub.downloadUrl}
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C7F88]/30 transition-colors hover:text-primary"
          >
            PDF
          </a>
        )}
      </div>

      {/* Bottom accent */}
      <div className="mt-4 h-[2px] w-0 bg-primary/30 transition-all duration-700 group-hover:w-full" />
    </motion.article>
  )
}

// ─── Pagination ─────────────────────────────────────────

function Pagination({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
}: {
  currentPage: number
  totalPages: number
  totalItems: number
  onPageChange: (page: number) => void
}) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const start = (currentPage - 1) * ITEMS_PER_PAGE + 1
  const end = Math.min(currentPage * ITEMS_PER_PAGE, totalItems)

  return (
    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
      <p className="font-mono text-[11px] text-[#7C7F88]/50">
        Affichage {start}&mdash;{end} sur {totalItems}
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex h-9 w-9 items-center justify-center border text-[13px] transition-all duration-200 ${
            currentPage === 1
              ? "cursor-not-allowed border-[#111A4A]/[0.03] text-[#7C7F88]/20"
              : "border-[#111A4A]/[0.06] text-[#7C7F88] hover:border-primary/30 hover:text-primary"
          }`}
        >
          &larr;
        </button>

        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`flex h-9 w-9 items-center justify-center border font-mono text-[11px] transition-all duration-200 ${
              page === currentPage
                ? "border-primary/30 bg-primary/5 text-primary"
                : "border-[#111A4A]/[0.06] text-[#7C7F88]/50 hover:border-primary/20 hover:text-[#111A4A]"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex h-9 w-9 items-center justify-center border text-[13px] transition-all duration-200 ${
            currentPage === totalPages
              ? "cursor-not-allowed border-[#111A4A]/[0.03] text-[#7C7F88]/20"
              : "border-[#111A4A]/[0.06] text-[#7C7F88] hover:border-primary/30 hover:text-primary"
          }`}
        >
          &rarr;
        </button>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function PublicationsList() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] =
    useState<PublicationCategory>("Tous")
  const [currentPage, setCurrentPage] = useState(1)
  const [animationKey, setAnimationKey] = useState(0)

  const featuredPubs =
    activeCategory === "Tous"
      ? PUBLICATIONS.filter((p) => p.featured)
      : PUBLICATIONS.filter(
          (p) => p.featured && p.category === activeCategory
        )

  const regularPubs =
    activeCategory === "Tous"
      ? PUBLICATIONS.filter((p) => !p.featured)
      : PUBLICATIONS.filter(
          (p) => !p.featured && p.category === activeCategory
        )

  const totalPages = Math.ceil(regularPubs.length / ITEMS_PER_PAGE)
  const paginatedPubs = regularPubs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const totalFiltered = featuredPubs.length + regularPubs.length

  // Reset page and trigger re-animation when filter changes
  const handleCategoryChange = useCallback(
    (category: PublicationCategory) => {
      setActiveCategory(category)
      setCurrentPage(1)
      setAnimationKey((k) => k + 1)
    },
    []
  )

  // Page change with scroll and re-animation
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
    setAnimationKey((k) => k + 1)
    const el = document.getElementById("publications-list")
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="publications-list"
      className="bg-canvas px-6 pb-20 pt-16 sm:px-10 lg:pb-28 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── Header ── */}
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
              className="mb-5 inline-flex items-center"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Bibliothèque
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={
                isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
              }
              transition={{ duration: 1.5, delay: 0.2, ease: EASE_OUT }}
              className="max-w-2xl text-[40px] font-normal leading-tight tracking-tight text-[#111A4A]"
            >
              Nos publications
            </motion.h2>
          </div>

          {/* Live count badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
            className="inline-flex shrink-0 items-center gap-3 self-start border border-[#111A4A]/[0.06] bg-white px-5 py-3 lg:self-auto"
          >
            <span className="font-serif text-2xl text-[#111A4A]">
              {totalFiltered}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7C7F88]">
              {activeCategory === "Tous"
                ? "publications"
                : `${activeCategory.toLowerCase()}s`}
            </span>
          </motion.div>
        </div>

        {/* ── Category filters ── */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={
            isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
          }
          transition={{ duration: 1.2, delay: 0.25, ease: EASE_OUT }}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory
            const count =
              cat === "Tous"
                ? PUBLICATIONS.length
                : PUBLICATIONS.filter((p) => p.category === cat).length
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`inline-flex items-center gap-2 border px-5 py-3 text-[13px] font-medium transition-all duration-200 ${
                  isActive
                    ? "border-primary/30 bg-primary/5 text-primary"
                    : "border-[#111A4A]/[0.06] bg-white text-[#7C7F88] hover:border-primary/20 hover:text-[#111A4A]"
                }`}
              >
                {cat === "Tous" ? "Toutes" : `${cat}s`}
                <span
                  className={`font-mono text-[10px] ${
                    isActive ? "text-primary/60" : "text-[#7C7F88]/40"
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* ── Divider ── */}
        <div className="mb-8 h-px bg-[#111A4A]/[0.06]" />

        {/* ── Content with AnimatePresence ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${animationKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured publications */}
            {featuredPubs.length > 0 && (
              <div className="mb-5 space-y-5">
                {featuredPubs.map((pub, i) => (
                  <FeaturedPublicationCard
                    key={pub.title}
                    pub={pub}
                    index={i}
                  />
                ))}
              </div>
            )}

            {/* Regular publications grid */}
            {paginatedPubs.length > 0 && (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {paginatedPubs.map((pub, i) => (
                  <PublicationCard key={pub.title} pub={pub} index={i} />
                ))}
              </div>
            )}

            {/* Empty state */}
            {totalFiltered === 0 && (
              <div className="border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.02] py-20 text-center">
                <p className="font-serif text-xl text-[#111A4A]/40">
                  Aucune publication dans cette catégorie
                </p>
                <p className="mt-2 text-sm text-[#7C7F88]/50">
                  Essayez un autre filtre ou consultez toutes nos publications.
                </p>
                <button
                  type="button"
                  onClick={() => handleCategoryChange("Tous")}
                  className="mt-6 inline-flex items-center gap-2 border border-[#111A4A]/[0.06] bg-white px-5 py-2.5 text-[12px] font-medium text-[#7C7F88] transition-all duration-200 hover:border-primary/20 hover:text-primary"
                >
                  Voir toutes les publications
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Pagination ── */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={regularPubs.length}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  )
}
