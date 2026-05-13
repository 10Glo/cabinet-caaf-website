// src/components/ui/activities-overview.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  ShieldCheck,
  Scale,
  BarChart3,
  Search,
  Landmark,
  FileCheck2,
  Factory,
  Building2,
  Briefcase,
} from "lucide-react"

const ACTIVITIES = [
  {
    title: "Audit & Assurance",
    description:
      "Examen indépendant et rigoureux des états financiers afin de renforcer la transparence, la conformité et la confiance des investisseurs.",
    href: "#audit-financier",
    icon: ShieldCheck,
    size: "large",
    tone: "light",
  },
  {
    title: "Conseil Fiscal",
    description:
      "Structuration, conformité et optimisation fiscale adaptées aux réalités réglementaires locales et internationales.",
    href: "#conseil-fiscal",
    icon: Scale,
    size: "small",
    tone: "soft",
  },
  {
    title: "Financial Advisory",
    description:
      "Valorisation, restructuration, accompagnement des transactions et due diligence pour les opérations stratégiques.",
    href: "#financial-advisory",
    icon: BarChart3,
    size: "wide",
    tone: "dark",
  },
  {
    title: "Due Diligence",
    description:
      "Analyses approfondies préalables aux acquisitions, investissements et restructurations.",
    href: "#due-diligence",
    icon: Search,
    size: "small",
    tone: "light",
  },
]

const SECTORS = [
  { label: "Banque & Services Financiers", icon: Landmark },
  { label: "Industrie & Production", icon: Factory },
  { label: "Mines & Ressources", icon: Building2 },
  { label: "Groupes & Holdings", icon: Briefcase },
]

function SectionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
    >
      {children}
      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}

export function ActivitiesOverview() {
  return (
    <section className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* ── Heading ── */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Activités clés
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
            Des expertises structurées
            <br />
            pour des décisions plus sûres.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            CAAF SAS accompagne les entreprises, institutions et groupes dans
            leurs enjeux d’audit, de conformité, de fiscalité et de
            transformation financière. Notre approche conjugue exigence
            méthodologique, lecture sectorielle et vision stratégique.
          </p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Audit & Assurance */}
          <article className="group relative overflow-hidden border border-hairline bg-white p-8 md:col-span-8 md:p-10">
            <div className="absolute right-0 top-0 p-8 opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.09]">
              <ShieldCheck className="h-24 w-24 text-brand-navy md:h-28 md:w-28" strokeWidth={1} />
            </div>

            <div className="relative z-10 max-w-xl">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={1.7} />
              </div>

              <h3 className="font-serif text-2xl text-brand-navy md:text-3xl">
                Audit & Assurance
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-ink/60 md:text-base">
                Examen indépendant et rigoureux des états financiers afin de
                renforcer la transparence, la conformité et la confiance des
                investisseurs, partenaires financiers et parties prenantes.
              </p>

              <div className="mt-8">
                <SectionLink href="#audit-financier">
                  Explorer l’activité d’audit
                </SectionLink>
              </div>
            </div>
          </article>

          {/* Conseil Fiscal */}
          <article className="group border border-hairline bg-surface-card p-8 md:col-span-4 md:p-10">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-white/70">
              <Scale className="h-6 w-6 text-primary" strokeWidth={1.7} />
            </div>

            <h3 className="font-serif text-2xl text-brand-navy">
              Conseil Fiscal
            </h3>

            <p className="mt-4 text-sm leading-7 text-ink/60">
              Structuration, conformité et optimisation fiscale adaptées aux
              réalités réglementaires locales et internationales.
            </p>

            <div className="mt-8">
              <SectionLink href="#conseil-fiscal">
                Voir les détails
              </SectionLink>
            </div>
          </article>

          {/* Advisory dark card */}
          <article className="group border border-white/10 bg-surface-dark p-8 md:col-span-8 md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_0.9fr]">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5">
                  <BarChart3 className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>

                <h3 className="font-serif text-2xl text-white md:text-3xl">
                  Financial Advisory
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
                  Valorisation, restructuration, accompagnement des transactions
                  et due diligence pour les opérations stratégiques, notamment
                  dans les secteurs bancaire, industriel et minier.
                </p>

                <div className="mt-8">
                  <Link
                    href="#financial-advisory"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-all hover:gap-3"
                  >
                    Advisory Services
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              {/* right side visual / sectors */}
              <div className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-2">
                  <FileCheck2 className="h-4 w-4 text-primary" strokeWidth={1.7} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
                    Secteurs d’intervention
                  </span>
                </div>

                <div className="space-y-3">
                  {SECTORS.map((sector) => (
                    <div
                      key={sector.label}
                      className="flex items-center gap-3 border border-white/8 bg-white/[0.03] px-4 py-3"
                    >
                      <sector.icon className="h-4 w-4 text-primary" strokeWidth={1.6} />
                      <span className="text-sm text-white/70">{sector.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Due Diligence */}
          <article className="group border border-hairline bg-white p-8 md:col-span-4 md:p-10">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
              <Search className="h-6 w-6 text-primary" strokeWidth={1.7} />
            </div>

            <h3 className="font-serif text-2xl text-brand-navy">
              Due Diligence
            </h3>

            <p className="mt-4 text-sm leading-7 text-ink/60">
              Analyses approfondies préalables aux acquisitions, investissements
              et opérations de restructuration, avec une lecture claire des
              risques et des opportunités.
            </p>

            <div className="mt-8">
              <SectionLink href="#due-diligence">
                En savoir plus
              </SectionLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}