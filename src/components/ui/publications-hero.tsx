// src/components/ui/publications-hero.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  FileText,
  BarChart3,
  Lightbulb,
  ChevronRight,
} from "lucide-react"

const PUBLICATION_TYPES = [
  {
    title: "Rapports",
    description: "Analyses sectorielles et bilans annuels",
    icon: FileText,
  },
  {
    title: "Analyses",
    description: "Notes techniques et veille réglementaire",
    icon: BarChart3,
  },
  {
    title: "Guides Pratiques",
    description: "Méthodologies et bonnes pratiques",
    icon: Lightbulb,
  },
]

export function PublicationsHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover grayscale"
          style={{ opacity: 0.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/65 to-brand-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-transparent" />
      </div>

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

      <div className="pointer-events-none absolute -right-40 top-20 z-0 h-[520px] w-[520px] rounded-full bg-primary/[0.06] blur-[160px]" />
      <div className="pointer-events-none absolute -left-40 bottom-16 z-0 h-[420px] w-[420px] rounded-full bg-primary/[0.04] blur-[120px]" />
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />

      <div className="relative z-10 w-full px-10 pb-16 pt-32 md:pt-40 lg:pb-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Publications · Ressources professionnelles
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.4rem)] font-bold leading-[0.95] tracking-[-0.03em]">
              Rapports, analyses
              <br />
              <span className="text-white/75">et guides pratiques</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                pour les décideurs.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-white/55 md:text-lg">
              Nos publications reflètent notre expertise sectorielle et notre
              veille réglementaire permanente. Elles sont conçues pour apporter
              aux dirigeants, aux DAF et aux comités d&apos;audit une lecture
              claire des enjeux techniques, fiscaux et de conformité.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#publications-list"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                Explorer les publications
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                S&apos;abonner aux publications
                <ChevronRight size={16} className="opacity-70" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-serif text-xl text-white">
                    Types de publications
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                    Ressources du cabinet
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {PUBLICATION_TYPES.map((type) => (
                  <div
                    key={type.title}
                    className="flex items-center gap-4 border border-white/[0.06] bg-white/[0.02] px-4 py-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.08] bg-white/[0.03]">
                      <type.icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {type.title}
                      </p>
                      <p className="text-xs text-white/45">
                        {type.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 border-t border-white/[0.06] pt-6">
                <div className="pr-4">
                  <p className="font-serif text-3xl text-white">25+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    publications
                  </p>
                </div>
                <div className="border-l border-white/[0.06] px-4">
                  <p className="font-serif text-3xl text-white">3</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    catégories
                  </p>
                </div>
                <div className="border-l border-white/[0.06] pl-4">
                  <p className="font-serif text-3xl text-white">2024</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    dernière mise à jour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}