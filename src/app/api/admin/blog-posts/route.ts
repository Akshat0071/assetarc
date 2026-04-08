import { createClient, getServerUser, getServerProfile } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import type { BlogPostInput } from "@/lib/supabase/types";

/**
 * GET /api/admin/blog-posts
 * Fetch all blog posts (admin only)
 */
export async function GET() {
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

        const supabase = await createClient();
        const { data, error } = await supabase
            .from("blog_posts")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching blog posts:", error);
            return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        console.error("Error in GET /api/admin/blog-posts:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

/**
 * POST /api/admin/blog-posts
 * Create a new blog post (admin only)
 */
export async function POST(request: NextRequest) {
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
        console.log("POST /api/admin/blog-posts received body:", body);

        // Validate required fields
        if (!body.title || !body.content) {
            return NextResponse.json(
                { error: "Title and content are required" },
                { status: 400 }
            );
        }

        // Prepare post data
        const postData: BlogPostInput = {
            title: body.title,
            slug: body.slug || null, // Will be auto-generated if null
            content: body.content,
            excerpt: body.excerpt || null,
            featured_image_url: body.featured_image_url || null,
            featured_image_alt: body.featured_image_alt || null,
            author_id: user.id,
            author_name: profile.full_name || "Stockstrail",
            status: body.status || "draft",
            category: body.category || null,
            tags: body.tags || [],
            meta_title: body.meta_title || null,
            meta_description: body.meta_description || null,
            meta_keywords: body.meta_keywords || [],
            og_image_url: body.og_image_url || null,
            visible_on_website: body.visible_on_website !== undefined ? body.visible_on_website : true,
        };

        const supabase = await createClient();
        const { data, error } = await supabase
            .from("blog_posts")
            .insert([postData])
            .select()
            .single();

        if (error) {
            console.error("Error creating blog post:", error);
            return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 });
        }

        console.log("Blog post created successfully:", data);
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Error in POST /api/admin/blog-posts:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
