'use client';

import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';
import { CITIES, SALARY_RANGES, JOB_TYPES, EXPERIENCE_LEVELS } from '@/lib/jobs';

interface FiltersState {
  search: string;
  city: string;
  salaryRange: string;
  jobType: string;
  experienceLevel: string;
}

interface JobFiltersProps {
  filters: FiltersState;
  onChange: (filters: FiltersState) => void;
  resultCount: number;
  totalCount: number;
}

function SelectDropdown({
  label,
  value,
  options,
  onChange,
  icon,
}: {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative">
      <label className="block text-white/50 text-xs font-work-sans mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
          {icon}
        </span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white font-work-sans text-sm appearance-none cursor-pointer hover:border-AssetArc-green-light/40 focus:border-AssetArc-green-light focus:ring-1 focus:ring-AssetArc-green-light/30 focus:outline-none transition-colors duration-200 [&>option]:bg-[#012928] [&>option]:text-white"
        >
          <option value="">All</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Custom arrow */}
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default function JobFilters({ filters, onChange, resultCount, totalCount }: JobFiltersProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const hasActiveFilters =
    filters.city || filters.salaryRange || filters.jobType || filters.experienceLevel;

  const clearAll = () => {
    onChange({ search: '', city: '', salaryRange: '', jobType: '', experienceLevel: '' });
  };

  const cityOptions = CITIES.map((c) => ({ label: c, value: c }));
  const salaryOptions = SALARY_RANGES.map((r) => ({ label: r.label, value: r.label }));
  const typeOptions = JOB_TYPES.map((t) => ({ label: t, value: t }));
  const expOptions = EXPERIENCE_LEVELS.map((e) => ({ label: e.label, value: e.label }));

  const FilterGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <SelectDropdown
        label="Location"
        value={filters.city}
        options={cityOptions}
        onChange={(v) => onChange({ ...filters, city: v })}
        icon={<span className="text-base">📍</span>}
      />
      <SelectDropdown
        label="Salary Range"
        value={filters.salaryRange}
        options={salaryOptions}
        onChange={(v) => onChange({ ...filters, salaryRange: v })}
        icon={<span className="text-base">💰</span>}
      />
      <SelectDropdown
        label="Job Type"
        value={filters.jobType}
        options={typeOptions}
        onChange={(v) => onChange({ ...filters, jobType: v })}
        icon={<span className="text-base">📋</span>}
      />
      <SelectDropdown
        label="Experience"
        value={filters.experienceLevel}
        options={expOptions}
        onChange={(v) => onChange({ ...filters, experienceLevel: v })}
        icon={<span className="text-base">⭐</span>}
      />
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
        <input
          type="text"
          placeholder="Search by job title, keyword, or skill..."
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder-white/40 font-work-sans text-base hover:border-AssetArc-green-light/30 focus:border-AssetArc-green-light focus:ring-1 focus:ring-AssetArc-green-light/30 focus:outline-none transition-colors duration-200"
        />
      </div>

      {/* Desktop filters */}
      <div className="hidden sm:block">
        <FilterGrid />
      </div>

      {/* Mobile filter toggle */}
      <div className="sm:hidden">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white font-work-sans text-sm hover:border-AssetArc-green-light/40 transition-colors duration-200"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {hasActiveFilters && (
            <span className="w-2 h-2 bg-AssetArc-green-light rounded-full" />
          )}
        </button>

        {showMobileFilters && (
          <div className="mt-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <FilterGrid />
          </div>
        )}
      </div>

      {/* Results count + clear */}
      <div className="flex items-center justify-between">
        <p className="text-white/50 text-sm font-work-sans">
          Showing <span className="text-white font-medium">{resultCount}</span> of{' '}
          <span className="text-white font-medium">{totalCount}</span> roles
        </p>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="inline-flex items-center gap-1.5 text-white/50 text-sm font-work-sans hover:text-AssetArc-green-light transition-colors duration-200"
          >
            <X className="w-3.5 h-3.5" />
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
}
