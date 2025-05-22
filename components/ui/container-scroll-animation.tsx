"use client"

import type React from "react"

import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const ContainerScroll = ({
  titleComponent,
  children,
  className,
}: {
  titleComponent: string | React.ReactNode
  children: React.ReactNode
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const scaleDimensions = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <div
      className={cn("h-[60vh] md:h-[80vh] flex flex-col items-center justify-start overflow-hidden", className)}
      ref={containerRef}
    >
      <motion.div
        style={{
          scale: scaleDimensions,
          opacity: opacity,
        }}
        className="flex flex-col items-center justify-center"
      >
        {titleComponent}
      </motion.div>

      <motion.div
        style={{
          scale: scaleDimensions,
          opacity: opacity,
        }}
        className="max-w-5xl w-full relative mt-10"
      >
        {children}
      </motion.div>
    </div>
  )
}
