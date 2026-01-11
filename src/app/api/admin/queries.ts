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
      return NextResponse.json({ error: "Query ID is required" }, { status: 400 });
    }

    const supabase = await createClient();
    const { error } = await supabase
      .from("queries")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting query:", error);
      return NextResponse.json({ error: "Failed to delete query" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in DELETE /api/admin/queries:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
