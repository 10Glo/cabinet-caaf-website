
"use client"

import {
  Globe,
  UserCheck,
  BookOpen,
  Languages,
  Clock,
  ShieldCheck,
} from "lucide-react"

const DIFFERENTIATORS = [
  {
    icon: BookOpen,
    title: "Double référentiel maîtrisé",
    description:
      "Nous intervenons avec une maîtrise complète des normes OHADA et des standards internationaux ISA et IFRS — une exigence indispensable pour les groupes opérant en Afrique centrale.",
  },
  {
    icon: Globe,
    title: "Connaissance terrain RDC",
    description:
      "Implantés à Lubumbashi et actifs sur l'ensemble du territoire congolais, nous comprenons les réalités opérationnelles, fiscales et réglementaires locales comme peu de cabinets peuvent le faire.",
  },
  {
    icon: UserCheck,
    title: "Interlocuteur associé dédié",
    description:
      "Chaque mission est supervisée directement par un associé. Vous ne parlez jamais à un intermédiaire — vous avez accès au décideur, du cadrage à la restitution.",
  },
  {
    icon: Languages,
    title: "Équipes bilingues",
    description:
      "Nos équipes opèrent indifféremment en français et en anglais, garantissant une communication fluide avec les maisons-mères, investisseurs et partenaires internationaux.",
  },
  {
    icon: Clock,
    title: "30 ans d'expérience",
    description:
      "Trois décennies d'interventions dans les secteurs clés de la RDC — mines, banque, industrie, organisations internationales — nous confèrent une lecture sectorielle inégalée.",
  },
  {
    icon: ShieldCheck,
    title: "Indépendance totale",
    description:
      "Cabinet indépendant et non affilié à un réseau international, nous garantissons une objectivité absolue dans nos opinions, libre de tout conflit d'intérêts structurel.",
  },
]

export function AuditFinancierPourquoiCaaf() {
  return (
    <section className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* ── Heading ── */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Pourquoi CAAF
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
            Ce qui nous distingue
            <br />
            des autres cabinets.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            Le choix d'un auditeur est un acte de confiance. Voici les raisons
            pour lesquelles les directions financières, les conseils
            d'administration et les investisseurs nous confient leurs missions
            les plus exigeantes.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {DIFFERENTIATORS.map((item, index) => {
            const Icon = item.icon

            // Layout pattern :
            // Row 1 : 8 + 4
            // Row 2 : 4 + 8
            // Row 3 : 8 + 4
            const isWide = index === 0 || index === 3 || index === 4
            const colSpan = isWide ? "md:col-span-8" : "md:col-span-4"

            // Alternate dark card for visual rhythm
            const isDark = index === 2 || index === 5

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden border p-8 transition-colors md:p-10 ${colSpan} ${
                  isDark
                    ? "border-white/10 bg-surface-dark"
                    : "border-hairline bg-white hover:bg-white"
                }`}
              >
                {/* Background watermark icon */}
                <div
                  className={`pointer-events-none absolute -right-4 -top-4 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06] ${
                    isDark ? "text-white" : "text-brand-navy"
                  }`}
                >
                  <Icon className="h-36 w-36" strokeWidth={0.7} />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`mb-6 inline-flex h-12 w-12 items-center justify-center border ${
                      isDark
                        ? "border-white/10 bg-white/5 text-primary"
                        : "border-primary/20 bg-primary/5 text-primary"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-serif text-xl md:text-2xl ${
                      isDark ? "text-white" : "text-brand-navy"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-4 max-w-lg text-sm leading-7 md:text-base ${
                      isDark ? "text-white/55" : "text-ink/60"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}