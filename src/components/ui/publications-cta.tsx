// src/components/ui/publications-cta.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import ctaImage from "@/assets/3.png"

const TYPES = [
  "Rapports sectoriels",
  "Notes réglementaires",
  "Guides pratiques",
  "Analyses sur mesure",
]

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function PublicationsCta() {
  return (
    <section
      className="relative overflow-hidden bg-[#f8fafc] border-t border-slate-200/60"
    >
{/* ── Grain texture (subtle) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* ── Grid + image layout ── */}
      <div className="relative z-10 grid min-h-[600px] grid-cols-1 lg:min-h-[700px] lg:grid-cols-2">
        {/* ═══════════════════════════════════════════════
            LEFT — Text content
            ═══════════════════════════════════════════════ */}
        <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Besoin d&apos;un contenu spécifique ?
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-6 max-w-lg text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-tight text-slate-900">
            Nous publions aussi
            <br />
            <span className="text-slate-400">sur demande.</span>
          </h2>

          {/* Description */}
          <p className="mb-10 max-w-md text-lg leading-6 text-slate-500">
            Si vous recherchez une analyse sectorielle spécifique, une note
            technique sur un sujet réglementaire ou un guide adapté à votre
            contexte, notre équipe peut produire un contenu sur mesure.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary-hero group relative inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-9 py-4 text-[14px] font-semibold tracking-wide text-white"
            >
              <span className="relative z-10">Demander un contenu</span>
              <span className="relative z-10 text-[14px] leading-none transition-transform duration-200 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </Link>

            <a
              href="/firm-profile.pdf"
              className="group inline-flex items-center justify-center gap-3 rounded-sm border border-slate-200 bg-white px-9 py-4 text-[14px] font-semibold tracking-wide text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
            >
              Profil du cabinet
            </a>
          </div>

          {/* Divider */}
          <div className="my-10 h-px w-24 bg-slate-200" />

          {/* Types strip */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {TYPES.map((type) => (
              <span
                key={type}
                className="text-xs text-slate-400"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            RIGHT — Full-height image
            ═══════════════════════════════════════════════ */}
        <div className="relative h-[350px] sm:h-[400px] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
          <Image
            src={ctaImage}
            alt="Publications CAAF SAS — Ressources professionnelles"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc]/80 via-[#f8fafc]/30 to-transparent lg:bg-gradient-to-r lg:from-[#f8fafc] lg:via-[#f8fafc]/60 lg:to-transparent" />

        </div>
      </div>
    </section>
  )
}
