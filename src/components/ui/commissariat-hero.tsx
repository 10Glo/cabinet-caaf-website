
"use client"

import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

export function CommissariatHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover grayscale"
          style={{ opacity: 0.12 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/65 to-brand-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-transparent" />
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

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-20 z-0 h-[520px] w-[520px] rounded-full bg-primary/[0.06] blur-[160px]" />

      {/* Vertical accent */}
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-10 md:pt-40 lg:pb-24">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="mb-8 flex items-center gap-2 text-[12px] text-white/40"
          >
            <Link href="/" className="transition-colors hover:text-white/60">
              Accueil
            </Link>
            <ChevronRight size={12} />
            <Link
              href="/expertises"
              className="transition-colors hover:text-white/60"
            >
              Expertises
            </Link>
            <ChevronRight size={12} />
            <Link
              href="/expertises#audit-assurance"
              className="transition-colors hover:text-white/60"
            >
              Audit &amp; Assurance
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/60">Commissariat aux Comptes</span>
          </nav>

          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Audit &amp; Assurance
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            Protéger votre gouvernance,
            <br />
            <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
              sécuriser vos obligations légales.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-white/55 md:text-lg">
            Le commissariat aux comptes est une mission légale permanente,
            imposée par l&apos;Acte Uniforme OHADA. Au-delà de la certification,
            il protège vos dirigeants, rassure vos actionnaires et garantit la
            fiabilité de votre information financière sur la durée de notre
            mandat. Chez CAAF&nbsp;SAS, nous en faisons un véritable levier de
            gouvernance.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#missions"
              className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-primary-active"
            >
              Découvrir nos missions
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-[14px] font-semibold text-white/80 transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            >
              Nommer un commissaire
            </Link>
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/[0.06] pt-6 md:grid-cols-4">
            {[
              { value: "6 ans", label: "Durée du mandat OHADA" },
              { value: "OHADA", label: "Référentiel comptable" },
              { value: "ISA", label: "Normes d'audit appliquées" },
              { value: "100%", label: "Indépendance garantie" },
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