"use client"

import { MotionConfig } from "framer-motion"
import type { ReactNode } from "react"

// This provides consistent animation settings across the site
export default function AnimationConfig({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5,
      }}
    >
      {children}
    </MotionConfig>
  )
}
