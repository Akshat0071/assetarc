// ─── Job Data Types & Constants ───

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  state: string;
  isRemote: boolean;
  isHybrid: boolean;
  type: 'Full-Time' | 'Part-Time' | 'Contract' | 'Internship' | 'Freelance';
  experienceLevel: string;
  experienceMin: number;
  experienceMax: number;
  salaryMin: number;
  salaryMax: number;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  postedDate: string;
  isFeatured: boolean;
}

// ─── Filter Options ───

export const CITIES = [
  // Tier 1
  'Mumbai', 'Delhi NCR', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune',
  // Tier 2
  'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Indore', 'Kochi', 'Nagpur',
  // Special
  'Remote', 'Hybrid',
] as const;

export const SALARY_RANGES = [
  { label: 'Up to ₹3 LPA', min: 0, max: 300000 },
  { label: '₹3L – ₹6L', min: 300000, max: 600000 },
  { label: '₹6L – ₹10L', min: 600000, max: 1000000 },
  { label: '₹10L – ₹15L', min: 1000000, max: 1500000 },
  { label: '₹15L – ₹25L', min: 1500000, max: 2500000 },
  { label: '₹25L+', min: 2500000, max: Infinity },
] as const;

export const JOB_TYPES = [
  'Full-Time', 'Part-Time', 'Contract', 'Internship', 'Freelance',
] as const;

export const EXPERIENCE_LEVELS = [
  { label: 'Fresher (0–1 yrs)', min: 0, max: 1 },
  { label: 'Junior (1–3 yrs)', min: 1, max: 3 },
  { label: 'Mid-Level (3–5 yrs)', min: 3, max: 5 },
  { label: 'Senior (5–8 yrs)', min: 5, max: 8 },
  { label: 'Lead / Manager (8+ yrs)', min: 8, max: 99 },
] as const;

export const DEPARTMENTS = [
  'Technology', 'Finance & Advisory', 'Marketing', 'Operations',
  'Sales', 'Customer Success', 'Human Resources', 'Product',
] as const;

// ─── Helpers ───

export function formatSalary(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(0)}L`;
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
  return `₹${amount}`;
}

export function getRelativeDate(dateStr: string): string {
  const posted = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - posted.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  const weeks = Math.floor(diffDays / 7);
  if (diffDays < 30) return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  const months = Math.floor(diffDays / 30);
  return `${months} ${months === 1 ? 'month' : 'months'} ago`;
}
