"use client";
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'basic',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would submit to an API
        alert('Thank you! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: 'basic',
            message: ''
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Get a Quick Quote
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Fill out the form below and we'll get back to you within 24 hours
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                                    placeholder="+91 1234567890"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                    Service Needed
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                                >
                                    <option value="basic">Basic Clean</option>
                                    <option value="deep">Deep Clean</option>
                                    <option value="premium">Premium Package</option>
                                    <option value="custom">Custom Quote</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Additional Details
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                                    placeholder="Tell us about your cleaning needs..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transform transition-all hover:scale-105 shadow-lg"
                            >
                                Request Quote
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            <p className="text-gray-600 mb-8">
                                Have questions or need immediate assistance? Reach out to us through any of the channels below.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <FaPhone className="w-6 h-6 text-green-600" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                                    <p className="text-gray-600">+91 1800-CLEAN-IT</p>
                                    <p className="text-sm text-gray-500">Mon-Sat, 8AM-9PM</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <FaEnvelope className="w-6 h-6 text-green-600" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                                    <p className="text-gray-600">support@cleanit.com</p>
                                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <FaMapMarkerAlt className="w-6 h-6 text-green-600" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-gray-900">Main Office</h4>
                                    <p className="text-gray-600">Kalyani Nagar, Pune, Maharashtra, India</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
