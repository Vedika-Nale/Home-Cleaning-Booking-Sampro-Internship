import React from 'react';
import { FaShieldAlt, FaLeaf, FaClock, FaUserTie } from 'react-icons/fa';

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose Us?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        We go above and beyond to provide an exceptional cleaning experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-green-600 shadow-md mb-6">
                            <FaShieldAlt className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Trusted & Vetted</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Every cleaner undergoes a strict background check and interview process.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-green-600 shadow-md mb-6">
                            <FaLeaf className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Eco-Friendly Products</h3>
                        <p className="mt-2 text-base text-gray-500">
                            We use safe, non-toxic cleaning products that are tough on dirt but safe for your family and pets.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-green-600 shadow-md mb-6">
                            <FaClock className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">On-Time Arrival</h3>
                        <p className="mt-2 text-base text-gray-500">
                            We value your time. Our cleaners are punctual and reliable, every single time.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-green-600 shadow-md mb-6">
                            <FaUserTie className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Professional Service</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Our team is trained to deliver high-quality results with a friendly, professional attitude.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
