# Project Structure Optimization Guide

## Overview
This document outlines the optimized folder structure implemented for better code organization, maintainability, and reusability.

## New Directory Structure

```
src/
├── app/                           # Next.js App Router (Pages & API Routes)
│   ├── (public)/                 # Public-facing pages
│   │   ├── page.tsx              # Home page
│   │   ├── about/
│   │   ├── contact/
│   │   ├── services/
│   │   └── blog/
│   ├── (features)/               # Feature-specific pages
│   │   ├── risk-assessment/
│   │   │   ├── risk-profile/
│   │   │   ├── check-risk-profile/
│   │   │   └── complete-profile/
│   │   ├── markets/              # Market data pages
│   │   │   ├── nse-holidays/
│   │   │   ├── bse-holidays/
│   │   │   └── calculators/
│   │   └── resources/
│   │       └── lets-talk/
│   ├── (auth)/                   # Authentication pages
│   │   ├── sign-in/
│   │   └── auth/
│   ├── admin/                    # Admin area
│   │   ├── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   └── sign-in/
│   ├── api/                      # API Routes (organized by domain)
│   │   ├── admin/
│   │   ├── blog/
│   │   ├── risk/
│   │   └── user/
│   ├── globals.css
│   ├── layout.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/                   # Reusable UI & Feature Components
│   ├── ui/                       # Shadcn UI components (auto-generated)
│   ├── layout/                   # Layout wrapper components
│   ├── common/                   # Shared components across features
│   │   ├── SEO.tsx
│   │   ├── SnowfallWrapper.tsx
│   │   └── index.ts
│   ├── features/                 # Feature-organized components (NEW)
│   │   ├── index.ts              # Barrel exports for easy imports
│   │   ├── risk-assessment/      # Risk assessment feature
│   │   │   ├── admin/            # Admin-specific components
│   │   │   │   ├── AdminDashboardContent.tsx
│   │   │   │   ├── AdminReviewsContent.tsx
│   │   │   │   └── AdminQueriesContent.tsx
│   │   │   ├── dashboard/        # User dashboard components
│   │   │   │   └── DashboardContent.tsx
│   │   │   └── modals/           # Reusable modals
│   │   │       ├── RiskAnalysisModal.tsx
│   │   │       └── ResponsesModal.tsx
│   │   ├── blog/                 # Blog-related components
│   │   ├── home/                 # Home page components
│   │   └── holidays/             # Holiday-related components (future)
│   ├── modals/                   # Global modals (future expansion)
│   └── home/                     # Home page-specific components
│
├── hooks/                        # Custom React hooks
│
├── lib/                          # Utilities & Business Logic
│   ├── supabase/                 # Supabase setup & configuration
│   │   ├── client.ts             # Client-side Supabase client
│   │   ├── server.ts             # Server-side Supabase client
│   │   └── types.ts              # Supabase types (also in src/types)
│   ├── database/                 # Data fetching functions (NEW)
│   │   ├── blog.ts               # Blog data operations
│   │   ├── queries.ts            # Query/contact operations
│   │   ├── reviews.ts            # Review operations
│   │   └── index.ts              # Barrel exports
│   ├── api/                      # API utilities (future expansion)
│   ├── utils.ts                  # General utility functions
│   ├── helmet-compat.mjs
│   └── api-types.ts              # API type definitions
│
└── types/                        # Centralized TypeScript types (NEW)
    └── index.ts                  # Re-exported from supabase/types.ts
```

## Key Improvements

### 1. **Organized Components by Feature**
- **Before**: All dashboard components in `/components/dashboard`, admin in `/components/admin`
- **After**: Related components grouped in `/components/features/risk-assessment/` with subfolders for different concerns (admin, dashboard, modals)
- **Benefit**: Easy to find all components related to a feature; promotes component reusability

### 2. **Centralized Database Operations**
- **Before**: `blog.ts`, `queries.ts`, `reviews.ts` scattered at `/lib/` root
- **After**: Consolidated in `/lib/database/` with barrel export index
- **Benefit**: Clear separation of concerns; easier to add new data operations

### 3. **Unified Common Components**
- **Before**: `SEO.tsx`, `SnowfallWrapper.tsx` at `/components/` root
- **After**: Moved to `/components/common/` with index file
- **Benefit**: Better organization; single source for shared components

### 4. **Centralized Types**
- **Before**: Types only in `/lib/supabase/types.ts`
- **After**: Also available in `/src/types/index.ts` (copy for convenience)
- **Benefit**: Convenient access; single import path for types

### 5. **Barrel Exports (index.ts files)**
- **New**: Added index.ts files in:
  - `/components/features/` - exports all feature components
  - `/components/common/` - exports common components
  - `/lib/database/` - exports all database functions
- **Benefit**: Cleaner imports: `import { AdminDashboardContent } from '@/components/features'` instead of long paths

## Import Examples

### Before Optimization
```typescript
import SEO from "@/components/SEO"
import { AdminDashboardContent } from "@/components/admin/AdminDashboardContent"
import { DashboardContent } from "@/components/dashboard/DashboardContent"
import { RiskAnalysisModal } from "@/components/dashboard/RiskAnalysisModal"
import { addQuery } from '@/lib/queries'
import { getRandomReviews } from '@/lib/reviews'
```

### After Optimization
```typescript
import SEO from "@/components/common/SEO"
import { 
  AdminDashboardContent, 
  DashboardContent, 
  RiskAnalysisModal 
} from '@/components/features'
import { addQuery, getRandomReviews } from '@/lib/database'
```

## Adding New Features

### To add a new feature (e.g., Notification System):

1. **Create feature folder structure:**
   ```
   src/components/features/notifications/
   ├── admin/
   ├── user/
   ├── modals/
   └── index.ts
   ```

2. **Create data operations:**
   ```
   src/lib/database/notifications.ts
   ```

3. **Update barrel exports:**
   - Update `/src/components/features/index.ts`
   - Update `/src/lib/database/index.ts`

4. **Use consistent patterns:**
   - Components in feature folders
   - Data operations in database folder
   - Modals in modals subfolder

## Migration Notes

All import paths have been updated during reorganization. If you find any broken imports:

1. Check the new location using this guide
2. Update the import path
3. Verify build completes: `npm run build`

## Future Improvements

1. **Group page routes** using Route Groups (already started with `(public)`, `(features)`, `(auth)`)
2. **Extract constants** into `/src/constants/`
3. **Add `/src/middleware`** for auth & permissions
4. **Create shared layouts** in `/components/layout/`
5. **Expand API utilities** in `/src/lib/api/`

---

**Last Updated**: January 12, 2026
**Status**: ✅ Build Verified & Optimized
