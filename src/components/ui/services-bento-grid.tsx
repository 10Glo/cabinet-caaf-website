// src/components/ui/services-bento-grid.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  MonitorCheck,
  Landmark,
  SearchCheck,
  BarChart3,
  Handshake,
  ChevronRight,
  Shield,
  Scale,
  TrendingUp,
  BadgeCheck,
} from "lucide-react"

function ServiceTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-hairline bg-canvas px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/40">
      {children}
    </span>
  )
}

function ServiceLink({
  href,
  children,
  dark = false,
}: {
  href: string
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3 ${
        dark ? "text-white/75 hover:text-white" : "text-primary"
      }`}
    >
      {children}
      <ArrowRight
        size={15}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  )
}

export function ServicesBentoGrid() {
  return (
    <section id="services-grid" className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Vue d’ensemble
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Une offre structurée
              <br />
              <span className="text-ink/40">
                autour des enjeux les plus critiques.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            Nos services couvrent les besoins essentiels des organisations :
            fiabilité de l’information financière, maîtrise des risques,
            transformation des fonctions support et accompagnement des décisions
            stratégiques.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* ── 1. AUDIT & ASSURANCE — featured large card */}
          <section className="group border border-hairline bg-white p-8 md:col-span-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Left content */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                    <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={1.7} />
                  </div>
                  <h3 className="font-serif text-3xl text-brand-navy">
                    Audit & Assurance
                  </h3>
                </div>

                <p className="mb-8 max-w-2xl text-base leading-7 text-ink/60">
                  Notre approche d’audit repose sur l’excellence technique, la
                  compréhension du cadre réglementaire congolais et
                  l’application rigoureuse des standards internationaux. Nous
                  apportons une assurance indépendante qui renforce la fiabilité
                  de l’information financière et la confiance des parties
                  prenantes.
                </p>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {[
                    {
                      title: "Audit légal & commissariat",
                      description:
                        "Conformité aux normes OHADA et aux obligations locales.",
                      icon: Landmark,
                    },
                    {
                      title: "Audit interne",
                      description:
                        "Renforcement de la gouvernance, des contrôles et de la gestion des risques.",
                      icon: FileCheck2,
                    },
                    {
                      title: "Audit IT",
                      description:
                        "Évaluation de l’intégrité, de la sécurité et de la fiabilité des systèmes financiers.",
                      icon: MonitorCheck,
                    },
                    {
                      title: "Conversion & reporting IFRS",
                      description:
                        "Préparation de reportings consolidés pour groupes et investisseurs.",
                      icon: BadgeCheck,
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <item.icon
                        className="mt-1 h-4 w-4 shrink-0 text-primary"
                        strokeWidth={1.7}
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-brand-navy">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-ink/50">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right visual/info panel */}
              <div className="flex flex-col justify-between border border-hairline bg-surface-card/40 p-6">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-px w-6 bg-primary" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                      Points forts
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Rigueur documentaire",
                      "Indépendance de jugement",
                      "Référentiels OHADA / IFRS / ISA",
                      "Livrables exploitables par les directions",
                    ].map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 border border-hairline bg-white px-4 py-3"
                      >
                        <Shield className="h-4 w-4 text-primary" strokeWidth={1.7} />
                        <span className="text-sm text-ink/60">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-hairline pt-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <ServiceTag>OHADA</ServiceTag>
                    <ServiceTag>IFRS</ServiceTag>
                    <ServiceTag>ISA</ServiceTag>
                    <ServiceTag>Conformité</ServiceTag>
                  </div>

                  <ServiceLink href="#audit-assurance">
                    Explorer le service d’audit
                  </ServiceLink>
                </div>
              </div>
            </div>
          </section>

          {/* ── 2. INTERNAL CONTROL & RISKS — side card */}
          <section className="border border-hairline bg-surface-card p-8 md:col-span-4 md:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/20 bg-white/70">
              <SearchCheck className="h-6 w-6 text-primary" strokeWidth={1.7} />
            </div>

            <h3 className="font-serif text-2xl text-brand-navy">
              Contrôle Interne & Risques
            </h3>

            <p className="mt-4 text-sm leading-7 text-ink/55">
              Nous aidons les organisations à identifier, cartographier et
              maîtriser leurs risques opérationnels, financiers et de
              conformité, avec une attention particulière à la robustesse des
              processus internes.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Cartographie des risques",
                "Dispositifs de contrôle",
                "Audit de conformité",
                "Prévention fraude & anomalies",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border border-hairline bg-white px-4 py-3"
                >
                  <BadgeCheck className="h-4 w-4 text-primary" strokeWidth={1.7} />
                  <span className="text-sm text-ink/60">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-hairline pt-6">
              <ServiceLink href="#controle-risques">
                Demander un diagnostic
              </ServiceLink>
            </div>
          </section>

          {/* ── 3. CONSULTING — dark card */}
          <section className="border border-white/10 bg-surface-dark p-8 md:col-span-6 md:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5">
                <BarChart3 className="h-6 w-6 text-primary" strokeWidth={1.7} />
              </div>
              <h3 className="font-serif text-3xl text-white">
                Consulting
              </h3>
            </div>

            <p className="mb-8 max-w-xl text-sm leading-7 text-white/55">
              Nous accompagnons les entreprises dans leurs projets de
              transformation, d’optimisation des fonctions financières et
              d’amélioration de la performance, avec une approche fondée sur les
              données et l’exécution.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Stratégie & pilotage",
                  description:
                    "Études de marché, structuration de croissance et accompagnement des décisions.",
                },
                {
                  title: "Transformation financière",
                  description:
                    "Optimisation des fonctions finance, reporting et fiabilisation des processus.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-primary pl-4">
                  <h4 className="text-base font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-white/50">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/[0.06] pt-6">
              <ServiceLink href="#consulting" dark>
                Découvrir notre approche consulting
              </ServiceLink>
            </div>
          </section>

          {/* ── 4. ADVISORY — bottom right */}
          <section className="group relative overflow-hidden border border-hairline bg-white p-8 md:col-span-6 md:p-10">
            {/* Decorative bg icon */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06]">
              <Handshake className="h-56 w-56 text-brand-navy" strokeWidth={0.5} />
            </div>

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                  <Handshake className="h-6 w-6 text-primary" strokeWidth={1.7} />
                </div>
                <h3 className="font-serif text-3xl text-brand-navy">
                  Advisory
                </h3>
              </div>

              <p className="mb-8 max-w-xl text-sm leading-7 text-ink/55">
                Nous apportons un conseil financier fiable dans les situations
                sensibles : opérations de croissance, restructurations,
                transactions, investigations ou réorganisations stratégiques.
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "M&A Support",
                    description:
                      "Due diligence, valorisation et accompagnement des acquisitions.",
                  },
                  {
                    title: "Risk Advisory",
                    description:
                      "Investigations ciblées, dispositifs anti-fraude et gestion des risques.",
                  },
                  {
                    title: "Restructuration",
                    description:
                      "Accompagnement des transformations et rééquilibrages financiers.",
                  },
                  {
                    title: "ESG & Gouvernance",
                    description:
                      "Lecture des obligations de durabilité et structuration du reporting.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                      {item.title}
                    </span>
                    <p className="mt-2 text-sm font-medium leading-6 text-ink/70">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-hairline pt-6">
                <ServiceLink href="#advisory">
                  Échanger sur un besoin spécifique
                </ServiceLink>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-hairline bg-white px-8 py-5 md:flex-row">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.7} />
            <p className="text-sm text-ink/60">
              Une intervention peut mobiliser plusieurs expertises à la fois.{" "}
              <span className="font-medium text-ink/80">
                Nous construisons toujours l’approche la plus adaptée à votre contexte.
              </span>
            </p>
          </div>

          <Link
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
          >
            Nous consulter
            <ChevronRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}