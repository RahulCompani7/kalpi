"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export const MacbookScroll = ({
  src,
  title,
  showGradient = true,
  className,
}: {
  src: string
  title?: React.ReactNode | string
  showGradient?: boolean
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1])
  const translateY = useTransform(scrollYProgress, [0, 0.5], [100, 0])

  return (
    <div ref={containerRef} className={cn("h-[60vh] md:h-[80vh] flex items-center justify-center relative", className)}>
      <div className="relative w-full max-w-5xl mx-auto">
        {title && (
          <motion.div
            style={{
              opacity,
              translateY,
            }}
            className="text-center relative z-10 mb-8"
          >
            {title}
          </motion.div>
        )}

        <motion.div
          style={{
            scale,
            opacity,
          }}
          className="relative mx-auto max-w-5xl"
        >
          <Image
            src="/placeholder.svg?height=400&width=700"
            alt="Macbook frame"
            width={700}
            height={400}
            className="w-full h-auto"
          />

          <div className="absolute top-[5%] left-[11.5%] right-[11.5%] bottom-[28%] rounded-lg overflow-hidden">
            <Image src={src || "/placeholder.svg"} alt="Screenshot" fill className="object-cover object-top" />
          </div>
        </motion.div>

        {showGradient && (
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-0" />
        )}
      </div>
    </div>
  )
}
