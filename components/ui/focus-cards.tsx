"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const FocusCards = ({ className }: { className?: string }) => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)

  const cards = [
    {
      title: "Momentum Strategies",
      description: "Capitalize on the tendency of assets that have performed well to continue performing well.",
      gradient: "from-[#D6CDEA] to-[#BFD7ED]",
    },
    {
      title: "Mean Reversion",
      description: "Profit from the tendency of asset prices to revert to their historical average over time.",
      gradient: "from-[#F5C7C7] to-[#FFDACC]",
    },
    {
      title: "Statistical Arbitrage",
      description: "Identify and exploit price discrepancies between related securities using statistical methods.",
      gradient: "from-[#D4F1F4] to-[#BFD7ED]",
    },
    {
      title: "Factor Investing",
      description: "Target specific factors like value, momentum, quality, and low volatility for excess returns.",
      gradient: "from-[#E3E4F3] to-[#D6CDEA]",
    },
  ]

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto", className)}>
      {cards.map((card, i) => (
        <div
          key={i}
          className="relative h-[300px] cursor-pointer"
          onMouseEnter={() => setFocusedIndex(i)}
          onMouseLeave={() => setFocusedIndex(null)}
        >
          <motion.div
            className={cn(
              "absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br p-8 flex flex-col justify-end",
              card.gradient,
            )}
            animate={{
              scale: focusedIndex === null ? 1 : focusedIndex === i ? 1.05 : 0.95,
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{
                y: focusedIndex === i ? -10 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-medium text-black mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm">{card.description}</p>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
