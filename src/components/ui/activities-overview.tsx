// src/components/ui/activities-overview.tsx
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// ─── Types ───────────────────────────────────────────────
type VisualType = "audit" | "fiscal" | "advisory" | "diligence"

type ActivityItem = {
  number: string
  title: string
  description: string
  href: string
  linkLabel: string
  visual: VisualType
}

// ─── Data ────────────────────────────────────────────────
const EASE_OUT = [0.1, 0, 0.1, 1] as const

const ACTIVITIES: ActivityItem[] = [
  {
    number: "01",
    title: "Audit & Assurance",
    description:
      "Examen indépendant et rigoureux des états financiers afin de renforcer la transparence, la conformité et la confiance des investisseurs, partenaires financiers et parties prenantes.",
    href: "#audit-financier",
    linkLabel: "Explorer l'activité d'audit",
    visual: "audit",
  },
  {
    number: "02",
    title: "Conseil Fiscal",
    description:
      "Structuration, conformité et optimisation fiscale adaptées aux réalités réglementaires locales et internationales. Une lecture fine des obligations pour sécuriser vos opérations.",
    href: "#conseil-fiscal",
    linkLabel: "Voir les détails",
    visual: "fiscal",
  },
  {
    number: "03",
    title: "Financial Advisory",
    description:
      "Valorisation, restructuration, accompagnement des transactions et due diligence pour les opérations stratégiques, notamment dans les secteurs bancaire, industriel et minier.",
    href: "#financial-advisory",
    linkLabel: "Advisory Services",
    visual: "advisory",
  },
]

// ─── SVG Visuals ─────────────────────────────────────────

function AuditVisual() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={60 + i * 8}
          y={20 + i * 14}
          width={70}
          height={100}
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity={0.08 + i * 0.06}
        >
          <animate
            attributeName="opacity"
            values={`${0.06 + i * 0.06};${0.2 + i * 0.08};${0.06 + i * 0.06}`}
            dur="3s"
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
      <path
        d="M 82 68 L 93 80 L 118 54"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.25"
      >
        <animate
          attributeName="opacity"
          values="0.15;0.5;0.15"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </path>
      {[0, 1, 2].map((i) => (
        <line
          key={`tl-${i}`}
          x1="72"
          y1={96 + i * 8}
          x2="118"
          y2={96 + i * 8}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.08"
        />
      ))}
    </svg>
  )
}

function FiscalVisual() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      <line
        x1="100"
        y1="50"
        x2="100"
        y2="110"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.2"
      />
      <line
        x1="55"
        y1="70"
        x2="145"
        y2="70"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.2"
      >
        <animate
          attributeName="opacity"
          values="0.15;0.3;0.15"
          dur="3s"
          repeatCount="indefinite"
        />
      </line>
      <path
        d="M 40 88 Q 55 92 70 88"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.15"
      />
      <line
        x1="55"
        y1="70"
        x2="40"
        y2="88"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.12"
      />
      <line
        x1="55"
        y1="70"
        x2="70"
        y2="88"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.12"
      />
      <path
        d="M 130 82 Q 145 86 160 82"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.15"
      />
      <line
        x1="145"
        y1="70"
        x2="130"
        y2="82"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.12"
      />
      <line
        x1="145"
        y1="70"
        x2="160"
        y2="82"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.12"
      />
      <rect
        x="46"
        y="89"
        width="18"
        height="10"
        rx="2"
        fill="currentColor"
        opacity="0.12"
      >
        <animate
          attributeName="opacity"
          values="0.08;0.2;0.08"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="136"
        y="83"
        width="18"
        height="10"
        rx="2"
        fill="currentColor"
        opacity="0.08"
      >
        <animate
          attributeName="opacity"
          values="0.06;0.16;0.06"
          dur="2.5s"
          begin="0.3s"
          repeatCount="indefinite"
        />
      </rect>
      <path
        d="M 92 110 L 100 100 L 108 110 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.15"
      />
      <line
        x1="82"
        y1="112"
        x2="118"
        y2="112"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.1"
      />
    </svg>
  )
}

