'use client';

import Image from 'next/image';

const GALLERY_ITEMS = [
  {
    src: '/careers/culture-teamwork.png',
    alt: 'AssetArc team brainstorming in a modern meeting room',
    caption: 'Collaborative Thinking',
    size: 'large' as const,
  },
  {
    src: '/careers/culture-workspace.png',
    alt: 'Modern AssetArc office workspace with natural light',
    caption: 'Our Workspace',
    size: 'small' as const,
  },
  {
    src: '/careers/culture-celebration.png',
    alt: 'AssetArc team celebrating together during a corporate event',
    caption: 'Celebrating Together',
    size: 'small' as const,
  },
  {
    src: '/careers/culture-diversity.png',
    alt: 'Diverse AssetArc team members representing inclusion',
    caption: 'Diverse Perspectives',
    size: 'small' as const,
  },
  {
    src: '/careers/culture-learning.png',
    alt: 'Knowledge sharing session at AssetArc',
    caption: 'Knowledge Sharing',
    size: 'small' as const,
  },
  {
    src: '/careers/culture-outing.png',
    alt: 'AssetArc team during a fun outdoor outing',
    caption: 'Team Outings',
    size: 'large' as const,
  },
];

export default function LifeAtAssetArc() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-AssetArc-bg-light rounded-full blur-100 opacity-25 -left-40 top-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
            <span className="text-white">Life At </span>
            <span className="gradient-text">AssetArc</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-work-sans">
            Where passion meets purpose. See what makes our culture special.
          </p>
        </div>

        {/* Masonry gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.caption}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                item.size === 'large'
                  ? 'sm:col-span-2 lg:col-span-2 aspect-[21/9]'
                  : 'aspect-[4/3]'
              }`}
              style={{
                animationDelay: `${i * 80}ms`,
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={item.size === 'large' ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-work-sans font-semibold text-lg drop-shadow-lg">
                  {item.caption}
                </p>
              </div>
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-AssetArc-green-light/40 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
