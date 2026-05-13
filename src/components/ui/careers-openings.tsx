// src/components/ui/careers-openings.tsx
"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Mail,
  Filter,
  type LucideIcon,
} from "lucide-react"

// ─── Types ───────────────────────────────────────────────
type JobDepartment =
  | "Audit"
  | "Conseil"
  | "Fiscalité"
  | "Advisory"
  | "Support"

type JobLocation = "Kinshasa" | "Lubumbashi" | "Tous"

type JobType = "CDI" | "CDD" | "Stage"

type JobOpening = {
  title: string
  department: JobDepartment
  location: "Kinshasa" | "Lubumbashi"
  type: JobType
  experience: string
  description: string
  href: string
  featured?: boolean
}

// ─── Data ────────────────────────────────────────────────
const OPENINGS: JobOpening[] = [
  {
    title: "Auditeur Financier Senior",
    department: "Audit",
    location: "Kinshasa",
    type: "CDI",
    experience: "5+ ans",
    description:
      "Piloter des missions d'audit financier pour des clients bancaires et industriels. Encadrement d'équipes juniors et relation directe avec les directions financières.",
    href: "#auditeur-senior",
    featured: true,
  },
  {
    title: "Consultant en Stratégie & Croissance",
    department: "Advisory",
    location: "Lubumbashi",
    type: "CDI",
    experience: "3–5 ans",
    description:
      "Accompagner les opérateurs miniers et industriels dans leurs projets de restructuration, de due diligence et de planification stratégique.",
    href: "#consultant-strategie",
  },
  {
    title: "Responsable Fiscalité & Conformité",
    department: "Fiscalité",
    location: "Kinshasa",
    type: "CDI",
    experience: "7+ ans",
    description:
      "Superviser les missions de conseil fiscal, sécuriser les positions fiscales des clients et assurer la veille réglementaire OHADA / DGI.",
    href: "#responsable-fiscal",
  },
  {
    title: "Auditeur Junior",
    department: "Audit",
    location: "Kinshasa",
    type: "CDI",
    experience: "1–3 ans",
    description:
      "Participer aux missions d'audit sous la supervision de seniors. Collecte documentaire, tests de conformité et rédaction de synthèses.",
    href: "#auditeur-junior",
  },
  {
    title: "Stagiaire Audit & Conseil",
    department: "Support",
    location: "Lubumbashi",
    type: "Stage",
    experience: "Étudiant BAC+4/5",
    description:
      "Stage de 6 mois au sein de l'équipe audit. Exposition multi-sectorielle et formation méthodologique structurée.",
    href: "#stage-audit",
  },
]

const LOCATIONS: JobLocation[] = ["Tous", "Kinshasa", "Lubumbashi"]

const DEPARTMENT_COLORS: Record<JobDepartment, string> = {
  Audit: "border-primary/30 bg-primary/5 text-primary",
  Conseil: "border-brand-navy/20 bg-brand-navy/5 text-brand-navy",
  Fiscalité: "border-amber-500/30 bg-amber-50 text-amber-700",
  Advisory: "border-emerald-500/30 bg-emerald-50 text-emerald-700",
  Support: "border-ink/10 bg-ink/5 text-ink/60",
}

// ─── Filter Button ───────────────────────────────────────
function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? "border border-primary bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-colors"
          : "border border-hairline bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink/40 transition-colors hover:border-primary/30 hover:text-primary"
      }
    >
      {children}
    </button>
  )
}

// ─── Job Card ────────────────────────────────────────────
function JobCard({ job }: { job: JobOpening }) {
  return (
    <Link
      href={job.href}
      className="group flex flex-col justify-between gap-6 border border-hairline bg-white p-6 transition-all hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:flex-row md:items-center md:p-8"
    >
      {/* Left */}
      <div className="flex-1">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={`border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${DEPARTMENT_COLORS[job.department]}`}
          >
            {job.department}
          </span>

          <span className="flex items-center gap-1 text-xs text-ink/40">
            <MapPin className="h-3 w-3" strokeWidth={1.7} />
            {job.location}
          </span>

          <span className="flex items-center gap-1 text-xs text-ink/40">
            <Briefcase className="h-3 w-3" strokeWidth={1.7} />
            {job.type}
          </span>
        </div>

        <h3 className="font-serif text-xl text-brand-navy transition-colors group-hover:text-primary md:text-2xl">
          {job.title}
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-ink/50">
          {job.description}
        </p>
      </div>

      {/* Right */}
      <div className="flex shrink-0 items-center gap-6 md:gap-8">
        <div className="hidden text-right lg:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/30">
            Expérience
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/60">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.7} />
            {job.experience}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center border border-hairline bg-canvas transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
          <ArrowRight
            size={16}
            className="text-ink/30 transition-all group-hover:translate-x-0.5 group-hover:text-primary"
          />
        </div>
      </div>
    </Link>
  )
}