function AdvisoryVisual() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`gl-${i}`}
          x1="40"
          y1={40 + i * 20}
          x2="160"
          y2={40 + i * 20}
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.06"
        />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const heights = [35, 50, 40, 65, 55, 80]
        return (
          <rect
            key={`bar-${i}`}
            x={52 + i * 18}
            y={120 - heights[i]}
            width={10}
            height={heights[i]}
            rx="1.5"
            fill="currentColor"
            opacity="0.08"
          >
            <animate
              attributeName="opacity"
              values="0.05;0.18;0.05"
              dur="2.5s"
              begin={`${i * 0.2}s`}
              repeatCount="indefinite"
            />
          </rect>
        )
      })}
      <polyline
        points="57,85 75,70 93,80 111,55 129,65 147,40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.2"
      >
        <animate
          attributeName="opacity"
          values="0.1;0.35;0.1"
          dur="3s"
          repeatCount="indefinite"
        />
      </polyline>
      {[
        [57, 85],
        [75, 70],
        [93, 80],
        [111, 55],
        [129, 65],
        [147, 40],
      ].map(([cx, cy], i) => (
        <circle
          key={`dp-${i}`}
          cx={cx}
          cy={cy}
          r="2.5"
          fill="currentColor"
          opacity="0.2"
        >
          <animate
            attributeName="opacity"
            values="0.1;0.4;0.1"
            dur="2s"
            begin={`${i * 0.15}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  )
}

function DiligenceVisual() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      {[0, 1, 2, 3].map((i) => (
        <circle
          key={i}
          cx="90"
          cy="75"
          r={18 + i * 14}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity={0.06 + i * 0.02}
        >
          <animate
            attributeName="opacity"
            values={`${0.04 + i * 0.02};${0.12 + i * 0.02};${0.04 + i * 0.02}`}
            dur={`${3 + i * 0.4}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
      <line
        x1="120"
        y1="105"
        x2="148"
        y2="130"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.15"
      />
      <circle
        cx="90"
        cy="75"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.15"
      >
        <animate
          attributeName="opacity"
          values="0.1;0.25;0.1"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
      <line
        x1="90"
        y1="66"
        x2="90"
        y2="72"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
      <line
        x1="90"
        y1="78"
        x2="90"
        y2="84"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
      <line
        x1="81"
        y1="75"
        x2="87"
        y2="75"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
      <line
        x1="93"
        y1="75"
        x2="99"
        y2="75"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
      <path
        d="M 72 58 Q 78 52 84 55"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.1"
      />
    </svg>
  )
}

function AnimatedVisual({ type }: { type: VisualType }) {
  switch (type) {
    case "audit":
      return <AuditVisual />
    case "fiscal":
      return <FiscalVisual />
    case "advisory":
      return <AdvisoryVisual />
    case "diligence":
      return <DiligenceVisual />
    default:
      return <AuditVisual />
  }
}

// ─── Activity Row ────────────────────────────────────────

function ActivityRow({ item, index }: { item: ActivityItem; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(rowRef, { once: true, amount: 0.2 })

  return (
    <div ref={rowRef} className="group">
      <motion.div
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
        transition={{ duration: 1.5, delay: index * 0.08, ease: EASE_OUT }}
        className="flex flex-col gap-6 border-b border-[#111A4A]/[0.06] py-8 lg:flex-row lg:items-center lg:gap-10 lg:py-10"
      >
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-xs text-[#7C7F88]">
            {item.number}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 grid items-center gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 text-2xl font-normal text-[#111A4A] transition-transform duration-500 group-hover:translate-x-2 lg:text-[28px]">
              {item.title}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-[#7C7F88]">
              {item.description}
            </p>
            <Link
              href={item.href}
              className="group/link inline-flex items-center gap-2 text-[13px] font-medium text-primary transition-all hover:gap-2.5"
            >
              {item.linkLabel}
              <ArrowRight
                size={13}
                className="transition-transform group-hover/link:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="h-28 w-36 text-[#111A4A]">
              <AnimatedVisual type={item.visual} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export function ActivitiesOverview() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-canvas">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-10 lg:pb-28 lg:pt-20">
        {/* ── Header ── */}
        <div className="mb-10 max-w-3xl lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
            className="mb-5 inline-flex items-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Expertises
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
            Des expertises structurées{" "}
            <span className="opacity-40">pour des décisions plus sûres.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 1.5, delay: 0.3, ease: EASE_OUT }}
            className="max-w-xl text-lg leading-6 text-[#111A4A] opacity-60"
          >
            CAAF SAS accompagne les entreprises, institutions et groupes dans
            leurs enjeux d&apos;audit, de conformité, de fiscalité et de
            transformation financière.
          </motion.p>
        </div>

        {/* ── Activities List ── */}
        <div>
          {ACTIVITIES.map((item, index) => (
            <ActivityRow key={item.number} item={item} index={index} />
          ))}
        </div>

        {/* ── CTA — left-aligned ── */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={
            isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
          }
          transition={{ duration: 1.5, delay: 0.6, ease: EASE_OUT }}
          className="mt-10 flex items-start lg:mt-14"
        >
          <Link
            href="/expertises"
            className="btn-primary-hero group relative inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-9 py-4 text-[14px] font-semibold tracking-wide text-white"
          >
            <span className="relative z-10">
              Découvrir toutes nos expertises
            </span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
