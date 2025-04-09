import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Pages - Fittish App",
  description: "Explore all the pages available in the Fittish app, your personal fitness and health companion.",
}

const pages = [
  {
    title: "Home",
    description: "The main landing page showcasing the app's features, health tracking, and gamified fitness experience.",
    image: "/placeholder.svg?height=300&width=400&text=Home+Page",
    link: "/",
  },
  {
    title: "Features",
    description: "Detailed information about the unique features of Fittish, including meal planning, workout tracking, and AI recommendations.",
    image: "/placeholder.svg?height=300&width=400&text=Features+Page",
    link: "/features",
  },
  {
    title: "How It Works",
    description: "A step-by-step guide on how to get started with Fittish and make the most of the app's features.",
    image: "/placeholder.svg?height=300&width=400&text=How+It+Works+Page",
    link: "/how-it-works",
  },
  {
    title: "Pricing",
    description: "Affordable pricing plans for individuals and fitness professionals to help you stay in shape without breaking the bank.",
    image: "/placeholder.svg?height=300&width=400&text=Pricing+Page",
    link: "/pricing",
  },
  {
    title: "Contact",
    description: "Reach out to the Fittish team for support or inquiries about your fitness journey.",
    image: "/placeholder.svg?height=300&width=400&text=Contact+Page",
    link: "/contact",
  },
]

export default function PagesPage() {
  return (
    <main>
      <Header />
      <div className="pt-20 pb-8 bg-gray-50">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Pages</h1>
          <p className="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Explore all the pages available in the Fittish app, tailored for your fitness and wellness journey.
          </p>
        </div>
      </div>
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pages.map((page, index) => (
              <Link key={index} href={page.link} className="group">
                <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={page.image || "/placeholder.svg"}
                      alt={page.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold group-hover:text-indigo-500">{page.title}</h2>
                    <p className="mt-2 text-gray-600">{page.description}</p>
                    <div className="mt-4 text-indigo-500 font-medium">View page →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
