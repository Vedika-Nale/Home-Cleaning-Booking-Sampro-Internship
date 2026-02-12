"use client";
import React from 'react';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

export default function Pricing() {
    const plans = [
        {
            name: "Basic Clean",
            price: "₹999",
            duration: "per session",
            features: [
                "Dusting & Vacuuming",
                "Floor Mopping",
                "Bathroom Cleaning",
                "Kitchen Surfaces",
                "Up to 2 Bedrooms"
            ],
            popular: false
        },
        {
            name: "Deep Clean",
            price: "₹1,999",
            duration: "per session",
            features: [
                "Everything in Basic",
                "Deep Kitchen Clean",
                "Appliance Cleaning",
                "Window Cleaning",
                "Balcony Cleaning",
                "Up to 3 Bedrooms"
            ],
            popular: true
        },
        {
            name: "Premium Package",
            price: "₹2,999",
            duration: "per session",
            features: [
                "Everything in Deep Clean",
                "Carpet Cleaning",
                "Furniture Polishing",
                "Wall Cleaning",
                "Terrace Cleaning",
                "Unlimited Bedrooms"
            ],
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Choose the perfect cleaning package for your needs
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.popular ? 'ring-2 ring-green-600' : ''
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-sm font-semibold">
                                    POPULAR
                                </div>
                            )}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-extrabold text-green-600">{plan.price}</span>
                                    <span className="text-gray-500 ml-2">{plan.duration}</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start">
                                            <FaCheck className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/login"
                                    className={`block w-full text-center py-3 px-6 rounded-md font-semibold transition-colors ${plan.popular
                                            ? 'bg-green-600 text-white hover:bg-green-700'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                >
                                    Choose Plan
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
