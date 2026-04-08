"use client";

import { MessageCircle, Send, Facebook, Linkedin, Instagram, Share2 } from 'lucide-react';

export default function ShareButtons({ title, url }: { title: string; url: string }) {
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    instagram: `https://www.instagram.com/`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-AssetArc-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Share2 className="w-5 h-5 text-AssetArc-green-light" />
        <h3 className="text-white text-lg font-product-sans">Share this post</h3>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-AssetArc-green-light hover:text-black transition-all duration-300" title="Share on WhatsApp">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">WhatsApp</span>
        </a>
        <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-AssetArc-green-light hover:text-black transition-all duration-300" title="Share on Telegram">
          <Send className="w-5 h-5" />
          <span className="text-sm">Telegram</span>
        </a>
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-AssetArc-green-light hover:text-black transition-all duration-300" title="Share on Facebook">
          <Facebook className="w-5 h-5" />
          <span className="text-sm">Facebook</span>
        </a>
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-AssetArc-green-light hover:text-black transition-all duration-300" title="Share on LinkedIn">
          <Linkedin className="w-5 h-5" />
          <span className="text-sm">LinkedIn</span>
        </a>
        <a href={shareLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-AssetArc-green-light hover:text-black transition-all duration-300" title="Open Instagram">
          <Instagram className="w-5 h-5" />
          <span className="text-sm">Instagram</span>
        </a>
        <button onClick={copyToClipboard} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-AssetArc-green-light hover:text-black transition-all duration-300" title="Copy link">
          <Share2 className="w-5 h-5" />
          <span className="text-sm">Copy Link</span>
        </button>
      </div>
    </div>
  );
}
