// src/components/ui/about-timeline.tsx
"use client"

const MILESTONES = [
 {
  year: "1970",
  title: "Création du cabinet",
  text: "Un cabinet d'audit et de conseil s'implante à Kinshasa, posant les bases d'une expertise qui traversera plus de cinq décennies.",
 },
 {
  year: "1990",
  title: "Intégration au réseau PwC",
  text: "Le cabinet rejoint le réseau PricewaterhouseCoopers, accédant aux méthodologies, outils et standards de qualité les plus exigeants du secteur.",
 },
 {
  year: "2005",
  title: "Expansion sectorielle",
  text: "Montée en puissance des missions dans le secteur minier et bancaire. Le cabinet accompagne les sociétés cotées et les groupes internationaux opérant en RDC.",
 },
 {
  year: "2012",
  title: "Ouverture de Lubumbashi",
  text: "Inauguration du bureau régional à Lubumbashi pour renforcer la proximité opérationnelle avec les entreprises du Haut-Katanga et du Lualaba.",
 },
 {
  year: "2023",
  title: "Naissance de CAAF SAS",
  text: "Suite à la séparation de la marque PwC avec l'Afrique francophone, le cabinet devient CAAF SAS — Congo Auditing and Advisory Firm — en préservant l'intégralité de son savoir-faire.",
 },
 {
  year: "Aujourd'hui",
  title: "40+ professionnels, 2 bureaux",
  text: "CAAF SAS accompagne plus de 80 clients actifs dans 12 secteurs d'activité, avec les mêmes standards de qualité qui ont forgé sa réputation.",
 },
]

// ─── Timeline Item ───────────────────────────────────────

function TimelineItem({
 milestone,
 index,
}: {
 milestone: (typeof MILESTONES)[number]
 index: number
}) {
 return (
  <div className="group grid grid-cols-[64px_1fr] gap-6 md:grid-cols-[96px_1fr]">
   {/* Year + connector */}
   <div className="flex flex-col items-center">
    <span className="font-mono text-[11px] font-semibold text-primary">
     {milestone.year}
    </span>
    <div className="mt-3 h-2 w-2 rounded-full border-2 border-primary/40 bg-white transition-colors duration-300 group-hover:border-primary group-hover:bg-primary" />
    {index < MILESTONES.length - 1 && (
     <div className="mt-2 w-px flex-1 bg-[#111A4A]/[0.06]" />
    )}
   </div>

   {/* Content */}
   <div className="border border-[#111A4A]/[0.06] bg-white p-6 pb-8 transition-all duration-300 hover:border-slate-300 ">
    <h3 className="mb-2 font-serif text-lg text-[#111A4A] transition-colors duration-300 group-hover:text-primary">
     {milestone.title}
    </h3>
    <p className="text-sm leading-7 text-[#7C7F88]">
     {milestone.text}
    </p>
   </div>
  </div>
 )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function HistoryTimeline() {
 return (
  <section
   className="bg-white px-6 pb-20 pt-16 sm:px-10 lg:pb-28 lg:pt-20"
  >
   <div className="mx-auto max-w-7xl">
    {/* ── Header ── */}
    <div className="mb-14 max-w-3xl lg:mb-16">
     <div className="mb-5 inline-flex items-center">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
       Jalons clés
      </span>
     </div>

     <h2 className="mb-6 max-w-2xl text-[40px] font-normal leading-tight tracking-tight text-[#111A4A]">
      Cinq décennies
      <br />
      <span className="opacity-40">d&apos;évolution.</span>
     </h2>
    </div>

    {/* ── Timeline ── */}
    <div className="space-y-5">
     {MILESTONES.map((milestone, i) => (
      <TimelineItem
       key={milestone.year}
       milestone={milestone}
       index={i}
      />
     ))}
    </div>
   </div>
  </section>
 )
}
