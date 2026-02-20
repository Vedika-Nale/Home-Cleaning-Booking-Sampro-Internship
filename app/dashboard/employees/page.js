"use client";

import { useState } from "react";
import { FaUserPlus, FaUserCheck, FaUserTimes, FaStar, FaShieldAlt } from "react-icons/fa";

export default function EmployeesPage() {
    const [tab, setTab] = useState("active"); // active, pending, suspended

    const employees = [
        { id: 1, name: "Rahul Patil", specialization: "Deep Cleaning, Carpet", rating: 4.8, jobs: 124, status: "Active", verified: true, joinDate: "Jan 2025" },
        { id: 2, name: "Amit S.", specialization: "Kitchen, Bathroom", rating: 4.5, jobs: 89, status: "Active", verified: true, joinDate: "Mar 2025" },
        { id: 3, name: "Suresh K.", specialization: "Full Home", rating: 0, jobs: 0, status: "Pending", verified: false, joinDate: "Feb 2026" },
        { id: 4, name: "Meena R.", specialization: "Sofa, Mattress", rating: 4.2, jobs: 45, status: "Suspended", verified: true, joinDate: "Jun 2025" },
    ];

    const filteredEmployees = employees.filter(e => {
        if (tab === "active") return e.status === "Active";
        if (tab === "pending") return e.status === "Pending";
        if (tab === "suspended") return e.status === "Suspended";
        return true;
    });

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-green-700">Cleaners Management</h1>
                    <p className="text-gray-500 font-bold mt-1">Manage your team of professional cleaners</p>
                </div>

                <div className="flex p-1 bg-green-50 rounded-2xl w-fit">
                    {["active", "pending", "suspended"].map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${tab === t ? 'bg-green-600 text-white shadow-lg shadow-green-200' : 'text-green-700 hover:bg-white/50'
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-50">
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Cleaner</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Specialization</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Performance</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 font-bold">
                            {filteredEmployees.map((emp) => (
                                <tr key={emp.id} className="hover:bg-green-50/30 transition-all group">
                                    <td className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 text-xl font-black shadow-inner">
                                                {emp.name.charAt(0)}
                                                {emp.verified && (
                                                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-[8px] border-2 border-white shadow-md">
                                                        <FaShieldAlt />
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <p className="text-gray-800">{emp.name}</p>
                                                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Joined {emp.joinDate}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6 text-sm">
                                        <span className="text-gray-500 max-w-[150px] block truncate">{emp.specialization}</span>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-1 text-yellow-500 text-xs">
                                                {emp.rating > 0 && Array.from({ length: 5 }).map((_, i) => (
                                                    <FaStar key={i} className={i < Math.floor(emp.rating) ? "fill-current" : "text-gray-200"} />
                                                ))}
                                                <span className="text-gray-800 font-black ml-1">{emp.rating || "NEW"}</span>
                                            </div>
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{emp.jobs} Jobs Done</span>
                                        </div>
                                    </td>
                                    <td className="p-6 text-center">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${emp.status === 'Active' ? 'bg-green-100 text-green-700' :
                                                emp.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-red-100 text-red-700'
                                            }`}>
                                            {emp.status}
                                        </span>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex justify-center gap-2">
                                            {emp.status === 'Pending' ? (
                                                <>
                                                    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl text-xs hover:bg-green-700 transition-all active:scale-95 shadow-md shadow-green-100"><FaUserCheck /> Approve</button>
                                                    <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl text-xs hover:bg-red-100 transition-all active:scale-95 border border-red-100"><FaUserTimes /> Reject</button>
                                                </>
                                            ) : (
                                                <>
                                                    <button className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs hover:bg-green-50 hover:text-green-600 transition-all active:scale-95 shadow-sm">Audit</button>
                                                    <button className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs hover:bg-red-50 hover:text-red-800 transition-all active:scale-95 shadow-sm">Restricted</button>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-yellow-50 rounded-3xl p-8 border border-yellow-100 flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-black text-yellow-800">Verify Applications</h3>
                        <p className="text-sm font-bold text-yellow-600 mt-2">You have 12 cleaner applications waiting for documents verification.</p>
                        <button className="mt-6 px-8 py-3 bg-yellow-400 text-yellow-900 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-yellow-500 transition-all shadow-lg shadow-yellow-200">Review Queue</button>
                    </div>
                    <FaShieldAlt className="text-8xl text-yellow-200 opacity-50" />
                </div>
                <div className="bg-green-50 rounded-3xl p-8 border border-green-100 flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-black text-green-800">Recruit New Pros</h3>
                        <p className="text-sm font-bold text-green-600 mt-2">Invite experienced cleaners to join the CleanIT network today.</p>
                        <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg shadow-green-100">Send Invite</button>
                    </div>
                    <FaUserPlus className="text-8xl text-green-200 opacity-50" />
                </div>
            </div>
        </div>
    );
}
