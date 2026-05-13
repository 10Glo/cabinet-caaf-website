// src/components/ui/cookie-sheet.tsx
"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import logo from "@/assets/logo.png"

type CookieCategory = {
  id: string
  title: string
  description: string
  required?: boolean
}

const CATEGORIES: CookieCategory[] = [
  {
    id: "necessary",
    title: "Strictement nécessaires",
    required: true,
    description:
      "Ces cookies sont nécessaires au fonctionnement du site Web et ne peuvent pas être désactivés dans nos systèmes.",
  },
  {
    id: "performance",
    title: "Cookies de performance",
    description:
      "Ces cookies nous permettent de mesurer la fréquentation et d'améliorer les performances du site.",
  },
  {
    id: "functional",
    title: "Cookies fonctionnels",
    description:
      "Ces cookies permettent au site d'offrir une expérience personnalisée et des fonctionnalités avancées.",
  },
  {
    id: "targeting",
    title: "Cookies de ciblage",
    description:
      "Ces cookies peuvent être placés par nos partenaires pour proposer des contenus ou publicités adaptés.",
  },
]

type CookieSheetProps = {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
  onReject: () => void
  onAccept: () => void
}

export const CookieSheet = ({
  isOpen,
  onClose,
  onSave,
  onReject,
  onAccept,
}: CookieSheetProps) => {
  const [preferences, setPreferences] = useState<Record<string, boolean>>({
    necessary: true,
    performance: false,
    functional: false,
    targeting: false,
  })

  const togglePreference = (id: string) => {
    if (id === "necessary") return
    setPreferences((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm"
          />

          {/* Side Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-canvas shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-hairline bg-white p-6">
              <div className="flex items-center gap-2">
                <Image
                                src={logo}
                                alt="CAAF SAS"
                                height={36}
                                width={140}
                                style={{ width: "auto", height: "36px" }}
                                className={cn(
                                  "transition-all duration-300 group-hover:scale-[1.02]"
                                )}
                                priority
                              />
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 transition-colors hover:bg-canvas"
              >
                <X size={20} className="text-ink/50" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-8 overflow-y-auto p-8">
              <section>
                <h2 className="mb-4 font-serif text-2xl text-ink">
                  Votre confidentialité
                </h2>
                <p className="text-sm leading-relaxed text-ink/60">
                  Lorsque vous visitez notre site, des informations peuvent être
                  stockées ou récupérées via votre navigateur, principalement
                  sous forme de cookies.
                </p>
                <button className="mt-4 text-xs font-bold uppercase tracking-widest text-primary hover:underline">
                  Plus d’informations
                </button>
              </section>

              <div className="space-y-4">
                <h3 className="border-b border-hairline pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40">
                  Gérer vos préférences
                </h3>

                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="space-y-3 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[15px] font-semibold text-ink">
                        {cat.title}
                      </span>

                      {cat.required ? (
                        <span className="text-[10px] font-bold uppercase tracking-tight text-primary">
                          Toujours actif
                        </span>
                      ) : (
                        <Switch
                          checked={preferences[cat.id]}
                          onChange={() => togglePreference(cat.id)}
                        />
                      )}
                    </div>

                    <p className="text-xs leading-relaxed text-ink/50">
                      {cat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-3 border-t border-hairline bg-white p-8">
              <button
                onClick={onAccept}
                className="h-12 w-full bg-primary text-[12px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-primary-active"
              >
                Tout accepter
              </button>

              <button
                onClick={onSave}
                className="h-12 w-full border border-hairline text-[12px] font-bold uppercase tracking-widest text-ink transition-colors hover:bg-canvas"
              >
                Enregistrer mes choix
              </button>

              <button
                onClick={onReject}
                className="h-12 w-full border border-hairline text-[12px] font-bold uppercase tracking-widest text-ink transition-colors hover:bg-canvas"
              >
                Tout refuser
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

const Switch = ({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: () => void
}) => (
  <button
    onClick={onChange}
    className={cn(
      "relative flex h-5 w-10 items-center rounded-full px-1 transition-colors",
      checked ? "bg-primary" : "bg-ink/20"
    )}
  >
    <motion.div
      animate={{ x: checked ? 20 : 0 }}
      className="h-3 w-3 rounded-full bg-white shadow-sm"
    />
  </button>
)