import Link from "next/link";

export default function DashboardRoot() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p className="text-gray-600 mb-6">Choose a section from the left to get started.</p>
      <Link href="/dashboard/home" className="inline-block bg-[#008751] text-white px-6 py-3 rounded font-bold">Go to Home</Link>
    </div>
  );
}
