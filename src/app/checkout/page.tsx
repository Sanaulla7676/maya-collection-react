"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, ShieldCheck, CheckCircle2, ChevronLeft } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";

export default function CheckoutPage() {
  const [isOrdered, setIsOrdered] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  if (isOrdered) {
    return (
      <main className="relative min-h-screen bg-white flex flex-col items-center justify-center px-6 py-24 text-center">
        <Navbar />
        
        <div className="max-w-md flex flex-col items-center space-y-6">
          <CheckCircle2 size={48} strokeWidth={1} className="text-stone-900 animate-pulse" />
          
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-light">
            Order Complete
          </span>
          
          <h1 className="text-2xl font-serif tracking-widest text-stone-900 uppercase font-light">
            Thank You for Your Patronage
          </h1>
          
          <p className="text-xs md:text-sm font-light tracking-wide text-stone-500 leading-relaxed">
            Your custom couture order has been securely processed. A signature delivery specialist will reach out shortly with tailored tracking details.
          </p>
          
          <div className="w-8 h-[1px] bg-stone-300 my-4" />
          
          <Link href="/shop">
            <button className="px-8 py-3.5 border border-stone-900 text-stone-900 text-[10px] uppercase tracking-[0.25em] bg-transparent hover:bg-stone-900 hover:text-white font-light transition-all duration-400">
              Return to Catalog
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-white pb-24">
      <Navbar />

      <section className="pt-40 pb-16 px-6 md:px-12 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-3 font-light">
            Secure Gateway
          </span>
          <h1 className="text-2xl md:text-4xl font-serif tracking-[0.15em] text-stone-900 uppercase font-light mb-4">
            Secure Checkout
          </h1>
          <div className="w-12 h-[1px] bg-stone-300" />
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form Details (Span 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-12">
            
            {/* Contact Details */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-stone-800 font-light border-b border-stone-100 pb-3">
                01. Client Information
              </h2>
              <div className="flex flex-col space-y-1">
                <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                  Email Address for Delivery Updates
                </label>
                <input
                  type="email"
                  required
                  className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                  placeholder="name@email.com"
                />
              </div>
            </div>

            {/* Shipping Details */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-stone-800 font-light border-b border-stone-100 pb-3">
                02. Express Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                    placeholder="Enter first name"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                  Street Address
                </label>
                <input
                  type="text"
                  required
                  className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                  placeholder="Suite, apartment, street address"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                    placeholder="Enter city"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                    Zip / Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                    placeholder="E.g., 10001"
                  />
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-stone-800 font-light border-b border-stone-100 pb-3">
                03. Secure Payment Details
              </h2>
              <div className="flex flex-col space-y-1">
                <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                  Credit Card Number
                </label>
                <input
                  type="text"
                  required
                  className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                  placeholder="0000 0000 0000 0000"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    required
                    className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                    placeholder="MM / YY"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                    CVV
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    required
                    className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Payment Side Panel (Span 5) */}
          <div className="lg:col-span-5 bg-stone-50 border border-stone-100 p-8 flex flex-col space-y-6">
            <h2 className="text-xs uppercase tracking-[0.2em] text-stone-800 font-light border-b border-stone-200/60 pb-4 flex items-center justify-between">
              <span>Payment Summary</span>
              <span className="flex items-center space-x-1 text-stone-400 text-[10px] lowercase font-light">
                <Lock size={12} />
                <span>encrypted</span>
              </span>
            </h2>

            <div className="flex flex-col space-y-3.5 border-b border-stone-200/60 pb-6 text-xs text-stone-500 font-light tracking-wide">
              <div className="flex justify-between items-center">
                <span>Insured Courier Shipping</span>
                <span className="text-stone-800 uppercase text-[10px] tracking-widest font-normal">Complimentary</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Tailor Wrapping & Packaging</span>
                <span className="text-stone-800 uppercase text-[10px] tracking-widest font-normal">Complimentary</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white text-[10px] uppercase tracking-[0.25em] font-light shadow-sm transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Place Insured Order</span>
            </button>

            <Link href="/cart" className="flex items-center justify-center space-x-1.5 text-stone-400 hover:text-stone-700 text-[10px] uppercase tracking-[0.2em] font-light transition-colors py-2">
              <ChevronLeft size={12} />
              <span>Back to Shopping Bag</span>
            </Link>

            <div className="flex items-center space-x-2 border-t border-stone-200/60 pt-6 text-stone-400">
              <ShieldCheck size={16} strokeWidth={1.5} className="flex-shrink-0" />
              <span className="text-[10px] tracking-wide font-light leading-relaxed">
                Insured express delivery requires signature upon arrival. Standard delivery guarantees full transit coverage.
              </span>
            </div>
          </div>

        </form>
      </section>
    </main>
  );
}