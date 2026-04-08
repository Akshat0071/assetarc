import { createClient, getServerUser, getServerProfile } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/admin/blog-posts/[id]/toggle-visibility
 * Toggle the visibility of a blog post on the main website (admin only)
 */
export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
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

        const { id } = await params;
        const body = await request.json();
        const { visible } = body;

        if (!id) {
            return NextResponse.json({ error: "Blog post ID is required" }, { status: 400 });
        }

        if (typeof visible !== "boolean") {
            return NextResponse.json({ error: "Visible must be a boolean" }, { status: 400 });
        }

        const supabase = await createClient();
        const { data, error } = await supabase
            .from("blog_posts")
            .update({ visible_on_website: visible })
            .eq("id", id)
            .select()
            .single();

        if (error) {
            console.error("Error toggling visibility:", error);
            return NextResponse.json({ error: "Failed to toggle visibility" }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Error in POST /api/admin/blog-posts/[id]/toggle-visibility:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
