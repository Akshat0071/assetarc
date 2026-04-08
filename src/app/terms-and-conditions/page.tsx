"use client";

import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <Layout>
      <SEO
        title="Terms and Conditions & Cancellation Policy | AssetArc"
        description="Read AssetArc's Terms and Conditions and Cancellation Policy for all financial services including mutual funds, fixed deposits, insurance, loans, and demat accounts."
        keywords="terms and conditions, cancellation policy, assetarc, financial services"
        url="/terms-and-conditions"
      />

      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-4 font-product-sans">
              Terms and Conditions
            </h1>
            <p className="text-white/70 text-lg">
              Please read these terms carefully before using Stockstrail&apos;s services
            </p>
          </div>

          {/* Content */}
          <div className="bg-stockstrail-bg-light/30 rounded-2xl p-8 lg:p-12 backdrop-blur-sm border border-white/10 space-y-8">

            {/* INTRODUCTION */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Introduction
              </h2>
              <p className="text-white/80 leading-relaxed">
                Stockstrail (hereinafter referred to as &quot;Platform&quot; or &quot;we&quot; or &quot;us&quot; or &quot;our&quot;)
                is a financial advisory and distribution platform that provides access to
                various financial products and services including Mutual Funds, Fixed
                Deposits, Insurance, Loans, Demat Accounts, and other investment solutions.
              </p>
              <p className="text-white/80 leading-relaxed mt-4">
                By accessing and using this Platform, you agree to comply with and be bound
                by these Terms and Conditions (&quot;Terms&quot;). If you do not agree with any part
                of these Terms, you must not use this Platform.
              </p>
            </section>

            {/* DEFINITIONS */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Definitions
              </h2>
              <ul className="space-y-3 text-white/80">
                <li><strong className="text-white">&quot;User&quot;</strong> means any person who accesses or uses the Stockstrail Platform.</li>
                <li><strong className="text-white">&quot;Services&quot;</strong> means all financial services offered including mutual funds, fixed deposits, insurance, loans, and demat accounts.</li>
                <li><strong className="text-white">&quot;Mutual Funds&quot;</strong> means investment schemes managed by AMCs.</li>
                <li><strong className="text-white">&quot;SIP&quot;</strong> means Systematic Investment Plans.</li>
                <li><strong className="text-white">&quot;KYC&quot;</strong> means Know Your Client verification.</li>
                <li><strong className="text-white">&quot;Account&quot;</strong> means an investment account created by a user.</li>
              </ul>
            </section>

            {/* USE OF PLATFORM */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Use of Platform
              </h2>
              <div className="space-y-4 text-white/80">
                <p>Users agree to the following:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Users must be at least 18 years old.</li>
                  <li>Users are responsible for keeping login credentials secure.</li>
                  <li>Platform must not be used for unlawful purposes.</li>
                  <li>Users may not copy or distribute platform content.</li>
                  <li>Reverse engineering is prohibited.</li>
                  <li>Users may not impair or damage the platform.</li>
                </ul>
              </div>
            </section>

            {/* KYC */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Registration and KYC
              </h2>
              <div className="space-y-4 text-white/80">
                <p>To use AssetArc services, users must complete:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Phone number & password</li>
                  <li>PAN details</li>
                  <li>Bank account verification</li>
                  <li>Address proof & photograph</li>
                  <li>KYC verification</li>
                </ul>
              </div>
            </section>

            {/* INVESTMENT SERVICES */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Investment Services
              </h2>
              <div className="space-y-4 text-white/80">
                <p><strong className="text-white">Mutual Funds:</strong> AMFI-registered distribution. Investments subject to market risk.</p>
                <p><strong className="text-white">Fixed Deposits:</strong> Guaranteed returns but exit loads may apply.</p>
                <p><strong className="text-white">Insurance:</strong> Policy documents must be reviewed before purchase.</p>
                <p><strong className="text-white">Loans:</strong> Approval dependent on lender verification.</p>
                <p><strong className="text-white">Demat Accounts:</strong> For stock market participation.</p>
              </div>
            </section>

            {/* TRANSACTIONS */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Transaction Processing
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>Transactions processed on next business day.</li>
                <li>Allotment at applicable NAV.</li>
                <li>Redemption within 3–4 business days.</li>
                <li>Transactions cannot be cancelled once placed.</li>
              </ul>
            </section>

            {/* FEES */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Fees and Charges
              </h2>
              <p className="text-white/80">
                Core services are currently free; fee changes will be notified 30 days in advance.
              </p>
            </section>

            {/* DISCLAIMER */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Disclaimer and Limitation of Liability
              </h2>
              <div className="space-y-4 text-white/80">
                <p><strong className="text-white">No Investment Advice:</strong> Information is educational only.</p>
                <p><strong className="text-white">No Guarantees:</strong> No assurance on returns, liquidity, or NAV value.</p>
              </div>
            </section>

            {/* PAYMENT TERMS */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Payment and Payment Gateway
              </h2>
              <p className="text-white/80">
                Users are responsible for securing banking credentials and verifying transaction details.
              </p>
            </section>

            {/* PRIVACY */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Privacy and Data Sharing
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                <li>Sharing KYC with authorities as required by law.</li>
                <li>Using transaction data for service improvement.</li>
              </ul>
            </section>

            {/* MODIFICATION */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Modification of Terms
              </h2>
              <p className="text-white/80">
                Terms may be modified at any time without notification.
              </p>
            </section>

            {/* TERMINATION */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Termination of Services
              </h2>
              <p className="text-white/80">
                Users may close their accounts; obligations continue after termination.
              </p>
            </section>

            {/* CANCELLATION POLICY */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Cancellation Policy
              </h2>
              <p className="text-white/80">
                Once purchased, MF units cannot be cancelled. Insurance & loan cancellations depend on provider rules.
              </p>
            </section>

            {/* CONTACT */}
            <section className="bg-stockstrail-bg-light/50 p-6 rounded-lg border border-stockstrail-green-light/20">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-4 font-product-sans">
                Contact Us
              </h3>
              <div className="space-y-2 text-white/80">
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  <Link href="mailto:akshatbansa04@gmail.com" className="text-stockstrail-green-light hover:underline">
                    akshatbansa04@gmail.com
                  </Link>
                </p>
                <p>
                  <strong className="text-white">Phone:</strong>{" "}
                  <Link href="tel:+918219890171" className="text-stockstrail-green-light hover:underline">
                    +91 8219890171
                  </Link>
                </p>
              </div>
            </section>

            {/* FOOTNOTE */}
            <div className="text-center text-white/60 text-sm pt-8">
              <p>Last Updated: November 2025</p>
              <p>© 2025 AssetArc. All Rights Reserved.</p>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
