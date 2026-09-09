// src/components/ui/expertise/expertise-hero.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import subHeroBg from "@/assets/6.jpg"
import type { ExpertiseHeroConfig } from "@/content/expertises/types"

interface Props {
  hero: ExpertiseHeroConfig
  breadcrumbLabel: string
}

export function ExpertiseHero({ hero, breadcrumbLabel }: Props) {
  return (
    <section className="relative w-full min-h-[540px] md:min-h-[640px] overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 z-0">
        <Image src={subHeroBg} alt="" fill priority sizes="100vw" className="object-cover opacity-25" quality={80} />
      </div>
      <div className="relative z-10 w-full">
        <div className="px-6 pb-24 pt-36 sm:px-10 md:pt-44 lg:pb-28">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
            <nav aria-label="Fil d'Ariane" className="mb-10 flex items-center gap-2 text-[11px] text-white/30">
              <Link href="/" className="transition-colors hover:text-white/50">Accueil</Link>
              <span className="text-white/15">/</span>
              <Link href="/services" className="transition-colors hover:text-white/50">Expertises</Link>
              <span className="text-white/15">/</span>
              <span className="text-white/45">{breadcrumbLabel}</span>
            </nav>
            <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-300">
              {hero.category}
            </span>
            <h1 className="font-serif text-[clamp(2.2rem,4.2vw,4rem)] font-black leading-[0.92] tracking-[-0.02em] text-white">
              {hero.title}
              <br />
              <span className="text-white/35">{hero.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-[16px] leading-[1.8] text-white/45">{hero.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-white/[0.06]" />
    </section>
  )
}
