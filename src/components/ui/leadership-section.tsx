// src/components/ui/leadership-section.tsx
"use client"

import Image from "next/image"
import type { StaticImageData } from "next/image"
import {
  ArrowRight,
  Briefcase,
  ShieldCheck,
  Users,
  Globe2,
} from "lucide-react"
import Link from "next/link"

type Leader = {
  name: string
  role: string
  bio: string
  image?: string | StaticImageData
  highlights?: string[]
  location?: string
}

type LeadershipSectionProps = {
  title?: string
  eyebrow?: string
  description?: string
  leaders: [Leader, Leader] | Leader[]
}

function isStaticImageData(img: string | StaticImageData): img is StaticImageData {
  return typeof img === "object" && "src" in img
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

function LeaderPortrait({
  leader,
  priority = false,
}: {
  leader: Leader
  priority?: boolean
}) {
  if (leader.image) {
    return (
      <div className="relative h-full min-h-[340px] w-full bg-surface-card">
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
        />
      </div>
    )
  }

  return (
    <div className="flex h-full min-h-[340px] w-full items-center justify-center bg-surface-card">
      <div className="text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center border border-hairline bg-white">
          <span className="font-serif text-3xl text-brand-navy">
            {getInitials(leader.name)}
          </span>
        </div>
        <p className="mt-4 text-sm uppercase tracking-[0.14em] text-ink/35">
          Portrait à ajouter
        </p>
      </div>
    </div>
  )
}

function HighlightTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-hairline bg-canvas px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/40">
      {children}
    </span>
  )
}

export function LeadershipSection({
  title = "Notre leadership",
  eyebrow = "Direction",
  description = "Une direction engagée, expérimentée et proche des enjeux des décideurs. Notre gouvernance s’appuie sur la compétence technique, la discrétion professionnelle et la continuité dans la relation client.",
  leaders,
}: LeadershipSectionProps) {
  const [leaderOne, leaderTwo] = leaders

  return (
    <section className="bg-canvas px-10 py-section">
      <div className="w-full">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-brand-navy md:text-5xl">
              {title}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-ink/60">
            {description}
          </p>
        </div>

        {/* Asymmetrical leadership layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Managing Partner — featured */}
          <article className="border border-hairline bg-white lg:col-span-7">
            <div className="grid h-full grid-cols-1 md:grid-cols-[0.95fr_1.05fr]">
              <LeaderPortrait leader={leaderOne} priority />

              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/5">
                      <ShieldCheck
                        className="h-5 w-5 text-primary"
                        strokeWidth={1.7}
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-primary">
                        Leadership
                      </p>
                      <p className="text-xs uppercase tracking-[0.14em] text-ink/35">
                        {leaderOne.location ?? "Kinshasa"}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl text-brand-navy">
                    {leaderOne.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-primary">
                    {leaderOne.role}
                  </p>

                  <p className="mt-6 text-sm leading-7 text-ink/60">
                    {leaderOne.bio}
                  </p>

                  {leaderOne.highlights && leaderOne.highlights.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {leaderOne.highlights.map((item) => (
                        <HighlightTag key={item}>{item}</HighlightTag>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8 border-t border-hairline pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Briefcase
                        className="h-4 w-4 text-primary"
                        strokeWidth={1.7}
                      />
                      <span className="text-xs uppercase tracking-[0.14em] text-ink/40">
                        Vision stratégique
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe2
                        className="h-4 w-4 text-primary"
                        strokeWidth={1.7}
                      />
                      <span className="text-xs uppercase tracking-[0.14em] text-ink/40">
                        Standards internationaux
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Directeur — secondary but premium */}
          <article className="border border-hairline bg-white lg:col-span-5">
            <LeaderPortrait leader={leaderTwo} />

            <div className="p-8 md:p-10">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/5">
                  <Users className="h-5 w-5 text-primary" strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-primary">
                    Direction
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-ink/35">
                    {leaderTwo.location ?? "Lubumbashi"}
                  </p>
                </div>
              </div>

              <h3 className="font-serif text-2xl text-brand-navy md:text-3xl">
                {leaderTwo.name}
              </h3>

              <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-primary">
                {leaderTwo.role}
              </p>

              <p className="mt-6 text-sm leading-7 text-ink/60">
                {leaderTwo.bio}
              </p>

              {leaderTwo.highlights && leaderTwo.highlights.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {leaderTwo.highlights.map((item) => (
                    <HighlightTag key={item}>{item}</HighlightTag>
                  ))}
                </div>
              )}

              <div className="mt-8 border-t border-hairline pt-6">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
                >
                  Prendre contact avec la direction
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}