"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type ParallaxItem = {
  src: string;
  title: string;
};

export const ParallaxScroll = ({
  items,
  className,
}: {
  items: ParallaxItem[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(items.length / 3);

  const firstPart = items.slice(0, third);
  const secondPart = items.slice(third, 2 * third);
  const thirdPart = items.slice(2 * third);

  return (
    <div
      className={cn("overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((item, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <img
                src={item.src}
                alt={item.title}
                className="h-80 w-full object-cover object-left-top rounded-lg"
                height={400}
                width={400}
              />
              <p className="mt-2 text-center text-sm font-medium">{item.title}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((item, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={item.src}
                alt={item.title}
                className="h-80 w-full object-cover object-left-top rounded-lg"
                height={400}
                width={400}
              />
              <p className="mt-2 text-center text-sm font-medium">{item.title}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((item, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img
                src={item.src}
                alt={item.title}
                className="h-80 w-full object-cover object-left-top rounded-lg"
                height={400}
                width={400}
              />
              <p className="mt-2 text-center text-sm font-medium">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
