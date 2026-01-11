/**
 * Client-side Supabase utilities
 * Use this in Client Components for user authentication and data operations
 */

import { createBrowserClient } from '@supabase/ssr'
import type { User } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

/**
 * Create a browser client for client-side operations
 * This respects RLS policies based on the authenticated user
 */
export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

/**
 * Get the current authenticated user
 * Handles invalid JWT errors by clearing the session
 */
export async function getCurrentUser(): Promise<User | null> {
  const supabase = createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) {
    // If the JWT user doesn't exist (invalid/stale session), clear it
    // This happens when the user was deleted or the JWT is invalid
    const errorMessage = error.message?.toLowerCase() || ''
    if (
      errorMessage.includes('does not exist') ||
      errorMessage.includes('jwt') ||
      errorMessage.includes('user') && errorMessage.includes('claim')
    ) {
      // Clear the invalid session silently (local scope only, doesn't refresh)
      try {
        await supabase.auth.signOut({ scope: 'local' })
      } catch {
        // Ignore sign out errors
      }
      return null
    }
    // For other errors, just return null (don't log to avoid console spam)
    return null
  }

  return user
}

/**
 * Sign in with email and password
 */
export async function signInWithEmail(email: string, password: string) {
  const supabase = createClient()
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return { data, error }
}

/**
 * Sign up with email and password
 */
export async function signUpWithEmail(
  email: string,
  password: string,
  fullName?: string
) {
  const supabase = createClient()
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName || '',
      },
    },
  })

  return { data, error }
}

/**
 * Sign in with Google OAuth
 */
export async function signInWithGoogle(redirectPath?: string) {
  const supabase = createClient()
  
  // Use the current origin (works for both localhost and production)
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const nextPath = redirectPath || '/dashboard'
  const redirectTo = `${origin}/auth/callback?next=${encodeURIComponent(nextPath)}`
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })

  return { data, error }
}

/**
 * Sign out
 */
export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  return { error }
}
