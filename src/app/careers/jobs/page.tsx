'use client';

import { useState, useMemo } from 'react';
import Layout from '@/components/layout/Layout';
import JobFilters from '@/components/careers/JobFilters';
import JobCard from '@/components/careers/JobCard';
import ApplicationForm from '@/components/careers/ApplicationForm';
import { jobsData } from '@/lib/jobsData';
import { SALARY_RANGES, EXPERIENCE_LEVELS } from '@/lib/jobs';
import { Search } from 'lucide-react';

interface FiltersState {
  search: string;
  city: string;
  salaryRange: string;
  jobType: string;
  experienceLevel: string;
}

export default function JobsPortalPage() {
  const [filters, setFilters] = useState<FiltersState>({
    search: '',
    city: '',
    salaryRange: '',
    jobType: '',
    experienceLevel: '',
  });

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      // Search
      if (filters.search) {
        const q = filters.search.toLowerCase();
        const match =
          job.title.toLowerCase().includes(q) ||
          job.department.toLowerCase().includes(q) ||
          job.skills.some((s) => s.toLowerCase().includes(q)) ||
          job.description.toLowerCase().includes(q);
        if (!match) return false;
      }

      // City
      if (filters.city) {
        if (filters.city === 'Remote') {
          if (!job.isRemote) return false;
        } else if (filters.city === 'Hybrid') {
          if (!job.isHybrid) return false;
        } else if (job.location !== filters.city) {
          return false;
        }
      }

      // Salary range
      if (filters.salaryRange) {
        const range = SALARY_RANGES.find((r) => r.label === filters.salaryRange);
        if (range) {
          if (job.salaryMax < range.min || job.salaryMin > range.max) return false;
        }
      }

      // Job type
      if (filters.jobType && job.type !== filters.jobType) return false;

      // Experience level
      if (filters.experienceLevel) {
        const level = EXPERIENCE_LEVELS.find((e) => e.label === filters.experienceLevel);
        if (level) {
          if (job.experienceMax < level.min || job.experienceMin > level.max) return false;
        }
      }

      return true;
    });
  }, [filters]);

  return (
    <Layout>
      <div className="flex flex-col w-full overflow-hidden">
        {/* Hero */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-8 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute w-[700px] h-[700px] bg-AssetArc-bg-light rounded-full blur-100 opacity-30 left-1/2 -translate-x-1/2 top-10" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase mb-4">
              <span className="text-white">Explore </span>
              <span className="gradient-text">Opportunities</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-work-sans">
              Find the role that matches your ambition. Filter by location, salary, type, and experience.
            </p>
          </div>
        </section>

        {/* Filters + Job Listings */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-5xl mx-auto">
            <JobFilters
              filters={filters}
              onChange={setFilters}
              resultCount={filteredJobs.length}
              totalCount={jobsData.length}
            />

            {/* Job cards */}
            <div className="mt-8 space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
              ) : (
                /* Empty state */
                <div className="text-center py-16">
                  <Search className="w-12 h-12 text-white/20 mx-auto mb-4" />
                  <h3 className="font-product-sans text-2xl text-white mb-2">
                    No positions found
                  </h3>
                  <p className="text-white/50 font-work-sans max-w-md mx-auto mb-6">
                    We couldn&apos;t find any roles matching your criteria.
                    Try adjusting your filters or check back soon.
                  </p>
                  <button
                    onClick={() =>
                      setFilters({ search: '', city: '', salaryRange: '', jobType: '', experienceLevel: '' })
                    }
                    className="btn-secondary rounded-full px-6 py-3 text-sm font-work-sans font-medium"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <ApplicationForm />
      </div>
    </Layout>
  );
}
