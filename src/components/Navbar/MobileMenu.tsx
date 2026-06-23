"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { X } from "lucide-react";
import { navigationLinks } from "../../data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  // Type-safe animation variants for the container
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  // Type-safe animation variants for individual links
  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-white z-50 flex flex-col justify-between px-8 py-8 md:px-12 md:py-12"
    >
      {/* Header section of mobile menu */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-serif tracking-[0.3em] uppercase text-stone-900">
          MAYA
        </span>
        <button
          onClick={onClose}
          className="text-stone-900 p-2 focus:outline-none"
          aria-label="Close Menu"
        >
          <X size={24} strokeWidth={1.25} />
        </button>
      </div>

      {/* Main navigation list */}
      <nav className="flex flex-col space-y-6 my-auto">
        {navigationLinks.map((item) => (
          <motion.div key={item.label} variants={linkVariants}>
            <Link
              href={item.href}
              onClick={onClose}
              className="text-2xl uppercase tracking-[0.2em] font-light text-stone-800 hover:text-stone-500 transition-colors block"
            >
              {item.label}
            </Link>
            
            {/* Show category sublinks if they exist */}
            {item.children && (
              <div className="pl-4 mt-2 flex flex-col space-y-2 border-l border-stone-100">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={onClose}
                    className="text-xs uppercase tracking-[0.15em] text-stone-500 hover:text-stone-900 transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </nav>

      {/* Footer section of mobile menu */}
      <motion.div
        variants={linkVariants}
        className="border-t border-stone-100 pt-8 flex flex-col space-y-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
          Exclusive Collections
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
          © {new Date().getFullYear()} Maya Collection
        </span>
      </motion.div>
    </motion.div>
  );
}