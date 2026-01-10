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
    } catch (err: any) {
      console.error("Error fetching responses:", err);
      setError(err.message || "Failed to load responses");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-stockstrail-bg border-white/10 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
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
            <Loader2 className="w-6 h-6 animate-spin text-stockstrail-green-light" />
          </div>
        ) : error ? (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
            {error}
          </div>
        ) : (
          <div className="space-y-4">
            {responses.map((response, index) => (
              <Card key={response.id} className="bg-white/5 border-white/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg">
                    {response.question_key}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Selected: <span className="text-white font-medium">{response.option_selected}</span>
                  </p>
                </CardContent>
              </Card>
            ))}

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
