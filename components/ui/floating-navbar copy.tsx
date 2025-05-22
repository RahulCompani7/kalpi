"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
  }[]
  className?: string
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn("fixed top-4 inset-x-0 mx-auto w-fit z-[5000] flex justify-center", className)}
      >
        <div
          className={cn(
            "px-4 py-2 rounded-full flex items-center justify-center space-x-4 backdrop-blur-md border",
            isScrolled ? "bg-white/80 border-gray-200 shadow-lg" : "bg-white/50 border-white/50",
          )}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.link}
              className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-[#4A7C59] transition-colors"
              onMouseEnter={() => setActiveItem(item.name)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => setActiveItem(item.name)}
            >
              <span className="relative z-10">{item.name}</span>
              {activeItem === item.name && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-[#F0F7F4] rounded-full"
                  transition={{
                    type: "spring",
                    duration: 0.6,
                    bounce: 0.15,
                  }}
                />
              )}
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
