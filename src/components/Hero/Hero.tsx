"use client";

import React from "react";
import { motion } from "framer-motion";
import { heroData } from "../../data/hero";
import HeroVideo from "./HeroVideo";
import HeroOverlay from "./HeroOverlay";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-stone-950">
      {/* Background Loop Video */}
      <HeroVideo
        videoUrl={heroData.videoUrl}
        posterUrl={heroData.posterUrl}
      />

      {/* Elegant Typography & CTA Overlay */}
      <HeroOverlay
        title={heroData.title}
        subtitle={heroData.subtitle}
        ctaText={heroData.ctaText}
        ctaLink={heroData.ctaLink}
      />

      {/* Luxury Animated Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 mb-2 font-light">
          Scroll Down
        </span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </div>
    </section>
  );
}