"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Reveal from "@/components/animations/reveal"
import ParallaxSection from "@/components/animations/parallax-section"

const steps = [
  {
    id: "01",
    name: "Open the app",
    description: "Get Fittish from the App Store or Google Play Store to start your fitness journey.",
    image: "/image_1.svg", // Replace with a fitness-related image
  },
  {
    id: "02",
    name: "Create your profile",
    description: "Sign up, set your fitness goals, and personalize your meal and workout plans.",
    image: "/image_2.svg", // Replace with a fitness-related image
  },
  {
    id: "03",
    name: "Start tracking progress",
    description: "Track your meals, workouts, and health metrics, and get AI-driven insights to stay on track.",
    image: "/image_3.svg", // Replace with a fitness-related image
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How Fittish works</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Getting in shape is easy with Fittish. Follow these simple steps to start your fitness journey today.
          </p>
        </Reveal>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 50,
                }}
              >
                <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                  <span className="text-xl font-bold text-indigo-600">{step.id}</span>
                </div>
                <ParallaxSection
                  speed={0.1}
                  direction="up"
                  className="mb-6 h-[340px] w-[180px] overflow-hidden rounded-xl bg-gray-100"
                >
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.name}
                    width={180}
                    height={340}
                    className="h-full w-full object-contain transition-transform duration-700 hover:scale-105"
                    />
                </ParallaxSection>

                <h3 className="text-xl font-bold text-gray-900">{step.name}</h3>
                <p className="mt-2 text-base text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
