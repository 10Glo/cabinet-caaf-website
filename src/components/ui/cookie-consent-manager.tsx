// src/components/ui/cookie-consent-manager.tsx
"use client"

import React, { useEffect, useState } from "react"
import { CookieSheet } from "@/components/ui/cookie-sheet"

type CookieChoice = "accept" | "reject" | "save"

const STORAGE_KEY = "caaf_cookie_consent"

// localStorage throws when storage is disabled (private browsing, blocked
// cookies, quota exceeded); the banner must keep working in that case.
function readConsent(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch (error) {
    console.warn("[cookie-consent] unable to read stored consent", error)
    return null
  }
}

function writeConsent(choice: CookieChoice): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice)
  } catch (error) {
    console.warn("[cookie-consent] unable to persist consent", error)
  }
}

export function CookieConsentManager() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasConsented = readConsent()

    if (!hasConsented) {
      const timer = window.setTimeout(() => {
        setIsOpen(true)
      }, 1500)

      return () => window.clearTimeout(timer)
    }
  }, [])

  const handleChoice = (choice: CookieChoice) => {
    writeConsent(choice)
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