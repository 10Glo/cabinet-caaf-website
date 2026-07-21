// src/components/ui/about-hero.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import subHeroBg from "@/assets/6.jpg"

export function HistoryHero() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-navy">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={subHeroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
          quality={80}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="px-6 pb-16 pt-36 sm:px-10 md:pt-44 lg:pb-20">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Fil d'Ariane"
              className="mb-10 flex items-center gap-2 text-[11px] text-white/30"
            >
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-white/50"
              >
                Accueil
              </Link>
              <span className="text-white/15">/</span>
              <Link
                href="/a-propos"
                className="transition-colors duration-200 hover:text-white/50"
              >
                À Propos
              </Link>
              <span className="text-white/15">/</span>
              <span className="text-white/45">Notre Histoire</span>
            </nav>

            {/* Eyebrow */}
            <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-300">
              Notre histoire · Depuis 1994
            </span>

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.5vw,4.5rem)] font-black leading-[0.92] tracking-[-0.02em] text-white">
              Heritage congolais.
              <br />
              <span className="text-white/35">
                Standards mondiaux.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg text-[16px] leading-[1.8] text-white/45">
              Depuis plus de 30 ans, CAAF SAS accompagne les entreprises,
              institutions et groupes stratégiques en RDC. Retour sur trois
              décennies d&apos;engagement, de rigueur et de croissance.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-white/[0.06]" />
    </section>
  )
}
