"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Mail, Phone, Edit, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatDate } from "@/lib/utils";
import type { QueryRecord } from "@/lib/supabase";

interface AdminQueriesContentProps {
  queries: QueryRecord[];
}

export function AdminQueriesContent({ queries }: AdminQueriesContentProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [editingQuery, setEditingQuery] = useState<QueryRecord | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleDelete = async (queryId: number) => {
    if (!confirm("Are you sure you want to delete this query?")) {
      return;
    }

    setDeletingId(queryId);

    try {
      const response = await fetch("/api/admin/queries", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: queryId }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete query");
      }

      router.refresh();
    } catch (err) {
      console.error("Error deleting query:", err);
      alert("Failed to delete query. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingQuery) return;

    setIsUpdating(true);

    try {
      const response = await fetch("/api/admin/queries", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingQuery),
      });

      if (!response.ok) {
        throw new Error("Failed to update query");
      }

      setEditingQuery(null);
      router.refresh();
    } catch (err) {
      console.error("Error updating query:", err);
      alert("Failed to update query. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  const serviceColors: Record<string, string> = {
    "mutual-funds": "bg-blue-500/20 text-blue-400 border-blue-500/40",
    "fixed-deposit": "bg-green-500/20 text-green-400 border-green-500/40",
    insurance: "bg-orange-500/20 text-orange-400 border-orange-500/40",
    loan: "bg-purple-500/20 text-purple-400 border-purple-500/40",
    others: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#072923] via-[#031815] to-[#010d0c] opacity-90" />
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="font-product-sans text-4xl sm:text-5xl font-normal text-white">
            Customer <span className="gradient-text">Queries</span>
          </h1>
          <p className="text-white/70 text-lg">
            Manage and view all customer queries and contact requests
          </p>
        </header>

        {/* Queries */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-xl">
              All Queries ({queries.length})
            </CardTitle>
            <CardDescription className="text-white/70">
              {queries.length} quer{queries.length !== 1 ? "ies" : "y"} in total
            </CardDescription>
          </CardHeader>
          <CardContent>
            {queries.length === 0 ? (
              <div className="text-center py-12 text-white/60">
                No queries found.
              </div>
            ) : (
              <>
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Name
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Email
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Phone
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Service
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Message
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Date
                        </th>
                        <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {queries.map((query) => (
                        <tr
                          key={query.id}
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-3 px-4 text-white font-medium">
                            {query.name}
                          </td>
                          <td className="py-3 px-4 text-white/80 text-sm">
                            <a
                              href={`mailto:${query.email}`}
                              className="text-AssetArc-green-light hover:underline flex items-center gap-1"
                            >
                              <Mail className="w-3 h-3" />
                              {query.email}
                            </a>
                          </td>
                          <td className="py-3 px-4 text-white/80 text-sm">
                            <a
                              href={`tel:${query.phone}`}
                              className="text-AssetArc-green-light hover:underline flex items-center gap-1"
                            >
                              <Phone className="w-3 h-3" />
                              {query.phone}
                            </a>
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${serviceColors[query.service] ||
                                serviceColors.others
                                }`}
                            >
                              {query.service}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-white/80 text-sm max-w-xs truncate">
                            {query.message}
                          </td>
                          <td className="py-3 px-4 text-white/80 text-sm whitespace-nowrap">
                            {formatDate(query.created_at)}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setEditingQuery(query)}
                                className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 h-8 w-8 p-0 flex-shrink-0"
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDelete(query.id)}
                                disabled={deletingId === query.id}
                                className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-8 w-8 p-0 flex-shrink-0"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-3">
                  {queries.map((query) => (
                    <div
                      key={query.id}
                      className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h3 className="text-white font-semibold">
                            {query.name}
                          </h3>
                          <div className="space-y-1 mt-2">
                            <a
                              href={`mailto:${query.email}`}
                              className="text-AssetArc-green-light hover:underline text-xs flex items-center gap-1 break-all"
                            >
                              <Mail className="w-3 h-3 flex-shrink-0" />
                              {query.email}
                            </a>
                            <a
                              href={`tel:${query.phone}`}
                              className="text-AssetArc-green-light hover:underline text-xs flex items-center gap-1"
                            >
                              <Phone className="w-3 h-3 flex-shrink-0" />
                              {query.phone}
                            </a>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setEditingQuery(query)}
                            className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 h-8 w-8 p-0 flex-shrink-0"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(query.id)}
                            disabled={deletingId === query.id}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-8 w-8 p-0 flex-shrink-0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${serviceColors[query.service] || serviceColors.others
                            }`}
                        >
                          {query.service}
                        </span>
                        <span className="text-white/50 text-xs">
                          {formatDate(query.created_at)}
                        </span>
                      </div>

                      <div className="pt-2 border-t border-white/10">
                        <p className="text-white/80 text-sm">
                          <span className="text-white/60 text-xs">Message:</span>
                          <br />
                          {query.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Edit Query Modal */}
        <Dialog open={!!editingQuery} onOpenChange={(open) => !open && setEditingQuery(null)}>
          <DialogContent className="sm:max-w-[425px] bg-[#072923] border-white/10 text-white">
            <DialogHeader>
              <DialogTitle>Edit Query</DialogTitle>
            </DialogHeader>
            {editingQuery && (
              <form onSubmit={handleUpdate} className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={editingQuery.name}
                    onChange={(e) => setEditingQuery({ ...editingQuery, name: e.target.value })}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={editingQuery.email}
                    onChange={(e) => setEditingQuery({ ...editingQuery, email: e.target.value })}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={editingQuery.phone}
                    onChange={(e) => setEditingQuery({ ...editingQuery, phone: e.target.value })}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="service">Service</Label>
                  <Select
                    value={editingQuery.service}
                    onValueChange={(value) => setEditingQuery({ ...editingQuery, service: value })}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#072923] border-white/10 text-white">
                      <SelectItem value="mutual-funds">Mutual Funds</SelectItem>
                      <SelectItem value="fixed-deposit">Fixed Deposit</SelectItem>
                      <SelectItem value="insurance">Insurance</SelectItem>
                      <SelectItem value="loan">Loan</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={editingQuery.message}
                    onChange={(e) => setEditingQuery({ ...editingQuery, message: e.target.value })}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={isUpdating}>
                    {isUpdating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Changes
                  </Button>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
