export default function DashboardLayout({ children }) {
  return (
    /* 1. THE OUTERMOST WRAPPER NOW HOLDS THE IMAGE */
    <div 
      className="flex min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/be/bc/a6/bebca64c84536b6b4cebc1b0954bb0dc.jpg')" }}
    >
      
      {/* 2. SIDEBAR WITH GLASS EFFECT */}
      <aside className="w-64 bg-black/50 backdrop-blur-lg border-r border-white/10 flex flex-col text-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-xs text-gray-400">Home Cleaning Admin</p>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <a href="/dashboard/home" className="block px-4 py-3 hover:bg-white/10 rounded-lg transition-all">Home</a>
          <a href="/dashboard/bookings" className="block px-4 py-3 hover:bg-white/10 rounded-lg transition-all">Bookings</a>
          <a href="/dashboard/services" className="block px-4 py-3 hover:bg-white/10 rounded-lg transition-all">Services</a>
          <a href="/dashboard/profile" className="block px-4 py-3 hover:bg-white/10 rounded-lg transition-all">Profile</a>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="w-full bg-red-500/80 hover:bg-red-600 py-3 rounded-lg font-bold transition-all">
            Logout
          </button>
        </div>
      </aside>

      {/* 3. MAIN CONTENT AREA WITH SEMI-TRANSPARENT OVERLAY */}
      <main className="flex-1 bg-black/30 backdrop-blur-[6px] overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}