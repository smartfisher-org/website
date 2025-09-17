"use client"

import type React from "react"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Microscope, Sprout, ShieldCheck, Waves, Ship, LineChart, Film } from "lucide-react"
import { Reveal } from "@/components/reveal"

type Slide = {
  title: string
  desc: string
  icon: React.ReactNode
  image: string
}

const slides: Slide[] = [
  {
    title: "Marine research",
    desc: "Automate population surveys and behavior studies with continuous, labeled observations.",
    icon: <Microscope className="size-5 text-cyan-400" />,
    image: "/images/research.jpg",
  },
  {
    title: "Conservation",
    desc: "Track protected species, detect illegal activity, and quantify restoration success.",
    icon: <ShieldCheck className="size-5 text-cyan-400" />,
    image: "/underwater-reef-monitoring.png",
  },
  {
    title: "Aquaculture",
    desc: "Monitor stock health, biomass growth, and feed optimization in net pens or RAS.",
    icon: <LineChart className="size-5 text-cyan-400" />,
    image: "/images/aquaculture.jpg",
  },
  {
    title: "Offshore energy",
    desc: "Environmental compliance monitoring around offshore turbines, platforms, and cables.",
    icon: <Ship className="size-5 text-cyan-400" />,
    image: "/images/turbines.jpg",
  },
  {
    title: "Reef restoration",
    desc: "Measure recruitment, biomass recovery, and species mix across restoration sites.",
    icon: <Sprout className="size-5 text-cyan-400" />,
    image: "/images/reef.jpg",
  },
  {
    title: "Coastal health",
    desc: "Observe habitats near shorelines, ports, and estuaries to inform policy and planning.",
    icon: <Waves className="size-5 text-cyan-400" />,
    image: "/coastal-health-aerial-water.png",
  },
  {
    title: "Legacy video",
    desc: "Run detection and analytics on historical recordings to unlock long-term insights.",
    icon: <Film className="size-5 text-cyan-400" />,
    image: "/images/fish.jpg",
  },
]

export function UseCasesCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
  }, [embla])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollTo = useCallback((idx: number) => embla && embla.scrollTo(idx), [embla])

  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on("select", onSelect)
  }, [embla, onSelect])

  return (
    <section id="use-cases" className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mb-6 flex items-end justify-between">
          <Reveal>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Where SmartFISHER shines</h2>
              <p className="mt-2 text-slate-300">From research labs to open oceans, adapt SmartFISHER to your mission.</p>
            </div>
          </Reveal>
          <Reveal className="hidden gap-2 sm:flex" delay={80}>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800"
              aria-label="Previous"
              onClick={scrollPrev}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800"
              aria-label="Next"
              onClick={scrollNext}
            >
              <ChevronRight className="size-4" />
            </Button>
          </Reveal>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((s, i) => (
                <article
                  key={s.title}
                  className="min-w-0 shrink-0 grow-0 basis-full pr-4 sm:basis-1/2 lg:basis-1/3"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${slides.length}`}
                >
                  <div className="group relative h-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm">
                    <img
                      src={s.image || "/placeholder.svg?height=160&width=320&query=use%20case%20image"}
                      alt={s.title}
                      className="h-40 w-full object-cover opacity-90 sm:h-48"
                    />
                    {s.title === "Legacy video" && (
                      <>
                        {/* Top-left: REC */}
                        <div className="absolute left-2 top-2 flex items-center gap-2 rounded bg-black/50 px-2 py-1 text-[10px] font-medium text-white ring-1 ring-white/20">
                          <span className="inline-block h-2 w-2 rounded-full bg-red-500 animate-pulse" aria-hidden />
                          <span>REC</span>
                        </div>
                        {/* Top-right: Depth only */}
                        <div className="absolute right-2 top-2 rounded bg-black/45 px-2 py-1 text-[10px] text-white ring-1 ring-white/20">
                          <span className="text-white/70">DEPTH</span> <span>42.3 m</span>
                        </div>
                      </>
                    )}
                    <div className="space-y-2 p-4">
                      <div className="flex items-center gap-2">
                        <span className="flex size-7 items-center justify-center rounded-md bg-cyan-400/10 ring-1 ring-cyan-400/20">
                          {s.icon}
                        </span>
                        <h3 className="text-base font-semibold leading-6">{s.title}</h3>
                      </div>
                      <p className="text-sm text-slate-300">{s.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Reveal className="mt-6 flex items-center justify-center gap-2 sm:hidden" delay={80}>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800"
              aria-label="Previous"
              onClick={scrollPrev}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800"
              aria-label="Next"
              onClick={scrollNext}
            >
              <ChevronRight className="size-4" />
            </Button>
          </Reveal>

          <Reveal className="mt-4 flex justify-center gap-1.5" delay={120}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === selectedIndex}
                onClick={() => scrollTo(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === selectedIndex ? "w-6 bg-cyan-400" : "w-2 bg-slate-700 hover:bg-slate-600"
                }`}
              />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
