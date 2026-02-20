"use client";

import { FaHeadset, FaPaperPlane, FaQuestionCircle, FaArrowRight, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Support() {
    const faqs = [
        "How do I cancel a booking?",
        "What is included in Deep Cleaning?",
        "How can I pay using UPI?",
        "What if I'm not satisfied with the service?",
        "Can I request the same cleaner again?"
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-[#006400]">Customer Support</h1>
                <p className="text-gray-500">We're here to help you 24/7. Choose how you'd like to connect.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chat Section */}
                <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-green-50 flex flex-col h-[600px] overflow-hidden">
                    <div className="bg-[#006400] p-6 text-white flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                <FaHeadset />
                            </div>
                            <div>
                                <h3 className="font-bold">Live Support Chat</h3>
                                <p className="text-xs text-green-100 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full"></span> Online • Usually responds in 2 mins
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 p-8 overflow-y-auto space-y-6 bg-gray-50/50">
                        <div className="flex gap-3 max-w-[80%]">
                            <div className="w-8 h-8 bg-[#006400] rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">C</div>
                            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-600">
                                Hi Hinal! How can I help you today?
                            </div>
                        </div>

                        <div className="flex gap-3 justify-end">
                            <div className="max-w-[80%] bg-[#006400] p-4 rounded-2xl rounded-tr-none shadow-md text-sm text-white">
                                I wanted to know more about the Deep Cleaning package.
                            </div>
                        </div>

                        <div className="flex gap-3 max-w-[80%]">
                            <div className="w-8 h-8 bg-[#006400] rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">C</div>
                            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-600">
                                Sure! Deep cleaning includes detailed vacuuming, scrubbing of floors, kitchen degreasing, and sanitizing of bathrooms. Would you like to see a detailed checklist?
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white border-t border-gray-100">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="w-full pl-6 pr-16 py-4 bg-gray-100 rounded-2xl border-none focus:ring-2 focus:ring-green-600 outline-none transition-all text-sm"
                            />
                            <button className="absolute right-3 p-3 bg-[#006400] text-white rounded-xl hover:bg-green-800 transition-all shadow-lg shadow-green-200">
                                <FaPaperPlane />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info & FAQs */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <FaQuestionCircle className="text-green-600" /> Popular FAQs
                        </h3>
                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <button key={i} className="w-full text-left p-4 rounded-xl border border-gray-50 hover:border-green-100 hover:bg-green-50/30 transition-all group flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-600 group-hover:text-green-700">{faq}</span>
                                    <FaArrowRight className="text-transparent group-hover:text-green-500 text-xs transition-all" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#006400] to-green-900 p-8 rounded-3xl shadow-lg text-white">
                        <h3 className="font-bold mb-6">Contact Us Directly</h3>
                        <div className="space-y-4">
                            <a href="tel:+919876543210" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <p className="text-[10px] text-green-300 uppercase tracking-widest font-black">Call Us</p>
                                    <p className="font-bold">+91 98765 43210</p>
                                </div>
                            </a>
                            <a href="mailto:support@cleanit.com" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-[10px] text-green-300 uppercase tracking-widest font-black">Email Us</p>
                                    <p className="font-bold">support@cleanit.com</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
