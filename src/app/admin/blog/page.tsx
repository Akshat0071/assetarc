import { redirect } from "next/navigation";
import { createClient, getServerUser, getServerProfile } from "@/lib/supabase/server";
import SimpleLayout from "@/components/layout/SimpleLayout";
import SEO from "@/components/common/SEO";
import { BlogAdminContent } from "@/components/features/blog/admin/BlogAdminContent";
import type { BlogPost } from "@/lib/supabase/types";

export const metadata = {
    title: "Blog Management | Stockstrail",
    description: "Admin panel for managing blog posts",
};

export const dynamic = 'force-dynamic';

export default async function BlogAdminPage() {
    const user = await getServerUser();

    if (!user) {
        redirect("/admin/sign-in");
    }

    const profile = await getServerProfile(user.id);

    // Check if user is admin
    if (!profile || profile.role !== "admin") {
        redirect("/admin/sign-in?error=not_admin");
    }

    const supabase = await createClient();

    // Fetch all blog posts
    const { data: posts, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching blog posts:", error);
    }

    return (
        <SimpleLayout>
            <SEO
                title="Blog Management | Stockstrail"
                description="Admin panel for managing blog posts"
                url="/admin/blog"
            />
            <BlogAdminContent posts={(posts as BlogPost[]) || []} />
        </SimpleLayout>
    );
}
