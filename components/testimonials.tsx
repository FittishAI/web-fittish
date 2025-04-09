"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import Reveal from "@/components/animations/reveal"

const testimonials = [
  {
    id: 1,
    content:
      "Fittish has transformed how I approach fitness. The personalized meal plans and workout tracking have made it so easy to stay on track!",
    author: {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      image: "/placeholder.svg?height=40&width=40&text=SJ",
    },
    rating: 5,
  },
  {
    id: 2,
    content:
      "I love how Fittish combines workouts, meals, and health tracking all in one place. The AI insights are incredibly helpful for staying motivated!",
    author: {
      name: "Michael Chen",
      role: "Personal Trainer",
      image: "/placeholder.svg?height=40&width=40&text=MC",
    },
    rating: 5,
  },
  {
    id: 3,
    content:
      "As someone who's always struggled with meal planning and workouts, Fittish has made it easy to stay on top of my goals with personalized recommendations.",
    author: {
      name: "Emily Rodriguez",
      role: "Nutritionist",
      image: "/placeholder.svg?height=40&width=40&text=ER",
    },
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-indigo-50 py-24 sm:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What our users are saying</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don’t just take our word for it. Here’s what our users have to say about how Fittish has helped them achieve their fitness goals.
          </p>
        </Reveal>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 },
              }}
            >
              <div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-6 text-base leading-7 text-gray-600">{testimonial.content}</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={testimonial.author.image || "/placeholder.svg"}
                  alt={testimonial.author.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{testimonial.author.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.author.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
