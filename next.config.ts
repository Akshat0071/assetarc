import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false, // Enforce type checking
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all external images
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    // Optimize image sizes for mobile-first approach
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 256],
    // Use modern formats
    formats: ['image/avif', 'image/webp'],
    // Quality presets
    qualities: [60, 75],
  },
  // Enable experimental features and optimize for modern browsers
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-accordion",
      "@radix-ui/react-alert-dialog",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-popover",
      "@radix-ui/react-select",
      "@radix-ui/react-tabs",
      "@radix-ui/react-tooltip",
      "@radix-ui/react-navigation-menu",
      "@radix-ui/react-scroll-area",
      "lucide-react",
      "embla-carousel-react",
      "react-day-picker",
      "cmdk",
    ],
    optimizeCss: true, // Inlines critical CSS to fix render blocking
    inlineCss: true, // Inline critical CSS directly into HTML
  },
  // Optimize compression
  compress: true,
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Cache headers for static assets
  async headers() {
    return [
      {
        // Cache static assets (JS, CSS) for 1 year
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache images for 1 year
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache public assets (logos, services images) for 1 year
        source: '/:path*.(webp|png|jpg|jpeg|gif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache fonts for 1 year
        source: '/:path*.(woff|woff2|ttf|otf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
