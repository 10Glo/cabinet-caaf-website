// src/components/ui/sector-case-studies.tsx
"use client"

import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  ShieldCheck,
  Pickaxe,
  Landmark,
  Radio,
  Factory,
  Globe2,
  Briefcase,
  CheckCircle2,
  FileCheck2,
  TrendingUp,
  Scale,
  ChevronRight,
  type LucideIcon,
} from "lucide-react"

// ─── Types ───────────────────────────────────────────────
type CaseMetric = {
  value: string
  label: string
}

type CaseStudy = {
  sector: string
  sectorIcon: LucideIcon
  title: string
  context: string
  approach: string[]
  metrics: CaseMetric[]
  outcome: string
  variant: "light" | "dark" | "featured"
  confidential?: boolean
}

// ─── Data ────────────────────────────────────────────────
const CASES: CaseStudy[] = [
  {
    sector: "Mines & Ressources",
    sectorIcon: Pickaxe,
    title: "Sécurisation fiscale et optimisation de conformité pour un opérateur minier du Lualaba",
    context:
      "Un opérateur stratégique de la chaîne logistique minière au Lualaba faisait face à des incohérences dans ses traitements fiscaux, des zones de surcoûts non identifiées et une exposition réglementaire croissante.",
    approach: [
      "Audit fiscal approfondi sur 3 exercices",
      "Cartographie des risques réglementaires",
      "Restructuration des flux déclaratifs",
      "Sécurisation de la documentation de prix de transfert",
    ],
    metrics: [
      { value: "$2M", label: "de surcoûts identifiés" },
      { value: "100%", label: "conformité rétablie" },
      { value: "3", label: "axes de remédiation" },
    ],
    outcome:
      "Le client a pu régulariser l'ensemble de ses positions fiscales, sécuriser ses déclarations et présenter un dossier de conformité robuste à son siège international.",
    variant: "featured",
  },
  {
    sector: "Banque & Services Financiers",
    sectorIcon: Landmark,
    title: "Renforcement du contrôle interne et mise en conformité BCC",
    context:
      "Une institution bancaire de premier plan nécessitait un diagnostic complet de son dispositif de contrôle interne suite à des observations répétées de la Banque Centrale du Congo.",
    approach: [
      "Évaluation du dispositif de contrôle existant",
      "Analyse des écarts par rapport aux normes BCC",
      "Refonte des procédures de contrôle permanent",
      "Formation des équipes internes",
    ],
    metrics: [
      { value: "87%", label: "couverture des risques" },
      { value: "0", label: "observation BCC post-mission" },
      { value: "12", label: "procédures restructurées" },
    ],
    outcome:
      "L'institution a obtenu un rapport de conformité satisfaisant lors de l'inspection suivante de la BCC, avec zéro observation majeure.",
    variant: "light",
  },
  {
    sector: "Télécommunications",
    sectorIcon: Radio,
    title: "Audit transactionnel et vérification des flux de revenus",
    context:
      "Un opérateur télécom majeur devait faire auditer ses systèmes de facturation et de collecte de revenus pour répondre aux exigences de l'ARPTC et de ses actionnaires internationaux.",
    approach: [
      "Revue des systèmes de billing et médiation",
      "Rapprochement des flux de revenus déclarés",
      "Analyse des écarts de taxation sectorielle",
      "Vérification des redevances réglementaires",
    ],
    metrics: [
      { value: "5%", label: "écart de revenus détecté" },
      { value: "$800K", label: "ajustements réalisés" },
      { value: "100%", label: "conformité ARPTC" },
    ],
    outcome:
      "L'opérateur a pu corriger ses déclarations de revenus, sécuriser sa relation avec le régulateur et renforcer la confiance de ses actionnaires.",
    variant: "dark",
  },
  {
    sector: "ONG & Développement",
    sectorIcon: Globe2,
    title: "Audit de subventions et reporting bailleur pour un programme régional",
    context:
      "Un programme de développement financé par plusieurs bailleurs internationaux dans la région des Grands Lacs nécessitait un audit indépendant de l'utilisation des fonds sur 24 mois.",
    approach: [
      "Audit financier des dépenses sur 2 exercices",
      "Vérification de l'éligibilité des charges",
      "Rapprochement budgétaire par composante",
      "Rédaction du rapport bailleur au format requis",
    ],
    metrics: [
      { value: "$4.2M", label: "de fonds audités" },
      { value: "98.7%", label: "taux d'éligibilité" },
      { value: "3", label: "bailleurs satisfaits" },
    ],
    outcome:
      "Le programme a obtenu le renouvellement de son financement grâce à la qualité du rapport d'audit et au taux d'éligibilité exceptionnel des dépenses.",
    variant: "light",
  },
]

