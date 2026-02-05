"use client";

import { useState } from "react";

export default function BookingsPage() {
  const [filter, setFilter] = useState("All");

  const bookings = [
    { id: 1, customer: "Amit Sharma", service: "Deep Cleaning (Full Home)", date: "04 Feb 2026", time: "10:00 AM", amount: 4999, status: "Completed", address: "Flat 4, Koregaon Park, Pune" },
    { id: 2, customer: "Priya Patel", service: "Kitchen Deep Clean", date: "04 Feb 2026", time: "02:00 PM", amount: 1499, status: "Pending", address: "102, Bandra West, Mumbai" },
    { id: 3, customer: "Rajesh Gaikwad", service: "Sofa Cleaning", date: "05 Feb 2026", time: "11:00 AM", amount: 1299, status: "Confirmed", address: "Sector 17, Vashi, Navi Mumbai" },
    { id: 4, customer: "Suresh Iyer", service: "Bathroom Cleaning", date: "06 Feb 2026", time: "09:00 AM", amount: 899, status: "Cancelled", address: "A-504, Hinjewadi, Pune" },
    { id: 5, customer: "Neha Gupta", service: "Deep Cleaning (Full Home)", date: "06 Feb 2026", time: "04:00 PM", amount: 4999, status: "Confirmed", address: "Plot 22, Kothrud, Pune" },
  ];

  const filteredBookings = filter === "All" ? bookings : bookings.filter(b => b.status === filter);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-green-800 dark:text-green-700">Bookings</h1>
          <p className="text-gray-600">Total {bookings.length} bookings found</p>
        </div>

        <div className="flex gap-2">
          {["All", "Confirmed", "Pending", "Completed", "Cancelled"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === f ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
        <table className="w-full text-left">
          <thead className="bg-green-50 border-b border-green-100">
            <tr>
              <th className="p-4 font-semibold text-green-900">Customer</th>
              <th className="p-4 font-semibold text-green-900">Service</th>
              <th className="p-4 font-semibold text-green-900">Date & Time</th>
              <th className="p-4 font-semibold text-green-900">Address</th>
              <th className="p-4 font-semibold text-green-900">Amount</th>
              <th className="p-4 font-semibold text-green-900">Status</th>
              <th className="p-4 font-semibold text-green-900">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-800 font-medium">{booking.customer}</td>
                <td className="p-4 text-gray-600">{booking.service}</td>
                <td className="p-4 text-gray-600">
                  <div className="text-sm font-bold text-gray-700">{booking.date}</div>
                  <div className="text-xs text-gray-500">{booking.time}</div>
                </td>
                <td className="p-4 text-gray-500 text-sm max-w-xs">{booking.address}</td>
                <td className="p-4 font-bold text-gray-800">₹{booking.amount}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${booking.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      booking.status === 'Confirmed' ? 'bg-blue-100 text-blue-700' :
                        booking.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                    }`}>
                    {booking.status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-green-600 hover:text-green-800 font-medium text-sm">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredBookings.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No bookings found for this filter.
          </div>
        )}
      </div>
    </div>
  );
}
