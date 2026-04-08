import { redirect } from "next/navigation";
import type { Metadata } from "next";
import SimpleLayout from "@/components/layout/SimpleLayout";
import RiskQuestionnaire from "@/components/risk/RiskQuestionnaire";
import SEO from "@/components/common/SEO";
import { getServerUser, getServerProfile } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Risk Profiling Questionnaire | AssetArc",
  description:
    "Answer 11 questions to determine your risk tolerance, investment horizon, and get an indicative allocation profile aligned with AssetArc's methodology.",
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
        title="Risk Profiling Questionnaire | AssetArc"
        description="Gauge your risk tolerance and investment horizon with AssetArc's 11-question assessment. View your risk profile and indicative allocation instantly."
        url="/risk-profile"
      />
      <RiskQuestionnaire />
    </SimpleLayout>
  );
}

