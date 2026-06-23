"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ShieldCheck, ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import { luxuryProducts } from "../../data/products";

export default function CartPage() {
  // Initialize cart with mock items for a luxury preview
  const [cartItems, setCartItems] = useState([
    {
      product: luxuryProducts[0], // Crimson Velvet Heila
      size: "M",
      quantity: 1,
    },
    {
      product: luxuryProducts[1], // Classic Ivory Anarkali
      size: "S",
      quantity: 1,
    }
  ]);

  const updateQuantity = (index: number, change: number) => {
    const updated = [...cartItems];
    const newQuantity = updated[index].quantity + change;
    if (newQuantity > 0) {
      updated[index].quantity = newQuantity;
      setCartItems(updated);
    }
  };

  const removeItem = (index: number) => {
    const updated = cartItems.filter((_, idx) => idx !== index);
    setCartItems(updated);
  };

  // Calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = "Complimentary";
  const taxes = Math.round(subtotal * 0.08); // 8% mock tax
  const total = subtotal + taxes;

  return (
    <main className="relative min-h-screen bg-white pb-24">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Page Header Banner */}
      <section className="pt-40 pb-16 px-6 md:px-12 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-3 font-light">
            Your Selection
          </span>
          <h1 className="text-2xl md:text-4xl font-serif tracking-[0.15em] text-stone-900 uppercase font-light mb-4">
            Shopping Bag
          </h1>
          <div className="w-12 h-[1px] bg-stone-300" />
        </div>
      </section>

      {/* 3. Empty State or Cart Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        {cartItems.length === 0 ? (
          <div className="text-center py-24 flex flex-col items-center justify-center">
            <p className="text-stone-400 text-xs tracking-widest font-light uppercase mb-3">
              Your Bag is Empty
            </p>
            <p className="text-stone-500 text-xs font-light max-w-xs leading-relaxed mb-8">
              Explore our latest tailoring silhouettes, handcrafted looks, and seasonal lookbooks.
            </p>
            <Link href="/shop">
              <button className="px-8 py-3.5 border border-stone-900 text-stone-900 text-[10px] uppercase tracking-[0.25em] bg-transparent hover:bg-stone-900 hover:text-white font-light transition-all duration-400">
                Discover Pieces
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Items List (Span 7) */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              {cartItems.map((item, idx) => (
                <div
                  key={`${item.product.id}-${idx}`}
                  className="flex space-x-6 pb-8 border-b border-stone-100 last:border-0"
                >
                  {/* Item Image */}
                  <div className="aspect-[3/4] w-24 md:w-32 bg-stone-50 overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div className="flex flex-col space-y-1.5">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xs md:text-sm uppercase tracking-[0.15em] text-stone-800 font-light pr-4">
                          {item.product.name}
                        </h3>
                        <span className="text-xs md:text-sm tracking-widest text-stone-900 font-mono font-light">
                          ${item.product.price}
                        </span>
                      </div>
                      
                      <span className="text-[10px] uppercase tracking-widest text-stone-400 font-light">
                        Size: {item.size}
                      </span>
                    </div>

                    {/* Quantity Controls and Remove Button */}
                    <div className="flex items-center justify-between pt-4">
                      {/* Plus/Minus */}
                      <div className="flex items-center border border-stone-200">
                        <button
                          onClick={() => updateQuantity(idx, -1)}
                          className="p-2 text-stone-500 hover:text-stone-900 focus:outline-none"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="px-4 text-xs font-mono font-light text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(idx, 1)}
                          className="p-2 text-stone-500 hover:text-stone-900 focus:outline-none"
                        >
                          <Plus size={10} />
                        </button>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => removeItem(idx)}
                        className="text-stone-400 hover:text-red-700 p-2 transition-colors duration-200 flex items-center space-x-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                        <span className="text-[9px] uppercase tracking-widest font-light hidden sm:inline">
                          Remove
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Order Summary (Span 5) */}
            <div className="lg:col-span-5 bg-stone-50 border border-stone-100 p-8 flex flex-col space-y-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-stone-800 font-light border-b border-stone-200/60 pb-4">
                Order Summary
              </h2>

              <div className="flex flex-col space-y-3.5 border-b border-stone-200/60 pb-6">
                {/* Subtotal */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500 font-light tracking-wide">Subtotal</span>
                  <span className="text-stone-800 font-mono font-light">${subtotal}</span>
                </div>

                {/* Delivery */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500 font-light tracking-wide">Express Delivery</span>
                  <span className="text-stone-800 tracking-wider font-light uppercase text-[10px]">
                    {shipping}
                  </span>
                </div>

                {/* Taxes */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500 font-light tracking-wide">Estimated Taxes</span>
                  <span className="text-stone-800 font-mono font-light">${taxes}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pb-2">
                <span className="text-xs uppercase tracking-[0.2em] text-stone-800 font-light">
                  Estimated Total
                </span>
                <span className="text-base font-mono font-light text-stone-900">
                  ${total}
                </span>
              </div>

              {/* Checkout CTA */}
              <Link href="/checkout">
                <button className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white text-[10px] uppercase tracking-[0.25em] font-light shadow-sm transition-colors duration-300 flex items-center justify-center space-x-1">
                  <span>Proceed to Checkout</span>
                  <ChevronRight size={14} />
                </button>
              </Link>

              {/* Luxury Guarantee Line */}
              <div className="flex items-center space-x-2 border-t border-stone-200/60 pt-6 text-stone-400">
                <ShieldCheck size={16} strokeWidth={1.5} className="flex-shrink-0" />
                <span className="text-[10px] tracking-wide font-light leading-relaxed">
                  Complimentary luxury box packaging and insured signature courier delivery.
                </span>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}