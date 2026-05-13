// src/components/ui/publications-cta.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  FileDown,
  BookOpen,
  CheckCircle2,
  Mail,
} from "lucide-react"

export function PublicationsCta() {
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

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Besoin d&apos;un contenu spécifique ?
          </span>
          <div className="h-px w-8 bg-primary" />
        </div>

        <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
          Une question technique ?
          <br />
          <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
            Nous publions aussi sur demande.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.8] text-white/50">
          Si vous recherchez une analyse sectorielle spécifique, une note
          technique sur un sujet réglementaire ou un guide adapté à votre
          contexte, notre équipe peut produire un contenu sur mesure.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
          >
            <Mail className="h-4 w-4" />
            Demander un contenu
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
            Profil du cabinet
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {["Rapports sectoriels", "Notes réglementaires", "Guides pratiques", "Analyses sur mesure"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary/70" strokeWidth={1.7} />
                <span className="text-xs uppercase tracking-[0.14em] text-white/40">
                  {item}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}