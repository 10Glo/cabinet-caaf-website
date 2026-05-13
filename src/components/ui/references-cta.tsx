// src/components/ui/references-cta.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  FileDown,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Handshake,
} from "lucide-react"

export function ReferencesCta() {
  return (
    <section className="relative overflow-hidden border-t border-hairline bg-surface-dark px-10 py-section">
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

      <div className="pointer-events-none absolute -right-40 top-20 z-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[150px]" />
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Rejoignez nos clients
              </span>
            </div>

            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-white md:text-5xl">
              Faisons connaissance
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                et construisons une relation
              </span>
              <br />
              <span className="text-white/75">de confiance durable.</span>
            </h2>

            <p className="mt-8 max-w-xl text-[17px] leading-[1.8] text-white/50">
              Que vous soyez un groupe minier, une institution financière, une
              ONG ou un opérateur industriel, un premier échange nous permettra
              de comprendre vos enjeux et de vous présenter notre approche.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                <Calendar className="h-4 w-4" />
                Planifier un échange
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="/firm-profile.pdf"
                className="group inline-flex items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                <FileDown className="h-4 w-4" />
                Profil du cabinet
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Réponse sous 24h",
                "Références sectorielles sur demande",
                "Confidentialité garantie",
                "Interlocuteur senior dédié",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary/70" strokeWidth={1.7} />
                  <span className="text-sm text-white/45">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
                  <Handshake className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-serif text-xl text-white">
                    Pourquoi nous choisir
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                    Nos engagements
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Indépendance totale",
                    description: "Aucun conflit d'intérêt, aucune complaisance.",
                  },
                  {
                    title: "Lecture sectorielle",
                    description: "Une compréhension concrète de votre environnement.",
                  },
                  {
                    title: "Qualité constante",
                    description: "Contrôle qualité interne sur chaque mission.",
                  },
                  {
                    title: "Relation durable",
                    description: "Un accompagnement qui s'inscrit dans le temps.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-white/[0.06] bg-white/[0.02] px-4 py-4"
                  >
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/50">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}