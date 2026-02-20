"use client";

import { useState } from "react";
import { FaSearch, FaUser, FaHistory, FaStar } from "react-icons/fa";

export default function CustomersPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const customers = [
        { id: 1, name: "Amit Sharma", email: "amit.s@gmail.com", phone: "+91 9876543210", bookings: 12, totalSpent: "₹35,988", status: "Active", lastBooking: "04 Feb 2026" },
        { id: 2, name: "Priya Patel", email: "priya.p@yahoo.com", phone: "+91 9123456789", bookings: 5, totalSpent: "₹7,495", status: "Active", lastBooking: "15 Feb 2026" },
        { id: 3, name: "Rajesh Gaikwad", email: "rajesh.g@outlook.com", phone: "+91 9988776655", bookings: 1, totalSpent: "₹800", status: "New", lastBooking: "13 Feb 2026" },
        { id: 4, name: "Sneha Gupta", email: "sneha.g@gmail.com", phone: "+91 8877665544", bookings: 0, totalSpent: "₹0", status: "Inactive", lastBooking: "N/A" },
    ];

    const filteredCustomers = customers.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-green-700">Manage Customers</h1>
                    <p className="text-gray-500 font-bold mt-1">Viewing all registered users in Pune</p>
                </div>

                <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 pr-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full md:w-80 font-bold text-gray-700 transition-all"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shadow-inner"><FaUser /></div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Total Users</p>
                        <h3 className="text-2xl font-black text-gray-800">2,450</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shadow-inner"><FaHistory /></div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Active Bookers</p>
                        <h3 className="text-2xl font-black text-gray-800">842</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 shadow-inner"><FaStar /></div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">LTV Average</p>
                        <h3 className="text-2xl font-black text-gray-800">₹4,200</h3>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-50">
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Customer Details</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Stats</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Last Booking</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 font-bold">
                            {filteredCustomers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-green-50/30 transition-all group">
                                    <td className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-black">
                                                {customer.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-gray-800">{customer.name}</p>
                                                <p className="text-xs text-gray-400">{customer.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6 text-sm">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-gray-600">{customer.bookings} Bookings</span>
                                            <span className="text-green-600 text-[10px] font-black">LTV: {customer.totalSpent}</span>
                                        </div>
                                    </td>
                                    <td className="p-6 text-sm text-gray-500 italic">
                                        {customer.lastBooking}
                                    </td>
                                    <td className="p-6">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${customer.status === 'Active' ? 'bg-green-100 text-green-700' :
                                                customer.status === 'New' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-gray-100 text-gray-500'
                                            }`}>
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex justify-center gap-2">
                                            <button className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs hover:bg-green-50 hover:text-green-600 transition-all active:scale-95 shadow-sm">History</button>
                                            <button className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs hover:bg-red-50 hover:text-red-600 transition-all active:scale-95 shadow-sm">Suspend</button>
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
