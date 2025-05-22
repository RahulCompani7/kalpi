"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { createContext, useState, useRef, useEffect } from "react"

const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(undefined)

export const ThreeDCardEffect = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height
    setMousePosition({ x, y })
  }

  useEffect(() => {
    if (!isMouseEntered) {
      setCardPosition({ x: 0, y: 0 })
      return
    }

    const x = (mousePosition.x - 0.5) * 30
    const y = (mousePosition.y - 0.5) * -30
    setCardPosition({ x, y })
  }, [isMouseEntered, mousePosition])

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("py-2", containerClassName)}
        style={{
          perspective: "1000px",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsMouseEntered(true)}
        onMouseLeave={() => setIsMouseEntered(false)}
        ref={containerRef}
      >
        <div
          className={cn("relative transition-all duration-200 ease-linear", className)}
          style={{
            transform: isMouseEntered
              ? `rotateX(${cardPosition.y}deg) rotateY(${cardPosition.x}deg)`
              : "rotateX(0deg) rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}
