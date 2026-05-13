// src/components/expertise/audit-interne/audit-interne-pourquoi-caaf.tsx
"use client"

import {
  ShieldCheck,
  Users,
  BrainCircuit,
  Eye,
  Handshake,
  Zap,
} from "lucide-react"

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: "Approche constructive",
    description: "Nous sommes là pour aider, pas pour sanctionner. Nos rapports proposent des solutions réalisables et pragmatiques adaptées à votre culture d'entreprise.",
  },
  {
    icon: Users,
    title: "Independance garantie",
    description: "Contrairement à un auditeur interne en interne parfois dépendant hiérarchiquement, notre cabinet offre une distance de jugement indispensable pour pointer les vraies faiblesses.",
  },
  {
    icon: BrainCircuit,
    title: "Expertise métier croisée",
    description: "Nos auditeurs internes ne connaissent pas seulement la finance. Ils comprennent le marketing, la production, la logistique et la RH.",
  },
  {
    icon: Eye,
    title: "Vision terrain & direction",
    description: "Nous descendons au niveau opérationnel pour observer, et remontons à la direction pour conseiller. Un pont essentiel entre l'usine et le bureau.",
  },
  {
    icon: Handshake,
    title: "Confidentialité absolue",
    description: "Certains sujets (fraude, RH, stratégies sensibles) nécessitent une discrétion totale. Nous garantissons le secret professionnel le plus strict.",
  },
  {
    icon: Zap,
    title: "Rapidité d'exécution",
    description: "Un audit interne externe peut être mobilisé rapidement sans lourd investissement structurel en temps et salaires permanents.",
  },
]

export function AuditInternePourquoiCaaf() {
  return (
    <section className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* ── Heading ── */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Pourquoi nous choisir
            </span>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
            Le regard neutre
            <br />qui fait avancer l'entreprise.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            L'audit interne en mode projet est souvent préférable pour les PME/ETI qui ne justifient pas encore d'une fonction permanente, ou pour les grandes entreprises souhaitant externaliser une partie de leur activité d'assurance.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {DIFFERENTIATORS.map((item, index) => {
            const Icon = item.icon
            const isWide = index === 0 || index === 3 || index === 4
            const colSpan = isWide ? "md:col-span-8" : "md:col-span-4"
            const isDark = index === 2 || index === 5

            return (
              <article key={item.title} className={`group relative overflow-hidden border p-8 transition-colors md:p-10 ${colSpan} ${isDark ? "border-white/10 bg-surface-dark" : "border-hairline bg-white"}`}>
                <div className={`pointer-events-none absolute -right-4 -top-4 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06] ${isDark ? "text-white" : "text-brand-navy"}`}>
                  <Icon className="h-36 w-36" strokeWidth={0.7} />
                </div>
                <div className="relative z-10">
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center border ${isDark ? "border-white/10 bg-white/5 text-primary" : "border-primary/20 bg-primary/5 text-primary"}`}>
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <h3 className={`font-serif text-xl md:text-2xl ${isDark ? "text-white" : "text-brand-navy"}`}>{item.title}</h3>
                  <p className={`mt-4 max-w-lg text-sm leading-7 md:text-base ${isDark ? "text-white/55" : "text-ink/60"}`}>{item.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}