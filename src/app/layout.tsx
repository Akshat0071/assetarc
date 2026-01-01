import type { Metadata } from "next";
import "./globals.css";
import { Inter, Work_Sans, Montserrat } from "next/font/google";
import Script from "next/script";
import SnowfallWrapper from "@/components/SnowfallWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "700"],
  preload: true,
  adjustFontFallback: true,
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "500", "600"],
  preload: true,
  adjustFontFallback: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "700"],
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
            body{background:#012928;color:#fff;margin:0;min-height:100vh;font-family:system-ui,-apple-system,sans-serif}
            .min-h-screen{min-height:100vh}
            .bg-stockstrail-bg{background-color:#012928}
            .text-\[\#809393\]{color:#809393}
            .text-white{color:#fff}
            .text-center{text-align:center}
            .mx-auto{margin-left:auto;margin-right:auto}
            .mt-4{margin-top:1rem}
            .mb-8{margin-bottom:2rem}
            .leading-relaxed{line-height:1.625}
            .gradient-text{background:linear-gradient(42deg,#00ff97 0%,#007d42 70.81%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
          `
        }} />

        {/* Favicon - explicit link for Google and all browsers */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Microsoft Clarity - load only after first user interaction to avoid long tasks during initial render */}
        <Script id="clarity-bootstrap" strategy="afterInteractive">
          {`(function(){
            try {
              var id = ${JSON.stringify(clarityId)};
              var loaded = false;
              var opts = { passive: true };

              function removeListeners() {
                window.removeEventListener('pointerdown', load, opts);
                window.removeEventListener('keydown', load, opts);
                window.removeEventListener('scroll', load, opts);
                window.removeEventListener('touchstart', load, opts);
              }

              function load() {
                if (loaded) return;
                loaded = true;
                removeListeners();

                if (typeof window.clarity !== 'function') {
                  window.clarity = function(){ (window.clarity.q = window.clarity.q || []).push(arguments); };
                }

                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://www.clarity.ms/tag/' + id;
                document.head.appendChild(s);
              }

              window.addEventListener('pointerdown', load, opts);
              window.addEventListener('keydown', load, opts);
              window.addEventListener('scroll', load, opts);
              window.addEventListener('touchstart', load, opts);

              // Safety fallback: load after 15s in case user never interacts.
              setTimeout(load, 15000);
            } catch (_) {}
          })();`}
        </Script>
        <link rel="preconnect" href="https://luwzjngwignnmpdakxkw.supabase.co" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>

      <body className="antialiased">
        <main className="relative min-h-screen">
          {children}
          <SnowfallWrapper />
        </main>
      </body>
    </html>
  );
}
