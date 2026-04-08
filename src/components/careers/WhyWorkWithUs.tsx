'use client';

import { Target, TrendingUp, Users, Lightbulb, Clock, Award } from 'lucide-react';

const VALUE_PROPS = [
  {
    icon: Target,
    title: 'Purpose-Driven Work',
    description:
      'Every interaction you have helps someone gain financial clarity and confidence. Your work at AssetArc directly improves lives across India.',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Learning',
    description:
      'Access to SEBI/NISM certifications, hands-on mentorship, and continuous skill development in finance, technology, and leadership.',
  },
  {
    icon: Users,
    title: 'Inclusive Culture',
    description:
      'We welcome diverse perspectives and backgrounds. Our team thrives because everyone brings unique experiences and ideas to the table.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Autonomy',
    description:
      'Take ownership of your projects end to end. We encourage creative problem-solving and trust you to deliver impactful results.',
  },
  {
    icon: Clock,
    title: 'Flexible Work',
    description:
      'Hybrid work options, flexible hours, and a results-oriented culture that respects your personal time and work-life balance.',
  },
  {
    icon: Award,
    title: 'Recognition & Rewards',
    description:
      'Performance-based bonuses, team celebrations, spot awards, and a culture that genuinely values every individual contribution.',
  },
];

export default function WhyWorkWithUs() {
  return (
    <section id="why-work-with-us" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 -mt-32 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
            <span className="text-white">Why Choose </span>
            <span className="gradient-text">AssetArc</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto font-work-sans leading-relaxed">
            We're not just building a company — we're building a movement to make finance
            simple and accessible for every Indian.
          </p>
        </div>

        {/* Value prop grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPS.map((prop, i) => (
            <div
              key={prop.title}
              className="bg-[#012928]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-AssetArc-green-light/50 hover:bg-[#012928]/90 transition-all duration-300 group animate-fade-in shadow-xl"
              style={{ '--animation-delay': `${i * 100}ms` } as React.CSSProperties}
            >
              <div className="w-12 h-12 rounded-xl bg-AssetArc-green-light/10 flex items-center justify-center mb-5 group-hover:bg-AssetArc-green-light/20 transition-colors duration-300">
                <prop.icon className="w-6 h-6 text-AssetArc-green-light" />
              </div>
              <h3 className="font-product-sans text-xl text-white mb-3">{prop.title}</h3>
              <p className="text-white/70 font-work-sans leading-relaxed text-[15px]">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
