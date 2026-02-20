"use client";

import { useState } from "react";
import { FaCalendarAlt, FaUserTie, FaCheckCircle, FaFilter, FaIdBadge } from "react-icons/fa";

export default function BookingsPage() {
  const [filter, setFilter] = useState("All");

  const bookings = [
    { id: 1, customer: "Amit Sharma", service: "Deep Cleaning (Full Home)", date: "04 Feb 2026", time: "10:00 AM", amount: 2999, status: "Completed", address: "Flat 4, Koregaon Park, Pune", cleaner: "Rahul Patil" },
    { id: 2, customer: "Priya Patel", service: "Kitchen Deep Clean", date: "15 Feb 2026", time: "02:00 PM", amount: 1499, status: "Pending", address: "102, Kothrud, Pune", cleaner: "unassigned" },
    { id: 3, customer: "Rajesh Gaikwad", service: "Sofa Cleaning", date: "13Feb 2026", time: "11:00 AM", amount: 800, status: "Confirmed", address: "Sector 17, Navi Peth, Pune", cleaner: "Amit S." },
    { id: 4, customer: "Sneha Gupta", service: "Move-out Cleaning", date: "06 Feb 2026", time: "09:00 AM", amount: 3999, status: "Cancelled", address: "Plot 45, Shivaji Nagar, Pune", cleaner: "N/A" },
    { id: 5, customer: "Rahul Verma", service: "Carpet Cleaning", date: "07 Feb 2026", time: "03:00 PM", amount: 800, status: "Completed", address: "Flat 12, Kalyani Nagar, Pune", cleaner: "Meena R." },
  ];

  const filteredBookings = filter === "All" ? bookings : bookings.filter(b => b.status === filter);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-green-700">Booking Pipeline</h1>
          <p className="text-gray-500 font-bold mt-1">Manage and assign professional cleaners to jobs</p>
        </div>

        <div className="flex p-1 bg-white border border-gray-100 rounded-2xl w-fit shadow-sm overflow-x-auto overflow-y-hidden custom-scrollbar">
          {["All", "Confirmed", "Pending", "Completed", "Cancelled"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-green-600 text-white shadow-lg shadow-green-100' : 'text-gray-400 hover:text-green-600 hover:bg-green-50/50'
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4">
          <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shadow-inner"><FaCalendarAlt /></div>
          <div>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Today</p>
            <h3 className="text-xl font-black text-gray-800">12 Jobs</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shadow-inner"><FaUserTie /></div>
          <div>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Unassigned</p>
            <h3 className="text-xl font-black text-blue-800">03 Jobs</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-bold">
            <thead className="bg-gray-50/50 border-b border-gray-50">
              <tr className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                <th className="p-6">Booking Details</th>
                <th className="p-6">Schedule</th>
                <th className="p-6">Cleaner</th>
                <th className="p-6">Financials</th>
                <th className="p-6">Status</th>
                <th className="p-6 text-center">Manage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-green-50/30 transition-all group">
                  <td className="p-6">
                    <p className="text-gray-800 font-black">{booking.customer}</p>
                    <p className="text-gray-400 text-xs italic truncate max-w-[180px]">{booking.address}</p>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-gray-800 font-black text-xs">{booking.date}</span>
                      <span className="text-gray-400 text-[10px] uppercase tracking-widest">{booking.time}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    {booking.cleaner === 'unassigned' ? (
                      <span className="text-red-500 text-[10px] font-black uppercase tracking-widest bg-red-50 px-2 py-1 rounded border border-red-100">Unassigned</span>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-[10px] text-green-700">{booking.cleaner.charAt(0)}</div>
                        <span className="text-gray-600 text-xs">{booking.cleaner}</span>
                      </div>
                    )}
                  </td>
                  <td className="p-6 text-gray-800 font-black">₹{booking.amount}</td>
                  <td className="p-6">
                    <span className={`px-2 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${booking.status === 'Completed' ? 'bg-green-50 text-green-600 border-green-100' :
                        booking.status === 'Confirmed' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                          booking.status === 'Cancelled' ? 'bg-red-50 text-red-600 border-red-100' :
                            'bg-yellow-50 text-yellow-600 border-yellow-100'
                      }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2.5 bg-white border border-gray-100 rounded-xl hover:text-green-600 shadow-sm active:scale-95 transition-all"><FaIdBadge /></button>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-xl text-[10px] uppercase tracking-widest hover:bg-green-700 shadow-lg shadow-green-100 active:scale-95 transition-all">Assign</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredBookings.length === 0 && (
          <div className="p-16 text-center">
            <p className="text-gray-400 font-bold italic">No bookings found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
