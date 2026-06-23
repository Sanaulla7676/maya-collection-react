"use client";

import React, { useState } from "react";
import { User, Package, MapPin, LogOut } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("orders"); // "orders" or "profile"

  // Flat states for profile fields to ensure maximum compiler stability
  const [fullName, setFullName] = useState("Sanaulla");
  const [email, setEmail] = useState("client@mayacollections.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [address, setAddress] = useState("1020 Couture Way, Manhattan");
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const mockOrders = [
    {
      id: "MYA-9801",
      date: "October 14, 2025",
      status: "Delivered",
      total: "$240.00",
      items: "Crimson Velvet Heila (Size M)",
    },
    {
      id: "MYA-9542",
      date: "September 02, 2025",
      status: "Delivered",
      total: "$195.00",
      items: "Classic Ivory Anarkali (Size S)",
    }
  ];

  return (
    <main className="relative min-h-screen bg-white pb-24">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Top Title Header */}
      <section className="pt-40 pb-16 px-6 md:px-12 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-3 font-light">
            Private Client Portal
          </span>
          <h1 className="text-2xl md:text-4xl font-serif tracking-[0.15em] text-stone-900 uppercase font-light mb-4">
            Welcome Back
          </h1>
          <div className="w-12 h-[1px] bg-stone-300" />
        </div>
      </section>

      {/* 3. Account Dashboard Grid */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sidebar Navigation (Span 3) */}
          <div className="lg:col-span-3 flex flex-col space-y-2 border-b lg:border-b-0 lg:border-r border-stone-100 pb-8 lg:pb-0 lg:pr-8">
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center space-x-3 py-3 px-4 text-xs uppercase tracking-widest font-light transition-all ${
                activeTab === "orders"
                  ? "bg-stone-50 text-stone-900 font-normal"
                  : "text-stone-400 hover:text-stone-700"
              }`}
            >
              <Package size={14} strokeWidth={1.5} />
              <span>Order History</span>
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center space-x-3 py-3 px-4 text-xs uppercase tracking-widest font-light transition-all ${
                activeTab === "profile"
                  ? "bg-stone-50 text-stone-900 font-normal"
                  : "text-stone-400 hover:text-stone-700"
              }`}
            >
              <User size={14} strokeWidth={1.5} />
              <span>Atelier Profile</span>
            </button>

            <button className="flex items-center space-x-3 py-3 px-4 text-xs uppercase tracking-widest font-light text-stone-400 hover:text-red-700 transition-colors border-t border-stone-50/50 mt-4">
              <LogOut size={14} strokeWidth={1.5} />
              <span>Sign Out</span>
            </button>
          </div>

          {/* Right Column: Tab Content Frame (Span 9) */}
          <div className="lg:col-span-9">
            
            {/* TAB 1: Order History */}
            {activeTab === "orders" && (
              <div className="flex flex-col space-y-8">
                <h2 className="text-xs uppercase tracking-[0.2em] text-stone-800 font-light border-b border-stone-100 pb-4">
                  Your Curation History
                </h2>

                <div className="flex flex-col space-y-6">
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-stone-100 bg-stone-50 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
                    >
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-xs font-mono font-light text-stone-900">
                            {order.id}
                          </span>
                          <span className="px-2 py-0.5 bg-stone-200/60 text-[9px] uppercase tracking-widest text-stone-600 font-light">
                            {order.status}
                          </span>
                        </div>
                        
                        <p className="text-xs font-serif text-stone-800 tracking-wide">
                          {order.items}
                        </p>
                        
                        <span className="text-[10px] tracking-wide text-stone-400 font-light">
                          Purchased on {order.date}
                        </span>
                      </div>

                      <div className="text-left md:text-right border-t md:border-t-0 border-stone-200/60 pt-4 md:pt-0">
                        <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-1 font-light">
                          Order Total
                        </span>
                        <span className="text-sm font-mono font-light text-stone-900 block">
                          {order.total}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: Atelier Profile Form */}
            {activeTab === "profile" && (
              <div className="flex flex-col space-y-8">
                <h2 className="text-xs uppercase tracking-[0.2em] text-stone-800 font-light border-b border-stone-100 pb-4">
                  Atelier Address & Details
                </h2>

                <form onSubmit={handleSaveProfile} className="flex flex-col space-y-6 max-w-xl">
                  <div className="flex flex-col space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                      Registered Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                      Primary Contact Number
                    </label>
                    <input
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-3 text-stone-800 text-xs tracking-wide font-light"
                    />
                  </div>

                  <div className="flex items-center space-x-4 pt-4">
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white text-[10px] uppercase tracking-[0.25em] font-light shadow-sm transition-colors duration-300"
                    >
                      {isSaved ? "Saved Successfully" : "Save Settings"}
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
          
        </div>
      </section>
    </main>
  );
}