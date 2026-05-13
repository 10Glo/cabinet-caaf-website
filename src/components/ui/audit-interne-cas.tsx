
"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Factory,
  Pickaxe,
  Building2,
  CheckCircle2,
  Clock,
  DollarSign,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const CASE_STUDIES = [
  {
    id: "industriel",
    sector: "Industrie Manufacturière",
    sectorIcon: Factory,
    title: "Audit de la chaîne d'approvisionnement",
    location: "Kinshasa, Zone Industrielle",
    context:
      "Une grande unité de fabrication signalait des écarts persistants entre ses besoins en matière première et ses livraisons effectives, entraînant des arrêts de production coûteux et une augmentation inexpliquée des coûts d'achat.",
    approach: [
      "Analyse des données historiques de consommation vs commande",
      "Observation terrain des processus de réception de marchandises",
      "Entretiens anonymisés avec les agents logistiques et acheteurs",
      "Tests de concordance entre bons de commande et factures fournisseurs",
    ],
    results: [
      { icon: DollarSign, label: "Détection de fuites financières représentant 8% du CA" },
      { icon: CheckCircle2, label: "Mise en place d'un nouveau process d'achat centralisé" },
      { icon: Clock, label: "Réduction des arrêts de production de 40%" },
      { icon: ShieldAlert, label: "Sanctions disciplinaires et récupération de créances" },
    ],
    quote:
      "L'audit a permis de révéler des failles systémiques que nous ignorions totalement. Le retour sur investissement a été immédiat.",
    quoteAuthor: "Directeur Industriel",
  },
  {
    id: "commercial",
    sector: "Commercial & Vente",
    sectorIcon: Building2, // Placeholder for sales icon
    title: "Revendication de commissions et gestion des comptes clients",
    location: "Lubumbashi",
    context:
      "Des tensions internes et des plaintes clients concernant le recouvrement des créances ont conduit la direction à demander un audit complet du cycle commercial et de la politique de commissions.",
    approach: [
      "Revue de la matrice de calcul des commissions sur 3 exercices",
      "Audits physiques des stocks vendus vs stocks comptabilisés",
      "Téléphonie mystère auprès de clients partenaires pour tester les promesses faites",
      "Vérification de la cohérence des ristournes accordées",
    ],
    results: [
      { icon: CheckCircle2, label: "Recouvrement de 150 millions FC de dettes anciennes" },
      { icon: DollarSign, label: "Corrections de paiements de commissions erronés" },
      { icon: ShieldAlert, label: "Nettoyage de la base client (clients fantômes)" },
      { icon: Clock, label: "Accélération du cycle de recouvrement moyen" },
    ],
    quote:
      "Nous avions perdu le fil de notre réseau commercial. L'équipe d'audit interne de CAAF nous a rendu la main.",
    quoteAuthor: "PDG",
  },
  {
    id: "projet",
    sector: "Gestion de Projet",
    sectorIcon: Pickaxe,
    title: "Suivi de fonds pour un programme international",
    location: "Bas-Congo / Kinshasa",
    context:
      "Un organisme international finançant des infrastructures routières craignait des détournements de fonds et une mauvaise utilisation des ressources humaines sur plusieurs chantiers dispersés.",
    approach: [
      "Visites surprise sur les chantiers pour vérifier la présence effective des équipements",
      "Vérification physique des quantités de matériaux posés vs devis",
      "Audit des bordereaux de paiement des sous-traitants locaux",
      "Tests d'inventaires physiques des outils et machines",
    ],
    results: [
      { icon: ShieldAlert, label: "Identification de deux chantiers hors spécifications contractuelles" },
      { icon: DollarSign, label: "Arrêt de paiements sur des factures litigieuses" },
      { icon: CheckCircle2, label: "Refonte complète du reporting chantier-maison-mère" },
      { icon: Clock, label: "Clôture du projet dans les délais malgré les problèmes" },
    ],
    quote:
      "La rigueur apportée par nos partenaires d'audit a permis de maintenir la confiance des donateurs sur la suite du programme.",
    quoteAuthor: "Coordinateur Pays",
  },
]

