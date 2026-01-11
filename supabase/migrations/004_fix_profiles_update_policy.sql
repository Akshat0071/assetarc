-- ============================================
-- Fix profiles UPDATE policy to include WITH CHECK
-- ============================================
-- UPDATE policies should have both USING and WITH CHECK clauses
-- WITH CHECK ensures the updated row still matches the policy

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
