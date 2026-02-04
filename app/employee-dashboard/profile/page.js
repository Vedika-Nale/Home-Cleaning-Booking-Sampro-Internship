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
            <h1 className="text-3xl font-bold mb-6 text-green-800">My Profile</h1>

            <div className="bg-white dark:bg-white rounded-lg shadow-md border border-gray-100 dark:border-gray-200 p-8 max-w-2xl">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-100 flex items-center justify-center text-4xl text-green-600 dark:text-green-600 border-2 border-green-200 dark:border-green-200">
                        👤
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-800">{profile.name}</h2>
                        <p className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded-md inline-block mt-1 border border-green-200">Verified Employee</p>
                    </div>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded border-gray-300 dark:border-gray-300 bg-white dark:bg-white dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded border-gray-300 dark:border-gray-300 bg-gray-50 dark:bg-gray-50 dark:text-gray-800"
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-700 mb-2">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                className="w-full p-2 border rounded border-gray-300 dark:border-gray-300 bg-white dark:bg-white dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-700 mb-2">Specialization</label>
                            <input
                                type="text"
                                name="specialization"
                                value={profile.specialization}
                                onChange={handleChange}
                                className="w-full p-2 border rounded border-gray-300 dark:border-gray-300 bg-white dark:bg-white dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-700 mb-2">Address</label>
                        <textarea
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                            rows="3"
                            className="w-full p-2 border rounded border-gray-300 dark:border-gray-300 bg-white dark:bg-white dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <button type="button" className="px-6 py-2 bg-green-600 text-white rounded font-bold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg border-b-4 border-green-800 active:border-b-0 active:mt-1">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
