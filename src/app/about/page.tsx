"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";

export default function AboutPage() {
  const elementVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="relative min-h-screen bg-white pb-24">
      <Navbar />

      <section className="pt-40 pb-20 px-6 md:px-12 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-3 font-light">
            {"The Atelier"}
          </span>
          <h1 className="text-2xl md:text-4xl font-serif tracking-[0.15em] text-stone-900 uppercase font-light mb-4">
            {"Our Story and Heritage"}
          </h1>
          <div className="w-12 h-[1px] bg-stone-300" />
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[3/4] bg-stone-100 overflow-hidden"
        >
          <img
            src="/images/founders/foundes.jpeg"
            alt="The Maya Atelier"
            className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-750"
          />
        </motion.div>

        <motion.div
          variants={elementVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-6"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">
            {"Philosophy"}
          </span>
          <h2 className="text-xl md:text-2xl font-serif tracking-wider text-stone-900 uppercase font-light">
            {"Bespoke Craftsmanship"}
          </h2>
          <p className="text-xs md:text-sm font-light tracking-wide text-stone-500 leading-relaxed">
            {`Founded with a vision to merge heritage South Asian textile traditions with the modern, structural lines of contemporary fashion, Maya is a study in quiet sophistication.`}
          </p>
          <p className="text-xs md:text-sm font-light tracking-wide text-stone-500 leading-relaxed">
            {`Every garment begins its journey as an intricate sketch before being handed down to our master artisans, who devote countless hours to tilla threadwork, selecting luxurious velvets, and hand-dyeing silks to perfection.`}
          </p>
          <div className="pt-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-serif text-stone-800 block">
              {"Maya Studio"}
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-stone-400 font-light block">
              {"Established 2023"}
            </span>
          </div>
        </motion.div>
      </section>

      <section className="bg-stone-50 border-y border-stone-100 py-24 px-6 text-center">
        <motion.div
          variants={elementVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <p className="text-lg md:text-2xl font-serif tracking-wide text-stone-800 leading-relaxed italic mb-6">
            {`"Design is not simply about being noticed, but being remembered for the elegance you move with."`}
          </p>
          <div className="w-6 h-[1px] bg-stone-400 mb-3" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-light">
            {"The Creative Director"}
          </span>
        </motion.div>
      </section>
    </main>
  );
}