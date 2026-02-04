import EmployeeNav from "@/components/EmployeeNav";
import RequireAuth from "@/components/RequireAuth";

export const metadata = {
    title: "Employee Dashboard - Home Cleaning",
    description: "Manage your tasks, schedule, and earnings.",
};

export default function EmployeeDashboardLayout({ children }) {
    return (
        <RequireAuth>
            <div className="flex min-h-screen bg-gray-50 dark:bg-[#060606]">
                <EmployeeNav />
                <main className="flex-1 p-8 overflow-y-auto h-screen">
                    {children}
                </main>
            </div>
        </RequireAuth>
    );
}
