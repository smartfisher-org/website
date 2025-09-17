"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    // Only add scroll listener, don't call handleScroll initially
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header
      className="fixed left-0 right-0 top-3 z-40 w-full bg-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex h-14 items-center rounded-full border px-4 sm:px-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur transition-colors duration-300 ${
            isScrolled
              ? 'border-slate-800 bg-slate-900/85'
              : 'border-white/10 bg-slate-900/40'
          }`}
        >
          {/* Left: brand only */}
          <Link href="/" className="flex items-center gap-2" aria-label="SmartFISHER home">
            <img src="/images/smartfisher-logo.png" alt="SmartFISHER logo" className="h-7 w-7" />
            <span className="text-base font-semibold tracking-tight text-white">SmartFISHER</span>
          </Link>

          {/* Right: nav */}
          <div className="ml-auto">
            <nav className="hidden gap-6 text-sm md:flex">
              <a href="#solutions" className="text-white transition-colors hover:text-cyan-400">
                Solutions
              </a>
              <a href="#use-cases" className="text-white transition-colors hover:text-cyan-400">
                Use cases
              </a>
              <a href="#faq" className="text-white transition-colors hover:text-cyan-400">
                FAQs
              </a>
              <a href="/contact" className="text-white transition-colors hover:text-cyan-400">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
