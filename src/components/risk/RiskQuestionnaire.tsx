/* eslint-disable react/no-unescaped-entities */
"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, RefreshCw, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

type RiskProfileKey =
  | "Conservative"
  | "Moderately Conservative"
  | "Moderate"
  | "Moderately Aggressive"
  | "Aggressive";

type HorizonKey =
  | "Short term"
  | "Medium to long term"
  | "Long term"
  | "Long to very long term"
  | "Very long term";

type QuestionOption = {
  id: string;
  label: string;
  score: number;
};

type Question = {
  id: string;
  title: string;
  helper?: string;
  options: QuestionOption[];
};

const riskQuestions: Question[] = [
  {
    id: "q1",
    title:
      "What percentage of your monthly income (after paying home loan EMIs and credit card bills) do you save and invest for the long term?",
    options: [
      { id: "a", label: "Less than 5%", score: 1 },
      { id: "b", label: "5 to 10%", score: 4 },
      { id: "c", label: "10 to 20%", score: 7 },
      { id: "d", label: "More than 20%", score: 10 },
    ],
  },
  {
    id: "q2",
    title: "How much of your investment portfolio may you have to withdraw in the next five years?",
    options: [
      { id: "a", label: "More than 30%", score: 1 },
      { id: "b", label: "20 - 30%", score: 4 },
      { id: "c", label: "10 - 20%", score: 7 },
      { id: "d", label: "Less than 10%", score: 10 },
    ],
  },
  {
    id: "q3",
    title:
      "How secure do you feel about your salary or business income continuing for the next 10 years?",
    options: [
      { id: "a", label: "Not secure at all", score: 1 },
      { id: "b", label: "Somewhat secure", score: 4 },
      { id: "c", label: "Fairly secure", score: 7 },
      { id: "d", label: "Very secure", score: 10 },
    ],
  },
  {
    id: "q4",
    title: "What is your attitude towards savings?",
    options: [
      {
        id: "a",
        label: "Lifestyle is important right now; I can save later.",
        score: 1,
      },
      {
        id: "b",
        label: "I’d like to save, but financial liabilities limit me.",
        score: 4,
      },
      {
        id: "c",
        label:
          "I try to save a fixed amount every month plus a big portion of my one-time cash flows.",
        score: 7,
      },
      {
        id: "d",
        label:
          "I save a fixed percentage of salary every month; I don’t rely on one-time cash-flows.",
        score: 10,
      },
    ],
  },
  {
    id: "q5",
    title:
      "To get above-average (more than FD) returns you have to take risks.",
    options: [
      { id: "a", label: "Strongly disagree", score: 1 },
      { id: "b", label: "Disagree", score: 4 },
      { id: "c", label: "Agree", score: 7 },
      { id: "d", label: "Strongly agree", score: 10 },
    ],
  },
  {
    id: "q6",
    title: "How will you describe your attitude towards investing?",
    options: [
      { id: "a", label: "Protect your capital", score: 1 },
      { id: "b", label: "Ready for small amount of loss, but not much", score: 4 },
      {
        id: "c",
        label:
          "Ready for reasonable amount of short-term loss as long as money grows in the long term",
        score: 7,
      },
      {
        id: "d",
        label:
          "Short-term losses do not matter if you have conviction in long-term investments",
        score: 10,
      },
    ],
  },
  {
    id: "q7",
    title: "If your equity investment makes 20% losses next year you will:",
    options: [
      {
        id: "a",
        label: "Sell your investments and put the proceeds in fixed deposits",
        score: 1,
      },
      {
        id: "b",
        label: "Sell some investments which made high losses and continue to hold some",
        score: 4,
      },
      { id: "c", label: "Do nothing", score: 7 },
      {
        id: "d",
        label: "Take advantage of the correction and invest some more money",
        score: 10,
      },
    ],
  },
  {
    id: "q8",
    title: "Have you invested in mutual funds before? If yes, for how many years?",
    options: [
      { id: "a", label: "Never", score: 1 },
      { id: "b", label: "1 to 3 years", score: 4 },
      { id: "c", label: "3 to 5 years", score: 7 },
      { id: "d", label: "More than 5 years", score: 10 },
    ],
  },
  {
    id: "q9",
    title: "Are you interested in markets and investing?",
    options: [
      { id: "a", label: "I have no interest", score: 1 },
      { id: "b", label: "I do not follow business news and the markets regularly", score: 4 },
      { id: "c", label: "I follow business news and market whenever I have time", score: 7 },
      { id: "d", label: "I follow the markets everyday or at least every other day", score: 10 },
    ],
  },
  {
    id: "q10",
    title: "How do you approach making financial or investment decisions?",
    options: [
      {
        id: "a",
        label: "I feel stressed about it and try to avoid making decisions",
        score: 1,
      },
      {
        id: "b",
        label: "I ask for advice from friends and relatives",
        score: 4,
      },
      {
        id: "c",
        label: "I seek professional advice",
        score: 7,
      },
      {
        id: "d",
        label:
          "I am knowledgeable about investments. I evaluate various options to make the best decision.",
        score: 10,
      },
    ],
  },
];

