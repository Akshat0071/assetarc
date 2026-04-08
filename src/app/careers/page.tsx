import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import CareersHero from '@/components/careers/CareersHero';
import WhyWorkWithUs from '@/components/careers/WhyWorkWithUs';
import LifeAtAssetArc from '@/components/careers/LifeAtAssetArc';
import FounderQuote from '@/components/careers/FounderQuote';
import HiringProcess from '@/components/careers/HiringProcess';
import FeaturedRoles from '@/components/careers/FeaturedRoles';
import CareersCTA from '@/components/careers/CareersCTA';

export const metadata: Metadata = {
  title: 'Careers at AssetArc — Build Your Future in Financial Services',
  description:
    'Join AssetArc and help make financial planning accessible for every Indian. Explore roles in financial advisory, technology, marketing, and more.',
  openGraph: {
    title: 'Careers at AssetArc — Build Your Future in Financial Services',
    description:
      'Join AssetArc and help make financial planning accessible for every Indian. Explore open roles today.',
    url: 'https://assetarc.in/careers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at AssetArc',
    description:
      'Join AssetArc and help make financial planning accessible for every Indian.',
  },
};

export default function CareersPage() {
  return (
    <Layout>
      <div className="flex flex-col w-full overflow-hidden">
        <CareersHero />
        <WhyWorkWithUs />
        <LifeAtAssetArc />
        <FounderQuote />
        <HiringProcess />
        <FeaturedRoles />
        <CareersCTA />
      </div>
    </Layout>
  );
}
