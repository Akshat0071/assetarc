import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
import Layout from '@/components/layout/Layout';

export const dynamic = 'force-dynamic';

interface BlogPost {
  id: string;
  slug?: string;
  title: string;
  url: string;
  content: string;
  published: string;
  author: {
    displayName: string;
  };
}

export default async function BlogPage() {
  // Server-side fetch from Blogger API for SSR (no prerendering)
  const BLOG_ID = process.env.BLOG_ID || process.env.NEXT_PUBLIC_BLOG_ID || process.env.NEXT_PUBLIC_BLOGGER_ID;
  const API_KEY = process.env.BLOGGER_API_KEY || process.env.NEXT_PUBLIC_BLOGGER_API_KEY || process.env.BLOGGER_KEY;

  if (!BLOG_ID || !API_KEY) {
    return (
      <Layout>
        <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-red-400">Missing BLOG_ID or BLOGGER_API_KEY environment variables.</div>
        </div>
      </Layout>
    );
  }

  const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?maxResults=50&key=${API_KEY}`;
  const res = await fetch(url, { cache: 'no-store' });
  const data = await res.ok ? await res.json() : { items: [] };
  const posts: BlogPost[] = data.items || [];

  const extractSnippet = (html: string) => {
    let plainText = html.replace(/<[^>]*>?/gm, '');
    plainText = plainText.replace(/&nbsp;|&#160;/gi, ' ');
    plainText = plainText.replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&quot;/gi, '"').replace(/&#39;/gi, "'");
    plainText = plainText.replace(/\s+/g, ' ').trim();
    return plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;
  };

  const extractImage = (html: string): string | null => {
    const imgRegex = /<img[^>]+src="([^"]+)"/;
    const match = html.match(imgRegex);
    return match ? match[1] : null;
  };

  return (
    <Layout>
      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal text-center uppercase gradient-text mb-12">
            OUR BLOG
          </h1>

          {posts.length === 0 ? (
            <p className="text-white/60 text-center text-lg">No blog posts found.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => {
                const imageUrl = extractImage(post.content);
                const slugFromTitle = (post.title || '')
                  .toLowerCase()
                  .normalize('NFKD')
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/^-+|-+$/g, '')
                  .replace(/-{2,}/g, '-');
                const slug = post.slug || slugFromTitle || 'post';
                const postPath = `/blog/${slug}-${post.id}`;
                return (
                  <article
                    key={post.id}
                    className="bg-AssetArc-bg-light/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-AssetArc-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-500 group"
                  >
                    <div className="flex flex-col lg:flex-row gap-6 p-6 lg:p-6">
                      {imageUrl && (
                        <div className="w-full lg:w-72 shrink-0">
                          <div className="w-full">
                            <Image
                              src={imageUrl}
                              alt={post.title}
                              className="w-full h-auto object-contain rounded-lg border border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
                              style={{ objectPosition: 'center' }}
                              width={800}
                              height={450}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <p className="text-AssetArc-green-light text-xs sm:text-sm uppercase tracking-wider mb-4 font-work-sans font-medium">
                            {post.author?.displayName || 'Building Vendor'}
                          </p>
                          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 font-product-sans leading-snug">
                            <Link href={postPath} className="text-AssetArc-green-light hover:text-white transition-colors duration-300">
                              {post.title}
                            </Link>
                          </h2>
                          <p className="text-white/70 text-sm sm:text-sm lg:text-base leading-relaxed mb-4 line-clamp-2 font-work-sans">
                            {extractSnippet(post.content)}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <Link href={postPath} className="inline-flex items-center gap-2 text-AssetArc-green-light hover:text-white font-medium transition-colors duration-300 font-work-sans text-sm sm:text-base group-hover:gap-3">
                            Read More
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          <p className="text-white/40 text-xs sm:text-xs lg:text-sm font-work-sans">
                            {format(new Date(post.published), 'd MMMM, yyyy')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
