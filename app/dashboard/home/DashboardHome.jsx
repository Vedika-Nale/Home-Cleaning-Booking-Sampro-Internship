"use client";

import { useEffect, useState } from "react";

export default function DashboardHome() {
  const [user, setUser] = useState(null);

  // 1. Logic to get the logged-in user
  useEffect(() => {
    try {
      const u = localStorage.getItem("user");
      if (u) setUser(JSON.parse(u));
    } catch (e) {
      setUser(null);
    }
  }, []);

  // 2. Sample data for your services
  const services = [
    { id: 1, name: "Deep Cleaning", duration: "3 Hours", price: 120 },
    { id: 2, name: "Kitchen Special", duration: "1.5 Hours", price: 45 },
    { id: 3, name: "Full House Wash", duration: "5 Hours", price: 200 },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">
          Hello{user?.username ? `, ${user.username}` : "!"}
        </h1>
        <p className="text-gray-300">Overview of your home cleaning services and bookings.</p>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl text-white">
          <p className="text-sm text-gray-400 uppercase font-bold tracking-wider">Active Bookings</p>
          <span className="text-3xl font-bold">0</span>
        </div>
        <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl text-white">
          <p className="text-sm text-gray-400 uppercase font-bold tracking-wider">Available Services</p>
          <span className="text-3xl font-bold">{services.length}</span>
        </div>
        <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl text-white">
          <p className="text-sm text-gray-400 uppercase font-bold tracking-wider">Pending Requests</p>
          <span className="text-3xl font-bold">0</span>
        </div>
      </div>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl flex flex-col transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>
              <p className="text-sm text-gray-400 mb-6">Duration: {service.duration}</p>
              
              <div className="mt-auto flex justify-between items-center">
                <span className="text-[#008751] font-bold text-2xl">${service.price}</span>
                <button className="bg-[#008751] hover:bg-[#007043] text-white px-6 py-2 rounded-lg font-bold transition-all">
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <a 
            href="/dashboard/services" 
            className="px-6 py-3 bg-[#008751] text-white rounded-xl font-bold hover:bg-[#007043] transition-all"
          >
            Manage Services
          </a>
          <a 
            href="/dashboard/bookings" 
            className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
          >
            View Bookings
          </a>
        </div>
      </section>
    </div>
  );
}