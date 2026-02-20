import UserDashboardNav from "@/components/UserDashboardNav";
import DashboardTopNav from "@/components/DashboardTopNav";
import Footer from "@/components/Footer";

export default function UserDashboardLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-white text-gray-900">
            <DashboardTopNav type="user" />
            <div className="flex flex-1 pt-16 h-screen overflow-hidden">
                <UserDashboardNav />
                <main className="flex-1 p-8 overflow-y-auto flex flex-col relative">
                    <div className="flex-1">
                        {children}
                    </div>
                    <div className="mt-auto pt-8">
                        <Footer />
                    </div>
                </main>
            </div>
        </div>
    );
}
