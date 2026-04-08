'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HERO_SLIDES = [
  {
    src: '/careers/hero-slide-1.png',
    alt: 'Financial professionals reviewing charts and documents together',
  },
  {
    src: '/careers/hero-slide-2.png',
    alt: 'Two colleagues collaborating at a computer screen',
  },
  {
    src: '/careers/hero-slide-3.png',
    alt: 'Financial advisor consulting with a client at a modern office',
  },
  {
    src: '/careers/hero-slide-4.png',
    alt: 'Team huddled around a laptop in focused discussion',
  },
];

const SLIDE_INTERVAL = 5000; // 5 seconds per slide

function AnimatedCounter({ target, label, suffix = '' }: { target: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1800;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-product-sans font-bold gradient-text mb-1">
        {count}{suffix}
      </div>
      <div className="text-white/60 text-sm sm:text-base font-work-sans">{label}</div>
    </div>
  );
}

export default function CareersHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-32 overflow-visible">
      {/* ── Fixed Background Slideshow (Parallax Effect) ── */}
      <div className="fixed inset-0 z-0">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: activeSlide === i ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
              quality={85}
            />
          </div>
        ))}

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#012928]/70 via-[#012928]/65 to-[#012928]/95 z-[1]" />

        {/* Subtle green vignette */}
        <div className="absolute inset-0 z-[2]">
          <div className="absolute w-[800px] h-[800px] bg-AssetArc-bg-light rounded-full blur-[120px] opacity-20 left-1/2 -translate-x-1/2 top-20" />
          <div className="absolute w-[400px] h-[400px] bg-AssetArc-green-light/5 rounded-full blur-[100px] opacity-30 -right-20 bottom-20" />
        </div>
      </div>

      {/* ── Foreground Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Headline */}
        <h1 className="font-product-sans text-5xl sm:text-6xl lg:text-7xl font-normal uppercase mb-6 animate-fade-in"
            style={{ '--animation-delay': '100ms' } as React.CSSProperties}>
          <span className="text-white drop-shadow-lg">Build Your Future</span>
          <br />
          <span className="text-white drop-shadow-lg">With </span>
          <span className="gradient-text">AssetArc</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-work-sans leading-relaxed animate-fade-in drop-shadow-md"
           style={{ '--animation-delay': '200ms' } as React.CSSProperties}>
          Join a team that believes financial clarity can transform lives.
          Help us make financial planning accessible for every Indian.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
             style={{ '--animation-delay': '300ms' } as React.CSSProperties}>
          <Link
            href="/careers/jobs"
            className="btn-primary rounded-full px-8 py-4 text-lg font-work-sans font-semibold inline-flex items-center gap-2"
          >
            Explore Open Roles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="#why-work-with-us"
            className="btn-secondary rounded-full px-8 py-4 text-lg font-work-sans font-semibold inline-flex items-center gap-2 backdrop-blur-sm"
          >
            Why AssetArc?
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        {/* Animated counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in"
             style={{ '--animation-delay': '500ms' } as React.CSSProperties}>
          <AnimatedCounter target={200} label="Clients Served" suffix="+" />
          <AnimatedCounter target={15} label="Cities Reached" suffix="+" />
          <AnimatedCounter target={4} label="Years Growing" suffix="+" />
          <AnimatedCounter target={98} label="Client Satisfaction" suffix="%" />
        </div>
      </div>
    </section>
  );
}
