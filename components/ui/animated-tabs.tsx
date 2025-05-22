"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const AnimatedTabs = ({
  tabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: {
    title: string
    value: string
    content: React.ReactNode
  }[]
  containerClassName?: string
  activeTabClassName?: string
  tabClassName?: string
  contentClassName?: string
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value)

  return (
    <div className={cn("w-full max-w-6xl mx-auto", containerClassName)}>
     <div className="flex items-center gap-2 md:gap-4 px-2 sm:px-4 overflow-x-auto scrollbar-hide mb-6 sm:mb-8">

        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors",
              activeTab === tab.value
                ? cn("text-white", activeTabClassName)
                : cn("text-gray-600 hover:text-[#D6CDEA]", tabClassName),
            )}
          >
            {activeTab === tab.value && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-gradient-to-r from-[#D6CDEA] to-[#BFD7ED] rounded-full"
                transition={{ duration: 0.3 }}
              />
            )}
            <span className="relative z-10">{tab.title}</span>
          </button>
        ))}
      </div>

      <div className={cn("relative h-[400px] w-full overflow-hidden rounded-2xl", contentClassName)}>
        {tabs.map((tab) => (
          <motion.div
            key={tab.value}
            initial={{ opacity: 0, x: activeTab === tab.value ? -100 : 100 }}
            animate={{
              opacity: activeTab === tab.value ? 1 : 0,
              x: activeTab === tab.value ? 0 : activeTab > tab.value ? -100 : 100,
              zIndex: activeTab === tab.value ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={cn("absolute inset-0", activeTab === tab.value ? "block" : "hidden")}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
