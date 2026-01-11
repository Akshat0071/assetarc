# OAuth Redirect Issue - Fix Instructions

## Problem
When signing in with Google on the deployed site (stocktrail.in), users are redirected to `localhost:3000/sign-in?error=auth_failed` instead of the production domain.

## Root Cause
The Supabase dashboard has OAuth redirect URLs configured for localhost instead of the production domain.

## Solution

### Step 1: Update Supabase Redirect URLs

1. Go to your Supabase dashboard: https://app.supabase.com
2. Select your project
3. Navigate to **Authentication** → **URL Configuration**
4. Update the following URLs:

   **Site URL:**
   ```
   https://stocktrail.in
   ```

   **Redirect URLs:**
   Add these URLs (one per line):
   ```
   https://stocktrail.in/auth/callback
   https://stocktrail.in/**
   http://localhost:3000/auth/callback
   http://localhost:3000/**
   ```

   The `**` wildcard allows all paths under that domain.

### Step 2: Verify Environment Variables

Make sure your production environment has:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### Step 3: Code Improvements Made

The callback route has been improved to:
1. Handle cases where the profile might not exist yet (retry logic)
2. Create the profile as a fallback if the trigger didn't fire
3. Better error handling and logging

### Step 4: Test the Flow

1. Clear browser cache and cookies
2. Sign in with Google on https://stocktrail.in
3. After Google authentication, you should be redirected to:
   - `/complete-profile` if phone number is missing
   - `/risk-profile` if it's a new user with phone number
   - `/dashboard` if it's an existing user

## Additional Notes

- The callback route now uses `requestUrl.origin` which correctly uses the domain from the incoming request
- Profile creation has retry logic to handle timing issues with database triggers
- Admin users skip the complete-profile step and go directly to `/admin/dashboard`
