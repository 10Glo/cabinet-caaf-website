"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[global] unhandled error", error)
  }, [error])

  return (
    <html lang="fr">
      <body
        style={{
          alignItems: "center",
          display: "flex",
          fontFamily: "system-ui, sans-serif",
          justifyContent: "center",
          minHeight: "100vh",
          margin: 0,
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 400 }}>
            Une erreur est survenue
          </h1>

          <p style={{ color: "#7C7F88", lineHeight: 1.7 }}>
            Le site est momentanément indisponible. Merci de réessayer dans
            quelques instants.
          </p>

          {error.digest && (
            <p style={{ color: "#9CA0A8", fontFamily: "monospace" }}>
              Référence : {error.digest}
            </p>
          )}

          <button
            type="button"
            onClick={reset}
            style={{
              background: "#111A4A",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "0.875rem",
              marginTop: "1.5rem",
              padding: "0.875rem 2rem",
            }}
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  )
}
