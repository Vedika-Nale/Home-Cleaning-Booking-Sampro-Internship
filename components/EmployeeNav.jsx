"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EmployeeNav() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("user");
    router.push("/login");
  }

  return (
    <aside className="w-64 bg-[#081007] text-white border-r border-gray-200 dark:border-white/5 p-6 h-screen sticky top-0">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Employee Panel</h2>
        <p className="text-sm text-gray-300">Manage your work</p>
      </div>

      <nav className="flex flex-col gap-2">
        <Link href="/employee-dashboard" className="px-3 py-2 rounded hover:bg-gray-700 !text-white transition-colors">Overview</Link>
        <Link href="/employee-dashboard/tasks" className="px-3 py-2 rounded hover:bg-gray-700 !text-white transition-colors">My Tasks</Link>
        <Link href="/employee-dashboard/schedule" className="px-3 py-2 rounded hover:bg-gray-700 !text-white transition-colors">Schedule</Link>
        <Link href="/employee-dashboard/earnings" className="px-3 py-2 rounded hover:bg-gray-700 !text-white transition-colors">Earnings</Link>
        <Link href="/employee-dashboard/profile" className="px-3 py-2 rounded hover:bg-gray-700 !text-white transition-colors">Profile</Link>

        <button onClick={handleLogout} className="mt-6 px-3 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors text-left">Logout</button>
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">Keep your availability updated!</p>
      </div>
    </aside>
  );
}
