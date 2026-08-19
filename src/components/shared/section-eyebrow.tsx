import { cva, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

const sectionEyebrowVariants = cva("h-px w-8", {
  variants: {
    tone: {
      primary: "bg-primary",
      "muted-dark": "bg-primary/40",
      "muted-light": "bg-primary/40",
    },
  },
  defaultVariants: {
    tone: "primary",
  },
})

const sectionEyebrowLabelVariants = cva(
  "text-[11px] font-semibold uppercase",
  {
    variants: {
      tone: {
        primary: "tracking-[0.2em] text-primary",
        "primary-tight": "tracking-[0.18em] text-primary",
        "muted-dark": "tracking-[0.15em] text-ink/35",
        "muted-light": "tracking-[0.15em] text-white/35",
      },
    },
    defaultVariants: {
      tone: "primary",
    },
  },
)

type SectionEyebrowTone = NonNullable<
  VariantProps<typeof sectionEyebrowLabelVariants>["tone"]
>

interface SectionEyebrowProps {
  children: ReactNode
  className?: string
  tone?: SectionEyebrowTone
}

export function SectionEyebrow({
  children,
  className,
  tone = "primary",
}: SectionEyebrowProps) {
  const ruleTone =
    tone === "muted-dark" || tone === "muted-light" ? tone : "primary"

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={sectionEyebrowVariants({ tone: ruleTone })} />
      <span className={sectionEyebrowLabelVariants({ tone })}>{children}</span>
    </div>
  )
}
