"use client"

import type React from "react"
import { useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export const DraggableCard = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const rotateX = useTransform(springY, [-100, 100], [30, -30])
  const rotateY = useTransform(springX, [-100, 100], [-30, 30])

  const handleDragEnd = () => {
    x.set(0)
    y.set(0)
  }

  const [isDragging, setIsDragging] = useState(false)

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      drag
      dragConstraints={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => {
        handleDragEnd()
        setIsDragging(false)
      }}
      whileTap={{ cursor: "grabbing" }}
      className={cn(
        "relative touch-none bg-white rounded-xl border border-[#E5E7E6] shadow-xl flex items-center justify-center",
        className,
      )}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        style={{
          rotateX,
          rotateY,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
