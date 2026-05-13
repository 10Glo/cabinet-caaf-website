// src/components/ui/cookie-consent-manager.tsx
"use client"

import React, { useEffect, useState } from "react"
import { CookieSheet } from "@/components/ui/cookie-sheet"

type CookieChoice = "accept" | "reject" | "save"

export function CookieConsentManager() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasConsented = localStorage.getItem("caaf_cookie_consent")

    if (!hasConsented) {
      const timer = window.setTimeout(() => {
        setIsOpen(true)
      }, 1500)

      return () => window.clearTimeout(timer)
    }
  }, [])

  const handleChoice = (choice: CookieChoice) => {
    localStorage.setItem("caaf_cookie_consent", choice)
    setIsOpen(false)
  }

  return (
    <CookieSheet
      isOpen={isOpen}
      onClose={() => handleChoice("save")}
      onSave={() => handleChoice("save")}
      onReject={() => handleChoice("reject")}
      onAccept={() => handleChoice("accept")}
    />
  )
}