"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: string
    content?: React.ReactNode
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = ["#F5F7F6", "#F5F7F6", "#F5F7F6", "#F5F7F6"]

  return (
    <motion.div
      className="h-[30rem] md:h-[40rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-4 no-scrollbar"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={index} className="my-20 md:my-60">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 20,
                }}
                className="text-2xl md:text-4xl font-light text-slate-800"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 20,
                }}
                className="text-kg md:text-xl text-slate-600 max-w-sm mt-4 font-light"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className={cn(
          "hidden lg:block h-60 w-80 md:h-80 md:w-[30rem] sticky top-10 overflow-hidden rounded-2xl",
          contentClassName,
        )}
      >
        {content[activeCard].content}
      </motion.div>
    </motion.div>
  )
}
