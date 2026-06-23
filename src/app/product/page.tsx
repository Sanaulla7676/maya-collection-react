"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, Ruler, ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import { luxuryProducts } from "../../data/products";

function ProductDetailContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  // Find the requested product, default to the first one if none or invalid
  const product = luxuryProducts.find((p) => p.id === productId) || luxuryProducts[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="text-center py-32 flex flex-col items-center">
        <p className="text-stone-400 text-xs tracking-widest font-light uppercase mb-2">
          Silhouette Not Found
        </p>
      </div>
    );
  }

  const sizes = ["S", "M", "L", "XL", "Custom Sizing"];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size to proceed.");
      return;
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Interactive Image Gallery (Span 7) */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4 items-start">
          {/* Vertical Thumbnails (Span 2) */}
          <div className="col-span-2 flex flex-col space-y-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`aspect-[3/4] w-full overflow-hidden bg-stone-50 border transition-colors ${
                  activeImageIndex === idx ? "border-stone-900" : "border-transparent"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Large Main Feature Preview (Span 10) */}
          <div className="col-span-10 aspect-[3/4] w-full overflow-hidden bg-stone-50 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageIndex}
                src={product.images[activeImageIndex]}
                alt={product.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Luxury Settings Panel (Span 5) */}
        <div className="lg:col-span-5 flex flex-col space-y-8 lg:pl-4">
          {/* Header & Price */}
          <div className="flex flex-col space-y-3 border-b border-stone-100 pb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-light">
              {product.category.replace("-", " ")}
            </span>
            <h1 className="text-xl md:text-2xl font-serif tracking-widest text-stone-900 uppercase font-light">
              {product.name}
            </h1>
            <span className="text-sm tracking-widest text-stone-700 font-mono font-light">
              {product.currency} ${product.price}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm font-light tracking-wide text-stone-500 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selector */}
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-center text-stone-400">
              <span className="text-[9px] uppercase tracking-[0.2em] font-light">
                Select Size
              </span>
              <button className="flex items-center space-x-1 text-[9px] uppercase tracking-[0.2em] hover:text-stone-800 transition-colors font-light">
                <Ruler size={12} strokeWidth={1.5} />
                <span>Size Guide</span>
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2.5 border text-[10px] uppercase tracking-widest font-light transition-all duration-300 ${
                      isSelected
                        ? "border-stone-900 bg-stone-900 text-white"
                        : "border-stone-200 hover:border-stone-400 text-stone-600"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add to Bag and Wishlist Controls */}
          <div className="flex flex-col space-y-3 pt-4">
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-stone-900 text-white hover:bg-stone-800 text-[10px] uppercase tracking-[0.25em] font-light shadow-sm transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              <span>{isAdded ? "Added to Atelier Bag" : "Add to Atelier Bag"}</span>
            </button>

            <button className="w-full py-4 border border-stone-200 hover:border-stone-400 text-stone-700 hover:text-stone-900 text-[10px] uppercase tracking-[0.25em] font-light transition-colors duration-300 flex items-center justify-center space-x-2">
              <Heart size={14} strokeWidth={1.5} />
              <span>Save to Wishlist</span>
            </button>
          </div>

          {/* Artisan Specifications */}
          <div className="border-t border-stone-100 pt-6 flex flex-col space-y-4">
            <span className="text-[9px] uppercase tracking-[0.2em] text-stone-400 font-light">
              Craft Details & Care
            </span>
            <ul className="flex flex-col space-y-2">
              {product.details.map((detail, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-stone-500 text-xs font-light tracking-wide leading-relaxed">
                  <ChevronRight size={12} className="text-stone-300 mt-1 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <main className="relative min-h-screen bg-white pb-24">
      {/* 1. Header Navigation */}
      <Navbar />

      <div className="h-24" />

      {/* 2. Interactive Showroom Layout wrapped in Suspense */}
      <Suspense
        fallback={(
          <div className="text-center py-48 flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 animate-pulse">
              Loading Atelier Showroom...
            </span>
          </div>
        )}
      >
        <ProductDetailContent />
      </Suspense>
    </main>
  );
}