
"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  FileCheck,
  FileWarning,
  Handshake,
  AlertTriangle,
  ScrollText,
} from "lucide-react"

const MISSIONS = [
  {
    id: "certification",
    icon: FileCheck,
    title: "Certification des comptes annuels",
    subtitle: "Mission principale",
    description:
      "Vérification et certification que les états financiers annuels sont réguliers, sincères et donnent une image fidèle du patrimoine, de la situation financière et du résultat de la société — conformément au référentiel OHADA.",
    deliverables: [
      "Rapport général du commissaire aux comptes",
      "Opinion sur les comptes annuels",
      "Observations éventuelles sur la régularité",
    ],
  },
  {
    id: "conventions",
    icon: Handshake,
    title: "Rapport spécial sur les conventions",
    subtitle: "Conventions réglementées",
    description:
      "Examen et rapport sur les conventions conclues entre la société et ses dirigeants, administrateurs ou actionnaires significatifs. Une obligation légale visant à prévenir les conflits d'intérêts et protéger les minoritaires.",
    deliverables: [
      "Rapport spécial sur les conventions réglementées",
      "Liste des conventions autorisées",
      "Analyse des conventions non autorisées",
    ],
  },
  {
    id: "alerte",
    icon: AlertTriangle,
    title: "Procédure d'alerte",
    subtitle: "Prévention des difficultés",
    description:
      "Déclenchement de la procédure d'alerte lorsque le commissaire identifie des faits de nature à compromettre la continuité de l'exploitation. Un rôle de vigie qui protège l'entreprise, ses salariés et ses créanciers.",
    deliverables: [
      "Lettre d'alerte à la direction",
      "Rapport au conseil d'administration",
      "Saisine éventuelle du tribunal de commerce",
    ],
  },
  {
    id: "infractions",
    icon: FileWarning,
    title: "Révélation des faits délictueux",
    subtitle: "Obligation légale",
    description:
      "Obligation légale de porter à la connaissance du procureur de la République les faits délictueux découverts au cours de la mission — détournements, faux, abus de biens sociaux — indépendamment de leur montant.",
    deliverables: [
      "Signalement au procureur de la République",
      "Documentation des faits constatés",
      "Communication au conseil d'administration",
    ],
  },
  {
    id: "verifications",
    icon: ScrollText,
    title: "Vérifications spécifiques",
    subtitle: "Contrôles complémentaires",
    description:
      "Ensemble de vérifications imposées par la loi : sincérité du rapport de gestion, respect de l'égalité entre actionnaires, régularité des conventions courantes, exactitude des informations données en assemblée.",
    deliverables: [
      "Rapport sur le rapport de gestion",
      "Vérification de la concordance des informations",
      "Contrôle de l'égalité entre actionnaires",
    ],
  },
]

export function CommissariatSousServices() {
  const [activeId, setActiveId] = useState(MISSIONS[0].id)

  const activeMission =
    MISSIONS.find((m) => m.id === activeId) ?? MISSIONS[0]

  const ActiveIcon = activeMission.icon

  return (
    <section id="missions" className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* ── Heading ── */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Missions légales
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
            Un mandat complet,
            <br />
            bien au-delà de la certification.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            Le commissaire aux comptes exerce cinq missions distinctes définies
            par l&apos;Acte Uniforme OHADA. Chacune répond à un objectif
            spécifique de protection, de transparence et de prévention.
          </p>
        </div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Left — Mission tabs */}
          <div className="border border-hairline bg-white md:col-span-4">
            <div className="border-b border-hairline px-8 py-6 md:px-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                Les 5 missions du CAC
              </p>
            </div>

            <div className="divide-y divide-hairline">
              {MISSIONS.map((mission) => {
                const isActive = mission.id === activeId
                const Icon = mission.icon

                return (
                  <button
                    key={mission.id}
                    type="button"
                    onClick={() => setActiveId(mission.id)}
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
                        {mission.title}
                      </h3>
                      <p
                        className={`mt-1 text-sm transition-colors ${
                          isActive
                            ? "text-ink/50"
                            : "text-ink/40 group-hover:text-ink/55"
                        }`}
                      >
                        {mission.subtitle}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right — Active mission detail */}
          <article className="border border-hairline bg-white p-8 md:col-span-8 md:p-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                <ActiveIcon
                  className="h-6 w-6 text-primary"
                  strokeWidth={1.7}
                />
              </div>

              <div className="mb-6">
                <h3 className="font-serif text-2xl text-brand-navy md:text-3xl">
                  {activeMission.title}
                </h3>
                <p className="mt-2 text-sm text-ink/45">
                  {activeMission.subtitle}
                </p>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-ink/60 md:text-base">
                {activeMission.description}
              </p>

              <div className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/40" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">
                    Livrables clés
                  </span>
                </div>

                <ul className="grid gap-3 lg:max-w-2xl">
                  {activeMission.deliverables.map((item) => (
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
                  Échanger sur cette mission
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