"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, TrendingUp, Calendar, Award, Eye, Trash2, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { User } from "@supabase/supabase-js";
import type { Profile, RiskAttempt } from "@/lib/supabase/types";
import { formatDate } from "@/lib/utils";
import { RiskAnalysisModal } from "./RiskAnalysisModal";
import { ResponsesModal } from "./ResponsesModal";
import { createClient } from "@/lib/supabase/client";

interface DashboardContentProps {
  user: User;
  profile: Profile | null;
  latestAttempt: RiskAttempt | null;
  allAttempts: RiskAttempt[];
  canTakeAssessment: boolean;
}

const riskCategoryColors = {
  Conservative: "bg-blue-500/20 text-blue-400 border-blue-500/40",
  "Moderately Conservative": "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
  Moderate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
  "Moderately Aggressive": "bg-orange-500/20 text-orange-400 border-orange-500/40",
  Aggressive: "bg-red-500/20 text-red-400 border-red-500/40",
};

export function DashboardContent({
  user,
  profile,
  latestAttempt,
  allAttempts,
  canTakeAssessment,
}: DashboardContentProps) {
  const router = useRouter();
  const [selectedAttempt, setSelectedAttempt] = useState<RiskAttempt | null>(null);
  const [analysisModalOpen, setAnalysisModalOpen] = useState(false);
  const [responsesModalOpen, setResponsesModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleViewAnalysis = (attempt: RiskAttempt) => {
    setSelectedAttempt(attempt);
    setAnalysisModalOpen(true);
  };

  const handleViewResponses = (attempt: RiskAttempt) => {
    setSelectedAttempt(attempt);
    setResponsesModalOpen(true);
  };

  const handleDelete = async (attemptId: string) => {
    if (!confirm("Are you sure you want to delete this attempt? This action cannot be undone.")) {
      return;
    }

    setDeletingId(attemptId);

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from("risk_attempts")
        .update({ visibility: 1 }) // Deleted by user
        .eq("id", attemptId);

      if (error) {
        throw error;
      }

      // Refresh the page to update the list
      router.refresh();
    } catch (err: any) {
      console.error("Error deleting attempt:", err);
      alert("Failed to delete attempt. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#072923] via-[#031815] to-[#010d0c] opacity-90" />
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="font-product-sans text-4xl sm:text-5xl font-normal text-white">
                Welcome back,{" "}
                <span className="gradient-text">
                  {profile?.full_name || user.email?.split("@")[0] || "User"}
                </span>
              </h1>
              <p className="text-white/70 text-lg">
                Manage your risk profile and track your investment journey
              </p>
            </div>
            <Link 
              href="/" 
              className="inline-flex items-center text-white/50 hover:text-stockstrail-green-light transition-colors duration-300 font-work-sans text-sm sm:text-base group shrink-0"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </header>

        {/* Latest Risk Profile */}
        {latestAttempt ? (
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="bg-white/5 border-white/10 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-stockstrail-green-light" />
                  Latest Risk Profile
                </CardTitle>
                <CardDescription className="text-white/70">
                  Your most recent assessment results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <div>
                    <p className="text-white/60 text-sm">Risk Score</p>
                    <p className="text-4xl font-semibold text-stockstrail-green-light">
                      {latestAttempt.score}
                    </p>
                    <p className="text-white/60 text-sm">/ 100</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm mb-2">Risk Category</p>
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${
                        riskCategoryColors[
                          latestAttempt.risk_category as keyof typeof riskCategoryColors
                        ] || riskCategoryColors.Moderate
                      }`}
                    >
                      {latestAttempt.risk_category}
                    </span>
                  </div>
                </div>

                {latestAttempt.investment_horizon && (
                  <div>
                    <p className="text-white/60 text-sm mb-1">Investment Horizon</p>
                    <p className="text-white font-medium">
                      {latestAttempt.investment_horizon}
                    </p>
                  </div>
                )}

                <div>
                  <p className="text-white/60 text-sm mb-1">Assessment Date</p>
                  <p className="text-white font-medium">
                    {formatDate(latestAttempt.created_at)}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/risk-profile"
                    className="inline-flex items-center gap-2 text-stockstrail-green-light hover:text-stockstrail-green-accent transition-colors text-sm font-medium"
                  >
                    View Full Questionnaire
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <Award className="w-5 h-5 text-stockstrail-green-light" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-white/60 text-sm">Total Assessments</p>
                  <p className="text-2xl font-semibold text-white">
                    {allAttempts.length}
                  </p>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Attempts Remaining</p>
                  <p className="text-2xl font-semibold text-stockstrail-green-light">
                    {Math.max(0, 5 - allAttempts.length)}
                  </p>
                </div>
                {allAttempts.length > 0 && (
                  <div>
                    <p className="text-white/60 text-sm">Average Score</p>
                    <p className="text-2xl font-semibold text-white">
                      {Math.round(
                        allAttempts.reduce((sum, a) => sum + a.score, 0) /
                          allAttempts.length
                      )}
                    </p>
                  </div>
                )}
                <div className={`pt-4 ${allAttempts.length > 0 ? 'border-t border-white/10' : ''}`}>
                  <Button
                    onClick={() => router.push("/risk-profile")}
                    disabled={!canTakeAssessment}
                    className="w-full bg-stockstrail-green-light text-stockstrail-bg hover:bg-stockstrail-green-light/90 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {canTakeAssessment
                      ? "Take Assessment"
                      : "Maximum Attempts Reached (5/5)"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-xl">Get Started</CardTitle>
              <CardDescription className="text-white/70">
                Take your first risk assessment to discover your investment profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => router.push("/risk-profile")}
                className="bg-stockstrail-green-light text-stockstrail-bg hover:bg-stockstrail-green-light/90 font-medium"
              >
                Take Risk Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Attempts History */}
        {allAttempts.length > 0 && (
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center gap-2">
                <Calendar className="w-5 h-5 text-stockstrail-green-light" />
                Assessment History
              </CardTitle>
              <CardDescription className="text-white/70">
                All your risk profiling attempts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                        Attempt #
                      </th>
                      <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                        Score
                      </th>
                      <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                        Risk Category
                      </th>
                      <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allAttempts.map((attempt) => (
                      <tr
                        key={attempt.id}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 px-4 text-white">
                          {attempt.attempt_number}
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-stockstrail-green-light font-semibold">
                            {attempt.score}
                          </span>
                          <span className="text-white/60 text-sm ml-1">/ 100</span>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
                              riskCategoryColors[
                                attempt.risk_category as keyof typeof riskCategoryColors
                              ] || riskCategoryColors.Moderate
                            }`}
                          >
                            {attempt.risk_category}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-white/80 text-sm">
                          {formatDate(attempt.created_at)}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleViewAnalysis(attempt)}
                              className="text-white/70 hover:text-stockstrail-green-light hover:bg-white/10 h-8"
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Analysis
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleViewResponses(attempt)}
                              className="text-white/70 hover:text-stockstrail-green-light hover:bg-white/10 h-8"
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Responses
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDelete(attempt.id)}
                              disabled={deletingId === attempt.id}
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-8"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Modals */}
        <RiskAnalysisModal
          attempt={selectedAttempt}
          open={analysisModalOpen}
          onOpenChange={setAnalysisModalOpen}
        />
        <ResponsesModal
          attemptId={selectedAttempt?.id || null}
          open={responsesModalOpen}
          onOpenChange={setResponsesModalOpen}
        />
      </div>
    </section>
  );
}
