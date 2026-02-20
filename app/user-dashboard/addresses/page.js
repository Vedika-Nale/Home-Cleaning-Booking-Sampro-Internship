"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaPlus, FaTrash, FaPen, FaHome, FaBriefcase } from "react-icons/fa";

export default function Addresses() {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            type: "Home",
            address: "B-201, Green Valley Apartment, Near Amanora Mall, Pune, Maharashtra 411028",
            primary: true,
            icon: <FaHome />
        },
        {
            id: 2,
            type: "Office",
            address: "Unit 405, Tech Hub Tower 2, Magarpatta City, Pune, Maharashtra 411013",
            primary: false,
            icon: <FaBriefcase />
        }
    ]);

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-[#006400]">Saved Addresses</h1>
                    <p className="text-gray-500">Manage your service locations for quicker bookings.</p>
                </div>
                <button className="px-6 py-3 bg-[#006400] text-white rounded-xl font-bold hover:bg-green-700 transition-all flex items-center gap-2 shadow-lg shadow-green-100">
                    <FaPlus /> Add New
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.map((addr) => (
                    <div key={addr.id} className={`bg-white p-8 rounded-2xl shadow-sm border-2 transition-all ${addr.primary ? "border-[#006400] shadow-md" : "border-gray-50 hover:border-gray-200"}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${addr.primary ? "bg-[#006400] text-white" : "bg-gray-100 text-gray-500"}`}>
                                    {addr.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">{addr.type}</h3>
                                    {addr.primary && <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-black uppercase tracking-widest">Primary</span>}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 text-gray-400 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all">
                                    <FaPen />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            {addr.address}
                        </p>
                        {!addr.primary && (
                            <button className="text-green-700 font-bold text-sm hover:underline">
                                Set as Primary
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
