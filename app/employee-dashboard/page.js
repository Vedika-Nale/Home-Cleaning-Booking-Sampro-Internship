import Link from "next/link";
import { FaTasks, FaCalendarAlt, FaWallet, FaUser } from 'react-icons/fa';

export default function EmployeeDashboardHome() {
    const stats = [
        { title: "Tasks Today", value: "3", icon: <FaTasks />, color: "bg-green-600" },
        { title: "Upcoming", value: "8", icon: <FaCalendarAlt />, color: "bg-yellow-500" },
        { title: "Earnings (Month)", value: "₹25,000", icon: <FaWallet />, color: "bg-green-700" },
        { title: "Rating", value: "4.8", icon: <FaUser />, color: "bg-yellow-400" },
    ];

    const upcomingTasks = [
        { id: 1, customer: "Amit Sharma", time: "10:00 AM", status: "Pending", address: "Flat 4, Koregaon Park, Pune" },
        { id: 2, customer: "Priya Patel", time: "2:00 PM", status: "Confirmed", address: "102, Bandra West, Mumbai" },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-400">Welcome Back, Employee!</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 flex items-center">
                        <div className={`p-4 rounded-full text-white mr-4 ${stat.color} text-xl`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">{stat.title}</p>
                            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white dark:bg-white rounded-lg shadow-md border border-gray-100 dark:border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-green-800 dark:text-green-400">Today's Schedule</h2>
                    <Link href="/employee-dashboard/schedule" className="text-yellow-600 hover:text-yellow-700 hover:underline text-sm font-semibold">View Full Schedule</Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b-2 border-green-100 dark:border-green-900 text-green-800 dark:text-green-400 text-sm font-semibold">
                                <th className="pb-3 pl-2">Time</th>
                                <th className="pb-3">Customer</th>
                                <th className="pb-3">Address</th>
                                <th className="pb-3">Status</th>
                                <th className="pb-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-100">
                            {upcomingTasks.map((task) => (
                                <tr key={task.id} className="hover:bg-green-50 dark:hover:bg-green-50 transition-colors">
                                    <td className="py-4 pl-2 font-medium text-gray-800 dark:text-gray-800">{task.time}</td>
                                    <td className="py-4 text-gray-600 dark:text-gray-600">{task.customer}</td>
                                    <td className="py-4 text-gray-600 dark:text-gray-600">{task.address}</td>
                                    <td className="py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${task.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                            {task.status}
                                        </span>
                                    </td>
                                    <td className="py-4">
                                        <button className="text-green-600 hover:text-green-800 font-medium text-sm">Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {upcomingTasks.length === 0 && <p className="text-center text-gray-500 py-4">No tasks for today.</p>}
                </div>
            </div>
        </div>
    );
}
