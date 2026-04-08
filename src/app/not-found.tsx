import Layout from '@/components/layout/Layout';
import Link from "next/link";
const AssetArcLogoBW = () => (
  <div className="flex items-center gap-4 sm:gap-8">
    <svg
      width="192"
      height="208"
      viewBox="0 0 32 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24 sm:w-32 sm:h-32"
    >
      <rect x="3.74097" y="16.0264" width="20.8942" height="3.71985" fill="#ffffff" />
      <path d="M1.15294 18.553C0.922293 18.3223 0.923909 17.9479 1.15654 17.7192L15.5948 3.52791C16.0954 3.03584 16.8991 3.0393 17.3955 3.53568L18.6805 4.82068C19.183 5.32315 19.1794 6.13889 18.6726 6.63701L6.52575 18.5761C5.032 20.0444 2.63398 20.034 1.15294 18.553Z" fill="#ffffff" />
      <path d="M20.498 0.96257C20.9132 0.86584 21.2857 1.23841 21.189 1.65361L19.7088 8.0073C19.6064 8.447 19.0607 8.6029 18.7414 8.2837L13.868 3.41016C13.5487 3.09092 13.7046 2.54519 14.1443 2.44276L20.498 0.96257Z" fill="#ffffff" />
      <path d="M30.5214 17.0648C30.6657 17.209 30.6647 17.4433 30.5192 17.5863L15.742 32.1108C15.3414 32.5044 14.6985 32.5017 14.3014 32.1046L12.6547 30.4578C12.2527 30.0559 12.2555 29.4033 12.6609 29.0048L24.8337 17.0402C26.415 15.4859 28.9536 15.4969 30.5214 17.0648Z" fill="#ffffff" />
      <path d="M11.0196 34.4984C10.6044 34.5951 10.2318 34.2225 10.3286 33.8073L11.8087 27.4536C11.9112 27.0139 12.4569 26.858 12.7761 27.1773L17.6496 32.0508C17.9688 32.37 17.8129 32.9157 17.3733 33.0182L11.0196 34.4984Z" fill="#ffffff" />
    </svg>
    <div className="flex items-baseline">
      <span className="text-white font-product-sans text-4xl sm:text-6xl font-normal">Stocks</span>
      <span className="text-white font-product-sans text-4xl sm:text-6xl font-normal">trail</span>
    </div>
  </div>
);

export default function NotFound() {
  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated 404 */}
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl font-bold text-white/20 mb-4 animate-pulse">
              404
            </h1>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-AssetArc-green-light to-AssetArc-green-accent blur-3xl opacity-30 animate-pulse"></div>
              <h2 className="relative text-4xl sm:text-5xl font-product-sans font-normal uppercase gradient-text mb-6">
                Page Not Found
              </h2>
            </div>
          </div>

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="animate-bounce">
              <AssetArcLogoBW />
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <p className="text-white/70 text-lg sm:text-xl font-work-sans leading-relaxed mb-4">
              Oops! The page you`&apos;`re looking for seems to have wandered off the beaten path.
            </p>
            <p className="text-white/50 text-sm sm:text-base">
              Don`&apos;`t worry, even the best investors sometimes take a wrong turn.
            </p>
          </div>

          {/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <Link
    href="/"
    className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light hover:bg-AssetArc-green-light/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 font-work-sans font-medium text-base sm:text-lg group"
  >
    <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full group-hover:scale-110 transition-transform duration-300" />
    Return Home
  </Link>

  <Link
    href="/services"
    className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-AssetArc-green-light/10 border-2 border-AssetArc-green-light/30 rounded-full text-AssetArc-green-light hover:bg-AssetArc-green-light hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.4)] transition-all duration-300 font-work-sans font-medium text-base sm:text-lg group"
  >
    <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full group-hover:scale-110 transition-transform duration-300" />
    Explore Services
  </Link>
</div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-AssetArc-green-light/30 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-AssetArc-green-accent/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 right-10 w-5 h-5 bg-AssetArc-green-light/20 rounded-full animate-ping"></div>
        </div>
      </section>
    </Layout>
  );
}
