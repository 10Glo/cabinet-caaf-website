"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import clsx from "clsx"

const cn = (...args: any[]) => {
  return twMerge(clsx(args))
}

interface CounterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  start?: number
  end: number
  duration?: number
  className?: string
  fontSize?: number
}

export const Counter = ({
  start = 0,
  end,
  className,
  fontSize = 30,
  ...rest
}: CounterProps) => {
  const [value, setValue] = useState(start)

  useEffect(() => {
    setValue(end)
  }, [end])

  return (
    <div
      style={{ fontSize }}
      {...rest}
      className={cn(
        "flex overflow-hidden rounded px-2 leading-none text-primary font-bold",
        className
      )}
    >
      {String(value).padStart(4, " ").split("").map((digit, i) => (
        <span key={i} className="tabular-nums">
          {digit === " " ? "\u00A0" : digit}
        </span>
      ))}
    </div>
  )
}
