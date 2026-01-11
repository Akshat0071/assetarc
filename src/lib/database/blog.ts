import axios from 'axios'

const BLOGGER_API_KEY = process.env.BLOGGER_API_KEY
const BLOG_ID = process.env.BLOG_ID

interface BloggerPost {
  kind: string
  id: string
  blog: { id: string }
  published: string
  updated: string
  url: string
  selfLink: string
  title: string
  content: string
  author: { displayName: string }
  images?: Array<{ url: string }>
}

export interface BlogPost {
  id: string
  title: string
  content: string
  published: string
  updated: string
  url: string
  author: string
  image?: string
}

/**
 * Fetch all blog posts from Blogger API
 */
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!BLOGGER_API_KEY || !BLOG_ID) {
      console.warn('⚠️ Blogger API credentials not configured')
      return []
    }

    const response = await axios.get(
      `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts`,
      {
        params: {
          key: BLOGGER_API_KEY,
          fetchBodies: true,
          fetchImages: true,
          maxResults: 50,
          orderBy: 'published',
          sortOrder: 'DESCENDING',
        },
        timeout: 10000,
      }
    )

    const posts = response.data.items || []
    return posts.map((post: BloggerPost) => ({
      id: post.id,
      title: post.title,
      content: post.content,
      published: post.published,
      updated: post.updated,
      url: post.url,
      author: post.author.displayName,
      image: post.images?.[0]?.url,
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

/**
 * Fetch a single blog post by ID
 */
export async function fetchBlogPostById(postId: string): Promise<BlogPost | null> {
  try {
    if (!BLOGGER_API_KEY || !BLOG_ID) {
      console.warn('⚠️ Blogger API credentials not configured')
      return null
    }

    const response = await axios.get(
      `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}`,
      {
        params: {
          key: BLOGGER_API_KEY,
        },
        timeout: 10000,
      }
    )

    const post: BloggerPost = response.data
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      published: post.published,
      updated: post.updated,
      url: post.url,
      author: post.author.displayName,
      image: post.images?.[0]?.url,
    }
  } catch (error) {
    console.error(`Error fetching blog post ${postId}:`, error)
    return null
  }
}

/**
 * Fetch a blog post by slug (URL slug)
 */
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Try to extract ID from slug if it's in format "title-123456789"
    const parts = slug.split('-')
    const potentialId = parts[parts.length - 1]

    if (potentialId && /^\d+$/.test(potentialId)) {
      return await fetchBlogPostById(potentialId)
    }

    // Fallback: fetch all posts and find by URL match
    const posts = await fetchBlogPosts()
    return posts.find(post => post.url.includes(slug)) || null
  } catch (error) {
    console.error(`Error fetching blog post by slug "${slug}":`, error)
    return null
  }
}

/**
 * Extract text snippet from HTML content
 */
export function extractSnippet(html: string, length: number = 150): string {
  try {
    // Remove HTML tags
    let text = html.replace(/<[^>]*>?/gm, '')

    // Decode HTML entities
    text = text
      .replace(/&nbsp;|&#160;/gi, ' ')
      .replace(/&amp;/gi, '&')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>')
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")

    // Collapse whitespace
    text = text.replace(/\s+/g, ' ').trim()

    // Truncate to length
    return text.length > length ? text.substring(0, length) + '...' : text
  } catch (error) {
    console.error('Error extracting snippet:', error)
    return ''
  }
}
