"use client"

import { useMotionValue, useSpring, motion } from "framer-motion"
import type React from "react"
import { useEffect, useState } from "react"

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
  gradient = "from-[#4A7C59] via-[#68B0AB] to-[#8FC0A9]",
}: {
  text: string
  revealText: string
  children?: React.ReactNode
  className?: string
  gradient?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setIsMounted(true)
    setWindowWidth(window.innerWidth)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const springConfig = { stiffness: 100, damping: 15 }
  const x = useMotionValue(0)
  const rotate = useMotionValue(0)

  const translateX = useSpring(x, springConfig)
  const rotateValue = useSpring(rotate, springConfig)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isInView) return

    const rect = (e.target as HTMLElement).getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const centerX = rect.left + width / 2
    const centerY = rect.top + height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    const rotateX = (mouseY / height) * 20
    const rotateY = (mouseX / width) * -20

    rotate.set(rotateY)
    x.set(rotateX)
  }

  return (
    <div
      className={`relative w-full max-w-5xl mx-auto h-[40rem] md:h-[30rem] rounded-3xl p-10 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(circle at center, #FFFFFF, #F5F7F6)`,
      }}
      onMouseEnter={() => {
        setIsHovered(true)
        setIsInView(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsInView(false)
        x.set(0)
        rotate.set(0)
      }}
      onMouseMove={onMouseMove}
    >
      {isMounted && (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <motion.div
            className="relative z-10 text-5xl md:text-7xl font-light text-center"
            style={{
              rotateY: rotateValue,
              translateX,
            }}
          >
            <h2 className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient} font-light`}>{text}</h2>
            <div className="mt-4 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">{revealText}</div>
            <div className="mt-10">{children}</div>
          </motion.div>
        </div>
      )}
      <div
        className="absolute inset-0 w-full h-full bg-[#F5F7F6] z-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, transparent, #F5F7F6), 
                           repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)`,
          backgroundSize: "cover, 100px 100px",
          opacity: 0.5,
        }}
      ></div>
    </div>
  )
}
