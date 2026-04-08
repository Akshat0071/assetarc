'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

type DeferProps = {
  children: React.ReactNode;
  fallback: React.ReactNode;
  rootMargin?: string;
};

function Defer({ children, fallback, rootMargin = '300px' }: DeferProps) {
  const [mounted, setMounted] = useState(false);
  const placeholderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mounted) return;

    const element = placeholderRef.current;
    if (!element) {
      setMounted(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      // Old browsers: mount after first paint.
      const t = setTimeout(() => setMounted(true), 0);
      return () => clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [mounted, rootMargin]);

  if (mounted) return <>{children}</>;
  return <div ref={placeholderRef}>{fallback}</div>;
}

const PartnerLogosSection = dynamic(() => import('@/components/home/PartnerLogosSection'), {
  ssr: false,
  loading: () => <div className="h-40 bg-transparent" />,
});

const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'), {
  ssr: false,
  loading: () => <div className="min-h-[600px] bg-transparent" />,
});

const CalculatorsSection = dynamic(() => import('@/components/home/CalculatorsSection'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-transparent" />,
});

const WhyChooseSection = dynamic(() => import('@/components/home/WhyChooseSection'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-transparent" />,
});

const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-transparent" />,
});

const AboutSection = dynamic(() => import('@/components/home/AboutSection'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-transparent" />,
});

const DisclaimerSection = dynamic(() => import('@/components/home/DisclaimerSection'), {
  ssr: false,
  loading: () => <div className="h-24 bg-AssetArc-bg" />,
});

export default function BelowFoldSections() {
  return (
    <>
      <Defer fallback={<div className="h-40 bg-transparent" />}>
        <PartnerLogosSection />
      </Defer>
      <Defer fallback={<div className="min-h-[600px] bg-transparent" />}>
        <ServicesSection />
      </Defer>
      <Defer fallback={<div className="min-h-[400px] bg-transparent" />}>
        <CalculatorsSection />
      </Defer>
      <Defer fallback={<div className="min-h-[400px] bg-transparent" />}>
        <WhyChooseSection />
      </Defer>
      <Defer fallback={<div className="min-h-[400px] bg-transparent" />}>
        <TestimonialsSection />
      </Defer>
      <Defer fallback={<div className="min-h-[400px] bg-transparent" />}>
        <AboutSection />
      </Defer>
      <Defer fallback={<div className="h-24 bg-[#001F1F]" />}>
        <DisclaimerSection />
      </Defer>
    </>
  );
}
