// src/components/ui/contact-hero.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  Calendar,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Clock3,
  Building2,
} from "lucide-react"

const TRUST_POINTS = [
  "Réponse sous 24h",
  "Échange confidentiel",
  "Interlocuteur senior",
]

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover grayscale"
          style={{ opacity: 0.12 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/65 to-brand-navy" />
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

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-40 top-20 z-0 h-[520px] w-[520px] rounded-full bg-primary/[0.06] blur-[160px]" />
      <div className="pointer-events-none absolute -left-40 bottom-16 z-0 h-[420px] w-[420px] rounded-full bg-primary/[0.04] blur-[120px]" />

      {/* Vertical accent line */}
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />

      <div className="relative z-10 w-full px-10 pb-16 pt-32 md:pt-40 lg:pb-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-end lg:gap-16">
          {/* Left side */}
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Contact · Kinshasa & Lubumbashi
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.4rem)] font-bold leading-[0.95] tracking-[-0.03em]">
              Entrons en contact
              <br />
              <span className="text-white/75">pour parler de vos enjeux</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                d’audit et de conseil.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-white/55 md:text-lg">
              CAAF SAS accompagne les entreprises, groupes et institutions dans
              leurs enjeux de conformité, de gouvernance, d’audit financier et
              de transformation. Un premier échange nous permettra de comprendre
              votre contexte et d’orienter la bonne approche.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#formulaire-contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                <Calendar className="h-4 w-4" />
                Planifier un échange
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="mailto:contact@caaf-sas.com"
                className="group inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                <Mail className="h-4 w-4" />
                Nous écrire
              </a>
            </div>

            {/* Bottom editorial strip */}
            <div className="mt-12 grid grid-cols-1 gap-4 border-t border-white/[0.06] pt-6 sm:grid-cols-3">
              {TRUST_POINTS.map((point) => (
                <div key={point}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                    Engagement
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/45">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-5">
            <div className="border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl">
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-serif text-xl text-white">
                    Coordonnées essentielles
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                    CAAF SAS
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 border border-white/[0.06] bg-white/[0.02] px-4 py-4">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.7} />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                      Siège — Kinshasa
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      12 Avenue de la Paix
                      <br />
                      Commune de la Gombe, Kinshasa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border border-white/[0.06] bg-white/[0.02] px-4 py-4">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.7} />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                      Bureau — Lubumbashi
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      Avenue Kasavubu
                      <br />
                      Lubumbashi, Haut-Katanga
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:contact@caaf-sas.com"
                  className="group flex items-start gap-4 border border-white/[0.06] bg-white/[0.02] px-4 py-4 transition-colors hover:border-primary/25 hover:bg-white/[0.04]"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.7} />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                      Email
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/70 transition-colors group-hover:text-white">
                      contact@caaf-sas.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+243000000000"
                  className="group flex items-start gap-4 border border-white/[0.06] bg-white/[0.02] px-4 py-4 transition-colors hover:border-primary/25 hover:bg-white/[0.04]"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.7} />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                      Téléphone
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/70 transition-colors group-hover:text-white">
                      +243 00 000 0000
                    </p>
                  </div>
                </a>
              </div>

              {/* Bottom availability */}
              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-primary" strokeWidth={1.7} />
                    <span className="text-white/40">Disponibilité</span>
                  </div>
                  <span className="font-medium text-white/70">
                    Lun — Ven · 08:00 — 17:30
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-xs font-medium text-white/40">
                    Réponse initiale en moins de 24h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ribbon */}
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