
"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Pickaxe,
  Landmark,
  Globe2,
  Building2,
  TrendingUp,
  Clock,
  Users,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const CASE_STUDIES = [
  {
    id: "minier",
    sector: "Mines & Ressources",
    sectorIcon: Pickaxe,
    title: "Certification des comptes d'un groupe minier multi-sites",
    location: "Katanga, RDC",
    context:
      "Un groupe minier international exploitant trois sites au Katanga devait répondre aux exigences de certification de sa maison-mère européenne tout en respectant les obligations comptables locales OHADA. Les délais étaient serrés, la volumétrie importante et les interlocuteurs répartis entre Lubumbashi, Kolwezi et l'Europe.",
    approach: [
      "Déploiement simultané de trois équipes sur chaque site minier",
      "Coordination centralisée par un associé basé à Lubumbashi",
      "Double reporting OHADA et IFRS intégré dès la planification",
      "Circularisation étendue des fournisseurs et sous-traitants",
    ],
    results: [
      {
        icon: CheckCircle2,
        label: "Opinion sans réserve émise dans les délais",
      },
      {
        icon: Clock,
        label: "Rapport livré 10 jours avant l'échéance groupe",
      },
      {
        icon: TrendingUp,
        label: "12 recommandations de contrôle interne implémentées",
      },
      {
        icon: Users,
        label: "Mission reconduite pour les 3 exercices suivants",
      },
    ],
    quote:
      "CAAF a démontré une capacité rare à conjuguer rigueur internationale et maîtrise du terrain congolais.",
    quoteAuthor: "Directeur Financier Groupe",
  },
  {
    id: "bancaire",
    sector: "Banque & Finance",
    sectorIcon: Landmark,
    title: "Audit légal d'un établissement bancaire sous supervision BCC",
    location: "Kinshasa, RDC",
    context:
      "Une banque commerciale soumise à la supervision de la Banque Centrale du Congo nécessitait un commissaire aux comptes capable de répondre simultanément aux exigences prudentielles locales et aux attentes de ses actionnaires internationaux.",
    approach: [
      "Analyse approfondie du portefeuille de crédits et des provisions",
      "Revue des procédures de conformité anti-blanchiment",
      "Coordination avec l'inspection générale et le comité d'audit",
      "Rapports spécifiques pour la BCC selon le format réglementaire",
    ],
    results: [
      {
        icon: CheckCircle2,
        label: "Certification conforme aux exigences BCC",
      },
      {
        icon: TrendingUp,
        label: "Renforcement du dispositif de provisionnement",
      },
      {
        icon: Clock,
        label: "Livrables réglementaires transmis dans les délais",
      },
      {
        icon: Users,
        label: "Relation de confiance établie avec le régulateur",
      },
    ],
    quote:
      "Une approche rigoureuse qui a renforcé la crédibilité de notre institution auprès de nos parties prenantes.",
    quoteAuthor: "Président du Comité d'Audit",
  },
  {
    id: "ong",
    sector: "Organisations internationales",
    sectorIcon: Globe2,
    title: "Audit de projet multi-bailleurs pour une ONG internationale",
    location: "Provinces du Nord-Kivu et Sud-Kivu, RDC",
    context:
      "Une ONG internationale gérant un programme humanitaire financé par la Banque Mondiale, l'Union Européenne et l'USAID devait fournir des rapports d'audit conformes aux exigences spécifiques de chaque bailleur, dans un contexte sécuritaire complexe.",
    approach: [
      "Compréhension des procédures propres à chaque bailleur",
      "Déploiement d'équipes formées aux standards de chaque donateur",
      "Vérification terrain des dépenses dans les zones d'intervention",
      "Rapports individualisés par source de financement",
    ],
    results: [
      {
        icon: CheckCircle2,
        label: "Trois rapports d'audit acceptés sans réserve",
      },
      {
        icon: Clock,
        label: "Respect des calendriers de chaque bailleur",
      },
      {
        icon: TrendingUp,
        label: "Amélioration des procédures d'éligibilité des dépenses",
      },
      {
        icon: Users,
        label: "Référencement auprès de deux nouveaux bailleurs",
      },
    ],
    quote:
      "Leur compréhension des exigences multi-bailleurs nous a fait gagner un temps considérable.",
    quoteAuthor: "Directeur Pays",
  },
]

