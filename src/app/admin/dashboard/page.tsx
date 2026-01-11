
import { redirect } from "next/navigation";
import { createClient, getServerUser, getServerProfile } from "@/lib/supabase/server";
import SimpleLayout from "@/components/layout/SimpleLayout";
import SEO from "@/components/common/SEO";
import { AdminDashboardContent } from "@/components/features/risk-assessment/admin/AdminDashboardContent";
import { AdminReviewsContent } from "@/components/features/risk-assessment/admin/AdminReviewsContent";
import { AdminQueriesContent } from "@/components/features/risk-assessment/admin/AdminQueriesContent";
import type { RiskAttemptWithProfile } from "@/lib/supabase/types";
import type { Review, QueryRecord } from "@/lib/supabase";

export const metadata = {
  title: "Admin Dashboard | Stockstrail",
  description: "Admin panel for managing risk profiles",
};

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; email?: string; category?: string; sort?: string }> | { page?: string; email?: string; category?: string; sort?: string };
}) {
  // Handle Next.js 15+ searchParams Promise
  const params = searchParams instanceof Promise ? await searchParams : searchParams;
   const user = await getServerUser();

  if (!user) {
    redirect("/admin/sign-in");
  }

  
  const profile = await getServerProfile(user.id);
  
  // Check if user is admin
  if (!profile || profile.role !== "admin") {
    redirect("/admin/sign-in");
  }

 
  const supabase = await createClient();

  // Get user IDs for email filter if needed (partial match)
  let userIds: string[] | null = null;
  if (params.email) {
    const { data: profiles } = await supabase
      .from("profiles")
      .select("id")
      .ilike("email", `%${params.email}%`);
    
    if (profiles && profiles.length > 0) {
      userIds = profiles.map((p) => p.id);
    } else {
      userIds = []; // No matching users
    }
  }

  // Build query with filters - admins can see all attempts regardless of visibility
  let query = supabase
    .from("risk_attempts")
    .select(
      `
      *,
      profiles:user_id (
        id,
        email,
        full_name
      )
    `
    );

  // Apply filters
  if (userIds !== null) {
    if (userIds.length === 0) {
      // No matching users, return empty result
      query = query.eq("user_id", "00000000-0000-0000-0000-000000000000");
    } else {
      query = query.in("user_id", userIds);
    }
  }

  if (params.category && params.category !== "all") {
    query = query.eq("risk_category", params.category);
  }

  // Apply sorting
  const sortOption = params.sort || "highest";
  switch (sortOption) {
    case "lowest":
      query = query.order("score", { ascending: true });
      break;
    case "highest":
      query = query.order("score", { ascending: false });
      break;
    case "latest":
      query = query.order("created_at", { ascending: false });
      break;
    default:
      query = query.order("score", { ascending: false });
  }

  // Pagination
  const page = parseInt(params.page || "1");
  const pageSize = 20;
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  query = query.range(from, to);

  const { data: attempts, error } = await query;

  if (error) {
    console.error("Error fetching attempts:", error);
  }

  // Get total count for pagination
  let countQuery = supabase.from("risk_attempts").select("*", { count: "exact", head: true });

  if (userIds !== null) {
    if (userIds.length === 0) {
      countQuery = countQuery.eq("user_id", "00000000-0000-0000-0000-000000000000");
    } else {
      countQuery = countQuery.in("user_id", userIds);
    }
  }

  if (params.category && params.category !== "all") {
    countQuery = countQuery.eq("risk_category", params.category);
  }

  const { count } = await countQuery;

  const totalPages = Math.ceil((count || 0) / pageSize);

  // Fetch reviews
  const { data: reviews = [] } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false });

  // Fetch queries
  const { data: queries = [] } = await supabase
    .from('queries')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <SimpleLayout>
      <SEO
        title="Admin Dashboard | Stockstrail"
        description="Admin panel for managing risk profiles"
        url="/admin"
      />
      <AdminDashboardContent
        attempts={(attempts as RiskAttemptWithProfile[]) || []}
        currentPage={page}
        totalPages={totalPages}
        filters={{
          email: params.email || "",
          category: params.category || "",
          sort: params.sort || "highest",
        }}
        reviews={(reviews as Review[]) || []}
        queries={(queries as QueryRecord[]) || []}
      />

    </SimpleLayout>
  );
}
