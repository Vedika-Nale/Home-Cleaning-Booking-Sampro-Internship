"use client";

import { FaDownload, FaCreditCard, FaReceipt, FaCheckCircle } from "react-icons/fa";

export default function Payments() {
    const transactions = [
        {
            id: "INV-8821",
            date: "Oct 15, 2023",
            service: "Regular Cleaning",
            amount: "₹999",
            method: "Visa ending in 4242",
            status: "Paid"
        },
        {
            id: "INV-7712",
            date: "Oct 01, 2023",
            service: "Deep Home Cleaning",
            amount: "₹2,499",
            method: "UPI (vedika@okaxis)",
            status: "Paid"
        },
        {
            id: "INV-6605",
            date: "Sep 15, 2023",
            service: "Bathroom Cleaning",
            amount: "₹899",
            method: "Visa ending in 4242",
            status: "Paid"
        }
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-[#006400]">Payments & Invoices</h1>
                <p className="text-gray-500">Manage your payment methods and view billing history.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Transaction History</h2>
                        <button className="text-green-700 font-bold text-sm hover:underline">Download All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b border-gray-50">
                                    <th className="pb-4 font-black text-xs text-gray-400 uppercase tracking-widest">Invoice</th>
                                    <th className="pb-4 font-black text-xs text-gray-400 uppercase tracking-widest">Service</th>
                                    <th className="pb-4 font-black text-xs text-gray-400 uppercase tracking-widest">Amount</th>
                                    <th className="pb-4 font-black text-xs text-gray-400 uppercase tracking-widest">Status</th>
                                    <th className="pb-4 font-black text-xs text-gray-400 uppercase tracking-widest text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {transactions.map((tx) => (
                                    <tr key={tx.id} className="group">
                                        <td className="py-4">
                                            <div className="font-bold text-gray-800">{tx.id}</div>
                                            <div className="text-xs text-gray-400">{tx.date}</div>
                                        </td>
                                        <td className="py-4 text-sm text-gray-600">{tx.service}</td>
                                        <td className="py-4 font-bold text-gray-800">{tx.amount}</td>
                                        <td className="py-4">
                                            <span className="flex items-center gap-1 text-green-600 font-bold text-xs">
                                                <FaCheckCircle /> {tx.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-right">
                                            <button className="p-2 text-green-700 hover:bg-green-50 rounded-lg transition-colors">
                                                <FaDownload />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-[#006400] p-8 rounded-2xl shadow-lg text-white">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <FaCreditCard className="text-yellow-400" /> Payment Methods
                        </h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-green-700/50 rounded-xl border border-green-700 border-dashed flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-green-300">Primary Card</p>
                                    <p className="font-bold">**** **** **** 4242</p>
                                </div>
                                <div className="w-10 h-6 bg-white rounded-sm flex items-center justify-center text-[10px] text-[#006400] font-black">VISA</div>
                            </div>
                            <button className="w-full py-3 bg-yellow-500 text-green-900 rounded-xl font-bold hover:bg-yellow-400 transition-colors text-sm">
                                Add New Method
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                <FaReceipt />
                            </div>
                            <h3 className="font-bold text-gray-800">Tax Invoices</h3>
                        </div>
                        <p className="text-sm text-gray-500 mb-6">Need GST invoices for your business? Update your billing profile.</p>
                        <button className="w-full py-2 border-2 border-green-50 text-green-700 rounded-xl font-bold hover:bg-green-50 transition-colors text-sm text-center">
                            Edit Billing Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
