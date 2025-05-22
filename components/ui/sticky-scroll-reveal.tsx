"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#f8fafc", "#ffffff", "#f1f5f9"];

  const linearGradients = [
    "linear-gradient(to bottom right, #bae6fd, #a7f3d0)",
    "linear-gradient(to bottom right, #fbcfe8, #ddd6fe)",
    "linear-gradient(to bottom right, #fed7aa, #fde68a)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(
      linearGradients[activeCard % linearGradients.length]
    );
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor:
          backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 p-10"
    >
      {/* LEFT SCROLLABLE CONTENT */}
      <div ref={ref}>
        <div className="max-w-2xl mx-auto">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.4 }}
                className="text-2xl font-bold text-gray-900"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.4 }}
                className="mt-6 max-w-sm text-base text-gray-700"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* RIGHT SIDE ABSOLUTE CONTAINER */}
<div className="relative h-[600px] lg:h-auto lg:sticky lg:top-10 hidden md:flex">
  <div className="relative h-full w-full">
    {content.map((item, index) => (
      <motion.div
        key={index}
        className={cn(
          "absolute top-0 left-0 w-full h-full transition-opacity duration-300",
          index === activeCard ? "opacity-100 z-10" : "opacity-0 z-0"
        )}
        style={{
          background: linearGradients[index % linearGradients.length],
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: index === activeCard ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {item.content ?? null}
      </motion.div>
    ))}
  </div>
</div>

    </motion.div>
  );
};
