"use client"

import { useState, useEffect, useRef } from "react"
import { useScroll, motion, useAnimation } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useInView } from "react-intersection-observer";
import {
  Zap,
  BarChart3,
  LineChart,
  Brain,
  Store,
  Shield,
  Instagram,
  Linkedin,
  ArrowRight,
  Mail,
  Phone,
  Layers,
  BarChart4,
  TrendingDown,
  Workflow,
  Lightbulb,
  Rocket,
} from "lucide-react"

// Aceternity UI Components
import { TextRevealCard } from "../../components/ui/text-reveal-card"

import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation"

import { DraggableCard } from "../../components/ui/draggable-card"

import { WobbleCard } from "../../components/ui/wobble-card"


import { AnimatedTabs } from "../../components/ui/animated-tabs"
import { VortexBackground } from "../../components/ui/vortex-background"
import { AppleCardsCarousel } from "../../components/ui/apple-cards-carousel"
import { AnimatedTestimonials } from "../../components/ui/animated-testimonials"
import { Timeline } from "../../components/ui/timeline"
import { FocusCards } from "../../components/ui/focus-cards"
import FeaturesSectionComp from "./FeaturesSection"
import { GlowingEffect } from "../../components/ui/glowing-effect"
import Nav from "./Nav"
import HeroSection from "./HeroSection"
import ParallaxScrollSection from "./ParallaxScrollSection"
import { FeatureSections } from "@/components/ui/feature-sections"
import StickeyScrollSection from "./StickeyScrollRevealSection"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import StickyScrollSection from "./StickeyScrollRevealSection"

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AnimatedSection({ children }: React.PropsWithChildren<{}>) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="w-full py-20 md:py-28 lg:py-36"
    >
      {children}
    </motion.section>
  );
}

