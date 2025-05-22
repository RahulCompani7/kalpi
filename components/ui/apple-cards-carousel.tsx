"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const AppleCardsCarousel = ({
  items,
  className,
}: {
  items: {
    id: number
    content: React.ReactNode
  }[]
  className?: string
}) => {
  const [activeCard, setActiveCard] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleNext = () => {
    setDirection(1)
    setActiveCard((prev) => (prev + 1) % items.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setActiveCard((prev) => (prev - 1 + items.length) % items.length)
  }

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      handleNext()
    }, 5000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [activeCard])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  return (
    <div className={cn("relative w-full max-w-5xl mx-auto", className)}>
      <div className="relative h-[400px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={activeCard}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-full max-w-lg mx-auto text-black">{items[activeCard].content}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > activeCard ? 1 : -1)
              setActiveCard(idx)
            }}
            className={cn(
              "w-3 h-3 rounded-full transition-colors text-black",
              idx === activeCard ? "bg-[#D6CDEA]" : "bg-gray-300",
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  )
}
