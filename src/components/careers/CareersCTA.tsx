'use client';

import Link from 'next/link';

export default function CareersCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-[400px] bg-AssetArc-bg-light blur-100 opacity-25" />
      </div>

      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 sm:p-12 hover:border-AssetArc-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.15)] transition-all duration-300">
        <h2 className="font-product-sans text-3xl sm:text-4xl mb-4 uppercase">
          <span className="text-white">Your Next Chapter Starts </span>
          <span className="gradient-text">Here</span>
        </h2>
        <p className="text-white/60 font-work-sans text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Don&apos;t wait for the perfect moment — create it. Apply today and
          let&apos;s build the future of finance together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/careers/jobs"
            className="btn-primary rounded-full px-8 py-4 text-lg font-work-sans font-semibold inline-flex items-center gap-3 animate-pulse-glow"
          >
            <div className="w-2.5 h-2.5 bg-AssetArc-bg rounded-full" />
            Apply Now
          </Link>
          <Link
            href="/lets-talk"
            className="inline-flex items-center gap-3 px-6 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light hover:bg-AssetArc-green-light/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 font-work-sans font-medium group"
          >
            <div className="w-2 h-2 bg-AssetArc-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
            Contact HR
          </Link>
        </div>

        <p className="text-white/30 text-sm font-work-sans mt-6">
          📧 careers@assetarc.in
        </p>
      </div>
    </section>
  );
}
