import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Why } from "@/components/why"
import { Features } from "@/components/features"
import { Modules } from "@/components/modules"
import { Industries } from "@/components/industries"
import { Integrations } from "@/components/integrations"
import { Resources } from "@/components/resources"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Why />
      <Features />
      <Modules />
      <Industries />
      <Integrations />
      <Resources />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
