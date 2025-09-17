"use client"

import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src="/images/smartfisher-logo.png" alt="SmartFISHER logo" className="h-7 w-7 opacity-90" />
              <span className="text-lg font-semibold tracking-tight">SmartFISHER</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-slate-400">
              AI-powered detection and biomass analytics for underwater monitoring.
            </p>
            <div className="mt-4 flex items-center gap-3 text-slate-400">
              <a href="mailto:hello@smartfisher.ai" aria-label="Email SmartFISHER" className="hover:text-white">
                <Mail className="size-5" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white">
                <Linkedin className="size-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-white">
                <Twitter className="size-5" />
              </a>
              <a href="https://github.com/SmartFISHER-AI" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white">
                <Github className="size-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a className="hover:text-white" href="#livestream">Live demo</a></li>
              <li><a className="hover:text-white" href="#dashboard">Analytics dashboard</a></li>
              <li><a className="hover:text-white" href="#use-cases">Use cases</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a className="hover:text-white" href="/contact">Contact</a></li>
              <li><a className="hover:text-white" href="#">Documentation</a></li>
              <li><a className="hover:text-white" href="#">Status</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200">Company</h4>
            <div className="mt-3 max-w-sm text-sm text-slate-400">
              SmartFISHER is part of <a href="https://www.blueoasis.pt" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white underline underline-offset-2">blueOASIS</a>, and a product of this company.
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-slate-500" />
                <span>Ericeira, Porugal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <Separator className="my-8 bg-slate-800" />
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} SmartFISHER</span>
            <span className="hidden sm:inline">·</span>
            <a href="#" className="hover:text-white">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>

        </div>
      </div>
    </footer>
  )
}
