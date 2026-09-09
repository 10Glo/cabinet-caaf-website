// src/components/ui/careers-roles.tsx — fallback when no openings, inspired by PwC métier d'auditeur
"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, FileCheck, Calculator, Scale, ShieldCheck, Users, TrendingUp, Briefcase, GraduationCap } from "lucide-react"

type Role = {
  id: string
  title: string
  subtitle: string
  icon: React.ElementType
  level: string
  description: string
  missions: string[]
  profil: string
  evolution: string
  qualites: string[]
  pourquoi: string
}

const ROLES: Role[] = [
  {
    id: "auditeur-junior",
    title: "Auditeur Junior",
    subtitle: "0–2 ans · Kinshasa / Lubumbashi",
    icon: FileCheck,
    level: "Début de carrière",
    description: "Votre porte d'entrée dans l'audit. Vous intégrez une équipe sous la supervision d'un senior et découvrez la méthodologie d'audit sur le terrain, des dossiers clients aux inventaires physiques.",
    missions: ["Collecte et contrôle documentaire (factures, contrats, relevés)", "Tests de conformité, circularisations clients/fournisseurs", "Participation aux inventaires physiques et rapprochements", "Tests substantifs sur les cycles achats-ventes-trésorerie", "Rédaction de synthèses et feuilles de travail pour le chef de mission"],
    profil: "BAC+4/5 CCA, Finance, Audit, Contrôle de gestion — première expérience en cabinet appréciée. Maîtrise d'Excel, bases ISA/OHADA.",
    qualites: ["Rigueur et sens du détail", "Curiosité et capacité d'écoute", "Esprit d'équipe et discrétion", "Organisation et respect des délais", "Appétence pour le terrain (déplacements Katanga)"],
    pourquoi: "Chez CAAF, vous n'êtes pas un exécutant isolé : chaque junior est jumelé à un senior et participe aux restitutions client. Formation ISA/OHADA dès les 3 premiers mois, exposition multisectorielle (mines, banques, ONG) et progression vers Confirmé en 18–24 mois.",
    evolution: "→ Auditeur Confirmé en 18–24 mois → Senior",
  },
  {
    id: "auditeur-confirme",
    title: "Auditeur Confirmé / Senior",
    subtitle: "3–5 ans · Kinshasa / Lubumbashi",
    icon: ShieldCheck,
    level: "Autonomie opérationnelle",
    description: "Vous pilotez des sections à risque, encadrez 2–3 juniors et devenez l'interlocuteur opérationnel des DAF. Vous portez la qualité technique de vos cycles.",
    missions: ["Planification par les risques de vos cycles (immobilisations, stocks, paie)", "Supervision et revue des travaux juniors", "Entretiens de contrôle et tests d'efficacité (COSO)", "Préparation des points d'audit, ajustements proposés et recommandations", "Coanimation des réunions de restitution"],
    profil: "3–5 ans en audit externe, maîtrise ISA/OHADA/IFRS, Excel avancé et outils d'audit (Caseware/IDEA). Anglais opérationnel apprécié.",
    qualites: ["Leadership bienveillant et pédagogie", "Esprit critique et jugement professionnel", "Aisance relationnelle avec les clients", "Capacité à prioriser et à arbitrer", "Exemplarité éthique"],
    pourquoi: "CAAF vous confie de vraies responsabilités rapidement, sans dilution hiérarchique : vous signez vos sections et présentez vos conclusions en comité. Mentorat par un manager et accès direct aux associés pour accélérer votre passage Manager.",
    evolution: "→ Chef de mission / Manager en 2–3 ans",
  },
  {
    id: "chef-de-mission",
    title: "Chef de Mission / Manager Audit",
    subtitle: "5–8 ans · Kinshasa",
    icon: Briefcase,
    level: "Responsabilité d'engagement",
    description: "Vous portez la responsabilité d'engagements complets : cadrage, budget, équipe, qualité et opinion. Vous êtes le garant de la relation client.",
    missions: ["Cadrage et proposition commerciale (planning, honoraires, risques)", "Pilotage de missions multi-sites (mines, banques, groupes)", "Revue critique des dossiers, arbitrages techniques et opinion", "Gestion du budget, du planning et de la rentabilité", "Développement commercial sectoriel et capitalisation des connaissances"],
    profil: "DEC / Expert-comptable mémorialiste (ou finaliste), 5–8 ans dont Big4 ou cabinet structuré. Maîtrise du rapport d'audit et du contrôle qualité ISQM1.",
    qualites: ["Vision stratégique et sang-froid", "Leadership et coaching d'équipe", "Négociation et diplomatie client", "Rigueur sur la documentation", "Sens du business et du risque"],
    pourquoi: "Chez CAAF, un Manager n'est pas un relayeur : vous êtes responsable de l'engagement, invité aux comités d'audit et associé aux décisions d'investissement. Parcours transparent vers Directeur, avec intéressement et exposition directe aux conseils d'administration.",
    evolution: "→ Directeur Audit → Associé",
  },
  {
    id: "expert-comptable",
    title: "Collaborateur Comptable / Expert-Comptable",
    subtitle: "2–7 ans · Kinshasa / Lubumbashi",
    icon: Calculator,
    level: "Accompagnement comptable",
    description: "Vous gérez un portefeuille et sécurisez la conformité comptable et fiscale au quotidien, en lien direct avec les dirigeants.",
    missions: ["Tenue, révision et supervision comptable OHADA", "Établissement des états financiers, liasses fiscales et annexes", "Conseil comptable, tableaux de bord et reporting IFRS ponctuel", "Interface avec les CAC, banques et administration (DGI/DGDA)", "Accompagnement à la migration comptable et à la digitalisation (Sage, SAP)"],
    profil: "DECF/DSCG, ou Master CCA, maîtrise Sage, Quadratus ou SAP, connaissance fiscale RDC.",
    qualites: ["Rigueur et fiabilité", "Sens du service et réactivité", "Pédagogie avec les clients non-financiers", "Organisation multi-dossiers", "Confidentialité absolue"],
    pourquoi: "Portefeuille diversifié (PME, filiales de groupes, ONG) sans monotonie, outils modernes et révision par un expert-comptable diplômé. Formation continue OHADA/IFRS et évolution rapide vers Responsable de portefeuille.",
    evolution: "→ Responsable de portefeuille → Expert-Comptable",
  },
  {
    id: "fiscaliste",
    title: "Fiscaliste",
    subtitle: "3–7 ans · Kinshasa",
    icon: Scale,
    level: "Conseil fiscal",
    description: "Vous sécurisez les positions fiscales des groupes et défendez leurs intérêts face à l'administration — de la veille à la négociation.",
    missions: ["Revue fiscale, due diligence et diagnostic CGI", "Prix de transfert (Master/Local File) et conventions internationales", "Contentieux : réclamations DGI/DGDA, recours et assistance au contrôle", "Veille CGI congolais, notes d'alerte et formation des équipes clients", "Structuration fiscale des opérations minières et bancaires"],
    profil: "Master Droit fiscal / DJCE / CCA, 3–7 ans en fiscalité d'entreprise, connaissance approfondie du CGI RDC et de l'OHADA.",
    qualites: ["Analyse juridique fine et pragmatisme", "Résistance au stress (contrôles)", "Capacité de conviction écrite et orale", "Veille et anticipation", "Relation de confiance avec l'administration"],
    pourquoi: "CAAF est l'un des rares cabinets à combiner audit et fiscalité à ce niveau en RDC : vous travaillez main dans la main avec les auditeurs, sur les dossiers les plus techniques du pays. Visibilité directe auprès des DAF et des directions juridiques.",
    evolution: "→ Senior Tax Manager → Directeur Fiscal",
  },
  {
    id: "risk-advisory",
    title: "Consultant Risk & Contrôle Interne",
    subtitle: "2–6 ans · Kinshasa / Lubumbashi",
    icon: TrendingUp,
    level: "Advisory",
    description: "Vous aidez les directions à passer de la cartographie des risques à leur maîtrise opérationnelle.",
    missions: ["Cartographie des risques et référentiel COSO / ISO 31000", "Audit interne externalisé et plans d'audit annuels", "Rédaction de manuels de procédures et matrices de contrôles", "Accompagnement ERP, data et outils de pilotage (tableaux de bord KRI)"],
    profil: "École de commerce / Ingénieur / Master Audit-Contrôle, 2–6 ans en risk, contrôle interne ou audit. Appétence data et processus.",
    qualites: ["Esprit structuré et analytique", "Écoute et pédagogie terrain", "Curiosité pour les opérations", "Capacité à formaliser simplement le complexe", "Autonomie et proactivité"],
    pourquoi: "Exposition multisectorielle immédiate (mines, banques, industrie, ONG) et missions à fort impact : vous voyez vos recommandations déployées. Méthodologie CAAF éprouvée, formation COSO/contrôle interne et pont naturel vers l'audit ou la direction risques.",
    evolution: "→ Manager Risk Advisory → Directeur Advisory",
  },
]

