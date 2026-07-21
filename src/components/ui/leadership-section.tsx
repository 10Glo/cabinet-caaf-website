"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

// ─── Data ────────────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

const LEADERS = [
  {
    name: "Jean-Pierre Kabongo",
    role: "Managing Partner",
    bio: "Avec plus de deux décennies d'expérience dans l'audit, la fiscalité stratégique et l'accompagnement des groupes opérant en RDC, il pilote la vision du cabinet avec une exigence constante de qualité, d'indépendance et de fiabilité.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&crop=face",
    location: "Kinshasa",
    highlights: ["Audit stratégique", "Fiscalité minière", "Gouvernance"],
    badge: "Leadership",
  },
  {
    name: "Patrick Mutombo",
    role: "Directeur",
    bio: "Il supervise l'exécution des missions, le suivi méthodologique et la coordination des équipes, avec une forte expertise en conformité réglementaire, structuration financière et accompagnement opérationnel.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop&crop=face",
    location: "Lubumbashi",
    highlights: ["Conformité", "OHADA / IFRS", "Pilotage mission"],
    badge: "Direction",
  },
]

// ─── Leader Card ─────────────────────────────────────────

function LeaderCard({
  leader,
  index,
  isInView,
}: {
  leader: (typeof LEADERS)[number]
  index: number
  isInView: boolean
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={
        isInView
          ? {
              opacity: [0, 1, 1],
              y: [20, 0, 0],
              filter: ["blur(4px)", "blur(0px)", "blur(0px)"],
            }
          : {}
      }
      transition={{
        duration: 1.5,
        delay: 0.3 + index * 0.15,
        ease: EASE_OUT,
      }}
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
            <div className="mb-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                {leader.badge}
              </span>
              <span className="mx-2 text-[#111A4A]/10">—</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#7C7F88]">
                {leader.location}
              </span>
            </div>

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
    </motion.article>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef} className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* ── Header ── */}
        <div className="mb-14 max-w-3xl lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
            className="mb-5 inline-flex items-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Direction
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 1.5, delay: 0.2, ease: EASE_OUT }}
            className="mb-6 max-w-2xl text-[40px] font-normal leading-tight tracking-tight text-[#111A4A]"
          >
            Une direction engagée,{" "}
            <span className="opacity-40">proche de vos enjeux.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 1.5, delay: 0.3, ease: EASE_OUT }}
            className="max-w-xl text-lg leading-6 text-[#111A4A] opacity-60"
          >
            Notre gouvernance s&apos;appuie sur la compétence technique, la
            discrétion professionnelle et la continuité dans la relation client.
          </motion.p>
        </div>

        {/* ── Two cards — layout étiré à 100% ── */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 w-full">
          {LEADERS.map((leader, i) => (
            <LeaderCard
              key={leader.name}
              leader={leader}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* ── Team quote — italic ── */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={
            isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
          }
          transition={{ duration: 1.5, delay: 0.6, ease: EASE_OUT }}
          className="mt-10 flex justify-left lg:mt-14"
        >
          <p className="max-w-2xl text-left text-sm italic leading-relaxed text-[#7C7F88]/70">
            Derrière chaque mission, une équipe de professionnels engagés qui
            partagent la même exigence : celle de servir nos clients avec
            rigueur, indépendance et constance dans la durée.
          </p>
        </motion.div>
      </div>
    </section>
  )
}