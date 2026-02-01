import DashboardNav from "@/components/DashboardNav";
import RequireAuth from "@/components/RequireAuth";

export const metadata = {
  title: "Dashboard - Home Cleaning",
};

export default function DashboardLayout({ children }) {
  return (
    <RequireAuth>
      <div className="flex min-h-screen bg-gray-50 dark:bg-[#060606]">
        <DashboardNav />
        <div className="flex-1 p-8">{children}</div>
      </div>
    </RequireAuth>
  );
}
