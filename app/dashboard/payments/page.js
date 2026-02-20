"use client";

import { useState } from "react";
import { FaCreditCard, FaArrowUp, FaArrowDown, FaHistory, FaDownload } from "react-icons/fa";

export default function PaymentsPage() {
    const payments = [
        { id: "TX-9021", date: "2026-02-13", customer: "Amit Sharma", amount: "₹2,999", method: "UPI", commission: "₹600", payout: "₹2,399", cleaner: "Rahul Patil", status: "Settled" },
        { id: "TX-9020", date: "2026-02-12", customer: "Priya Patel", amount: "₹1,499", method: "Card", commission: "₹300", payout: "₹1,199", cleaner: "Amit S.", status: "Pending" },
        { id: "TX-TX-9019", date: "2026-02-12", customer: "Rajesh G.", amount: "₹800", method: "Cash", commission: "₹160", payout: "₹640", cleaner: "Meena R.", status: "Settled" },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-green-700">Financial Overview</h1>
                    <p className="text-gray-500 font-bold mt-1">Track revenue, commissions and cleaner payouts</p>
                </div>

                <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm active:scale-95">
                    <FaDownload /> Export CSV
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 group hover:border-green-100 transition-all">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform"><FaCreditCard /></div>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Gross Revenue</p>
                    <h3 className="text-3xl font-black text-gray-800">₹1.2M</h3>
                    <p className="text-xs font-bold text-green-600 flex items-center mt-4 gap-1"><FaArrowUp /> 8% from last week</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 group hover:border-blue-100 transition-all">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform"><FaHistory /></div>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Company Net (20%)</p>
                    <h3 className="text-3xl font-black text-gray-800">₹240K</h3>
                    <p className="text-xs font-bold text-gray-400 flex items-center mt-4 gap-1">After payouts</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 group hover:border-yellow-100 transition-all">
                    <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform"><FaArrowDown /></div>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Pending Payouts</p>
                    <h3 className="text-3xl font-black text-gray-800">₹45.2K</h3>
                    <p className="text-xs font-bold text-yellow-600 mt-4 italic">Next cycle: Feb 15</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 group hover:border-red-100 transition-all">
                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform"><FaHistory /></div>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Total Refunds</p>
                    <h3 className="text-3xl font-black text-gray-800">₹8,500</h3>
                    <p className="text-xs font-bold text-red-400 mt-4 italic">0.2% Dispute rate</p>
                </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex justify-between items-center">
                    <h2 className="text-xl font-black text-gray-800">Transaction History</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-50">
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Transaction</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Cleaner / Commission</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Method / Status</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 font-bold">
                            {payments.map((tx) => (
                                <tr key={tx.id} className="hover:bg-green-50/30 transition-all">
                                    <td className="p-6">
                                        <p className="text-gray-800">{tx.customer}</p>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">{tx.id} • {tx.date}</p>
                                    </td>
                                    <td className="p-6">
                                        <p className="text-sm text-gray-600 font-bold">{tx.cleaner}</p>
                                        <p className="text-[10px] text-blue-600 font-black uppercase tracking-tighter">Comm: {tx.commission}</p>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-black text-gray-400 uppercase">{tx.method}</span>
                                            <span className={`w-fit px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${tx.status === 'Settled' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {tx.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-6 text-right font-black text-gray-800 text-lg">
                                        {tx.amount}
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
