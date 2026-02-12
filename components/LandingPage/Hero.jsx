"use client";
import React from 'react';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative bg-black overflow-hidden mt-16">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://i.pinimg.com/1200x/77/e5/7e/77e57e5a09caf5d188cfbf02502154c6.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block">Professional home cleaning</span>
                            <span className="block text-green-400">made simple</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                            Book trusted cleaners in minutes. We provide top-notch cleaning services tailored to your needs, so you can focus on what matters most.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                            <div className="rounded-md shadow">
                                <Link href="/login" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                                    Book Now
                                </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <Link href="#services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-900 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
