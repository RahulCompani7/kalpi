"use client"

import { ParallaxScroll } from "../../components/ui/parallax-scroll";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ThreeDMarquee } from "@/components/ui/3d-marque";
import { image } from "framer-motion/client";

export default function ParallaxScrollSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
  // Existing 6
  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/5561917/pexels-photo-5561917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  // New additions
  "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // data analysis
  "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // risk decision board
  "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // puzzle planning
  "https://images.pexels.com/photos/346553/pexels-photo-346553.jpeg?auto=compress&cs=tinysrgb&w=800", // locked data center
  "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // cloud security
  "https://images.pexels.com/photos/2834219/pexels-photo-2834219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // risk management graph
  "https://images.pexels.com/photos/102152/pexels-photo-102152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // businessman with shield icon
  "https://images.pexels.com/photos/7567482/pexels-photo-7567482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // emergency planning
  "https://images.pexels.com/photos/7873554/pexels-photo-7873554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // insurance and risk coverage
  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/5561917/pexels-photo-5561917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  // New additions
  "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // data analysis
  "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // risk decision board
  "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // puzzle planning
  "https://images.pexels.com/photos/346553/pexels-photo-346553.jpeg?auto=compress&cs=tinysrgb&w=800", // locked data center
  "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // cloud security
  "https://images.pexels.com/photos/2834219/pexels-photo-2834219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // risk management graph
  "https://images.pexels.com/photos/102152/pexels-photo-102152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // businessman with shield icon
  "https://images.pexels.com/photos/7567482/pexels-photo-7567482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // emergency planning
  "https://images.pexels.com/photos/7873554/pexels-photo-7873554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // insurance and risk coverage
  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/5561917/pexels-photo-5561917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  
];





  return (
    <section className="w-full py-16 md:py-24 bg-[#ECFDF5]" ref={ref}>
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-6 mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black tracking-tight">
            Unlock the Power of{" "}
            <span className="text-[#065F46] font-medium">Quantitative Investing</span>
          </h2>
          <p className="max-w-[800px] text-gray-700 text-lg md:text-xl font-light">
            Leverage cutting-edge tools and intuitive design to build, test, and scale your systematic investing strategies with confidence.
          </p>
        </motion.div>

         <ThreeDMarquee images={images}/>
      </div>
    </section>
  );
}
