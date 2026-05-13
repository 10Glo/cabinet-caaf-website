// src/components/ui/careers-hero.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  Users,
  ShieldCheck,
  GraduationCap,
  MapPin,
  Briefcase,
  CheckCircle2,
} from "lucide-react"

const HIGHLIGHTS = [
  { label: "Kinshasa & Lubumbashi", icon: MapPin },
  { label: "Missions à forte responsabilité", icon: Briefcase },
  { label: "Mentorat & montée en compétences", icon: GraduationCap },
  { label: "Culture de rigueur & collaboration", icon: Users },
]

const PROMISES = [
  "Un encadrement senior dès l’intégration",
  "Exposition multi-sectorielle (banque, mines, industrie)",
  "Formations continues & méthodologie structurée",
  "Confidentialité, éthique et indépendance",
]

export function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover grayscale"
          style={{ opacity: 0.14 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy" />
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

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -right-40 top-20 z-0 h-[520px] w-[520px] rounded-full bg-primary/[0.06] blur-[160px]" />
      <div className="pointer-events-none absolute -left-40 bottom-16 z-0 h-[420px] w-[420px] rounded-full bg-primary/[0.04] blur-[120px]" />

      {/* Vertical accent line */}
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />

      {/* Content */}
      <div className="relative z-10 w-full px-10 pb-16 pt-32 md:pt-40 lg:pb-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-end lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Carrières · Construire votre trajectoire
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.03em]">
              Rejoignez un cabinet
              <br />
              <span className="text-white/75">où la rigueur</span>{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                fait grandir.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-white/55 md:text-lg">
              CAAF SAS recrute des auditeurs, consultants et profils finance
              pour intervenir sur des missions à haute exigence — conformité,
              gouvernance, audit financier, due diligence — au service
              d’organisations de référence en RDC et dans la région.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#postes"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                Voir les opportunités
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#culture"
                className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                Découvrir notre culture
                <ChevronRight size={16} className="opacity-70" />
              </Link>
            </div>

            {/* Highlights row */}
            <div className="mt-12 grid grid-cols-1 gap-4 border-t border-white/[0.06] pt-6 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.08] bg-white/[0.03]">
                    <item.icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
                  </div>
                  <p className="text-sm leading-7 text-white/55">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-5">
            <div className="border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-serif text-xl text-white">
                    Ce que nous garantissons
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                    Rigueur · Mentorat · Responsabilité
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {PROMISES.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      strokeWidth={1.7}
                    />
                    <span className="text-sm leading-7 text-white/65">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                  Candidature spontanée
                </p>
                <p className="mt-2 text-sm text-white/55">
                  Envoyez votre CV et une courte note de motivation.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:recrutement@caaf-sas.com"
                    className="inline-flex items-center justify-center gap-2 border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-sm font-medium text-white/70 transition-colors hover:border-primary/25 hover:text-white"
                  >
                    recrutement@caaf-sas.com
                  </a>

                  <Link
                    href="#postes"
                    className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white/90"
                  >
                    Postes ouverts
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Mini stats */}
              <div className="mt-8 grid grid-cols-3 border-t border-white/[0.06] pt-6">
                <div className="pr-4">
                  <p className="font-serif text-3xl text-white">30+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    années
                  </p>
                </div>
                <div className="border-l border-white/[0.06] px-4">
                  <p className="font-serif text-3xl text-white">500+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    missions
                  </p>
                </div>
                <div className="border-l border-white/[0.06] pl-4">
                  <p className="font-serif text-3xl text-white">2</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/35">
                    hubs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ribbon */}
        <div className="mt-14 border-t border-white/[0.06] pt-6">
          <div className="grid grid-cols-2 gap-4 text-sm text-white/35 md:grid-cols-4">
            <div>Audit financier & assurance</div>
            <div>Fiscalité & conformité</div>
            <div>Due diligence & advisory</div>
            <div>Contrôle interne & risques</div>
          </div>
        </div>
      </div>
    </section>
  )
}