"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowUp, FaArrowDown, FaChartLine, FaCalendarCheck, FaUsers, FaConciergeBell, FaEllipsisV } from "react-icons/fa";

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

  const stats = [
    { label: "Total Revenue", value: "₹4.52L", change: "+12.5%", positive: true, icon: <FaChartLine /> },
    { label: "Active Jobs", value: "84", change: "+5.2%", positive: true, icon: <FaCalendarCheck /> },
    { label: "New Customers", value: "156", change: "-2.1%", positive: false, icon: <FaUsers /> },
    { label: "Avg Ticket Size", value: "₹1,450", change: "+8.4%", positive: true, icon: <FaConciergeBell /> },
  ];

  const recentBookings = [
    { id: 101, customer: "Amit Sharma", service: "Deep Cleaning", amount: 2999, status: "Completed", time: "2h ago" },
    { id: 102, customer: "Priya Patel", service: "Kitchen Clean", amount: 1499, status: "Pending", time: "4h ago" },
    { id: 103, customer: "Rajesh Gaikwad", service: "Sofa Cleaning", amount: 800, status: "Confirmed", time: "5h ago" },
  ];

  const revenueData = [
    { day: "Mon", amount: 4500 },
    { day: "Tue", amount: 5200 },
    { day: "Wed", amount: 4800 },
    { day: "Thu", amount: 6100 },
    { day: "Fri", amount: 8500 },
    { day: "Sat", amount: 9200 },
    { day: "Sun", amount: 7800 },
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.amount));

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-xs font-black text-green-700 uppercase tracking-widest mb-1">Organization: CleanIT Pune</p>
          <h1 className="text-4xl font-black text-green-700 tracking-tighter">
            System Intelligence
          </h1>
          <p className="text-gray-400 font-bold mt-2 italic">Real-time performance analytics for your service fleet.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-green-700 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-green-100">Report Hub</button>
          
          <button className="px-6 py-3 bg-green-700 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-green-100">Live View</button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 group hover:border-green-200 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">{s.icon}</div>
              <span className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-tighter ${s.positive ? 'text-green-600' : 'text-red-500'}`}>
                {s.positive ? <FaArrowUp /> : <FaArrowDown />} {s.change}
              </span>
            </div>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">{s.label}</p>
            <h3 className="text-3xl font-black text-gray-800 tracking-tight">{s.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Revenue Chart Implementation */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-10">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-xl font-black text-gray-800">Weekly Revenue Flow</h2>
              <p className="text-xs font-bold text-gray-400 mt-1 italic">Daily earnings breakdown in INR</p>
            </div>
            <div className="px-4 py-2 bg-gray-50 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500">Weekly Trend</div>
          </div>

          <div className="relative h-64 flex items-end justify-between gap-4">
            {/* Horizontal Rails */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 text-gray-100">
              <div className="h-px w-full border-t border-dashed border-gray-100"></div>
              <div className="h-px w-full border-t border-dashed border-gray-100"></div>
              <div className="h-px w-full border-t border-dashed border-gray-100"></div>
            </div>

            {revenueData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                <div className="relative w-full flex flex-col items-center">
                  <div className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-[10px] px-2 py-1 rounded font-black transition-all mb-2 shadow-xl z-10">₹{d.amount}</div>
                  <div
                    className="w-full max-w-[40px] bg-green-100 rounded-t-2xl transition-all group-hover:bg-green-600 relative overflow-hidden"
                    style={{ height: `${(d.amount / maxRevenue) * 100}%`, minHeight: '30px' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                    <div className="w-full h-full bg-green-500/20 group-hover:bg-transparent"></div>
                  </div>
                </div>
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Active Ops */}
        <div className="bg-green-700 rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-2xl shadow-green-100 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-1">System Health</h3>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-700 text-green-400 rounded-full text-[9px] font-black uppercase tracking-widest mb-10">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Optimal Ops
            </div>

            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-green-800 pb-4">
                <p className="text-xs font-bold text-green-300">Cleaner Retention</p>
                <p className="text-2xl font-black italic">98%</p>
              </div>
              <div className="flex justify-between items-end border-b border-green-800 pb-4">
                <p className="text-xs font-bold text-green-300">CSAT Score</p>
                <p className="text-2xl font-black italic">4.9/5</p>
              </div>
              <div className="flex justify-between items-end border-b border-green-800 pb-4">
                <p className="text-xs font-bold text-green-300">SLA Breach</p>
                <p className="text-2xl font-black italic">0.2%</p>
              </div>
            </div>
          </div>

          <button className="relative z-10 w-full py-4 bg-yellow-400 text-green-900 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-900/20">Audit Full System</button>
          <FaChartLine className="absolute -bottom-10 -right-10 text-[15rem] text-green-800 opacity-20 rotate-12" />
        </div>

      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-black text-gray-800 tracking-tight">VIP Activity Log</h2>
          <Link href="/dashboard/bookings" className="text-[10px] font-black uppercase tracking-widest text-green-600 border-b-2 border-green-600 pb-1">Archive</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-bold">
            <tbody className="divide-y divide-gray-50">
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-6">
                    <p className="text-gray-800 font-black">{booking.customer}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{booking.service}</p>
                  </td>
                  <td className="py-6 text-right">
                    <p className="text-gray-900 font-black">₹{booking.amount}</p>
                    <p className="text-[10px] text-gray-400 font-bold italic">{booking.time}</p>
                  </td>
                  <td className="py-6 text-right">
                    <span className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-tighter ${booking.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      booking.status === 'Confirmed' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-6 text-right w-10">
                    <button className="p-2 text-gray-300 hover:text-gray-600 transition-colors"><FaEllipsisV /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}