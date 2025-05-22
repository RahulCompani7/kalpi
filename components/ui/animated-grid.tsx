"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const AnimatedGrid = ({
  cards,
  className,
}: {
  cards: {
    id: number
    content: React.ReactNode
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8", className)}>
      {cards.map((card, idx) => (
        <motion.div
          key={card.id}
          className="relative h-40 bg-white rounded-xl p-4 border border-gray-100 cursor-pointer overflow-hidden group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          whileHover={{ y: -5 }}
        >
          {card.content}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#4A7C5910] to-[#8FC0A910] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
          />
        </motion.div>
      ))}
    </div>
  )
}
