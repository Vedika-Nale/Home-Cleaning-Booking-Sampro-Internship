import React from 'react';
import { FaBroom, FaSprayCan, FaHandSparkles, FaUtensils, FaToilet, FaEllipsisH } from 'react-icons/fa';

export default function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        We offer a variety of cleaning services to meet your specific needs.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white border border-transparent hover:border-green-100">
                        <div className="flex justify-center mb-6">
                            <span className="p-4 rounded-full bg-green-100 text-green-600 transition-transform duration-300 hover:scale-110">
                                <FaBroom className="w-8 h-8" />
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Cleaning</h3>
                        <p className="text-gray-500">
                            Regular cleaning to keep your home fresh and tidy. Includes dusting, vacuuming, mopping, and bathroom/kitchen sanitation.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white border border-transparent hover:border-green-100">
                        <div className="flex justify-center mb-6">
                            <span className="p-4 rounded-full bg-green-100 text-green-600 transition-transform duration-300 hover:scale-110">
                                <FaSprayCan className="w-8 h-8" />
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Deep Cleaning</h3>
                        <p className="text-gray-500">
                            A thorough top-to-bottom clean. Perfect for spring cleaning or homes that haven't been cleaned professionally in a while.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white border border-transparent hover:border-green-100">
                        <div className="flex justify-center mb-6">
                            <span className="p-4 rounded-full bg-green-100 text-green-600 transition-transform duration-300 hover:scale-110">
                                <FaHandSparkles className="w-8 h-8" />
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Move-In/Move-Out</h3>
                        <p className="text-gray-500">
                            Ensure your new home is spotless before you move in, or leave your old place in perfect condition for the next tenants.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white border border-transparent hover:border-green-100">
                        <div className="flex justify-center mb-6">
                            <span className="p-4 rounded-full bg-green-100 text-green-600 transition-transform duration-300 hover:scale-110">
                                <FaUtensils className="w-8 h-8" />
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Kitchen Cleaning</h3>
                        <p className="text-gray-500">
                            Specialized kitchen deep clean including cabinets, appliances, countertops, and floors. Remove grease and grime for a sparkling kitchen.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white border border-transparent hover:border-green-100">
                        <div className="flex justify-center mb-6">
                            <span className="p-4 rounded-full bg-green-100 text-green-600 transition-transform duration-300 hover:scale-110">
                                <FaToilet className="w-8 h-8" />
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Bathroom Cleaning</h3>
                        <p className="text-gray-500">
                            Complete bathroom sanitization including toilets, showers, tiles, mirrors, and fixtures. Deep cleaning for hygiene and freshness.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white border border-transparent hover:border-green-100">
                        <div className="flex justify-center mb-6">
                            <span className="p-4 rounded-full bg-green-100 text-green-600 transition-transform duration-300 hover:scale-110">
                                <FaEllipsisH className="w-8 h-8" />
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Services</h3>
                        <p className="text-gray-500">
                            Need something specific? We offer customized cleaning solutions for your unique requirements. Contact us for a personalized quote.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
