"use client";

import React, { useState } from "react";
import { Package, DollarSign, Clock, CheckCircle2 } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";

export default function AdminPage() {
  // Local mock orders state for live management
  const [orders, setOrders] = useState([
    {
      id: "MYA-9803",
      client: "Sarah Khan",
      items: "Crimson Velvet Heila (Size M)",
      value: "$240",
      status: "In Tailoring Studio",
    },
    {
      id: "MYA-9802",
      client: "Amara Ahmed",
      items: "Midnight Silk Chanderi (Size S)",
      value: "$280",
      status: "In Tailoring Studio",
    },
    {
      id: "MYA-9801",
      client: "Zara Malik",
      items: "Classic Ivory Anarkali (Size L)",
      value: "$195",
      status: "Delivered",
    }
  ]);

  const handleCompleteOrder = (id: string) => {
    const updated = orders.map((order) => {
      if (order.id === id) {
        return { ...order, status: "Delivered" };
      }
      return order;
    });
    setOrders(updated);
  };

  return (
    <main className="relative min-h-screen bg-white pb-24">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Page Header Banner */}
      <section className="pt-40 pb-16 px-6 md:px-12 bg-stone-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-3 font-light">
            Atelier Management Suite
          </span>
          <h1 className="text-2xl md:text-4xl font-serif tracking-[0.15em] text-stone-900 uppercase font-light mb-4">
            Admin Dashboard
          </h1>
          <div className="w-12 h-[1px] bg-stone-300" />
        </div>
      </section>

      {/* 3. Analytics Overview Cards */}
      <section className="pt-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Revenue */}
          <div className="border border-stone-100 bg-stone-50 p-6 md:p-8 flex items-center justify-between">
            <div className="flex flex-col space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-light">
                Monthly Couture Revenue
              </span>
              <span className="text-xl font-mono font-light text-stone-900">
                $12,450
              </span>
            </div>
            <div className="p-3 bg-white/80 border border-stone-100 text-stone-800">
              <DollarSign size={18} strokeWidth={1.5} />
            </div>
          </div>

          {/* Card 2: Active Orders */}
          <div className="border border-stone-100 bg-stone-50 p-6 md:p-8 flex items-center justify-between">
            <div className="flex flex-col space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-light">
                Bespoke In Tailoring
              </span>
              <span className="text-xl font-mono font-light text-stone-900">
                2 Silhouettes
              </span>
            </div>
            <div className="p-3 bg-white/80 border border-stone-100 text-stone-800">
              <Clock size={18} strokeWidth={1.5} />
            </div>
          </div>

          {/* Card 3: Delivered */}
          <div className="border border-stone-100 bg-stone-50 p-6 md:p-8 flex items-center justify-between">
            <div className="flex flex-col space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-light">
                Insured Deliveries Done
              </span>
              <span className="text-xl font-mono font-light text-stone-900">
                24 Completed
              </span>
            </div>
            <div className="p-3 bg-white/80 border border-stone-100 text-stone-800">
              <Package size={18} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Active Orders Management Table */}
      <section className="pt-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="border border-stone-100 bg-white p-6 md:p-8 flex flex-col space-y-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-stone-800 font-light border-b border-stone-100 pb-4">
            Recent Client Orders
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-100 text-[10px] uppercase tracking-wider text-stone-400 font-light">
                  <th className="pb-4 pr-4">Order ID</th>
                  <th className="pb-4 pr-4">Client</th>
                  <th className="pb-4 pr-4">Selected Items</th>
                  <th className="pb-4 pr-4">Value</th>
                  <th className="pb-4 pr-4">Studio Status</th>
                  <th className="pb-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50 text-xs font-light tracking-wide text-stone-600">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-stone-50/40">
                    <td className="py-4 pr-4 font-mono font-light text-stone-900">{order.id}</td>
                    <td className="py-4 pr-4">{order.client}</td>
                    <td className="py-4 pr-4 font-serif text-stone-800">{order.items}</td>
                    <td className="py-4 pr-4 font-mono">{order.value}</td>
                    <td className="py-4 pr-4">
                      <span className={`px-2 py-0.5 text-[9px] uppercase tracking-widest font-light ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : "bg-amber-100 text-amber-800"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      {order.status !== "Delivered" ? (
                        <button
                          onClick={() => handleCompleteOrder(order.id)}
                          className="px-3 py-1.5 border border-stone-300 text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 text-[9px] uppercase tracking-wider font-light transition-all duration-300"
                        >
                          Mark Completed
                        </button>
                      ) : (
                        <span className="text-stone-400 text-[9px] uppercase tracking-wider font-light flex items-center justify-end space-x-1 py-1.5">
                          <CheckCircle2 size={12} className="text-green-600" />
                          <span>Delivered</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}