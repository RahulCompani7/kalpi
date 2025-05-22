"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const baseSpeeds = [0.3, -0.3, 0.25, -0.25];
  const scrollSpeeds = [2, 2, 2, 2]; // Boosted speed when scrolling
  const yPositions = baseSpeeds.map(() => useMotionValue(0));
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollDirection = useRef(1); // 1 = scroll down, -1 = scroll up
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useAnimationFrame((t, delta) => {
    yPositions.forEach((y, i) => {
      const direction =
        isScrolling ? scrollDirection.current * scrollSpeeds[i] : baseSpeeds[i];
      y.set(y.get() + (direction * delta) / 10);
    });
  });

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      const direction = e.deltaY > 0 ? -1 : 1; // Opposite direction
      scrollDirection.current = direction;
      setIsScrolling(true);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 300); // Time after scroll stops
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100",
        className,
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                key={colIndex + "marquee"}
                style={{ y: yPositions[colIndex] }}
                className="flex flex-col items-start gap-8"
              >
                
                {subarray.map((image, imageIndex) => (
                  <div className="relative" key={imageIndex + image}>
                    
                    <motion.img
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                      width={970}
                      height={700}
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
