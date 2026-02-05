import EmployeeNav from "@/components/EmployeeNav";
import Image from "next/image";
import RequireAuth from "@/components/RequireAuth";

export const metadata = {
    title: "Employee Dashboard - Home Cleaning",
    description: "Manage your tasks, schedule, and earnings.",
};

export default function EmployeeDashboardLayout({ children }) {
    return (
        <RequireAuth>
            <div className="flex min-h-screen bg-gray-50 dark:bg-white">
                <EmployeeNav />
                <main className="flex-1 p-8 overflow-y-auto h-screen relative">
                    <div className="absolute top-4 right-4 z-10">
                        <Image
                            src="/logo.jpeg"
                            alt="CleanIT Logo"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                    </div>
                    {children}
                </main>
            </div>
        </RequireAuth>
    );
}
