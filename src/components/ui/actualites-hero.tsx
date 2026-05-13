// src/components/actualites/actualites-hero.tsx
"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function ActualitesHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy/90 to-brand-navy" />
      </div>

      {/* Grid pattern */}
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

      <div className="pointer-events-none absolute -right-40 top-20 z-0 h-130 w-130 rounded-full bg-primary/6 blur-[160px]" />
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-linar-to-b from-transparent via-white/6 to-transparent lg:block" />

      <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-10 md:pt-40 lg:pb-20">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          {/* <nav
            aria-label="Fil d'Ariane"
            className="mb-8 flex items-center gap-2 text-[12px] text-white/40"
          >
            <Link href="/" className="transition-colors hover:text-white/60">
              Accueil
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/60">Actualités</span>
          </nav> */}

          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Actualités & Insights
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            Analyses, décryptages
            <br />
            <span className="bg-linear-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
              et veille professionnelle.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-white/55 md:text-lg">
            Fiscalité congolaise, normes OHADA, enjeux sectoriels, bonnes
            pratiques d&apos;audit — nos experts partagent leur lecture de
            l&apos;actualité pour vous aider à anticiper et à décider.
          </p>

          {/* Stats strip */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/6 pt-6 md:grid-cols-4">
            {[
              { value: "12", label: "Articles publiés" },
              { value: "4", label: "Thématiques" },
              { value: "Mensuel", label: "Rythme de publication" },
              { value: "Expert", label: "Contenu par nos associés" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl text-white">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}