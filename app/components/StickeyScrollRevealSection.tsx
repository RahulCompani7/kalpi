"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";

export default function StickyScrollSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stickyScrollItems = [
    {
      title: "Intuitive Strategy Builder",
      description:
        "Our drag-and-drop interface makes building complex quantitative strategies simple and intuitive. Combine technical indicators, fundamental data, and custom signals without writing a single line of code.",
      content: (
        <div className="h-full w-full bg-white rounded-xl overflow-hidden flex items-center justify-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-[1.02]">
          <Image
            src="https://images.pexels.com/photos/7222026/pexels-photo-7222026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Strategy Builder Interface"
            width={600}
            height={400}
            className="rounded-lg"
            priority
            draggable={false}
          />
        </div>
      ),
    },
    {
      title: "Powerful Backtesting Engine",
      description:
        "Test your strategies against decades of historical market data. Our advanced backtesting engine provides comprehensive performance metrics, drawdown analysis, and risk-adjusted return calculations.",
      content: (
        <div className="h-full w-full bg-white rounded-xl overflow-hidden flex items-center justify-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-[1.02]">
          <Image
            src="https://images.pexels.com/photos/6693651/pexels-photo-6693651.jpeg"
            alt="Backtesting Dashboard"
            width={600}
            height={400}
            className="rounded-lg"
            priority
            draggable={false}
          />
        </div>
      ),
    },
    {
      title: "AI-Powered Optimization",
      description:
        "Leverage machine learning algorithms to optimize your strategies. Our AI engine can identify patterns in market data, suggest improvements to your strategies, and help you maximize risk-adjusted returns.",
      content: (
        <div className="h-full w-full bg-white rounded-xl overflow-hidden flex items-center justify-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-[1.02]">
          <Image
            src="https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="AI Optimization"
            width={600}
            height={400}
            className="rounded-lg"
            priority
            draggable={false}
          />
        </div>
      ),
    },
    {
      title: "Strategy Marketplace",
      description:
        "Discover and subscribe to proven strategies from professional quant researchers. Our marketplace offers a diverse range of strategies across different asset classes, risk profiles, and investment horizons.",
      content: (
        <div className="h-full w-full bg-white rounded-xl overflow-hidden flex items-center justify-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-[1.02]">
          <Image
            src="https://images.pexels.com/photos/7414105/pexels-photo-7414105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Strategy Marketplace"
            width={600}
            height={400}
            className="rounded-lg"
            priority
            draggable={false}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#ECFDF5] text-gray-900">
      <section className="w-full py-20 md:py-28 lg:py-36 bg-[#F9FAF7]" ref={ref}>
        <div className="container max-w-7xl px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center space-y-6 mb-20 px-4 md:px-0"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-tight max-w-4xl">
              How{" "}
              <span className="text-[#8A63D2] font-semibold">Kalpi Capital</span>{" "}
              Works
            </h2>
            <p className="max-w-3xl text-gray-700 text-xl md:text-2xl font-light leading-relaxed">
              Our comprehensive platform provides everything you need to succeed
              in quantitative investing.
            </p>
          </motion.div>

          <StickyScroll content={stickyScrollItems} />
        </div>
      </section>
    </div>
  );
}