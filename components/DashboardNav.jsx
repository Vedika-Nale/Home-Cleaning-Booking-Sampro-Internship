"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardNav() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("user");
    router.push("/login");
  }

  return (
    <aside className="w-64 bg-[#006400] text-white border-r border-green-700 dark:border-green-800 p-6 h-screen sticky top-0">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-400">Dashboard</h2>
        <p className="text-sm text-green-100">Home Cleaning Admin</p>
      </div>

      <nav className="flex flex-col gap-2">
        <Link href="/dashboard/home" className="px-3 py-2 rounded hover:bg-green-700 hover:text-yellow-300 !text-white transition-colors">Home</Link>
        <Link href="/dashboard/bookings" className="px-3 py-2 rounded hover:bg-green-700 hover:text-yellow-300 !text-white transition-colors">Previous Bookings</Link>
        <Link href="/dashboard/services" className="px-3 py-2 rounded hover:bg-green-700 hover:text-yellow-300 !text-white transition-colors">Book Service</Link>
        <Link href="/dashboard/profile" className="px-3 py-2 rounded hover:bg-green-700 hover:text-yellow-300 !text-white transition-colors">Profile</Link>

        <button onClick={handleLogout} className="mt-6 px-3 py-2 rounded bg-yellow-500 text-green-900 font-bold hover:bg-yellow-400 transition-colors text-left">Logout</button>
      </nav>

      <div className="mt-auto pt-6 border-t border-green-700">
        <p className="text-xs text-green-200">Admin Panel</p>
      </div>
    </aside>
  );
}
