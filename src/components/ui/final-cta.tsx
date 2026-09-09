// src/components/ui/final-cta.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import ctaImage from "@/assets/3.png"

const TRUST_POINTS = [
  "Réponse sous 24h",
  "Premier entretien sans engagement",
  "Accompagnement sur mesure",
  "Confidentialité garantie",
]

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] border-t border-slate-200/60">
      <div className="relative z-10 grid min-h-[600px] grid-cols-1 lg:min-h-[700px] lg:grid-cols-2">
        {/* Left — Text content */}
        <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Contact
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-6 max-w-lg text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-tight text-slate-900">
            Vous avez un besoin
            <br />
            <span className="text-slate-400">d&apos;accompagnement ?</span>
          </h2>

          {/* Description */}
          <p className="mb-10 max-w-md text-lg leading-6 text-slate-500">
            Remplissez le formulaire de contact ci-dessous pour nous permettre
            de répondre au mieux à votre besoin. Nos experts vous accompagnent
            avec rigueur et discrétion.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-9 py-4 text-[14px] font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-primary-active"
            >
              <span className="relative z-10">Contactez-nous</span>
            </Link>

            <Link
              href="tel:+243810000000"
              className="group inline-flex items-center justify-center gap-3 rounded-sm border border-slate-200 bg-white px-9 py-4 text-[14px] font-semibold tracking-wide text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
            >
              <Phone className="h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
              Nous appeler
            </Link>
          </div>

          {/* Divider */}
          <div className="my-10 h-px w-24 bg-slate-200" />

          {/* Trust points */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {TRUST_POINTS.map((point) => (
              <span
                key={point}
                className="text-xs text-slate-400"
              >
                {point}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Full-height image */}
        <div className="relative h-[350px] sm:h-[400px] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
          <Image
            src={ctaImage}
            alt="Accompagnement et conseil CAAF SAS"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
