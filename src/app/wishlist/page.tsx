"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Trash2, ShoppingBag, Heart } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import { luxuryProducts } from "../../data/products";

export default function WishlistPage() {
  // Initialize with a mock item for visual preview
  const [wishlistItems, setWishlistItems] = useState([
    luxuryProducts[3] // Midnight Silk Chanderi
  ]);

  const removeItem = (id: string) => {
    const updated = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updated);
  };

  return (
    <main className="relative min-h-screen bg-white pb-24">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Page Header Banner */}
      <section className="pt-40 pb-16 px-6 md:px-12 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-3 font-light">
            Your Curation
          </span>
          <h1 className="text-2xl md:text-4xl font-serif tracking-[0.15em] text-stone-900 uppercase font-light mb-4">
            Saved Wishlist
          </h1>
          <div className="w-12 h-[1px] bg-stone-300" />
        </div>
      </section>

      {/* 3. Empty State or Items Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        {wishlistItems.length === 0 ? (
          <div className="text-center py-24 flex flex-col items-center justify-center">
            <Heart size={28} strokeWidth={1} className="text-stone-300 mb-4" />
            <p className="text-stone-400 text-xs tracking-widest font-light uppercase mb-3">
              Your Wishlist is Empty
            </p>
            <p className="text-stone-500 text-xs font-light max-w-xs leading-relaxed mb-8">
              Keep track of your favorite bespoke pieces, silk drapes, and handcrafted suits here.
            </p>
            <Link href="/shop">
              <button className="px-8 py-3.5 border border-stone-900 text-stone-900 text-[10px] uppercase tracking-[0.25em] bg-transparent hover:bg-stone-900 hover:text-white font-light transition-all duration-400">
                Discover Pieces
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {wishlistItems.map((product) => (
              <div key={product.id} className="group flex flex-col">
                
                {/* Product Image Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-50 mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Floating Remove Button */}
                  <button
                    onClick={() => removeItem(product.id)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 text-stone-400 hover:text-red-700 transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 size={14} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Product Title and Price */}
                <div className="flex flex-col items-center text-center mb-4">
                  <h3 className="text-xs uppercase tracking-[0.18em] font-light text-stone-800 mb-1.5">
                    {product.name}
                  </h3>
                  <span className="text-xs tracking-widest text-stone-500 font-light font-mono">
                    {product.currency} ${product.price}
                  </span>
                </div>

                {/* Add to Bag CTA Button */}
                <Link href={`/product?id=${product.id}`}>
                  <button className="w-full py-3.5 border border-stone-200 hover:border-stone-900 hover:bg-stone-900 hover:text-white text-[10px] uppercase tracking-[0.2em] font-light transition-all duration-300 flex items-center justify-center space-x-1.5">
                    <ShoppingBag size={12} strokeWidth={1.5} />
                    <span>Select Size</span>
                  </button>
                </Link>

              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}