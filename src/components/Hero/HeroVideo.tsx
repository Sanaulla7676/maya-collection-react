"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroVideoProps {
  videoUrl: string;
  posterUrl: string;
}

export default function HeroVideo({ videoUrl, posterUrl }: HeroVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-stone-950">
      <div className="absolute inset-0 bg-black/35 z-10" />

      {!isLoaded && (
        <img
          src={posterUrl}
          alt="Luxury Background Fallback"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <motion.video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}