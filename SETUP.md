# Stockstrail Risk Profiling - Setup Guide

This guide will help you set up the complete authentication and risk profiling system.

## Prerequisites

- Node.js 18+ and npm
- Supabase account and project
- Environment variables configured

## Database Setup

1. **Run the migration** in your Supabase dashboard:
   - Go to SQL Editor
   - Copy and paste the contents of `supabase/migrations/001_initial_schema.sql`
   - Execute the migration

2. **Enable Google OAuth** (optional but recommended):
   - Go to Authentication > Providers in Supabase dashboard
   - Enable Google provider
   - Add your OAuth credentials

3. **Set up RLS policies**:
   - The migration already includes RLS policies
   - Verify they're enabled in the Supabase dashboard

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Site URL (for OAuth redirects)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Install Dependencies

```bash
npm install @supabase/ssr
```

If you haven't already installed it, the project should have it in `package.json`.

## Create Admin User

To create an admin user, run this SQL in Supabase SQL Editor after creating a user:

```sql
-- Replace 'user-email@example.com' with the actual user email
UPDATE public.profiles
SET role = 'admin'
WHERE email = 'user-email@example.com';
```

## Features Implemented

### 1. Authentication Flow
- ✅ Email/password sign-in and sign-up
- ✅ Google OAuth authentication
- ✅ Automatic profile creation on signup
- ✅ Session management with cookies

### 2. Home Page Modal
- ✅ Welcome modal for non-authenticated users
- ✅ Redirects to sign-in page
- ✅ Only shows once per session

### 3. Header Updates
- ✅ "Check Your Risk Tolerance" button
- ✅ Redirects to `/sign-in` if not authenticated
- ✅ Redirects to `/dashboard` if authenticated

### 4. Sign-In Page (`/sign-in`)
- ✅ Email/password authentication
- ✅ Google OAuth button
- ✅ Redirects new users to `/risk-profile`
- ✅ Redirects existing users to `/dashboard`

### 5. Risk Questionnaire (`/risk-profile`)
- ✅ 11-question risk assessment
- ✅ Real-time score calculation
- ✅ Submission with attempt limits (max 5)
- ✅ Saves to database with all responses
- ✅ Redirects to dashboard after submission

### 6. User Dashboard (`/dashboard`)
- ✅ Shows latest risk profile
- ✅ Displays all assessment attempts
- ✅ Quick stats (total assessments, attempts remaining)
- ✅ "Take Assessment" button (disabled after 5 attempts)
- ✅ Assessment history table

### 7. Admin Dashboard (`/admin`)
- ✅ Role-based access control
- ✅ View all user risk attempts
- ✅ Filter by email
- ✅ Filter by risk category
- ✅ Sort by highest score
- ✅ Pagination (20 per page)

## Database Schema

### `profiles` Table
- `id` (UUID, primary key, references auth.users)
- `email` (TEXT)
- `full_name` (TEXT, nullable)
- `role` (TEXT: 'user' | 'admin')
- `created_at` (TIMESTAMPTZ)
- `updated_at` (TIMESTAMPTZ)

### `risk_attempts` Table
- `id` (UUID, primary key)
- `user_id` (UUID, foreign key → profiles.id)
- `responses` (JSONB - stores all question answers)
- `score` (INTEGER, 0-100)
- `risk_category` (TEXT)
- `investment_horizon` (TEXT, nullable)
- `attempt_number` (INTEGER)
- `created_at` (TIMESTAMPTZ)

## Security Features

- ✅ Row Level Security (RLS) enabled on all tables
- ✅ Users can only access their own data
- ✅ Admins can access all data
- ✅ Server-side role checks
- ✅ No client-side trust assumptions

## API Routes

- `GET /api/user/check-attempts` - Check if user has existing attempts
- `POST /api/risk/submit` - Submit risk questionnaire (max 5 attempts)

## Testing the Flow

1. **New User Journey**:
   - Visit home page → See welcome modal
   - Click "Get Started" → Redirected to `/sign-in`
   - Sign up → Redirected to `/risk-profile`
   - Complete questionnaire → Redirected to `/dashboard`

2. **Returning User Journey**:
   - Visit home page → No modal (already seen)
   - Click header button → Redirected to `/dashboard`
   - Can take another assessment (if under 5 attempts)

3. **Admin Journey**:
   - Sign in as admin → Access `/admin`
   - View all user attempts
   - Filter and search

## Troubleshooting

### OAuth not working
- Check redirect URL is set correctly in Supabase
- Verify `NEXT_PUBLIC_SITE_URL` matches your domain
- Check OAuth credentials in Supabase dashboard

### RLS policies blocking access
- Verify policies are enabled in Supabase dashboard
- Check user authentication status
- Review policy conditions in migration file

### Profile not created on signup
- Check trigger is enabled: `on_auth_user_created`
- Verify function exists: `handle_new_user()`
- Check Supabase logs for errors

## Next Steps

- Add email verification requirement
- Implement password reset flow
- Add more admin features (user management, analytics)
- Export risk profiles to PDF
- Add email notifications
