"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // NOTE: This is a simple client-side mock login for scaffold purposes.
    // Replace with real auth (NextAuth / server session) for production.
    const user = { username };
    localStorage.setItem('user', JSON.stringify(user));

    router.push('/dashboard/home');
  }

  return (
    <main 
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://i.pinimg.com/1200x/77/e5/7e/77e57e5a09caf5d188cfbf02502154c6.jpg')" }}
    >
      <div className="w-full max-w-md p-10 bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-4xl font-bold text-white text-center mb-8 uppercase tracking-widest">
          Login Form
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-semibold uppercase tracking-wider">User Name</label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="User Name" className="w-full p-3 rounded bg-white text-black outline-none" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-semibold uppercase tracking-wider">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="border-none w-full p-3 rounded bg-white text-black outline-none" required />
          </div>
          <button type="submit" className="mt-4 w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition-all uppercase">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-white text-sm">
          Don't have an account?{' '}
          <Link href="/register" className="text-yellow-300 font-semibold underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}