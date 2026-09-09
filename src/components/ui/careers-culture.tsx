// src/components/ui/careers-culture.tsx
"use client"

import Link from "next/link"
import { Globe2, Users, MapPin, TrendingUp, ShieldCheck, GraduationCap, Scale, BookOpen, Briefcase, ArrowRight } from "lucide-react"

const GROWTH_BENEFITS = [
  { title: "Formation continue", description: "Programmes réguliers en audit, fiscalité, normes IFRS.", icon: BookOpen },
  { title: "Missions à responsabilité", description: "Exposition directe aux décideurs : DAF, DG, comités d'audit.", icon: Briefcase },
  { title: "Éthique & Indépendance", description: "Intégrité, discrétion et professionnalisme.", icon: ShieldCheck },
  { title: "Expertise multi-sectorielle", description: "Banque, mines, industrie, ONG — diversité stimulante.", icon: Scale },
]

export function CareersCulture() {
  return (
    <section id="culture" className="bg-[#f8fafc] border-t border-slate-200/60 px-6 sm:px-10 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-slate-300" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Notre culture</span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-slate-900 md:text-5xl">
              L&apos;excellence sans compromis,
              <br />
              <span className="text-slate-400">au quotidien.</span>
            </h2>
          </div>
          <p className="max-w-xl font-sans text-base leading-7 text-slate-500">Chez CAAF, rigueur technique et accompagnement humain se rejoignent. Nous définissons de nouveaux standards — pas seulement des solutions.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <article className="border border-slate-200 bg-white p-8 md:col-span-8 md:p-10">
            <div className="mb-6 flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50">
              <Globe2 className="h-5 w-5 text-slate-600" strokeWidth={1.7} />
            </div>
            <h3 className="font-serif text-2xl text-slate-900 md:text-3xl">Standards internationaux, impact local</h3>
            <p className="mt-4 font-sans text-sm leading-7 text-slate-500">Certifiés IFAC et conformes OHADA, nous appliquons les meilleures pratiques au service du développement congolais. Rigueur et proximité ne sont pas incompatibles.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["IFAC", "OHADA", "ISA", "IFRS"].map((tag) => (
                <span key={tag} className="border border-slate-200 bg-slate-50 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500">{tag}</span>
              ))}
            </div>
          </article>

          <article className="flex flex-col justify-between border border-slate-200 bg-white p-8 md:col-span-4">
            <div>
              <div className="mb-6 flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50">
                <GraduationCap className="h-5 w-5 text-slate-600" strokeWidth={1.7} />
              </div>
              <h3 className="font-serif text-xl text-slate-900">Mentorat d&apos;excellence</h3>
              <p className="mt-3 font-sans text-sm leading-7 text-slate-500">Travaillez avec des associés qui façonnent le paysage financier de l&apos;Afrique centrale depuis plus de deux décennies.</p>
            </div>
            <div className="mt-8 border-t border-slate-200 pt-5 flex items-center gap-2">
              <Users className="h-4 w-4 text-slate-600" />
              <span className="font-sans text-xs uppercase tracking-[0.14em] text-slate-400">Encadrement senior garanti</span>
            </div>
          </article>

          <article className="flex flex-col justify-between border border-slate-200 bg-white p-8 md:col-span-4">
            <div>
              <div className="mb-6 flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50">
                <MapPin className="h-5 w-5 text-slate-600" strokeWidth={1.7} />
              </div>
              <h3 className="font-serif text-xl text-slate-900">Hubs modernes</h3>
              <p className="mt-3 font-sans text-sm leading-7 text-slate-500">Kinshasa et Lubumbashi — pensés pour la collaboration et la rigueur d&apos;exécution.</p>
            </div>
            <div className="mt-8 flex gap-6 border-t border-slate-200 pt-5">
              <div>
                <p className="font-serif text-2xl text-slate-900">2</p>
                <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-slate-400">bureaux</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-slate-900">Kin & Lshi</p>
                <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-slate-400">hubs</p>
              </div>
            </div>
          </article>

          <article className="border border-slate-200 bg-white p-8 md:col-span-8 md:p-10">
            <div className="mb-6 flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50">
              <TrendingUp className="h-5 w-5 text-slate-600" strokeWidth={1.7} />
            </div>
            <h3 className="font-serif text-2xl text-slate-900">Trajectoires sur mesure</h3>
            <p className="mt-3 font-sans text-sm leading-7 text-slate-500">Chaque professionnel bénéficie d&apos;un plan individualisé, aligné sur ses forces et ambitions.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {GROWTH_BENEFITS.map((b) => (
                <div key={b.title} className="border border-slate-200 bg-slate-50 p-4">
                  <p className="font-sans text-sm font-medium text-slate-900">{b.title}</p>
                  <p className="mt-1 font-sans text-xs leading-5 text-slate-500">{b.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="#postes" className="inline-flex items-center gap-2 font-sans text-sm font-medium text-slate-600 hover:gap-3 transition-all">Voir les postes ouverts <ArrowRight size={15} /></Link>
            </div>
          </article>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border border-slate-200 bg-white px-8 py-5 md:flex-row">
          <p className="font-sans text-sm text-slate-500">Notre culture attire les meilleurs talents. <span className="font-medium text-slate-900">Rejoignez une équipe d&apos;excellence.</span></p>
          <Link href="#postes" className="inline-flex items-center gap-2 font-sans text-sm font-medium text-slate-600 hover:gap-3">Explorer les opportunités <ArrowRight size={15} /></Link>
        </div>
      </div>
    </section>
  )
}
