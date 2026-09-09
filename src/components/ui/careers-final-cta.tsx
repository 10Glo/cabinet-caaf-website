// src/components/ui/careers-final-cta.tsx
"use client"

import Link from "next/link"
import { ArrowRight, Mail, Phone, Calendar } from "lucide-react"

export function CareersFinalCta() {
  return (
    <section className="border-t border-slate-200/60 bg-[#f8fafc] px-6 sm:px-10 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl border border-slate-200 bg-white p-8">
          <div className="mb-4 flex items-center gap-3">
            <Mail className="h-4 w-4 text-slate-400" strokeWidth={1.7} />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">Recrutement</span>
          </div>
          <div className="space-y-4">
            <a href="mailto:recrutement@caaf-sas.com" className="block border border-slate-200 bg-white px-4 py-3 text-left transition-colors hover:border-slate-300">
              <p className="font-sans text-sm font-medium text-slate-900">Email</p>
              <p className="truncate font-sans text-sm text-slate-600">recrutement@caaf-sas.com</p>
            </a>
            <a href="tel:+243000000000" className="block border border-slate-200 bg-white px-4 py-3 text-left transition-colors hover:border-slate-300">
              <p className="font-sans text-sm font-medium text-slate-900">Téléphone</p>
              <p className="font-sans text-sm text-slate-600">+243 00 000 0000</p>
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 border-t border-slate-200 pt-4">
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="font-sans text-xs font-medium text-slate-400">Équipe recrutement — réponse garantie sous 24h</span>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl border border-slate-200 bg-white px-8 py-8 md:flex md:items-center md:justify-between">
          <div>
            <p className="font-serif text-2xl text-slate-900">Prêt à passer à l&apos;étape suivante ?</p>
            <p className="mt-1 font-sans text-sm text-slate-500">Rejoignez une équipe où la rigueur fait grandir.</p>
          </div>
          <div className="mt-6 flex gap-3 md:mt-0">
            <Link href="#postes" className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-sans text-sm font-semibold text-white hover:bg-primary-active">
              Voir les postes ouverts <ArrowRight size={15} />
            </Link>
            <a href="mailto:recrutement@caaf-sas.com" className="inline-flex items-center gap-2 border border-slate-200 bg-white px-6 py-3 font-sans text-sm font-medium text-slate-600 hover:bg-slate-50">
              <Calendar className="h-4 w-4" /> Demander un entretien
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
