"use client";

import { useState } from "react";
import { FaCalendarCheck, FaClock, FaCheckCircle, FaTrash } from "react-icons/fa";

export default function BookService() {
    const [formData, setFormData] = useState({
        serviceType: "",
        date: "",
        timeSlot: "",
        address: "",
        notes: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const services = [
        { id: 1, name: "Regular Cleaning", price: "₹999", description: "Standard daily cleaning service." },
        { id: 2, name: "Deep Cleaning", price: "₹2,499", description: "Thorough cleaning for every corner." },
        { id: 3, name: "Kitchen Cleaning", price: "₹1,499", description: "Degreasing and sanitizing kitchen." },
        { id: 4, name: "Bathroom Cleaning", price: "₹899", description: "Removing scales and deep sanitization." },
    ];

    const timeSlots = [
        "09:00 AM - 11:00 AM",
        "11:00 AM - 01:00 PM",
        "02:00 PM - 04:00 PM",
        "04:00 PM - 06:00 PM",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, this would send data to an API
    };

    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto mt-20 text-center p-12 bg-white rounded-3xl shadow-xl border border-green-50">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                    <FaCheckCircle />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Booking Initialized!</h2>
                <p className="text-gray-500 mb-8">
                    Your request for <span className="font-bold text-green-600">{formData.serviceType}</span> on <span className="font-bold">{formData.date}</span> has been received. A cleaner will be assigned shortly.
                </p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => setSubmitted(false)}
                        className="px-8 py-3 bg-[#006400] text-white rounded-xl font-bold hover:bg-green-700 transition-all"
                    >
                        Book Another
                    </button>
                    <button className="px-8 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-all">
                        View My Bookings
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#006400]">Book a Service</h1>
                <p className="text-gray-500">Select your preferred cleaning service and schedule.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Select Service Type</label>
                        <div className="grid grid-cols-1 gap-3">
                            {services.map((service) => (
                                <label
                                    key={service.id}
                                    className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.serviceType === service.name ? "border-[#006400] bg-green-50" : "border-gray-100 hover:border-green-200"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="serviceType"
                                        className="sr-only"
                                        onChange={() => setFormData({ ...formData, serviceType: service.name })}
                                        required
                                    />
                                    <div className="flex-1">
                                        <p className="font-bold text-gray-800">{service.name}</p>
                                        <p className="text-xs text-gray-400">{service.description}</p>
                                    </div>
                                    <div className="text-green-700 font-black">{service.price}</div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                            <FaCalendarCheck className="text-green-600" /> Select Date
                        </label>
                        <input
                            type="date"
                            className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-[#006400] outline-none transition-all"
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                            <FaClock className="text-green-600" /> Select Time Slot
                        </label>
                        <select
                            className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-[#006400] outline-none transition-all appearance-none"
                            onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                            required
                        >
                            <option value="">Choose a time...</option>
                            {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Cleaning Address</label>
                        <textarea
                            className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-[#006400] outline-none transition-all"
                            rows="3"
                            placeholder="Enter full address..."
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-[#006400] text-white rounded-xl font-bold hover:bg-green-800 transition-all shadow-lg shadow-green-100 flex items-center justify-center gap-2"
                    >
                        Confirm Booking
                    </button>
                </div>
            </form>
        </div>
    );
}
