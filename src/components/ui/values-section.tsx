// src/components/ui/values-section.tsx
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

// ─── Data ────────────────────────────────────────────────
const VALUES = [
 {
  title: "Intégrité",
  description:
   "Nous agissons avec droiture, indépendance et cohérence dans chacune de nos missions, quelles que soient les contraintes du contexte.",
  tag: "Fondement",
 },
 {
  title: "Rigueur",
  description:
   "Nos interventions reposent sur une méthodologie exigeante, une analyse documentée et un haut niveau d'attention au détail.",
  tag: "Exigence",
 },
 {
  title: "Responsabilité",
  description:
   "Nous mesurons l'impact de nos recommandations et assumons pleinement notre rôle dans la sécurisation des décisions de nos clients.",
  tag: "Engagement",
 },
 {
  title: "Confiance",
  description:
   "Nous construisons des relations durables avec les dirigeants, fondées sur l'écoute, la confidentialité et la qualité d'exécution.",
  tag: "Relation",
 },
]

const CARD_ACCENTS = [
 {
  glow: "bg-primary/[0.08]",
  line: "bg-primary/60",
  chip: "bg-primary/[0.06] text-primary border-primary/10",
 },
 {
  glow: "bg-emerald-400/[0.08]",
  line: "bg-emerald-400/60",
  chip: "bg-emerald-400/[0.08] text-emerald-700 border-emerald-400/15",
 },
 {
  glow: "bg-sky-400/[0.08]",
  line: "bg-sky-400/60",
  chip: "bg-sky-400/[0.08] text-sky-700 border-sky-400/15",
 },
 {
  glow: "bg-violet-400/[0.08]",
  line: "bg-violet-400/60",
  chip: "bg-violet-400/[0.08] text-violet-700 border-violet-400/15",
 },
]

// ─── Value Card ──────────────────────────────────────────
function ValueCard({
 value,
 index,
}: {
 value: (typeof VALUES)[number]
 index: number
}) {
 const accent = CARD_ACCENTS[index % CARD_ACCENTS.length]

 return (
  <article className="group relative overflow-hidden border border-[#111A4A]/[0.08] bg-white p-7 transition-all duration-500 hover:border-slate-300 sm:p-8">
   {/* Top accent line */}
   <div
    className={`absolute left-0 top-0 h-px w-full origin-left scale-x-0 ${accent.line} transition-transform duration-500 group-hover:scale-x-100`}
   />

   {/* Soft glow */}
   <div
    className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full ${accent.glow} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
   />

   {/* Ghost number */}
   <div className="pointer-events-none absolute right-5 top-4 font-serif text-6xl tracking-tight text-[#111A4A]/[0.04] transition-transform duration-500 group-">
    {String(index + 1).padStart(2, "0")}
   </div>

   {/* Header row */}
   <div className="relative z-10 mb-8 flex items-center justify-between gap-4">
    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#7C7F88]/55">
     {String(index + 1).padStart(2, "0")}
    </span>

    <span
     className={`inline-flex items-center border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${accent.chip}`}
    >
     {value.tag}
    </span>
   </div>

   {/* Title */}
   <h3 className="relative z-10 mb-3 font-serif text-[28px] leading-none tracking-tight text-[#111A4A] transition-transform duration-500 group-hover:translate-x-1">
    {value.title}
   </h3>

   {/* Description */}
   <p className="relative z-10 max-w-sm text-sm leading-7 text-[#7C7F88]">
    {value.description}
   </p>

   {/* Bottom cue */}
   <div className="relative z-10 mt-8 flex items-center gap-2">
    <span className={`h-[2px] w-6 ${accent.line} opacity-70`} />
    <span className="text-[10px] uppercase tracking-[0.14em] text-[#7C7F88]/45">
     Valeur clé
    </span>
   </div>
  </article>
 )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════
export function ValuesSection() {
 return (
  <section className="relative overflow-hidden bg-white">
   {/* Subtle background texture */}
   <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
    style={{
     opacity: 0.035,
     backgroundImage:
      "radial-gradient(circle at 1px 1px, rgba(17,26,74,0.18) 1px, transparent 0)",
     backgroundSize: "26px 26px",
    }}
   />

   {/* Ambient glows */}
   <div className="pointer-events-none absolute -top-24 right-0 h-[320px] w-[320px] rounded-full bg-primary/[0.05] blur-[120px]" />
   <div className="pointer-events-none absolute -bottom-24 left-0 h-[260px] w-[260px] rounded-full bg-emerald-400/[0.05] blur-[110px]" />

   <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
     {/* ── Left — Editorial block ── */}
     <div className="flex flex-col justify-between">
      <div>
       <div className="mb-5 inline-flex items-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
         Nos valeurs
        </span>
       </div>

       <h2 className="mb-6 max-w-lg text-[40px] font-normal leading-tight tracking-tight text-[#111A4A]">
        Les principes qui guident{" "}
        <span className="opacity-40">notre pratique.</span>
       </h2>

       <p className="max-w-xl text-lg leading-6 text-[#111A4A]/60">
        Au-delà de l&apos;expertise technique, CAAF SAS s&apos;appuie
        sur un socle de convictions professionnelles qui structurent
        notre manière de travailler, de conseiller et d&apos;accompagner
        les décideurs.
       </p>
      </div>

      {/* Manifesto quote */}
      <div className="relative mt-10 overflow-hidden border border-[#111A4A]/[0.08] bg-white p-8">
       <div className="pointer-events-none absolute -left-8 top-2 font-serif text-[120px] leading-none text-primary/[0.06]">
        "
       </div>

       <p className="relative z-10 font-serif text-xl italic leading-relaxed text-[#111A4A]">
        La confiance ne se déclare pas.
        <br />
        Elle se démontre, mission après mission.
       </p>

       <div className="mt-6 border-t border-[#111A4A]/[0.06] pt-5">
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#7C7F88]/50">
         Doctrine du cabinet
        </p>
       </div>
      </div>
     </div>

     {/* ── Right — Values grid ── */}
     <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {VALUES.map((value, index) => (
       <div
        key={value.title}
        className={index % 2 !== 0 ? "md:translate-y-6" : ""}
       >
        <ValueCard
         value={value}
         index={index}
        />
       </div>
      ))}
     </div>
    </div>

    {/* ── Bottom strip ── */}
    <div className="mt-12 flex flex-col items-center justify-between gap-4 border border-[#111A4A]/[0.08] bg-white px-8 py-5 md:flex-row">
     <p className="text-sm text-[#7C7F88]">
      Nos valeurs structurent notre posture, notre méthodologie et notre
      relation de confiance avec chaque client.
     </p>

     <Link
      href="#contact"
      className="group/link inline-flex shrink-0 items-center gap-2 text-[13px] font-medium text-primary transition-all hover:gap-2.5"
     >
      Échanger avec notre équipe
      <ArrowRight
       size={13}
       className="transition-transform group-hover/link:translate-x-0.5"
      />
     </Link>
    </div>
   </div>
  </section>
 )
}
