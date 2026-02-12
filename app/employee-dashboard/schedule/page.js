"use client";

import { useState } from 'react';

export default function EmployeeSchedule() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    const scheduleItems = [
        { id: 1, time: "10:00 AM - 12:00 PM", title: "Deep Cleaning - Amit Sharma", type: "work", address: "Flat 4, Koregaon Park, Pune, Maharashtra, India" },
        { id: 2, time: "12:00 PM - 1:00 PM", title: "Lunch Break", type: "break" },
        { id: 3, time: "2:00 PM - 4:00 PM", title: "Standard Cleaning - Priya Patel", type: "work", address: "102, Kalyani Nagar, Pune, Maharashtra, India" },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-6 pr-24">
                <h1 className="text-3xl font-bold text-green-800">My Schedule</h1>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="p-2 border rounded border-green-300 dark:border-green-300 bg-white dark:bg-white text-gray-800 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <div className="bg-white dark:bg-white rounded-lg shadow-md border border-gray-100 dark:border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-6 text-green-800">Timeline for {selectedDate}</h2>

                <div className="space-y-6">
                    {scheduleItems.map((item) => (
                        <div key={item.id} className="flex">
                            <div className="w-32 text-gray-500 font-medium pt-1">
                                {item.time}
                            </div>
                            <div className={`flex-1 p-4 rounded-lg border-l-4 ${item.type === 'work'
                                ? 'bg-green-50 border-green-500 dark:bg-green-50 dark:border-green-500'
                                : 'bg-yellow-50 border-yellow-400 dark:bg-yellow-50 dark:border-yellow-400'
                                }`}>
                                <h3 className={`font-bold ${item.type === 'work' ? 'text-green-900' : 'text-yellow-800'
                                    }`}>
                                    {item.title}
                                </h3>
                                {item.type === 'work' && (
                                    <p className="text-sm text-green-700 mt-1">{item.address}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
