"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import big4 from "@/assets/17.png"

// ─────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────

type Differentiator = {
  number: string
  title: string
  description: string
}

// ─────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────

const DIFFERENTIATORS: Differentiator[] = [
  {
    number: "01",
    title: "Maîtrise OHADA & IFRS",
    description:
      "Une expertise approfondie des référentiels comptables et réglementaires applicables aux groupes locaux et internationaux.",
  },
  {
    number: "02",
    title: "Conseil multilingue",
    description:
      "Des échanges fluides en français et en anglais, avec une forte capacité d'adaptation aux réalités opérationnelles locales.",
  },
  {
    number: "03",
    title: "Lecture fine du terrain",
    description:
      "Une compréhension concrète des enjeux économiques, administratifs et sectoriels propres au marché congolais.",
  },
]

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function Big4LocalExpertiseSection() {
  return (
    <section
      className="relative overflow-hidden bg-brand-navy px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* Subtle Background Texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.7) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.05] blur-[180px]" />

      <div className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-12">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5">
            {/* Eyebrow */}
            <div
              className="mb-5"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Notre différence
              </span>
            </div>

            {/* Title */}
            <h2
              className="max-w-xl font-serif text-5xl leading-[1.02] tracking-tight text-white lg:text-6xl"
            >
              Standards internationaux,{" "}
              <span className="text-white/30">
                compréhension locale.
              </span>
            </h2>

            {/* Description */}
            <p
              className="mt-8 max-w-lg text-[16px] leading-[1.9] text-white/45"
            >
              CAAF SAS associe les standards méthodologiques des grands
              cabinets internationaux à une compréhension nuancée du
              contexte réglementaire, économique et opérationnel de la
              RDC.
            </p>

            {/* Differentiators */}
            <div className="mt-14">
              {DIFFERENTIATORS.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-5 border-t border-white/[0.08] py-6"
                >
                  <span className="font-mono text-sm text-white/25">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-[15px] font-medium text-white/90">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/35">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link
                href="#contact"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
              >
                Découvrir notre approche

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE ZONE */}
          <div
            className="relative lg:col-span-7"
          >
            {/* Frame */}
            <div className="relative overflow-hidden border border-white/[0.08] bg-white/[0.02]">
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-[5/4]">
                <Image
                  src={big4}
                  alt="Professionnels en réunion"
                  fill
                  sizes="(max-w-1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
