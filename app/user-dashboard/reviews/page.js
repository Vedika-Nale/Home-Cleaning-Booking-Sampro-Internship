"use client";

import { FaStar, FaQuoteLeft, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

export default function Reviews() {
    const reviews = [
        {
            id: 1,
            service: "Deep Home Cleaning",
            cleaner: "Rahul Sharma",
            date: "Oct 25, 2023",
            rating: 5,
            comment: "Absolutely fantastic service. Rahul was very professional and left the house sparkling. Highly recommended!",
            status: "Verified"
        },
        {
            id: 2,
            service: "Regular Cleaning",
            cleaner: "Sneha Patil",
            date: "Oct 15, 2023",
            rating: 4,
            comment: "Good job as usual. Sneha is very punctual and thorough with her work.",
            status: "Verified"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-[#006400]">Ratings & Reviews</h1>
                <p className="text-gray-500">Your feedback helps us maintain high quality service.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-8 rounded-3xl text-white md:col-span-1 flex flex-col items-center justify-center">
                    <h2 className="text-5xl font-black mb-2">4.8</h2>
                    <div className="flex text-white mb-2">
                        {[...Array(5)].map((_, i) => <FaStar key={i} className={i < 4 ? "text-white" : "text-white/50"} />)}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-yellow-100">Average Rating</p>
                </div>
                <div className="md:col-span-3 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
                    <h3 className="font-bold text-gray-800 mb-4">Quality Matters!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        We take your feedback seriously. Every review is shared with the cleaners to help them improve.
                        Keep sharing your experiences to help us serve you better.
                    </p>
                    <div className="mt-6 flex gap-8">
                        <div>
                            <span className="text-2xl font-bold text-gray-800 tracking-tighter">12</span>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Total Reviews</p>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-gray-800 tracking-tighter">10</span>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">5-Star Ratings</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {reviews.map((rev) => (
                    <div key={rev.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 relative group">
                        <div className="absolute top-6 right-8 text-green-50 text-4xl opacity-50 group-hover:text-green-100 transition-colors">
                            <FaQuoteLeft />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{rev.service}</h3>
                                <div className="flex items-center gap-2 text-xs text-gray-400 mt-1 uppercase tracking-widest font-black">
                                    <FaCalendarAlt /> {rev.date} • <FaCheckCircle className="text-green-500" /> {rev.status}
                                </div>
                            </div>
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => <FaStar key={i} className={i < rev.rating ? "text-yellow-500" : "text-gray-100"} />)}
                            </div>
                        </div>
                        <p className="text-gray-600 italic leading-relaxed mb-6">"{rev.comment}"</p>
                        <div className="pt-6 border-t border-gray-50 flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-700 font-bold text-xs">
                                {rev.cleaner.charAt(0)}
                            </div>
                            <p className="text-xs font-bold text-gray-500">Reviewed for <span className="text-green-700">{rev.cleaner}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
