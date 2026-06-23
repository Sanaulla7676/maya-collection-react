"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { navigationLinks } from "../../data/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-stone-100 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left Side: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationLinks.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`text-xs uppercase tracking-[0.2em] font-light transition-colors duration-300 ${
                  isScrolled ? "text-stone-800 hover:text-stone-500" : "text-stone-900 hover:text-stone-600"
                }`}
              >
                {item.label}
              </Link>

              {/* Sub-menu Dropdown */}
              <AnimatePresence>
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-0 mt-4 w-48 bg-white/95 backdrop-blur-md border border-stone-100 shadow-lg py-3 flex flex-col z-50"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="px-6 py-2 text-[10px] uppercase tracking-[0.15em] text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Icon (Left side on mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-stone-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>

        {/* Center: Brand Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="block">
            <span className="text-xl md:text-2xl font-serif tracking-[0.3em] uppercase text-stone-900">
              MAYA
            </span>
          </Link>
        </div>

        {/* Right Side: Utility Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="text-stone-900 hover:opacity-60 transition-opacity" aria-label="Search">
            <Search size={18} strokeWidth={1.25} />
          </button>
          
          <Link href="/account" className="text-stone-900 hover:opacity-60 transition-opacity" aria-label="Account">
            <User size={18} strokeWidth={1.25} />
          </Link>

          <Link href="/wishlist" className="relative text-stone-900 hover:opacity-60 transition-opacity" aria-label="Wishlist">
            <Heart size={18} strokeWidth={1.25} />
          </Link>

          <Link href="/cart" className="relative text-stone-900 hover:opacity-60 transition-opacity" aria-label="Shopping Cart">
            <ShoppingBag size={18} strokeWidth={1.25} />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}