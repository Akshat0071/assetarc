import { createClient, getServerUser, getServerProfile } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

/**
 * PATCH /api/admin/blog-posts/[id]
 * Update a blog post (admin only)
 */
export async function PATCH(
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
        console.log(`PATCH /api/admin/blog-posts/${id} received body:`, body);

        // Exclude id and timestamps from updates
        const { id: _id, created_at, updated_at, published_at, is_published, ...updates } = body;

        if (!id) {
            return NextResponse.json({ error: "Blog post ID is required" }, { status: 400 });
        }

        const supabase = await createClient();
        const { data, error } = await supabase
            .from("blog_posts")
            .update(updates)
            .eq("id", id)
            .select()
            .single();

        if (error) {
            console.error("Error updating blog post:", error);
            return NextResponse.json({ error: "Failed to update blog post" }, { status: 500 });
        }

        console.log("Update successful, returned data:", data);
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Error in PATCH /api/admin/blog-posts/[id]:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

/**
 * DELETE /api/admin/blog-posts/[id]
 * Delete a blog post (admin only)
 */
export async function DELETE(
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

        if (!id) {
            return NextResponse.json({ error: "Blog post ID is required" }, { status: 400 });
        }

        const supabase = await createClient();
        const { error } = await supabase
            .from("blog_posts")
            .delete()
            .eq("id", id);

        if (error) {
            console.error("Error deleting blog post:", error);
            return NextResponse.json({ error: "Failed to delete blog post" }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error in DELETE /api/admin/blog-posts/[id]:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
