import type { Metadata } from "next";
import "./globals.css";
import { Inter, Work_Sans, Montserrat } from "next/font/google";
import Script from "next/script";
import SnowfallWrapper from "@/components/SnowfallWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600", "700", "800"],
  preload: true,
  adjustFontFallback: true,
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
  adjustFontFallback: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://stockstrail.in"
  ),

  title: "Stockstrail - Financial Planning & Investment Guidance",
  description:
    "Achieve financial independence with expert financial planning, investment guidance, and advisory services from Stockstrail.",
  keywords:
    "financial planning, investment, mutual funds, insurance, loan, fixed deposit, stockstrail",
  authors: [{ name: "Stockstrail" }],

  // -----------------------------
  // FAVICON - Auto-detected from app/favicon.ico
  // Google will crawl this for search results
  // -----------------------------

  // -----------------------------
  // SOCIAL SHARE META
  // -----------------------------
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://stockstrail.in",
    title: "Stockstrail - Financial Planning & Investment Guidance",
    description:
      "Achieve financial independence with expert financial planning and investment guidance.",
    images: [
      {
        url: "/og-stockstrail.png", // Must exist in /public
        width: 1100,
        height: 630,
        alt: "Stockstrail OG Image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Stockstrail - Financial Planning & Investment Guidance",
    description:
      "Achieve financial independence with expert financial planning and investment guidance.",
    images: ["/og-stockstrail.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID || "up26ltx46a";
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${workSans.variable} ${montserrat.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#00ff97" />
        <meta name="msapplication-TileColor" content="#012928" />

        {/* Critical CSS inline styles for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body{background:#012928;color:#fff;margin:0;min-height:100vh}
            .min-h-screen{min-height:100vh}
            .bg-stockstrail-bg{background-color:#012928}
          `
        }} />

        {/* Favicon - explicit link for Google and all browsers */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Microsoft Clarity - load after page is fully idle to minimize TBT */}
        <Script id="clarity-init" strategy="lazyOnload">
          {`(function(){
            if (typeof window !== 'undefined') {
              if (typeof window.clarity !== 'function') {
                window.clarity = function(){ (window.clarity.q = window.clarity.q || []).push(arguments); };
              }
            }
          })();`}
        </Script>
        <Script id="clarity-src" src={`https://www.clarity.ms/tag/${clarityId}`} strategy="lazyOnload" />
        <link rel="preconnect" href="https://q.clarity.ms" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://luwzjngwignnmpdakxkw.supabase.co" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>

      <body className="antialiased">
        <main className="relative min-h-screen">
          <SnowfallWrapper />
          {children}
        </main>
      </body>
    </html>
  );
}
