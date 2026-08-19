"use client"

import { useEffect } from "react"

export default function FrontendError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[frontend] unhandled error", error)
  }, [error])

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-canvas px-10 py-20">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7C7F88]">
          Erreur
        </p>

        <h1 className="mt-4 font-serif text-3xl text-[#111A4A] md:text-4xl">
          Une erreur est survenue
        </h1>

        <p className="mt-4 text-base leading-7 text-[#7C7F88]">
          Cette page n&apos;a pas pu être affichée. Vous pouvez réessayer ou
          nous contacter si le problème persiste.
        </p>

        {error.digest && (
          <p className="mt-3 font-mono text-xs text-[#7C7F88]/60">
            Référence : {error.digest}
          </p>
        )}

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3.5 text-[14px] font-semibold tracking-wide text-white"
          >
            Réessayer
          </button>

          <a
            href="/contact"
            className="inline-flex items-center justify-center border border-[#111A4A]/[0.12] px-8 py-3.5 text-[14px] font-semibold tracking-wide text-[#111A4A]"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  )
}
