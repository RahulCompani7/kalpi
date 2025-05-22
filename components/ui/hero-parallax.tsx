"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    description: string
    image: string
  }[]
}) => {
  const firstRow = products.slice(0, 2)
  const secondRow = products.slice(2, 4)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 400])
  const translateYReverse = useTransform(scrollYProgress, [0, 1], [0, -400])
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <div
      ref={ref}
      className="h-[140vh] md:h-[120vh] flex flex-col items-center justify-start overflow-hidden antialiased relative z-0 pt-10 md:pt-20"
    >
      <motion.div
        style={{
          rotateX,
          opacity,
          scale,
        }}
        className="flex flex-row-reverse space-x-reverse space-x-10 mb-20"
      >
        {firstRow.map((product) => (
          <ProductCard key={product.title} product={product} translate={translateY} />
        ))}
      </motion.div>
      <motion.div
        style={{
          rotateX,
          opacity,
          scale,
        }}
        className="flex flex-row space-x-10"
      >
        {secondRow.map((product) => (
          <ProductCard key={product.title} product={product} translate={translateYReverse} />
        ))}
      </motion.div>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    description: string
    image: string
  }
  translate: any
}) => {
  return (
    <motion.div
      style={{
        y: translate,
      }}
      whileHover={{
        y: -10,
      }}
      className="group/product h-96 w-[350px] md:w-[450px] relative flex-shrink-0"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.image || "/placeholder.svg"}
          height="600"
          width="800"
          className="object-cover object-center absolute h-full w-full inset-0 rounded-xl"
          alt={product.title}
        />
        <div className="absolute inset-0 h-full w-full bg-black opacity-40 group-hover/product:opacity-30 transition duration-300 rounded-xl"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <h2 className="text-white text-2xl font-medium mb-2">{product.title}</h2>
          <p className="text-white/80 text-sm">{product.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
