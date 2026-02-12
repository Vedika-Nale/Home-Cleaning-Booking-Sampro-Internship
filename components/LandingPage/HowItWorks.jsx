import React from 'react';
import { FaCalendarAlt, FaUserCheck, FaSmile } from 'react-icons/fa';

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Get a pristine home in three simple steps.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="relative">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Online</h3>
                        <p className="text-gray-500 max-w-xs mx-auto">
                            Select your service, choose a date and time, and book your appointment in seconds.
                        </p>
                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-gray-200 -z-10 transform translate-x-1/2"></div>
                    </div>

                    <div className="relative">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">We Clean</h3>
                        <p className="text-gray-500 max-w-xs mx-auto">
                            Our vetted and professional cleaners arrive on time and make your home shine.
                        </p>
                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-gray-200 -z-10 transform translate-x-1/2"></div>
                    </div>

                    <div>
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">You Relax</h3>
                        <p className="text-gray-500 max-w-xs mx-auto">
                            Enjoy your free time and come home to a beautifully clean space.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
