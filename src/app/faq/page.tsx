"use client";

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FAQAccordion from "../../components/FAQ/FAQAccordion";
import Link from "next/link";

export default function FAQPage() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden pb-24">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Top Minimal Title */}
      <section className="pt-40 pb-16 px-6 md:px-12 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-3 font-light">
            Customer Atelier
          </span>
          <h1 className="text-2xl md:text-4xl font-serif tracking-[0.15em] text-stone-900 uppercase font-light mb-4">
            Assistance & Faq
          </h1>
          <div className="w-12 h-[1px] bg-stone-300" />
        </div>
      </section>

      {/* 3. Interactive Accordions List */}
      <section className="py-20 px-6 md:px-12">
        <FAQAccordion />
      </section>

      {/* 4. Luxury Design Concierge CTA Banner */}
      <section className="max-w-3xl mx-auto px-6 text-center mt-12">
        <div className="bg-stone-50 border border-stone-100 p-8 md:p-12 flex flex-col items-center">
          <h3 className="text-xs uppercase tracking-[0.25em] text-stone-800 font-light mb-3">
            Bespoke Concierge Assistance
          </h3>
          <p className="text-[11px] md:text-xs font-light tracking-wide text-stone-500 max-w-md leading-relaxed mb-8">
            Can't find your answers or looking to place a custom boutique order? Our digital design atelier is available to assist you.
          </p>
          <Link href="/contact">
            <button className="px-6 py-3 border border-stone-300 hover:bg-stone-900 hover:text-white hover:border-stone-900 text-stone-700 text-[10px] uppercase tracking-[0.2em] bg-transparent font-light transition-all duration-400">
              Contact Concierge
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}