import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/**
 * GET /api/blog-posts
 * Fetch all published blog posts (public)
 */
export async function GET() {
    try {
        if (!supabase) {
            return NextResponse.json({ error: "Database not initialized" }, { status: 500 });
        }

        const { data, error } = await supabase
            .from("blog_posts")
            .select("*")
            .eq("is_published", true)
            .eq("visible_on_website", true)
            .order("published_at", { ascending: false });

        if (error) {
            console.error("Error fetching blog posts:", error);
            return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        console.error("Error in GET /api/blog-posts:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
