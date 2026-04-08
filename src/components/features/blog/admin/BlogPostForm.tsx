"use client";

import { useState, useEffect } from "react";
import { X, Upload, Image as ImageIcon, Bold, Italic, Link, List, Heading } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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

interface BlogPostFormProps {
    open: boolean;
    onClose: (updated?: BlogPost) => void;
    post?: BlogPost | null;
}

const BLOG_CATEGORIES = [
    "Mutual Funds",
    "Stock Market",
    "Insurance",
    "Fixed Deposits",
    "Loans",
    "Tax Planning",
    "Retirement Planning",
    "Investment Tips",
    "Market Analysis",
    "Financial Planning",
    "Other",
];

export function BlogPostForm({ open, onClose, post }: BlogPostFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [tagInput, setTagInput] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        content: "",
        excerpt: "",
        featured_image_url: "",
        featured_image_alt: "",
        category: "",
        tags: [] as string[],
        meta_title: "",
        meta_description: "",
        meta_keywords: [] as string[],
        og_image_url: "",
        status: "draft" as "draft" | "published" | "archived",
        visible_on_website: true,
    });

    // Reset form when opening/closing
    useEffect(() => {
        if (open) {
            if (post) {
                setFormData({
                    title: post.title,
                    slug: post.slug,
                    content: post.content,
                    excerpt: post.excerpt || "",
                    featured_image_url: post.featured_image_url || "",
                    featured_image_alt: post.featured_image_alt || "",
                    category: post.category || "",
                    tags: post.tags || [],
                    meta_title: post.meta_title || "",
                    meta_description: post.meta_description || "",
                    meta_keywords: post.meta_keywords || [],
                    og_image_url: post.og_image_url || "",
                    status: post.status,
                    visible_on_website: post.visible_on_website,
                });
            } else {
                setFormData({
                    title: "",
                    slug: "",
                    content: "",
                    excerpt: "",
                    featured_image_url: "",
                    featured_image_alt: "",
                    category: "",
                    tags: [],
                    meta_title: "",
                    meta_description: "",
                    meta_keywords: [],
                    og_image_url: "",
                    status: "draft",
                    visible_on_website: true,
                });
            }
            setTagInput("");
        }
    }, [open, post]);

    // Auto-generate slug from title
    useEffect(() => {
        if (formData.title && !post) {
            const slug = formData.title
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-")
                .replace(/^-+|-+$/g, "");
            setFormData((prev) => ({ ...prev, slug }));
        }
    }, [formData.title, post]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleContentChange = (value: string) => {
        setFormData((prev) => ({ ...prev, content: value }));
    };

    // Rich text editor commands
    const insertFormat = (tag: string, wrapper?: string) => {
        const textarea = document.getElementById("content-editor") as HTMLTextAreaElement;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = formData.content;
        const selectedText = text.substring(start, end);

        let newText = "";
        switch (tag) {
            case "bold":
                newText = text.substring(0, start) + `<strong>${selectedText}</strong>` + text.substring(end);
                break;
            case "italic":
                newText = text.substring(0, start) + `<em>${selectedText}</em>` + text.substring(end);
                break;
            case "link":
                const url = prompt("Enter URL:");
                if (url) {
                    newText = text.substring(0, start) + `<a href="${url}">${selectedText || "Link"}</a>` + text.substring(end);
                } else {
                    return;
                }
                break;
            case "h2":
                newText = text.substring(0, start) + `<h2>${selectedText || "Heading"}</h2>` + text.substring(end);
                break;
            case "h3":
                newText = text.substring(0, start) + `<h3>${selectedText || "Subheading"}</h3>` + text.substring(end);
                break;
            case "list":
                newText = text.substring(0, start) + `<ul>\n  <li>${selectedText || "List item"}</li>\n</ul>` + text.substring(end);
                break;
            default:
                return;
        }

        setFormData((prev) => ({ ...prev, content: newText }));
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start, start + newText.length - text.length);
        }, 0);
    };

    const handleAddTag = () => {
        if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
            setFormData((prev) => ({
                ...prev,
                tags: [...prev.tags, tagInput.trim()],
            }));
            setTagInput("");
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setFormData((prev) => ({
            ...prev,
            tags: prev.tags.filter((tag) => tag !== tagToRemove),
        }));
    };

    const handleAddMetaKeyword = () => {
        if (tagInput.trim() && !formData.meta_keywords.includes(tagInput.trim())) {
            setFormData((prev) => ({
                ...prev,
                meta_keywords: [...prev.meta_keywords, tagInput.trim()],
            }));
            setTagInput("");
        }
    };

    const handleRemoveMetaKeyword = (keywordToRemove: string) => {
        setFormData((prev) => ({
            ...prev,
            meta_keywords: prev.meta_keywords.filter((kw) => kw !== keywordToRemove),
        }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // For now, we'll just use a placeholder URL
        // In production, you would upload to a storage service
        const reader = new FileReader();
        reader.onloadend = () => {
            // Convert to base64 for demo purposes
            // In production, upload to Supabase Storage or similar
            toast.info("Image upload feature - Use external image URL for now");
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const url = post ? `/api/admin/blog-posts/${post.id}` : "/api/admin/blog-posts";
            const method = post ? "PATCH" : "POST";

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to save post");
            }

            const { data } = await response.json();
            toast.success(post ? "Blog post updated successfully" : "Blog post created successfully");
            onClose(data);
        } catch (error) {
            console.error("Error saving post:", error);
            toast.error("Failed to save blog post");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={() => onClose()}>
            <DialogContent className="bg-[#031815] border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl">
                        {post ? "Edit Blog Post" : "Create New Blog Post"}
                    </DialogTitle>
                    <DialogDescription className="text-white/60">
                        Fill in the details below to {post ? "update" : "create"} your blog post.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-AssetArc-green-light">Basic Information</h3>

                        <div className="space-y-2">
                            <Label htmlFor="title">Title *</Label>
                            <Input
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter post title..."
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-AssetArc-green-light"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="slug">URL Slug</Label>
                            <Input
                                id="slug"
                                name="slug"
                                value={formData.slug}
                                onChange={handleInputChange}
                                placeholder="url-friendly-slug"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-AssetArc-green-light"
                            />
                            <p className="text-xs text-white/40">
                                Auto-generated from title. Customize if needed.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="excerpt">Excerpt</Label>
                            <Textarea
                                id="excerpt"
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleInputChange}
                                placeholder="Brief description of the post (shown in listings)..."
                                rows={2}
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-AssetArc-green-light resize-none"
                            />
                        </div>
                    </div>

                    {/* Content Editor */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-AssetArc-green-light">Content *</h3>

                        {/* Formatting Toolbar */}
                        <div className="flex flex-wrap gap-2 p-2 bg-white/5 rounded-lg border border-white/10">
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => insertFormat("bold")}
                                className="text-white hover:text-AssetArc-green-light"
                            >
                                <Bold className="w-4 h-4" />
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => insertFormat("italic")}
                                className="text-white hover:text-AssetArc-green-light"
                            >
                                <Italic className="w-4 h-4" />
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => insertFormat("h2")}
                                className="text-white hover:text-AssetArc-green-light"
                            >
                                <Heading className="w-4 h-4" />
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => insertFormat("link")}
                                className="text-white hover:text-AssetArc-green-light"
                            >
                                <Link className="w-4 h-4" />
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => insertFormat("list")}
                                className="text-white hover:text-AssetArc-green-light"
                            >
                                <List className="w-4 h-4" />
                            </Button>
                        </div>

                        <Textarea
                            id="content-editor"
                            name="content"
                            value={formData.content}
                            onChange={(e) => handleContentChange(e.target.value)}
                            required
                            placeholder="Write your blog content here... You can use HTML tags for formatting."
                            rows={15}
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-AssetArc-green-light font-mono text-sm"
                        />
                        <p className="text-xs text-white/40">
                            Supports HTML tags for formatting: bold, italic, headings, links, lists, images
                        </p>
                    </div>

                    {/* Featured Image */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-AssetArc-green-light">Featured Image</h3>

                        <div className="space-y-2">
                            <Label htmlFor="featured_image_url">Image URL</Label>
                            <Input
                                id="featured_image_url"
                                name="featured_image_url"
                                value={formData.featured_image_url}
                                onChange={handleInputChange}
                                placeholder="https://example.com/image.jpg"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-AssetArc-green-light"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="featured_image_alt">Alt Text</Label>
                            <Input
                                id="featured_image_alt"
                                name="featured_image_alt"
                                value={formData.featured_image_alt}
                                onChange={handleInputChange}
                                placeholder="Image description for accessibility..."
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-AssetArc-green-light"
                            />
                        </div>
                    </div>

                    {/* Category and Tags */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-AssetArc-green-light">Category & Tags</h3>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select value={formData.category} onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}>
                                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#031815] border-white/10">
                                    {BLOG_CATEGORIES.map((cat) => (
                                        <SelectItem key={cat} value={cat}>
                                            {cat}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Tags</Label>
                            <div className="flex gap-2">
                                <Input
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                                    placeholder="Add a tag..."
                                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-AssetArc-green-light"
                                />
                                <Button
                                    type="button"
                                    onClick={handleAddTag}
                                    variant="outline"
                                    className="border-white/20 text-white hover:bg-white/10"
                                >
                                    Add
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {formData.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="bg-white/10 text-white border-white/20">
                                        {tag}
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveTag(tag)}
                                            className="ml-2 hover:text-red-400"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SEO Meta Tags */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-AssetArc-green-light">SEO Meta Tags</h3>

                        <div className="space-y-2">
                            <Label htmlFor="meta_title">Meta Title</Label>
                            <Input
                                id="meta_title"
                                name="meta_title"
                                value={formData.meta_title}
                                onChange={handleInputChange}
                                placeholder="SEO title (defaults to post title if empty)"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-AssetArc-green-light"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="meta_description">Meta Description</Label>
                            <Textarea
                                id="meta_description"
                                name="meta_description"
                                value={formData.meta_description}
                                onChange={handleInputChange}
                                placeholder="SEO description for search engines..."
                                rows={2}
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-AssetArc-green-light resize-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="og_image_url">Open Graph Image URL</Label>
                            <Input
                                id="og_image_url"
                                name="og_image_url"
                                value={formData.og_image_url}
                                onChange={handleInputChange}
                                placeholder="https://example.com/og-image.jpg"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-AssetArc-green-light"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Meta Keywords</Label>
                            <div className="flex gap-2">
                                <Input
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddMetaKeyword())}
                                    placeholder="Add a keyword..."
                                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-AssetArc-green-light"
                                />
                                <Button
                                    type="button"
                                    onClick={handleAddMetaKeyword}
                                    variant="outline"
                                    className="border-white/20 text-white hover:bg-white/10"
                                >
                                    Add
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {formData.meta_keywords.map((keyword) => (
                                    <Badge key={keyword} variant="secondary" className="bg-white/10 text-white border-white/20">
                                        {keyword}
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveMetaKeyword(keyword)}
                                            className="ml-2 hover:text-red-400"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Status and Visibility */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-AssetArc-green-light">Publishing</h3>

                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Select value={formData.status} onValueChange={(value: any) => setFormData((prev) => ({ ...prev, status: value }))}>
                                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-[#031815] border-white/10">
                                    <SelectItem value="draft">Draft</SelectItem>
                                    <SelectItem value="published">Published</SelectItem>
                                    <SelectItem value="archived">Archived</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                            <div>
                                <Label htmlFor="visible_on_website" className="text-base">Visible on Website</Label>
                                <p className="text-sm text-white/60 mt-1">
                                    Show this post on the main blog page
                                </p>
                            </div>
                            <Switch
                                id="visible_on_website"
                                checked={formData.visible_on_website}
                                onCheckedChange={(checked) =>
                                    setFormData((prev) => ({ ...prev, visible_on_website: checked }))
                                }
                            />
                        </div>
                    </div>

                    <DialogFooter className="gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onClose()}
                            disabled={isSubmitting}
                            className="border-white/20 text-white hover:bg-white/10"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-AssetArc-green-light hover:bg-AssetArc-green-light/90 text-black"
                        >
                            {isSubmitting ? "Saving..." : post ? "Update Post" : "Create Post"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
