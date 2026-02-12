"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaUsers, FaBroom, FaCity, FaStar } from 'react-icons/fa';

export default function Stats() {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState({
        customers: 0,
        jobs: 0,
        cities: 0,
        satisfaction: 0
    });
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const targets = {
            customers: 500,
            jobs: 1000,
            cities: 5,
            satisfaction: 98
        };

        const duration = 2000; // 2 seconds
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;

            setCounts({
                customers: Math.floor(targets.customers * progress),
                jobs: Math.floor(targets.jobs * progress),
                cities: Math.floor(targets.cities * progress),
                satisfaction: Math.floor(targets.satisfaction * progress)
            });

            if (step >= steps) {
                clearInterval(timer);
                setCounts(targets);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="py-20 bg-green-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="text-center">
                        <FaUsers className="w-12 h-12 mx-auto mb-4 text-white" />
                        <div className="text-4xl font-bold text-white mb-2">{counts.customers.toLocaleString()}+</div>
                        <div className="text-green-100">Happy Customers</div>
                    </div>

                    <div className="text-center">
                        <FaBroom className="w-12 h-12 mx-auto mb-4 text-white" />
                        <div className="text-4xl font-bold text-white mb-2">{counts.jobs.toLocaleString()}+</div>
                        <div className="text-green-100">Jobs Completed</div>
                    </div>
                    <div className="text-center">
                        <FaCity className="w-12 h-12 mx-auto mb-4 text-white" />
                        <div className="text-4xl font-bold text-white mb-2">{counts.cities.toLocaleString()}+</div>
                        <div className="text-green-100">Offices Within City</div>
                    </div>

                

                    <div className="text-center">
                        <FaStar className="w-12 h-12 mx-auto mb-4 text-white" />
                        <div className="text-4xl font-bold text-white mb-2">{counts.satisfaction}%</div>
                        <div className="text-green-100">Rating</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
