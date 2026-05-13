// src/components/ui/sectors-hero.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  Landmark,
  Factory,
  Building2,
  Briefcase,
  Globe2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react"

const SECTOR_PREVIEW = [
  {
    title: "Banque & Services Financiers",
    description: "Conformité, gouvernance, reporting et contrôle interne.",
    icon: Landmark,
    href: "#banque-services-financiers",
  },
  {
    title: "Mines & Ressources",
    description: "Audit, due diligence, fiscalité et sécurisation des flux.",
    icon: Factory,
    href: "#mines-ressources",
  },
  {
    title: "Industrie & Production",
    description: "Performance, structuration et maîtrise des risques.",
    icon: Building2,
    href: "#industrie-production",
  },
  {
    title: "Institutions & Holdings",
    description: "Supervision, conformité et accompagnement stratégique.",
    icon: Briefcase,
    href: "#institutions-holdings",
  },
]

export function SectorsHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover grayscale"
          style={{ opacity: 0.14 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/55 to-brand-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-transparent" />
      </div>

      {/* Precision grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: 0.025,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.28) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.28) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-40 top-20 z-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-16 z-0 h-[420px] w-[420px] rounded-full bg-primary/[0.04] blur-[120px]" />

      {/* Vertical accent line */}
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />

      <div className="relative z-10 w-full px-10 pb-16 pt-32 md:pt-40 lg:pb-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-end lg:gap-16">
          {/* Left editorial side */}
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Secteurs d’activité
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.4rem)] font-bold leading-[0.95] tracking-[-0.03em]">
              Une expertise sectorielle
              <br />
              <span className="text-white/75">
                à la hauteur des environnements
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                les plus exigeants.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-white/55 md:text-lg">
              CAAF SAS intervient auprès d’acteurs stratégiques opérant dans des
              secteurs à forte intensité réglementaire, financière et
              opérationnelle. Notre approche sectorielle permet d’apporter des
              recommandations plus fines, plus pertinentes et directement
              applicables au contexte de chaque organisation.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#secteurs"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                Explorer les secteurs
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                Échanger avec un expert
              </Link>
            </div>

            {/* Bottom editorial strip */}
            <div className="mt-12 grid grid-cols-1 gap-4 border-t border-white/[0.06] pt-6 sm:grid-cols-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                  Positionnement
                </p>
                <p className="mt-2 text-sm leading-7 text-white/45">
                  Interventions adaptées aux réalités terrain et aux standards
                  internationaux.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                  Lecture sectorielle
                </p>
                <p className="mt-2 text-sm leading-7 text-white/45">
                  Une compréhension concrète des dynamiques propres à chaque
                  industrie.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                  Engagement
                </p>
                <p className="mt-2 text-sm leading-7 text-white/45">
                  Des recommandations fiables, structurées et exécutables.
                </p>
              </div>
            </div>
          </div>

          {/* Right strategic panel */}
          <div className="lg:col-span-5">
            <div className="border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl">
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-serif text-xl text-white">
                    Domaines couverts
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                    Secteurs prioritaires
                  </p>
                </div>
              </div>

              {/* Sectors list */}
              <div className="space-y-3">
                {SECTOR_PREVIEW.map((sector) => (
                  <Link
                    key={sector.title}
                    href={sector.href}
                    className="group flex items-start justify-between gap-4 border border-white/[0.06] bg-white/[0.02] px-4 py-4 transition-all hover:border-primary/25 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.08] bg-white/[0.03] transition-colors group-hover:border-primary/20 group-hover:bg-primary/10">
                        <sector.icon
                          className="h-5 w-5 text-primary"
                          strokeWidth={1.7}
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          {sector.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-white/45">
                          {sector.description}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      size={16}
                      className="mt-1 shrink-0 text-white/25 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                    />
                  </Link>
                ))}
              </div>

              {/* Bottom stats */}
              <div className="mt-8 grid grid-cols-3 border-t border-white/[0.06] pt-6">
                <div className="pr-4">
                  <p className="font-serif text-3xl text-white">OHADA</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    maîtrise
                  </p>
                </div>
                <div className="border-l border-white/[0.06] px-4">
                  <p className="font-serif text-3xl text-white">IFRS</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    lecture
                  </p>
                </div>
                <div className="border-l border-white/[0.06] pl-4">
                  <p className="font-serif text-3xl text-white">RDC</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    ancrage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width bottom sector ribbon */}
        <div className="mt-14 border-t border-white/[0.06] pt-6">
          <div className="grid grid-cols-2 gap-4 text-sm text-white/35 md:grid-cols-4">
            <div>Banque & Services Financiers</div>
            <div>Mines & Ressources Naturelles</div>
            <div>Industrie & Production</div>
            <div>Institutions & Holdings</div>
          </div>
        </div>
      </div>
    </section>
  )
}