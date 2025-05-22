import { HeroHighlight } from "../../components/ui/hero-highlight";
import { SpotlightButton } from "../../components/ui/spotlight-button";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import { TypewriterEffect } from "../../components/ui/typewriter-effect";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const words = [
  { text: "We" },
  { text: "Democratize", className: "text-[#069A8E]" },      // strong green-teal
  { text: "Quant", className: "text-[#3DA35D]" },            // medium green
  { text: "Systematic", className: "text-[#15803D]" },       // darker green
  { text: "Investing", className: "text-[#065F46]" },        // deepest green
];


  return (
    <div className="bg-[#ECFDF5] text-gray-800">
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
        ref={ref}
      >
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0 z-0"
          className="h-full w-full"
          gradientBackgroundStart="#ECFDF5"
          gradientBackgroundEnd="#D1FAE5"
          firstColor="#A7D7C520"
          secondColor="#B6E2A120"
          thirdColor="#C8FACC20"
          fourthColor="#E3F8DF20"
          fifthColor="#D1FAE520"
          pointerColor="transparent"
          size="60%"
          blurRadius={100}
          interactive={false}
        />

        <div className="container px-4 md:px-6 mx-auto z-10 pt-20">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#D1FAE5] text-[#065F46] text-xs font-light mb-2 "
            >
              India&apos;s First Systematic Quantitative Research Platform
            </motion.div>

            <HeroHighlight className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-800">
              <div className="h-24 md:h-32">
                <TypewriterEffect
                  words={words}
                  className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight"
                />
              </div>
            </HeroHighlight>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-[700px] text-gray-700 text-lg md:text-xl mt-4 font-light"
            >
              Create, backtest and deploy Quant AI/ML portfolios without writing code.
              <br />
              Harness the power of data-driven decisions.
            </motion.p>

            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto px-4"
>
  <SpotlightButton className="w-full sm:w-auto bg-gradient-to-r from-[#A7D7C5] to-[#B6E2A1] text-white px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-medium rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]">
    Get Started <ChevronRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
  </SpotlightButton>

  <Button
    variant="ghost"
    className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg rounded-full text-[#065F46] ring-1 ring-[#A7D7C5] hover:bg-[#D1FAE5] hover:shadow-md hover:scale-[1.02] transition-all duration-300"
  >
    Watch Demo
  </Button>
</motion.div>


          </div>
        </div>

        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ECFDF5"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
}
