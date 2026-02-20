"use client";

import { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock, FaBell, FaShieldAlt } from "react-icons/fa";

export default function UserProfilePage() {
    const [user, setUser] = useState({ username: "User" });
    const [formData, setFormData] = useState({
        fullName: "",
        email: "user@example.com",
        phone: "+91 98765 43210",
        address: "123, Street Name, City, State",
        notifications: true,
        twoFactor: false
    });

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            try {
                const parsed = JSON.parse(userData);
                setUser(parsed);
                setFormData(prev => ({ ...prev, fullName: parsed.username || "User" }));
            } catch (e) {
                console.error("Failed to parse user data", e);
            }
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSave = () => {
        const userData = localStorage.getItem("user");
        let userObj = {};
        if (userData) {
            try {
                userObj = JSON.parse(userData);
            } catch (e) {
                userObj = {};
            }
        }
        userObj.username = formData.fullName;
        localStorage.setItem("user", JSON.stringify(userObj));
        window.dispatchEvent(new Event("userUpdate"));
        alert("Profile updated successfully!");
    };

    return (
        <div className="max-w-5xl mx-auto pb-12">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-green-800 dark:text-green-700 tracking-tight uppercase italic">
                    My Profile
                </h1>
                <p className="text-gray-500 font-medium">Manage your personal information and account settings</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Profile Card */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-50">
                        <div className="h-32 bg-gradient-to-br from-green-600 to-green-800 relative">
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                                <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                                    <div className="w-full h-full rounded-full bg-green-100 flex items-center justify-center text-green-700 text-3xl font-black border-2 border-green-50">
                                        {formData.fullName.slice(0, 2).toUpperCase() || "US"}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-16 pb-8 px-6 text-center">
                            <h2 className="text-xl font-bold text-gray-800">{formData.fullName}</h2>
                            <p className="text-sm text-green-600 font-bold uppercase tracking-widest mt-1">Verified Member</p>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-3 text-left p-3 rounded-2xl bg-gray-50 text-gray-600">
                                    <FaEnvelope className="text-green-600" />
                                    <span className="text-xs font-medium truncate">{formData.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-left p-3 rounded-2xl bg-gray-50 text-gray-600">
                                    <FaPhone className="text-green-600" />
                                    <span className="text-xs font-medium">{formData.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Settings */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Personal Information */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-50">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-green-100 text-green-700">
                                <FaUser />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Personal Information</h3>
                        </div>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all font-medium text-gray-700"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all font-medium text-gray-700"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all font-medium text-gray-700"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Location</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all font-medium text-gray-700"
                                />
                            </div>
                        </form>
                    </div>

                    {/* Account Security & Preferences */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-50">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-yellow-100 text-yellow-700">
                                    <FaLock />
                                </div>
                                <h3 className="text-lg font-bold text-gray-800">Security</h3>
                            </div>
                            <button className="w-full p-4 bg-gray-50 hover:bg-yellow-50 text-gray-700 font-bold rounded-2xl border border-dashed border-yellow-200 transition-all text-sm mb-4">
                                Change Password
                            </button>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FaShieldAlt className="text-green-500" />
                                    <span className="text-sm font-bold text-gray-600">Two-Factor Auth</span>
                                </div>
                                <input
                                    type="checkbox"
                                    name="twoFactor"
                                    checked={formData.twoFactor}
                                    onChange={handleChange}
                                    className="w-5 h-5 accent-green-600"
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-50">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                                    <FaBell />
                                </div>
                                <h3 className="text-lg font-bold text-gray-800">Preferences</h3>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-bold text-gray-600">Email Notifications</span>
                                <input
                                    type="checkbox"
                                    name="notifications"
                                    checked={formData.notifications}
                                    onChange={handleChange}
                                    className="w-5 h-5 accent-green-600"
                                />
                            </div>
                            <button className="w-full p-3 bg-green-50 text-green-700 font-black uppercase tracking-widest text-[10px] rounded-xl border border-green-100 hover:bg-green-600 hover:text-white transition-all">
                                Update Preferences
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button className="px-8 py-4 rounded-2xl font-bold text-gray-400 hover:bg-gray-100 transition-all uppercase tracking-widest text-xs">
                            Discard
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-8 py-4 rounded-2xl bg-green-600 text-white font-bold hover:bg-green-700 shadow-lg shadow-green-200 transition-all uppercase tracking-widest text-xs active:scale-95"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
