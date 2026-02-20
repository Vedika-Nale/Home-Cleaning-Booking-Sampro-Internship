"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaUsers, FaUserTie, FaCalendarCheck, FaTags, FaCreditCard, FaExclamationTriangle, FaChartBar, FaSignOutAlt, FaConciergeBell } from "react-icons/fa";

export default function DashboardNav() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("user");
    router.push("/login");
  }

  const navItems = [
    { label: "Overview", href: "/dashboard/home", icon: <FaHome /> },
    { type: "section", label: "Management" },
    { label: "Bookings", href: "/dashboard/bookings", icon: <FaCalendarCheck /> },
    { label: "Customers", href: "/dashboard/customers", icon: <FaUsers /> },
    { label: "Employees", href: "/dashboard/employees", icon: <FaUserTie /> },
    { label: "Services", href: "/dashboard/services", icon: <FaConciergeBell /> },
    { type: "section", label: "Finance & Growth" },
    { label: "Coupons", href: "/dashboard/coupons", icon: <FaTags /> },
    { label: "Payments", href: "/dashboard/payments", icon: <FaCreditCard /> },
    { type: "section", label: "Support & Insights" },
    { label: "Disputes", href: "/dashboard/disputes", icon: <FaExclamationTriangle /> },
    { label: "Profile", href: "/dashboard/profile", icon: <FaUsers /> },
  ];

  return (
    <aside className="w-64 bg-[#006400] text-white border-r border-green-800 p-6 h-full sticky top-0 flex flex-col shadow-2xl">
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
              className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-800 hover:text-yellow-400 text-sm font-bold transition-all active:scale-95"
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

      <div className="pt-6 border-t border-green-800">
        <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">CleanIT Systems v2.4</p>
      </div>
    </aside>
  );
}
