// src/components/ui/careers-openings.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Briefcase, ChevronRight, ShieldCheck, Mail, Filter } from "lucide-react"

type JobDepartment = "Audit" | "Conseil" | "Fiscalité" | "Advisory" | "Support"
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

const OPENINGS: JobOpening[] = [
  {
    title: "Auditeur Financier Senior",
    department: "Audit",
    location: "Kinshasa",
    type: "CDI",
    experience: "5+ ans",
    description: "Piloter des missions d'audit financier pour des clients bancaires et industriels. Encadrement d'équipes juniors et relation directe avec les directions financières.",
    href: "#auditeur-senior",
    featured: true,
  },
  {
    title: "Consultant en Stratégie & Croissance",
    department: "Advisory",
    location: "Lubumbashi",
    type: "CDI",
    experience: "3–5 ans",
    description: "Accompagner les opérateurs miniers et industriels dans leurs projets de restructuration, de due diligence et de planification stratégique.",
    href: "#consultant-strategie",
  },
  {
    title: "Responsable Fiscalité & Conformité",
    department: "Fiscalité",
    location: "Kinshasa",
    type: "CDI",
    experience: "7+ ans",
    description: "Superviser les missions de conseil fiscal, sécuriser les positions fiscales des clients et assurer la veille réglementaire OHADA / DGI.",
    href: "#responsable-fiscal",
  },
  {
    title: "Auditeur Junior",
    department: "Audit",
    location: "Kinshasa",
    type: "CDI",
    experience: "1–3 ans",
    description: "Participer aux missions d'audit sous la supervision de seniors. Collecte documentaire, tests de conformité et rédaction de synthèses.",
    href: "#auditeur-junior",
  },
  {
    title: "Stagiaire Audit & Conseil",
    department: "Support",
    location: "Lubumbashi",
    type: "Stage",
    experience: "Étudiant BAC+4/5",
    description: "Stage de 6 mois au sein de l'équipe audit. Exposition multi-sectorielle et formation méthodologique structurée.",
    href: "#stage-audit",
  },
]

const LOCATIONS: JobLocation[] = ["Tous", "Kinshasa", "Lubumbashi"]

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={active ? "border border-slate-900 bg-slate-50 px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-slate-600" : "border border-slate-200 bg-white px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 hover:border-slate-200 hover:text-slate-600 transition-colors"}>
      {children}
    </button>
  )
}

function JobCard({ job }: { job: JobOpening }) {
  return (
    <Link href={job.href} className="group flex h-full flex-col border border-slate-200 bg-white p-6 transition-colors hover:border-slate-200 hover:bg-white">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="border border-slate-200 bg-slate-50 px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">{job.department}</span>
        <span className="flex items-center gap-1 font-sans text-xs text-slate-400"><MapPin className="h-3 w-3" />{job.location}</span>
        <span className="flex items-center gap-1 font-sans text-xs text-slate-400"><Briefcase className="h-3 w-3" />{job.type}</span>
      </div>
      <h3 className="font-serif text-lg leading-tight text-slate-900 group-hover:text-slate-600">{job.title}</h3>
      <p className="mt-3 line-clamp-3 font-sans text-sm leading-6 text-slate-500">{job.description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
        <span className="flex items-center gap-1.5 font-sans text-xs text-slate-400"><Clock className="h-3.5 w-3.5" />{job.experience}</span>
        <span className="flex h-8 w-8 items-center justify-center border border-slate-200 bg-white group-hover:border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-colors">
          <ArrowRight size={14} className="text-slate-400 group-hover:text-white" />
        </span>
      </div>
    </Link>
  )
}

function FeaturedJobCard({ job }: { job: JobOpening }) {
  return (
    <Link href={job.href} className="group relative flex flex-col gap-6 border border-slate-200 bg-white p-8 md:flex-row md:items-center md:justify-between md:p-10">
      <div className="flex-1">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="border border-slate-200 bg-white px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">{job.department}</span>
          <span className="border border-amber-200 bg-amber-50 px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-amber-700">Poste prioritaire</span>
          <span className="flex items-center gap-1 font-sans text-xs text-slate-400"><MapPin className="h-3 w-3" />{job.location}</span>
        </div>
        <h3 className="font-serif text-2xl text-slate-900 group-hover:text-slate-600 md:text-3xl">{job.title}</h3>
        <p className="mt-3 max-w-2xl font-sans text-sm leading-7 text-slate-600">{job.description}</p>
        <div className="mt-4 flex items-center gap-4 font-sans text-xs text-slate-400">
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{job.experience}</span>
          <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" />{job.type}</span>
        </div>
      </div>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-slate-200 bg-white group-hover:bg-slate-900 group-hover:text-white transition-colors">
        <ChevronRight size={20} className="text-slate-600 group-hover:text-white" />
      </div>
    </Link>
  )
}

export function CareersOpenings() {
  const [activeLocation, setActiveLocation] = useState<JobLocation>("Tous")
  const featuredJob = OPENINGS.find((j) => j.featured)
  const regularJobs = OPENINGS.filter((j) => !j.featured)
  const filteredJobs = activeLocation === "Tous" ? regularJobs : regularJobs.filter((j) => j.location === activeLocation)
  const filteredFeatured = activeLocation === "Tous" || featuredJob?.location === activeLocation ? featuredJob : undefined
  return (
    <section id="postes" className="border-t border-slate-200/60 bg-white px-6 sm:px-10 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-slate-300" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Opportunités</span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-slate-900 md:text-5xl">Postes ouverts</h2>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-400" strokeWidth={1.7} />
            {LOCATIONS.map((loc) => (
              <FilterButton key={loc} active={activeLocation === loc} onClick={() => setActiveLocation(loc)}>
                {loc === "Tous" ? "Tous les bureaux" : loc}
              </FilterButton>
            ))}
          </div>
        </div>
        {filteredFeatured && (
          <div className="mb-5">
            <FeaturedJobCard job={filteredFeatured} />
          </div>
        )}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>
        {filteredJobs.length === 0 && !filteredFeatured && (
          <div className="border border-slate-200 bg-white px-8 py-16 text-center">
            <p className="font-sans text-sm text-slate-500">Aucun poste ouvert pour ce bureau actuellement. Découvrez nos métiers ci-dessous.</p>
          </div>
        )}
        <div className="mt-10 border border-slate-200 bg-white p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-slate-600" strokeWidth={1.7} />
                <p className="font-sans text-sm font-semibold text-slate-900">Candidature spontanée</p>
              </div>
              <p className="max-w-2xl font-sans text-sm leading-7 text-slate-500">Vous ne trouvez pas le poste idéal ? Envoyez-nous votre CV — nous étudions chaque candidature avec attention.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="mailto:recrutement@caaf-sas.com" className="inline-flex items-center justify-center gap-2 border border-slate-200 bg-white px-6 py-3 font-sans text-sm font-medium text-slate-600 hover:border-slate-200 hover:text-slate-600">
                <Mail className="h-4 w-4" /> recrutement@caaf-sas.com
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 font-sans text-sm font-semibold text-white hover:bg-primary-active">
                Postuler spontanément <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
