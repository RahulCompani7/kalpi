"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useState, useRef, useEffect } from "react"

export const WobbleCard = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const { left, top, width, height } = card.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    const centerX = width / 2
    const centerY = height / 2

    const rotateXValue = ((y - centerY) / centerY) * 10
    const rotateYValue = ((centerX - x) / centerX) * 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div
      ref={cardRef}
      className={cn("relative transition-transform duration-200 ease-out", className)}
      style={{
        transform: isMounted ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
