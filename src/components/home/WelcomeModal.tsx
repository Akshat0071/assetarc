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
      <DialogContent className="bg-stockstrail-bg border-white/10 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-product-sans text-white">
            Check Your Risk Tolerance{" "}
            <span className="gradient-text">for Free</span>
          </DialogTitle>
          <DialogDescription className="text-white/70 pt-2">
            Take our comprehensive 11-question risk profiling questionnaire to
            discover your investment risk tolerance and get personalized
            allocation recommendations.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          <Button
            onClick={handleGetStarted}
            className="w-full bg-stockstrail-green-light text-stockstrail-bg hover:bg-stockstrail-green-light/90 font-medium"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="w-full border-white/20 text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light"
          >
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
