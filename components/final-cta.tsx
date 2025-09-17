"use client"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

export function FinalCta() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <Reveal delay={80}>
          <div className="mx-auto rounded-2xl bg-gradient-to-r from-cyan-600 to-slate-800 p-8 text-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)] sm:p-12">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready to explore your waters with AI?</h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-200">
              Join the early access program and help us expand species coverage.
            </p>
            <div className="mt-8">
              <Button className="bg-slate-900/90 text-white hover:bg-slate-900" asChild>
                <a href="mailto:hello@smartfisher.ai?subject=Early%20access%20request">Get early access</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
