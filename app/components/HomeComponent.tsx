"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import {
  Zap,
  BarChart3,
  LineChart,
  Brain,
  Store,
  Shield,
  Instagram,
  Linkedin,
  ChevronRight,
  Menu,
  Sun,
  Moon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import KalpiImage from "../../images/kalpi logo.jpeg"
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

export default function HomeComponent() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navigation */}
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <div className="flex items-center">
              <Image src={KalpiImage} alt="" width={70} height={50}></Image>
              
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-base font-medium text-gray-700 hover:text-green-500 dark:text-gray-200 dark:hover:text-green-400"
              >
                Strategy Builder
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-700 hover:text-green-500 dark:text-gray-200 dark:hover:text-green-400"
              >
                My Strategies
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-700 hover:text-green-500 dark:text-gray-200 dark:hover:text-green-400"
              >
                Backtest
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-700 hover:text-green-500 dark:text-gray-200 dark:hover:text-green-400"
              >
                Market Place
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <span className="hidden md:inline-block">
                <Button className="bg-green-100 text-green-500 hover:bg-green-200 rounded-4xl cursor-pointer">AG</Button>
              </span>

              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-6 mt-10">
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 hover:text-green-500 dark:text-gray-200 dark:hover:text-green-400"
                    >
                      Strategy Builder
                    </a>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 hover:text-green-500 dark:text-gray-200 dark:hover:text-green-400"
                    >
                      My Strategies
                    </a>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 hover:text-green-500 dark:text-gray-200 dark:hover:text-green-400"
                    >
                      Backtest
                    </a>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 hover:text-green-500 dark:text-gray-200 dark:hover:text-green-400"
                    >
                      Market Place
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-16 md:py-16 lg:py-16 border-b">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-sm font-medium mb-2">
              Systematic Quantitative Research Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
              We Democratize <span className="text-green-600">Quant</span> <br />
              <span className="text-green-600">Systematic</span> Investing
            </h1>
            <p className="max-w-[700px] text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-4">
              Create, backtest and deploy Quant AI/ML portfolios without writing code.
              <br />
              Harness the power of data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <Button className=" cursor-pointer bg-green-600 hover:bg-green-500 text-white text-base md:text-lg py-6 px-8">
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="cursor-pointer text-base md:text-lg py-6 px-8">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 px-10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Why Choose <span className="text-green-600">Kalpi Capital?</span>
            </h2>
            <p className="max-w-[800px] text-gray-600 dark:text-gray-300 text-lg md:text-xl">
              Our platform combines powerful technology with an intuitive interface to help you succeed in systematic
              portfolio construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.2)",
                  zIndex: 10,
                }}
                className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-300 to-green-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="flex flex-col items-start">
                  <div className="p-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">{feature.description}</p>
                </div>
                <motion.div
                  className="absolute bottom-0 right-0 w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-green-600 dark:bg-green-700">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Ready for future of Investing?</h2>
            <p className="text-white/90 text-lg md:text-xl max-w-[800px]">
              Join thousands of investors who are already using Kalpi Capital to build Quant portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <Button className="cursor-pointer bg-white text-green-600 hover:bg-gray-100 text-base md:text-lg py-6 px-8">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="cursor-pointer text-white border-white bg-white/10 text-base md:text-lg py-6 px-8"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 px-10 md:pt-20 border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                 <Image src={KalpiImage} alt="" width={150} height={50}></Image>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Empowering portfolio managers with advanced quantitative research solutions. Build, backtest, and deploy
                your strategies with confidence.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 cursor-pointer">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 cursor-pointer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400 text-base"
                  >
                    Strategy Builder
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400 text-base"
                  >
                    Backtest
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400 text-base"
                  >
                    My Strategies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400 text-base"
                  >
                    Marketplace
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600 dark:text-gray-300 text-base">
                  <IoCallOutline className="text-green-600 mr-2"></IoCallOutline>
                  <span>+91-8871911901</span>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300 text-base">
                   <CiMail className="text-green-700 mr-2"></CiMail>
                  <span>info@kalpicapital.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-6">Newsletter</h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                Subscribe to our newsletter for the latest updates on market trends and quantitative research.
              </p>
              <div className="flex flex-col space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-100 dark:bg-gray-800 py-6 text-base"
                />
                <Button className=" cursor-pointer w-full bg-green-600 hover:bg-green-600 text-white py-6 text-base">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-600 dark:text-gray-300">© 2025 Kalpi Capital. All rights reserved.</p>
            <div className="flex space-x-6 mt-6 md:mt-0">
              <a
                href="#"
                className="text-base text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-base text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-base text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: <Zap className="h-7 w-7" />,
    title: "No-Code Strategy Builder",
    description:
      "Build complex quantitative strategies with our intuitive click and drop interface. No coding required.",
  },
  {
    icon: <BarChart3 className="h-7 w-7" />,
    title: "Advanced Backtesting",
    description: "Test your strategies against historical data with detailed performance metrics and analytics.",
  },
  {
    icon: <LineChart className="h-7 w-7" />,
    title: "Portfolio creation",
    description: "Create equal & custom weighted portfolios with ease with rebalancing options.",
  },
  {
    icon: <Brain className="h-7 w-7" />,
    title: "Machine Learning & AI Strategy",
    description: "Use AI/ML techniques to build, combine and optimize strategies.",
  },
  {
    icon: <Store className="h-7 w-7" />,
    title: "Strategy Marketplace",
    description: "Discover and subscribe to proven strategies from professional Quant researchers in our marketplace.",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Multi-Factor Model",
    description: "Create a multi-factor portfolios for reobust risk adjusted returns.",
  },
]
