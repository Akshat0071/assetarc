# Blog Management System - Implementation Guide

## Overview

This document describes the new blog management system that replaces the external Blogger API integration with a fully functional CRUD backend using Supabase.

## Features Implemented

### 1. Database Schema (`supabase/migrations/005_blog_posts_schema.sql`)

The `blog_posts` table includes:
- **Basic Information**: title, slug, content (HTML), excerpt
- **Featured Image**: URL and alt text
- **Author**: author_id (references profiles) and author_name
- **Status Management**: status (draft/published/archived), is_published (boolean)
- **Category & Tags**: category (text), tags (array)
- **SEO Meta Tags**: meta_title, meta_description, meta_keywords (array), og_image_url
- **Visibility Control**: visible_on_website (boolean)
- **Timestamps**: published_at, created_at, updated_at

### 2. API Routes

#### Admin Routes (Protected)
- `GET /api/admin/blog-posts` - Fetch all blog posts
- `POST /api/admin/blog-posts` - Create new blog post
- `PATCH /api/admin/blog-posts/[id]` - Update blog post
- `DELETE /api/admin/blog-posts/[id]` - Delete blog post
- `POST /api/admin/blog-posts/[id]/toggle-visibility` - Toggle website visibility

#### Public Routes
- `GET /api/blog-posts` - Fetch published blog posts
- `GET /api/blog-posts/[slug]` - Fetch single blog post by slug

### 3. Admin Interface (`/admin/blog`)

**Components:**
- [`BlogAdminContent.tsx`](src/components/features/blog/admin/BlogAdminContent.tsx) - Main admin interface
- [`BlogPostForm.tsx`](src/components/features/blog/admin/BlogPostForm.tsx) - Form for creating/editing posts

**Features:**
- Data table with columns: title, category, author, date, status, visibility, actions
- Search functionality (by title, category, or author)
- Status filter (all, draft, published, archived)
- Stats overview (total posts, published, drafts, visible)
- Edit, delete, and toggle visibility actions
- Real-time feedback with toast notifications

**Form Features:**
- Title with auto-generated slug
- Rich text editor with formatting toolbar (bold, italic, heading, link, list)
- Featured image URL and alt text
- Category selection (predefined categories)
- Tags management (add/remove)
- SEO meta tags (title, description, keywords, OG image)
- Status selection (draft, published, archived)
- Visibility toggle switch

### 4. Public Blog Pages

- [`/blog`](src/app/blog/page.tsx) - Blog listing page
- [`/blog/[slug]`](src/app/blog/[slug]/page.tsx) - Individual blog post page

Both pages now fetch from the new admin-controlled API instead of Blogger API.

## Deployment Steps

### 1. Run Database Migration

Apply the new migration to your Supabase database:

```bash
# If using Supabase CLI
supabase db push

# Or manually run the SQL in Supabase Dashboard:
# Open SQL Editor and run the contents of:
# supabase/migrations/005_blog_posts_schema.sql
```

### 2. Verify Database Setup

Check that the `blog_posts` table was created with all columns and RLS policies.

### 3. Test Admin Interface

1. Navigate to `/admin/blog` (requires admin role)
2. Create a new blog post:
   - Fill in title, content, and other fields
   - Set status to "published"
   - Enable visibility on website
3. Verify the post appears in the table
4. Test edit functionality
5. Test delete functionality
6. Test visibility toggle

### 4. Test Public Blog Pages

1. Navigate to `/blog`
2. Verify published posts are displayed
3. Click on a post to view details
4. Verify SEO meta tags are set correctly

## Database Functions

### Auto-Generated Features

1. **Slug Generation**: Automatically generates URL-friendly slugs from titles
2. **Excerpt Generation**: Automatically creates excerpts from content if not provided
3. **Published At**: Automatically sets `published_at` when status changes to "published"
4. **Is Published**: Automatically updates based on status

### RLS Policies

- **Public**: Can read published and visible posts
- **Admin**: Full CRUD access to all posts
- **Authors**: Can read their own posts (if extended)

## Utility Functions

