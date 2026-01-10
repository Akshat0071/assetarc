"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * Client-side handler for OAuth callback
 * This handles cases where the OAuth redirect goes to home page with code
 */
export function AuthCallbackHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      // Redirect to the callback route which will handle the code exchange
      router.replace(`/auth/callback?code=${code}`);
    }
  }, [code, router]);

  return null;
}
