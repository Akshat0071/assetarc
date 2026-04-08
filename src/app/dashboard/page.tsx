import { redirect } from "next/navigation";
import { createClient, getServerUser, getServerProfile } from "@/lib/supabase/server";
import SimpleLayout from "@/components/layout/SimpleLayout";
import SEO from "@/components/common/SEO";
import { DashboardContent } from "@/components/features/risk-assessment/dashboard/DashboardContent";
import type { RiskAttempt } from "@/lib/supabase/types";

export const metadata = {
  title: "Dashboard | AssetArc",
  description: "View your risk profile and investment history",
};

export default async function DashboardPage() {
  const user = await getServerUser();

  if (!user) {
    redirect("/sign-in?redirect=/dashboard");
  }

  const profile = await getServerProfile(user.id);
  const supabase = await createClient();

  // Get user's risk attempts (only visible ones - visibility = 2)
  const { data: attempts, error } = await supabase
    .from("risk_attempts")
    .select("*")
    .eq("user_id", user.id)
    .eq("visibility", 2) // Only show attempts visible to user (2 = visible, 1 = deleted by user, 0 = deleted by admin)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching attempts:", error);
  }

  // Get total attempt count (including deleted ones) for counter
  const { count: totalAttemptCount } = await supabase
    .from("risk_attempts")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id)
    .gte("visibility", 1); // Count all attempts visible to user (1 or 2, excluding admin-deleted)

  const latestAttempt = attempts && attempts.length > 0 ? attempts[0] : null;
  const attemptCount = totalAttemptCount || 0; // Use total count including deleted
  const canTakeAssessment = attemptCount < 5;

  return (
    <SimpleLayout>
      <SEO
        title="Dashboard | AssetArc"
        description="View your risk profile and investment history"
        url="/dashboard"
      />
      <DashboardContent
        user={user}
        profile={profile}
        latestAttempt={latestAttempt as RiskAttempt | null}
        allAttempts={(attempts as RiskAttempt[]) || []}
        canTakeAssessment={canTakeAssessment}
      />
    </SimpleLayout>
  );
}
