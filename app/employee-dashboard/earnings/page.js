import { FaDollarSign, FaChartLine, FaHistory } from 'react-icons/fa';

export default function EmployeeEarnings() {
    const earningsHistory = [
        { id: 1, date: "2026-02-04", service: "Deep Cleaning", amount: "₹2,500.00", status: "Paid" },
        { id: 2, date: "2026-02-02", service: "Standard Cleaning", amount: "₹1,800.00", status: "Paid" },
        { id: 3, date: "2026-02-01", service: "Move-out Cleaning", amount: "₹5,000.00", status: "Paid" },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-green-800">Earnings & Payments</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-600 rounded-lg p-6 text-white shadow-lg border-b-4 border-green-800">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold opacity-90">Total Earnings (Feb)</h3>
                        <FaDollarSign className="text-2xl opacity-75" />
                    </div>
                    <p className="text-3xl font-bold">₹25,000.00</p>
                    <p className="text-sm opacity-75 mt-2">+12% from last month</p>
                </div>

                <div className="bg-yellow-500 rounded-lg p-6 text-white shadow-lg border-b-4 border-yellow-700">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold opacity-90 text-green-900">Pending Payout</h3>
                        <FaChartLine className="text-2xl opacity-75 text-green-900" />
                    </div>
                    <p className="text-3xl font-bold text-green-900">₹8,500.00</p>
                    <p className="text-sm opacity-75 mt-2 text-green-900">Next payout: Feb 15</p>
                </div>

                <div className="bg-green-700 rounded-lg p-6 text-white shadow-lg border-b-4 border-green-900">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold opacity-90">Completed Jobs</h3>
                        <FaHistory className="text-2xl opacity-75" />
                    </div>
                    <p className="text-3xl font-bold">18</p>
                    <p className="text-sm opacity-75 mt-2">This month</p>
                </div>
            </div>

            <div className="bg-white dark:bg-white rounded-lg shadow-md border border-gray-100 dark:border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-6 text-green-800">Payment History</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b-2 border-green-100 dark:border-green-100 text-green-800 dark:text-green-800 text-sm font-semibold">
                                <th className="pb-4">Date</th>
                                <th className="pb-4">Service</th>
                                <th className="pb-4 text-right">Amount</th>
                                <th className="pb-4 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-100">
                            {earningsHistory.map((item) => (
                                <tr key={item.id} className="hover:bg-green-50 dark:hover:bg-green-50 transition-colors">
                                    <td className="py-4 text-gray-600 dark:text-gray-600">{item.date}</td>
                                    <td className="py-4 text-gray-800 dark:text-gray-800 font-medium">{item.service}</td>
                                    <td className="py-4 text-right text-gray-800 dark:text-gray-800 font-bold">{item.amount}</td>
                                    <td className="py-4 text-right">
                                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">{item.status}</span>
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
