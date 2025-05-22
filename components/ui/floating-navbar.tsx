"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-4 inset-x-0 z-[5000] mx-auto flex items-center justify-between px-4 sm:px-6 py-2 backdrop-blur-md border rounded-full max-w-6xl",
          isScrolled
            ? "bg-white/80 border-gray-200 shadow-lg"
            : "bg-white/50 border-white/50",
          className
        )}
      >
        {/* Left: Logo */}
        <div className="flex items-center flex-shrink-0">
          {/* Replace below with your actual logo */}
          <Link href="/" className="text-xl font-bold text-[#4A7C59]">
            Kalpi Capital
          </Link>
        </div>

        {/* Center: Nav items - Desktop only */}
        <div className="hidden sm:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-[#4A7C59] transition-colors"
              onMouseEnter={() => setActiveItem(item.name)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => setActiveItem(item.name)}
            >
              <span className="relative z-10">{item.name}</span>
              {activeItem === item.name && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-[#F0F7F4] rounded-full"
                  transition={{
                    type: "spring",
                    duration: 0.6,
                    bounce: 0.15,
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right: Signup Button */}
        <div className="hidden sm:flex flex-shrink-0">
          <Link
            href="/signup"
            className="px-6 py-2 rounded-full bg-[#4A7C59] text-white font-semibold text-sm hover:bg-[#3a5f43] transition-colors"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile: Menu toggle and Signup button */}
        <div className="flex sm:hidden items-center space-x-4">
          <Link
            href="/signup"
            className="px-4 py-2 rounded-full bg-[#4A7C59] text-white font-semibold text-sm hover:bg-[#3a5f43] transition-colors"
          >
            Sign Up
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-[#4A7C59] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Items */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full px-6 sm:hidden z-[5000]">
            <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg flex flex-col space-y-2 py-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="text-base font-medium text-gray-700 hover:text-[#4A7C59] px-2 py-2 rounded-md transition-colors"
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </motion.nav>
    </AnimatePresence>
  );
};
