"use client"

import React, { useEffect, useRef, useState } from "react"

type RevealProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  threshold?: number
  once?: boolean
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  threshold = 0.2,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setShown(false)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "transform-gpu will-change-transform",
        "transition duration-700 ease-out",
        shown ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[2px]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  )
}
