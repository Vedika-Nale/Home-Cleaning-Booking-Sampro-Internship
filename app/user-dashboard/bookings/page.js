"use client";

import { useState } from "react";
import { FaUserCircle, FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronRight, FaTimesCircle, FaClock } from "react-icons/fa";

export default function MyBookings() {
    const [activeTab, setActiveTab] = useState("upcoming");

    const bookings = [
        {
            id: "BK-101",
            service: "Deep Home Cleaning",
            date: "Oct 25, 2023",
            time: "10:00 AM",
            status: "Confirmed",
            type: "upcoming",
            address: "B-201, Green Valley, Pune, Maharashtra",
            price: "₹2,499",
            cleaner: {
                name: "Rahul Sharma",
                rating: 4.9,
                jobs: 142,
                image: "/avatar1.png"
            }
        },
        {
            id: "BK-105",
            service: "Kitchen Cleaning",
            date: "Nov 02, 2023",
            time: "02:00 PM",
            status: "Pending",
            type: "upcoming",
            address: "B-201, Green Valley, Pune, Maharashtra",
            price: "₹1,499",
            cleaner: null
        },
        {
            id: "BK-098",
            service: "Regular Cleaning",
            date: "Oct 15, 2023",
            time: "09:00 AM",
            status: "Completed",
            type: "past",
            address: "B-201, Green Valley, Pune, Maharashtra",
            price: "₹999",
            cleaner: {
                name: "Sneha Patil",
                rating: 4.8,
                jobs: 89,
                image: "/avatar2.png"
            }
        }
    ];

    const filteredBookings = bookings.filter(b => b.type === activeTab);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-[#006400]">My Bookings</h1>
                    <p className="text-gray-500">Track and manage your cleaning schedules.</p>
                </div>
                <div className="flex bg-gray-100 p-1 rounded-xl">
                    <button
                        onClick={() => setActiveTab("upcoming")}
                        className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === "upcoming" ? "bg-white text-green-700 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        Upcoming
                    </button>
                    <button
                        onClick={() => setActiveTab("past")}
                        className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === "past" ? "bg-white text-green-700 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        Past Bookings
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                {filteredBookings.map((booking) => (
                    <div key={booking.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:border-green-200 transition-all">
                        <div className="md:flex">
                            {/* Left Column - Booking Info */}
                            <div className="p-8 md:flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-black text-green-700 uppercase tracking-widest">{booking.id}</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${booking.status === "Completed" ? "bg-green-100 text-green-600" :
                                        booking.status === "Confirmed" ? "bg-blue-100 text-blue-600" : "bg-yellow-100 text-yellow-600"
                                        }`}>
                                        {booking.status}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{booking.service}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-green-600" /> {booking.date} at {booking.time}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-green-600" /> {booking.address}
                                    </div>
                                </div>

                                {activeTab === "upcoming" && (
                                    <div className="mt-8 flex gap-3">
                                        <button className="px-6 py-2 bg-[#006400] text-white rounded-lg font-bold text-sm hover:bg-green-700 transition-all">
                                            Reschedule
                                        </button>
                                        <button className="px-6 py-2 bg-red-50 text-red-600 rounded-lg font-bold text-sm hover:bg-red-100 transition-all flex items-center gap-2">
                                            <FaTimesCircle /> Cancel
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Right Column - Cleaner Info */}
                            <div className="bg-gray-50 p-8 md:w-80 border-t md:border-t-0 md:border-l border-gray-100">
                                {booking.cleaner ? (
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Assigned Cleaner</p>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-xl font-bold">
                                                {booking.cleaner.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-800">{booking.cleaner.name}</h4>
                                                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                                    <FaStar /> <span>{booking.cleaner.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 mb-6">{booking.cleaner.jobs}+ cleanings completed</p>
                                        <button className="w-full py-2 bg-white border border-gray-200 text-green-700 rounded-lg font-bold text-sm hover:bg-green-50 transition-all">
                                            View Profile
                                        </button>
                                    </div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-center">
                                        <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-xl mb-3">
                                            <FaClock />
                                        </div>
                                        <p className="text-sm font-bold text-gray-600">Assigning Soon</p>
                                        <p className="text-xs text-gray-400 mt-1">We're finding the best cleaner for you.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
