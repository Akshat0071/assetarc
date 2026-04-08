import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/**
 * GET /api/blog-posts/[slug]
 * Fetch a single blog post by slug (public)
 */
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;

        if (!slug) {
            return NextResponse.json({ error: "Slug is required" }, { status: 400 });
        }

        if (!supabase) {
            return NextResponse.json({ error: "Database not initialized" }, { status: 500 });
        }

        const { data, error } = await supabase
            .from("blog_posts")
            .select("*")
            .eq("slug", slug)
            .eq("is_published", true)
            .single();

        if (error) {
            if (error.code === "PGRST116") {
                // Post not found
                return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
            }
            console.error("Error fetching blog post:", error);
            return NextResponse.json({ error: "Failed to fetch blog post" }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        console.error("Error in GET /api/blog-posts/[slug]:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
