import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import RiskQuestionnaire from "@/components/risk/RiskQuestionnaire";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: "Risk Profiling Questionnaire | Stockstrail",
  description:
    "Answer 11 questions to determine your risk tolerance, investment horizon, and get an indicative allocation profile aligned with Stockstrail’s methodology.",
};

export default function RiskProfilePage() {
  return (
    <Layout>
      <SEO
        title="Risk Profiling Questionnaire | Stockstrail"
        description="Gauge your risk tolerance and investment horizon with Stockstrail’s 11-question assessment. View your risk profile and indicative allocation instantly."
        url="/risk-profile"
      />
      <RiskQuestionnaire />
    </Layout>
  );
}

