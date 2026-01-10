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
      return NextResponse.redirect(new URL('/sign-in?error=auth_failed', requestUrl.origin))
    }

    // Get the user from the session
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    
    if (userError || !user) {
      console.error('Error getting user after OAuth:', userError)
      return NextResponse.redirect(new URL('/sign-in?error=user_fetch_failed', requestUrl.origin))
    }

    // Check if phone number exists in profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('phone_number')
      .eq('id', user.id)
      .single()

    if (profileError && profileError.code !== 'PGRST116') {
      // PGRST116 = no rows returned, which is fine if profile doesn't exist yet
      console.error('Error fetching profile:', profileError)
    }

    // If no phone number, redirect to complete-profile
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

    // User has attempts, redirect to dashboard
    return NextResponse.redirect(new URL('/dashboard', requestUrl.origin))
  }

  // No code provided, redirect to sign-in
  return NextResponse.redirect(new URL('/sign-in', requestUrl.origin))
}
