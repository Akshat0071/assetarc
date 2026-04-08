'use client';

import Link from 'next/link';
import { MapPin, Clock, Briefcase, IndianRupee } from 'lucide-react';
import { jobsData } from '@/lib/jobsData';
import { formatSalary, getRelativeDate } from '@/lib/jobs';

export default function FeaturedRoles() {
  const featured = jobsData.filter((j) => j.isFeatured).slice(0, 4);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-AssetArc-bg-light rounded-full blur-100 opacity-20 left-1/2 -translate-x-1/2 top-0" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
            <span className="text-white">Featured </span>
            <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-work-sans">
            Exciting roles available right now. Find the one that sparks your ambition.
          </p>
        </div>

        {/* Job cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {featured.map((job) => (
            <Link
              key={job.id}
              href={`/careers/jobs#${job.id}`}
              className="block bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-AssetArc-green-light/50 hover:border-l-4 hover:border-l-AssetArc-green-light hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-work-sans font-medium px-3 py-1 rounded-full bg-AssetArc-green-light/10 text-AssetArc-green-light">
                      {job.department}
                    </span>
                    <span className="text-xs font-work-sans text-white/40">
                      {getRelativeDate(job.postedDate)}
                    </span>
                  </div>
                  <h3 className="font-product-sans text-xl text-white mb-3 group-hover:text-AssetArc-green-light transition-colors duration-200">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/60 text-sm font-work-sans">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}{job.isHybrid ? ' (Hybrid)' : job.isRemote ? ' (Remote)' : ''}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {job.experienceMin}–{job.experienceMax} yrs
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <IndianRupee className="w-3.5 h-3.5" />
                      {formatSalary(job.salaryMin)} – {formatSalary(job.salaryMax)}/yr
                    </span>
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-2 text-AssetArc-green-light font-work-sans font-medium text-sm group-hover:gap-3 transition-all duration-200">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <Link
            href="/careers/jobs"
            className="btn-primary rounded-full px-8 py-4 text-base font-work-sans font-semibold inline-flex items-center gap-2"
          >
            View All Open Roles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
