"use client"

import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

export function DashboardSection() {
  return (
    <section id="dashboard" className="bg-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left: image */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ring-slate-800/40">
              <img
                src="/images/laptopmockdash.jpeg"
                alt="SmartFISHER dashboard on laptop"
                className="h-full w-full object-cover opacity-95 transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </Reveal>

          {/* Right: text + CTA */}
          <Reveal delay={120}>
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">From frames to fisheries insights</h2>
              <p className="mt-3 text-slate-300">
                Explore species composition, biomass trends, and site-level changes over time. Turn live detections into
                actionable insights with clear charts, maps, and exports.
              </p>
              <ul className="mt-5 space-y-2 text-slate-300">
                <li className="flex items-start gap-2"><span className="mt-1 size-1.5 rounded-full bg-cyan-400" /> Species mix and biomass over time</li>
                <li className="flex items-start gap-2"><span className="mt-1 size-1.5 rounded-full bg-cyan-400" /> Site comparisons and map views</li>
                <li className="flex items-start gap-2"><span className="mt-1 size-1.5 rounded-full bg-cyan-400" /> CSV/GeoJSON exports for reports</li>
              </ul>
              <div className="mt-7">
                <Button className="bg-cyan-500 text-slate-950 hover:bg-cyan-400" asChild>
                  <a href="/contact" aria-label="Explore our dashboard">Explore our dashboard</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