### Database Functions ([`src/lib/database/blog-posts.ts`](src/lib/database/blog-posts.ts))

- `getAllBlogPosts()` - Get all posts (admin)
- `getPublishedBlogPosts()` - Get published posts (public)
- `getBlogPostById(id)` - Get post by ID
- `getBlogPostBySlug(slug)` - Get post by slug
- `createBlogPost(data)` - Create new post
- `updateBlogPost(id, updates)` - Update post
- `deleteBlogPost(id)` - Delete post
- `toggleBlogPostVisibility(id, visible)` - Toggle visibility
- `getBlogPostsByCategory(category)` - Get posts by category
- `getBlogCategories()` - Get all unique categories
- `extractBlogSnippet(html, length)` - Extract text from HTML
- `extractBlogImage(html)` - Extract first image URL from HTML

## Categories

Predefined categories available in the form:
- Mutual Funds
- Stock Market
- Insurance
- Fixed Deposits
- Loans
- Tax Planning
- Retirement Planning
- Investment Tips
- Market Analysis
- Financial Planning
- Other

## Content Formatting

The rich text editor supports HTML tags:
- `<strong>` - Bold text
- `<em>` - Italic text
- `<h2>`, `<h3>` - Headings
- `<p>` - Paragraphs
- `<ul>`, `<ol>` - Lists
- `<li>` - List items
- `<a>` - Links
- `<img>` - Images

## SEO Features

Each blog post includes:
- **Meta Title**: Custom title for search engines (defaults to post title)
- **Meta Description**: Description for search results
- **Meta Keywords**: Array of keywords for SEO
- **Open Graph Image**: Custom image for social media sharing

## Testing Checklist

- [ ] Database migration applied successfully
- [ ] Admin can access `/admin/blog`
- [ ] Create new blog post works
- [ ] Edit existing blog post works
- [ ] Delete blog post works
- [ ] Toggle visibility works
- [ ] Search functionality works
- [ ] Status filter works
- [ ] Public blog page displays published posts
- [ ] Individual blog post page works
- [ ] SEO meta tags are correct
- [ ] Tags display correctly
- [ ] Categories work correctly
- [ ] Featured images display correctly
- [ ] Mobile responsive design works

## Troubleshooting

### Posts not appearing on public blog

1. Check post status is "published"
2. Check "visible_on_website" is true
3. Verify RLS policies are correctly set

### Admin access denied

1. Verify user has "admin" role in profiles table
2. Check RLS policies allow admin access

### Slug conflicts

The database has a unique constraint on slugs. If you get a conflict:
1. Manually edit the slug to make it unique
2. Or add a suffix (e.g., "my-post-2")

## Future Enhancements

Potential improvements:
- Image upload to Supabase Storage
- Rich text editor with WYSIWYG (e.g., TipTap, Quill)
- Scheduled publishing
- Post versioning/history
- Bulk actions (delete multiple posts)
- Import from Blogger API (one-time migration)
- Analytics integration
- Comments system
- Related posts suggestions

## File Structure

```
supabase/migrations/
  005_blog_posts_schema.sql          # Database schema

src/lib/
  database/blog-posts.ts                # Database functions
  supabase/types.ts                   # TypeScript types

src/app/api/
  admin/blog-posts/
    route.ts                           # GET (all), POST (create)
    [id]/
      route.ts                         # PATCH (update), DELETE
      toggle-visibility/
        route.ts                       # POST (toggle visibility)
  blog-posts/
    route.ts                           # GET (all published)
    [slug]/
      route.ts                         # GET (by slug)

src/app/admin/blog/
  page.tsx                            # Admin page

src/app/blog/
  page.tsx                            # Public blog listing
  [slug]/
    page.tsx                          # Individual post page

src/components/features/blog/admin/
  BlogAdminContent.tsx                 # Admin interface
  BlogPostForm.tsx                    # Post form
```

## Support

For issues or questions:
1. Check the browser console for errors
2. Check the server logs for API errors
3. Verify Supabase connection and RLS policies
4. Review the migration SQL for any issues
