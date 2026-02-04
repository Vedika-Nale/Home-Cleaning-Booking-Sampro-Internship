"use client";

import { useState } from "react";

export default function EmployeeProfile() {
    const [profile, setProfile] = useState({
        name: "Rajesh Kumar",
        email: "rajesh.kumar@example.com",
        phone: "+91 98765 43210",
        address: "B-201, Shanti Nagar, Andheri East, Mumbai",
        specialization: "Deep Cleaning, Carpet Cleaning",
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">My Profile</h1>

            <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md border border-gray-100 dark:border-gray-800 p-8 max-w-2xl">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl text-gray-500">
                        👤
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{profile.name}</h2>
                        <p className="text-green-600 font-medium">Verified Employee</p>
                    </div>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded border-gray-300 dark:border-gray-700 dark:bg-[#111] dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded border-gray-300 dark:border-gray-700 dark:bg-[#111] dark:text-white"
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                className="w-full p-2 border rounded border-gray-300 dark:border-gray-700 dark:bg-[#111] dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Specialization</label>
                            <input
                                type="text"
                                name="specialization"
                                value={profile.specialization}
                                onChange={handleChange}
                                className="w-full p-2 border rounded border-gray-300 dark:border-gray-700 dark:bg-[#111] dark:text-white"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                        <textarea
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                            rows="3"
                            className="w-full p-2 border rounded border-gray-300 dark:border-gray-700 dark:bg-[#111] dark:text-white"
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <button type="button" className="px-6 py-2 bg-green-600 text-white rounded font-medium hover:bg-green-700 transition-colors">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
