"use client";

import { useState } from "react";
import { FaExclamationTriangle, FaCheckCircle, FaFilter, FaReply } from "react-icons/fa";

export default function DisputesPage() {
    const disputes = [
        { id: "DIS-1201", date: "2026-02-13", customer: "Amit Sharma", cleaner: "Rahul Patil", issue: "Missed kitchen cleaning completely", amount: "₹2,999", status: "Open", priority: "High" },
        { id: "DIS-1200", date: "2026-02-10", customer: "Sneha Gupta", cleaner: "Unknown", issue: "Booking cancelled last minute, no refund received", amount: "₹3,999", status: "In Review", priority: "Medium" },
        { id: "DIS-1198", date: "2026-02-05", customer: "Rahul Verma", cleaner: "Meena R.", issue: "Slight scratches on dining table", amount: "₹800", status: "Resolved", priority: "Low" },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-green-700">Dispute Management</h1>
                    <p className="text-gray-500 font-bold mt-1">Handle customer issues and quality control</p>
                </div>

                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm active:scale-95">
                        <FaFilter /> Filter Status
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex items-center gap-6">
                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shadow-inner"><FaExclamationTriangle /></div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-red-400 tracking-widest">Open Tickets</p>
                        <h3 className="text-2xl font-black text-red-800">14</h3>
                    </div>
                </div>
                <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-100 flex items-center gap-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 shadow-inner"><FaReply /></div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-yellow-400 tracking-widest">In Review</p>
                        <h3 className="text-2xl font-black text-yellow-800">08</h3>
                    </div>
                </div>
                <div className="bg-green-50 p-6 rounded-3xl border border-green-100 flex items-center gap-6">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shadow-inner"><FaCheckCircle /></div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-green-400 tracking-widest">Resolved Today</p>
                        <h3 className="text-2xl font-black text-green-800">24</h3>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left font-bold">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-50">
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Issue Details</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Parties Involved</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Priority</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-sm">
                            {disputes.map((ticket) => (
                                <tr key={ticket.id} className="hover:bg-red-50/10 transition-all">
                                    <td className="p-6">
                                        <p className="text-gray-800 font-black">{ticket.issue}</p>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{ticket.id} • {ticket.date}</p>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-gray-600">{ticket.customer} (Customer)</span>
                                            <span className="text-xs text-gray-400 italic">{ticket.cleaner} (Cleaner)</span>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${ticket.priority === 'High' ? 'bg-red-600 text-white shadow-lg shadow-red-100' :
                                                ticket.priority === 'Medium' ? 'bg-yellow-400 text-white' :
                                                    'bg-blue-100 text-blue-700'
                                            }`}>
                                            {ticket.priority}
                                        </span>
                                    </td>
                                    <td className="p-6">
                                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter border ${ticket.status === 'Open' ? 'border-red-200 text-red-600 bg-red-50' :
                                                ticket.status === 'In Review' ? 'border-yellow-200 text-yellow-600 bg-yellow-50' :
                                                    'border-green-200 text-green-600 bg-green-50'
                                            }`}>
                                            {ticket.status}
                                        </span>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex justify-center gap-2">
                                            <button className="px-5 py-2.5 bg-green-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-green-700 transition-all active:scale-95 shadow-lg shadow-green-100">Resolve</button>
                                            <button className="px-5 py-2.5 bg-white border border-gray-100 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-95">Investigate</button>
                                        </div>
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
