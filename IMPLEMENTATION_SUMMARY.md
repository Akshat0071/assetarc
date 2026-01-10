# Implementation Summary - Risk Profiling System Refactor

## ✅ Completed Implementation

### 1. Database Schema Updates
- ✅ Added `phone_number` field to `profiles` table
- ✅ Removed `responses` JSONB from `risk_attempts`, added `visibility` field
- ✅ Created new `responses` table with individual question responses
- ✅ Updated RLS policies for visibility-based access control
- ✅ Migration file: `supabase/migrations/002_update_schema.sql`

### 2. Hero Section & Navigation
- ✅ Added "Check Your Risk Profile" button in hero section (beside existing button)
- ✅ Added "Risk Profile" option to Services dropdown in header
- ✅ Created `/check-risk-profile` redirect page that checks auth and redirects

### 3. Services Page
- ✅ Added Risk Profile service section after Mutual Funds
- ✅ Matches styling and layout of other services
- ✅ Includes CTA linking to `/check-risk-profile`

### 4. Authentication Flow (Google Only + Phone Required)
- ✅ Created Google-only sign-in page at `/sign-in`
- ✅ Removed email/password authentication
- ✅ Created `/complete-profile` page for phone number collection
- ✅ Updated OAuth callback to check for phone number
- ✅ Redirect logic:
  - No phone → `/complete-profile`
  - New user → `/risk-profile`
  - Existing user → `/dashboard`

### 5. Risk Profile Page Refactor
- ✅ Removed all result/analysis UI (score cards, allocation guidance, etc.)
- ✅ Kept only questionnaire input collection and submit button
- ✅ Updated submission API to save to `responses` table
- ✅ Proper formatting: Q1, Q2, Q3... with option_selected
- ✅ Enforces max 5 attempts per user
- ✅ Redirects to `/dashboard` after submission

### 6. User Dashboard
- ✅ Shows latest risk score & category
- ✅ "Take Assessment" button (disabled after 5 attempts)
- ✅ Attempts table with columns:
  - Attempt #
  - Score
  - Risk Category
  - Date
  - Actions
- ✅ Actions: View Analysis, View Responses, Delete
- ✅ View Analysis modal (reuses original results UI)
- ✅ View Responses modal (fetches from `responses` table)
- ✅ Delete sets `visibility = 1` (hidden from user, visible to admin)

### 7. Admin Dashboard
- ✅ Role-based access (admin only)
- ✅ Table with columns:
  - User Name
  - Email
  - Attempt #
  - Score
  - Risk Category
  - Date
  - Visibility (with status labels)
  - Actions
- ✅ Actions: View Analysis, View Responses, Delete
- ✅ Delete sets `visibility = 0` (hidden from all UI but retained in DB)
- ✅ Filtering: by email, by risk category
- ✅ Sorting: by highest score
- ✅ Pagination: 20 per page

### 8. Security & RLS
- ✅ Updated RLS policies for `risk_attempts` based on visibility
- ✅ Users can only see attempts with `visibility >= 1`
- ✅ Admins can see all attempts regardless of visibility
- ✅ RLS policies for `responses` table
- ✅ Server-side role checks throughout

## 📁 Files Created/Modified

### New Files
- `supabase/migrations/002_update_schema.sql` - Database schema updates
- `src/app/check-risk-profile/page.tsx` - Auth check redirect page
- `src/app/complete-profile/page.tsx` - Phone number collection page
- `src/components/dashboard/RiskAnalysisModal.tsx` - Analysis modal component
- `src/components/dashboard/ResponsesModal.tsx` - Responses modal component

### Modified Files
- `src/components/home/HeroSection.tsx` - Added "Check Your Risk Profile" button
- `src/components/layout/Header.tsx` - Added "Risk Profile" to Services dropdown
- `src/app/services/page.tsx` - Added Risk Profile service section
- `src/app/sign-in/page.tsx` - Google-only authentication
- `src/app/auth/callback/route.ts` - Phone number check and redirect logic
- `src/app/risk-profile/page.tsx` - Added auth requirement
- `src/components/risk/RiskQuestionnaire.tsx` - Removed results UI, updated submission
- `src/app/api/risk/submit/route.ts` - Updated to save to responses table
- `src/app/dashboard/page.tsx` - Updated to filter by visibility
- `src/components/dashboard/DashboardContent.tsx` - Added modals and actions
- `src/app/admin/page.tsx` - Updated queries
- `src/components/admin/AdminDashboardContent.tsx` - Added visibility column and actions
- `src/lib/supabase/types.ts` - Updated types for new schema

## 🔐 Database Schema

### profiles
- `id` (UUID, PK, references auth.users)
- `email` (TEXT)
- `full_name` (TEXT, nullable)
- `phone_number` (TEXT, nullable) ← NEW
- `role` ('user' | 'admin')
- `created_at`, `updated_at`

### risk_attempts
- `id` (UUID, PK)
- `user_id` (UUID, FK → profiles.id)
- `score` (INTEGER, 0-100)
- `risk_category` (TEXT)
- `investment_horizon` (TEXT, nullable)
- `attempt_number` (INTEGER)
- `visibility` (INTEGER: 2=visible, 1=deleted by user, 0=deleted by admin) ← NEW
- `created_at`
- ❌ Removed: `responses` (JSONB) - moved to separate table

### responses ← NEW TABLE
- `id` (UUID, PK)
- `risk_attempt_id` (UUID, FK → risk_attempts.id)
- `question_key` (TEXT) - Format: Q1, Q2, Q3...
- `option_selected` (TEXT)
- `created_at`

## 🚀 Next Steps

1. **Run Database Migration**:
   - Execute `supabase/migrations/002_update_schema.sql` in Supabase SQL Editor

2. **Environment Variables**:
   - Ensure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
   - Ensure Google OAuth is configured in Supabase dashboard

3. **Test Flow**:
   - Visit home page → Click "Check Your Risk Profile" → Sign in with Google
   - Complete phone number → Take assessment → View results in dashboard
   - Test admin dashboard access and actions

4. **Admin Setup**:
   - Update a user's role to 'admin' in Supabase:
     ```sql
     UPDATE public.profiles SET role = 'admin' WHERE email = 'admin@example.com';
     ```

## ⚠️ Important Notes

- The old `responses` JSONB field in `risk_attempts` has been removed
- If you have existing data, you'll need to migrate it before running migration 002
- All RLS policies respect the new visibility system
- Phone number collection is mandatory after Google sign-in
- Maximum 5 attempts per user is enforced

## 🎨 UI Consistency

All new UI components follow the existing Stockstrail theme:
- Dark background (`#012928`)
- Green accent colors (`#00FF97`, `#007D42`)
- Glassmorphism effects
- Consistent spacing and typography
- Mobile-responsive design
