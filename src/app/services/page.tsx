"use client";

import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import Link from "next/link";
import Image from "next/image";

type SectionBlockProps = {
  id?: string;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  reverse?: boolean;
  imageSrc: string;
  imageAlt: string;
  ctaLink?: string;
};

const SectionBlock: React.FC<SectionBlockProps> = ({
  id,
  title,
  description,
  benefits,
  cta,
  imageSrc,
  imageAlt,
  ctaLink,
}) => {
  return (
    <div id={id} className="grid grid-cols-1 gap-10 items-start group">
      {/* Image on top - fully responsive with maintained aspect ratio */}
      <div className="justify-self-center w-full">
        <div className="w-full max-w-[420px] mx-auto rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white/5 group-hover:border-stockstrail-green-light group-hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
          <div className="relative w-full aspect-4/3">
            <Image
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 390px) 90vw, (max-width: 640px) 95vw, (max-width: 768px) 420px, 420px"
              quality={90}
            />
          </div>
        </div>
      </div>

      {/* Text below */}
      <div>
        <h3 className="text-stockstrail-green-light text-base sm:text-lg lg:text-xl tracking-wide font-semibold mb-3 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/80 text-xs sm:text-sm lg:text-base leading-relaxed mb-5 max-w-4xl group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
        <div className="mb-6">
          <p className="text-white/80 text-xs sm:text-sm lg:text-base font-semibold mb-2 group-hover:text-white transition-colors duration-300">
            Benefits:
          </p>
          <ul className="space-y-2 text-white/80 text-xs sm:text-sm lg:text-base list-disc pl-5 group-hover:text-white/90 transition-colors duration-300">
            {benefits.map((b, i) => (
              <li
                key={i}
                className="group-hover:translate-x-1 transition-transform duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
        {ctaLink ? (
          <Link
            href={ctaLink}
            className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium text-sm sm:text-base group-hover:shadow-[0_0_20px_rgba(0,255,151,0.3)]"
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300" />
            {cta}
          </Link>
        ) : (
          <button className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium text-sm sm:text-base group-hover:shadow-[0_0_20px_rgba(0,255,151,0.3)]">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300" />
            {cta}
          </button>
        )}
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  // Scroll to section if URL contains a hash (on load and on hash changes)
  useEffect(() => {
    const headerOffset = 100; // account for fixed header height

    const scrollToHash = () => {
      if (typeof window === "undefined") return;
      const { hash } = window.location;
      if (!hash) return;
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const top =
          el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    scrollToHash();
    const timeoutId = window.setTimeout(scrollToHash, 50);

    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
      window.clearTimeout(timeoutId);
    };
  }, []);

  const partners = [
    { name: "AngelOne", logo: "/logos/angelone.webp" },
    { name: "Alice Blue", logo: "/logos/aliceblue.webp" },
    { name: "AssetPlus", logo: "/logos/assetplus.webp" },
    { name: "Axis", logo: "/logos/axis.webp" },
    { name: "Bandhan", logo: "/logos/bandhan.webp" },
    { name: "DSP", logo: "/logos/dsp.webp" },
    { name: "Edelweiss", logo: "/logos/edelweis.webp" },
    { name: "Franklin", logo: "/logos/franklin.webp" },
    { name: "Groww", logo: "/logos/groww.webp" },
    { name: "HDFC", logo: "/logos/hdfc.webp" },
    { name: "HDFC SKY", logo: "/logos/hdfcsky.webp" },
    { name: "ICICI", logo: "/logos/icici.webp" },
    { name: "ITI", logo: "/logos/iti.webp" },
    { name: "Kotak", logo: "/logos/kotak.webp" },
    { name: "LIC", logo: "/logos/lic.webp" },
    { name: "Mirae", logo: "/logos/mirae.webp" },
    { name: "Motilal", logo: "/logos/motilal.webp" },
    { name: "Nippon", logo: "/logos/nippon.webp" },
    { name: "PB Partners", logo: "/logos/pbpartners.webp" },
    { name: "PGIM", logo: "/logos/pgim.webp" },
    { name: "PPFAS", logo: "/logos/ppfas.webp" },
    { name: "Quant", logo: "/logos/quant.webp" },
    { name: "Quantum", logo: "/logos/quantum.webp" },
    { name: "SBI", logo: "/logos/sbi.webp" },
    { name: "Shriram", logo: "/logos/shriram.webp" },
    { name: "Tata", logo: "/logos/tata.webp" },
    { name: "Zerodha", logo: "/logos/zerodha.webp" },
  ];

  // duplicate for seamless marquee
  const scrollingPartners = partners.concat(partners);

  return (
    <Layout>
      <SEO
        title="Services - Mutual Funds, Insurance, Fixed Deposits & Loans | Stockstrail"
        description="Explore our comprehensive financial services including Mutual Funds, Fixed Deposits, Insurance, and Loans. Expert guidance tailored to your needs."
        keywords="mutual funds services, fixed deposit, insurance plans, loans, financial services, SIP, investment services"
        url="/services"
      />

      {/* Page title */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-3xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text">
            Services
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[500px] bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          <SectionBlock
            id="mutual-funds"
            title="Invest Smart, Invest Secure | MUTUAL FUNDS"
            description="Diversify your investment portfolio with our expertly managed mutual funds. Our professional fund managers help you build wealth through systematic investment plans (SIPs) or lump sum investments across various asset classes."
            benefits={[
              "Professional fund management with proven track records",
              "Diversification across multiple asset classes and sectors",
              "Systematic Investment Plans (SIP) starting from ₹500",
              "Tax-saving ELSS funds under Section 80C",
              "Regular portfolio reviews and rebalancing",
            ]}
            cta="APPLY MUTUAL FUNDS"
            ctaLink="/services/mutual-funds"
            imageSrc="/services/MUTUAL FUNDS.webp"
            imageAlt="Mutual Funds"
          />
          <SectionBlock
            id="risk-profile"
            title="Discover Your Investment Profile | RISK PROFILE"
            description="Take our comprehensive 11-question risk assessment to understand your risk tolerance and investment preferences. Get personalized allocation recommendations based on your financial goals and risk appetite."
            benefits={[
              "Comprehensive 11-question risk profiling questionnaire",
              "Instant risk category assessment (Conservative to Aggressive)",
              "Personalized asset allocation recommendations",
              "Investment horizon analysis",
              "Track your risk profile changes over time",
            ]}
            cta="Check Your Risk Profile"
            ctaLink="/check-risk-profile"
            imageSrc="/services/RISK PROFILE.webp"
            imageAlt="Risk Profile Assessment"
          />

          <SectionBlock
            id="fd"
            title="Secure Savings, Guaranteed Growth | FD"
            description="Secure your savings with guaranteed returns through our fixed deposit schemes. Enjoy competitive interest rates with flexible tenure options ranging from 7 days to 10 years, backed by trusted financial institutions."
            benefits={[
              "100% capital protection with guaranteed returns",
              "Competitive interest rates up to 7.5% per annum",
              "Flexible tenure from 7 days to 10 years",
              "Monthly, quarterly, or maturity interest payout options",
              "Tax-saving FD options under Section 80C",
            ]}
            cta="APPLY FIXED DEPOSIT"
            ctaLink="/services/fixed-deposit"
            imageSrc="/services/FIX DEPOSIT.webp"
            imageAlt="Fixed Deposit"
          />

          <SectionBlock
            id="insurance"
            title="Comprehensive Coverage, Confident Living | Insurance"
            description="Protect yourself and your loved ones with our comprehensive insurance solutions. From life insurance to health coverage, we offer tailored plans that provide financial security and peace of mind for life's uncertainties."
            benefits={[
              "Comprehensive life and health insurance coverage",
              "Affordable premium plans with flexible payment options",
              "Quick and hassle-free claim settlement process",
              "Wide range of coverage options for individuals and families",
              "Expert guidance in choosing the right insurance plan",
            ]}
            cta="APPLY INSURANCE"
            ctaLink="/services/insurance"
            imageSrc="/services/insurance.webp"
            imageAlt="Insurance"
          />

          <SectionBlock
            id="loan"
            title="Quick Approval, Flexible Terms | LOAN"
            description="Get access to personal loans, home loans, and business loans with competitive interest rates and flexible repayment options. Our streamlined process ensures quick approval and minimal documentation."
            benefits={[
              "Quick loan approval with minimal documentation",
              "Competitive interest rates and flexible terms",
              "Multiple loan options including personal, home, and business loans",
              "Dedicated relationship manager for personalized service",
            ]}
            cta="APPLY LOAN"
            ctaLink="/services/loan"
            imageSrc="/services/BANK LOANS.webp"
            imageAlt="Loan Services"
          />

          <SectionBlock
            id="others"
            title="Complete Financial Protection | OTHER SERVICES"
            description="Beyond core investments, Stockstrail offers comprehensive additional financial services including Motor Insurance, Travel Insurance, Demat accounts, ULIPs, and Guaranteed Plans. Each service is designed to provide complete protection and convenience at every stage of life."
            benefits={[
              "Motor Insurance for comprehensive vehicle protection",
              "Travel Insurance for domestic and international coverage",
              "Demat accounts for stock market participation",
              "ULIPs combining investment and life insurance",
              "Guaranteed Plans for risk-free, assured returns",
              "Professional guidance and transparent recommendations",
            ]}
            cta="EXPLORE OTHER SERVICES"
            ctaLink="/services/others"
            imageSrc="/services/OTHER SERVICES.webp"
            imageAlt="Other Services"
          />

          {/* Partners marquee */}
          <section className="mt-20 overflow-hidden">
            <h3 className="text-center font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-8">
              OUR PARTNERS
            </h3>
            <div className="w-full bg-[#0F2A2A] border-y border-[#1A3A3A] overflow-hidden">
              <div className="partners-track animate-scroll">
                {scrollingPartners.map((partner, i) => (
                  <div
                    key={`partner-${i}`}
                    className="flex items-center justify-center px-4 sm:px-6 py-4 sm:py-4 min-w-[120px] sm:min-w-[200px] group"
                  >
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-24 sm:h-32 w-auto object-contain group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                      width={256}
                      height={128}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;