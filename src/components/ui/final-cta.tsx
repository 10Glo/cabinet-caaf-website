// src/components/ui/final-cta.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  Shield,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react"

const TRUST_POINTS = [
  "Réponse sous 24h",
  "Premier entretien sans engagement",
  "Accompagnement sur mesure",
  "Confidentialité garantie",
]

export function FinalCta() {
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
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 z-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-1/4 z-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <div className="mb-5 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Contact
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
              Parlons de votre
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                prochaine mission.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/50">
              Chaque entreprise fait face à des défis uniques. Que vous ayez
              besoin d&apos;une certification de vos comptes, d&apos;un
              accompagnement fiscal ou d&apos;une due diligence, nos experts
              sont prêts à intervenir avec la rigueur et la discrétion que vous
              attendez.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                Demander une consultation
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
                Nous appeler
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {TRUST_POINTS.map((point) => (
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

          {/* Right — Contact info card */}
          <div className="border border-white/[0.08] bg-white/[0.02] p-10 backdrop-blur-xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
                <Shield className="h-6 w-6 text-primary" strokeWidth={1.7} />
              </div>
              <div>
                <p className="font-serif text-xl text-white">CAAF SAS</p>
                <p className="text-xs text-white/40">
                  Cabinet d&apos;Audit & Conseil
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.06] bg-white/[0.03]">
                  <MapPin className="h-4 w-4 text-white/40" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                    Siège
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    12 Avenue de la Paix, Commune de la Gombe
                    <br />
                    Kinshasa, RDC
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.06] bg-white/[0.03]">
                  <MapPin className="h-4 w-4 text-white/40" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                    Bureau régional
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Avenue Kasavubu
                    <br />
                    Lubumbashi, RDC
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.06] bg-white/[0.03]">
                  <Mail className="h-4 w-4 text-white/40" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                    Email
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    contact@caaf-sas.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.06] bg-white/[0.03]">
                  <Phone className="h-4 w-4 text-white/40" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                    Téléphone
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    +243 00 000 0000
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8 border-t border-white/[0.06] pt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/30">Lun — Ven</span>
                <span className="font-medium text-white/60">
                  08:00 — 17:30
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-white/30">Sam</span>
                <span className="font-medium text-white/60">
                  Sur rendez-vous
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}