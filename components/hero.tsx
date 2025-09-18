"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/reveal"

export function Hero() {
  // Navbar height is 56px; make hero fill the remaining viewport height.
  return (
    <section className="relative overflow-hidden">
      {/* Background image with mask fade to page background */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] sm:[mask-image:linear-gradient(to_bottom,black_68%,transparent_100%)]">
        <img
          src="/images/hero-underwater.png"
          alt="Underwater view"
          className="h-full w-full object-cover"
        />
      </div>

      <div 
        className="relative mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-6 px-4 pt-8 sm:pt-12 md:grid-cols-2 md:pt-16"
      >
        {/* Left: text */}
        <Reveal className="max-w-xl transform -translate-y-16 sm:-translate-y-12 md:-translate-y-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            See beneath the surface with{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
              SmartFISHER
            </span>
          </h1>
          <p className="mt-4 text-lg text-white">
          Identify marine species and quantify biomass automatically from underwater cameras. Stream detections live
            and explore insights in an interactive dashboard.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Button className="self-start bg-cyan-500 text-slate-950 hover:bg-cyan-400 px-6 py-3" asChild>
              <a href="#livestream" aria-label="Jump to demo livestream">
                View Live Demo
              </a>
            </Button>
            <Button className="self-start bg-cyan-500 text-slate-950 hover:bg-cyan-400 px-6 py-3" asChild>
              <a href="https://app.smartfisher.pt" target="_blank" rel="noopener noreferrer" aria-label="View SmartFISHER dashboard" className="whitespace-nowrap">
                View Dashboard
              </a>
            </Button>
          </div>
        </Reveal>


      </div>
    </section>
  )
}
