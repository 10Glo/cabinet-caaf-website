// src/components/ui/certifications-detail.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  Globe2,
  Award,
  Scale,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  type LucideIcon,
} from "lucide-react"

type Certification = {
  title: string
  fullName: string
  description: string
  icon: LucideIcon
  scope: string[]
  implications: string[]
  verificationUrl?: string
  variant: "light" | "dark" | "accent"
}

const CERTIFICATIONS: Certification[] = [
  {
    title: "IFAC",
    fullName: "International Federation of Accountants",
    description:
      "La IFAC est l'organisation mondiale de la profession comptable. Notre conformité aux normes IFAC garantit que nos pratiques d'audit et d'assurance répondent aux standards les plus élevés reconnus internationalement.",
    icon: Globe2,
    scope: [
      "Normes internationales d'audit (ISA)",
      "Code de déontologie IESBA",
      "Normes de contrôle qualité (ISQM)",
      "Formation professionnelle continue",
    ],
    implications: [
      "Rapports acceptés par les investisseurs internationaux",
      "Méthodologie alignée sur les Big Four",
      "Crédibilité auprès des bailleurs de fonds",
    ],
    variant: "light",
  },
  {
    title: "ONEC RDC",
    fullName: "Ordre National des Experts-Comptables de la RDC",
    description:
      "L'inscription à l'ONEC est la condition légale d'exercice de la profession d'expert-comptable et de commissaire aux comptes en République Démocratique du Congo. Elle atteste de notre compétence technique et de notre conformité déontologique.",
    icon: Award,
    scope: [
      "Inscription au tableau de l'Ordre",
      "Respect du code de déontologie national",
      "Assurance responsabilité civile professionnelle",
      "Contrôle qualité périodique",
    ],
    implications: [
      "Habilitation légale à certifier les comptes",
      "Reconnaissance par les juridictions congolaises",
      "Protection juridique des missions réalisées",
    ],
    variant: "dark",
  },
  {
    title: "OHADA",
    fullName: "Organisation pour l'Harmonisation en Afrique du Droit des Affaires",
    description:
      "Le référentiel comptable OHADA est le cadre normatif applicable dans les 17 États membres. Notre maîtrise du SYSCOHADA révisé garantit la conformité des états financiers produits ou audités par nos soins.",
    icon: Scale,
    scope: [
      "SYSCOHADA révisé (2017)",
      "Plan comptable OHADA",
      "Normes de consolidation",
      "Traitement des instruments financiers",
    ],
    implications: [
      "États financiers conformes dans toute la zone OHADA",
      "Harmonisation multi-pays pour les groupes",
      "Base solide pour la conversion IFRS",
    ],
    variant: "light",
  },
  {
    title: "ISA",
    fullName: "International Standards on Auditing",
    description:
      "Les normes ISA constituent le référentiel méthodologique mondial pour la conduite des missions d'audit. Nous appliquons l'intégralité du corpus ISA dans toutes nos missions de certification.",
    icon: ShieldCheck,
    scope: [
      "ISA 200 à 810 — corpus complet",
      "Approche par les risques",
      "Documentation et traçabilité",
      "Rapport d'audit normé",
    ],
    implications: [
      "Missions reconnues par les sièges internationaux",
      "Rapports lisibles par tout auditeur mondial",
      "Qualité d'exécution vérifiable",
    ],
    variant: "accent",
  },
]

export function CertificationsDetail() {
  return (
    <section id="certifications-detail" className="bg-canvas px-10 py-section">
      <div className="w-full">
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Détail des accréditations
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Chaque certification,
              <br />
              <span className="text-ink/40">un engagement concret.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            Nos accréditations ne sont pas des labels décoratifs. Elles
            structurent notre méthodologie, encadrent notre déontologie et
            garantissent à nos clients un niveau de qualité vérifiable.
          </p>
        </div>

        <div className="space-y-5">
          {CERTIFICATIONS.map((cert) => (
            <article
              key={cert.title}
              className={
                cert.variant === "dark"
                  ? "border border-white/10 bg-surface-dark"
                  : cert.variant === "accent"
                    ? "border border-primary/20 bg-primary/[0.02]"
                    : "border border-hairline bg-white"
              }
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="p-8 md:p-10 lg:p-12">
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className={
                        cert.variant === "dark"
                          ? "flex h-14 w-14 items-center justify-center border border-white/10 bg-white/5"
                          : "flex h-14 w-14 items-center justify-center border border-primary/20 bg-primary/5"
                      }
                    >
                      <cert.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3
                        className={
                          cert.variant === "dark"
                            ? "font-serif text-3xl text-white"
                            : "font-serif text-3xl text-brand-navy"
                        }
                      >
                        {cert.title}
                      </h3>
                      <p
                        className={
                          cert.variant === "dark"
                            ? "text-xs text-white/40"
                            : "text-xs text-ink/40"
                        }
                      >
                        {cert.fullName}
                      </p>
                    </div>
                  </div>

                  <p
                    className={
                      cert.variant === "dark"
                        ? "mb-8 max-w-2xl text-base leading-7 text-white/55"
                        : "mb-8 max-w-2xl text-base leading-7 text-ink/55"
                    }
                  >
                    {cert.description}
                  </p>

                  <div>
                    <p
                      className={
                        cert.variant === "dark"
                          ? "mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25"
                          : "mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/30"
                      }
                    >
                      Périmètre couvert
                    </p>
                    <ul className="space-y-2">
                      {cert.scope.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                            strokeWidth={1.7}
                          />
                          <span
                            className={
                              cert.variant === "dark"
                                ? "text-sm leading-6 text-white/65"
                                : "text-sm leading-6 text-ink/60"
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={
                    cert.variant === "dark"
                      ? "flex flex-col justify-between border-l border-white/[0.06] p-8 md:p-10 lg:p-12"
                      : "flex flex-col justify-between border-l border-hairline bg-canvas/50 p-8 md:p-10 lg:p-12"
                  }
                >
                  <div>
                    <p
                      className={
                        cert.variant === "dark"
                          ? "mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25"
                          : "mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/30"
                      }
                    >
                      Ce que cela garantit
                    </p>

                    <div className="space-y-4">
                      {cert.implications.map((item) => (
                        <div
                          key={item}
                          className={
                            cert.variant === "dark"
                              ? "border border-white/[0.06] bg-white/[0.03] px-4 py-3"
                              : "border border-hairline bg-white px-4 py-3"
                          }
                        >
                          <div className="flex items-start gap-3">
                            <BookOpen
                              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                              strokeWidth={1.7}
                            />
                            <span
                              className={
                                cert.variant === "dark"
                                  ? "text-sm leading-6 text-white/65"
                                  : "text-sm leading-6 text-ink/60"
                              }
                            >
                              {item}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
                    >
                      Vérifier cette accréditation
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}