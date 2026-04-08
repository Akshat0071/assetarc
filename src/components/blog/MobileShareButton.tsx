"use client";

import { Share2 } from 'lucide-react';

export default function MobileShareButton() {
  const scrollToShare = () => {
    const shareSection = document.getElementById('share-section');
    if (shareSection) {
      shareSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <button
      onClick={scrollToShare}
      className="lg:hidden fixed top-24 right-4 z-50 p-3 bg-AssetArc-green-light text-black rounded-full shadow-lg hover:bg-AssetArc-green-accent hover:scale-110 transition-all duration-300"
      aria-label="Share this post"
      title="Share this post"
    >
      <Share2 className="w-5 h-5" />
    </button>
  );
}
