"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: string
  gradientBackgroundEnd?: string
  firstColor?: string
  secondColor?: string
  thirdColor?: string
  fourthColor?: string
  fifthColor?: string
  pointerColor?: string
  size?: string
  blurRadius?: number
  interactive?: boolean
  containerClassName?: string
  className?: string
  children?: React.ReactNode
}

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(255, 255, 255)",
  gradientBackgroundEnd = "rgb(255, 255, 255)",
  firstColor = "18, 113, 255",
  secondColor = "18, 113, 255",
  thirdColor = "18, 113, 255",
  fourthColor = "18, 113, 255",
  fifthColor = "18, 113, 255",
  pointerColor = "140, 100, 255",
  size = "80%",
  blurRadius = 100,
  interactive = true,
  containerClassName,
  className,
  children,
}: BackgroundGradientAnimationProps) => {
  const interactiveRef = useRef<HTMLDivElement>(null)
  const [curX, setCurX] = useState(0)
  const [curY, setCurY] = useState(0)
  const [tgX, setTgX] = useState(0)
  const [tgY, setTgY] = useState(0)

  useEffect(() => {
    document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart)
    document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd)
    document.body.style.setProperty("--first-color", firstColor)
    document.body.style.setProperty("--second-color", secondColor)
    document.body.style.setProperty("--third-color", thirdColor)
    document.body.style.setProperty("--fourth-color", fourthColor)
    document.body.style.setProperty("--fifth-color", fifthColor)
    document.body.style.setProperty("--pointer-color", pointerColor)
    document.body.style.setProperty("--size", size)
    document.body.style.setProperty("--blur-radius", `${blurRadius}px`)
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blurRadius,
  ])

  useEffect(() => {
    if (!interactive || !interactiveRef.current) return

    const move = () => {
      if (!interactiveRef.current) return
      setCurX(curX + (tgX - curX) * 0.1)
      setCurY(curY + (tgY - curY) * 0.1)
      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${curX}px, ${curY}px)`
      }
      requestAnimationFrame(move)
    }

    window.addEventListener("mousemove", (e) => {
      if (!interactiveRef.current) return
      const rect = interactiveRef.current.getBoundingClientRect()
      setTgX(e.clientX - rect.left - rect.width / 2)
      setTgY(e.clientY - rect.top - rect.height / 2)
    })

    move()
  }, [interactive, curX, curY, tgX, tgY])

  return (
    <div
      className={cn(
        "h-full w-full overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName,
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("relative h-full w-full", className)}>
        <div
          className={cn(
            "absolute top-1/2 left-1/2 h-[var(--size)] w-[var(--size)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent opacity-[0.8] blur-[var(--blur-radius)]",
            "before:absolute before:inset-[-100px] before:h-[calc(100%+200px)] before:w-[calc(100%+200px)] before:rounded-full before:bg-[radial-gradient(circle_at_center,_rgba(var(--first-color),_0.8)_0,_rgba(var(--first-color),_0)_70%)]",
            "after:absolute after:h-full after:w-full after:rounded-full after:bg-[radial-gradient(circle_at_center,_rgba(var(--second-color),_0.5)_0,_rgba(var(--second-color),_0)_70%)]",
          )}
        ></div>
        <div
          className={cn(
            "absolute top-1/2 left-1/2 h-[var(--size)] w-[var(--size)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent opacity-[0.8] blur-[var(--blur-radius)]",
            "before:absolute before:inset-[-100px] before:h-[calc(100%+200px)] before:w-[calc(100%+200px)] before:rounded-full before:bg-[radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_70%)]",
            "after:absolute after:h-full after:w-full after:rounded-full after:bg-[radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.5)_0,_rgba(var(--fourth-color),_0)_70%)]",
          )}
        ></div>
        <div
          className={cn(
            "absolute top-1/2 left-1/2 h-[var(--size)] w-[var(--size)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent opacity-[0.8] blur-[var(--blur-radius)]",
            "before:absolute before:inset-[-100px] before:h-[calc(100%+200px)] before:w-[calc(100%+200px)] before:rounded-full before:bg-[radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_70%)]",
          )}
        ></div>
        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              "absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent opacity-[0.8] blur-[var(--blur-radius)]",
              "before:absolute before:inset-[-100px] before:h-[calc(100%+200px)] before:w-[calc(100%+200px)] before:rounded-full before:bg-[  before:h-[calc(100%+200px)] before:w-[calc(100%+200px)] before:rounded-full before:bg-[radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_70%)]",
            )}
          ></div>
        )}
        {children}
      </div>
    </div>
  )
}
