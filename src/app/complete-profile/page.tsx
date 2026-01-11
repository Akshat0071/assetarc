"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, createClient } from "@/lib/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SimpleLayout from "@/components/layout/SimpleLayout";
import SEO from "@/components/common/SEO";
import { Loader2 } from "lucide-react";

export default function CompleteProfilePage() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkProfile = async () => {
    try {
      const user = await getCurrentUser();
      if (!user) {
        router.push("/sign-in");
        return;
      }

      const supabase = createClient();
      const { data: profile, error: fetchError } = await supabase
        .from("profiles")
        .select("phone_number")
        .eq("id", user.id)
        .single();

      if (fetchError) {
        console.error("Error fetching profile:", fetchError);
        setError("Failed to load profile. Please try again.");
        setChecking(false);
        return;
      }

      // If phone number exists, redirect to dashboard or risk profile
      if (profile?.phone_number) {
        // Check if user has attempts
        const { data: attempts } = await supabase
          .from("risk_attempts")
          .select("id")
          .eq("user_id", user.id)
          .limit(1);

        if (attempts && attempts.length > 0) {
          router.push("/dashboard");
        } else {
          router.push("/risk-profile");
        }
        return;
      }

      setChecking(false);
    } catch (err) {
      console.error("Error checking profile:", err);
      setError("An error occurred. Please try again.");
      setChecking(false);
    }
    };

    checkProfile();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate phone number (basic Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanedPhone = phoneNumber.replace(/\D/g, "");

    if (!cleanedPhone || cleanedPhone.length !== 10 || !phoneRegex.test(cleanedPhone)) {
      setError("Please enter a valid 10-digit phone number");
      setLoading(false);
      return;
    }

    try {
      const user = await getCurrentUser();
      if (!user) {
        router.push("/sign-in");
        return;
      }

      const supabase = createClient();
      
      // Update the phone number in the profile (profile should already exist from trigger)
      const { error: updateError } = await supabase
        .from("profiles")
        .update({ phone_number: cleanedPhone })
        .eq("id", user.id);

      if (updateError) {
        console.error("Error updating profile:", updateError);
        throw updateError;
      }

      // Redirect to risk profile for new users, dashboard for existing
      const { data: attempts } = await supabase
        .from("risk_attempts")
        .select("id")
        .eq("user_id", user.id)
        .gte("visibility", 1)
        .limit(1);

      if (attempts && attempts.length > 0) {
        router.push("/dashboard");
      } else {
        router.push("/risk-profile");
      }
    } catch (err: any) {
      console.error("Error updating profile:", err);
      const errorMessage = err?.message || err?.error_description || "Failed to save phone number. Please try again.";
      setError(errorMessage);
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <SimpleLayout>
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 min-h-screen flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </section>
      </SimpleLayout>
    );
  }

  return (
    <SimpleLayout>
      <SEO
        title="Complete Your Profile | Stockstrail"
        description="Add your phone number to complete your profile"
        url="/complete-profile"
      />
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#072923] via-[#031815] to-[#010d0c] opacity-90" />
        <div className="max-w-md w-full mx-auto">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-product-sans text-white">
                Complete Your Profile
              </CardTitle>
              <CardDescription className="text-white/70">
                We need your phone number to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Phone Number <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="9876543210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    minLength={10}
                    maxLength={10}
                    pattern="[6-9]\d{9}"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                  <p className="text-xs text-white/60">
                    Enter your 10-digit mobile number (without country code)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-all duration-300 font-medium text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full" />
                      Continue
                    </>
                  )}
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </SimpleLayout>
  );
}
