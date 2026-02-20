"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    FaHome,
    FaCalendarPlus,
    FaClipboardList,
    FaCreditCard,
    FaMapMarkerAlt,
    FaStar,
    FaHeadset,
    FaSignOutAlt,
    FaUserCircle
} from "react-icons/fa";

export default function UserDashboardNav() {
    const router = useRouter();

    function handleLogout() {
        localStorage.removeItem("user");
        router.push("/login");
    }

    const navItems = [
        { label: "Dashboard", href: "/user-dashboard", icon: <FaHome /> },
        { type: "section", label: "Bookings" },
        { label: "Book a Service", href: "/user-dashboard/book", icon: <FaCalendarPlus /> },
        { label: "My Bookings", href: "/user-dashboard/bookings", icon: <FaClipboardList /> },
        { type: "section", label: "Preferences" },
        { label: "Saved Addresses", href: "/user-dashboard/addresses", icon: <FaMapMarkerAlt /> },
        { label: "Reviews & Ratings", href: "/user-dashboard/reviews", icon: <FaStar /> },
        { type: "section", label: "Account" },
        { label: "Profile", href: "/user-dashboard/profile", icon: <FaUserCircle /> },
        { label: "Payments", href: "/user-dashboard/payments", icon: <FaCreditCard /> },
        { label: "Support", href: "/user-dashboard/support", icon: <FaHeadset /> },
    ];

    return (
        <aside className="w-64 bg-[#006400]  text-white border-r border-green-800 p-6 h-full sticky top-0 flex flex-col shadow-2xl">
            <nav className="flex flex-col gap-1 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {navItems.map((item, index) => (
                    item.type === "section" ? (
                        <p key={index} className="text-[10px] font-black uppercase tracking-widest text-green-500 mt-6 mb-2 ml-3">
                            {item.label}
                        </p>
                    ) : (
                        <Link
                            key={index}
                            href={item.href}
                            className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-700 hover:text-yellow-400 text-sm font-bold transition-all active:scale-95"
                        >
                            <span className="text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                                {item.icon}
                            </span>
                            {item.label}
                        </Link>
                    )
                ))}

                <button
                    onClick={handleLogout}
                    className="mt-8 mb-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all text-sm active:scale-95"
                >
                    <FaSignOutAlt className="text-lg" /> Logout
                </button>
            </nav>

            <div className="pt-6 border-t border-green-800 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center">
                    <FaUserCircle className="text-yellow-400" />
                </div>
                <div>
                    <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">Logged in as</p>
                    <p className="text-xs font-bold text-white">Customer</p>
                </div>
            </div>
        </aside>
    );
}