export function AuditInterneCas() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCase = CASE_STUDIES[activeIndex]
  const ActiveSectorIcon = activeCase.sectorIcon

  const goTo = (index: number) => {
    if (index >= 0 && index < CASE_STUDIES.length) setActiveIndex(index)
  }

  return (
    <section className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* ── Header ── */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Témoignages</span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              Des résultats qui parlent
              <br/>par eux-mêmes.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">Des situations complexes résolues grâce à une investigation minutieuse et des recommandations actionnables.</p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} className="inline-flex h-12 w-12 items-center justify-center border border-hairline bg-white text-brand-navy/50 transition-colors hover:border-primary/30 hover:text-primary disabled:opacity-30"><ChevronLeft size={20} strokeWidth={1.5}/></button>
            <button type="button" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === CASE_STUDIES.length - 1} className="inline-flex h-12 w-12 items-center justify-center border border-hairline bg-white text-brand-navy/50 transition-colors hover:border-primary/30 hover:text-primary disabled:opacity-30"><ChevronRight size={20} strokeWidth={1.5}/></button>
            <span className="ml-2 font-mono text-[12px] text-ink/30">{String(activeIndex + 1).padStart(2, "0")} / {String(CASE_STUDIES.length).padStart(2, "0")}</span>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <article className="border border-hairline bg-white p-8 md:col-span-7 md:p-10">
            <div className="max-w-2xl">
              <div className="mb-8 inline-flex items-center gap-3 border border-primary/15 bg-primary/5 px-4 py-2">
                <ActiveSectorIcon className="h-4 w-4 text-primary" strokeWidth={1.7}/>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary/80">{activeCase.sector}</span>
                <div className="h-3 w-px bg-primary/20"/>
                <span className="text-[11px] text-primary/50">{activeCase.location}</span>
              </div>
              <h3 className="font-serif text-2xl leading-snug text-brand-navy md:text-3xl">{activeCase.title}</h3>
              <div className="mt-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/40"/>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">Contexte</span>
                </div>
                <p className="text-sm leading-7 text-ink/60 md:text-base">{activeCase.context}</p>
              </div>
              <div className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/40"/>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/35">Actions menées</span>
                </div>
                <ul className="grid gap-3">
                  {activeCase.approach.map((item) => (
                    <li key={item} className="flex items-start gap-3 border border-hairline bg-surface-card px-5 py-4">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"/>
                      <span className="text-sm leading-6 text-ink/65">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
          
          <div className="flex flex-col gap-5 md:col-span-5">
             <article className="flex-1 border border-white/10 bg-surface-dark p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-primary/40"/>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">Impact réel</span>
              </div>
              <ul className="grid gap-4">
                {activeCase.results.map((result) => {
                  const ResultIcon = result.icon
                  return (
                    <li key={result.label} className="flex items-start gap-4 border border-white/[0.06] bg-white/[0.03] px-5 py-4">
                      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-primary">
                        <ResultIcon className="h-4 w-4" strokeWidth={1.7}/>
                      </div>
                      <span className="text-sm leading-6 text-white/65">{result.label}</span>
                    </li>
                  )
                })}
              </ul>
            </article>
            
            <article className="border border-primary/20 bg-primary/5 p-8 md:p-10">
              <svg className="mb-4 h-8 w-8 text-primary/30" viewBox="0 0 24 24" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/></svg>
              <blockquote className="text-[15px] font-medium italic leading-7 text-brand-navy/80 md:text-base">{activeCase.quote}</blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px w-6 bg-primary/30"/>
                <span className="text-[12px] font-semibold text-brand-navy/50">{activeCase.quoteAuthor}</span>
              </div>
            </article>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:col-span-12">
            {CASE_STUDIES.map((cs, index) => {
              const isActive = index === activeIndex
              const Icon = cs.sectorIcon
              return (
                <button key={cs.id} type="button" onClick={() => setActiveIndex(index)} className={`inline-flex items-center gap-2.5 border px-5 py-3 text-[13px] font-medium transition-all ${isActive ? "border-primary/30 bg-primary/5 text-primary" : "border-hairline bg-white text-ink/45 hover:border-primary/20 hover:text-ink/70"}`}>
                  <Icon className="h-4 w-4" strokeWidth={1.7}/>
                  {cs.sector}
                </button>
              )
            })}
            <div className="ml-auto hidden md:block">
              <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3">
                Évaluer vos propres risques <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}