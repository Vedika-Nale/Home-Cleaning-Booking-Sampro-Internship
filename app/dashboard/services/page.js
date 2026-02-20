"use client";

import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaConciergeBell, FaClock, FaTags } from "react-icons/fa";

export default function ServicesPage() {
  const [services, setServices] = useState([
    { id: 1, name: "Deep Cleaning (Full Home)", duration: "6-8 Hours", price: 2999, category: "Residential", status: "Active" },
    { id: 2, name: "Kitchen Deep Clean", duration: "3-4 Hours", price: 1499, category: "Residential", status: "Active" },
    { id: 3, name: "Bathroom Cleaning", duration: "1.5 Hours", price: 800, category: "Residential", status: "Active" },
    { id: 4, name: "Sofa Cleaning (5 Seater)", duration: "2 Hours", price: 800, category: "Upholstery", status: "Active" },
    { id: 5, name: "Commercial Office Clean", duration: "10+ Hours", price: 7999, category: "Commercial", status: "Inactive" },
  ]);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-green-700">Service Management</h1>
          <p className="text-gray-500 font-bold mt-1">Configure your offerings and dynamic pricing</p>
        </div>

        <button className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl shadow-green-100 active:scale-95">
          <FaPlus /> Add New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-6 shadow-sm">
          <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shadow-inner"><FaConciergeBell /></div>
          <div>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Total Services</p>
            <h3 className="text-2xl font-black text-gray-800">24 Types</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-6 shadow-sm">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-inner"><FaTags /></div>
          <div>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Active Categories</p>
            <h3 className="text-2xl font-black text-gray-800">06 Groups</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-6 shadow-sm">
          <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 shadow-inner"><FaClock /></div>
          <div>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Avg Completion</p>
            <h3 className="text-2xl font-black text-gray-800">4.5 Hrs</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-bold">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-50">
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Service Name</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Category</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Duration</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Base Price</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-green-50/30 transition-all group">
                  <td className="p-6">
                    <p className="text-gray-800 font-black">{service.name}</p>
                  </td>
                  <td className="p-6">
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] uppercase tracking-widest">{service.category}</span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaClock size={12} />
                      <span>{service.duration}</span>
                    </div>
                  </td>
                  <td className="p-6 text-gray-800 font-black">₹{service.price}</td>
                  <td className="p-6">
                    <span className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest ${service.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                      {service.status}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex justify-center gap-2">
                      <button className="p-2.5 bg-white border border-gray-100 rounded-xl hover:text-blue-600 shadow-sm active:scale-95 transition-all"><FaEdit /></button>
                      <button className="p-2.5 bg-white border border-gray-100 rounded-xl hover:text-red-600 shadow-sm active:scale-95 transition-all"><FaTrash /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-green-700 rounded-[2.5rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-black">Dynamic Pricing Rules</h2>
          <p className="text-green-200 font-bold text-lg leading-relaxed">Adjust your prices automatically based on high-demand slots, weekends, or seasonal peaks to stay competitive.</p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-yellow-400 text-green-900 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-yellow-300 transition-all">Configure Rules</button>
            <button className="px-8 py-3 bg-green-800 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-green-700 transition-all">View Insights</button>
          </div>
        </div>
        <div className="flex-shrink-0 w-64 h-64 border-4 border-green-800 rounded-full flex items-center justify-center relative">
          <div className="text-center">
            <p className="text-4xl font-black text-yellow-400">+15%</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-green-400">Revenue Growth</p>
          </div>
          <div className="absolute inset-0 border-4 border-yellow-400 rounded-full border-t-transparent animate-spin-slow"></div>
        </div>
      </div>
    </div>
  );
}
