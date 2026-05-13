// src/components/ui/sectors-technical-expertise.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  Landmark,
  Scale,
  BookOpen,
  FileCheck2,
  type LucideIcon,
} from "lucide-react"

type ExpertiseItem = {
  title: string
  description: string
  icon: LucideIcon
  tags: string[]
}

const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    title: "Conformité régionale",
    description:
      "Navigation experte des normes comptables OHADA et des codes fiscaux locaux (DGI/DGRAD) pour les multinationales et les groupes opérant en RDC.",
    icon: Globe2,
    tags: ["OHADA", "DGI", "DGRAD"],
  },
  {
    title: "Maîtrise des risques",
    description:
      "Fonctions d'audit interne spécialisées, conçues pour identifier et neutraliser les risques opérationnels dans les marchés frontières.",
    icon: ShieldCheck,
    tags: ["Audit interne", "Cartographie", "Remédiation"],
  },
  {
    title: "Intégration IFAC",
    description:
      "Alignement complet avec les normes de la Fédération Internationale des Comptables, garantissant que vos rapports locaux sont de niveau international.",
    icon: Scale,
    tags: ["ISA", "IFRS", "IFAC"],
  },
]

export function SectorsTechnicalExpertise() {
  return (
    <section className="border-t border-hairline bg-surface-soft/30 px-10 py-section">
      <div className="w-full">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Expertise technique
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Les fondamentaux
              <br />
              <span className="text-ink/40">de notre rigueur technique.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            Au-delà de la lecture sectorielle, notre équipe s&apos;appuie sur
            une maîtrise technique approfondie des référentiels comptables,
            réglementaires et d&apos;audit applicables en RDC et dans la région.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {EXPERTISE_ITEMS.map((item, index) => (
            <article
              key={item.title}
              className={
                index === 1
                  ? "group border border-white/10 bg-surface-dark p-8 md:p-10"
                  : "group border border-hairline bg-white p-8 md:p-10"
              }
            >
              {/* Icon */}
              <div
                className={
                  index === 1
                    ? "mb-6 flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5"
                    : "mb-6 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5"
                }
              >
                <item.icon
                  className="h-6 w-6 text-primary"
                  strokeWidth={1.7}
                />
              </div>

              {/* Title */}
              <h3
                className={
                  index === 1
                    ? "font-serif text-2xl text-white"
                    : "font-serif text-2xl text-brand-navy"
                }
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={
                  index === 1
                    ? "mt-4 text-sm leading-7 text-white/55"
                    : "mt-4 text-sm leading-7 text-ink/55"
                }
              >
                {item.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={
                      index === 1
                        ? "border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/40"
                        : "border border-hairline bg-canvas px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/40"
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent on hover */}
              <div className="mt-6 h-[2px] w-0 bg-primary/40 transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Certifications strip */}
        <div className="mt-10 border border-hairline bg-white p-8 md:p-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              {[
                {
                  badge: "Certifié",
                  title: "IFAC",
                  description: "Standards internationaux d'audit",
                  icon: Globe2,
                },
                {
                  badge: "Accrédité",
                  title: "ONEC",
                  description: "Ordre National des Experts-Comptables",
                  icon: Landmark,
                },
                {
                  badge: "Conforme",
                  title: "OHADA",
                  description: "Référentiel comptable régional",
                  icon: BookOpen,
                },
              ].map((cert, i) => (
                <div
                  key={cert.title}
                  className="flex items-center gap-4"
                >
                  {i > 0 && (
                    <div className="hidden h-10 w-px bg-hairline md:block" />
                  )}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/5">
                      <cert.icon
                        className="h-5 w-5 text-primary"
                        strokeWidth={1.7}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                          {cert.badge}
                        </span>
                        <span className="font-serif text-lg text-brand-navy">
                          {cert.title}
                        </span>
                      </div>
                      <p className="text-xs text-ink/40">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              En savoir plus
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}