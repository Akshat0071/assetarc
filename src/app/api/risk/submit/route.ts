/**
 * API route to submit risk questionnaire
 * Validates attempt limit (max 5) and saves to database
 */

import { createClient, getServerUser } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

const MAX_ATTEMPTS = 5;

export async function POST(request: Request) {
  try {
    const user = await getServerUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { responses, score, riskCategory, investmentHorizon } = body;

    // Validate required fields
    if (!responses || !Array.isArray(responses) || typeof score !== "number" || !riskCategory) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Check current attempt count
    const { data: existingAttempts, error: countError } = await supabase
      .from("risk_attempts")
      .select("attempt_number")
      .eq("user_id", user.id)
      .order("attempt_number", { ascending: false })
      .limit(1);

    if (countError) {
      console.error("Error checking attempts:", countError);
      return NextResponse.json(
        { error: "Failed to check attempt count" },
        { status: 500 }
      );
    }

    const nextAttemptNumber =
      existingAttempts && existingAttempts.length > 0
        ? existingAttempts[0].attempt_number + 1
        : 1;

    if (nextAttemptNumber > MAX_ATTEMPTS) {
      return NextResponse.json(
        { error: `Maximum of ${MAX_ATTEMPTS} attempts allowed` },
        { status: 403 }
      );
    }

    // Insert new attempt
    const { data: attemptData, error: insertError } = await supabase
      .from("risk_attempts")
      .insert({
        user_id: user.id,
        score,
        risk_category: riskCategory,
        investment_horizon: investmentHorizon || null,
        attempt_number: nextAttemptNumber,
        visibility: 2, // Visible to user and admin
      })
      .select()
      .single();

    if (insertError) {
      console.error("Error inserting attempt:", insertError);
      return NextResponse.json(
        { error: "Failed to save attempt" },
        { status: 500 }
      );
    }

    // Insert individual responses
    const responseInserts = responses.map((r: { question_key: string; option_selected: string }) => ({
      risk_attempt_id: attemptData.id,
      question_key: r.question_key,
      option_selected: r.option_selected,
    }));

    const { error: responsesError } = await supabase
      .from("responses")
      .insert(responseInserts);

    if (responsesError) {
      console.error("Error inserting responses:", responsesError);
      // Attempt created but responses failed - still return success
      // but log the error for debugging
    }

    return NextResponse.json({
      success: true,
      attempt: attemptData,
      attemptsRemaining: MAX_ATTEMPTS - nextAttemptNumber,
    });
  } catch (error) {
    console.error("Error in submit route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
