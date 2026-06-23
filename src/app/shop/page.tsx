"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import { luxuryProducts } from "../../data/products";
import ProductCard from "../../components/ProductGrid/ProductSingleCard";

function ShopCatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get category from URL search params (e.g., /shop?category=pakistani-suits)
  const currentCategory = searchParams.get("category") || "all";

  const handleCategoryChange = (categorySlug: string) => {
    if (categorySlug === "all") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${categorySlug}`);
    }
  };

  // Filter our products array
  const filteredProducts = currentCategory === "all"
    ? luxuryProducts
    : luxuryProducts.filter((p) => p.category === currentCategory);

  const categories = [
    { label: "All Pieces", slug: "all" },
    { label: "Pakistani Suits", slug: "pakistani-suits" },
    { label: "Ethnic Wear", slug: "ethnic-wear" },
    { label: "Casual Wear", slug: "casual-wear" },
    { label: "Party Wear", slug: "party-wear" },
  ];

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Horizontal Category Selector */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 border-b border-stone-100 pb-8 mb-16">
        {categories.map((cat) => {
          const isActive = currentCategory === cat.slug;
          return (
            <button
              key={cat.slug}
              onClick={() => handleCategoryChange(cat.slug)}
              className={`text-[10px] md:text-xs uppercase tracking-[0.2em] pb-2 transition-all relative ${
                isActive ? "text-stone-900 font-normal" : "text-stone-400 hover:text-stone-600 font-light"
              }`}
            >
              {cat.label}
              {isActive && (
                <motion.div
                  layoutId="activeCategoryBorder"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-stone-900"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Dynamic Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 flex flex-col items-center">
          <p className="text-stone-400 text-xs tracking-widest font-light uppercase mb-2">
            No Silhouettes Found
          </p>
          <p className="text-stone-500 text-xs font-light max-w-xs leading-relaxed">
            Please select another collection or check back soon for our fresh seasonal drops.
          </p>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <main className="relative min-h-screen bg-white pb-24">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Page Banner Header */}
      <section className="pt-40 pb-16 px-6 md:px-12 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-3 font-light">
            Maya Collections
          </span>
          <h1 className="text-2xl md:text-4xl font-serif tracking-[0.15em] text-stone-900 uppercase font-light mb-4">
            The Shop Catalog
          </h1>
          <div className="w-12 h-[1px] bg-stone-300" />
        </div>
      </section>

      {/* 3. Catalog content wrapped in Suspense to prevent compilation errors */}
      <Suspense
        fallback={
          <div className="text-center py-32 flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 animate-pulse">
              Loading Atelier...
            </span>
          </div>
        }
      >
        <ShopCatalogContent />
      </Suspense>
    </main>
  );
}