export default function HomeComponent() {
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

  const testimonials = [
    {
      quote:
        "Kalpi Capital has transformed how I approach systematic investing. The no-code platform makes it accessible even for those without a technical background.",
      name: "Rajiv Mehta",
      title: "Portfolio Manager",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The backtesting capabilities are incredibly powerful. I've been able to refine my strategies with precision I couldn't achieve before.",
      name: "Priya Sharma",
      title: "Quantitative Analyst",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As someone new to quant investing, Kalpi Capital's platform has been a game-changer. The intuitive interface makes complex concepts accessible.",
      name: "Vikram Singh",
      title: "Individual Investor",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The AI-powered insights have helped me discover opportunities I would have otherwise missed. This platform is truly innovative.",
      name: "Ananya Patel",
      title: "Hedge Fund Manager",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  

  const timelineItems = [
    {
      title: "Define Investment Goals",
      description: "Set your investment objectives, risk tolerance, and time horizon.",
      icon: <Lightbulb className="h-5 w-5 text-[#D6CDEA]" />,
    },
    {
      title: "Build Your Strategy",
      description: "Use our drag-and-drop interface to create your quantitative strategy.",
      icon: <Workflow className="h-5 w-5 text-[#F5C7C7]" />,
    },
    {
      title: "Backtest Your Strategy",
      description: "Test your strategy against historical market data.",
      icon: <BarChart3 className="h-5 w-5 text-[#FFDACC]" />,
    },
    {
      title: "Optimize Your Strategy",
      description: "Fine-tune your strategy based on backtesting results.",
      icon: <Brain className="h-5 w-5 text-[#D4F1F4]" />,
    },
    {
      title: "Deploy Your Strategy",
      description: "Launch your strategy in the live market.",
      icon: <Rocket className="h-5 w-5 text-[#BFD7ED]" />,
    },
    {
      title: "Monitor Performance",
      description: "Track your strategy's performance and make adjustments as needed.",
      icon: <LineChart className="h-5 w-5 text-[#E3E4F3]" />,
    },
  ]

  const tabItems = [
    {
      title: "Strategy Builder",
      value: "strategy-builder",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-gray-500 bg-gradient-to-br from-[#D6CDEA] to-[#BFD7ED]">
          <p>Build sophisticated trading strategies without writing code</p>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Strategy Builder"
            width={600}
            height={400}
            className="absolute bottom-0 right-0 w-[70%] h-auto object-contain"
          />
        </div>
      ),
    },
    {
      title: "Backtesting",
      value: "backtesting",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-gray-500 bg-gradient-to-br from-[#F5C7C7] to-[#FFDACC]">
          <p>Test your strategies against historical market data</p>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Backtesting"
            width={600}
            height={400}
            className="absolute bottom-0 right-0 w-[70%] h-auto object-contain"
          />
        </div>
      ),
    },
    {
      title: "Portfolio Optimization",
      value: "portfolio-optimization",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-gray-500 bg-gradient-to-br from-[#D4F1F4] to-[#BFD7ED]">
          <p>Optimize your portfolio for maximum returns and minimum risk</p>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Portfolio Optimization"
            width={600}
            height={400}
            className="absolute bottom-0 right-0 w-[70%] h-auto object-contain"
          />
        </div>
      ),
    },
    {
      title: "AI Insights",
      value: "ai-insights",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-gray-500 bg-gradient-to-br from-[#E3E4F3] to-[#D6CDEA]">
          <p>Leverage AI to uncover hidden patterns in market data</p>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="AI Insights"
            width={600}
            height={400}
            className="absolute bottom-0 right-0 w-[70%] h-auto object-contain"
          />
        </div>
      ),
    },
  ]

  const appleCardsItems = [
    {
      id: 1,
      content: (
        <div className="bg-gradient-to-br from-[#D6CDEA] to-[#BFD7ED] h-full w-full rounded-xl p-8 flex flex-col justify-between">
          <h3 className="text-2xl font-medium text-black mb-4">Strategy Builder</h3>
          <p className="text-gray-500">Build sophisticated trading strategies without writing code</p>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="bg-gradient-to-br from-[#F5C7C7] to-[#FFDACC] h-full w-full rounded-xl p-8 flex flex-col justify-between">
          <h3 className="text-2xl font-medium text-black mb-4">Backtesting</h3>
          <p className="text-gray-500">Test your strategies against historical market data</p>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="bg-gradient-to-br from-[#D4F1F4] to-[#BFD7ED] h-full w-full rounded-xl p-8 flex flex-col justify-between">
          <h3 className="text-2xl font-medium text-black mb-4">Portfolio Optimization</h3>
          <p className="text-gray-500">Optimize your portfolio for maximum returns and minimum risk</p>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="bg-gradient-to-br from-[#E3E4F3] to-[#D6CDEA] h-full w-full rounded-xl p-8 flex flex-col justify-between">
          <h3 className="text-2xl font-medium text-black mb-4">AI Insights</h3>
          <p className="text-gray">Leverage AI to uncover hidden patterns in market data</p>
        </div>
      ),
    },
  ]

  const featureSections = [
    {
      title: "Strategy Builder",
      description:
        "Our intuitive drag-and-drop interface makes building complex quantitative strategies simple. Combine technical indicators, fundamental data, and custom signals without writing a single line of code.",
      image: "/placeholder.svg?height=600&width=800",
      imagePosition: "right",
      color: "from-[#D6CDEA] to-[#BFD7ED]",
    },
    {
      title: "Backtesting Engine",
      description:
        "Test your strategies against decades of historical market data. Our advanced backtesting engine provides comprehensive performance metrics, drawdown analysis, and risk-adjusted return calculations.",
      image: "/placeholder.svg?height=600&width=800",
      imagePosition: "left",
      color: "from-[#F5C7C7] to-[#FFDACC]",
    },
    {
      title: "AI-Powered Optimization",
      description:
        "Leverage machine learning algorithms to optimize your strategies. Our AI engine can identify patterns in market data, suggest improvements to your strategies, and help you maximize risk-adjusted returns.",
      image: "/placeholder.svg?height=600&width=800",
      imagePosition: "right",
      color: "from-[#D4F1F4] to-[#BFD7ED]",
    },
  ]

  const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Floating Navigation */}
      <Nav/>

      {/* Hero Section with Parallax and Typewriter */}
      <HeroSection/>

      {/* Parallax Scroll Section */}
      <ParallaxScrollSection/>

      {/* Features Section with 3D Cards */}
      <FeaturesSectionComp/>

      {/* Sticky Scroll Reveal Section */}
      <StickyScrollSection/>
      
      

      {/* Draggable Card Section */}
      <section className="w-full py-16 sm:py-20 md:py-28 lg:py-36 bg-gradient-to-b from-white to-[#F9F9FB] overflow-hidden">
  <div className="container px-4 sm:px-6 mx-auto">
    <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 mb-12 sm:mb-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
        Explore Our <span className="text-[#A78BFA]">Key Features</span>
      </h2>

      <p className="max-w-[700px] text-gray-500 text-base sm:text-lg md:text-xl font-light sm:flex hidden">
        Drag the cards below to discover the core capabilities of our platform.
      </p>
      <p className="text-gray-500 text-sm sm:hidden">
        Swipe to explore platform features.
      </p>
    </div>

    <div className="relative w-full">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <GlowingEffect
          id="glowing-effect"
          className="w-full h-full"
          particleColor="#C4B5FD"
          particleDensity={90}
        />
      </div>

      <div className="relative z-10">
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto md:overflow-visible px-1 sm:px-0">
          
          {/* Card 1 */}
          <DraggableCard className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] max-w-[90%] sm:max-w-[300px] bg-white border border-gray-200 shadow-xl rounded-2xl p-6 h-[360px] hover:shadow-2xl transition-shadow shrink-0">
            <div className="flex flex-col h-full">
              <div className="p-4 rounded-full bg-[#EEF2FF] text-[#8B5CF6] w-16 h-16 flex items-center justify-center mb-6">
                <BarChart4 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Analytics</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Track key performance indicators like Sharpe ratio, drawdowns, and risk-adjusted returns.
              </p>
            </div>
          </DraggableCard>

          {/* Card 2 */}
          <DraggableCard className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] max-w-[90%] sm:max-w-[300px] bg-white border border-gray-200 shadow-xl rounded-2xl p-6 h-[360px] hover:shadow-2xl transition-shadow shrink-0">
            <div className="flex flex-col h-full">
              <div className="p-4 rounded-full bg-[#FFF1F2] text-[#F87171] w-16 h-16 flex items-center justify-center mb-6">
                <Workflow className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Factor Analysis</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Evaluate exposure to financial factors like value, momentum, and volatility in your strategy.
              </p>
            </div>
          </DraggableCard>

          {/* Card 3 */}
          <DraggableCard className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] max-w-[90%] sm:max-w-[300px] bg-white border border-gray-200 shadow-xl rounded-2xl p-6 h-[360px] hover:shadow-2xl transition-shadow shrink-0">
            <div className="flex flex-col h-full">
              <div className="p-4 rounded-full bg-[#FFFBEB] text-[#FBBF24] w-16 h-16 flex items-center justify-center mb-6">
                <LineChart className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Portfolio Allocation</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Maximize efficiency by allocating assets and strategies intelligently across your portfolio.
              </p>
            </div>
          </DraggableCard>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Animated Tabs Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-[#F6F1EB]">
  <div className="container px-4 md:px-6 mx-auto">
    <div className="flex flex-col items-center text-center space-y-6 mb-16 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900">
        Platform <span className="text-[#D6CDEA] font-semibold">Features</span>
      </h2>
      <p className="max-w-[800px] text-gray-700 text-lg md:text-xl font-light leading-relaxed">
        Explore the key features of our quantitative investing platform.
      </p>
    </div>

    <AnimatedTabs tabs={tabItems} />
  </div>
</section>


      {/* Apple Cards Carousel Section */}
      <AnimatedSection>
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-5 mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900">
              Our{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="max-w-xl text-gray-700 text-lg md:text-xl font-light leading-relaxed">
              Comprehensive tools for quantitative investing.
            </p>
          </div>

          <AppleCardsCarousel items={appleCardsItems} />
        </div>
      </AnimatedSection>

      {/* Timeline Section */}
      <AnimatedSection>
        <div className="container px-6 mx-auto bg-gradient-to-tr from-gray-50 to-yellow-50 rounded-3xl p-10 shadow-lg">
          <div className="flex flex-col items-center text-center space-y-5 mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900">
              How to{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Get Started
              </span>
            </h2>
            <p className="max-w-xl text-gray-700 text-lg md:text-xl font-light leading-relaxed">
              Follow these simple steps to start building your quantitative strategies.
            </p>
          </div>

          <Timeline items={timelineItems} />
        </div>
      </AnimatedSection>

      {/* Feature Sections */}


{/* Focus Cards Section */}
<AnimatedSection>
  <div className="container px-6 mx-auto bg-gradient-to-br from-yellow-100 to-gray-200 rounded-3xl p-10 shadow-lg">
    <div className="flex flex-col items-center text-center space-y-5 mb-16">
      <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-800">
        Strategy{" "}
        <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Types
        </span>
      </h2>
      <p className="max-w-xl text-gray-600 text-lg md:text-xl font-light leading-relaxed">
        Explore different quantitative strategy approaches available on our platform.
      </p>
    </div>

    <FocusCards />
  </div>
</AnimatedSection>

{/* Testimonials Section */}
<AnimatedSection>
  <div className="container px-6 mx-auto">
    <div className="flex flex-col items-center text-center space-y-5 mb-16">
      <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-800">
        What Our{" "}
        <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Clients Say
        </span>
      </h2>
      <p className="max-w-xl text-gray-600 text-lg md:text-xl font-light leading-relaxed">
        Hear from investors who have transformed their approach to systematic investing with Kalpi Capital.
      </p>
    </div>

    <AnimatedTestimonials testimonials={testimonials} />
  </div>
</AnimatedSection>

{/* Wobble Card Section */}
<AnimatedSection>
  <div className="container px-6 mx-auto bg-gradient-to-tr from-gray-100 to-yellow-100 rounded-3xl p-12 shadow-lg">
    <div className="flex flex-col items-center text-center space-y-5 mb-16">
      <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-800">
        Our{" "}
        <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Pricing
        </span>
      </h2>
      <p className="max-w-xl text-gray-600 text-lg md:text-xl font-light leading-relaxed">
        Choose the plan that best fits your needs.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
      <WobbleCard className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-transform duration-300 hover:scale-105">
        {/* Basic plan content */}
        ...
      </WobbleCard>

      <WobbleCard className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 relative hover:shadow-2xl transition-transform duration-300 hover:scale-105">
        <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 text-white px-5 py-1 text-sm font-semibold rounded-tr-xl rounded-bl-xl shadow-lg">
          Popular
        </div>
        {/* Pro plan content */}
        ...
      </WobbleCard>

      <WobbleCard className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-transform duration-300 hover:scale-105">
        {/* Enterprise plan content */}
        ...
      </WobbleCard>
    </div>
  </div>
</AnimatedSection>

{/* CTA Section with Text Reveal */}
<AnimatedSection>
  <div className="container px-6 mx-auto">
    <TextRevealCard
      text="Ready for the future of investing?"
      revealText="Join thousands of investors who are already using Kalpi Capital to build Quant portfolios."
      className="w-full max-w-4xl mx-auto"
      gradient="from-purple-400 via-pink-400 to-yellow-400"
    >
      <div className="flex flex-col sm:flex-row gap-5 mt-10 w-full justify-center">
        <Button className="cursor-pointer bg-gradient-to-r from-purple-400 to-pink-400 text-white text-base md:text-lg py-6 px-8 rounded-full transition-shadow duration-300 shadow-lg hover:shadow-2xl">
          Start Free Trial
        </Button>
        <Button
          variant="outline"
          className="cursor-pointer text-base md:text-lg py-6 px-8 rounded-full border-purple-400 text-purple-400 hover:bg-purple-100 hover:text-black transition-all duration-300"
        >
          Schedule Demo
        </Button>
      </div>
    </TextRevealCard>
  </div>
</AnimatedSection>

{/* Newsletter Section with Vortex Background */}
<AnimatedSection>
  <div className="relative overflow-hidden">
    <VortexBackground className="absolute inset-0 z-0" />
    <div className="container px-6 mx-auto relative z-10">
      <div className="flex flex-col items-center text-center space-y-6 bg-white/95 backdrop-blur-md p-12 rounded-3xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-800 max-w-xl">
          Stay Updated on Quantitative Investing
        </h2>
        <p className="max-w-xl text-gray-600 text-lg md:text-xl font-light leading-relaxed">
          Subscribe to our newsletter for the latest insights and trends.
        </p>

        <Button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-lg py-5 px-10 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
          Subscribe
        </Button>
      </div>
    </div>
  </div>
</AnimatedSection>


      {/* Footer with Animated Background */}
      <footer className="w-full py-10 px-4 md:px-10 md:pt-20 border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <BackgroundGradientAnimation
            containerClassName="absolute inset-0"
            className="h-full w-full"
            gradientBackgroundStart="#FFFFFF"
            gradientBackgroundEnd="#F6F1EB"
            firstColor="#D6CDEA05"
            secondColor="#F5C7C705"
            thirdColor="#FFDACC05"
            fourthColor="#D4F1F405"
            fifthColor="#BFD7ED05"
            pointerColor="transparent"
            size="60%"
            blurRadius={100}
            interactive={false}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <Image src="/placeholder.svg?height=50&width=150" alt="Kalpi Capital Logo" width={150} height={50} />
              </div>
              <p className="text-base text-gray-600 font-light">
                Empowering portfolio managers with advanced quantitative research solutions. Build, backtest, and deploy
                your strategies with confidence.
              </p>
              <div className="flex space-x-5">
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#D6CDEA] transition-colors transform hover:scale-110 duration-300"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#D6CDEA] transition-colors transform hover:scale-110 duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#D6CDEA] font-light transition-colors flex items-center group"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                        Strategy Builder
                      </span>
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#D6CDEA] font-light transition-colors flex items-center group"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                        Backtest
                      </span>
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#D6CDEA] font-light transition-colors flex items-center group"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                        My Strategies
                      </span>
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#D6CDEA] font-light transition-colors flex items-center group"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                        Marketplace
                      </span>
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600 font-light group hover:text-[#D6CDEA] transition-colors">
                  <Phone className="text-[#D6CDEA] mr-2 h-5 w-5 group-hover:animate-pulse" />
                  <span>+91-8871911901</span>
                </li>
                <li className="flex items-center text-gray-600 font-light group hover:text-[#D6CDEA] transition-colors">
                  <Mail className="text-[#D6CDEA] mr-2 h-5 w-5 group-hover:animate-pulse" />
                  <span>info@kalpicapital.com</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium mb-6">Newsletter</h3>
              <p className="text-base text-gray-600 font-light mb-6">
                Subscribe to our newsletter for the latest updates on market trends and quantitative research.
              </p>
              <div className="flex flex-col space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white border-[#D6CDEA] focus:ring-[#D6CDEA] focus:border-[#D6CDEA] py-6 text-base rounded-lg"
                />
                <Button className="cursor-pointer w-full bg-gradient-to-r from-[#D6CDEA] to-[#BFD7ED] text-white py-6 text-base rounded-lg transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">Subscribe</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#F5C7C7] to-[#FFDACC] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-base text-gray-600 font-light">© 2025 Kalpi Capital. All rights reserved.</p>
            <div className="flex space-x-6 mt-6 md:mt-0">
              <a href="#" className="text-base text-gray-600 hover:text-[#D6CDEA] font-light transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-base text-gray-600 hover:text-[#D6CDEA] font-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-base text-gray-600 hover:text-[#D6CDEA] font-light transition-colors">
                Disclaimer
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}


