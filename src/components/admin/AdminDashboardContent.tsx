"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, Filter, ArrowUpDown, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RiskAnalysisModal } from "@/components/dashboard/RiskAnalysisModal";
import { ResponsesModal } from "@/components/dashboard/ResponsesModal";
import { createClient } from "@/lib/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { RiskAttemptWithProfile } from "@/lib/supabase/types";
import { formatDate } from "@/lib/utils";

interface AdminDashboardContentProps {
  attempts: RiskAttemptWithProfile[];
  currentPage: number;
  totalPages: number;
  filters: {
    email: string;
    category: string;
  };
}

const riskCategories = [
  "Conservative",
  "Moderately Conservative",
  "Moderate",
  "Moderately Aggressive",
  "Aggressive",
];

const riskCategoryColors = {
  Conservative: "bg-blue-500/20 text-blue-400 border-blue-500/40",
  "Moderately Conservative": "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
  Moderate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
  "Moderately Aggressive": "bg-orange-500/20 text-orange-400 border-orange-500/40",
  Aggressive: "bg-red-500/20 text-red-400 border-red-500/40",
};

export function AdminDashboardContent({
  attempts,
  currentPage,
  totalPages,
  filters,
}: AdminDashboardContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [emailFilter, setEmailFilter] = useState(filters.email);
  const [categoryFilter, setCategoryFilter] = useState(filters.category);
  const [selectedAttempt, setSelectedAttempt] = useState<RiskAttemptWithProfile | null>(null);
  const [analysisModalOpen, setAnalysisModalOpen] = useState(false);
  const [responsesModalOpen, setResponsesModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleViewAnalysis = (attempt: RiskAttemptWithProfile) => {
    setSelectedAttempt(attempt);
    setAnalysisModalOpen(true);
  };

  const handleViewResponses = (attempt: RiskAttemptWithProfile) => {
    setSelectedAttempt(attempt);
    setResponsesModalOpen(true);
  };

  const handleDelete = async (attemptId: string) => {
    if (!confirm("Are you sure you want to delete this attempt? This will hide it from all views but retain it in the database.")) {
      return;
    }

    setDeletingId(attemptId);

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from("risk_attempts")
        .update({ visibility: 0 }) // Deleted by admin
        .eq("id", attemptId);

      if (error) {
        throw error;
      }

      router.refresh();
    } catch (err: any) {
      console.error("Error deleting attempt:", err);
      alert("Failed to delete attempt. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const updateFilters = (newFilters: { email?: string; category?: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (newFilters.email !== undefined) {
      if (newFilters.email) {
        params.set("email", newFilters.email);
      } else {
        params.delete("email");
      }
    }

    if (newFilters.category !== undefined) {
      if (newFilters.category) {
        params.set("category", newFilters.category);
      } else {
        params.delete("category");
      }
    }

    params.set("page", "1"); // Reset to first page
    router.push(`/admin?${params.toString()}`);
  };

  const handleEmailSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ email: emailFilter });
  };

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`/admin?${params.toString()}`);
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#072923] via-[#031815] to-[#010d0c] opacity-90" />
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="font-product-sans text-4xl sm:text-5xl font-normal text-white">
            Admin <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-white/70 text-lg">
            Manage and view all user risk profiling attempts
          </p>
        </header>

        {/* Filters */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center gap-2">
              <Filter className="w-5 h-5 text-stockstrail-green-light" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <form onSubmit={handleEmailSearch} className="space-y-2">
                <label htmlFor="email" className="text-white/70 text-sm">
                  Filter by Email
                </label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="user@example.com"
                    value={emailFilter}
                    onChange={(e) => setEmailFilter(e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                  <Button
                    type="submit"
                    className="bg-stockstrail-green-light text-stockstrail-bg hover:bg-stockstrail-green-light/90"
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
                {filters.email && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setEmailFilter("");
                      updateFilters({ email: "" });
                    }}
                    className="text-xs border-white/20 text-white hover:border-stockstrail-green-light"
                  >
                    Clear email filter
                  </Button>
                )}
              </form>

              <div className="space-y-2">
                <label htmlFor="category" className="text-white/70 text-sm">
                  Filter by Risk Category
                </label>
                <Select
                  value={categoryFilter}
                  onValueChange={(value) => updateFilters({ category: value })}
                >
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-stockstrail-bg border-white/10">
                    <SelectItem value="">All categories</SelectItem>
                    {riskCategories.map((cat) => (
                      <SelectItem key={cat} value={cat} className="text-white">
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {filters.category && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setCategoryFilter("");
                      updateFilters({ category: "" });
                    }}
                    className="text-xs border-white/20 text-white hover:border-stockstrail-green-light"
                  >
                    Clear category filter
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center gap-2">
              <ArrowUpDown className="w-5 h-5 text-stockstrail-green-light" />
              Risk Attempts (Sorted by Highest Score)
            </CardTitle>
            <CardDescription className="text-white/70">
              Showing {attempts.length} result{attempts.length !== 1 ? "s" : ""}
              {filters.email && ` for ${filters.email}`}
              {filters.category && ` with ${filters.category} profile`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {attempts.length === 0 ? (
              <div className="text-center py-12 text-white/60">
                No attempts found matching your filters.
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          User Email
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Name
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Score
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Risk Category
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Attempt #
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Date
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Visibility
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {attempts.map((attempt) => {
                        const profile = Array.isArray(attempt.profiles)
                          ? attempt.profiles[0]
                          : attempt.profiles;

                        const visibilityLabels: Record<number, { label: string; color: string }> = {
                          2: { label: "Visible", color: "bg-green-500/20 text-green-400 border-green-500/40" },
                          1: { label: "Deleted by User", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40" },
                          0: { label: "Deleted by Admin", color: "bg-red-500/20 text-red-400 border-red-500/40" },
                        };

                        const visibilityInfo = visibilityLabels[attempt.visibility] || visibilityLabels[2];

                        return (
                          <tr
                            key={attempt.id}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors"
                          >
                            <td className="py-3 px-4 text-white">
                              {profile?.email || "N/A"}
                            </td>
                            <td className="py-3 px-4 text-white/80">
                              {profile?.full_name || "—"}
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
                            <td className="py-3 px-4 text-white">
                              {attempt.attempt_number}
                            </td>
                            <td className="py-3 px-4 text-white/80 text-sm">
                              {formatDate(attempt.created_at)}
                            </td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${visibilityInfo.color}`}>
                                {visibilityInfo.label}
                              </span>
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
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                    <div className="text-white/70 text-sm">
                      Page {currentPage} of {totalPages}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => changePage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="border-white/20 text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light disabled:opacity-50"
                      >
                        Previous
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => changePage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="border-white/20 text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light disabled:opacity-50"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>

        {/* Modals */}
        {selectedAttempt && (
          <>
            <RiskAnalysisModal
              attempt={selectedAttempt}
              open={analysisModalOpen}
              onOpenChange={setAnalysisModalOpen}
            />
            <ResponsesModal
              attemptId={selectedAttempt.id}
              open={responsesModalOpen}
              onOpenChange={setResponsesModalOpen}
            />
          </>
        )}
      </div>
    </section>
  );
}
