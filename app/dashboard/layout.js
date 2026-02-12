import DashboardNav from "@/components/DashboardNav";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-white">
      <DashboardNav />
      <main className="flex-1 p-8 overflow-y-auto h-screen relative flex flex-col">
        <div className="absolute top-4 right-4 z-10">
          <Image
            src="/logo.jpeg"
            alt="CleanIT Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}