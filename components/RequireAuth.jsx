"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RequireAuth({ children }) {
  const router = useRouter();

  useEffect(() => {
    try {
      const user = localStorage.getItem("user");
      if (!user) {
        router.replace("/login");
      }
    } catch (e) {
      router.replace("/login");
    }
  }, [router]);

  return children || null;
}
