"use client";

import { useState } from 'react';

export default function EmployeeSchedule() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    const scheduleItems = [
        { id: 1, time: "10:00 AM - 12:00 PM", title: "Deep Cleaning - Amit Sharma", type: "work", address: "Flat 4, Koregaon Park, Pune, Maharashtra, India" },
        { id: 2, time: "12:00 PM - 1:00 PM", title: "Lunch Break", type: "break" },
        { id: 3, time: "2:00 PM - 4:00 PM", title: "Standard Cleaning - Priya Patel", type: "work", address: "102, Bandra West, Mumbai, Maharashtra, India" },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">My Schedule</h1>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="p-2 border rounded border-gray-300 dark:border-gray-700 dark:bg-[#1a1a1a] dark:text-white"
                />
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md border border-gray-100 dark:border-gray-800 p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Timeline for {selectedDate}</h2>

                <div className="space-y-6">
                    {scheduleItems.map((item) => (
                        <div key={item.id} className="flex">
                            <div className="w-32 text-gray-500 dark:text-gray-400 font-medium pt-1">
                                {item.time}
                            </div>
                            <div className={`flex-1 p-4 rounded-lg border ${item.type === 'work'
                                ? 'bg-blue-50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-900/30'
                                : 'bg-orange-50 border-orange-100 dark:bg-orange-900/20 dark:border-orange-900/30'
                                }`}>
                                <h3 className={`font-bold ${item.type === 'work' ? 'text-blue-800 dark:text-blue-300' : 'text-orange-800 dark:text-orange-300'
                                    }`}>
                                    {item.title}
                                </h3>
                                {item.type === 'work' && (
                                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">koregaon park,pune</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
