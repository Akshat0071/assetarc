"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { RiskAttempt, RiskAttemptWithProfile } from "@/lib/supabase/types";

interface RiskAnalysisModalProps {
  attempt: RiskAttempt | RiskAttemptWithProfile | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const riskProfiles = {
  Conservative: {
    allocation: "Fixed Income 90% · Equity 10%",
    description:
      "Primary concern is capital preservation, liquidity, and stability. Expect inflation-aligned returns with limited equity exposure to maintain purchasing power.",
  },
  "Moderately Conservative": {
    allocation: "Fixed Income 70% · Equity 30%",
    description:
      "Ready to accept some volatility for higher returns while keeping capital risk limited. Heavy fixed income tilt with a modest equity kicker for long-term growth.",
  },
  Moderate: {
    allocation: "Fixed Income 40% · Equity 60%",
    description:
      "Balanced approach aiming for both income and appreciation. Diversified exposure to both equity and fixed income for stability and tax efficiency over the long term.",
  },
  "Moderately Aggressive": {
    allocation: "Fixed Income 10% · Equity 90% (Primarily large cap)",
    description:
      "Prepared for moderately high risk to achieve long-term wealth creation. Comfortable with volatility but prefer large-cap focus to contain downside risk.",
  },
  Aggressive: {
    allocation: "Fixed Income 10% · Equity 90% (Diversified across caps)",
    description:
      "Wealth creation focused with high risk tolerance and long horizon. Emphasis on equities across market caps to capture higher potential returns and alpha.",
  },
};

export function RiskAnalysisModal({
  attempt,
  open,
  onOpenChange,
}: RiskAnalysisModalProps) {
  if (!attempt) return null;

  const profileInfo =
    riskProfiles[attempt.risk_category as keyof typeof riskProfiles];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-stockstrail-bg border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-product-sans text-white">
            Risk Profile Analysis
          </DialogTitle>
          <DialogDescription className="text-white/70">
            Detailed analysis of your risk assessment
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">Risk Score</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-stockstrail-green-light">
                    {attempt.score}
                  </span>
                  <span className="text-white/60">/ 100</span>
                </div>
                <Progress value={(attempt.score / 100) * 100} />
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">Risk Category</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-xl font-semibold text-stockstrail-green-light">
                  {attempt.risk_category}
                </span>
              </CardContent>
            </Card>

            {attempt.investment_horizon && (
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    Investment Horizon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-lg text-white">
                    {attempt.investment_horizon}
                  </span>
                </CardContent>
              </Card>
            )}
          </div>

          {profileInfo && (
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Allocation Guidance
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    Risk Profile
                  </p>
                  <p className="text-2xl text-stockstrail-green-light font-semibold">
                    {attempt.risk_category}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {profileInfo.description}
                  </p>
                </div>
                <div className="space-y-3 rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    Indicative Allocation
                  </p>
                  <p className="text-lg text-white font-semibold">
                    {profileInfo.allocation}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
