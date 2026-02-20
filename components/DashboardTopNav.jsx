"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

export default function DashboardTopNav({ type = "user" }) {
    const router = useRouter();
    const [username, setUsername] = useState("");

    useEffect(() => {
        const fetchUsername = () => {
            const userData = localStorage.getItem("user");
            if (userData) {
                try {
                    const parsedUser = JSON.parse(userData);
                    setUsername(parsedUser.username || (type === "admin" ? "Admin" : "User"));
                } catch (e) {
                    setUsername(type === "admin" ? "Admin" : "User");
                }
            } else {
                setUsername(type === "admin" ? "Admin" : "User");
            }
        };

        fetchUsername();

        window.addEventListener("userUpdate", fetchUsername);
        return () => window.removeEventListener("userUpdate", fetchUsername);
    }, [type]);

    function handleLogout() {
        localStorage.removeItem("user");
        router.push("/login");
    }

    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 fixed w-full z-20 top-0 left-0 h-16 transition-all duration-300">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo & Name */}
                    <div className="flex items-center">
                        <Link href="/">
                            <div className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
                                    <Image
                                        src="/logo.jpeg"
                                        alt="CleanIT Logo"
                                        width={40}
                                        height={40}
                                        className="transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <span className="text-xl font-extrabold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent tracking-tight">
                                    CleanIT
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Right Side: Profile & Logout */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link href={type === "admin" ? "/dashboard/profile" : "/user-dashboard/profile"}>
                            <div className="flex items-center gap-2 sm:gap-3 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-green-200 cursor-pointer group/profile">
                                <span className="text-sm font-bold text-gray-700 hidden sm:inline group-hover/profile:text-green-600 transition-colors">{username}</span>
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center border-2 border-white shadow-inner group-hover/profile:border-green-200 transition-all">
                                    <FaUserCircle className="text-green-600 text-2xl" />
                                </div>
                            </div>
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 font-bold text-sm hover:bg-red-600 hover:text-white transition-all duration-300 group shadow-sm active:scale-95"
                        >
                            <FaSignOutAlt className="group-hover:translate-x-1 transition-transform" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
