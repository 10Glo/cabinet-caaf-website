// src/components/ui/sectors-overview.tsx
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

type Sector = {
  name: string
  description: string
  highlights: string[]
  href: string
}

const SECTORS: Sector[] = [
  {
    name: "Banque & Services Financiers",
    description:
      "Audit de conformité BCC, contrôle interne bancaire, reporting IFRS et renforcement des dispositifs de gouvernance.",
    highlights: ["Conformité BCC", "Reporting IFRS", "Gouvernance"],
    href: "/secteurs/banque-services-financiers",
  },
  {
    name: "Mines & Ressources Naturelles",
    description:
      "Due diligence minière, optimisation fiscale, audit des concessions et sécurisation des flux de revenus.",
    highlights: ["Due diligence", "Fiscalité minière", "Concessions"],
    href: "/secteurs/mines-ressources-naturelles",
  },
  {
    name: "Industrie & Production",
    description:
      "Analyse des processus industriels, rationalisation des coûts, audit opérationnel et restructuration.",
    highlights: ["Processus", "Coûts", "Restructuration"],
    href: "/secteurs/industrie-production",
  },
  {
    name: "Institutions & Secteur Public",
    description:
      "Audit de projets financés, conformité aux exigences bailleurs de fonds, renforcement institutionnel.",
    highlights: ["Bailleurs", "Conformité", "Institutionnel"],
    href: "/secteurs/institutions-secteur-public",
  },
  {
    name: "Groupes & Holdings",
    description:
      "Consolidation des comptes, audit des filiales, évaluation des risques de groupe et harmonisation comptable.",
    highlights: ["Consolidation", "Filiales", "Risques"],
    href: "/secteurs/groupes-holdings",
  },
  {
    name: "Santé & Éducation",
    description:
      "Conformité réglementaire, audit des flux financiers, optimisation et accompagnement des structures.",
    highlights: ["Réglementaire", "Flux financiers", "Accompagnement"],
    href: "/secteurs/sante-education",
  },
]

function SectorItem({
  sector,
}: {
  sector: Sector
}) {
  return (
    <div className="group py-8">
      <h3 className="mb-2 text-lg font-medium text-[#111A4A] transition-colors duration-200 group-hover:text-brand-navy">
        {sector.name}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-[#7C7F88]">
        {sector.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {sector.highlights.map((tag, i) => (
          <span
            key={tag}
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C7F88]/50"
          >
            {tag}
            {i < sector.highlights.length - 1 && (
              <span className="ml-2 text-[#111A4A]/10">·</span>
            )}
          </span>
        ))}
      </div>

      <Link
        href={sector.href}
        className="group/link inline-flex items-center gap-1.5 text-[13px] font-medium text-primary transition-colors duration-200 hover:text-primary-active"
      >
        En savoir plus
        <ArrowRight
          size={13}
          className="transition-transform duration-200 group-hover/link:translate-x-0.5"
        />
      </Link>
    </div>
  )
}

export function SectorsOverview() {
  return (
    <section className="bg-canvas px-6 pb-20 pt-16 sm:px-10 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 inline-flex items-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Secteurs
            </span>
          </div>

          <h2 className="mb-6 max-w-2xl text-[40px] font-normal leading-tight tracking-tight text-[#111A4A]">
            Une expertise multi-sectorielle{" "}
            <span className="opacity-40">
              pour des enjeux diversifiés.
            </span>
          </h2>

          <p className="max-w-xl text-lg leading-6 text-[#111A4A] opacity-60">
            Notre équipe intervient dans les secteurs les plus exigeants de
            l&apos;économie congolaise et régionale, avec une lecture fine des
            contraintes propres à chaque environnement opérationnel.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#111A4A]/[0.06]" />

        {/* Sectors Grid — 2 columns, no cards */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {SECTORS.map((sector, i) => (
            <div
              key={sector.name}
              className={
                i % 2 === 0
                  ? "md:border-r md:border-[#111A4A]/[0.06] md:pr-10"
                  : "md:pl-10"
              }
            >
              <div
                className={
                  i < SECTORS.length - 2
                    ? "border-b border-[#111A4A]/[0.06]"
                    : ""
                }
              >
                <SectorItem sector={sector} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="h-px bg-[#111A4A]/[0.06]" />

        {/* CTAs — left-aligned */}
        <div className="mt-14 flex flex-col items-start gap-6 lg:mt-16">
          <Link
            href="/secteurs"
            className="btn-primary group relative inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-9 py-4 text-[14px] font-semibold tracking-wide text-white"
          >
            <span className="relative z-10">
              Découvrir tous nos secteurs d&apos;intervention
            </span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <p className="text-sm text-[#7C7F88]">
            Votre secteur n&apos;est pas listé ?{" "}
            <Link
              href="#contact"
              className="group/link inline-flex items-center gap-1.5 font-medium text-primary transition-colors duration-200 hover:text-primary-active"
            >
              Contactez-nous pour une intervention sur mesure
              <ArrowRight
                size={13}
                className="transition-transform duration-200 group-hover/link:translate-x-0.5"
              />
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