// ─── Featured Job Card ───────────────────────────────────
function FeaturedJobCard({ job }: { job: JobOpening }) {
  return (
    <Link
      href={job.href}
      className="group relative overflow-hidden border border-white/10 bg-surface-dark p-8 transition-all hover:border-primary/30 md:p-10"
    >
      {/* Corner accent */}
      <div className="absolute right-0 top-0 h-16 w-16">
        <div className="absolute right-0 top-0 h-px w-16 bg-gradient-to-l from-primary/40 to-transparent" />
        <div className="absolute right-0 top-0 h-16 w-px bg-gradient-to-b from-primary/40 to-transparent" />
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
              {job.department}
            </span>

            <span className="border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/40">
              Poste prioritaire
            </span>

            <span className="flex items-center gap-1 text-xs text-white/35">
              <MapPin className="h-3 w-3" strokeWidth={1.7} />
              {job.location}
            </span>
          </div>

          <h3 className="font-serif text-2xl text-white transition-colors group-hover:text-primary md:text-3xl">
            {job.title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
            {job.description}
          </p>

          <div className="mt-4 flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-white/40">
              <Clock className="h-3.5 w-3.5" strokeWidth={1.7} />
              {job.experience}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/40">
              <Briefcase className="h-3.5 w-3.5" strokeWidth={1.7} />
              {job.type}
            </span>
          </div>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/5 transition-all group-hover:border-primary/30 group-hover:bg-primary/10">
          <ChevronRight
            size={20}
            className="text-white/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary"
          />
        </div>
      </div>
    </Link>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════
export function CareersOpenings() {
  const [activeLocation, setActiveLocation] = useState<JobLocation>("Tous")

  const featuredJob = OPENINGS.find((j) => j.featured)
  const regularJobs = OPENINGS.filter((j) => !j.featured)

  const filteredJobs =
    activeLocation === "Tous"
      ? regularJobs
      : regularJobs.filter((j) => j.location === activeLocation)

  const filteredFeatured =
    activeLocation === "Tous" || featuredJob?.location === activeLocation
      ? featuredJob
      : undefined

  return (
    <section id="postes" className="border-t border-hairline bg-white px-10 py-section">
      <div className="w-full">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Opportunités
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Postes ouverts
            </h2>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-ink/30" strokeWidth={1.7} />
            {LOCATIONS.map((loc) => (
              <FilterButton
                key={loc}
                active={activeLocation === loc}
                onClick={() => setActiveLocation(loc)}
              >
                {loc === "Tous" ? "Tous les bureaux" : loc}
              </FilterButton>
            ))}
          </div>
        </div>

        {/* Featured Job */}
        {filteredFeatured && (
          <div className="mb-5">
            <FeaturedJobCard job={filteredFeatured} />
          </div>
        )}

        {/* Job List */}
        <div className="space-y-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>

        {/* Empty state */}
        {filteredJobs.length === 0 && !filteredFeatured && (
          <div className="border border-hairline bg-canvas px-8 py-16 text-center">
            <p className="text-sm text-ink/40">
              Aucun poste ouvert pour ce bureau actuellement.
            </p>
          </div>
        )}

        {/* Bottom: Spontaneous */}
        <div className="mt-12 border border-hairline bg-canvas p-8 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.7} />
                <p className="text-sm font-semibold text-brand-navy">
                  Candidature spontanée
                </p>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-ink/55">
                Vous ne trouvez pas le poste idéal ? Nous sommes toujours à la
                recherche de talents exceptionnels. Envoyez-nous votre CV et une
                note de motivation — nous étudions chaque candidature avec
                attention.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:recrutement@caaf-sas.com"
                className="group inline-flex items-center justify-center gap-2 border border-hairline bg-white px-6 py-3 text-sm font-medium text-ink/70 transition-colors hover:border-primary/30 hover:text-primary"
              >
                <Mail className="h-4 w-4" strokeWidth={1.7} />
                recrutement@caaf-sas.com
              </a>

              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-active"
              >
                Postuler spontanément
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