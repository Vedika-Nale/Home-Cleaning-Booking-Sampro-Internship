"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa"; // Run: npm install react-icons

export default function Register() {
  return (
    <main 
      className="flex min-h-screen items-center justify-center bg-cover bg-center p-4 md:p-10"
      style={{ backgroundImage: "url('https://i.pinimg.com/1200x/ca/66/18/ca6618c63565fd61cb0b41570302457a.jpg')" }}
    >
      {/* Main Container */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl min-h-600px rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Left Side: Branding/Welcome (Glassmorphism) */}
        <div className="hidden md:flex md:w-1/2 bg-black/20 backdrop-blur-md p-12 flex-col justify-center text-white border-r border-white/10">
          <h1 className="text-5xl font-bold mb-6">Let's Get Started</h1>
          <p className="text-lg leading-relaxed text-gray-200">
            Create your account, for booking.
          </p>
          <div className="mt-auto">
            <p className="text-sm opacity-50">presented by <span className="font-bold">M</span></p>
          </div>
        </div>

        {/* Right Side: Sign Up Form (Solid Dark) */}
        <div className="w-full md:w-1/2 bg-[#0a0c0a] p-10 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-10">Sign up</h2>

          <form className="space-y-8">
            <div className="relative border-b border-gray-700 pb-2">
              <label className="text-xs text-gray-500 uppercase font-bold">Your name</label>
              <input type="text" className="w-full bg-transparent text-white outline-none pt-1" required />
            </div>

            <div className="relative border-b border-gray-700 pb-2">
              <label className="text-xs text-gray-500 uppercase font-bold">Your Email</label>
              <input type="email" className="w-full bg-transparent text-white outline-none pt-1" required />
            </div>

            <div className="relative border-b border-gray-700 pb-2">
              <label className="text-xs text-gray-500 uppercase font-bold">Create Password</label>
              <input type="password"  className="w-full bg-transparent text-white outline-none pt-1" required />
            </div>

            <div className="relative border-b border-gray-700 pb-2">
              <label className="text-xs text-gray-500 uppercase font-bold">Repeat password</label>
              <input type="password" className="w-full bg-transparent text-white outline-none pt-1" required />
            </div>

            <div className="flex items-center gap-6 mt-10">
              <button 
                type="submit" 
                className="bg-[#008751] hover:bg-[#007043] text-white px-12 py-3 rounded font-bold transition-all"
              >
                Sign up
              </button>

              {/* Vertical Divider for Socials */}
              <div className="flex items-center gap-4 border-l border-gray-700 pl-6">
                <span className="text-xs text-gray-500 font-bold">OR</span>
                <div className="flex gap-4">
                  <button className="text-white hover:text-[#008751]"><FaFacebookF /></button>
                  <button className="text-white hover:text-[#008751]"><FaTwitter /></button>
                  <button className="text-white hover:text-[#008751]"><FaGoogle /></button>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-400">
              Already a Member? <Link href="/login" className="text-[#008751] font-bold hover:underline">Sign in here</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}