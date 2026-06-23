"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { luxuryProducts } from "../../data/products";
import ProductCard from "./ProductSingleCard";

interface ProductGridProps {
  title?: string;
  category?: string;
  limit?: number;
}

export default function ProductGrid(props: ProductGridProps) {
  const title = props.title || "The Season's Finest";
  const category = props.category;
  const limit = props.limit;

  // Filter products by category if provided, and limit output
  const filteredProducts = category
    ? luxuryProducts.filter((p) => p.category === category)
    : luxuryProducts;

  const displayProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  // Staggered entry animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title Block */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-3 font-light">
            Selected Pieces
          </span>
          <h2 className="text-xl md:text-2xl font-serif tracking-widest text-stone-900 uppercase font-light">
            {title}
          </h2>
          <div className="w-8 h-[1px] bg-stone-300 mt-4" />
        </div>

        {/* Dynamic Responsive Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
        >
          {displayProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}