const horizonQuestion: Question = {
  id: "q11",
  title:
    "When is the earliest you anticipate needing all or a substantial portion of your investments?",
  options: [
    { id: "a", label: "Less than 3 years", score: 0 },
    { id: "b", label: "3 to 5 years", score: 0 },
    { id: "c", label: "5 to 7 years", score: 0 },
    { id: "d", label: "7 to 10 years", score: 0 },
    { id: "e", label: "More than 10 years", score: 0 },
  ],
};

const riskProfiles: Record<
  RiskProfileKey,
  { allocation: string; description: string }
> = {
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

const horizonProfiles: Record<string, HorizonKey> = {
  a: "Short term",
  b: "Medium to long term",
  c: "Long term",
  d: "Long to very long term",
  e: "Very long term",
};

const appetiteMatrix: Record<RiskProfileKey, Record<HorizonKey, RiskProfileKey>> =
  {
    Conservative: {
      "Short term": "Conservative",
      "Medium to long term": "Conservative",
      "Long term": "Conservative",
      "Long to very long term": "Conservative",
      "Very long term": "Conservative",
    },
    "Moderately Conservative": {
      "Short term": "Conservative",
      "Medium to long term": "Moderately Conservative",
      "Long term": "Moderately Conservative",
      "Long to very long term": "Moderately Conservative",
      "Very long term": "Moderately Conservative",
    },
    Moderate: {
      "Short term": "Moderately Conservative",
      "Medium to long term": "Moderate",
      "Long term": "Moderate",
      "Long to very long term": "Moderate",
      "Very long term": "Moderate",
    },
    "Moderately Aggressive": {
      "Short term": "Moderately Conservative",
      "Medium to long term": "Moderately Aggressive",
      "Long term": "Moderately Aggressive",
      "Long to very long term": "Moderately Aggressive",
      "Very long term": "Moderately Aggressive",
    },
    Aggressive: {
      "Short term": "Moderately Conservative",
      "Medium to long term": "Aggressive",
      "Long term": "Aggressive",
      "Long to very long term": "Aggressive",
      "Very long term": "Aggressive",
    },
  };

function getRiskTolerance(score: number): RiskProfileKey {
  if (score < 40) return "Conservative";
  if (score <= 50) return "Moderately Conservative";
  if (score <= 70) return "Moderate";
  if (score <= 90) return "Moderately Aggressive";
  return "Aggressive";
}

function formatScore(score?: number) {
  return typeof score === "number" ? score.toString() : "—";
}

export function RiskQuestionnaire() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const totalScore = useMemo(() => {
    return riskQuestions.reduce((sum, q) => {
      const picked = answers[q.id];
      const option = q.options.find((opt) => opt.id === picked);
      return sum + (option?.score ?? 0);
    }, 0);
  }, [answers]);

  const riskToleranceAnswered =
    riskQuestions.every((q) => Boolean(answers[q.id]));

  const horizonAnswer = answers[horizonQuestion.id];
  const horizonProfile = horizonAnswer
    ? horizonProfiles[horizonAnswer]
    : undefined;

  const riskToleranceProfile = riskToleranceAnswered
    ? getRiskTolerance(totalScore)
    : undefined;

  const combinedAppetite =
    riskToleranceProfile && horizonProfile
      ? appetiteMatrix[riskToleranceProfile][horizonProfile]
      : undefined;

  const answeredCount =
    riskQuestions.filter((q) => answers[q.id]).length +
    (horizonAnswer ? 1 : 0);

  const resetForm = () => {
    setAnswers({});
    setSubmitError(null);
    setSubmitSuccess(false);
  };

  const handleSubmit = async () => {
    // Check if all questions are answered
    if (!riskToleranceAnswered || !horizonAnswer) {
      setSubmitError("Please answer all questions before submitting.");
      return;
    }

    // Check authentication
    const user = await getCurrentUser();
    if (!user) {
      router.push("/sign-in?redirect=/risk-profile");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      // Format responses for the responses table (Q1, Q2, Q3... format)
      const formattedResponses = Object.entries(answers).map(([questionId, optionId]) => ({
        question_key: questionId.toUpperCase(), // q1 -> Q1
        option_selected: optionId,
      }));

      const response = await fetch("/api/risk/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          responses: formattedResponses,
          score: totalScore,
          riskCategory: combinedAppetite || riskToleranceProfile,
          investmentHorizon: horizonProfile,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setSubmitSuccess(true);
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Failed to submit. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const canSubmit = riskToleranceAnswered && horizonAnswer && !submitting && !submitSuccess;

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#072923] via-[#031815] to-[#010d0c] opacity-90" />
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60">
            Risk Profiling Questionnaire
          </p>
          <h1 className="font-product-sans text-4xl sm:text-5xl font-normal text-white">
            Discover Your{" "}
            <span className="gradient-text inline-block">Risk Tolerance</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Answer 11 questions to gauge your risk tolerance and investment
            horizon. We map your responses to a score-based methodology to
            recommend a risk profile and indicative allocation aligned with
            Stockstrail&apos;s guidance.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="bg-white/5 border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-xl">
                Progress
              </CardTitle>
              <CardDescription className="text-white/70">
                {answeredCount} of 11 questions answered
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Progress value={(answeredCount / 11) * 100} />
              <div className="text-sm text-white/80 flex items-center gap-2">
                <span className="inline-flex w-2 h-2 rounded-full bg-stockstrail-green-accent" />
                All fields are required for a complete profile.
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-xl">
                Scoring overview
              </CardTitle>
              <CardDescription className="text-white/70">
                Questions 1-10 are scored 1 / 4 / 7 / 10 based on your choice.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-white/80 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-white/60">Current score:</span>
                <span className="text-lg text-stockstrail-green-light">
                  {riskToleranceAnswered ? formatScore(totalScore) : "Pending"}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="px-2 py-1 rounded bg-white/5 text-xs border border-white/10">
                  &lt;40 → Conservative
                </div>
                <div className="px-2 py-1 rounded bg-white/5 text-xs border border-white/10">
                  40-50 → Moderately Conservative
                </div>
                <div className="px-2 py-1 rounded bg-white/5 text-xs border border-white/10">
                  50-70 → Moderate
                </div>
                <div className="px-2 py-1 rounded bg-white/5 text-xs border border-white/10">
                  70-90 → Moderately Aggressive
                </div>
                <div className="px-2 py-1 rounded bg-white/5 text-xs border border-white/10">
                  &gt;90 → Aggressive
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="space-y-1">
            <p className="text-white text-lg font-semibold">
              Your answers
            </p>
            <p className="text-white/60 text-sm">
              Choose one option per question. Results update automatically.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={resetForm}
              className="border-white/20 text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light"
            >
              <RefreshCw className="w-4 h-4" />
              Reset form
            </Button>
            <a
              href="/lets-talk"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-stockstrail-green-accent" />
              Talk to an advisor
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {riskQuestions.map((question, idx) => (
            <Card
              key={question.id}
              className="bg-white/5 border-white/10 hover:border-stockstrail-green-light/40 transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-white text-xl flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-stockstrail-green-light/10 text-stockstrail-green-light text-base">
                    {idx + 1}
                  </span>
                  <span>{question.title}</span>
                </CardTitle>
                {question.helper ? (
                  <CardDescription className="text-white/70">
                    {question.helper}
                  </CardDescription>
                ) : null}
              </CardHeader>
              <CardContent className="space-y-3">
                <RadioGroup
                  value={answers[question.id] ?? ""}
                  onValueChange={(val) =>
                    setAnswers((prev) => ({ ...prev, [question.id]: val }))
                  }
                  className="space-y-3"
                >
                  {question.options.map((option) => (
                    <label
                      key={option.id}
                      className={cn(
                        "flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-3 cursor-pointer transition-all duration-200",
                        answers[question.id] === option.id
                          ? "border-stockstrail-green-light/60 bg-stockstrail-green-light/10 shadow-[0_0_20px_rgba(0,255,151,0.15)]"
                          : "hover:border-white/30 hover:bg-white/10"
                      )}
                    >
                      <RadioGroupItem value={option.id} className="mt-1" />
                      <div className="flex flex-col">
                        <span className="text-white font-medium">
                          {option.label}
                        </span>
                        <span className="text-xs text-white/60">
                          Score: {option.score}
                        </span>
                      </div>
                    </label>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-white/5 border-white/10 hover:border-stockstrail-green-light/40 transition-all duration-300 lg:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-stockstrail-green-light/10 text-stockstrail-green-light text-base">
                  11
                </span>
                <span>{horizonQuestion.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <RadioGroup
                value={answers[horizonQuestion.id] ?? ""}
                onValueChange={(val) =>
                  setAnswers((prev) => ({ ...prev, [horizonQuestion.id]: val }))
                }
                className="grid gap-3 md:grid-cols-2"
              >
                {horizonQuestion.options.map((option) => (
                  <label
                    key={option.id}
                    className={cn(
                      "flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-3 cursor-pointer transition-all duration-200",
                      answers[horizonQuestion.id] === option.id
                        ? "border-stockstrail-green-light/60 bg-stockstrail-green-light/10 shadow-[0_0_20px_rgba(0,255,151,0.15)]"
                        : "hover:border-white/30 hover:bg-white/10"
                    )}
                  >
                    <RadioGroupItem value={option.id} className="mt-1" />
                    <div className="flex flex-col">
                      <span className="text-white font-medium">
                        {option.label}
                      </span>
                      <span className="text-xs text-white/60">
                        Horizon profile: {horizonProfiles[option.id]}
                      </span>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        </div>


        {combinedAppetite && (
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-xl">Ready to Submit?</CardTitle>
              <CardDescription className="text-white/70">
                Save your risk profile and view it in your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {submitError && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {submitError}
                </div>
              )}

              {submitSuccess && (
                <div className="p-3 rounded-lg bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 text-stockstrail-green-light text-sm">
                  Success! Your risk profile has been saved. Redirecting to dashboard...
                </div>
              )}

              <Button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="w-full bg-stockstrail-green-light text-stockstrail-bg hover:bg-stockstrail-green-light/90 font-medium"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : submitSuccess ? (
                  <>
                    ✓ Submitted
                  </>
                ) : (
                  <>
                    Submit Risk Profile
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        )}

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-xl">
              Methodology at a glance
            </CardTitle>
            <CardDescription className="text-white/70">
              How we map your responses to scores and profiles
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 text-white/80 text-sm">
              <p>
                • Questions 1-10: each choice maps to a score (1, 4, 7, 10).
                Total score determines risk tolerance:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/70 pl-1">
                <li>&lt; 40: Conservative</li>
                <li>40 - 50: Moderately Conservative</li>
                <li>50 - 70: Moderate</li>
                <li>70 - 90: Moderately Aggressive</li>
                <li>&gt; 90: Aggressive</li>
              </ul>
              <p>
                • Question 11: maps to investment horizon (Short to Very Long).
              </p>
            </div>
            <div className="space-y-2 text-white/80 text-sm">
              <p>
                • We combine risk tolerance and horizon to adjust risk appetite:
                shorter horizons lean conservative even for higher scores.
              </p>
              <p>
                • Allocation guidance follows the recommended profile. This is
                indicative only; consult an advisor for suitability and product
                selection.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="rounded-2xl border border-white/10 bg-black/60 p-6 text-white/70 text-sm leading-relaxed">
          <p className="font-semibold text-white mb-2">Disclaimer</p>
          <p>
            This questionnaire provides an indicative risk profile based on your
            inputs. It is not investment advice or a product recommendation.
            Market conditions, personal circumstances, and regulatory guidance
            should be reviewed with a qualified advisor before making investment
            decisions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RiskQuestionnaire;

