// src/components/ui/references-hero.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Building2,
  Landmark,
  Factory,
  Globe2,
  Briefcase,
} from "lucide-react"

const TRUST_STATS = [
  { value: "150+", label: "clients accompagnés" },
  { value: "500+", label: "missions réalisées" },
  { value: "8", label: "secteurs couverts" },
  { value: "30+", label: "années d'exercice" },
]

const SECTOR_TAGS = [
  { label: "Banque", icon: Landmark },
  { label: "Mines", icon: Factory },
  { label: "Industrie", icon: Building2 },
  { label: "ONG", icon: Globe2 },
  { label: "Holdings", icon: Briefcase },
]

export function ReferencesHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover grayscale"
          style={{ opacity: 0.12 }}
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
                Références · Clients & Partenaires
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.4rem)] font-bold leading-[0.95] tracking-[-0.03em]">
              La confiance
              <br />
              <span className="text-white/75">des acteurs qui comptent</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                en RDC et dans la région.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-white/55 md:text-lg">
              Depuis plus de 30 ans, des institutions financières, des groupes
              miniers, des opérateurs industriels et des organisations
              internationales nous confient leurs missions les plus sensibles.
              Cette confiance est notre meilleure référence.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#references-grid"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                Voir nos références
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                Demander des références sectorielles
                <ChevronRight size={16} className="opacity-70" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/[0.06] pt-6">
              <span className="mr-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                Secteurs
              </span>
              {SECTOR_TAGS.map((tag) => (
                <div
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium tracking-wide text-white/40"
                >
                  <tag.icon className="h-3 w-3 text-primary/70" strokeWidth={1.7} />
                  {tag.label}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-serif text-xl text-white">
                    Notre empreinte
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                    Chiffres clés
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {TRUST_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-white/[0.06] bg-white/[0.02] px-4 py-4"
                  >
                    <p className="font-serif text-3xl text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-xs font-medium text-white/40">
                    Missions actives en cours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}