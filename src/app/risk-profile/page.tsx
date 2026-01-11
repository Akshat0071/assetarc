import { redirect } from "next/navigation";
import type { Metadata } from "next";
import SimpleLayout from "@/components/layout/SimpleLayout";
import RiskQuestionnaire from "@/components/risk/RiskQuestionnaire";
import SEO from "@/components/SEO";
import { getServerUser, getServerProfile } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Risk Profiling Questionnaire | Stockstrail",
  description:
    "Answer 11 questions to determine your risk tolerance, investment horizon, and get an indicative allocation profile aligned with Stockstrail's methodology.",
};

export default async function RiskProfilePage() {
  const user = await getServerUser();

  if (!user) {
    redirect("/sign-in?redirect=/risk-profile");
  }

  // Check if phone number exists
  const profile = await getServerProfile(user.id);
  if (!profile?.phone_number) {
    redirect("/complete-profile");
  }

  return (
    <SimpleLayout>
      <SEO
        title="Risk Profiling Questionnaire | Stockstrail"
        description="Gauge your risk tolerance and investment horizon with Stockstrail's 11-question assessment. View your risk profile and indicative allocation instantly."
        url="/risk-profile"
      />
      <RiskQuestionnaire />
    </SimpleLayout>
  );
}

