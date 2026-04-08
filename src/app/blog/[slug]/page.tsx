import Link from 'next/link';
import { format } from 'date-fns';
import type { Metadata } from 'next';
import { Skeleton } from '@/components/ui/skeleton';
import { ChevronLeft, Send, Facebook, Linkedin, Instagram } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ShareButtons from '@/components/blog/ShareButtons';
import MobileShareButton from '@/components/blog/MobileShareButton';

export const dynamic = 'force-dynamic';

interface Post {
  id: string;
  slug?: string;
  title: string;
  content: string;
  published: string;
  author: {
    displayName: string;
  };
}

const ContactCard = () => {
  return (
    <div className="w-full bg-white/10 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-AssetArc-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
      <h2 className="text-2xl font-product-sans mb-6">
        <span className="text-white">Get in </span>
        <span className="gradient-text">touch</span>
      </h2>
      <div className="space-y-4 text-white/90">
        <div>
          <div className="text-white/60 text-sm mb-1">Email</div>
          <a href="mailto:akshatbansa04@gmail.com" className="underline hover:text-AssetArc-green-light transition-colors">akshatbansa04@gmail.com</a>
        </div>
        <div>
          <div className="text-white/60 text-sm mb-1">WhatsApp</div>
          <a href="https://wa.me/918219890171" target="_blank" rel="noopener noreferrer" className="underline hover:text-AssetArc-green-light transition-colors">+91 8219890171</a>
        </div>
        <div>
          <div className="text-white/60 text-sm mb-1">Mobile No.</div>
          <a href="tel:+918219890171" className="underline hover:text-AssetArc-green-light transition-colors">+91 8219890171</a>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-white/80 text-sm uppercase tracking-widest mb-2">Socials</h4>
        <div className="flex items-center gap-5">
          <a href="https://www.facebook.com/people/AssetArc/100089234534696/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-AssetArc-green-light hover:scale-110 transition-transform duration-300"><Facebook className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/company/assetarc/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-AssetArc-green-light hover:scale-110 transition-transform duration-300"><Linkedin className="w-6 h-6" /></a>
          <a href="http://instagram.com/assetarc/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-AssetArc-green-light hover:scale-110 transition-transform duration-300"><Instagram className="w-6 h-6" /></a>
          <a href="https://t.me/assetarc" target="_blank" rel="noopener noreferrer" className="text-white hover:text-AssetArc-green-light hover:scale-110 transition-transform duration-300"><Send className="w-6 h-6" /></a>
        </div>
      </div>
    </div>
  );
};

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const slugOrId = resolvedParams?.slug;
  const BLOG_ID = process.env.BLOG_ID || process.env.NEXT_PUBLIC_BLOG_ID || process.env.NEXT_PUBLIC_BLOGGER_ID;
  const API_KEY = process.env.BLOGGER_API_KEY || process.env.NEXT_PUBLIC_BLOGGER_API_KEY || process.env.BLOGGER_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://assetarc.in";
  const baseUrl = siteUrl.replace(/\/$/, '');
  const postUrl = `${baseUrl}/blog/${slugOrId}`;

  if (!BLOG_ID || !API_KEY) {
    return {
      title: "Blog Post",
      description: "Read our latest financial insights",
    };
  }

  let post: Post | null = null;
  const idMatch = String(slugOrId || '').match(/-(\d+)$/);

  try {
    if (idMatch) {
      const id = idMatch[1];
      const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`;
      const res = await fetch(url, { cache: 'no-store' });
      if (res.ok) post = await res.json();
    } else {
      const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/search?q=${encodeURIComponent(slugOrId || '')}&key=${API_KEY}`;
      const res = await fetch(url, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data.items?.length) post = data.items[0];
      }
    }
  } catch (err) {
    console.error('Error fetching post metadata:', err);
  }

  return {
    title: post?.title || "AssetArc Blog",
    description: post?.title || "Read our latest financial insights",
    openGraph: {
      type: "article",
      title: post?.title || "AssetArc Blog",
      description: post?.title || "Read our latest financial insights",
      url: postUrl,
      siteName: "AssetArc",
      publishedTime: post?.published,
      authors: [post?.author?.displayName || "AssetArc"],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title || "AssetArc Blog",
      description: post?.title || "Read our latest financial insights",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slugOrId = resolvedParams?.slug;
  const BLOG_ID = process.env.BLOG_ID || process.env.NEXT_PUBLIC_BLOG_ID || process.env.NEXT_PUBLIC_BLOGGER_ID;
  const API_KEY = process.env.BLOGGER_API_KEY || process.env.NEXT_PUBLIC_BLOGGER_API_KEY || process.env.BLOGGER_KEY;

  if (!BLOG_ID || !API_KEY) {
    return (
      <Layout>
        <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center text-red-400">Missing BLOG_ID or BLOGGER_API_KEY environment variables.</div>
        </div>
      </Layout>
    );
  }

  let post: Post | null = null;

  const idMatch = String(slugOrId || '').match(/-(\d+)$/);
  if (idMatch) {
    // fetch by numeric id
    try {
      const id = idMatch[1];
      const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`;
      const res = await fetch(url, { cache: 'no-store' });
      if (res.ok) post = await res.json();
    } catch (err) {
      // fallback to search
    }
  }

  if (!post) {
    // search recent posts for slug match
    try {
      const listUrl = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?maxResults=200&key=${API_KEY}`;
      const res = await fetch(listUrl, { cache: 'no-store' });
      const data = res.ok ? await res.json() : { items: [] };
      const items = data.items || [];
      const normalizedInput = String(slugOrId || '').replace(/-(\d+)$/, '');
      const found = items.find((p: any) => {
        if (p.slug && p.slug === normalizedInput) return true;
        if (typeof p.url === 'string' && p.url.endsWith(`/${normalizedInput}`)) return true;
        const titleSlug = (p.title || '')
          .toLowerCase()
          .normalize('NFKD')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '')
          .replace(/-{2,}/g, '-');
        return titleSlug === normalizedInput;
      });
      if (found) post = found;
    } catch (err) {
      // leave post null
    }
  }

  if (!post) {
    return (
      <Layout>
        <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-normal mb-6 gradient-text font-product-sans uppercase">Post Not Found</h1>
            <p className="text-red-500 mb-10 text-lg">This blog post was not found.</p>
            <Link href="/blog" className="inline-flex items-center text-AssetArc-green-light hover:text-white transition-colors duration-300 text-lg">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://assetarc.in";
  const baseUrl = siteUrl.replace(/\/$/, '');
  const currentUrl = `${baseUrl}/blog/${resolvedParams.slug}`;

  return (
    <Layout>
      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-white/50 hover:text-AssetArc-green-light mb-16 transition-colors duration-300 font-work-sans text-sm sm:text-base group">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Posts
          </Link>

          {/* Floating Mobile Share Button - always visible on mobile */}
          <MobileShareButton />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-AssetArc-green-light/20 hover:bg-white/10  hover:border-AssetArc-green-light/40 hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-500 flex flex-col lg:h-[calc(100vh-6rem)]">
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-8 scrollable-blog-content">
                  <article className="space-y-10 text-white">
                    <div className="text-center space-y-8">
                      <h1 className="font-product-sans text-3xl sm:text-4xl lg:text-4xl font-normal uppercase gradient-text leading-tight">
                        {post.title}
                      </h1>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base pb-8 border-b border-white/10 max-w-3xl mx-auto">
                        <p className="text-AssetArc-green-light font-work-sans uppercase tracking-wider font-medium">
                          {post.author?.displayName || 'Building Vendor'}
                        </p>
                        <span className="hidden sm:block text-white/30">•</span>
                        <p className="text-white/50 font-work-sans">
                          {format(new Date(post.published), 'd MMMM, yyyy')}
                        </p>
                      </div>
                    </div>
                    <div className="blog-content prose prose-sm sm:prose-base lg:prose-lg mx-auto w-full" dangerouslySetInnerHTML={{ __html: post.content }} />
                  </article>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div id="share-section">
                <ShareButtons title={post.title} url={currentUrl} />
              </div>
              <div className="sticky top-24">
                <ContactCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollable-blog-content {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 255, 151, 0.5) rgba(255, 255, 255, 0.1);
        }
        .scrollable-blog-content::-webkit-scrollbar { width: 8px; }
        .scrollable-blog-content::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 10px; }
        .scrollable-blog-content::-webkit-scrollbar-thumb { background: rgba(0,255,151,0.5); border-radius: 10px; }
        .scrollable-blog-content::-webkit-scrollbar-thumb:hover { background: rgba(0,255,151,0.7); }
        .blog-content { color: rgba(255,255,255,0.85); font-family: 'Work Sans', system-ui, sans-serif; line-height: 1.85; max-width: none; }
        .blog-content p { margin-bottom: 1.25rem; line-height: 1.85; color: rgba(255,255,255,0.85); font-size: 1.0625rem; }
        .blog-content img, .blog-content iframe, .blog-content video { max-width: 100%; height: auto; display: block; }
        .blog-content pre, .blog-content code, .blog-content table { max-width: 100%; overflow-x: auto; }
        /* Ensure text wraps and long tokens don't cause horizontal overflow */
        .blog-content, .blog-content * { box-sizing: border-box; }
        .blog-content { overflow-wrap: anywhere; word-break: break-word; hyphens: auto; }
        .blog-content p, .blog-content li { overflow-wrap: anywhere; word-break: break-word; }
        .blog-content code { white-space: pre-wrap; word-break: break-word; }
        .blog-content pre { white-space: pre-wrap; }
        @media (max-width: 640px) { .blog-content p { font-size: 0.9375rem; margin-bottom: 1.25rem; } }
        .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5, .blog-content h6 {
          color: #00FF97 !important;
          font-family: 'Product Sans', system-ui, sans-serif; font-weight: 600; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; line-height: 1.3;
        }
      `}</style>
    </Layout>
  );
}
