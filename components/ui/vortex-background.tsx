"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export const VortexBackground = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
      alpha: number
    }[] = []

    const colors = ["#D6CDEA", "#F5C7C7", "#FFDACC", "#D4F1F4", "#BFD7ED", "#E3E4F3"]

    for (let i = 0; i < 100; i++) {
      const radius = Math.random() * 2 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const color = colors[Math.floor(Math.random() * colors.length)]
      const velocity = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
      }
      const alpha = Math.random() * 0.5 + 0.1

      particles.push({ x, y, radius, color, velocity, alpha })
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x = -particle.velocity.x
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y = -particle.velocity.y
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.alpha
        ctx.fill()
      })

      // Draw connections
      ctx.globalAlpha = 0.1
      ctx.strokeStyle = "#D6CDEA"
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className={cn("w-full h-full", className)} />
}
