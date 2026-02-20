"use client";

import { FaCalendarAlt, FaStar, FaCreditCard, FaClock } from "react-icons/fa";
import Link from "next/link";

export default function UserDashboard() {
    const stats = [
        { label: "Active Bookings", value: "2", icon: <FaCalendarAlt />, color: "bg-blue-500" },
        { label: "Total Spent", value: "₹4,500", icon: <FaCreditCard />, color: "bg-green-500" },
        { label: "Points Earned", value: "150", icon: <FaStar />, color: "bg-yellow-500" },
        { label: "Average Rating", value: "4.8", icon: <FaStar />, color: "bg-purple-500" },
    ];

    const upcomingBookings = [
        {
            id: "BK-101",
            service: "Deep Home Cleaning",
            date: "Oct 25, 2023",
            time: "10:00 AM",
            status: "Confirmed",
            cleaner: "Rahul Sharma",
        },
        {
            id: "BK-105",
            service: "Kitchen Cleaning",
            date: "Nov 02, 2023",
            time: "02:00 PM",
            status: "Pending",
            cleaner: "TBD",
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-[#006400]">Welcome back, Hinal!</h1>
                <p className="text-gray-500">Here's what's happening with your cleaning services.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 transition-transform hover:scale-105">
                        <div className={`${stat.color} p-4 rounded-xl text-white text-xl`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Upcoming Bookings */}
                <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Upcoming Bookings</h2>
                        <Link href="/user-dashboard/bookings" className="text-green-600 font-semibold hover:underline text-sm">
                            View all
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {upcomingBookings.map((booking) => (
                            <div key={booking.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold">
                                        <FaClock />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{booking.service}</h4>
                                        <p className="text-sm text-gray-500">{booking.date} at {booking.time}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${booking.status === "Confirmed" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                                        }`}>
                                        {booking.status}
                                    </span>
                                    <p className="text-xs text-gray-400 mt-1">Cleaner: {booking.cleaner}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-3 bg-[#006400] text-white rounded-xl font-bold hover:bg-green-800 transition-colors flex items-center justify-center gap-2">
                        <FaCalendarAlt /> Book New Service
                    </button>
                </div>

                {/* Quick Help / Support */}
                <div className="bg-gradient-to-br from-[#006400] to-green-800 p-8 rounded-2xl shadow-lg text-white">
                    <h2 className="text-xl font-bold mb-4">Need Help?</h2>
                    <p className="text-green-100 text-sm mb-6">
                        Having trouble with a booking? Our customer support team is available 24/7 to assist you.
                    </p>
                    <div className="space-y-3">
                        <Link href="/user-dashboard/support" className="block w-full py-3 bg-white text-green-700 text-center rounded-xl font-bold hover:bg-green-50 transition-colors">
                            Chat Support
                        </Link>
                        <button className="block w-full py-3 bg-green-500/30 border border-green-400/50 text-white text-center rounded-xl font-bold hover:bg-green-500/50 transition-colors text-sm">
                            View FAQs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
