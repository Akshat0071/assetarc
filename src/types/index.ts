/**
 * TypeScript types for Supabase database tables
 * These should match your database schema
 */

export type Profile = {
  id: string
  email: string
  full_name: string | null
  phone_number: string | null
  role: 'user' | 'admin'
  created_at: string
  updated_at: string
}

export type RiskAttempt = {
  id: string
  user_id: string
  score: number
  risk_category: 'Conservative' | 'Moderately Conservative' | 'Moderate' | 'Moderately Aggressive' | 'Aggressive'
  investment_horizon: string | null
  attempt_number: number
  visibility: number // 2 = visible, 1 = deleted by user, 0 = deleted by admin
  created_at: string
}

export type Response = {
  id: string
  risk_attempt_id: string
  question_key: string // Q1, Q2, Q3...
  option_selected: string
  created_at: string
}

export type RiskAttemptWithProfile = RiskAttempt & {
  profiles: Profile
}
