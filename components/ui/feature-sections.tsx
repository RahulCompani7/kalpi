"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export const FeatureSections = ({
  features,
  className,
}: {
  features: {
    title: string
    description: string
    image: string
    imagePosition: string
    color: string
  }[]
  className?: string
}) => {
  return (
    <div className={cn("space-y-24", className)}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className={cn(
            "flex flex-col md:flex-row items-center gap-8 md:gap-16",
            feature.imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse",
          )}
        >
          <div className="flex-1">
            <div
              className={cn(
                "inline-block px-4 py-1 rounded-full text-white text-sm font-medium mb-4 bg-gradient-to-r",
                feature.color,
              )}
            >
              Feature
            </div>
            <h3 className="text-2xl md:text-3xl font-medium mb-4">{feature.title}</h3>
            <p className="text-gray-600 text-lg">{feature.description}</p>
          </div>
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-video overflow-hidden rounded-xl">
              <div className={cn("absolute inset-0 w-full h-full bg-gradient-to-r opacity-20", feature.color)} />
              <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
