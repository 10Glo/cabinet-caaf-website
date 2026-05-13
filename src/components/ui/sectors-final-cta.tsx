// src/components/ui/sectors-final-cta.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Shield,
  CheckCircle2,
  Pickaxe,
  Landmark,
  Factory,
  Radio,
  Globe2,
  Building2,
  Briefcase,
  Hospital,
  type LucideIcon,
} from "lucide-react"

const SECTOR_ICONS: { label: string; icon: LucideIcon }[] = [
  { label: "Mines", icon: Pickaxe },
  { label: "Banque", icon: Landmark },
  { label: "Télécom", icon: Radio },
  { label: "Industrie", icon: Factory },
  { label: "ONG", icon: Globe2 },
  { label: "Public", icon: Building2 },
  { label: "Holdings", icon: Briefcase },
  { label: "Santé", icon: Hospital },
]

const COMMITMENTS = [
  "Réponse qualifiée sous 24h",
  "Interlocuteur senior dès le premier échange",
  "Proposition adaptée à votre secteur",
  "Confidentialité absolue garantie",
]

export function SectorsFinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-hairline bg-surface-dark px-10 py-section">
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          opacity: 0.02,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -right-40 top-20 z-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-20 z-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />

      {/* Vertical accent */}
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* ── Left column ── */}
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Votre secteur, notre expertise
              </span>
            </div>

            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-white md:text-5xl">
              Quel que soit votre secteur,
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                nous avons l&apos;expertise
              </span>
              <br />
              <span className="text-white/75">pour vous accompagner.</span>
            </h2>

            <p className="mt-8 max-w-xl text-[17px] leading-[1.8] text-white/50">
              Notre approche sectorielle nous permet de mobiliser les bonnes
              compétences, de comprendre vos enjeux spécifiques et de formuler
              des recommandations immédiatement actionnables. Parlons de votre
              contexte.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                <Calendar className="h-4 w-4" />
                Planifier un entretien sectoriel
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="tel:+243000000000"
                className="group inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Appeler directement
              </Link>
            </div>

            {/* Commitments */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {COMMITMENTS.map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-primary/70"
                    strokeWidth={1.7}
                  />
                  <span className="text-sm text-white/45">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="space-y-5 lg:col-span-5">
            {/* Sectors covered card */}
            <div className="border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
                  <Shield
                    className="h-6 w-6 text-primary"
                    strokeWidth={1.7}
                  />
                </div>
                <div>
                  <p className="font-serif text-xl text-white">
                    Secteurs couverts
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                    Expertise multi-sectorielle
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {SECTOR_ICONS.map((sector) => (
                  <div
                    key={sector.label}
                    className="flex items-center gap-3 border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-colors hover:border-primary/20 hover:bg-white/[0.04]"
                  >
                    <sector.icon
                      className="h-4 w-4 text-primary"
                      strokeWidth={1.7}
                    />
                    <span className="text-sm text-white/60">
                      {sector.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 border-t border-white/[0.06] pt-6">
                <div className="pr-4">
                  <p className="font-serif text-3xl text-white">500+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    missions
                  </p>
                </div>
                <div className="border-l border-white/[0.06] px-4">
                  <p className="font-serif text-3xl text-white">8</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    secteurs
                  </p>
                </div>
                <div className="border-l border-white/[0.06] pl-4">
                  <p className="font-serif text-3xl text-white">30+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    années
                  </p>
                </div>
              </div>
            </div>

            {/* Quick contact card */}
            <div className="border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-6 bg-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                  Contact direct
                </span>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:contact@caaf-sas.com"
                  className="group flex items-center gap-3 border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-colors hover:border-primary/20 hover:bg-white/[0.04]"
                >
                  <Mail
                    className="h-4 w-4 text-white/40 transition-colors group-hover:text-primary"
                    strokeWidth={1.6}
                  />
                  <span className="text-sm text-white/60 transition-colors group-hover:text-white/80">
                    contact@caaf-sas.com
                  </span>
                </a>

                <a
                  href="tel:+243000000000"
                  className="group flex items-center gap-3 border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-colors hover:border-primary/20 hover:bg-white/[0.04]"
                >
                  <Phone
                    className="h-4 w-4 text-white/40 transition-colors group-hover:text-primary"
                    strokeWidth={1.6}
                  />
                  <span className="text-sm text-white/60 transition-colors group-hover:text-white/80">
                    +243 00 000 0000
                  </span>
                </a>
              </div>

              {/* Availability indicator */}
              <div className="mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-4">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-medium text-white/40">
                  Direction disponible — réponse sous 24h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}