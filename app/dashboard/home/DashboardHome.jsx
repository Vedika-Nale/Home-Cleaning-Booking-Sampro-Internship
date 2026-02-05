"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

  // 2. Sample data for your services (Indian Pricing)
  const services = [
    { id: 1, name: "Deep Cleaning (Full Home)", duration: "6 Hours", price: 4999 },
    { id: 2, name: "Kitchen Deep Clean", duration: "3 Hours", price: 1499 },
    { id: 3, name: "Bathroom Cleaning", duration: "1.5 Hours", price: 899 },
    { id: 4, name: "Sofa Cleaning (5 Seater)", duration: "2 Hours", price: 1299 },
  ];

  // 3. Recent Activity Mock Data
  const recentBookings = [
    { id: 101, customer: "Amit Sharma", service: "Deep Cleaning", amount: 4999, status: "Completed", date: "04 Feb" },
    { id: 102, customer: "Priya Patel", service: "Kitchen Clean", amount: 1499, status: "Pending", date: "04 Feb" },
    { id: 103, customer: "Rajesh Gaikwad", service: "Sofa Cleaning", amount: 1299, status: "Confirmed", date: "05 Feb" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <header className="mb-8 pr-20"> {/* pr-20 to clear logo */}
        <h1 className="text-4xl font-bold text-green-800 dark:text-green-700 mb-2">
          Hello{user?.username ? `, ${user.username}` : "!"}
        </h1>
        <p className="text-gray-600">Here's what's happening in Pune today.</p>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="p-6 bg-white dark:bg-white border-l-4 border-green-500 rounded-lg shadow-md">
          <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Total Revenue</p>
          <span className="text-3xl font-bold text-gray-800">₹45,200</span>
          <p className="text-xs text-green-600 mt-1">+12% from last month</p>
        </div>
        <div className="p-6 bg-white dark:bg-white border-l-4 border-blue-500 rounded-lg shadow-md">
          <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Active Bookings</p>
          <span className="text-3xl font-bold text-gray-800">12</span>
          <p className="text-xs text-gray-500 mt-1">3 pending confirmation</p>
        </div>
        <div className="p-6 bg-white dark:bg-white border-l-4 border-purple-500 rounded-lg shadow-md">
          <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Total Customers</p>
          <span className="text-3xl font-bold text-gray-800">156</span>
          <p className="text-xs text-green-600 mt-1">+5 new this week</p>
        </div>
        <div className="p-6 bg-white dark:bg-white border-l-4 border-yellow-500 rounded-lg shadow-md">
          <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Services Active</p>
          <span className="text-3xl font-bold text-gray-800">{services.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Recent Bookings List */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-green-800 dark:text-green-700 mb-4">Recent Bookings</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Customer</th>
                  <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Service</th>
                  <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Amount</th>
                  <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <p className="font-semibold text-gray-800">{booking.customer}</p>
                      <p className="text-xs text-gray-500">{booking.date}</p>
                    </td>
                    <td className="p-4 text-gray-600">{booking.service}</td>
                    <td className="p-4 font-medium text-gray-800">₹{booking.amount}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${booking.status === 'Completed' ? 'bg-green-100 text-green-700' :
                          booking.status === 'Confirmed' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                        }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-4 border-t border-gray-100 text-center">
              <Link href="/dashboard/bookings" className="text-green-600 font-semibold hover:underline text-sm">View All Bookings</Link>
            </div>
          </div>
        </div>

        {/* Services List / Quick Actions */}
        <div>
          <h2 className="text-xl font-bold text-green-800 dark:text-green-700 mb-4">Top Services</h2>
          <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
            {services.slice(0, 3).map(service => (
              <div key={service.id} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition-all">
                <div>
                  <h3 className="font-bold text-gray-800">{service.name}</h3>
                  <p className="text-xs text-gray-500">{service.duration}</p>
                </div>
                <span className="font-bold text-green-700">₹{service.price}</span>
              </div>
            ))}
            <Link href="/dashboard/services" className="block w-full py-2 text-center text-green-600 font-bold border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
              Manage Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}