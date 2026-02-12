import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Our Customers Say</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Don't just take our word for it. Here's what our happy customers have to say.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex mb-4 text-yellow-400">
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </div>
                        <p className="text-gray-600 mb-6 italic">
                            "The team did an amazing job! My house has never looked this clean. They were professional, punctual, and paying attention to detail."
                        </p>
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold">
                                AD
                            </div>
                            <div className="ml-3">
                                <h4 className="text-sm font-bold text-gray-900">Aarya Desai</h4>
                                <p className="text-sm text-gray-500">Homeowner</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex mb-4 text-yellow-400">
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </div>
                        <p className="text-gray-600 mb-6 italic">
                            "I booked a deep clean for my parents' house and they were thrilled with the results. Highly recommend CleanHome services!"
                        </p>
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold">
                                MR
                            </div>
                            <div className="ml-3">
                                <h4 className="text-sm font-bold text-gray-900">Mayur Rana</h4>
                                <p className="text-sm text-gray-500">Satisfied Customer</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex mb-4 text-yellow-400">
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </div>
                        <p className="text-gray-600 mb-6 italic">
                            "Great service at a reasonable price. The booking process was super easy and the cleaners were very friendly."
                        </p>
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold">
                                AP
                            </div>
                            <div className="ml-3">
                                <h4 className="text-sm font-bold text-gray-900">Ayush Patel</h4>
                                <p className="text-sm text-gray-500">Regular Client</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
