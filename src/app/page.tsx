import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection'; // Static import for LCP optimization

// Dynamic imports for code splitting - CRITICAL for performance
const PartnerLogosSection = dynamic(() => import('@/components/home/PartnerLogosSection'), {
  loading: () => <div className="h-40 bg-transparent" />
});

const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'), {
  loading: () => <div className="min-h-[600px] bg-transparent" />
});

const CalculatorsSection = dynamic(() => import('@/components/home/CalculatorsSection'), {
  loading: () => <div className="min-h-[400px] bg-transparent" />
});

const WhyChooseSection = dynamic(() => import('@/components/home/WhyChooseSection'), {
  loading: () => <div className="min-h-[400px] bg-transparent" />
});

const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'), {
  loading: () => <div className="min-h-[400px] bg-transparent" />
});

const AboutSection = dynamic(() => import('@/components/home/AboutSection'), {
  loading: () => <div className="min-h-[400px] bg-transparent" />
});

const DisclaimerSection = dynamic(() => import('@/components/home/DisclaimerSection'), {
  loading: () => <div className="h-24 bg-[#001F1F]" />
});

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col w-full overflow-hidden">
        <HeroSection />
        <div className="defer-render">
          <PartnerLogosSection />
        </div>
        <div className="defer-render">
          <ServicesSection />
        </div>
        <div className="defer-render">
          <CalculatorsSection />
        </div>
        <div className="defer-render">
          <WhyChooseSection />
        </div>
        <div className="defer-render">
          <TestimonialsSection />
        </div>
        <div className="defer-render">
          <AboutSection />
        </div>
        <DisclaimerSection />
      </div>
    </Layout>
  );
}
