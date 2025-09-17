"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function ContactPage() {
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [email, setEmail] = useState("")
  const [org, setOrg] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const mailtoHref = () => {
    const subj = encodeURIComponent(subject || "SmartFISHER contact")
    const body = encodeURIComponent(
      `Name: ${first} ${last}\nEmail: ${email}\nOrganisation: ${org}\n\n${message}`
    )
    return `mailto:hello@smartfisher.ai?subject=${subj}&body=${body}`
  }

  return (
    <>
      <Navbar />
      <main
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: "url('/images/hero-underwater.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-0 bg-slate-900/75 pointer-events-none" />
      <section className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-20 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            Let’s work together to build technology solutions for ocean conservation and aquaculture.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Left: info */}
          <div>
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <p className="mt-3 max-w-md text-white/90">
              Whether you’re a researcher, conservation organisation, or operator, we’d love to hear from you.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="rounded-lg border border-slate-800 bg-slate-900 p-2"><Mail className="size-5 text-cyan-300" /></div>
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <a href="mailto:hello@smartfisher.ai" className="text-sm text-white/90 hover:underline">
                    hello@smartfisher.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="rounded-lg border border-slate-800 bg-slate-900 p-2"><MapPin className="size-5 text-cyan-300" /></div>
                <div>
                  <div className="text-sm font-medium">Location</div>
                  <div className="text-sm text-white/90">Based in the EU — working globally</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="rounded-lg border border-slate-800 bg-slate-900 p-2"><Clock className="size-5 text-cyan-300" /></div>
                <div>
                  <div className="text-sm font-medium">Response time</div>
                  <div className="text-sm text-white/90">We typically respond within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)] sm:p-8">
            <h3 className="mb-4 text-lg font-semibold">Send us a message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = mailtoHref()
              }}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-slate-300">First Name</label>
                  <Input
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                    placeholder="John"
                    className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-slate-300">Last Name</label>
                  <Input
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                    placeholder="Doe"
                    className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm text-slate-300">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-slate-300">Organisation (Optional)</label>
                <Input
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="Your organisation"
                  className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-slate-300">Subject</label>
                <Select onValueChange={(v) => setSubject(v)}>
                  <SelectTrigger className="border-slate-700 bg-slate-900 text-left text-white">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="border-slate-700 bg-slate-900 text-white">
                    <SelectItem value="General enquiry">General enquiry</SelectItem>
                    <SelectItem value="Onshore deployment">Onshore deployment</SelectItem>
                    <SelectItem value="Offshore deployment">Offshore deployment</SelectItem>
                    <SelectItem value="Press / speaking">Press / speaking</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="mb-1 block text-sm text-slate-300">Message</label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project or how we can help..."
                  rows={6}
                  className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <Button type="submit" className="border border-white/40 bg-transparent text-white hover:bg-white/10">
                  Send message
                </Button>

              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
