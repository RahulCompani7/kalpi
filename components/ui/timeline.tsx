"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const Timeline = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    icon: React.ReactNode
  }[]
  className?: string
}) => {
  return (
    <div className={cn("max-w-3xl mx-auto", className)}>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#D6CDEA] to-[#BFD7ED]" />

        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={cn("relative flex items-center mb-12", index % 2 === 0 ? "flex-row" : "flex-row-reverse")}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-[#D6CDEA] z-10 flex items-center justify-center">
              {item.icon}
            </div>

            {/* Content */}
            <div
              className={cn(
                "w-1/2 p-6 bg-white rounded-xl shadow-sm",
                index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left",
              )}
            >
              <h3 className="text-xl font-medium mb-2 text-black">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
