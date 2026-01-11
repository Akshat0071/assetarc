-- ============================================
-- Fix RLS Infinite Recursion Issue
-- ============================================
-- The admin policies were checking profiles table which caused recursion
-- Solution: Use SECURITY DEFINER function to check admin role without RLS

-- ============================================
-- FUNCTION: Check if current user is admin
-- ============================================
-- This function bypasses RLS (SECURITY DEFINER) to check admin role
-- preventing infinite recursion in RLS policies
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = user_id AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- ============================================
-- FIX: profiles table admin policy
-- ============================================
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins can view all profiles"
  ON public.profiles
  FOR SELECT
  USING (public.is_admin(auth.uid()));

-- ============================================
-- FIX: risk_attempts table admin policies
-- ============================================
DROP POLICY IF EXISTS "Admins can view all risk attempts" ON public.risk_attempts;
CREATE POLICY "Admins can view all risk attempts"
  ON public.risk_attempts
  FOR SELECT
  USING (public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "Admins can update all risk attempts visibility" ON public.risk_attempts;
CREATE POLICY "Admins can update all risk attempts visibility"
  ON public.risk_attempts
  FOR UPDATE
  USING (public.is_admin(auth.uid()));

-- ============================================
-- FIX: responses table admin policies
-- ============================================
DROP POLICY IF EXISTS "Admins can view all responses" ON public.responses;
CREATE POLICY "Admins can view all responses"
  ON public.responses
  FOR SELECT
  USING (public.is_admin(auth.uid()));

DROP POLICY IF EXISTS "Admins can create all responses" ON public.responses;
CREATE POLICY "Admins can create all responses"
  ON public.responses
  FOR INSERT
  WITH CHECK (public.is_admin(auth.uid()));
