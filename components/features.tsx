"use client"

import { Apple, Dumbbell, HeartPulse, ShieldCheck, Users, BotMessageSquare } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    name: "Personalized Plans",
    description: "Get meal, workout, and sleep plans tailored to your goals and lifestyle.",
    icon: Apple,
  },
  {
    name: "Workout Recommendations",
    description: "Smart suggestions based on your preferences, fitness level, and progress.",
    icon: Dumbbell,
  },
  {
    name: "Health Tracking",
    description: "Track your daily activity, meals, and sleep—all in one place.",
    icon: HeartPulse,
  },
  {
    name: "Private & Secure",
    description: "Your fitness data stays safe with industry-grade encryption and privacy.",
    icon: ShieldCheck,
  },
  {
    name: "AI-Powered Coaching",
    description: "An AI coach adapts plans as you go, keeping things fresh and effective.",
    icon: BotMessageSquare,
  },
  {
    name: "Community & Support",
    description: "Get 24/7 support and connect with others on the same journey.",
    icon: Users,
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-24 sm:py-32">
      <div className="container">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to stay in shape
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fittish helps you stay fit with personalized workouts, smart meal planning, and real-time coaching—all powered by AI.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
