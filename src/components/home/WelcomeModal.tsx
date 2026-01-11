"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getCurrentUser } from "@/lib/supabase/client";

export function WelcomeModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthAndShowModal();
  }, []);

  const checkAuthAndShowModal = async () => {
    try {
      const user = await getCurrentUser();
      
      // Only show modal if user is not authenticated
      if (!user) {
        // Check if modal was already shown (using sessionStorage)
        const hasSeenModal = sessionStorage.getItem("hasSeenWelcomeModal");
        if (!hasSeenModal) {
          setOpen(true);
          sessionStorage.setItem("hasSeenWelcomeModal", "true");
        }
      }
    } catch {
      // Silently handle auth errors (e.g., session missing during OAuth flow)
      // Only show modal if no code is in URL (meaning not in OAuth flow)
      const urlParams = new URLSearchParams(window.location.search);
      const hasCode = urlParams.has("code");
      
      if (!hasCode) {
        const hasSeenModal = sessionStorage.getItem("hasSeenWelcomeModal");
        if (!hasSeenModal) {
          setOpen(true);
          sessionStorage.setItem("hasSeenWelcomeModal", "true");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGetStarted = () => {
    setOpen(false);
    router.push("/sign-in");
  };

  if (loading) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-stockstrail-bg border border-white/10 text-white sm:max-w-md rounded-2xl shadow-2xl">
        <DialogHeader className="space-y-4">
          {/* Icon / Badge */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-stockstrail-green-light/10 border border-stockstrail-green-light/30 mx-auto">
            <ArrowRight className="w-5 h-5 text-stockstrail-green-light" />
          </div>
  
          {/* Title */}
          <DialogTitle className="text-center text-2xl font-product-sans text-white leading-tight">
            Discover Your{" "}
            <span className="gradient-text">Risk Tolerance</span>
          </DialogTitle>
  
          {/* Subtitle */}
          <DialogDescription className="text-center text-white/70 text-sm px-2">
            Answer a few quick questions to understand how much investment risk
            fits you best.
          </DialogDescription>
        </DialogHeader>
  
        {/* Value Points */}
        <div className="mt-6 space-y-3 text-sm text-white/80">
          <div className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-stockstrail-green-light" />
            <p>11-question assessment designed by investment experts</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-stockstrail-green-light" />
            <p>Personalized risk category & asset allocation insights</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-stockstrail-green-light" />
            <p>Takes less than 3 minutes to complete</p>
          </div>
        </div>
  
        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 pt-6">
          <Button
            onClick={handleGetStarted}
            className="w-full bg-stockstrail-green-light text-stockstrail-bg hover:bg-stockstrail-green-light/90 font-medium h-11 rounded-lg"
          >
            Check My Risk Profile
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
  
}
