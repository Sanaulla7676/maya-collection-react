"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import { luxuryCollections } from "../../data/collections";

export default function CollectionsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <main className="relative min-h-screen bg-white pb-24">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Page Header Banner */}
      <section className="pt-40 pb-16 px-6 md:px-12 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-3 font-light">
            Luxury Portfolios
          </span>
          <h1 className="text-2xl md:text-4xl font-serif tracking-[0.15em] text-stone-900 uppercase font-light mb-4">
            Our Collections
          </h1>
          <div className="w-12 h-[1px] bg-stone-300" />
        </div>
      </section>

      {/* 3. Collections Grid Portfolio */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {luxuryCollections.map((collection) => (
            <motion.div key={collection.id} variants={cardVariants} className="group flex flex-col">
              
              {/* Cover Image Frame */}
              <Link href={`/shop?category=${collection.slug}`}>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 mb-6 cursor-pointer">
                  <img
                    src={collection.coverImage}
                    alt={collection.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-black/15 transition-opacity duration-500 group-hover:bg-black/25" />
                </div>
              </Link>

              {/* Title & Info Panel */}
              <div className="flex flex-col space-y-2">
                <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                  {collection.subtitle}
                </span>
                
                <h2 className="text-lg font-serif tracking-widest text-stone-900 uppercase font-light">
                  {collection.title}
                </h2>
                
                <p className="text-xs md:text-sm font-light tracking-wide text-stone-500 leading-relaxed max-w-md pb-4">
                  {collection.description}
                </p>

                <Link
                  href={`/shop?category=${collection.slug}`}
                  className="text-[10px] uppercase tracking-[0.2em] font-light text-stone-800 hover:text-stone-500 transition-colors duration-300 flex items-center"
                >
                  <span>Explore Silhouette Portfolio</span>
                </Link>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}