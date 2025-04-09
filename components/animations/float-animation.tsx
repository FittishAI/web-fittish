"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatAnimationProps {
  children: ReactNode
  duration?: number
  delay?: number
  distance?: number
  className?: string
}

export default function FloatAnimation({
  children,
  duration = 4,
  delay = 0,
  distance = 15,
  className = "",
}: FloatAnimationProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -distance, 0] }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
