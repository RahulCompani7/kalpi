"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const MovingBorderButton = ({
  borderRadius = "1.75rem",
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  borderRadius?: string
  children: React.ReactNode
  duration?: number
  className?: string
  containerClassName?: string
  borderClassName?: string
  as?: any
  [key: string]: any
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = (e: MouseEvent) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top
    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition)
    return () => {
      window.removeEventListener("mousemove", updatePosition)
    }
  }, [])

  return (
    <div
      className={cn("relative", containerClassName)}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Component className={cn("relative z-10 bg-transparent", className)} {...otherProps}>
        {children}
      </Component>
      <motion.div
        className={cn(
          "absolute -inset-[1px] rounded-[inherit] bg-gradient-to-r from-[#4A7C59] via-[#68B0AB] to-[#8FC0A9] opacity-0 transition-opacity duration-300",
          borderClassName,
        )}
        style={{
          borderRadius,
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(74, 124, 89, 0.8) 0%, rgba(104, 176, 171, 0.6) 25%, rgba(143, 192, 169, 0.4) 50%, transparent 70%)`,
        }}
      />
    </div>
  )
}
