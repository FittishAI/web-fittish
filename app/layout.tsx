import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Viewport } from "next"
import ScrollProgress from "@/components/animations/scroll-progress"
import PageTransition from "@/components/animations/page-transition"
import AnimationConfig from "@/components/animations/motion-config"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Fittish - Your Personalized Fitness Companion",
  description: "Fittish helps you stay in shape with personalized meal plans, workouts, and health tracking powered by AI.",
  keywords: ["fitness", "meal planner", "workout tracker", "health tracker", "AI", "personal trainer", "wellness"],
  authors: [{ name: "Fittish" }],
  openGraph: {
    title: "Fittish - Your Personalized Fitness Companion",
    description: "Fittish helps you stay in shape with personalized meal plans, workouts, and health tracking powered by AI.",
    url: "https://fittish.com",  // Replace with your actual URL
    siteName: "Fittish",
    images: [
      {
        url: "/og-image.jpg",  // Update with an image specific to Fittish
        width: 1200,
        height: 630,
        alt: "Fittish - Personalized Fitness Companion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fittish - Your Personalized Fitness Companion",
    description: "Fittish helps you stay in shape with personalized meal plans, workouts, and health tracking powered by AI.",
    images: ["/og-image.jpg"],  // Update with an image specific to Fittish
  },
  generator: 'v0.dev',  // Keep this or update with your preferred generator
}

export const viewport: Viewport = {
  themeColor: "#6366f1",  // You can update this color to match Fittish's theme
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white antialiased">
        <AnimationConfig>
          <ScrollProgress />
          <PageTransition>{children}</PageTransition>
        </AnimationConfig>
      </body>
    </html>
  )
}
