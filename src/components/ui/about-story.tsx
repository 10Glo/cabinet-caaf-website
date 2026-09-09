// src/components/ui/about-story.tsx
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const STRENGTHS = [
  {
    label: "Formation",
    title: "Standards internationaux",
    text: "Une équipe formée aux meilleures pratiques internationales, avec une maîtrise approfondie des normes ISA, IFRS et du référentiel OHADA.",
  },
  {
    label: "Ancrage",
    title: "Réalité congolaise",
    text: "Une connaissance intime du terrain, de la réglementation locale et des dynamiques sectorielles propres à la RDC et à la région.",
  },
  {
    label: "Héritage",
    title: "Réseau PwC",
    text: "Une expérience construite au sein du réseau PwC (ex PwC RDC SAS), garantissant une méthodologie éprouvée et un savoir-faire reconnu.",
  },
]

const FIGURES = [
  { value: "30+", label: "Années d'expérience" },
  { value: "55+", label: "Professionnels" },
  { value: "350+", label: "Missions réalisées" },
  { value: "2", label: "Bureaux en RDC" },
]

export function AboutStory() {
  return (
    <section className="bg-canvas px-6 pb-20 pt-16 sm:px-10 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl lg:mb-16">
          <div className="mb-5 inline-flex items-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Le Cabinet
            </span>
          </div>

          <h2 className="mb-6 max-w-2xl text-[40px] font-normal leading-tight tracking-tight text-[#111A4A]">
            Congo Auditing and Advisory
            <br />
            <span className="opacity-40">Firm SAS.</span>
          </h2>

          <p className="max-w-xl text-lg leading-6 text-[#111A4A] opacity-60">
            CAAF SAS met à votre service une équipe d&apos;experts formés aux
            meilleures pratiques internationales et profondément ancrés dans la
            réalité congolaise.
          </p>
        </div>

        {/* Main description card */}
        <div className="border border-[#111A4A]/[0.06] bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Text */}
            <div className="p-8 md:p-10 lg:p-12">
              <p className="text-base leading-8 text-[#111A4A]/80">
                Fort d&apos;une expérience construite au sein du réseau{" "}
                <span className="font-medium text-[#111A4A]">
                  PwC (ex PwC RDC SAS)
                </span>
                , nos consultants combinent savoir-faire technique,
                méthodologie éprouvée et sens du terrain pour sécuriser vos
                décisions financières, optimiser vos processus et accompagner
                vos projets de croissance.
              </p>

              <p className="mt-6 text-base leading-8 text-[#111A4A]/80">
                Notre approche repose sur une double exigence : la rigueur des
                standards internationaux et la compréhension fine des réalités
                opérationnelles en RDC. C&apos;est cette combinaison qui nous
                permet d&apos;apporter une valeur ajoutée concrète à chaque
                mission.
              </p>

              <div className="mt-8 border-t border-[#111A4A]/[0.06] pt-6">
                <Link
                  href="/about"
                  className="group/link inline-flex items-center gap-2 text-[13px] font-medium text-primary transition-colors duration-200 hover:text-primary-active"
                >
                  Découvrir l&apos;histoire du cabinet
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="border-t border-[#111A4A]/[0.06] p-8 md:p-10 lg:border-t-0 lg:border-l lg:border-[#111A4A]/[0.06] lg:p-12">
              <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7C7F88]/50">
                En chiffres
              </p>

              <div className="grid grid-cols-2 gap-8">
                {FIGURES.map((fig) => (
                  <div key={fig.label}>
                    <p className="font-serif text-3xl text-[#111A4A]">
                      {fig.value}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#7C7F88]">
                      {fig.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Three strengths */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {STRENGTHS.map((item) => (
            <div
              key={item.title}
              className="group border border-[#111A4A]/[0.06] bg-white p-8"
            >
              {/* Tag */}
              <span className="mb-5 inline-block border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.02] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C7F88]/70">
                {item.label}
              </span>

              <h3 className="mb-3 font-serif text-xl text-[#111A4A] transition-colors duration-200 group-hover:text-brand-navy">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-[#7C7F88]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
