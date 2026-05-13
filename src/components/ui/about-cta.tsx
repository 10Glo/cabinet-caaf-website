// src/components/ui/about-cta.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Shield,
  CheckCircle2,
  Clock,
} from "lucide-react"

export function AboutCta() {
  return (
    <section className="relative overflow-hidden border-t border-hairline bg-surface-dark px-10 py-section">
      {/* Decorative */}
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

      <div className="pointer-events-none absolute -right-40 top-1/4 z-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-1/4 z-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />

      {/* Vertical accent line */}
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* ── Left column ── */}
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Commençons une conversation
              </span>
            </div>

            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-white md:text-5xl">
              Vous avez un projet,
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                nous avons l&apos;expertise.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-[17px] leading-[1.8] text-white/50">
              Notre direction reste accessible et attentive. Que vous soyez
              un groupe industriel, une institution financière ou un investisseur
              international, un premier échange confidentiel nous permettra de
              comprendre vos enjeux et d&apos;évaluer ensemble la meilleure
              approche.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                <Calendar className="h-4 w-4" />
                Planifier un entretien
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

            {/* Trust points */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Réponse garantie sous 24h",
                "Premier échange sans engagement",
                "Confidentialité absolue",
                "Interlocuteur senior dédié",
              ].map((point) => (
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
            {/* Contact card */}
            <div className="border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl">
              {/* Header */}
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-serif text-xl text-white">CAAF SAS</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                    Cabinet d&apos;Audit & Conseil
                  </p>
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.06] bg-white/[0.03]">
                    <MapPin
                      className="h-4 w-4 text-white/40"
                      strokeWidth={1.6}
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                      Siège — Kinshasa
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      12 Avenue de la Paix
                      <br />
                      Commune de la Gombe, Kinshasa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.06] bg-white/[0.03]">
                    <MapPin
                      className="h-4 w-4 text-white/40"
                      strokeWidth={1.6}
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                      Bureau — Lubumbashi
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Avenue Kasavubu
                      <br />
                      Lubumbashi, Haut-Katanga
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.06] bg-white/[0.03]">
                    <Mail
                      className="h-4 w-4 text-white/40"
                      strokeWidth={1.6}
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                      Email
                    </p>
                    <a
                      href="mailto:contact@caaf-sas.com"
                      className="mt-1 block text-sm text-white/70 transition-colors hover:text-primary"
                    >
                      contact@caaf-sas.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.06] bg-white/[0.03]">
                    <Phone
                      className="h-4 w-4 text-white/40"
                      strokeWidth={1.6}
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                      Téléphone
                    </p>
                    <a
                      href="tel:+243000000000"
                      className="mt-1 block text-sm text-white/70 transition-colors hover:text-primary"
                    >
                      +243 00 000 0000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div className="border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary" strokeWidth={1.7} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                  Disponibilité
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-sm">
                  <span className="text-white/40">Lundi — Vendredi</span>
                  <span className="font-medium text-white/70">
                    08:00 — 17:30
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-sm">
                  <span className="text-white/40">Samedi</span>
                  <span className="font-medium text-white/70">
                    Sur rendez-vous
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/40">Urgences</span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    <span className="font-medium text-white/70">
                      Joignable 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}