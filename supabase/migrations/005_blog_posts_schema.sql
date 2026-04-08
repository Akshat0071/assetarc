-- ============================================
-- Blog Posts Database Schema
-- ============================================
-- Creates blog_posts table with all required fields for the admin interface

-- ============================================
-- TABLE: blog_posts
-- ============================================
-- Stores blog posts with SEO meta tags, categories, and visibility controls
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Basic post information
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL, -- HTML content from rich text editor
  excerpt TEXT, -- Short description/snippet
  
  -- Featured image
  featured_image_url TEXT,
  featured_image_alt TEXT,
  
  -- Author and status
  author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL DEFAULT 'Stockstrail',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  is_published BOOLEAN NOT NULL DEFAULT FALSE,
  
  -- Category and tags
  category TEXT,
  tags TEXT[], -- Array of tags
  
  -- SEO Meta tags
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT[],
  og_image_url TEXT,
  
  -- Visibility on main website
  visible_on_website BOOLEAN NOT NULL DEFAULT TRUE,
  
  -- Timestamps
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON public.blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_visible ON public.blog_posts(visible_on_website);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON public.blog_posts(author_id);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS Policies for blog_posts
-- ============================================

-- Public can read published posts that are visible on website
CREATE POLICY "Public can view published visible posts"
  ON public.blog_posts
  FOR SELECT
  USING (is_published = TRUE AND visible_on_website = TRUE);

-- Public can read by slug (for individual post pages)
CREATE POLICY "Public can view post by slug"
  ON public.blog_posts
  FOR SELECT
  USING (is_published = TRUE);

-- Admins can read all posts
CREATE POLICY "Admins can view all blog posts"
  ON public.blog_posts
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can insert posts
CREATE POLICY "Admins can create blog posts"
  ON public.blog_posts
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can update posts
CREATE POLICY "Admins can update blog posts"
  ON public.blog_posts
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can delete posts
CREATE POLICY "Admins can delete blog posts"
  ON public.blog_posts
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================
-- FUNCTION: Auto-generate slug from title
-- ============================================
CREATE OR REPLACE FUNCTION public.generate_slug(title TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN lower(regexp_replace(trim(title), '[^a-zA-Z0-9\s-]', '', 'g'));
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- FUNCTION: Update updated_at timestamp
-- ============================================
CREATE OR REPLACE FUNCTION public.update_blog_post_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  
  -- Auto-set published_at when status changes to published
  IF (OLD.status IS DISTINCT FROM NEW.status) AND NEW.status = 'published' AND OLD.status != 'published' THEN
    NEW.published_at := NOW();
    NEW.is_published := TRUE;
  END IF;
  
  -- Update is_published based on status
  IF NEW.status = 'published' THEN
    NEW.is_published := TRUE;
  ELSE
    NEW.is_published := FALSE;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for blog_posts updated_at
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON public.blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_blog_post_updated_at();

-- ============================================
-- FUNCTION: Auto-generate excerpt from content
-- ============================================
CREATE OR REPLACE FUNCTION public.generate_excerpt(content TEXT)
RETURNS TEXT AS $$
BEGIN
  -- Strip HTML tags and get first 200 characters
  RETURN regexp_replace(regexp_replace(content, '<[^>]+>', '', 'g'), '\s+', ' ', 'g');
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- FUNCTION: Create slug trigger
-- ============================================
CREATE OR REPLACE FUNCTION public.create_blog_post_slug()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := lower(regexp_replace(trim(NEW.title), '[^a-zA-Z0-9\s-]', '', 'g'));
    NEW.slug := regexp_replace(NEW.slug, '\s+', '-', 'g');
    NEW.slug := regexp_replace(NEW.slug, '-+', '-', 'g');
  END IF;
  
  -- Auto-generate excerpt if not provided
  IF NEW.excerpt IS NULL OR NEW.excerpt = '' THEN
    NEW.excerpt := left(regexp_replace(regexp_replace(NEW.content, '<[^>]+>', '', 'g'), '\s+', ' ', 'g'), 200);
  END IF;
  
  -- Set meta_title if not provided
  IF NEW.meta_title IS NULL OR NEW.meta_title = '' THEN
    NEW.meta_title := NEW.title;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for auto-generating slug and excerpt
DROP TRIGGER IF EXISTS create_blog_post_slug_trigger ON public.blog_posts;
CREATE TRIGGER create_blog_post_slug_trigger
  BEFORE INSERT ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.create_blog_post_slug();

-- ============================================
-- VIEW: published_posts (for easy querying)
-- ============================================
CREATE OR REPLACE VIEW public.published_posts AS
SELECT 
  id,
  title,
  slug,
  content,
  excerpt,
  featured_image_url,
  featured_image_alt,
  author_name,
  category,
  tags,
  meta_title,
  meta_description,
  meta_keywords,
  og_image_url,
  published_at,
  created_at,
  updated_at
FROM public.blog_posts
WHERE is_published = TRUE AND visible_on_website = TRUE
ORDER BY published_at DESC;
