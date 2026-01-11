import { redirect } from "next/navigation";
import { createClient, getServerUser, getServerProfile } from "@/lib/supabase/server";
import SimpleLayout from "@/components/layout/SimpleLayout";
import SEO from "@/components/SEO";
import { AdminDashboardContent } from "@/components/admin/AdminDashboardContent";
import type { RiskAttemptWithProfile } from "@/lib/supabase/types";

export const metadata = {
  title: "Admin Dashboard | Stockstrail",
  description: "Admin panel for managing risk profiles",
};

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: { page?: string; email?: string; category?: string; sort?: string };
}) {
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
  if (searchParams.email) {
    const { data: profiles } = await supabase
      .from("profiles")
      .select("id")
      .ilike("email", `%${searchParams.email}%`);
    
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

  if (searchParams.category && searchParams.category !== "all") {
    query = query.eq("risk_category", searchParams.category);
  }

  // Apply sorting
  const sortOption = searchParams.sort || "highest";
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
  const page = parseInt(searchParams.page || "1");
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

  if (searchParams.category && searchParams.category !== "all") {
    countQuery = countQuery.eq("risk_category", searchParams.category);
  }

  const { count } = await countQuery;

  const totalPages = Math.ceil((count || 0) / pageSize);

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
          email: searchParams.email || "",
          category: searchParams.category || "",
          sort: searchParams.sort || "highest",
        }}
      />
    </SimpleLayout>
  );
}
