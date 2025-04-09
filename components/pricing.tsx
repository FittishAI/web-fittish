"use client"

import { Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Reveal from "@/components/animations/reveal"

const tiers = [
  {
    name: "Basic",
    id: "basic",
    price: { monthly: "$9", annually: "$90" },
    description: "Perfect for individuals just getting started on their fitness journey.",
    features: [
      "Personalized meal plans",
      "Basic workout tracking",
      "1 goal-setting profile",
      "Email support",
      "Basic AI health insights",
    ],
    cta: "Get started",
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "pro",
    price: { monthly: "$29", annually: "$290" },
    description: "Ideal for people looking to elevate their fitness game with more advanced features.",
    features: [
      "Up to 3 goal-setting profiles",
      "Advanced workout and meal tracking",
      "Priority email support",
      "5GB cloud storage",
      "Advanced AI-driven health insights",
      "Custom fitness reports",
      "Access to community challenges",
    ],
    cta: "Get started",
    mostPopular: true,
  },
  {
    name: "Premium",
    id: "premium",
    price: { monthly: "$79", annually: "$790" },
    description: "For serious fitness enthusiasts who want to take their fitness journey to the next level.",
    features: [
      "Unlimited goal-setting profiles",
      "Comprehensive workout and meal tracking",
      "24/7 support (email & chat)",
      "50GB cloud storage",
      "Premium AI health insights",
      "Custom fitness plans and reports",
      "Exclusive fitness challenges and rewards",
      "Dedicated fitness coach access",
    ],
    cta: "Contact sales",
    mostPopular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 sm:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that's right for you and start your personalized fitness journey with Fittish today.
          </p>
        </Reveal>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              className={`flex flex-col rounded-3xl p-8 ring-1 sm:p-10 ${
                tier.mostPopular
                  ? "relative z-10 bg-white shadow-xl ring-indigo-500 lg:scale-105"
                  : "bg-white/60 ring-gray-200 sm:mx-8 lg:mx-0"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: tierIdx * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 },
              }}
            >
              {tier.mostPopular && (
                <div className="absolute -top-4 right-8 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold text-white">
                  Most popular
                </div>
              )}
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <Link
                href="/contact"
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.mostPopular
                    ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                }`}
              >
                {tier.cta}
              </Link>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-5 w-5 flex-none text-indigo-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
