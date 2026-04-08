import { supabase } from '../supabase'
import type { BlogPost, BlogPostInput, BlogPostUpdate } from '../supabase/types'

/**
 * Get all blog posts (admin only)
 */
export const getAllBlogPosts = async () => {
    try {
        if (!supabase) {
            return { data: [], error: new Error('Supabase not initialized') }
        }

        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            throw error
        }

        return { data, error: null }
    } catch (error) {
        console.error('Error fetching all blog posts:', error)
        return { data: [], error }
    }
}

/**
 * Get published blog posts (public)
 */
export const getPublishedBlogPosts = async () => {
    try {
        if (!supabase) {
            return { data: [], error: new Error('Supabase not initialized') }
        }

        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('is_published', true)
            .eq('visible_on_website', true)
            .order('published_at', { ascending: false })

        if (error) {
            throw error
        }

        return { data, error: null }
    } catch (error) {
        console.error('Error fetching published blog posts:', error)
        return { data: [], error }
    }
}

/**
 * Get a single blog post by ID
 */
export const getBlogPostById = async (id: string) => {
    try {
        if (!supabase) {
            return { data: null, error: new Error('Supabase not initialized') }
        }

        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('id', id)
            .single()

        if (error) {
            throw error
        }

        return { data, error: null }
    } catch (error) {
        console.error(`Error fetching blog post ${id}:`, error)
        return { data: null, error }
    }
}

/**
 * Get a single blog post by slug
 */
export const getBlogPostBySlug = async (slug: string) => {
    try {
        if (!supabase) {
            return { data: null, error: new Error('Supabase not initialized') }
        }

        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('slug', slug)
            .eq('is_published', true)
            .single()

        if (error) {
            throw error
        }

        return { data, error: null }
    } catch (error) {
        console.error(`Error fetching blog post by slug "${slug}":`, error)
        return { data: null, error }
    }
}

/**
 * Create a new blog post
 */
export const createBlogPost = async (postData: BlogPostInput) => {
    try {
        if (!supabase) {
            return { data: null, error: new Error('Supabase not initialized') }
        }

        const { data, error } = await supabase
            .from('blog_posts')
            .insert([postData])
            .select()
            .single()

        if (error) {
            throw error
        }

        return { data, error: null }
    } catch (error) {
        console.error('Error creating blog post:', error)
        return { data: null, error }
    }
}

/**
 * Update an existing blog post
 */
export const updateBlogPost = async (id: string, updates: Partial<BlogPostInput>) => {
    try {
        if (!supabase) {
            return { error: new Error('Supabase not initialized') }
        }

        const { data, error } = await supabase
            .from('blog_posts')
            .update(updates)
            .eq('id', id)
            .select()
            .single()

        if (error) {
            throw error
        }

        return { data, error: null }
    } catch (error) {
        console.error(`Error updating blog post ${id}:`, error)
        return { data: null, error }
    }
}

/**
 * Delete a blog post
 */
export const deleteBlogPost = async (id: string) => {
    try {
        if (!supabase) {
            return { error: new Error('Supabase not initialized') }
        }

        const { error } = await supabase
            .from('blog_posts')
            .delete()
            .eq('id', id)

        if (error) {
            throw error
        }

        return { error: null }
    } catch (error) {
        console.error(`Error deleting blog post ${id}:`, error)
        return { error }
    }
}

/**
 * Toggle the visibility of a blog post on the main website
 */
export const toggleBlogPostVisibility = async (id: string, visible: boolean) => {
    try {
        if (!supabase) {
            return { error: new Error('Supabase not initialized') }
        }

        const { data, error } = await supabase
            .from('blog_posts')
            .update({ visible_on_website: visible })
            .eq('id', id)
            .select()
            .single()

        if (error) {
            throw error
        }

        return { data, error: null }
    } catch (error) {
        console.error(`Error toggling visibility for blog post ${id}:`, error)
        return { data: null, error }
    }
}

/**
 * Get blog posts by category
 */
export const getBlogPostsByCategory = async (category: string) => {
    try {
        if (!supabase) {
            return { data: [], error: new Error('Supabase not initialized') }
        }

        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('category', category)
            .eq('is_published', true)
            .eq('visible_on_website', true)
            .order('published_at', { ascending: false })

        if (error) {
            throw error
        }

        return { data, error: null }
    } catch (error) {
        console.error(`Error fetching blog posts by category "${category}":`, error)
        return { data: [], error }
    }
}

/**
 * Get all unique categories
 */
export const getBlogCategories = async () => {
    try {
        if (!supabase) {
            return { data: [], error: new Error('Supabase not initialized') }
        }

        const { data, error } = await supabase
            .from('blog_posts')
            .select('category')
            .not('category', 'is', null)
            .not('category', 'eq', '')

        if (error) {
            throw error
        }

        // Extract unique categories
        const categories = [...new Set(data?.map((post: { category: string }) => post.category).filter(Boolean) || [])]
        return { data: categories, error: null }
    } catch (error) {
        console.error('Error fetching blog categories:', error)
        return { data: [], error }
    }
}

/**
 * Extract text snippet from HTML content (utility function)
 */
export const extractBlogSnippet = (html: string, length: number = 150): string => {
    try {
        // Remove HTML tags
        let text = html.replace(/<[^>]*>?/gm, ' ')

        // Decode HTML entities
        text = text
            .replace(/&nbsp;|&#160;/gi, ' ')
            .replace(/&/gi, '&')
            .replace(/</gi, '<')
            .replace(/>/gi, '>')
            .replace(/"/gi, '"')
            .replace(/'/gi, "'")

        // Collapse whitespace
        text = text.replace(/\s+/g, ' ').trim()

        // Truncate to length
        return text.length > length ? text.substring(0, length) + '...' : text
    } catch (error) {
        console.error('Error extracting snippet:', error)
        return ''
    }
}

/**
 * Extract first image from HTML content (utility function)
 */
export const extractBlogImage = (html: string): string | null => {
    try {
        const imgRegex = /<img[^>]+src="([^"]+)"/
        const match = html.match(imgRegex)
        return match ? match[1] : null
    } catch (error) {
        console.error('Error extracting image:', error)
        return null
    }
}
