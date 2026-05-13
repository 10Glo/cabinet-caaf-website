// src/components/ui/services-final-cta.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  FileDown,
  CheckCircle2,
  Calendar,
  FileText,
} from "lucide-react"

const TRUST_POINTS = [
  "Réponse sous 24h",
  "Échange confidentiel avec un senior",
  "Approche adaptée à votre contexte",
  "Vision claire des risques et priorités",
]

export function ServicesFinalCta() {
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

      {/* Glows */}
      <div className="pointer-events-none absolute -right-40 top-20 z-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-20 z-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />

      {/* Accent line */}
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Passer à l’action
              </span>
            </div>

            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-white md:text-5xl">
              Prêt à sécuriser
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                vos enjeux financiers
              </span>
              <br />
              <span className="text-white/75">et réglementaires ?</span>
            </h2>

            <p className="mt-8 max-w-xl text-[17px] leading-[1.8] text-white/50">
              Nos associés et directeurs sont disponibles pour analyser votre
              situation, clarifier vos priorités et structurer avec vous une
              intervention adaptée à votre organisation, votre secteur et vos
              obligations.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                <Calendar className="h-4 w-4" />
                Planifier une consultation
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="/firm-profile.pdf"
                className="group inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                <FileDown className="h-4 w-4" />
                Télécharger le profil du cabinet
              </a>
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

          {/* Right panel */}
          <div className="space-y-5 lg:col-span-5">
            {/* Contact panel */}
            <div className="border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-serif text-xl text-white">
                    Échange avec le cabinet
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                    Direction & associés
                  </p>
                </div>
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

                <div className="flex items-start gap-3 border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                  <FileText
                    className="mt-0.5 h-4 w-4 text-white/40"
                    strokeWidth={1.6}
                  />
                  <div>
                    <p className="text-sm font-medium text-white/70">
                      Profil du cabinet
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/40">
                      Présentation institutionnelle, domaines d’intervention,
                      références sectorielles et approche.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-6 bg-primary" />
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

                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/40">Réponse initiale</span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    <span className="font-medium text-white/70">
                      &lt; 24h
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