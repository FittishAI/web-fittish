"use client"

import Link from "next/link"
import { Apple, Play } from "lucide-react"
import { motion } from "framer-motion"
import Reveal from "@/components/animations/reveal"

export default function Cta() {
  return (
    <section className="bg-indigo-500">
      <div className="container py-24 sm:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to get in shape?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
            Download the Fittish app today and start personalizing your fitness journey with meal plans, workouts, and health tracking powered by AI.
          </p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:gap-x-6 sm:gap-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="text-center">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 transition-all duration-300 hover:scale-105"
              >
                <Apple className="h-5 w-5" />
                <span>App Store</span>
              </Link>
              <p className="mt-1 text-xs text-indigo-100">Coming soon...</p>
            </div>
            <div className="text-center">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 transition-all duration-300 hover:scale-105"
              >
                <Play className="h-5 w-5" />
                <span>Google Play</span>
              </Link>
              <p className="mt-1 text-xs text-indigo-100">Coming soon...</p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}