import type { Metadata } from "next"
import Header from "@/components/header"
import Pricing from "@/components/pricing"
import Cta from "@/components/cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Pricing - Fittish App",
  description:
    "View our simple, transparent pricing plans designed for individuals and fitness professionals to track meals, workouts, and health.",
}

export default function PricingPage() {
  return (
    <main>
      <Header />
      <div className="pt-20 pb-8 bg-gray-50">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Pricing</h1>
          <p className="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Simple, transparent pricing plans designed to fit your fitness goals and lifestyle.
          </p>
        </div>
      </div>
      <Pricing />
      <Cta />
      <Footer />
    </main>
  )
}
