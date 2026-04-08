"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Edit, Trash2, Eye, EyeOff, Search, Filter, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import type { BlogPost } from "@/lib/supabase/types";
import { BlogPostForm } from "./BlogPostForm";
import { formatDate } from "@/lib/utils";

interface BlogAdminContentProps {
    posts: BlogPost[];
}

const statusColors = {
    draft: "bg-gray-500/20 text-gray-400 border-gray-500/40",
    published: "bg-green-500/20 text-green-400 border-green-500/40",
    archived: "bg-red-500/20 text-red-400 border-red-500/40",
};

export function BlogAdminContent({ posts: initialPosts }: BlogAdminContentProps) {
    const router = useRouter();
    const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null);
    const [togglingId, setTogglingId] = useState<string | null>(null);

    // Filter posts based on search and status
    useEffect(() => {
        let filtered = posts;

        // Apply search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (post) =>
                    post.title.toLowerCase().includes(query) ||
                    post.category?.toLowerCase().includes(query) ||
                    post.author_name.toLowerCase().includes(query)
            );
        }

        // Apply status filter
        if (statusFilter !== "all") {
            filtered = filtered.filter((post) => post.status === statusFilter);
        }

        setFilteredPosts(filtered);
    }, [posts, searchQuery, statusFilter]);

    const handleCreatePost = () => {
        setEditingPost(null);
        setIsFormOpen(true);
    };

    const handleEditPost = (post: BlogPost) => {
        setEditingPost(post);
        setIsFormOpen(true);
    };

    const handleDeleteClick = (post: BlogPost) => {
        setPostToDelete(post);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (!postToDelete) return;

        try {
            const response = await fetch(`/api/admin/blog-posts/${postToDelete.id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete post");
            }

            toast.success("Blog post deleted successfully");
            setPosts(posts.filter((p) => p.id !== postToDelete.id));
            setDeleteDialogOpen(false);
            setPostToDelete(null);
            router.refresh();
        } catch (error) {
            console.error("Error deleting post:", error);
            toast.error("Failed to delete blog post");
        }
    };

    const handleToggleVisibility = async (post: BlogPost) => {
        setTogglingId(post.id);
        try {
            const response = await fetch(`/api/admin/blog-posts/${post.id}/toggle-visibility`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ visible: !post.visible_on_website }),
            });

            if (!response.ok) {
                throw new Error("Failed to toggle visibility");
            }

            const { data } = await response.json();
            toast.success(
                `Blog post ${data.visible_on_website ? "shown" : "hidden"} on website`
            );
            setPosts(posts.map((p) => (p.id === post.id ? data : p)));
        } catch (error) {
            console.error("Error toggling visibility:", error);
            toast.error("Failed to toggle visibility");
        } finally {
            setTogglingId(null);
        }
    };

    const handleFormClose = (updated?: BlogPost) => {
        setIsFormOpen(false);
        setEditingPost(null);
        if (updated) {
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#072923] via-[#031815] to-[#010d0c]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-product-sans font-normal text-white mb-2">
                            <span className="gradient-text">Blog</span> Management
                        </h1>
                        <p className="text-white/60 text-sm sm:text-base">
                            Create, edit, and manage your blog posts
                        </p>
                    </div>
                    <Button
                        onClick={handleCreatePost}
                        className="bg-stockstrail-green-light hover:bg-stockstrail-green-light/90 text-black font-medium px-6"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        New Post
                    </Button>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6 items-stretch">
                    <div className="flex-1 min-w-0">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                            <Input
                                placeholder="Search posts by title, category, or author..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-stockstrail-green-light !bg-white/5 !border-white/10"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-auto sm:min-w-[180px]">
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger className="w-full !bg-white/5 !border-white/10 text-white hover:!bg-white/10">
                                <Filter className="w-4 h-4 mr-2 text-white/40" />
                                <SelectValue placeholder="Filter by status" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#031815] border-white/10">
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="draft">Draft</SelectItem>
                                <SelectItem value="published">Published</SelectItem>
                                <SelectItem value="archived">Archived</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="text-2xl sm:text-3xl font-semibold text-white mb-1">
                            {posts.length}
                        </div>
                        <div className="text-white/60 text-sm">Total Posts</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="text-2xl sm:text-3xl font-semibold text-green-400 mb-1">
                            {posts.filter((p) => p.status === "published").length}
                        </div>
                        <div className="text-white/60 text-sm">Published</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-1">
                            {posts.filter((p) => p.status === "draft").length}
                        </div>
                        <div className="text-white/60 text-sm">Drafts</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="text-2xl sm:text-3xl font-semibold text-stockstrail-green-light mb-1">
                            {posts.filter((p) => p.visible_on_website).length}
                        </div>
                        <div className="text-white/60 text-sm">Visible</div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="border-white/10 hover:bg-white/5">
                                    <TableHead className="text-white/80 font-medium">Title</TableHead>
                                    <TableHead className="text-white/80 font-medium">Category</TableHead>
                                    <TableHead className="text-white/80 font-medium">Author</TableHead>
                                    <TableHead className="text-white/80 font-medium">Date</TableHead>
                                    <TableHead className="text-white/80 font-medium">Status</TableHead>
                                    <TableHead className="text-white/80 font-medium">Visible</TableHead>
                                    <TableHead className="text-white/80 font-medium text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredPosts.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={7} className="text-center py-12 text-white/40">
                                            No blog posts found
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredPosts.map((post) => (
                                        <TableRow
                                            key={post.id}
                                            className="border-white/10 hover:bg-white/5 transition-colors"
                                        >
                                            <TableCell className="text-white font-medium max-w-xs truncate">
                                                {post.title}
                                            </TableCell>
                                            <TableCell className="text-white/70">
                                                {post.category || <span className="text-white/40">—</span>}
                                            </TableCell>
                                            <TableCell className="text-white/70">{post.author_name}</TableCell>
                                            <TableCell className="text-white/70">
                                                {formatDate(post.created_at)}
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={statusColors[post.status]}>
                                                    {post.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleToggleVisibility(post)}
                                                    disabled={togglingId === post.id}
                                                    className={`${post.visible_on_website
                                                            ? "text-green-400 hover:text-green-300"
                                                            : "text-white/40 hover:text-white/60"
                                                        }`}
                                                >
                                                    {togglingId === post.id ? (
                                                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                                    ) : post.visible_on_website ? (
                                                        <Eye className="w-4 h-4" />
                                                    ) : (
                                                        <EyeOff className="w-4 h-4" />
                                                    )}
                                                </Button>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="sm">
                                                            <MoreVertical className="w-4 h-4 text-white/60" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="bg-[#031815] border-white/10">
                                                        <DropdownMenuItem
                                                            onClick={() => handleEditPost(post)}
                                                            className="text-white hover:text-stockstrail-green-light cursor-pointer"
                                                        >
                                                            <Edit className="w-4 h-4 mr-2" />
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            onClick={() => handleDeleteClick(post)}
                                                            className="text-red-400 hover:text-red-300 cursor-pointer"
                                                        >
                                                            <Trash2 className="w-4 h-4 mr-2" />
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                {/* Delete Confirmation Dialog */}
                <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                    <DialogContent className="bg-[#031815] border-white/10 text-white">
                        <DialogHeader>
                            <DialogTitle>Delete Blog Post</DialogTitle>
                            <DialogDescription className="text-white/60">
                                Are you sure you want to delete &ldquo;{postToDelete?.title}&rdquo;? This action
                                cannot be undone.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => setDeleteDialogOpen(false)}
                                className="border-white/20 text-white hover:bg-white/10"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleDeleteConfirm}
                                variant="destructive"
                                className="bg-red-500 hover:bg-red-600"
                            >
                                Delete
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                {/* Blog Post Form Dialog */}
                <BlogPostForm
                    open={isFormOpen}
                    onClose={handleFormClose}
                    post={editingPost}
                />
            </div>
        </div>
    );
}
