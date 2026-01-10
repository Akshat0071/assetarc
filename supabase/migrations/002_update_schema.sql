-- ============================================
-- Update Database Schema for Refactored System
-- ============================================
-- Adds phone_number to profiles, visibility to risk_attempts,
-- and creates responses table

-- ============================================
-- UPDATE: profiles table - Add phone_number
-- ============================================
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS phone_number TEXT;

CREATE INDEX IF NOT EXISTS idx_profiles_phone ON public.profiles(phone_number);

-- ============================================
-- UPDATE: risk_attempts table - Remove responses JSONB, Add visibility
-- ============================================
-- First, create backup of responses data if needed
-- Then remove responses column and add visibility

ALTER TABLE public.risk_attempts
DROP COLUMN IF EXISTS responses,
ADD COLUMN IF NOT EXISTS visibility INTEGER NOT NULL DEFAULT 2 CHECK (visibility IN (0, 1, 2));

-- Update RLS policies to respect visibility
DROP POLICY IF EXISTS "Users can view own risk attempts" ON public.risk_attempts;
CREATE POLICY "Users can view own risk attempts"
  ON public.risk_attempts
  FOR SELECT
  USING (
    auth.uid() = user_id AND visibility >= 1
  );

-- Admins can view all attempts regardless of visibility
DROP POLICY IF EXISTS "Admins can view all risk attempts" ON public.risk_attempts;
CREATE POLICY "Admins can view all risk attempts"
  ON public.risk_attempts
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Add policy for users to update visibility (delete)
CREATE POLICY "Users can update own risk attempts visibility"
  ON public.risk_attempts
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Add policy for admins to update visibility
CREATE POLICY "Admins can update all risk attempts visibility"
  ON public.risk_attempts
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE INDEX IF NOT EXISTS idx_risk_attempts_visibility ON public.risk_attempts(visibility);

-- ============================================
-- UPDATE: handle_new_user function for phone_number
-- ============================================
-- Update the trigger function to include phone_number (set to NULL initially)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, phone_number)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    NULL -- Phone number will be collected via /complete-profile
  )
  ON CONFLICT (id) DO NOTHING; -- Prevent errors if profile already exists
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- TABLE: responses
-- ============================================
-- Stores individual question responses
CREATE TABLE IF NOT EXISTS public.responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  risk_attempt_id UUID NOT NULL REFERENCES public.risk_attempts(id) ON DELETE CASCADE,
  question_key TEXT NOT NULL, -- Format: Q1, Q2, Q3...
  option_selected TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(risk_attempt_id, question_key)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_responses_risk_attempt_id ON public.responses(risk_attempt_id);
CREATE INDEX IF NOT EXISTS idx_responses_question_key ON public.responses(question_key);

-- Enable RLS
ALTER TABLE public.responses ENABLE ROW LEVEL SECURITY;

-- RLS Policies for responses
-- Users can view responses for their own attempts
CREATE POLICY "Users can view own responses"
  ON public.responses
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.risk_attempts
      WHERE id = responses.risk_attempt_id
        AND user_id = auth.uid()
        AND visibility >= 1
    )
  );

-- Users can insert responses for their own attempts
CREATE POLICY "Users can create own responses"
  ON public.responses
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.risk_attempts
      WHERE id = responses.risk_attempt_id
        AND user_id = auth.uid()
    )
  );

-- Admins can view all responses
CREATE POLICY "Admins can view all responses"
  ON public.responses
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can create responses
CREATE POLICY "Admins can create all responses"
  ON public.responses
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
