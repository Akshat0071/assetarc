/**
 * OAuth callback route
 * Handles redirects from OAuth providers (Google, etc.)
 * Checks for phone number and redirects accordingly
 */

import { createClient, getServerUser } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') || '/dashboard'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (error) {
      console.error('Error exchanging code for session:', error)
      return NextResponse.redirect(new URL('/sign-in?error=auth_failed', requestUrl.origin))
    }

    // Check if phone number exists
    const user = await getServerUser()
    if (user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('phone_number')
        .eq('id', user.id)
        .single()

      // If no phone number, redirect to complete-profile
      if (!profile?.phone_number) {
        return NextResponse.redirect(new URL('/complete-profile', requestUrl.origin))
      }

      // Check if user has existing attempts
      const { data: attempts } = await supabase
        .from('risk_attempts')
        .select('id')
        .eq('user_id', user.id)
        .limit(1)

      // Redirect new users to risk-profile, existing to dashboard
      if (!attempts || attempts.length === 0) {
        return NextResponse.redirect(new URL('/risk-profile', requestUrl.origin))
      }
    }
  }

  // Redirect to the requested page or dashboard
  return NextResponse.redirect(new URL(next, requestUrl.origin))
}
