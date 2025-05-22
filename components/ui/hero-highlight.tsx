"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export const HeroHighlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={cn("relative z-10", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="absolute -inset-x-8 -inset-y-1 bg-gradient-to-r from-[#D6CDEA]/20 via-[#F5C7C7]/20 to-[#FFDACC]/20 blur-xl" />
      <div className="relative">{children}</div>
    </motion.div>
  )
}
