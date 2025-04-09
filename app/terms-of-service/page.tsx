import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service - Fittish App",
  description:
    "View our Terms of Service Related to Fittish App",
}

export default function TermsOfService() {
  return (
    <>
      <Header />
      <div className="pt-20 pb-8 bg-gray-50">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Terms of Service</h1>
          <p className="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Simple, transparent pricing plans designed to fit your fitness goals and lifestyle.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
