"use client"

import type React from "react"

import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const HeroParallaxText = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 500])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div ref={ref} className={cn("relative h-screen flex items-center justify-center overflow-hidden", className)}>
      <motion.div
        style={{
          translateY,
          opacity,
          scale,
        }}
        className="text-center"
      >
        {children}
      </motion.div>
    </div>
  )
}
