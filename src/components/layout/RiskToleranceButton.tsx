"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient, getCurrentUser } from "@/lib/supabase/client";

export function RiskToleranceButton() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    
    // Listen for auth state changes
    const supabase = createClient();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      checkAuth();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const checkAuth = async () => {
    try {
      const user = await getCurrentUser();
      setIsAuthenticated(!!user);
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isAuthenticated) {
      router.push("/dashboard");
    } else {
      router.push("/sign-in");
    }
  };

  if (loading) {
    return (
      <Link
        href="/sign-in"
        className="inline-flex items-center gap-4 px-6 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-all duration-300 font-medium group"
      >
        <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:animate-pulse"></div>
        Check Your Risk Tolerance
      </Link>
    );
  }

  return (
    <Link
      href={isAuthenticated ? "/dashboard" : "/sign-in"}
      onClick={handleClick}
      className="inline-flex items-center gap-4 px-6 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-all duration-300 font-medium group"
    >
      <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:animate-pulse"></div>
      Check Your Risk Tolerance
    </Link>
  );
}
