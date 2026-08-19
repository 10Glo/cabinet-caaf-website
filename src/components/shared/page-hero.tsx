"use client"

import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { Fragment } from "react"

export interface PageHeroConfig {
  breadcrumb: { label: string; href?: string }[]
  eyebrow: string
  title: string
  titleMuted: string
  description: string
  image: { src: StaticImageData; alt: string }
  imageOpacity: string
}

interface PageHeroProps {
  config: PageHeroConfig
}

export function PageHero({ config }: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 z-0">
        <Image
          src={config.image.src}
          alt={config.image.alt}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${config.imageOpacity}`}
          quality={80}
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="px-6 pb-16 pt-36 sm:px-10 md:pt-44 lg:pb-20">
          <div className="max-w-3xl">
            <nav
              aria-label="Fil d'Ariane"
              className="mb-10 flex items-center gap-2 text-[11px] text-white/30"
            >
              {config.breadcrumb.map((item, index) => (
                <Fragment key={item.label}>
                  {index > 0 && <span className="text-white/15">/</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-colors duration-200 hover:text-white/50"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white/45">{item.label}</span>
                  )}
                </Fragment>
              ))}
            </nav>

            <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-300">
              {config.eyebrow}
            </span>

            <h1 className="text-[clamp(2.4rem,4.5vw,4.5rem)] font-black leading-[0.92] tracking-[-0.02em] text-white">
              {config.title}
              <br />
              <span className="text-white/35">{config.titleMuted}</span>
            </h1>

            <p className="mt-7 max-w-lg text-[16px] leading-[1.8] text-white/45">
              {config.description}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-white/[0.06]" />
    </section>
  )
}
