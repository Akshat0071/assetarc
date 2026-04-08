'use client';

import { MapPin, Clock, Briefcase, IndianRupee, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import type { Job } from '@/lib/jobs';
import { formatSalary, getRelativeDate } from '@/lib/jobs';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={job.id}
      className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl hover:border-AssetArc-green-light/50 hover:bg-white/[0.07] transition-all duration-300 group"
    >
      {/* Main card */}
      <div className="p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex-1">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-work-sans font-medium px-3 py-1 rounded-full bg-AssetArc-green-light/10 text-AssetArc-green-light">
                {job.department}
              </span>
              <span className="text-xs font-work-sans font-medium px-3 py-1 rounded-full bg-white/10 text-white/60">
                {job.type}
              </span>
              <span className="text-xs font-work-sans text-white/40 ml-auto sm:ml-0">
                Posted {getRelativeDate(job.postedDate)}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-product-sans text-xl text-white mb-3 group-hover:text-AssetArc-green-light transition-colors duration-200">
              {job.title}
            </h3>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/60 text-sm font-work-sans mb-4">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {job.location}
                {job.isHybrid ? ' (Hybrid)' : job.isRemote ? ' (Remote)' : ''}
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

            {/* Description */}
            <p className="text-white/50 text-sm font-work-sans leading-relaxed line-clamp-2">
              {job.description}
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {job.skills.slice(0, 5).map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-work-sans px-3 py-1 rounded-full bg-white/10 text-white/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expand/collapse toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-center gap-2 py-3 border-t border-white/10 text-white/50 text-sm font-work-sans hover:text-AssetArc-green-light hover:bg-white/5 transition-all duration-200 rounded-b-2xl"
      >
        {expanded ? (
          <>
            Show Less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            View Full Details <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Expanded details */}
      {expanded && (
        <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-white/5 space-y-6 animate-fade-in">
          {/* Responsibilities */}
          <div>
            <h4 className="font-product-sans text-white text-base mb-3">Responsibilities</h4>
            <ul className="space-y-2">
              {job.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-white/70 text-sm font-work-sans">
                  <div className="w-1.5 h-1.5 bg-AssetArc-green-light rounded-full mt-1.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h4 className="font-product-sans text-white text-base mb-3">Requirements</h4>
            <ul className="space-y-2">
              {job.requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-white/70 text-sm font-work-sans">
                  <div className="w-1.5 h-1.5 bg-AssetArc-green-light rounded-full mt-1.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Apply button */}
          <div className="pt-2">
            <button
              onClick={() => {
                const formEl = document.getElementById('application-form');
                if (formEl) {
                  formEl.scrollIntoView({ behavior: 'smooth' });
                  // Set the job title in the form
                  const titleInput = document.getElementById('applying-for') as HTMLInputElement;
                  if (titleInput) {
                    titleInput.value = job.title;
                    titleInput.dispatchEvent(new Event('change', { bubbles: true }));
                  }
                }
              }}
              className="btn-primary rounded-full px-8 py-3 text-sm font-work-sans font-semibold inline-flex items-center gap-2"
            >
              Apply for this Role
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
