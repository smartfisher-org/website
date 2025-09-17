import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LivestreamSection } from "@/components/livestream-section"
import { UseCasesCarousel } from "@/components/use-cases-carousel"
import { DashboardSection } from "@/components/dashboard-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { SolutionsCarousel } from "@/components/solutions-carousel"

export const metadata = {
  title: "SmartFISHER — AI Underwater Fish Analysis",
  description:
    "Identify marine species and measure fish biomass from underwater cameras. Livestream detection and a powerful analytics dashboard.",
}

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col bg-slate-900 text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SolutionsCarousel />
        <LivestreamSection />
        <UseCasesCarousel />
        <DashboardSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
