"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Product } from "../../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Use second image on hover if available
  const displayImage =
    product.images.length > 1 && isHovered ? product.images[1] : product.images[0];

  return (
    <Link href={`/product?id=${product.id}`} className="group block">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 mb-4"
      >
        {/* Main Product Image with elegant crossfade on hover */}
        <motion.img
          src={displayImage}
          alt={product.name}
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.03 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full object-cover object-center transition-all duration-500"
        />

        {/* Dynamic Badges (e.g. Sold Out) */}
        {!product.inStock && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[9px] uppercase tracking-widest text-stone-500 font-light">
            Sold Out
          </span>
        )}

        {/* Quick View Floating Detail */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex justify-center bg-gradient-to-t from-black/25 to-transparent">
          <span className="bg-white/95 backdrop-blur-sm text-stone-900 text-[9px] uppercase tracking-[0.25em] font-light py-2 px-6 shadow-sm">
            Quick View
          </span>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-xs uppercase tracking-[0.18em] font-light text-stone-800 group-hover:text-stone-500 transition-colors mb-1.5">
          {product.name}
        </h3>
        <span className="text-xs tracking-widest text-stone-500 font-light font-mono">
          {product.currency} ${product.price}
        </span>
      </div>
    </Link>
  );
}