// src/components/ui/services-hero.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Scale,
  Search,
  BarChart3,
  FileCheck2,
  Globe2,
} from "lucide-react"

const SERVICES_PREVIEW = [
  {
    title: "Audit & Assurance",
    description:
      "Certification, audit légal, audit interne et renforcement du contrôle.",
    icon: ShieldCheck,
    href: "#audit-assurance",
  },
  {
    title: "Conseil Fiscal",
    description:
      "Structuration, conformité et sécurisation des positions fiscales.",
    icon: Scale,
    href: "#conseil-fiscal",
  },
  {
    title: "Due Diligence",
    description:
      "Analyses préalables aux investissements, acquisitions et restructurations.",
    icon: Search,
    href: "#due-diligence",
  },
  {
    title: "Advisory & Transformation",
    description:
      "Restructuration, performance, reporting et pilotage stratégique.",
    icon: BarChart3,
    href: "#advisory-transformation",
  },
]

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover grayscale"
          style={{ opacity: 0.13 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/75 via-brand-navy/60 to-brand-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-transparent" />
      </div>

      {/* Precision grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: 0.025,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -right-40 top-20 z-0 h-[520px] w-[520px] rounded-full bg-primary/[0.06] blur-[160px]" />
      <div className="pointer-events-none absolute -left-40 bottom-16 z-0 h-[420px] w-[420px] rounded-full bg-primary/[0.04] blur-[120px]" />

      {/* Vertical accent line */}
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />

      <div className="relative z-10 w-full px-10 pb-16 pt-32 md:pt-40 lg:pb-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-end lg:gap-16">
          {/* Left editorial block */}
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Nos services · Excellence professionnelle
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.03em]">
              Des solutions d’audit
              <br />
              <span className="text-white/75">et de conseil</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                conçues pour les environnements complexes.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-white/55 md:text-lg">
              CAAF SAS accompagne les entreprises, groupes et institutions dans
              leurs enjeux d’audit, de fiscalité, de conformité et de
              transformation. Notre promesse : allier rigueur technique,
              compréhension du terrain et standards internationaux.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#services-grid"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                Explorer nos services
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                Demander un échange
                <ChevronRight size={16} className="opacity-70" />
              </Link>
            </div>

            {/* Bottom editorial strip */}
            <div className="mt-12 grid grid-cols-1 gap-4 border-t border-white/[0.06] pt-6 sm:grid-cols-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                  Positionnement
                </p>
                <p className="mt-2 text-sm leading-7 text-white/45">
                  Des interventions calibrées selon vos enjeux de conformité,
                  de gouvernance et de performance.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                  Référentiels
                </p>
                <p className="mt-2 text-sm leading-7 text-white/45">
                  OHADA, IFRS, ISA et bonnes pratiques internationales,
                  appliqués avec discernement.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                  Résultat attendu
                </p>
                <p className="mt-2 text-sm leading-7 text-white/45">
                  Une lecture claire des risques, des obligations et des leviers
                  d’amélioration.
                </p>
              </div>
            </div>
          </div>

          {/* Right strategic panel */}
          <div className="lg:col-span-5">
            <div className="border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
                  <FileCheck2 className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-serif text-xl text-white">
                    Domaines d’intervention
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                    Vue d’ensemble
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {SERVICES_PREVIEW.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group flex items-start justify-between gap-4 border border-white/[0.06] bg-white/[0.02] px-4 py-4 transition-all hover:border-primary/25 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.08] bg-white/[0.03] transition-colors group-hover:border-primary/20 group-hover:bg-primary/10">
                        <service.icon
                          className="h-5 w-5 text-primary"
                          strokeWidth={1.7}
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          {service.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-white/45">
                          {service.description}
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

              {/* Bottom markers */}
              <div className="mt-8 grid grid-cols-3 border-t border-white/[0.06] pt-6">
                <div className="pr-4">
                  <p className="font-serif text-3xl text-white">OHADA</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    conformité
                  </p>
                </div>
                <div className="border-l border-white/[0.06] px-4">
                  <p className="font-serif text-3xl text-white">IFRS</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    reporting
                  </p>
                </div>
                <div className="border-l border-white/[0.06] pl-4">
                  <p className="font-serif text-3xl text-white">ISA</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    audit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width bottom ribbon */}
        <div className="mt-14 border-t border-white/[0.06] pt-6">
          <div className="grid grid-cols-2 gap-4 text-sm text-white/35 md:grid-cols-4">
            <div>Audit & Assurance</div>
            <div>Conseil Fiscal</div>
            <div>Due Diligence</div>
            <div>Advisory & Transformation</div>
          </div>
        </div>
      </div>
    </section>
  )
}