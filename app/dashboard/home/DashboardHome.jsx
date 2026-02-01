"use client";

import { useEffect, useState } from "react";

export default function DashboardHome() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const u = localStorage.getItem("user");
      if (u) setUser(JSON.parse(u));
    } catch (e) {
      setUser(null);
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Hello{user?.username ? `, ${user.username}` : "!"}</h1>
      <p className="text-gray-600 mb-6">Overview of your home cleaning services and bookings.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow !text-black">Active Bookings<br/><span className="text-2xl font-bold">0</span></div>
        <div className="p-4 bg-white rounded shadow !text-black">Available Services<br/><span className="text-2xl font-bold">0</span></div>
        <div className="p-4 bg-white rounded shadow !text-black">Pending Requests<br/><span className="text-2xl font-bold">0</span></div>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Quick actions</h2>
        <div className="flex gap-3">
          <a href="/dashboard/services" className="px-4 py-2 bg-[#008751] text-white rounded">Book Services</a>
          <a href="/dashboard/bookings" className="px-4 py-2 bg-gray-200 rounded !text-black">View Bookings</a>
        </div>
      </section>
    </div>
  );
}
