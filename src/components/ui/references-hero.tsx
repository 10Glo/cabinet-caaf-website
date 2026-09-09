// src/components/ui/references-hero.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import subHeroBg from "@/assets/6.jpg"

export function ReferencesHero() {
  return (
    <section className="relative w-full min-h-[540px] md:min-h-[640px] overflow-hidden bg-brand-navy">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={subHeroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
          quality={80}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="px-6 pb-24 pt-36 sm:px-10 md:pt-44 lg:pb-28">
          <div className="max-w-7xl mx-auto">
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
                href="/about"
                className="transition-colors duration-200 hover:text-white/50"
              >
                À Propos
              </Link>
              <span className="text-white/15">/</span>
              <span className="text-white/45">Références</span>
            </nav>

            {/* Eyebrow */}
            <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-300">
              Références · Clients &amp; Partenaires
            </span>

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.5vw,4.5rem)] font-black leading-[0.92] tracking-[-0.02em] text-white">
              La confiance des acteurs
              <br />
              <span className="text-white/35">
                majeurs qui façonnent la RDC.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg text-[16px] leading-[1.8] text-white/45">
              Depuis plus de 30 ans, des institutions financières, 
              des opérateurs industriels et 
              des organisations internationales nous confient leurs 
              missions les plus sensibles, témoignant de la confiance accordée 
              à notre expertise, notre rigueur et notre engagement.

            </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-white/[0.06]" />
    </section>
  )
}
