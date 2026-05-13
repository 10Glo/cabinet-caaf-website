"use client"

import Link from "next/link"
import {
  ArrowRight,
  Landmark,
  Factory,
  Pickaxe,
  Building2,
  Leaf,
  HeartPulse,
  GraduationCap,
  Globe2,
} from "lucide-react"

const SECTORS = [
  {
    icon: Pickaxe,
    title: "Mines & Ressources naturelles",
    description:
      "Certification des comptes de groupes miniers, audits de filiales, conformité aux exigences des maisons-mères et des régulateurs du secteur extractif.",
    tags: ["Katanga", "ITIE", "Joint-ventures"],
    featured: true,
  },
  {
    icon: Landmark,
    title: "Banque & Services financiers",
    description:
      "Audit des établissements de crédit, microfinance et assurances — en conformité avec les exigences de la Banque Centrale du Congo et les normes prudentielles.",
    tags: ["BCC", "Bâle", "Microfinance"],
    featured: true,
  },
  {
    icon: Factory,
    title: "Industrie & Production",
    description:
      "Accompagnement des entreprises industrielles dans la certification de leurs comptes et l'optimisation de leurs processus de reporting financier.",
    tags: ["Manufacturing", "Agroalimentaire", "BTP"],
    featured: false,
  },
  {
    icon: Globe2,
    title: "Organisations internationales & ONG",
    description:
      "Audits de projets financés par des bailleurs internationaux, certification des fonds et conformité aux procédures des principaux donateurs.",
    tags: ["Banque Mondiale", "UE", "USAID"],
    featured: false,
  },
  {
    icon: Building2,
    title: "Groupes & Holdings",
    description:
      "Consolidation, audit des comptes combinés et certification statutaire pour les structures multi-entités opérant en RDC et dans la sous-région.",
    tags: ["Consolidation", "IFRS", "Multi-entités"],
    featured: false,
  },
  {
    icon: HeartPulse,
    title: "Santé & Secteur social",
    description:
      "Audit des structures de santé, hôpitaux, mutuelles et programmes sociaux — avec une attention particulière à la traçabilité des financements.",
    tags: ["Hôpitaux", "Mutuelles", "Programmes"],
    featured: false,
  },
  {
    icon: Leaf,
    title: "Environnement & Développement durable",
    description:
      "Vérification des données financières liées aux programmes environnementaux, fonds climat et initiatives ESG dans le contexte congolais.",
    tags: ["ESG", "Fonds climat", "REDD+"],
    featured: false,
  },
  {
    icon: GraduationCap,
    title: "Éducation & Recherche",
    description:
      "Certification des comptes d'universités, centres de recherche et programmes éducatifs financés par des partenaires nationaux et internationaux.",
    tags: ["Universités", "Recherche", "Bailleurs"],
    featured: false,
  },
]

export function AuditFinancierSecteurs() {
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
            Une expertise sectorielle
            <br />
            qui fait la différence.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            L'audit financier ne se pratique pas de la même manière dans une
            banque, une mine ou une ONG. Notre connaissance approfondie de chaque
            secteur nous permet d'adapter nos procédures, notre lecture des
            risques et nos recommandations.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Featured sectors — large cards */}
          {SECTORS.filter((s) => s.featured).map((sector) => {
            const Icon = sector.icon

            return (
              <article
                key={sector.title}
                className="group relative overflow-hidden border border-hairline bg-canvas p-8 transition-colors hover:bg-canvas/80 md:col-span-6 md:p-10"
              >
                {/* Watermark */}
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

                  {/* Tags */}
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

          {/* Remaining sectors — compact grid */}
          <div className="border border-hairline bg-surface-dark p-8 md:col-span-12 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">
                Autres secteurs d'intervention
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

                      {/* Tags inline */}
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
              Votre secteur n'est pas listé ?{" "}
              <span className="text-brand-navy">
                Nous intervenons dans tous les domaines d'activité.
              </span>
            </p>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              Échangeons
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