// ─── Metric Card ─────────────────────────────────────────
function MetricBlock({
  metric,
  variant = "light",
}: {
  metric: CaseMetric
  variant?: "light" | "dark"
}) {
  return (
    <div
      className={
        variant === "dark"
          ? "border border-white/[0.06] bg-white/[0.03] px-5 py-4"
          : "border border-hairline bg-surface-card/40 px-5 py-4"
      }
    >
      <div
        className={
          variant === "dark"
            ? "font-serif text-3xl leading-none text-primary"
            : "font-serif text-3xl leading-none text-primary"
        }
      >
        {metric.value}
      </div>
      <div
        className={
          variant === "dark"
            ? "mt-2 text-[11px] uppercase tracking-[0.14em] text-white/40"
            : "mt-2 text-[11px] uppercase tracking-[0.14em] text-ink/40"
        }
      >
        {metric.label}
      </div>
    </div>
  )
}

// ─── Step Item ───────────────────────────────────────────
function ApproachStep({
  step,
  variant = "light",
}: {
  step: string
  variant?: "light" | "dark"
}) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2
        className={
          variant === "dark"
            ? "mt-0.5 h-4 w-4 shrink-0 text-primary"
            : "mt-0.5 h-4 w-4 shrink-0 text-primary"
        }
        strokeWidth={1.7}
      />
      <span
        className={
          variant === "dark"
            ? "text-sm leading-7 text-white/65"
            : "text-sm leading-7 text-ink/60"
        }
      >
        {step}
      </span>
    </li>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════
