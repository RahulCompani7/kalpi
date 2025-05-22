"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const AnimatedTestimonials = ({
  testimonials,
  className,
}: {
  testimonials: {
    quote: string
    name: string
    title: string
    image: string
  }[]
  className?: string
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <div className={cn("relative w-full max-w-4xl mx-auto px-4", className)}>
      <div className="relative h-[300px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
          >
            <div className="mb-6">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={80}
                height={80}
                className="rounded-full border-4 border-[#D6CDEA] mx-auto"
              />
            </div>
            <p className="text-lg md:text-xl text-gray-700 mb-6 italic">"{testimonials[currentIndex].quote}"</p>
            <div>
              <h4 className="font-medium text-lg text-gray-900">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].title}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4">
        <button
          onClick={handlePrevious}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1)
              setCurrentIndex(idx)
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              idx === currentIndex ? "bg-[#D6CDEA]" : "bg-gray-300",
            )}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
