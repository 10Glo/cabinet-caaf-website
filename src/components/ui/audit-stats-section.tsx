// src/components/ui/audit-stats-section.tsx
"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type AuditStatItem = {
  value: number
  label: string
  suffix?: string
  prefix?: string
  decimals?: number
  description?: string
}

type AuditStatsSectionProps = {
  eyebrow?: string
  title?: string
  description?: string
  stats: AuditStatItem[]
  className?: string
  theme?: "dark" | "light"
}

function useInViewOnce<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current || inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [inView, threshold])

  return { ref, inView }
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(media.matches)

    const listener = (event: MediaQueryListEvent) => setReduced(event.matches)
    media.addEventListener("change", listener)

    return () => media.removeEventListener("change", listener)
  }, [])

  return reduced
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  start,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  start: boolean
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()

  const formatter = useMemo(() => {
    return new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  }, [decimals])

  useEffect(() => {
    if (!start) return

    if (prefersReducedMotion) {
      setDisplayValue(value)
      return
    }

    let animationFrame = 0
    const duration = 1800
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = value * eased

      setDisplayValue(current)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [start, value, prefersReducedMotion])

  return (
    <span>
      {prefix}
      {formatter.format(displayValue)}
      {suffix}
    </span>
  )
}

export function AuditStatsSection({
  eyebrow = "Quelques chiffres clés",
  title = "Une expertise qui se mesure.",
  description = "Des années d'expérience, des missions menées avec rigueur et une présence durable auprès de nos clients.",
  stats,
  className,
  theme = "dark",
}: AuditStatsSectionProps) {
  const { ref, inView } = useInViewOnce<HTMLElement>(0.2)

  const isDark = theme === "dark"

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden px-6 py-20 sm:px-10 lg:py-24",
        isDark ? "bg-brand-navy text-white" : "bg-white text-brand-navy",
        className
      )}
    >
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: isDark ? 0.025 : 0.03,
          backgroundImage: isDark
            ? `
              linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
            `
            : `
              radial-gradient(circle at 1px 1px, rgba(0,0,0,0.16) 1px, transparent 0)
            `,
          backgroundSize: isDark ? "80px 80px" : "24px 24px",
        }}
      />

      {/* Ambient glow */}
      <div
        className={cn(
          "pointer-events-none absolute right-0 top-0 h-[340px] w-[340px] rounded-full blur-[120px]",
          isDark ? "bg-primary/[0.08]" : "bg-primary/[0.06]"
        )}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.2em]",
                isDark ? "text-primary" : "text-primary"
              )}
            >
              {eyebrow}
            </span>
          </div>

          <h2
            className={cn(
              "font-serif text-4xl leading-tight md:text-5xl",
              isDark ? "text-white" : "text-brand-navy"
            )}
          >
            {title}
          </h2>

          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-relaxed",
              isDark ? "text-white/50" : "text-ink/60"
            )}
          >
            {description}
          </p>
        </div>

        {/* Stats grid */}
        <div
          className={cn(
            "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "group relative overflow-hidden border p-8 transition-all duration-500",
                isDark
                  ? "border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.05]"
                  : "border-hairline bg-canvas hover:bg-surface-soft",
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              )}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-primary/0 transition-colors duration-300 group-hover:bg-primary/70" />

              {/* Number */}
              <div
                className={cn(
                  "font-serif text-4xl tracking-tight md:text-5xl",
                  isDark ? "text-white" : "text-brand-navy"
                )}
              >
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  start={inView}
                />
              </div>

              {/* Label */}
              <p
                className={cn(
                  "mt-3 text-[11px] font-semibold uppercase tracking-[0.14em]",
                  isDark ? "text-white/35" : "text-ink/35"
                )}
              >
                {stat.label}
              </p>

              {/* Description */}
              {stat.description && (
                <p
                  className={cn(
                    "mt-4 text-[13px] leading-6",
                    isDark ? "text-white/45" : "text-ink/55"
                  )}
                >
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}