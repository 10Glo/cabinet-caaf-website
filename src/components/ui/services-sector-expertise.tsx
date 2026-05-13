// src/components/ui/services-sector-expertise.tsx
"use client"

import Link from "next/link"
import {
  ArrowRight,
  Pickaxe,
  Landmark,
  Radio,
  Globe2,
  Building2,
  Factory,
  Briefcase,
  Hospital,
  type LucideIcon,
} from "lucide-react"

type SectorItem = {
  label: string
  icon: LucideIcon
  href: string
}

const SECTORS: SectorItem[] = [
  { label: "Mines & Ressources", icon: Pickaxe, href: "/secteurs#mines-ressources" },
  { label: "Banque & Assurance", icon: Landmark, href: "/secteurs#banque-services-financiers" },
  { label: "Télécommunications", icon: Radio, href: "/secteurs#telecommunications" },
  { label: "ONG & Développement", icon: Globe2, href: "/secteurs#ong-developpement" },
  { label: "Secteur Public", icon: Building2, href: "/secteurs#institutions-secteur-public" },
  { label: "Industrie & Production", icon: Factory, href: "/secteurs#industrie-production" },
  { label: "Groupes & Holdings", icon: Briefcase, href: "/secteurs#groupes-holdings" },
  { label: "Santé & Éducation", icon: Hospital, href: "/secteurs#sante-education" },
]

export function ServicesSectorExpertise() {
  return (
    <section className="border-t border-hairline bg-white px-10 py-20">
      <div className="w-full">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Expertise sectorielle
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-brand-navy md:text-4xl">
            Des services conçus pour
            <br />
            <span className="text-ink/40">des environnements spécialisés.</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-ink/60">
            Nos services s’adaptent aux secteurs les plus réglementés et les plus
            exigeants. Chaque intervention est calibrée selon les contraintes
            opérationnelles, comptables et stratégiques propres à votre activité.
          </p>
        </div>

        {/* Sector chips / tiles */}
        <div className="flex flex-wrap justify-center gap-3">
          {SECTORS.map((sector) => (
            <Link
              key={sector.label}
              href={sector.href}
              className="group inline-flex items-center gap-2 border border-hairline bg-surface-card/40 px-4 py-3 text-sm font-medium text-ink/65 transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <sector.icon
                className="h-4 w-4 text-ink/35 transition-colors group-hover:text-primary"
                strokeWidth={1.7}
              />
              <span>{sector.label}</span>
            </Link>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 border border-hairline bg-canvas px-8 py-5">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-ink/60">
              Votre secteur n’apparaît pas ici ?{" "}
              <span className="font-medium text-ink/80">
                Notre approche reste adaptable à des contextes spécifiques et à
                forte contrainte réglementaire.
              </span>
            </p>

            <Link
              href="/secteurs"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              Voir tous les secteurs
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