export function CareersRoles() {
  const [activeId, setActiveId] = useState(ROLES[0].id)
  const active = ROLES.find((r) => r.id === activeId) ?? ROLES[0]
  const ActiveIcon = active.icon
  return (
    <section className="bg-[#f8fafc] border-t border-slate-200/60 px-6 sm:px-10 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-slate-300" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Nos métiers</span>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-slate-900 md:text-5xl">
            Comprenez et
            <br />
            <span className="text-slate-400">découvrez nos métiers.</span>
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-sm leading-7 text-slate-500">
            En l'absence d'opportunités actives, explorez les rôles qui font la force de CAAF SAS — inspirés des standards internationaux, expliqués simplement. Chaque fiche détaille missions, profil, qualités, évolution et pourquoi nous rejoindre.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="border border-slate-200 bg-white lg:col-span-4">
            <div className="border-b border-slate-200 px-6 py-4">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Métiers de la firme</p>
            </div>
            <div className="divide-y divide-slate-200">
              {ROLES.map((role, idx) => {
                const isActive = role.id === activeId
                return (
                  <button key={role.id} onClick={() => setActiveId(role.id)} className={`flex w-full items-start gap-3 px-6 py-5 text-left transition-colors ${isActive ? "bg-slate-900 text-white" : "bg-white hover:bg-slate-50"}`}>
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center border font-mono text-xs ${isActive ? "border-white/20 bg-white/10 text-white" : "border-slate-200 bg-white text-slate-400"}`}>{String(idx + 1).padStart(2, "0")}</div>
                    <div>
                      <p className={`font-sans text-sm font-semibold leading-5 ${isActive ? "text-white" : "text-slate-700"}`}>{role.title}</p>
                      <p className={`mt-1 font-sans text-xs ${isActive ? "text-white/60" : "text-slate-500"}`}>{role.level}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <article className="border border-slate-200 bg-white p-8 lg:col-span-8 md:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center bg-slate-900 font-mono text-sm font-bold text-white">
                {String(ROLES.findIndex((r) => r.id === activeId) + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-serif text-2xl text-slate-900">{active.title}</h3>
                <p className="font-sans text-sm text-slate-500">{active.subtitle}</p>
              </div>
            </div>
            <p className="font-sans text-sm leading-7 text-slate-600">{active.description}</p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Missions au quotidien</p>
                <ul className="mt-3 space-y-2">
                  {active.missions.map((m) => (
                    <li key={m} className="flex gap-2 font-sans text-sm leading-6 text-slate-600"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-900" />{m}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Profil recherché</p>
                  <p className="mt-2 font-sans text-sm leading-6 text-slate-600">{active.profil}</p>
                </div>
                <div>
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Évolution</p>
                  <p className="mt-2 font-sans text-sm font-medium text-slate-600">{active.evolution}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-2">
              <div>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Qualités requises</p>
                <ul className="mt-3 space-y-2">
                  {active.qualites.map((q) => (
                    <li key={q} className="flex gap-2 font-sans text-sm leading-6 text-slate-600"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />{q}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Pourquoi chez nous ?</p>
                <p className="mt-3 font-sans text-sm leading-7 text-slate-600">{active.pourquoi}</p>
              </div>
            </div>
            <div className="mt-8 border-t border-slate-200 pt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 font-sans text-sm font-semibold text-white hover:bg-primary-active">Candidature spontanée <ArrowRight size={14} /></Link>
              <span className="font-sans text-xs leading-6 text-slate-400">Pas de poste ouvert ? Envoyez votre CV à <a href="mailto:recrutement@caaf-sas.com" className="font-medium text-slate-600 hover:underline">recrutement@caaf-sas.com</a></span>
            </div>
          </article>
        </div>

        <div className="mt-8 flex items-center gap-3 border border-slate-200 bg-white px-6 py-4">
          <span className="font-mono text-xs font-bold tracking-widest text-slate-400">01</span>
          <p className="font-sans text-sm text-slate-600">Tous nos métiers bénéficient d'un programme de formation continue (IFAC, OHADA, ISA) et d'un mentorat par un associé.</p>
        </div>
      </div>
    </section>
  )
}
