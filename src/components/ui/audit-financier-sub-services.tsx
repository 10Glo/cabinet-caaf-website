"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ClipboardCheck,
  FileBadge,
  FileCheck,
  FileSignature,
} from "lucide-react"

const SUB_SERVICES = [
  {
    id: "audit-legal",
    icon: FileCheck,
    title: "Audit Légal",
    subtitle: "Commissariat aux comptes",
    description:
      "Certification des comptes annuels conformément aux obligations légales et réglementaires. Une mission exercée en toute indépendance selon les normes applicables et les exigences du référentiel OHADA.",
    deliverables: [
      "Rapport du commissaire aux comptes",
      "Lettre de recommandations",
      "Rapport spécial sur les conventions réglementées",
    ],
  },
  {
    id: "audit-contractuel",
    icon: FileSignature,
    title: "Audit Contractuel",
    subtitle: "Mission ponctuelle à la demande",
    description:
      "Audit réalisé dans un cadre contractuel pour répondre aux attentes d’un investisseur, d’un bailleur, d’une maison-mère ou d’une direction souhaitant un niveau de confort renforcé sur les comptes.",
    deliverables: [
      "Rapport d’audit contractuel",
      "Synthèse des constats clés",
      "Recommandations ciblées",
    ],
  },
  {
    id: "revue-limitee",
    icon: ClipboardCheck,
    title: "Revue Limitée",
    subtitle: "Assurance modérée",
    description:
      "Examen reposant sur des procédures analytiques et des entretiens ciblés, adapté aux situations nécessitant une assurance modérée sur des comptes intermédiaires ou annuels dans des délais resserrés.",
    deliverables: [
      "Rapport de revue limitée",
      "Synthèse des observations",
      "Points d’attention identifiés",
    ],
  },
  {
    id: "attestations",
    icon: FileBadge,
    title: "Attestations & Rapports Spéciaux",
    subtitle: "Missions spécifiques",
    description:
      "Interventions sur des informations financières déterminées : chiffre d’affaires, situation nette, comptes prévisionnels, apports en nature ou autres données destinées à des tiers ou autorités.",
    deliverables: [
      "Attestation sur chiffre d’affaires",
      "Attestation de situation nette",
      "Rapport sur les apports en nature",
    ],
  },
]

export function AuditFinancierSousServices() {
  const [activeId, setActiveId] = useState(SUB_SERVICES[0].id)

  const activeService =
    SUB_SERVICES.find((service) => service.id === activeId) ?? SUB_SERVICES[0]

  const ActiveIcon = activeService.icon

  return (
    <section id="sous-services" className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* ── Heading ── */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Sous-services
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
            Des missions d’audit pensées
            <br />
            pour des besoins bien distincts.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            Selon votre contexte, vos obligations réglementaires ou les attentes
            de vos partenaires, nous mobilisons le format d’intervention le plus
            pertinent, de l’audit légal aux attestations spécifiques.
          </p>
        </div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Left panel — navigation */}
          <div className="border border-hairline bg-white md:col-span-4">
            <div className="border-b border-hairline px-8 py-6 md:px-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                Types d’intervention
              </p>
            </div>

            <div className="divide-y divide-hairline">
              {SUB_SERVICES.map((service) => {
                const isActive = service.id === activeId
                const Icon = service.icon

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveId(service.id)}
                    className={`group relative flex w-full items-start gap-4 px-8 py-6 text-left transition-colors md:px-10 ${
                      isActive
                        ? "bg-primary/5"
                        : "bg-white hover:bg-surface-card"
                    }`}
                  >
                    <div
                      className={`absolute left-0 top-0 h-full w-[3px] transition-colors ${
                        isActive ? "bg-primary" : "bg-transparent"
                      }`}
                    />

                    <div
                      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center border transition-colors ${
                        isActive
                          ? "border-primary/20 bg-white text-primary"
                          : "border-hairline bg-surface-card text-brand-navy/45 group-hover:text-brand-navy/70"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0">
                      <h3
                        className={`text-base font-semibold transition-colors ${
                          isActive
                            ? "text-brand-navy"
                            : "text-brand-navy/70 group-hover:text-brand-navy"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`mt-1 text-sm transition-colors ${
                          isActive
                            ? "text-ink/50"
                            : "text-ink/40 group-hover:text-ink/55"
                        }`}
                      >
                        {service.subtitle}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right panel — active detail */}
          <article className="border border-hairline bg-white p-8 md:col-span-8 md:p-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                <ActiveIcon className="h-6 w-6 text-primary" strokeWidth={1.7} />
              </div>

              <div className="mb-6">
                <h3 className="font-serif text-2xl text-brand-navy md:text-3xl">
                  {activeService.title}
                </h3>
                <p className="mt-2 text-sm text-ink/45">
                  {activeService.subtitle}
                </p>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-ink/60 md:text-base">
                {activeService.description}
              </p>

              <div className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/40" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                    Livrables clés
                  </span>
                </div>

                <ul className="grid gap-3 sm:grid-cols-1 lg:max-w-2xl">
                  {activeService.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border border-hairline bg-surface-card px-4 py-4"
                    >
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-6 text-ink/65">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
                >
                  Discuter de cette mission
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}