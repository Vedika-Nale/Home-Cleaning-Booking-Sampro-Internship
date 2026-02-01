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
    <aside className="w-64 bg-[#081007] text-white border-r border-gray-200 dark:border-white/5 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <p className="text-sm text-gray-300">Home Cleaning Admin</p>
      </div>

      <nav className="flex flex-col gap-2">
        <Link href="/dashboard/home" className="px-3 py-2 rounded hover:bg-gray-700 !text-white">Home</Link>
        <Link href="/dashboard/about" className="px-3 py-2 rounded hover:bg-gray-700 !text-white">About Us</Link>
        <Link href="/dashboard/bookings" className="px-3 py-2 rounded hover:bg-gray-700 !text-white">Bookings</Link>
        <Link href="/dashboard/services" className="px-3 py-2 rounded hover:bg-gray-700 !text-white">Book Services</Link>
        <Link href="/dashboard/profile" className="px-3 py-2 rounded hover:bg-gray-700 !text-white">Profile</Link>

        <button onClick={handleLogout} className="mt-6 px-3 py-2 rounded bg-red-500 text-white hover:bg-red-600">Logout</button>
      </nav>

      <p className="text-xs text-gray-400 mt-6">Tip: manage services and bookings here.</p>
    </aside>
  );
}
