// src/components/ui/sectors-overview.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  Landmark,
  Factory,
  Building2,
  Globe2,
  Briefcase,
  Hospital,
  type LucideIcon,
} from "lucide-react"

type Sector = {
  name: string
  icon: LucideIcon
  description: string
  highlights: string[]
}

const SECTORS: Sector[] = [
  {
    name: "Banque & Services Financiers",
    icon: Landmark,
    description:
      "Audit de conformité BCC, contrôle interne bancaire, reporting IFRS et renforcement des dispositifs de gouvernance.",
    highlights: ["Conformité BCC", "Reporting IFRS", "Gouvernance"],
  },
  {
    name: "Mines & Ressources Naturelles",
    icon: Factory,
    description:
      "Due diligence minière, optimisation fiscale, audit des concessions et sécurisation des flux de revenus.",
    highlights: ["Due diligence", "Fiscalité minière", "Concessions"],
  },
  {
    name: "Industrie & Production",
    icon: Building2,
    description:
      "Analyse des processus industriels, rationalisation des coûts, audit opérationnel et restructuration.",
    highlights: ["Processus", "Coûts", "Restructuration"],
  },
  {
    name: "Institutions & Secteur Public",
    icon: Globe2,
    description:
      "Audit de projets financés, conformité aux exigences bailleurs de fonds, renforcement institutionnel.",
    highlights: ["Bailleurs", "Conformité", "Institutionnel"],
  },
  {
    name: "Groupes & Holdings",
    icon: Briefcase,
    description:
      "Consolidation des comptes, audit des filiales, évaluation des risques de groupe et harmonisation comptable.",
    highlights: ["Consolidation", "Filiales", "Risques"],
  },
  {
    name: "Santé & Éducation",
    icon: Hospital,
    description:
      "Conformité réglementaire, audit des flux financiers, optimisation et accompagnement des structures.",
    highlights: ["Réglementaire", "Flux financiers", "Accompagnement"],
  },
]

export function SectorsOverview() {
  return (
    <section className="border-t border-hairline bg-white px-10 py-section">
      <div className="w-full">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Secteurs
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Une expertise multi-sectorielle
              <br />
              <span className="text-ink/40">pour des enjeux diversifiés.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            Notre équipe intervient dans les secteurs les plus exigeants de
            l'économie congolaise et régionale, avec une lecture fine des
            contraintes propres à chaque environnement opérationnel.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SECTORS.map((sector) => (
            <div
              key={sector.name}
              className="group border border-hairline bg-white p-8 transition-colors hover:bg-surface-soft/40"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                  <sector.icon
                    className="h-6 w-6 text-primary"
                    strokeWidth={1.7}
                  />
                </div>

                <ArrowRight
                  size={16}
                  className="text-ink/20 transition-all group-hover:translate-x-1 group-hover:text-primary"
                />
              </div>

              <h3 className="font-serif text-xl text-brand-navy md:text-2xl">
                {sector.name}
              </h3>

              <p className="mt-3 text-sm leading-7 text-ink/55">
                {sector.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {sector.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="border border-hairline bg-canvas px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-hairline bg-canvas px-8 py-5 md:flex-row">
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-primary" strokeWidth={1.7} />
            <p className="text-sm text-ink/60">
              Votre secteur n&apos;est pas listé ?{" "}
              <span className="font-medium text-ink/80">
                Contactez-nous pour une intervention sur mesure.
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