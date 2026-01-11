/**
 * OAuth callback route
 * Handles redirects from OAuth providers (Google, etc.)
 * Checks for phone number and redirects accordingly
 */

import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') || '/dashboard'

  if (code) {
    const cookieStore = await cookies()
    const supabase = await createClient()
    
    // Exchange the code for a session
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (error) {
      console.error('Error exchanging code for session:', error)
      const signInPath = next.startsWith('/admin') ? '/admin/sign-in' : '/sign-in'
      return NextResponse.redirect(new URL(`${signInPath}?error=auth_failed`, requestUrl.origin))
    }

    // Get the user from the session
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    
    if (userError || !user) {
      console.error('Error getting user after OAuth:', userError)
      const signInPath = next.startsWith('/admin') ? '/admin/sign-in' : '/sign-in'
      return NextResponse.redirect(new URL(`${signInPath}?error=user_fetch_failed`, requestUrl.origin))
    }

    // Get profile to check role and phone number
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('phone_number, role')
      .eq('id', user.id)
      .single()

    if (profileError && profileError.code !== 'PGRST116') {
      // PGRST116 = no rows returned, which is fine if profile doesn't exist yet
      console.error('Error fetching profile:', profileError)
    }

    // If admin user, skip complete-profile and go directly to admin dashboard
    if (profile?.role === 'admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', requestUrl.origin))
    }

    // For regular users, check if phone number exists
    if (!profile?.phone_number) {
      return NextResponse.redirect(new URL('/complete-profile', requestUrl.origin))
    }

    // Check if user has existing attempts
    const { data: attempts } = await supabase
      .from('risk_attempts')
      .select('id')
      .eq('user_id', user.id)
      .gte('visibility', 1)
      .limit(1)

    // Redirect new users to risk-profile, existing to dashboard
    if (!attempts || attempts.length === 0) {
      return NextResponse.redirect(new URL('/risk-profile', requestUrl.origin))
    }

    // User has attempts, redirect to requested page or dashboard
    return NextResponse.redirect(new URL(next, requestUrl.origin))
  }

  // No code provided, redirect to sign-in
  return NextResponse.redirect(new URL('/sign-in', requestUrl.origin))
}
