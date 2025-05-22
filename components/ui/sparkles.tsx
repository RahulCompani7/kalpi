"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
  particleOpacity,
  speed,
}: {
  id: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  particleColor?: string
  particleOpacity?: number
  speed?: number
}) => {
  const [particles, setParticles] = useState<
    {
      x: number
      y: number
      size: number
      delay: number
    }[]
  >([])
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const container = document.getElementById(id)
    if (container) {
      const { width, height } = container.getBoundingClientRect()
      setDimensions({
        width,
        height,
      })

      const particleCount = particleDensity || 100
      const newParticles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (maxSize || 2 - (minSize || 0.5)) + (minSize || 0.5),
        delay: Math.random() * 1000,
      }))
      setParticles(newParticles)
    }
  }, [id, maxSize, minSize, particleDensity])

  return (
    <div
      id={id}
      className={cn("fixed inset-0 w-full h-full", className)}
      style={{
        background: background || "transparent",
      }}
    >
      <AnimatePresence>
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: particle.x,
              y: particle.y,
              scale: 0,
            }}
            animate={{
              opacity: particleOpacity || 1,
              x: particle.x,
              y: particle.y,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: (speed || 1) * 2,
              delay: particle.delay / 1000,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              background: particleColor || "#8FC0A9",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
