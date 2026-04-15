'use client';

import Image from 'next/image';

export default function FounderQuote() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden">
      {/* Background blur orb */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-AssetArc-bg-light rounded-full blur-100 opacity-20 right-0 top-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
            <span className="text-white">From Our </span>
            <span className="gradient-text">Founder</span>
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 sm:p-12 hover:border-AssetArc-green-light/50 transition-colors duration-300">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Founder photo */}
            <div className="shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-AssetArc-green-light/60 p-1 relative">
                <Image
                  src="/careers/founder.png"
                  alt="John Doe — Founder, AssetArc"
                  fill
                  className="rounded-full object-cover"
                  sizes="176px"
                />
              </div>
            </div>

            {/* Quote */}
            <div className="flex-1 text-center md:text-left">
              {/* Decorative quote mark */}
              <span className="text-AssetArc-green-light/20 text-6xl sm:text-7xl font-serif leading-none select-none block mb-[-1rem]">
                &ldquo;
              </span>
              <p className="text-white/85 text-xl sm:text-2xl font-product-sans italic leading-relaxed mb-6">
                We don&apos;t just hire people — we invite them to be part of a mission that makes
                finance simple for everyone in India. If you believe that clarity can change
                someone&apos;s financial future, you already belong at AssetArc.
              </p>
              <div>
                <p className="gradient-text font-product-sans text-xl font-semibold">
                  John Doe
                </p>
                <p className="text-white/50 font-work-sans text-sm mt-1">
                  Founder &amp; CEO, AssetArc
                </p>
                <p className="text-white/40 font-work-sans text-xs mt-0.5">
                  AMFI-Registered Mutual Fund Distributor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
