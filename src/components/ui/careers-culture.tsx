// src/components/ui/careers-culture.tsx
"use client"

import Link from "next/link"
import {
  Globe2,
  Users,
  MapPin,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  Scale,
  BookOpen,
  Briefcase,
  ArrowRight,
} from "lucide-react"

const GROWTH_BENEFITS = [
  {
    title: "Formation continue",
    description: "Programmes réguliers en audit, fiscalité, normes IFRS et méthodologie.",
    icon: BookOpen,
  },
  {
    title: "Missions à responsabilité",
    description: "Exposition directe aux décideurs : DAF, DG, comités d'audit.",
    icon: Briefcase,
  },
  {
    title: "Éthique & Indépendance",
    description: "Une culture fondée sur l'intégrité, la discrétion et le professionnalisme.",
    icon: ShieldCheck,
  },
  {
    title: "Expertise multi-sectorielle",
    description: "Banque, mines, industrie, ONG — une diversité de missions stimulante.",
    icon: Scale,
  },
]

export function CareersCulture() {
  return (
    <section id="culture" className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Notre culture
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              L&apos;excellence sans compromis,
              <br />
              <span className="text-ink/40">au quotidien.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            Chez CAAF, notre culture repose sur l&apos;intersection de la
            rigueur technique et de l&apos;accompagnement humain. Nous ne nous
            contentons pas de résoudre des problèmes — nous définissons de
            nouveaux standards.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* ═══ Featured: Standards ═══ */}
          <article className="group relative overflow-hidden border border-hairline bg-white p-8 md:col-span-8 md:p-12">
            {/* Corner accent */}
            <div className="absolute right-0 top-0 h-20 w-20">
              <div className="absolute right-0 top-0 h-px w-20 bg-gradient-to-l from-primary/30 to-transparent" />
              <div className="absolute right-0 top-0 h-20 w-px bg-gradient-to-b from-primary/30 to-transparent" />
            </div>

            {/* Background decorative */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06]">
              <Globe2 className="h-64 w-64 text-brand-navy" strokeWidth={0.5} />
            </div>

            <div className="relative z-10 max-w-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                <Globe2 className="h-6 w-6 text-primary" strokeWidth={1.7} />
              </div>

              <h3 className="font-serif text-2xl text-brand-navy md:text-3xl">
                Standards internationaux, impact local
              </h3>

              <p className="mt-4 text-base leading-7 text-ink/55">
                Certifiés IFAC et conformes aux référentiels OHADA, nous
                appliquons les meilleures pratiques internationales au service du
                développement économique congolais. Chaque mission est une
                occasion de démontrer que rigueur et proximité ne sont pas
                incompatibles.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["IFAC", "OHADA", "ISA", "IFRS"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-hairline bg-canvas px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* ═══ Dark: Mentorat ═══ */}
          <article className="flex flex-col justify-between border border-white/10 bg-surface-dark p-8 md:col-span-4 md:p-10">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5">
                <GraduationCap className="h-6 w-6 text-primary" strokeWidth={1.7} />
              </div>

              <h3 className="font-serif text-2xl text-white">
                Mentorat d&apos;excellence
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Travaillez directement avec des associés et directeurs qui
                façonnent le paysage financier de l&apos;Afrique centrale depuis
                plus de deux décennies.
              </p>
            </div>

            <div className="mt-8 border-t border-white/[0.06] pt-6">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" strokeWidth={1.7} />
                <span className="text-xs uppercase tracking-[0.14em] text-white/35">
                  Encadrement senior garanti
                </span>
              </div>
            </div>
          </article>

          {/* ═══ Hubs ═══ */}
          <article className="flex flex-col justify-between border border-hairline bg-surface-card p-8 md:col-span-4 md:p-10">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                <MapPin className="h-6 w-6 text-primary" strokeWidth={1.7} />
              </div>

              <h3 className="font-serif text-2xl text-brand-navy">
                Hubs modernes
              </h3>

              <p className="mt-4 text-sm leading-7 text-ink/55">
                Des bureaux à Kinshasa et Lubumbashi conçus pour la
                collaboration, la concentration et la rigueur d&apos;exécution.
              </p>
            </div>

            <div className="mt-8 flex gap-6 border-t border-hairline pt-6">
              <div>
                <p className="font-serif text-2xl text-brand-navy">2</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink/35">
                  bureaux
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-brand-navy">Kin</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink/35">
                  & Lshi
                </p>
              </div>
            </div>
          </article>

          {/* ═══ Wide: Trajectoires + Growth Grid ═══ */}
          <article className="relative border border-hairline bg-white p-8 md:col-span-8 md:p-10">
            {/* Top accent line */}
            <div className="absolute left-0 top-0 h-[3px] w-16 bg-primary" />

            <div className="grid items-start gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                  <TrendingUp className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>

                <h3 className="font-serif text-2xl text-brand-navy md:text-3xl">
                  Trajectoires sur mesure
                </h3>

                <p className="mt-4 text-sm leading-7 text-ink/55">
                  Nous ne croyons pas aux parcours de carrière génériques.
                  Chaque professionnel bénéficie d&apos;un plan de
                  développement individualisé, aligné sur ses forces et ses
                  ambitions.
                </p>

                <div className="mt-8">
                  <Link
                    href="#postes"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
                  >
                    Voir les postes ouverts
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>

              {/* Growth benefits mini-grid */}
              <div className="grid grid-cols-2 gap-3">
                {GROWTH_BENEFITS.map((b) => (
                  <div
                    key={b.title}
                    className="group/card border border-hairline bg-canvas p-4 transition-colors hover:bg-surface-soft/40"
                  >
                    <b.icon
                      className="mb-2 h-5 w-5 text-primary"
                      strokeWidth={1.7}
                    />
                    <p className="text-sm font-medium text-brand-navy">
                      {b.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-ink/40">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-hairline bg-canvas px-8 py-5 md:flex-row">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.7} />
            <p className="text-sm text-ink/60">
              Notre culture attire les meilleurs talents.{" "}
              <span className="font-medium text-ink/80">
                Rejoignez une équipe d&apos;excellence.
              </span>
            </p>
          </div>

          <Link
            href="#postes"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
          >
            Explorer les opportunités
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}