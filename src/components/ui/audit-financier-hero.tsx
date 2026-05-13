
"use client"

import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

export function AuditFinancierHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1920&auto=format&fit=crop"
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
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />

      <div className="relative z-10 w-full px-10 pb-16 pt-32 md:pt-40 lg:pb-24">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-[12px] text-white/40">
            <Link href="/" className="transition-colors hover:text-white/60">
              Accueil
            </Link>
            <ChevronRight size={12} />
            <Link href="/services" className="transition-colors hover:text-white/60">
              Expertises
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/60">Audit Financier</span>
          </div>

          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Audit & Assurance
            </span>
          </div>

          <h1 className="max-w-3xl font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            Donner à vos parties prenantes
            <br />
            <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
              la confiance qu&apos;elles méritent.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-white/55 md:text-lg">
            L&apos;audit financier est le socle de la transparence. Il garantit
            aux investisseurs, aux banques, aux actionnaires et aux régulateurs
            que vos états financiers reflètent fidèlement la réalité économique
            de votre organisation. Chez CAAF SAS, nous allons au-delà de la
            conformité : nous apportons une lecture claire et exploitable de
            votre situation financière.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#approche"
              className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-primary-active"
            >
              Découvrir notre approche
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-[14px] font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            >
              Demander un échange
            </Link>
          </div>

          {/* Bottom strip */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/[0.06] pt-6 md:grid-cols-4">
            {[
              { value: "ISA", label: "Normes appliquées" },
              { value: "OHADA", label: "Référentiel comptable" },
              { value: "30+", label: "Années d'expérience" },
              { value: "100%", label: "Indépendance" },
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