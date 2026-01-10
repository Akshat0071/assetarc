import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection'; // Static import for LCP optimization
import BelowFoldSections from '@/components/home/BelowFoldSections';
import { WelcomeModal } from '@/components/home/WelcomeModal';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col w-full overflow-hidden">
        <HeroSection />
        <BelowFoldSections />
        <WelcomeModal />
      </div>
    </Layout>
  );
}
