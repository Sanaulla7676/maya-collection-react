"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { luxuryReels } from "../../data/reels";
import ReelCard from "./ReelCard";

export default function ReelWall() {
  // Animation variants for the title and section header
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Staggered entry animation container for the grid of reels
  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-stone-50 border-t border-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-3 font-light">
            Interactive Lookbook
          </span>
          <h2 className="text-2xl md:text-3xl font-serif tracking-widest text-stone-900 uppercase font-light mb-4">
            Editorial Reels
          </h2>
          <div className="w-12 h-[1px] bg-stone-300 mb-6" />
          <p className="text-xs md:text-sm font-light tracking-wide text-stone-500 max-w-md leading-relaxed">
            Hover or tap to play our exclusive silhouettes in motion. Crafted to move with grace.
          </p>
        </motion.div>

        {/* Responsive Grid with Staggered Animations */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {luxuryReels.map((reel) => (
            <motion.div key={reel.id} variants={cardVariants}>
              <ReelCard reel={reel} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}