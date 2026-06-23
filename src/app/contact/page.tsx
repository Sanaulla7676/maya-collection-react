"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="relative min-h-screen bg-white pb-24">
      <Navbar />

      <section className="pt-40 pb-20 px-6 md:px-12 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-3 font-light">
            Atelier Care
          </span>
          <h1 className="text-2xl md:text-4xl font-serif tracking-[0.15em] text-stone-900 uppercase font-light mb-4">
            Contact Concierge
          </h1>
          <div className="w-12 h-[1px] bg-stone-300" />
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-12"
          >
            <motion.div variants={itemVariants} className="flex flex-col space-y-3">
              <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">
                Digital Atelier
              </span>
              <h2 className="text-lg font-serif tracking-widest text-stone-900 uppercase font-light">
                Client Services
              </h2>
              <p className="text-xs md:text-sm font-light tracking-wide text-stone-500 leading-relaxed">
                For all general inquiries, order modifications, or tracking assistance, our team is available Monday through Friday.
              </p>
              <span className="text-xs tracking-widest text-stone-800 font-light mt-2">
                concierge@mayacollections.com
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col space-y-3">
              <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">
                Bespoke Orders
              </span>
              <h2 className="text-lg font-serif tracking-widest text-stone-900 uppercase font-light">
                Private Appointments
              </h2>
              <p className="text-xs md:text-sm font-light tracking-wide text-stone-500 leading-relaxed">
                To request bespoke sizing, customized embroidery consultations, or private atelier fittings, please arrange an appointment with our design specialists.
              </p>
              <span className="text-xs tracking-widest text-stone-800 font-light mt-2">
                appointments@mayacollections.com
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            {isSubmitted ? (
              <div className="border border-stone-200 p-8 text-center flex flex-col items-center justify-center h-full min-h-[350px]">
                <span className="text-stone-900 text-xs uppercase tracking-[0.3em] mb-4 font-light">
                  Message Received
                </span>
                <p className="text-stone-500 text-xs font-light tracking-wide leading-relaxed max-w-xs">
                  Thank you for contacting our design atelier. A private client advisor will review your request and get in touch within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                    Subject / Inquiry Type
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                    placeholder="E.g., Bespoke Sizing, General Inquiry"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light resize-none"
                    placeholder="Describe how we may assist you"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-stone-900 text-white hover:bg-stone-800 transition-colors duration-300 text-[10px] uppercase tracking-[0.25em] font-light shadow-sm"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}