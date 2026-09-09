"use client"

import Image from "next/image"
import leaderMukula from "@/assets/5.png"
import leaderMfuamba from "@/assets/7.png"

// ─── Data — localisé (fr/en) ─────────────────────────────────
const LEADERS = [
  {
    name: "Jean Jacques Mukula",
    role: "Managing Partner",
    roleFr: "Associé Gérant",
    bio: "Avec plus de deux décennies d'expérience dans l'audit, la fiscalité stratégique et l'accompagnement des groupes opérant en RDC, il pilote la vision du cabinet avec une exigence constante de qualité, d'indépendance et de fiabilité.",
    bioEn:
      "With over two decades of experience in audit, strategic taxation and support for groups operating in the DRC, he drives the firm's vision with a constant demand for quality, independence and reliability.",
    image: leaderMukula,
    location: "Kinshasa",
    highlights: ["Audit stratégique", "Fiscalité minière", "Gouvernance"],
    badge: "Leadership",
  },
  {
    name: "Désiré Mfuamba",
    role: "Directeur",
    roleEn: "Director",
    bio: "Il supervise l'exécution des missions, le suivi méthodologique et la coordination des équipes, avec une forte expertise en conformité réglementaire, structuration financière et accompagnement opérationnel.",
    bioEn:
      "He supervises mission execution, methodological monitoring and team coordination, with strong expertise in regulatory compliance, financial structuring and operational support.",
    image: leaderMfuamba,
    location: "Lubumbashi",
    highlights: ["Conformité", "OHADA / IFRS", "Pilotage mission"],
    badge: "Direction",
  },
]

// ─── Leader Card ─────────────────────────────────────────

function LeaderCard({
  leader,
  index,
}: {
  leader: (typeof LEADERS)[number]
  index: number
}) {
  return (
    <article
      className="group border border-[#111A4A]/[0.06] bg-white w-full"
    >
      {/* Modification de la proportion de la grille pour allonger l'espace du texte (40% photo / 60% contenu) */}
      <div className="grid h-full grid-cols-1 md:grid-cols-[4fr_6fr]">
        {/* Portrait */}
        <div className="relative h-full min-h-[720px] w-full overflow-hidden bg-[#111A4A]/[0.03]">
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-8 md:p-10">
          <div>
            {/* Badge */}
            {/* <div className="mb-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                {leader.badge}
              </span>
              <span className="mx-2 text-[#111A4A]/10">—</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#7C7F88]">
                {leader.location}
              </span>
            </div> */}

            {/* Name + Role */}
            <h3 className="font-serif text-2xl text-[#111A4A] md:text-3xl">
              {leader.name}
            </h3>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-primary">
              {leader.role}
            </p>

            {/* Bio */}
            <p className="mt-6 text-sm leading-7 text-[#7C7F88]">
              {leader.bio}
            </p>

            {/* Highlights */}
            {leader.highlights.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {leader.highlights.map((item) => (
                  <span
                    key={item}
                    className="border border-[#111A4A]/[0.06] bg-[#111A4A]/[0.02] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C7F88]/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Footer — aligné à gauche grâce à text-left */}
          <div className="mt-8 border-t border-[#111A4A]/[0.06] pt-6 text-left">
            <p className="text-xs leading-relaxed text-[#7C7F88]/70">
              Vision stratégique · Standards internationaux
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function LeadershipSection() {
  return (
    <section className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* ── Header ── */}
        <div className="mb-14 max-w-3xl lg:mb-16">
          <div
            className="mb-5 inline-flex items-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Direction
            </span>
          </div>

          <h2
            className="mb-6 max-w-2xl text-[40px] font-normal leading-tight tracking-tight text-[#111A4A]"
          >
            Une direction engagée,{" "}
            <span className="opacity-40">proche de vos enjeux.</span>
          </h2>

          <p
            className="max-w-xl text-lg leading-6 text-[#111A4A] opacity-60"
          >
            Notre gouvernance s&apos;appuie sur la compétence technique, la
            discrétion professionnelle et la continuité dans la relation client.
          </p>
        </div>

        {/* ── Two cards — layout étiré à 100% ── */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 w-full">
          {LEADERS.map((leader, i) => (
            <LeaderCard
              key={leader.name}
              leader={leader}
              index={i}
            />
          ))}
        </div>

        {/* ── Team quote — italic ── */}
        <div
          className="mt-10 flex justify-left lg:mt-14"
        >
          <p className="max-w-2xl text-left text-sm italic leading-relaxed text-[#7C7F88]/70">
            Derrière chaque mission, une équipe de professionnels engagés qui
            partagent la même exigence : celle de servir nos clients avec
            rigueur, indépendance et constance dans la durée.
          </p>
        </div>
      </div>
    </section>
  )
}
