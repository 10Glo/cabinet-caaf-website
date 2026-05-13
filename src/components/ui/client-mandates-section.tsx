// src/components/ui/client-mandates-section.tsx
"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import type { StaticImageData } from "next/image"
import {
  ArrowRight,
  Building2,
  Landmark,
  Factory,
  Briefcase,
  Globe2,
  type LucideIcon,
} from "lucide-react"

type ClientItem = {
  name: string
  sector?: string
  img?: string | StaticImageData
  icon?: LucideIcon
}

type ClientMandatesSectionProps = {
  title?: string
  eyebrow?: string
  description?: string
  clients: ClientItem[]
  ctaHref?: string
  ctaLabel?: string
}

function isStaticImageData(img: string | StaticImageData): img is StaticImageData {
  return typeof img === "object" && "src" in img
}

function ClientTile({ client }: { client: ClientItem }) {
  return (
    <div className="group flex min-h-[110px] flex-col justify-between border border-hairline bg-white p-5 transition-colors hover:bg-surface-soft/40">
      <div className="flex min-h-[36px] items-center">
        {client.img ? (
          <Image
            src={client.img}
            alt={client.name}
            width={isStaticImageData(client.img) ? client.img.width : 160}
            height={isStaticImageData(client.img) ? client.img.height : 40}
            className="h-8 w-auto max-w-[150px] object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            style={{ width: "auto", height: "32px" }}
            unoptimized
          />
        ) : client.icon ? (
          <div className="flex items-center gap-3">
            <client.icon className="h-5 w-5 text-brand-navy/70" strokeWidth={1.6} />
            <span className="text-base font-semibold tracking-tight text-brand-navy">
              {client.name}
            </span>
          </div>
        ) : (
          <span className="text-base font-semibold tracking-tight text-brand-navy">
            {client.name}
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-hairline pt-3">
        <span className="text-[11px] uppercase tracking-[0.14em] text-ink/35">
          {client.sector ?? "Mission réalisée"}
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
      </div>
    </div>
  )
}

export function ClientMandatesSection({
  title = "Ils nous ont confié leurs missions",
  eyebrow = "Références",
  description = "Des groupes industriels, institutions financières et entreprises de référence nous sollicitent pour des missions d’audit, d’assurance, de conseil fiscal et d’accompagnement stratégique.",
  clients,
  ctaHref = "#references",
  ctaLabel = "Voir davantage de références",
}: ClientMandatesSectionProps) {
  return (
    <section className="bg-white px-10 py-section">
      <div className="w-full">
        {/* Header */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
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

          <div className="max-w-xl lg:ml-auto">
            <p className="text-base leading-relaxed text-ink/60">
              {description}
            </p>

            <Link
              href={ctaHref}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              {ctaLabel}
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Summary Strip */}
        <div className="mb-8 grid grid-cols-2 border border-hairline bg-canvas md:grid-cols-4">
          {[
            { value: `${clients.length}+`, label: "références actives", icon: Building2 },
            { value: "Audit", label: "missions de certification", icon: Landmark },
            { value: "Conseil", label: "interventions stratégiques", icon: Briefcase },
            { value: "Multi-sectoriel", label: "banque, mines, industrie", icon: Factory },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 border-r border-hairline px-5 py-5 last:border-r-0"
            >
              <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/5">
                <item.icon className="h-4 w-4 text-primary" strokeWidth={1.6} />
              </div>
              <div>
                <div className="font-serif text-2xl leading-none text-brand-navy">
                  {item.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink/35">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Wall */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {clients.map((client) => (
            <ClientTile key={client.name} client={client} />
          ))}
        </div>
      </div>
    </section>
  )
}