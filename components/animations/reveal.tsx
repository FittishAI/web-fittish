"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  width?: "full" | "auto"
  delay?: number
  duration?: number
  className?: string
}

export default function Reveal({ children, width = "full", delay = 0, duration = 0.5, className = "" }: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const mainControls = useAnimation()
  const slideControls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      mainControls.start("visible")
      slideControls.start("visible")
      setHasAnimated(true)
    }
  }, [isInView, mainControls, slideControls, hasAnimated])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ width: width === "full" ? "100%" : "auto" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: duration * 1.25,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "linear-gradient(90deg, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0.6) 100%)",
          zIndex: 20,
        }}
      />
    </div>
  )
}
