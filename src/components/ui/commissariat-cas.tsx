
"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Pickaxe,
  Landmark,
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
    id: "holding",
    sector: "Groupes & Holdings",
    sectorIcon: Building2,
    title: "Mandat de commissariat pour un holding multi-filiales",
    location: "Lubumbashi & Kinshasa, RDC",
    context:
      "Un holding congolais regroupant cinq filiales dans les secteurs du transport, de l'immobilier et de la distribution cherchait un commissaire aux comptes capable de certifier les comptes statutaires de chaque entité et les comptes consolidés du groupe — dans un contexte de structuration récente et de processus comptables hétérogènes.",
    approach: [
      "Diagnostic initial de l'organisation comptable de chaque filiale",
      "Plan de mission pluriannuel couvrant les cinq entités",
      "Harmonisation des calendriers de clôture inter-filiales",
      "Supervision centralisée par un associé unique pour le groupe",
    ],
    results: [
      { icon: CheckCircle2, label: "5 rapports statutaires émis sans réserve" },
      { icon: TrendingUp, label: "Consolidation OHADA mise en place avec succès" },
      { icon: Clock, label: "Clôture avancée de 3 semaines dès le 2e exercice" },
      { icon: Users, label: "Mandat renouvelé pour un second cycle de 6 ans" },
    ],
    quote:
      "CAAF a apporté la structure et la rigueur dont notre groupe avait besoin pour franchir un cap de gouvernance.",
    quoteAuthor: "Directeur Général du Holding",
  },
  {
    id: "banque",
    sector: "Banque & Finance",
    sectorIcon: Landmark,
    title: "Commissariat aux comptes d'une institution de microfinance",
    location: "Kinshasa, RDC",
    context:
      "Une institution de microfinance en forte croissance, supervisée par la Banque Centrale du Congo, devait nommer un commissaire aux comptes répondant aux exigences prudentielles tout en accompagnant la montée en charge de ses opérations — passant de 15 000 à 80 000 clients en quatre ans.",
    approach: [
      "Évaluation approfondie du portefeuille de crédits et du provisionnement",
      "Revue du dispositif anti-blanchiment et de conformité réglementaire",
      "Audit des systèmes d'information bancaire et de la sécurité IT",
      "Rapports spécifiques au format exigé par la BCC",
    ],
    results: [
      { icon: CheckCircle2, label: "Certification conforme aux attentes BCC chaque année" },
      { icon: TrendingUp, label: "Politique de provisionnement restructurée" },
      { icon: Clock, label: "Rapports réglementaires livrés systématiquement dans les délais" },
      { icon: Users, label: "Accompagnement reconnu par les investisseurs étrangers" },
    ],
    quote:
      "Leur rigueur et leur compréhension du secteur financier ont été déterminantes dans notre développement.",
    quoteAuthor: "Administrateur Délégué",
  },
  {
    id: "minier",
    sector: "Mines & Ressources",
    sectorIcon: Pickaxe,
    title: "Mandat CAC pour une société minière à capitaux étrangers",
    location: "Kolwezi, Katanga, RDC",
    context:
      "Une société minière détenue par un groupe australien devait nommer un commissaire aux comptes local répondant simultanément aux exigences de l'OHADA et aux attentes de reporting IFRS du groupe — avec des délais de clôture très courts imposés par la maison-mère.",
    approach: [
      "Double programme de travail OHADA et IFRS intégré",
      "Équipe dédiée basée à Kolwezi pendant les campagnes d'audit",
      "Coordination directe avec les auditeurs du groupe en Australie",
      "Reporting en anglais pour la maison-mère, en français pour le statutaire",
    ],
    results: [
      { icon: CheckCircle2, label: "Opinion sans réserve sur les deux référentiels" },
      { icon: Clock, label: "Délais groupe respectés malgré le décalage horaire" },
      { icon: TrendingUp, label: "8 recommandations opérationnelles adoptées" },
      { icon: Users, label: "Confiance établie avec les auditeurs groupe" },
    ],
    quote:
      "Avoir un CAC qui maîtrise l'OHADA et l'IFRS, sur le terrain, en anglais — c'est exactement ce qu'il nous fallait.",
    quoteAuthor: "CFO Groupe (Melbourne)",
  },
]

export function CommissariatCas() {
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
              Des mandats exigeants,
              <br />
              menés avec rigueur.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
              Voici quelques exemples anonymisés de mandats de commissariat
              aux comptes illustrant la diversité de nos interventions et
              la valeur ajoutée que nous apportons à nos clients.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Cas précédent"
              className="inline-flex h-12 w-12 items-center justify-center border border-hairline bg-white text-brand-navy/50 transition-colors hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === CASE_STUDIES.length - 1}
              aria-label="Cas suivant"
              className="inline-flex h-12 w-12 items-center justify-center border border-hairline bg-white text-brand-navy/50 transition-colors hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
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
          {/* Left — Context + Approach */}
          <article className="border border-hairline bg-white p-8 md:col-span-7 md:p-10">
            <div className="max-w-2xl">
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

              <h3 className="font-serif text-2xl leading-snug text-brand-navy md:text-3xl">
                {activeCase.title}
              </h3>

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
                Discutons de votre mandat
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