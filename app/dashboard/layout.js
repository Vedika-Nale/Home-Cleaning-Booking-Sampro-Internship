import DashboardNav from "@/components/DashboardNav";
import DashboardTopNav from "@/components/DashboardTopNav";
import Footer from "@/components/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-white text-gray-900">
      <DashboardTopNav type="admin" />
      <div className="flex flex-1 pt-16 h-screen overflow-hidden">
        <DashboardNav />
        <main className="flex-1 p-8 overflow-y-auto flex flex-col relative">
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}