export function SectorCaseStudies() {
  return (
    <section className="border-t border-hairline bg-canvas px-10 py-section">
      <div className="w-full">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Cas d&apos;intervention
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Des résultats concrets,
              <br />
              <span className="text-ink/40">
                dans des contextes exigeants.
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-relaxed text-ink/60">
              Chaque mission est unique. Voici une sélection d&apos;interventions
              représentatives de notre approche sectorielle, présentées dans le
              respect de la confidentialité de nos clients.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <ShieldCheck
                className="h-4 w-4 text-primary/70"
                strokeWidth={1.7}
              />
              <span className="text-xs uppercase tracking-[0.14em] text-ink/35">
                Détails anonymisés par engagement de confidentialité
              </span>
            </div>
          </div>
        </div>

        {/* Cases */}
        <div className="space-y-5">
          {CASES.map((caseStudy, index) => (
            <article
              key={caseStudy.title}
              className={
                caseStudy.variant === "featured"
                  ? "border border-hairline bg-white"
                  : caseStudy.variant === "dark"
                    ? "border border-white/10 bg-surface-dark"
                    : "border border-hairline bg-white"
              }
            >
              <div
                className={
                  caseStudy.variant === "featured"
                    ? "grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr]"
                    : "grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]"
                }
              >
                {/* Left: Context + Approach */}
                <div className="p-8 md:p-10 lg:p-12">
                  {/* Sector badge */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={
                          caseStudy.variant === "dark"
                            ? "flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5"
                            : "flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/5"
                        }
                      >
                        <caseStudy.sectorIcon
                          className="h-5 w-5 text-primary"
                          strokeWidth={1.7}
                        />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-primary">
                          {caseStudy.sector}
                        </p>
                        <p
                          className={
                            caseStudy.variant === "dark"
                              ? "text-xs uppercase tracking-[0.14em] text-white/30"
                              : "text-xs uppercase tracking-[0.14em] text-ink/30"
                          }
                        >
                          Mission d&apos;intervention
                        </p>
                      </div>
                    </div>

                    <div
                      className={
                        caseStudy.variant === "dark"
                          ? "flex items-center gap-1.5 border border-white/[0.06] bg-white/[0.03] px-3 py-1.5"
                          : "flex items-center gap-1.5 border border-hairline bg-canvas px-3 py-1.5"
                      }
                    >
                      <FileCheck2
                        className="h-3 w-3 text-primary"
                        strokeWidth={1.7}
                      />
                      <span
                        className={
                          caseStudy.variant === "dark"
                            ? "text-[9px] font-semibold uppercase tracking-wider text-white/40"
                            : "text-[9px] font-semibold uppercase tracking-wider text-ink/35"
                        }
                      >
                        Cas #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={
                      caseStudy.variant === "dark"
                        ? "max-w-2xl font-serif text-2xl leading-tight text-white md:text-3xl"
                        : "max-w-2xl font-serif text-2xl leading-tight text-brand-navy md:text-3xl"
                    }
                  >
                    {caseStudy.title}
                  </h3>

                  {/* Context */}
                  <div className="mt-6">
                    <p
                      className={
                        caseStudy.variant === "dark"
                          ? "text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25"
                          : "text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/30"
                      }
                    >
                      Contexte
                    </p>
                    <p
                      className={
                        caseStudy.variant === "dark"
                          ? "mt-2 text-sm leading-7 text-white/55"
                          : "mt-2 text-sm leading-7 text-ink/55"
                      }
                    >
                      {caseStudy.context}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="mt-6">
                    <p
                      className={
                        caseStudy.variant === "dark"
                          ? "text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25"
                          : "text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/30"
                      }
                    >
                      Approche
                    </p>
                    <ul className="mt-3 space-y-2">
                      {caseStudy.approach.map((step) => (
                        <ApproachStep
                          key={step}
                          step={step}
                          variant={
                            caseStudy.variant === "dark" ? "dark" : "light"
                          }
                        />
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Metrics + Outcome */}
                <div
                  className={
                    caseStudy.variant === "dark"
                      ? "flex flex-col justify-between border-l border-white/[0.06] p-8 md:p-10 lg:p-12"
                      : "flex flex-col justify-between border-l border-hairline bg-canvas/50 p-8 md:p-10 lg:p-12"
                  }
                >
                  <div>
                    <p
                      className={
                        caseStudy.variant === "dark"
                          ? "mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25"
                          : "mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/30"
                      }
                    >
                      Résultats mesurés
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      {caseStudy.metrics.map((metric) => (
                        <MetricBlock
                          key={metric.label}
                          metric={metric}
                          variant={
                            caseStudy.variant === "dark" ? "dark" : "light"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div
                    className={
                      caseStudy.variant === "dark"
                        ? "mt-8 border-t border-white/[0.06] pt-6"
                        : "mt-8 border-t border-hairline pt-6"
                    }
                  >
                    <p
                      className={
                        caseStudy.variant === "dark"
                          ? "mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25"
                          : "mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/30"
                      }
                    >
                      Impact
                    </p>
                    <p
                      className={
                        caseStudy.variant === "dark"
                          ? "text-sm italic leading-7 text-white/60"
                          : "text-sm italic leading-7 text-ink/55"
                      }
                    >
                      {caseStudy.outcome}
                    </p>

                    <div className="mt-6">
                      <Link
                        href="#contact"
                        className={
                          caseStudy.variant === "dark"
                            ? "group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
                            : "group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
                        }
                      >
                        Discuter d&apos;une mission similaire
                        <ChevronRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 border border-hairline bg-white p-8 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck
                  className="h-5 w-5 text-primary"
                  strokeWidth={1.7}
                />
                <p className="text-sm font-semibold text-brand-navy">
                  Confidentialité
                </p>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-ink/55">
                Les cas présentés ci-dessus sont anonymisés et synthétisés dans
                le respect de nos engagements de confidentialité. Nous ne
                communiquons jamais de données clients identifiables sans
                autorisation explicite. Pour des références sectorielles
                détaillées, contactez notre direction.
              </p>
            </div>

            <Link
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-3 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
            >
              Demander des références
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}