"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    fullName: "Admin User",
    email: "admin@cleanit.in",
    phone: "+91 98765 43210",
    role: "Super Admin",
    location: "Pune, Maharashtra",
    language: "English, Hindi, Marathi"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

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
    alert("Admin Profile updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2 text-green-800 dark:text-green-700">Admin Profile</h1>
      <p className="text-gray-600 mb-8">Manage your account settings and preferences.</p>

      <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-3xl font-bold">
            {formData.fullName.slice(0, 2).toUpperCase() || "AD"}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">{formData.fullName}</h2>
            <p className="text-gray-500">{formData.role}</p>
            <p className="text-sm text-green-600 font-medium mt-1">Active Status: Online</p>
          </div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Role</label>
            <input type="text" value={formData.role} disabled className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Languages</label>
            <input type="text" name="language" value={formData.language} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800" />
          </div>

          <div className="md:col-span-2 mt-4 pt-4 border-t border-gray-100 flex justify-end gap-3">
            <button type="button" className="px-6 py-2 border border-gray-300 rounded-lg text-gray-600 font-medium hover:bg-gray-50">Cancel</button>
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 shadow-md transition-all active:scale-95"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
