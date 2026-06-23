"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { luxuryFAQs } from "../../data/faq";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Subtly slide and fade cards on load
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col space-y-4">
        {luxuryFAQs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="border-b border-stone-200/60 pb-5 pt-1"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex justify-between items-center text-left focus:outline-none group py-2"
              >
                <span className="text-sm uppercase tracking-[0.18em] font-light text-stone-800 group-hover:text-stone-500 transition-colors duration-300">
                  {faq.question}
                </span>
                <span className="text-stone-400 pl-4">
                  {isOpen ? (
                    <Minus size={14} strokeWidth={1.5} className="transform rotate-0 transition-transform duration-300" />
                  ) : (
                    <Plus size={14} strokeWidth={1.5} className="transform rotate-90 transition-transform duration-300" />
                  )}
                </span>
              </button>

              {/* Collapsible Answer Body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs md:text-sm font-light tracking-wide text-stone-500 leading-relaxed pt-3 pr-6 pb-2">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}