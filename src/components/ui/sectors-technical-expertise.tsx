// src/components/ui/sectors-technical-expertise.tsx
"use client"

import Link from "next/link"
import { ArrowRight, Globe2, ShieldCheck, Scale, Landmark, BookOpen } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type ExpertiseItem = {
  title: string
  description: string
  icon: LucideIcon
  tags: string[]
}

const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    title: "Conformité régionale",
    description: "Navigation experte des normes OHADA et des codes fiscaux locaux (DGI/DGRAD) pour les multinationales et groupes opérant en RDC.",
    icon: Globe2,
    tags: ["OHADA", "DGI", "DGRAD"],
  },
  {
    title: "Maîtrise des risques",
    description: "Fonctions d'audit interne spécialisées pour identifier et neutraliser les risques opérationnels dans les marchés frontières.",
    icon: ShieldCheck,
    tags: ["Audit interne", "Cartographie", "Remédiation"],
  },
  {
    title: "Intégration IFAC",
    description: "Alignement complet avec les normes IFAC, garantissant que vos rapports locaux sont de niveau international.",
    icon: Scale,
    tags: ["ISA", "IFRS", "IFAC"],
  },
]

export function SectorsTechnicalExpertise() {
  return (
    <section className="bg-[#f8fafc] border-t border-slate-200/60 px-6 sm:px-10 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Expertise technique</span>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-slate-900 md:text-5xl">
            Les fondamentaux <br />
            <span className="text-slate-400">de notre rigueur technique.</span>
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-slate-500">
            Au-delà de la lecture sectorielle, notre équipe s&apos;appuie sur une maîtrise approfondie des référentiels comptables et d&apos;audit applicables en RDC.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {EXPERTISE_ITEMS.map((item) => (
            <article key={item.title} className="border border-slate-200 bg-white p-8">
              <div className="mb-6 flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50">
                <item.icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
              </div>
              <h3 className="font-serif text-xl text-slate-900">{item.title}</h3>
              <p className="mt-3 font-sans text-sm leading-7 text-slate-500">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="border border-slate-200 bg-slate-50 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-slate-200 bg-white p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-8">
              {[
                { badge: "Certifié", title: "IFAC", desc: "Standards internationaux", icon: Globe2 },
                { badge: "Accrédité", title: "ONEC", desc: "Ordre National des Experts-Comptables", icon: Landmark },
                { badge: "Conforme", title: "OHADA", desc: "Référentiel comptable régional", icon: BookOpen },
              ].map((cert) => (
                <div key={cert.title} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50">
                    <cert.icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">{cert.badge} <span className="font-serif text-base normal-case tracking-normal text-slate-900">{cert.title}</span></p>
                    <p className="font-sans text-xs text-slate-500">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary hover:gap-3 transition-all">
              En savoir plus <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
