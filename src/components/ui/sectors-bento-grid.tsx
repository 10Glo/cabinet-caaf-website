// src/components/ui/sectors-bento-grid.tsx
"use client"

import Link from "next/link"
import { ArrowRight, Landmark, Factory, Building2, Briefcase, Globe2, Hospital, Pickaxe, Radio } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type SectorCard = {
  title: string
  description: string
  href: string
  icon: LucideIcon
  tags: string[]
  accent?: boolean
}

const SECTORS: SectorCard[] = [
  {
    title: "Mines & Ressources Naturelles",
    description: "De la conformité artisanale à l'audit industriel à grande échelle : sécurisation des flux de revenus et conformité aux exigences des sièges internationaux. 40+ missions — présence Katanga.",
    href: "#mines-ressources",
    icon: Pickaxe,
    tags: ["Audit des revenus", "ESG & Conformité", "Due diligence minière"],
    accent: true,
  },
  {
    title: "Banque & Services Financiers",
    description: "Audit de conformité BCC, contrôle interne bancaire, reporting IFRS et renforcement des dispositifs de gouvernance pour les institutions financières.",
    href: "#banque-services-financiers",
    icon: Landmark,
    tags: ["Conformité BCC", "Reporting IFRS", "Gouvernance"],
  },
  {
    title: "Télécommunications",
    description: "Audit du backbone numérique de la RDC. Évaluation des licences spectrales, conformité ARPTC et vérification des transactions à haut volume.",
    href: "#telecommunications",
    icon: Radio,
    tags: ["Licences spectrales", "Conformité ARPTC"],
  },
  {
    title: "Industrie & Production",
    description: "Rationalisation des coûts, optimisation des processus industriels et restructuration des chaînes de valeur dans les zones industrielles émergentes.",
    href: "#industrie-production",
    icon: Factory,
    tags: ["Supply chain", "Audit opérationnel"],
  },
  {
    title: "ONG & Développement",
    description: "Audit des subventions et reporting de transparence pour les bailleurs internationaux et agences de développement opérant dans la région des Grands Lacs.",
    href: "#ong-developpement",
    icon: Globe2,
    tags: ["Audit bailleurs", "Transparence"],
  },
  {
    title: "Institutions & Secteur Public",
    description: "Audit de projets financés, conformité PTF, renforcement institutionnel et gouvernance publique.",
    href: "#institutions-secteur-public",
    icon: Building2,
    tags: ["Projets financés", "Gouvernance"],
  },
  {
    title: "Groupes & Holdings",
    description: "Consolidation des comptes, audit des filiales, harmonisation comptable et planification fiscale multi-entités.",
    href: "#groupes-holdings",
    icon: Briefcase,
    tags: ["Consolidation", "Filiales"],
  },
  {
    title: "Santé & Éducation",
    description: "Conformité réglementaire, audit des flux financiers et accompagnement des établissements de santé et d'éducation.",
    href: "#sante-education",
    icon: Hospital,
    tags: ["Réglementaire", "Flux financiers"],
  },
]

function SectorTag({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex border border-slate-200 bg-slate-50 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500">{children}</span>
}

export function SectorsBentoGrid() {
  return (
    <section id="secteurs" className="bg-white px-6 sm:px-10 py-20 lg:py-24 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl">
        {/* Header — editorial, left-aligned */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Vue d&apos;ensemble</span>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-slate-900 md:text-5xl">
            Des environnements complexes,
            <br />
            <span className="text-slate-400">une lecture sectorielle adaptée.</span>
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-slate-500">
            Chaque secteur a ses réalités réglementaires et ses risques propres. Notre équipe adapte ses interventions au contexte précis de chaque industrie — avec la même exigence de rigueur et de clarté.
          </p>
        </div>

        {/* Grid — 2 cols desktop, plus aéré */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {SECTORS.map((sector) => (
            <article key={sector.title} className={`group flex flex-col justify-between border bg-white p-8 ${sector.accent ? "border-primary/20 bg-primary/[0.02]" : "border-slate-200"}`}>
              {sector.accent && <div className="mb-6 h-[2px] w-10 bg-primary" />}
              <div>
                <div className="mb-6 flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50">
                  <sector.icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
                </div>
                <h3 className="font-serif text-xl leading-tight text-slate-900">{sector.title}</h3>
                <p className="mt-3 font-sans text-sm leading-7 text-slate-500">{sector.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {sector.tags.map((tag) => (
                    <SectorTag key={tag}>{tag}</SectorTag>
                  ))}
                </div>
              </div>
              <div className="mt-8 border-t border-slate-200 pt-5">
                <Link href={sector.href} className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary transition-all hover:gap-3">
                  Explorer ce secteur <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom strip — corporate, no card */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-slate-200 bg-slate-50 px-8 py-5 md:flex-row">
          <p className="font-sans text-sm text-slate-600">
            Votre secteur n&apos;apparaît pas ? <span className="font-medium text-slate-900">Notre méthodologie est adaptable à tout environnement réglementaire.</span>
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary hover:gap-3 transition-all">
            Nous consulter <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