export function AuditFinancierCas() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeCase = CASE_STUDIES[activeIndex]
  const ActiveSectorIcon = activeCase.sectorIcon

  const goTo = (index: number) => {
    if (index >= 0 && index < CASE_STUDIES.length) {
      setActiveIndex(index)
    }
  }

  return (
    <section className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* ── Heading ── */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Cas d'intervention
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Des résultats concrets,
              <br />
              dans des contextes exigeants.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
              Chaque mission est unique. Voici quelques exemples anonymisés
              d'interventions récentes illustrant notre approche et la valeur
              que nous apportons à nos clients.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Cas précédent"
              className="inline-flex h-12 w-12 items-center justify-center border border-hairline bg-white text-brand-navy/50 transition-colors hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-hairline disabled:hover:text-brand-navy/50"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === CASE_STUDIES.length - 1}
              aria-label="Cas suivant"
              className="inline-flex h-12 w-12 items-center justify-center border border-hairline bg-white text-brand-navy/50 transition-colors hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-hairline disabled:hover:text-brand-navy/50"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
            <span className="ml-2 font-mono text-[12px] text-ink/30">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(CASE_STUDIES.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ── Case Study Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Left — Context */}
          <article className="border border-hairline bg-white p-8 md:col-span-7 md:p-10">
            <div className="max-w-2xl">
              {/* Sector badge */}
              <div className="mb-8 inline-flex items-center gap-3 border border-primary/15 bg-primary/5 px-4 py-2">
                <ActiveSectorIcon
                  className="h-4 w-4 text-primary"
                  strokeWidth={1.7}
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary/80">
                  {activeCase.sector}
                </span>
                <div className="h-3 w-px bg-primary/20" />
                <span className="text-[11px] text-primary/50">
                  {activeCase.location}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl leading-snug text-brand-navy md:text-3xl">
                {activeCase.title}
              </h3>

              {/* Context */}
              <div className="mt-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/40" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                    Contexte
                  </span>
                </div>
                <p className="text-sm leading-7 text-ink/60 md:text-base">
                  {activeCase.context}
                </p>
              </div>

              {/* Approach */}
              <div className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/40" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                    Notre approche
                  </span>
                </div>
                <ul className="grid gap-3">
                  {activeCase.approach.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border border-hairline bg-surface-card px-5 py-4"
                    >
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-6 text-ink/65">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* Right — Results + Quote */}
          <div className="flex flex-col gap-5 md:col-span-5">
            {/* Results card */}
            <article className="flex-1 border border-white/10 bg-surface-dark p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-primary/40" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">
                  Résultats obtenus
                </span>
              </div>

              <ul className="grid gap-4">
                {activeCase.results.map((result) => {
                  const ResultIcon = result.icon

                  return (
                    <li
                      key={result.label}
                      className="flex items-start gap-4 border border-white/[0.06] bg-white/[0.03] px-5 py-4"
                    >
                      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-primary">
                        <ResultIcon className="h-4 w-4" strokeWidth={1.7} />
                      </div>
                      <span className="text-sm leading-6 text-white/65">
                        {result.label}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </article>

            {/* Quote card */}
            <article className="border border-primary/20 bg-primary/5 p-8 md:p-10">
              <svg
                className="mb-4 h-8 w-8 text-primary/30"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>

              <blockquote className="text-[15px] font-medium italic leading-7 text-brand-navy/80 md:text-base">
                {activeCase.quote}
              </blockquote>

              <div className="mt-4 flex items-center gap-3">
                <div className="h-px w-6 bg-primary/30" />
                <span className="text-[12px] font-semibold text-brand-navy/50">
                  {activeCase.quoteAuthor}
                </span>
              </div>
            </article>
          </div>

          {/* Selector pills */}
          <div className="flex flex-wrap items-center gap-3 md:col-span-12">
            {CASE_STUDIES.map((cs, index) => {
              const isActive = index === activeIndex
              const Icon = cs.sectorIcon

              return (
                <button
                  key={cs.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`inline-flex items-center gap-2.5 border px-5 py-3 text-[13px] font-medium transition-all ${
                    isActive
                      ? "border-primary/30 bg-primary/5 text-primary"
                      : "border-hairline bg-white text-ink/45 hover:border-primary/20 hover:text-ink/70"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                  {cs.sector}
                </button>
              )
            })}

            <div className="ml-auto hidden md:block">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
              >
                Discutons de votre contexte
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}