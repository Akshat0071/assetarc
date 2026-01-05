"use client";

import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO = ({
  title = "Stockstrail - Your Journey to Financial Freedom",
  description = "Achieve financial independence with Stockstrail. Expert guidance for mutual funds, insurance, fixed deposits, and loans. Start your investment journey today.",
  keywords = "mutual funds, investment, financial planning, SIP, insurance, fixed deposit, loans, Stockstrail, financial advisor, wealth management",
  image = "/stockstrail.png",
  url,
  type = "website",
  structuredData,
}: SEOProps) => {
  const siteUrl = "https://stockstrail.in";

  // Resolve full URL
  const fullUrl =
    url && url.startsWith("http") ? url : `${siteUrl}${url || ""}`;

  // Resolve image
  const fullImageUrl = image.startsWith("http")
    ? image
    : `${siteUrl}${image}`;

  // Default Schema.org JSON-LD
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Stockstrail",
    description:
      "Financial services and investment guidance for Indians",
    url: siteUrl,
    logo: `${siteUrl}/stockstrail.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-97363-04663",
      contactType: "customer service",
      email: "connect@stockstrail.in",
      areaServed: "IN",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/people/Stockstrail-Stockstrail/100089234534696/",
      "https://www.linkedin.com/company/stockstrail/",
      "http://instagram.com/stockstrail/",
      "https://t.me/stockstrail",
    ],
  };

  const schemaData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Stockstrail" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Stockstrail" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Head>
  );
};

export default SEO;
