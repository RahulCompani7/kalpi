"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const GoogleGeminiEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    icon: React.ReactNode
  }[]
  className?: string
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [cursorHovered, setCursorHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const container = containerRef.current
      if (container) {
        const { left, top } = container.getBoundingClientRect()
        const x = clientX - left
        const y = clientY - top
        setCursor({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative h-[40rem] w-full overflow-hidden rounded-md", className)}
      onMouseEnter={() => setCursorHovered(true)}
      onMouseLeave={() => {
        setCursorHovered(false)
        setActiveIndex(null)
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 h-full">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative h-full w-full rounded-lg p-8 bg-white shadow-sm border border-gray-100 flex flex-col items-start justify-center"
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 rounded-full bg-[#F0F7F4] text-[#4A7C59] mb-6">{item.icon}</div>
            <h3 className="text-xl md:text-2xl font-medium mb-3">{item.title}</h3>
            <p className="text-gray-600 text-base md:text-lg font-light">{item.description}</p>
            {activeIndex === idx && (
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#4A7C5910] to-[#8FC0A910] pointer-events-none"
                layoutId="activeItem"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        className={cn(
          "hidden md:block h-6 w-6 rounded-full absolute bg-[#4A7C59] pointer-events-none z-10 transition-transform",
          cursorHovered ? "opacity-100" : "opacity-0",
        )}
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: cursorHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className={cn(
          "hidden md:block h-12 w-12 rounded-full absolute bg-[#4A7C5920] pointer-events-none z-0 transition-transform",
          cursorHovered ? "opacity-100" : "opacity-0",
        )}
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: cursorHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3, delay: 0.05 }}
      />
    </div>
  )
}
