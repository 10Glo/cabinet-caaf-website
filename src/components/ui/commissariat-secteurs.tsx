
"use client"

import Link from "next/link"
import {
  ArrowRight,
  Landmark,
  Factory,
  Pickaxe,
  Building2,
  Globe2,
  Leaf,
  HeartPulse,
  GraduationCap,
} from "lucide-react"

const SECTORS = [
  {
    icon: Pickaxe,
    title: "Mines & Ressources naturelles",
    description:
      "Mandats de commissariat pour des groupes miniers, sociétés d'exploration et sous-traitants du secteur extractif — avec reporting dual OHADA et IFRS.",
    tags: ["Katanga", "ITIE", "Reporting groupe"],
    featured: true,
  },
  {
    icon: Landmark,
    title: "Banque & Services financiers",
    description:
      "Mandats auprès d'établissements bancaires, institutions de microfinance et compagnies d'assurance — en conformité avec les exigences prudentielles de la BCC.",
    tags: ["BCC", "Prudentiel", "Microfinance"],
    featured: true,
  },
  {
    icon: Factory,
    title: "Industrie & Production",
    description:
      "Commissariat pour les entreprises manufacturières, agroalimentaires et de BTP opérant en RDC.",
    tags: ["Manufacturing", "Agroalimentaire", "BTP"],
    featured: false,
  },
  {
    icon: Globe2,
    title: "Organisations internationales",
    description:
      "Mandats de certification pour les bureaux pays d'organisations internationales et ONG présentes en RDC.",
    tags: ["ONU", "Banque Mondiale", "ONG"],
    featured: false,
  },
  {
    icon: Building2,
    title: "Groupes & Holdings",
    description:
      "Commissariat aux comptes consolidés et statutaires pour les structures multi-entités et holdings.",
    tags: ["Consolidation", "Multi-entités", "OHADA"],
    featured: false,
  },
  {
    icon: HeartPulse,
    title: "Santé & Secteur social",
    description:
      "Certification des comptes d'hôpitaux, mutuelles et programmes sociaux avec traçabilité des financements.",
    tags: ["Hôpitaux", "Mutuelles", "Fonds sociaux"],
    featured: false,
  },
  {
    icon: Leaf,
    title: "Environnement & ESG",
    description:
      "Commissariat pour les entités portant des programmes environnementaux, fonds climat et initiatives durables.",
    tags: ["ESG", "Fonds climat", "REDD+"],
    featured: false,
  },
  {
    icon: GraduationCap,
    title: "Éducation & Recherche",
    description:
      "Mandats pour les universités, centres de recherche et établissements d'enseignement supérieur.",
    tags: ["Universités", "Recherche", "Bailleurs"],
    featured: false,
  },
]

export function CommissariatSecteurs() {
  return (
    <section className="bg-white px-10 py-section">
      <div className="w-full">
        {/* ── Heading ── */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Secteurs d'intervention
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
            Des mandats dans les secteurs
            <br />
            les plus structurants du pays.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            Chaque secteur a ses spécificités comptables, réglementaires et
            opérationnelles. Notre expérience multi-sectorielle nous permet
            d&apos;adapter nos procédures d&apos;audit au contexte réel de
            chaque mandat.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Featured sectors */}
          {SECTORS.filter((s) => s.featured).map((sector) => {
            const Icon = sector.icon

            return (
              <article
                key={sector.title}
                className="group relative overflow-hidden border border-hairline bg-canvas p-8 transition-colors hover:bg-canvas/80 md:col-span-6 md:p-10"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 text-brand-navy opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06]">
                  <Icon className="h-40 w-40" strokeWidth={0.6} />
                </div>

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-white text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>

                  <h3 className="font-serif text-2xl text-brand-navy md:text-3xl">
                    {sector.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-ink/60 md:text-base">
                    {sector.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {sector.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center border border-primary/15 bg-primary/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}

          {/* Remaining sectors — dark panel */}
          <div className="border border-hairline bg-surface-dark p-8 md:col-span-12 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">
                Autres secteurs couverts
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SECTORS.filter((s) => !s.featured).map((sector) => {
                const Icon = sector.icon

                return (
                  <div
                    key={sector.title}
                    className="group flex items-start gap-4 border border-white/[0.06] bg-white/[0.03] p-5 transition-colors hover:border-white/[0.12] hover:bg-white/[0.06]"
                  >
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-[15px] font-semibold leading-snug text-white/90">
                        {sector.title}
                      </h4>
                      <p className="mt-2 text-[13px] leading-6 text-white/40">
                        {sector.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {sector.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center bg-white/[0.06] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.06em] text-white/35"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA strip */}
          <div className="flex items-center justify-between border border-hairline bg-white p-8 md:col-span-12 md:px-10">
            <p className="text-sm text-ink/50 md:text-base">
              Votre secteur n'apparaît pas ?{" "}
              <span className="text-brand-navy">
                Nous acceptons des mandats dans tous les secteurs d'activité.
              </span>
            </p>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              Nous contacter
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
