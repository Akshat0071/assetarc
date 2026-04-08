import type { Metadata } from "next";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Fixed Deposits - Secure & Guaranteed Returns | AssetArc",
  description:
    "Invest in Fixed Deposits with guaranteed returns, flexible tenure, and zero market risk. Compare FD rates and grow your savings safely with AssetArc.",
  keywords:
    "fixed deposit, FD investment, guaranteed returns, safe investment, savings account, interest rates",
  alternates: {
    canonical: "https://assetarc.in/services/fixed-deposit",
  },
  openGraph: {
    title: "Fixed Deposits - Secure & Guaranteed Returns",
    description:
      "Guaranteed returns, flexible tenure, zero market risk. Compare FD rates and grow your wealth safely.",
    url: "https://assetarc.in/services/fixed-deposit",
    type: "website",
    locale: "en_IN",
    images: ["/assetarclogo.png"],
  },
};

export default function FixedDeposit() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-96 bg-AssetArc-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-6">
            Secure Your Savings with Fixed Deposits
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Guaranteed returns, flexible tenure, zero market risk. Build stable
            wealth with assured interest rates.
          </p>
        </div>
      </section>


      {/* What is Fixed Deposit */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 group hover:border-AssetArc-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
              <Image
                src="/services/fd2.webp"
                alt="What is Fixed Deposit"
                width={720}
                height={420}
                loading="lazy"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold text-AssetArc-green-light mb-6">
                What is a Fixed Deposit?
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                A Fixed Deposit (FD) is a secure investment option where you
                deposit a fixed amount of money with a bank or financial
                institution for a specific period.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                In return, you receive a guaranteed interest rate. FDs are
                considered one of the safest investment choices and are suitable
                for individuals who want stability and predictable returns.
              </p>
              <p className="text-white/80 leading-relaxed">
                Whether you&apos;re planning for short-term goals or simply want to
                park surplus funds safely, Fixed Deposits offer peace of mind
                with assured returns independent of market fluctuations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA after 'What is a Fixed Deposit' */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light hover:bg-AssetArc-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full" />
            Quick FD Setup — Open Now
          </a>
        </div>
      </section>

      {/* Why Invest in Fixed Deposits */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-AssetArc-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Invest in Fixed Deposits?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Guaranteed Returns",
                desc: "FDs offer assured returns that do not change with market conditions.",
              },
              {
                title: "Low Risk",
                desc: "FDs are not impacted by stock market fluctuations. Your capital remains protected.",
              },
              {
                title: "Flexible Tenure",
                desc: "Choose durations from a few days to several years.",
              },
              {
                title: "Easy to Understand",
                desc: "Simple structure: deposit → earn interest → receive maturity amount.",
              },
              {
                title: "Multiple Use Cases",
                desc: "Ideal for emergency funds, upcoming expenses, or idle money.",
              },
              {
                title: "Deposit Insurance",
                desc: "Bank FDs insured under DICGC up to ₹5 lakh.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-AssetArc-green-light mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Fixed Deposits */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Types of Fixed Deposits
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Regular Fixed Deposit",
                desc: "A standard FD where you invest a lump sum and receive interest at a fixed rate.",
                sub: "Suitable for individuals wanting guaranteed stable returns.",
              },
              {
                title: "Tax-Saving Fixed Deposit",
                desc: "Comes with a 5-year lock-in and offers tax benefits under Section 80C.",
                sub: "Ideal for individuals reducing tax liability.",
              },
              {
                title: "Senior Citizen Fixed Deposit",
                desc: "Higher interest rates (0.25% – 0.75% extra).",
                sub: "Best for retirees seeking steady income.",
              },
              {
                title: "Recurring Deposit (RD)",
                desc: "Deposit a fixed amount monthly with FD-like interest.",
                sub: "Ideal for salaried individuals saving regularly.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-AssetArc-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-AssetArc-green-light mb-3">
                  {item.title}
                </h3>
                <p className="text-white/80 mb-4">{item.desc}</p>
                <p className="text-white/70 text-sm">
                  <strong>Suitable for:</strong> {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA after 'Types of Fixed Deposits' */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-AssetArc-green-accent/5 border-2 border-AssetArc-green-accent/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-bg hover:bg-AssetArc-green-accent transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full" />
            Compare FD Rates & Start Now
          </a>
        </div>
      </section>

      {/* How Fixed Deposits Work */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-AssetArc-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            How Fixed Deposits Work
          </h2>

          <div className="space-y-4">
            {[
              "Select the investment amount and tenure.",
              "Deposit the lump sum in the FD account.",
              "Bank pays interest at a fixed rate.",
              "At maturity, receive principal + interest.",
              "Renew or withdraw the FD.",
            ].map((step, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-AssetArc-green-light/30"
              >
                <div className="shrink-0 w-8 h-8 bg-AssetArc-green-light rounded-full flex items-center justify-center text-black font-semibold">
                  {index + 1}
                </div>
                <p className="text-white/80 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Payout Options */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Interest Payout Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cumulative */}
            <div className="bg-AssetArc-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-AssetArc-green-light mb-4">
                Cumulative FD
              </h3>
              <p className="text-white/80 mb-4">
                Interest is added to the principal and paid at the end of
                tenure—benefits from compounding.
              </p>
              <div className="bg-AssetArc-green-light/10 border border-AssetArc-green-light/20 rounded-lg p-4">
                <p className="text-sm text-white/80">
                  <strong className="text-white">Best for:</strong> Long-term
                  compounding.
                </p>
              </div>
            </div>

            {/* Non-Cumulative */}
            <div className="bg-AssetArc-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-AssetArc-green-light mb-4">
                Non-Cumulative FD
              </h3>
              <p className="text-white/80 mb-4">
                Interest is paid periodically: Monthly, Quarterly, Half-yearly,
                or Annually.
              </p>
              <div className="bg-AssetArc-green-light/10 border border-AssetArc-green-light/20 rounded-lg p-4">
                <p className="text-sm text-white/80">
                  <strong className="text-white">Best for:</strong> Retirees
                  needing regular income.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Calculations */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-AssetArc-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Example Calculations
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Example 1: Basic FD",
                desc: "You invest ₹1,00,000 for 1 year at 7% interest. Maturity approx: ",
                value: "₹1,07,000",
              },
              {
                title: "Example 2: Long-Term FD with Compounding",
                desc: "₹5,00,000 for 3 years at 7.5% cumulative. Maturity approx: ",
                value: "₹6,24,000",
              },
              {
                title: "Example 3: Senior Citizen FD with Regular Income",
                desc: "₹2,00,000 at 8%. Annual interest: ",
                value: "₹16,000 (₹1,333 monthly)",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-AssetArc-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30"
              >
                <p className="text-AssetArc-green-light font-semibold mb-2">
                  {item.title}
                </p>
                <p className="text-white/80">
                  {item.desc}
                  <strong className="text-AssetArc-green-light">
                    {item.value}
                  </strong>
                </p>
              </div>
            ))}

            <div className="bg-AssetArc-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="text-white font-semibold mb-2 text-sm">⚠️ Note:</p>
              <p className="text-white/70 text-sm">
                These are illustrative examples. Actual returns depend on the
                bank&apos;s interest rates and compounding frequency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premature Withdrawal */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Premature Withdrawal Rules
          </h2>

          <div className="space-y-4">
            {[
              "Most banks allow premature withdrawal with a 0.5% – 1% penalty.",
              "If withdrawn early, interest may be lower than promised.",
              "Policies depend on the bank's specific terms.",
              "Tax-saving FDs (5-year lock-in) cannot be withdrawn early without tax impact.",
            ].map((point, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <span className="text-yellow-500 font-bold">!</span>
                <p className="text-white/80">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Invest */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-AssetArc-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Who Should Consider Fixed Deposits?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Individuals who prefer safe investments",
              "Senior citizens looking for stable income",
              "Parents saving for short-term goals",
              "Low risk tolerance investors",
              "Individuals wanting guaranteed returns",
              "People parking surplus money safely",
              "Saving for specific future expenses",
              "Diversifying beyond volatile assets",
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300"
              >
                <div className="text-AssetArc-green-light text-2xl font-bold">
                  →
                </div>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AssetArc */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Choose AssetArc for Fixed Deposits?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Compare Rates",
                desc: "Easy comparison of FD rates across banks.",
              },
              {
                title: "Expert Guidance",
                desc: "Personalized recommendations based on goals.",
              },
              {
                title: "Best Rates",
                desc: "Access to competitive FD returns up to 7.5%+.",
              },
              {
                title: "Flexible Tenure",
                desc: "Choose tenures from 7 days to 10+ years.",
              },
              {
                title: "Paperless Process",
                desc: "Simple online application with minimal documents.",
              },
              {
                title: "Renewal Reminders",
                desc: "Notifications for maturity & reinvestment.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-AssetArc-green-light mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to start */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-AssetArc-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            How to Start a Fixed Deposit
          </h2>

          <div className="space-y-4">
            {[
              "Decide the deposit amount.",
              "Select tenure (3m, 6m, 1y, 3y, 5y, etc.).",
              "Choose cumulative or periodic payout.",
              "Complete the FD application with AssetArc.",
              "Receive FD receipt with maturity details.",
            ].map((step, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-AssetArc-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 bg-AssetArc-green-light rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-white/80 pt-1">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/lets-talk"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light hover:bg-AssetArc-green-light/10 hover:scale-110 transition-all duration-300 font-work-sans font-medium group"
            >
              <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              Start Your Fixed Deposit Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
