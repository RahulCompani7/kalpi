"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function FeaturesSectionComp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="bg-[#ECFDF5] text-gray-800">
      <section className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-10" ref={ref}>
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center space-y-6 mb-16">
            <TextHoverEffect
              words="Why Choose Kalpi Capital?"
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[800px] text-gray-600 text-lg md:text-xl font-light"
            >
              Our platform combines powerful technology with an intuitive interface to help you succeed in systematic
              portfolio construction.
            </motion.p>
          </div>

          {/* Use LayoutGrid directly without extra grid wrapper */}
          <LayoutGrid  />
        </div>
      </section>
    </div>
  );
}
