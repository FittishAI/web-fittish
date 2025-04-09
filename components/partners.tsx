"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const partners = [
  { name: "Nike", logo: "/placeholder.svg?height=50&width=120&text=Nike" },
  { name: "Under Armour", logo: "/placeholder.svg?height=50&width=120&text=Under+Armour" },
  { name: "MyFitnessPal", logo: "/placeholder.svg?height=50&width=120&text=MyFitnessPal" },
  { name: "Fitbit", logo: "/placeholder.svg?height=50&width=120&text=Fitbit" },
  { name: "Apple Health", logo: "/placeholder.svg?height=50&width=120&text=Apple+Health" },
]

export default function Partners() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center text-lg font-semibold leading-8 text-gray-900"
          >
            Trusted by the fitness industry's top brands and innovators
          </motion.h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={50}
                  className="h-12 w-auto object-contain grayscale transition duration-300 hover:grayscale-0 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
