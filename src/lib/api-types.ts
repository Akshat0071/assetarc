/**
 * Shared types for AssetArc API
 * Used across client and server
 */

// Blog posts API
export interface BlogPostResponse {
  id: string
  title: string
  content: string
  published: string
  updated: string
  url: string
  author: string
  image?: string
  snippet?: string
}

export interface BlogPostsListResponse {
  items: BlogPostResponse[]
  total: number
}

// Reviews API
export interface ReviewResponse {
  id: number
  created_at: string
  name: string
  company?: string
  position: string
  comment: string
  rating: number
}

export interface ReviewsListResponse {
  items: ReviewResponse[]
  total: number
}

// Queries/Contact API
export interface QueryResponse {
  id: number
  created_at: string
  name: string
  phone: string
  email: string
  service: string
  message: string
}

export interface QuerySubmitPayload {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

// General API Response wrapper
export interface ApiResponse<T> {
  data?: T
  error?: string | null
  status: number
}

// Services
export interface ServiceCard {
  id: string
  title: string
  description: string
  icon: string
  href: string
}

// Calculator types
export interface SIPResult {
  investedAmount: number
  totalValue: number
  gain: number
  gainPercentage: number
}

export interface LumpsumResult {
  investedAmount: number
  totalValue: number
  gain: number
  gainPercentage: number
}

export interface FDResult {
  investedAmount: number
  totalValue: number
  interest: number
}

export interface RDResult {
  totalInvested: number
  totalValue: number
  gain: number
}

export interface EMIResult {
  monthlyEMI: number
  totalPayable: number
  totalInterest: number
}

export interface TaxResult {
  grossIncome: number
  taxableIncome: number
  taxAmount: number
  netIncome: number
  effectiveTaxRate: number
}
