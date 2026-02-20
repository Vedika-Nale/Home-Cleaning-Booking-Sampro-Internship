"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-10 top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <Link href="/">
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <Image
                                        src="/logo.jpeg"
                                        alt="CleanIT Logo"
                                        width={50}
                                        height={50}
                                        className="rounded-md"
                                    />
                                    <span className="text-xl font-extrabold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent tracking-tight">CleanIT</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link href="#services" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                        <Link href="#how-it-works" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">How it Works</Link>
                        <Link href="#testimonials" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Testimonials</Link>
                        <Link href="/login" className="text-green-600 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium border border-green-600 hover:bg-green-50">Login</Link>
                        <Link href="/register" className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium shadow-sm">Sign Up</Link>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link href="#services" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                        <Link href="#how-it-works" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">How it Works</Link>
                        <Link href="#testimonials" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Testimonials</Link>
                        <Link href="/login" className="text-green-600 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                        <Link href="/register" className="bg-green-600 text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">Sign Up</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
