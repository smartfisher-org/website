"use client"

import type React from "react"
import { Reveal } from "@/components/reveal"
import { Radar, Ruler, HeartPulse, Film } from "lucide-react"

type Solution = {
  title: string
  description: string
  features: string[]
  badge: string
  icon: React.ElementType
}

const solutions: Solution[] = [
  {
    title: "Real-time Monitoring",
    description: "Live detection and tracking of marine life with robust performance in low‑light and turbidity.",
    features: [
      "Species classification",
      "Individual tracking",
      "Invasive species detection",
      "Density heatmap"
    ],
    badge: "Monitoring",
    icon: Radar
  },
  {
    title: "Biomass & Growth Insights",
    description: "Advanced depth perception for length and weight estimation from stereo cameras to drive feed planning and harvest decisions.",
    features: [
      "Length and weight estimation",
      "Size grading and sorting",
      "Growth rate analysis"
    ],
    badge: "Biomass",
    icon: Ruler
  },
  {
    title: "Operations & Health Analytics",
    description: "Understand schooling, feeding windows, and stress cues using spatiotemporal and reinforcement learning models.",
    features: [
      "Schooling pattern analysis",
      "Feed optimisation",
      "Disease and mortality tracking"
    ],
    badge: "Ops & Health",
    icon: HeartPulse
  },
  {
    title: "Legacy Video Analysis",
    description: "Upload past recordings and get automated reports of species present and time segments.",
    features: [
      "Species identification",
      "Segment highlights and heatmaps",
      "Activity summaries",
      "Exportable Reports"
    ],
    badge: "Legacy",
    icon: Film
  }
]

export function SolutionsCarousel() {
  return (
    <section id="solutions" className="relative -mt-16 pt-12 pb-10 sm:pt-16 sm:pb-14 bg-transparent">
      <div className="relative mx-auto max-w-7xl px-4">
        <Reveal className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
            <span>AI suite</span>
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Our Solutions</h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-300">
            Comprehensive AI-powered tools for modern aquaculture and marine research
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-4">
          {solutions.map((solution, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="group">
                <div className="h-full overflow-hidden rounded-xl border border-slate-800/70 bg-slate-900/70 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:bg-slate-900/80">
                  <div className="mb-3 flex items-start gap-3">
                    <div className="flex h-14 w-12 items-center justify-center rounded-md border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                      {(() => {
                        const Icon = solution.icon
                        return <Icon className="h-5 w-5" aria-hidden />
                      })()}
                      <span className="sr-only">{solution.badge}</span>
                    </div>
                    <h3 className="text-xl font-semibold leading-snug">{solution.title}</h3>
                  </div>
                  <p className="mb-4 text-slate-300">{solution.description}</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                    {solution.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
