"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"

export function FaqSection() {
  return (
    <section id="faq" className="bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto mt-2 max-w-2xl text-slate-300">Everything you need to know about SmartFISHER deployments, accuracy, and integration.</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Accordion type="multiple" className="mt-6 w-full space-y-4">
            <AccordionItem value="item-1" className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm">
              <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">What cameras and formats are supported?</AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-slate-300">
                SmartFISHER ingests RTSP/IP cameras, USB/HDMI capture cards, and common file formats (MP4, MOV). We also
                support YouTube Live embeds for quick pilots.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm">
              <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">How accurate are detections and biomass estimates?</AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-slate-300">
                Models are tuned for commonly observed species and validated on underwater footage. Each detection has a
                confidence score; biomass estimates improve with site-specific calibration and camera geometry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm">
              <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">Can SmartFISHER run offline at the edge?</AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-slate-300">
                Yes. Deploy our lightweight runtime on-site (NVIDIA Jetson or x86 with GPU) for low-latency inference and
                optional batch sync when connectivity is available.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm">
              <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">What does the dashboard include?</AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-slate-300">
                Site and time filtering, species composition, biomass trends, map views, and CSV/GeoJSON exports for
                reporting. Access controls let teams collaborate safely.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm">
              <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">How do I integrate with existing systems?</AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-slate-300">
                Use our REST API and webhooks to stream detections and metadata into your pipelines. We also support
                scheduled exports for BI tools.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm">
              <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">What are the hardware and bandwidth requirements?</AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-slate-300">
                A single modern GPU can serve multiple camera feeds. Typical streams run 720p–1080p at 15–30 FPS. For
                cloud processing, we recommend stable uplink of 5–10 Mbps per stream.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm">
              <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">How is my data handled and stored?</AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-slate-300">
                You control retention. Video can remain on-prem, with only detections synced to the cloud. When stored
                by us, data is encrypted in transit and at rest.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm">
              <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">Pricing and licensing</AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-slate-300">
                We offer pilots, subscriptions per camera/site, and enterprise plans. Contact us to tailor a package for
                research, conservation, or aquaculture programs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
