export default function EmployeeTasks() {
    const allTasks = [
        { id: 1, date: "2026-02-04", time: "10:00 AM", customer: "Amit Sharma", service: "Deep Cleaning", status: "Pending", address: "Flat 4, Koregaon Park, Pune" },
        { id: 2, date: "2026-02-04", time: "2:00 PM", customer: "Priya Patel", service: "Standard Cleaning", status: "Confirmed", address: "102, Kalyani Nagar, Pune" },
        { id: 3, date: "2026-02-05", time: "9:00 AM", customer: "Rahul Verma", service: "Deep Cleaning", status: "Completed", address: "Row House 7, Kothrud, Pune" },
        { id: 4, date: "2026-02-06", time: "11:00 AM", customer: "Sneha Gupta", service: "Move-out Cleaning", status: "Cancelled", address: "Plot 45, Shivaji Nagar, Pune" },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-green-800">My Tasks</h1>

            <div className="bg-white dark:bg-white rounded-lg shadow-md border border-gray-100 dark:border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-green-50 dark:bg-green-50">
                            <tr className="border-b-2 border-green-100 dark:border-green-100 text-green-800 dark:text-green-800 text-sm font-semibold">
                                <th className="py-4 px-6">Date</th>
                                <th className="py-4 px-6">Time</th>
                                <th className="py-4 px-6">Customer</th>
                                <th className="py-4 px-6">Service</th>
                                <th className="py-4 px-6">Address</th>
                                <th className="py-4 px-6">Status</th>
                                <th className="py-4 px-6">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-100">
                            {allTasks.map((task) => (
                                <tr key={task.id} className="hover:bg-green-50 dark:hover:bg-green-50 transition-colors">
                                    <td className="py-4 px-6 text-gray-800 dark:text-gray-800">{task.date}</td>
                                    <td className="py-4 px-6 text-gray-800 dark:text-gray-800">{task.time}</td>
                                    <td className="py-4 px-6 text-gray-600 dark:text-gray-600 font-medium">{task.customer}</td>
                                    <td className="py-4 px-6 text-gray-600 dark:text-gray-600">{task.service}</td>
                                    <td className="py-4 px-6 text-gray-600 dark:text-gray-600">{task.address}</td>
                                    <td className="py-4 px-6">
                                        <span className={`px-2 py-1 rounded text-xs font-semibold
                      ${task.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                                                task.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                    task.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-red-100 text-red-700'
                                            }`}>
                                            {task.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <button className="text-green-600 hover:text-green-800 font-medium text-sm">View Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
