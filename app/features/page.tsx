import type { Metadata } from "next"
import Header from "@/components/header"
import Features from "@/components/features"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Features - Apper App",
  description: "Discover all the powerful features of the Apper app for managing your customers.",
}

export default function FeaturesPage() {
  return (
    <main>
      <Header />
      <div className="pt-20 pb-8 bg-gray-50">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Features</h1>
          <p className="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Discover all the powerful features that make Apper the best choice for managing your customers.
          </p>
        </div>
      </div>
      <Features />
      <Footer />
    </main>
  )
}
