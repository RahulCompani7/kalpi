"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export const SVGMaskEffect = ({
  src,
  title,
  description,
  className,
}: {
  src: string
  title: string
  description: string
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="aspect-video relative overflow-hidden rounded-xl">
        <Image src={src || "/placeholder.svg"} alt={title} fill className="object-cover" />

        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="maskGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="circleMask">
              <motion.circle
                cx={mousePosition.x}
                cy={mousePosition.y}
                r={isHovered ? 180 : 0}
                fill="url(#maskGradient)"
                initial={false}
                animate={{
                  r: isHovered ? 180 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                }}
              />
            </mask>
          </defs>

          <foreignObject width="100%" height="100%" mask="url(#circleMask)">
            <div className="w-full h-full bg-[#4A7C59] flex items-center justify-center p-8">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">{title}</h3>
                <p className="text-base md:text-lg font-light">{description}</p>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  )
}
