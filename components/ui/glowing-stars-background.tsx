"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  const [mouseEnter, setMouseEnter] = useState(false)

  return (
    <div
      onMouseEnter={() => {
        setMouseEnter(true)
      }}
      onMouseLeave={() => {
        setMouseEnter(false)
      }}
      className={cn("bg-[#F5F7F6] rounded-3xl border border-[#E5E7E6] p-8 relative overflow-hidden", className)}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F0F7F4] to-[#F5F7F6] opacity-80" />
        <StarField mouseEnter={mouseEnter} />
        <div className="absolute inset-0 bg-[#F5F7F6] [mask-image:radial-gradient(transparent,white)] opacity-50" />
      </div>
    </div>
  )
}

const StarField = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [stars, setStars] = useState<
    {
      x: number
      y: number
      size: number
      alpha: number
      alphaSpeed: number
      color: string
    }[]
  >([])

  useEffect(() => {
    if (!ref.current) return

    const { width, height } = ref.current.getBoundingClientRect()
    const newStars = []
    const colors = ["#4A7C59", "#68B0AB", "#8FC0A9", "#94C9A9"]

    for (let i = 0; i < 100; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 1.5 + 0.5
      const alpha = Math.random()
      const alphaSpeed = Math.random() * 0.01 + 0.003
      const colorIndex = Math.floor(Math.random() * colors.length)

      newStars.push({
        x,
        y,
        size,
        alpha,
        alphaSpeed,
        color: colors[colorIndex],
      })
    }

    setStars(newStars)
  }, [])

  return (
    <div ref={ref} className="absolute inset-0">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: mouseEnter
              ? [star.alpha, star.alpha + 0.3, star.alpha]
              : [star.alpha, star.alpha + 0.1, star.alpha],
            scale: mouseEnter ? [1, 1.2, 1] : [1, 1.1, 1],
          }}
          transition={{
            duration: star.alphaSpeed * 100,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute rounded-full"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
          }}
        />
      ))}
    </div>
  )
}
