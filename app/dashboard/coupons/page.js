"use client";

import { useState } from "react";
import { FaPlus, FaTicketAlt, FaTrash, FaCopy } from "react-icons/fa";

export default function CouponsPage() {
    const [coupons, setCoupons] = useState([
        { id: 1, code: "CLEAN50", discount: "50%", type: "Percentage", expiry: "2026-12-31", used: 45, limit: 100, status: "Active" },
        { id: 2, code: "PUNE500", discount: "₹500", type: "Fixed", expiry: "2026-03-01", used: 120, limit: 500, status: "Active" },
        { id: 3, code: "WELCOME", discount: "20%", type: "Percentage", expiry: "2026-01-01", used: 250, limit: 250, status: "Expired" },
    ]);

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-green-700">Offers & Coupons</h1>
                    <p className="text-gray-500 font-bold mt-1">Boost growth with promotional discounts</p>
                </div>

                <button className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl shadow-green-100 active:scale-95">
                    <FaPlus /> Create New Coupon
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coupons.map((coupon) => (
                    <div key={coupon.id} className="bg-white rounded-3xl p-1 border border-gray-100 shadow-sm relative overflow-hidden group">
                        <div className={`p-6 rounded-[calc(1.5rem-2px)] ${coupon.status === 'Active' ? 'bg-green-50/50' : 'bg-gray-50'}`}>
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm"><FaTicketAlt /></div>
                                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${coupon.status === 'Active' ? 'bg-green-600 text-white' : 'bg-gray-300 text-white'
                                    }`}>
                                    {coupon.status}
                                </span>
                            </div>

                            <div className="space-y-1 mb-8">
                                <h3 className="text-2xl font-black text-gray-800 flex items-center gap-2">
                                    {coupon.code} <button className="text-xs text-gray-300 hover:text-green-600 transition-colors"><FaCopy /></button>
                                </h3>
                                <p className="text-xs font-bold text-gray-400 italic">Get {coupon.discount} off on all {coupon.type} services</p>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-[10px] font-black uppercase text-gray-400">
                                        <span>Usage Limit</span>
                                        <span>{coupon.used}/{coupon.limit}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white rounded-full overflow-hidden border border-gray-50">
                                        <div
                                            className={`h-full transition-all duration-1000 ${coupon.status === 'Active' ? 'bg-green-500' : 'bg-gray-300'}`}
                                            style={{ width: `${(coupon.used / coupon.limit) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100/50">
                                    <span className="text-[10px] font-black text-gray-400 uppercase">Expires: {coupon.expiry}</span>
                                    <button className="text-red-400 hover:text-red-600 transition-colors"><FaTrash size={12} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-green-700 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
                <div className="relative z-10 max-w-lg">
                    <h2 className="text-4xl font-black mb-6">Create Seasonal Campaigns</h2>
                    <p className="text-green-200 font-bold text-lg leading-relaxed">Schedule automatic offers for upcoming holidays like Holi or Diwali to maximize bookings.</p>
                    <button className="mt-8 px-10 py-4 bg-yellow-400 text-green-700 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20">Go to Planner</button>
                </div>
                <FaTicketAlt className="absolute -bottom-20 -right-20 text-[20rem] text-green-700 opacity-20 rotate-12" />
            </div>
        </div>
    );
}
