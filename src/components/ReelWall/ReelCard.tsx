"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Reel } from "../../data/reels";

interface ReelCardProps {
  reel: Reel;
}

export default function ReelCard({ reel }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Play video on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Safe fallback for autoplay policies
      });
    }
  };

  // Pause and reset video when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Return to the first frame
    }
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[9/16] w-full bg-stone-900 overflow-hidden cursor-pointer shadow-sm group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src={reel.videoUrl}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Subtle indicator icon overlay when not hovered */}
      <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md p-2 rounded-full pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
        <span className="block w-2 h-2 rounded-full bg-white animate-pulse" />
      </div>

      {/* Luxury Slide-up Info Panel */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end text-white pointer-events-auto"
          >
            {/* Category tag */}
            {reel.category && (
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/60 mb-2 font-light">
                {reel.category}
              </span>
            )}

            {/* Reel Title */}
            <h3 className="text-sm font-serif tracking-wider font-light mb-4 text-white uppercase">
              {reel.title}
            </h3>

            {/* Bottom Row: Likes & Shop CTA */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <div className="flex items-center space-x-1.5 text-white/80">
                <Heart size={14} className="fill-white/10" />
                <span className="text-[10px] tracking-widest font-light">{reel.likes || "0"}</span>
              </div>

              {reel.productLink && (
                <Link
                  href={reel.productLink}
                  className="flex items-center space-x-1.5 text-[9px] uppercase tracking-[0.2em] font-light text-white hover:opacity-75 transition-opacity"
                >
                  <ShoppingBag size={12} />
                  <span>Shop Look</span>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}