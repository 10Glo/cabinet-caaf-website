'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CountdownRedirect({
  seconds,
  redirectTo,
}: {
  seconds: number
  redirectTo: string
}) {
  const router = useRouter()
  const [count, setCount] = useState(seconds)

  useEffect(() => {
    if (count <= 0) {
      router.replace(redirectTo) // replace au lieu de push → pas de retour en arrière
      return
    }

    const timer = setInterval(() => {
      setCount((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [count, router, redirectTo])

  const formatted = String(count).padStart(2, '0')

  return (
    <div className="flex items-baseline gap-4 self-end text-right">
      <span className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-white/40">
        Redirection dans
      </span>
      <span className="font-serif text-5xl md:text-7xl font-bold leading-none text-white tabular-nums tracking-tight">
        {formatted}
        <span className="text-[#259E01] text-2xl md:text-3xl ml-1 font-sans">s</span>
      </span>
    </div>
  )
}