"use client";
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How do I book a cleaning service?",
            answer: "Simply create an account, select your desired service package, choose a date and time, and confirm your booking. You'll receive a confirmation email with all the details."
        },
        {
            question: "Are your cleaners verified and trained?",
            answer: "Yes! All our cleaners undergo thorough background checks and professional training. We ensure they meet our high standards of quality and professionalism."
        },
        {
            question: "What if I need to reschedule or cancel?",
            answer: "You can reschedule or cancel up to 24 hours before your appointment without any charges. Changes can be made through your account dashboard or by contacting our support team."
        },
        {
            question: "Do I need to provide cleaning supplies?",
            answer: "No! Our cleaners bring all necessary cleaning supplies and equipment. However, if you have specific products you'd like us to use, we're happy to accommodate."
        },
        {
            question: "What areas do you serve?",
            answer: "We serve all over the city. Enter your location during booking to check if we're available in your area."
        },
        {
            question: "How long does a typical cleaning session take?",
            answer: "Basic cleaning takes 2-3 hours, deep cleaning 4-6 hours, depending on your home size. Our cleaners work efficiently to ensure thorough cleaning."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Got questions? We've got answers!
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                            >
                                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <FaChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                                ) : (
                                    <FaChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 py-4 bg-gray-50 text-gray-600">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
