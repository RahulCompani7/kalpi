"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

export const TextHoverEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const wordsArray = words.split(" ")

  return (
    <div className={cn("flex flex-wrap", className)}>
      {wordsArray.map((word, idx) => {
        return (
          <div
            key={idx}
            className="relative mx-1"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span
              className={cn("transition-colors duration-200", hoveredIndex === idx ? "text-[#4A7C59]" : "text-black")}
            >
              {word}
            </span>
            {hoveredIndex === idx && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4A7C59] rounded-full" />
            )}
          </div>
        )
      })}
    </div>
  )
}
