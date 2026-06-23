"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface HeroOverlayProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function HeroOverlay({ title, subtitle, ctaText, ctaLink }: HeroOverlayProps) {
  // Staggered entry container variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  // Upward slide and fade animations for text blocks
  const elementVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Custom premium easing curve
      },
    },
  };

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center px-6 md:px-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center flex flex-col items-center"
      >
        {/* Subtle Luxury Pre-heading */}
        <motion.span
          variants={elementVariants}
          className="text-white/70 text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 font-light"
        >
          Maya Haute Couture
        </motion.span>

        {/* Main Serif Title */}
        <motion.h1
          variants={elementVariants}
          className="text-white text-3xl md:text-6xl font-serif tracking-[0.1em] font-light leading-tight mb-6 uppercase"
        >
          {title}
        </motion.h1>

        {/* Descriptive Elegant Subtitle */}
        <motion.p
          variants={elementVariants}
          className="text-white/80 text-xs md:text-sm font-light tracking-[0.15em] max-w-xl leading-relaxed mb-10"
        >
          {subtitle}
        </motion.p>

        {/* Premium Call to Action Button */}
        <motion.div variants={elementVariants}>
          <Link href={ctaLink}>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 1)", color: "#1c1917" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="px-8 py-3.5 border border-white/40 text-white text-[10px] md:text-xs uppercase tracking-[0.25em] bg-transparent font-light transition-all"
            >
              {ctaText}
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}