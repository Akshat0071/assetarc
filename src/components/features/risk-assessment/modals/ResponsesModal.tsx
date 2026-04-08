"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import type { Response } from "@/lib/supabase/types";
import { createClient } from "@/lib/supabase/client";

interface ResponsesModalProps {
  attemptId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Question mappings - matches the questions in RiskQuestionnaire
const questionMap: Record<string, string> = {
  Q1: "What percentage of your monthly income (after paying home loan EMIs and credit card bills) do you save and invest for the long term?",
  Q2: "How much of your investment portfolio may you have to withdraw in the next five years?",
  Q3: "How secure do you feel about your salary or business income continuing for the next 10 years?",
  Q4: "What is your attitude towards savings?",
  Q5: "To get above-average (more than FD) returns you have to take risks.",
  Q6: "How will you describe your attitude towards investing?",
  Q7: "If your equity investment makes 20% losses next year you will:",
  Q8: "Have you invested in mutual funds before? If yes, for how many years?",
  Q9: "Are you interested in markets and investing?",
  Q10: "How do you approach making financial or investment decisions?",
  Q11: "When is the earliest you anticipate needing all or a substantial portion of your investments?",
};

const optionMap: Record<string, Record<string, string>> = {
  Q1: {
    a: "Less than 5%",
    b: "5 to 10%",
    c: "10 to 20%",
    d: "More than 20%",
  },
  Q2: {
    a: "More than 30%",
    b: "20 - 30%",
    c: "10 - 20%",
    d: "Less than 10%",
  },
  Q3: {
    a: "Not secure at all",
    b: "Somewhat secure",
    c: "Fairly secure",
    d: "Very secure",
  },
  Q4: {
    a: "Lifestyle is important right now; I can save later.",
    b: "I'd like to save, but financial liabilities limit me.",
    c: "I try to save a fixed amount every month plus a big portion of my one-time cash flows.",
    d: "I save a fixed percentage of salary every month; I don't rely on one-time cash-flows.",
  },
  Q5: {
    a: "Strongly disagree",
    b: "Disagree",
    c: "Agree",
    d: "Strongly agree",
  },
  Q6: {
    a: "Protect your capital",
    b: "Ready for small amount of loss, but not much",
    c: "Ready for reasonable amount of short-term loss as long as money grows in the long term",
    d: "Short-term losses do not matter if you have conviction in long-term investments",
  },
  Q7: {
    a: "Sell your investments and put the proceeds in fixed deposits",
    b: "Sell some investments which made high losses and continue to hold some",
    c: "Do nothing",
    d: "Take advantage of the correction and invest some more money",
  },
  Q8: {
    a: "Never",
    b: "1 to 3 years",
    c: "3 to 5 years",
    d: "More than 5 years",
  },
  Q9: {
    a: "I have no interest",
    b: "I do not follow business news and the markets regularly",
    c: "I follow business news and market whenever I have time",
    d: "I follow the markets everyday or at least every other day",
  },
  Q10: {
    a: "I feel stressed about it and try to avoid making decisions",
    b: "I ask for advice from friends and relatives",
    c: "I seek professional advice",
    d: "I am knowledgeable about investments. I evaluate various options to make the best decision.",
  },
  Q11: {
    a: "Less than 3 years",
    b: "3 to 5 years",
    c: "5 to 7 years",
    d: "7 to 10 years",
    e: "More than 10 years",
  },
};

export function ResponsesModal({
  attemptId,
  open,
  onOpenChange,
}: ResponsesModalProps) {
  const [responses, setResponses] = useState<Response[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open && attemptId) {
      fetchResponses();
    } else {
      setResponses([]);
      setError(null);
    }
  }, [open, attemptId]);

  const fetchResponses = async () => {
    if (!attemptId) return;

    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { data, error: fetchError } = await supabase
        .from("responses")
        .select("*")
        .eq("risk_attempt_id", attemptId)
        .order("question_key");

      if (fetchError) {
        throw fetchError;
      }

      setResponses(data || []);
    } catch (err) {
      console.error("Error fetching responses:", err);
      setError(err instanceof Error ? err.message : "Failed to load responses");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-AssetArc-bg border-white/10 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-product-sans text-white">
            Question Responses
          </DialogTitle>
          <DialogDescription className="text-white/70">
            View all your answers for this assessment
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-AssetArc-green-light" />
          </div>
        ) : error ? (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
            {error}
          </div>
        ) : (
          <div className="space-y-4">
            {responses.map((response) => {
              const questionText = questionMap[response.question_key] || response.question_key;
              const optionText = optionMap[response.question_key]?.[response.option_selected] || response.option_selected;
              
              return (
                <Card key={response.id} className="bg-white/5 border-white/10">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white text-lg">
                      {questionText}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">
                      Selected: <span className="text-white font-medium">{optionText}</span>
                    </p>
                  </CardContent>
                </Card>
              );
            })}

            {responses.length === 0 && !loading && (
              <div className="text-center py-8 text-white/60">
                No responses found for this attempt.
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
