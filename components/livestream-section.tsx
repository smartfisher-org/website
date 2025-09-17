"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Radio } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function LivestreamSection() {
  const channelId = "UCuOhQNHhz-1rtmKErWP8mCA"
  const src = `https://www.youtube.com/embed/live_stream?channel=${channelId}&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1`

  return (
    <section
      id="livestream"
      className="relative bg-slate-800"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 md:py-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <Reveal className="max-w-xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
              <span>Live</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">See SmartFISHER in action</h2>
            <p className="mt-3 text-slate-300">
              Here SmartFISHER automatically detects fish inside our aquarium, displaying real-time confidence levels for each detection, measuring fish length using stereo depth perception, and calculating estimated weight on the spot. All of this happens live, giving you a clear view of how AI and computer vision can be applied to monitor aquatic life with precision. 
            </p>
           
          </Reveal>

          <Reveal delay={120}>
          <Card className="overflow-hidden border border-cyan-500/30 bg-slate-800">
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Radio className="size-3 text-cyan-400" />
                <span>Demo · blueOASIS aquarium camera</span>
              </div>

            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src={src}
                    title="YouTube live stream"
                    className="h-full w-full"
                    allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                    allowFullScreen
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
