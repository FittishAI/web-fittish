import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Partners from "@/components/partners"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import GetInTouch from "@/components/GetInTouch"

export const metadata: Metadata = {
  title: "Fittish - Get in Shape with Fittish: Your Personalized Health, Meal, and Workout Companion",
  description: "Fittish combines a meal planner, workout tracker, and health monitor into one app—powered by AI to guide you every step of the way.",
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <Partners /> */}
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      <Pricing />
      <GetInTouch/>
      {/* <Cta /> */}
      <Footer />
    </main>
  )
}
