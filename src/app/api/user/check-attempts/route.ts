/**
 * API route to check if user has existing risk attempts
 * Used to determine redirect after sign-in
 */

import { createClient, getServerUser } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getServerUser();
    
    if (!user) {
      return NextResponse.json({ hasAttempts: false }, { status: 200 });
    }

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("risk_attempts")
      .select("id")
      .eq("user_id", user.id)
      .limit(1);

    if (error) {
      console.error("Error checking attempts:", error);
      return NextResponse.json({ hasAttempts: false }, { status: 200 });
    }

    return NextResponse.json({ hasAttempts: (data?.length ?? 0) > 0 });
  } catch (error) {
    console.error("Error in check-attempts:", error);
    return NextResponse.json({ hasAttempts: false }, { status: 200 });
  }
}
