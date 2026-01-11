"use client";

import { useState } from "react";
import { Trash2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import type { Review } from "@/lib/supabase";

interface AdminReviewsContentProps {
  reviews: Review[];
}

export function AdminReviewsContent({ reviews }: AdminReviewsContentProps) {
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const handleDelete = async (reviewId: number) => {
    if (!confirm("Are you sure you want to delete this review?")) {
      return;
    }

    setDeletingId(reviewId);

    try {
      const response = await fetch("/api/admin/reviews", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: reviewId }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete review");
      }

      window.location.reload();
    } catch (err) {
      console.error("Error deleting review:", err);
      alert("Failed to delete review. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-white/30"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#072923] via-[#031815] to-[#010d0c] opacity-90" />
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="font-product-sans text-4xl sm:text-5xl font-normal text-white">
            Client <span className="gradient-text">Reviews</span>
          </h1>
          <p className="text-white/70 text-lg">
            Manage and view all customer reviews
          </p>
        </header>

        {/* Reviews Grid */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-xl">
              All Reviews ({reviews.length})
            </CardTitle>
            <CardDescription className="text-white/70">
              {reviews.length} review{reviews.length !== 1 ? "s" : ""} in total
            </CardDescription>
          </CardHeader>
          <CardContent>
            {reviews.length === 0 ? (
              <div className="text-center py-12 text-white/60">
                No reviews found.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors"
                  >
                    {/* Header */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold truncate">
                            {review.name}
                          </h3>
                          {review.company && (
                            <p className="text-white/60 text-sm truncate">
                              {review.company}
                            </p>
                          )}
                          <p className="text-white/50 text-xs">
                            {review.position}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(review.id)}
                          disabled={deletingId === review.id}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-8 w-8 p-0 flex-shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        {renderStars(review.rating)}
                        <span className="text-white/60 text-sm">
                          {review.rating}/5
                        </span>
                      </div>
                    </div>

                    {/* Comment */}
                    <p className="text-white/80 text-sm mb-3 line-clamp-3">
                      "{review.comment}"
                    </p>

                    {/* Date */}
                    <p className="text-white/50 text-xs">
                      {formatDate(review.created_at)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
