"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export const ExpandableCard = ({
  title,
  description,
  icon,
  className,
}: {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      className={cn(
        "relative bg-white rounded-xl p-8 shadow-sm border border-gray-100 overflow-hidden group cursor-pointer",
        className,
      )}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        layout
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8FC0A9] to-[#4A7C59] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
      ></motion.div>
      <motion.div layout className="flex flex-col items-start">
        <motion.div layout className="p-4 rounded-full bg-[#F0F7F4] text-[#4A7C59] mb-6">
          {icon}
        </motion.div>
        <motion.h3 layout className="text-xl md:text-2xl font-medium mb-3">
          {title}
        </motion.h3>
        <AnimatePresence>
          {isExpanded ? (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-gray-600 text-base md:text-lg font-light mb-6"
            >
              {description}
            </motion.p>
          ) : (
            <motion.p
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-600 text-base md:text-lg font-light mb-6 line-clamp-2"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
        <motion.div layout className="flex items-center text-[#4A7C59] mt-2">
          <span className="mr-2 text-sm font-medium">{isExpanded ? "Show less" : "Learn more"}</span>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
