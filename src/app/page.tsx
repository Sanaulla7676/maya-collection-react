"use client";

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ReelWall from "../components/ReelWall/ReelWall";
import ProductGrid from "../components/ProductGrid/ProductGrid";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      {/* 1. Floating Header Navigation */}
      <Navbar />

      {/* 2. Full-Screen Cinematic Video Hero */}
      <Hero />

      {/* 3. High-End Editorial Reels Lookbook */}
      <ReelWall />

      {/* 4. Curated Premium Product Showcase */}
      <ProductGrid title="Featured Collection" limit={4} />

      {/* 5. Elegant Minimal Divider */}
      <div className="w-full h-[1px] bg-stone-100 max-w-7xl mx-auto mb-20" />
    </main>
  );
}