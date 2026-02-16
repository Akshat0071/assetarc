import { createClient, getServerUser, getServerProfile } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    // Verify admin
    const user = await getServerUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const profile = await getServerProfile(user.id);
    if (!profile || profile.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "Review ID is required" }, { status: 400 });
    }

    const supabase = await createClient();
    const { error } = await supabase
      .from("reviews")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting review:", error);
      return NextResponse.json({ error: "Failed to delete review" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in DELETE /api/admin/reviews:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    // Verify admin
    const user = await getServerUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const profile = await getServerProfile(user.id);
    if (!profile || profile.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    console.log("PATCH /api/admin/reviews received body:", body);

    // Exclude id and created_at from updates
    const { id, created_at, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: "Review ID is required" }, { status: 400 });
    }

    console.log(`Updating review ${id} with:`, updates);

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("reviews")
      .update(updates)
      .eq("id", id)
      .select();

    if (error) {
      console.error("Error updating review:", error);
      return NextResponse.json({ error: "Failed to update review" }, { status: 500 });
    }

    console.log("Update successful, returned data:", data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error in PATCH /api/admin/reviews:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

