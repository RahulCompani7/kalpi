"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export const AnimatedTooltip = ({
  items,
  className,
}: {
  items: {
    id: number
    name: string
    designation: string
    image: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("flex flex-row items-center justify-center", className)}>
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="flex items-center justify-center relative"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              height={200}
              width={200}
              className="rounded-full object-cover border-2 border-white h-24 w-24 md:h-32 md:w-32"
              alt={item.name}
            />

            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="absolute -bottom-20 flex flex-col items-center justify-center bg-white rounded-md shadow-xl px-4 py-2 z-50"
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
                <p className="text-sm font-bold text-black">{item.name}</p>
                <p className="text-xs text-gray-500">{item.designation}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  )
}
