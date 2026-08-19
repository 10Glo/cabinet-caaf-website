// src/components/ui/careers-final-cta.tsx
"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Briefcase,
  Calendar,
  Mail,
  Phone,
  Clock,
  Award,
  Users,
  ChevronRight,
} from "lucide-react"
import {
  CONTACT_PHONE_HREF,
  RECRUITMENT_EMAIL,
} from "@/lib/contact"
import { SectionEyebrow } from "@/components/shared/section-eyebrow"

const RECRUITMENT_STEPS = [
  {
    number: "01",
    title: "Sélection initiale",
    description:
      "Revue rigoureuse des parcours académiques et professionnels. Vérification des certifications requises.",
    icon: Briefcase,
  },
  {
    number: "02",
    title: "Évaluation technique",
    description:
      "Tests d'excellence méthodologique et résolution de cas pratiques en audit, fiscalité ou conseil.",
    icon: Clock,
  },
  {
    number: "03",
    title: "Entretien associatif",
    description:
      "Alignement avec les valeurs de CAAF SAS : intégrité, indépendance et engagement envers l'excellence.",
    icon: Users,
  },
]

const HIGHLIGHTS = [
  { value: "94%", label: "Taux de rétention à 3 ans", icon: Award },
  { value: "100%", label: "Suivi de formation personnalisé", icon: Briefcase },
  { value: "24/7", label: "Support mentorat disponible", icon: Users },
]

export function CareersFinalCta() {
  const [activeStep, setActiveStep] = useState<string | null>(null)

  return (
    <section className="relative overflow-hidden border-t border-hairline bg-surface-dark px-10 py-section">
      {/* Decorative grid */}
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

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -right-40 top-20 z-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-16 z-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />

      {/* Vertical accent line */}
      <div className="absolute left-10 top-0 z-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* ── Left column: Process ── */}
          <div className="lg:col-span-7">
            <SectionEyebrow className="mb-8 inline-flex">
              Notre processus de recrutement
            </SectionEyebrow>

            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-white md:text-5xl">
              Une sélection exigeante,
              <br />
              <span className="text-white/75">un accompagnement d'élite.</span>
            </h2>

            {/* Steps */}
            <div className="mt-12 space-y-4">
              {RECRUITMENT_STEPS.map((step, index) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className={`group flex w-full items-start gap-4 rounded-lg border p-5 transition-all ${
                    activeStep === step.number
                      ? "border-primary/40 bg-primary/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                      : "border-white/[0.06] bg-white/[0.01] hover:border-primary/20"
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border ${
                      activeStep === step.number
                        ? "border-primary/30 bg-primary/10"
                        : "border-white/[0.08] bg-white/[0.03]"
                    }`}
                  >
                    <step.icon
                      className={`h-5 w-5 transition-colors ${
                        activeStep === step.number
                          ? "text-primary"
                          : "text-white/40 group-hover:text-primary"
                      }`}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="flex flex-1 items-center justify-between gap-8">
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold text-primary">
                          {step.number}
                        </span>
                        <p
                          className={`font-medium ${
                            activeStep === step.number
                              ? "text-white"
                              : "text-white/50 group-hover:text-white"
                          }`}
                        >
                          {step.title}
                        </p>
                      </div>

                      <p
                        className={`max-w-2xl text-sm leading-7 ${
                          activeStep === step.number
                            ? "text-white/70"
                            : "text-white/40"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    <ChevronRight
                      className={`transition-transform ${
                        activeStep === step.number
                          ? "translate-x-1 text-primary"
                          : "opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                      size={20}
                      strokeWidth={1.7}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom strip */}
            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/[0.06] pt-8 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.7} />
                <p className="text-sm text-white/45">
                  Candidature anonyme possible.{" "}
                  <span className="text-white/60">
                    Seule l'autorisation d'informer vos références est demandée.
                  </span>
                </p>
              </div>

              <Link
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
              >
                Question sur le processus ?
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* ── Right column: Highlights + Contact ── */}
          <div className="space-y-5 lg:col-span-5">
            {/* Highlights card */}
            <div className="border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
                  <Award className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-serif text-xl text-white">Pourquoi rester chez CAAF ?</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                    Engagement à long terme
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {HIGHLIGHTS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center text-center border border-white/[0.06] bg-white/[0.03] p-4"
                  >
                    <stat.icon
                      className="mb-2 h-4 w-4 text-primary"
                      strokeWidth={1.7}
                    />
                    <div className="font-serif text-3xl leading-none text-white">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-[9px] uppercase tracking-[0.12em] text-white/40">
                      {stat.label.split(" ")[0]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-primary"
                    strokeWidth={1.7}
                  />
                  <span className="text-xs text-white/40">
                    Taux de promotion interne : 78% après 2 ans
                  </span>
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" strokeWidth={1.7} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                  Recrutement
                </span>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${RECRUITMENT_EMAIL}`}
                  className="block w-full border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-left text-sm text-white/60 transition-colors hover:border-primary/25 hover:bg-white/[0.04]"
                >
                  <p className="font-medium text-white">Email</p>
                  <p className="truncate">{RECRUITMENT_EMAIL}</p>
                </a>

                <a
                  href={CONTACT_PHONE_HREF}
                  className="block w-full border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-left text-sm text-white/60 transition-colors hover:border-primary/25 hover:bg-white/[0.04]"
                >
                  <p className="font-medium text-white">Téléphone</p>
                  <p>+243 00 000 0000</p>
                </a>
              </div>

              {/* Availability indicator */}
              <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-4">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-medium text-white/40">
                  Équipe recrutement — réponse garantie sous 24h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width bottom CTA strip */}
        <div className="mt-16 border border-white/[0.06] bg-white/[0.015]">
          <div className="flex flex-col items-center justify-between gap-6 px-8 py-10 md:flex-row md:px-10">
            <div className="text-center md:text-left">
              <p className="font-serif text-2xl text-white md:text-3xl">
                Prêt à passer à l'étape suivante ?
              </p>
              <p className="mt-2 text-sm text-white/40">
                Rejoignez une équipe où la rigueur fait grandir.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#postes"
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                Voir les postes ouverts
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href={`mailto:${RECRUITMENT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/80 transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                <Calendar className="h-4 w-4" />
                Demander un entretien
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}