import type { Metadata } from "next";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Loans — LAMF, Business & Home Loans | AssetArc",
  description:
    "Explore Loan Against Mutual Funds, business loans, and home loans with expert guidance, minimal documentation, and competitive rates from AssetArc.",
  keywords:
    "loan against mutual funds, LAMF, business loan, home loan, personal loan, AssetArc loans",
  alternates: {
    canonical: "https://assetarc.in/services/loan",
  },
  openGraph: {
    title: "Loans — LAMF, Business & Home Loans | AssetArc",
    description:
      "Access funds without selling investments. Explore LAMF, business loans & home loans with expert assistance.",
    url: "https://assetarc.in/services/loan",
    locale: "en_IN",
    type: "website",
    images: ["/assetarclogo.png"],
  },
};

export default function Loan() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-72 bg-AssetArc-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-6">
            Smart Loans for Your Financial Goals
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Access funds without disrupting your investments — explore LAMF,
            business loans, and home loans with minimal documentation and
            transparent guidance from AssetArc.
          </p>
        </div>
      </section>

      {/* INTRO + OVERVIEW */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT SECTION */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-product-sans text-white mb-4">
              Loans — Complete Service Overview
            </h2>

            <p className="text-white/80 mb-4 leading-relaxed">
              Financial needs can arise at any stage—whether expanding a
              business, buying a home, or handling urgent personal expenses.
              Instead of breaking investments, the right loan solution provides
              immediate support with structured repayment options.
            </p>

            <p className="text-white/80 mb-4 leading-relaxed">
              AssetArc offers carefully selected loan services designed to be
              simple, transparent, and suitable for various financial
              requirements. We ensure access to funds with minimal documentation,
              faster approval, competitive rates, and expert guidance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Loan Against Mutual Funds (LAMF)",
                  desc: "Pledge your MF units and access liquidity without selling your investments.",
                  link: "/lets-talk",
                },
                {
                  title: "Business Loans",
                  desc: "Funding for working capital, expansion, inventory, and business growth.",
                  link: "/lets-talk",
                },
                {
                  title: "Home Loans",
                  desc: "Purchase, build, or renovate with long-term tenure and competitive rates.",
                  link: "/lets-talk",
                },
                {
                  title: "Expert Guidance & Support",
                  desc: "We compare lenders, assist with documentation, and provide transparent advice.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 bg-AssetArc-bg-light/30 border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-AssetArc-green-light mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">{item.desc}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="text-AssetArc-green-light hover:underline text-sm"
                    >
                      Explore {item.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="rounded-2xl p-16 bg-AssetArc-bg-light/40 border border-white/10">
            <Image
              src="/services/loan2.webp"
              alt="Loan Overview"
              width={480}
              height={320}
              loading="lazy"
              className="w-full h-36 sm:h-44 md:h-56 object-contain rounded-lg mb-4 bg-white/5"
            />

            <h4 className="text-white font-semibold mb-3">Quick Example</h4>
            <p className="text-white/80 mb-2">
              A ₹50 lakh mutual fund portfolio can secure a LAMF of ₹25–30 lakh
              at ~7–8% interest while your investments continue to grow.
            </p>

            <a
              href="/contact"
              className="text-AssetArc-green-light underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-AssetArc-green-light"
            >
              Get personalised loan advice
            </a>
          </aside>
        </div>
      </section>

      {/* CTA after intro overview */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light hover:bg-AssetArc-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full" />
            Apply For A Loan — Quick Start
          </a>
        </div>
      </section>

      {/* LAMF SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-AssetArc-bg-light/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 w-full max-w-md group hover:border-AssetArc-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.12)] transition-all">
              <Image
                src="/services/loan4.webp"
                alt="Loan Against Mutual Funds"
                width={520}
                height={360}
                loading="lazy"
                className="w-full object-contain max-h- sm:max80-h-[420px] group-hover:scale-105 transition-transform duration-300 bg-white/5"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-2xl sm:text-3xl text-AssetArc-green-light font-semibold mb-4">
              Loan Against Mutual Funds — What & Why
            </h2>

            <p className="text-white/80 mb-4">
              LAMF lets you borrow by pledging your mutual fund units as
              collateral. Your investments remain active and can continue to
              grow while you access liquidity—making this a smart borrowing
              strategy.
            </p>

            <h4 className="text-white font-semibold mb-2">Key Advantages</h4>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>No need to redeem investments</li>
              <li>
                Lower interest rates (7–9%) compared to unsecured personal loans
              </li>
              <li>Quick approval with minimal documentation</li>
              <li>Loan value: 50–60% of equity funds, higher for debt funds</li>
              <li>Continue earning market returns</li>
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-2">How LAMF Works</h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li>Pledge mutual fund units digitally.</li>
              <li>Lender assesses value and approves loan limit.</li>
              <li>Funds transferred quickly.</li>
              <li>Repay via EMIs or lump sum.</li>
              <li>Funds unpledged after repayment.</li>
            </ol>

            {/* CASE STUDIES */}
            <div className="rounded-2xl p-6 bg-AssetArc-bg-light/30 border border-white/10 mt-6">
              <h4 className="text-white font-semibold mb-3">Realistic Cases</h4>

              <div className="space-y-4 text-white/80">
                <div>
                  <p className="font-semibold">Professional — Urgent Need</p>
                  <p>
                    Needed ₹3–4 lakh. Instead of redeeming funds, pledged mutual
                    funds & repaid loan in months without affecting SIPs.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Shop Owner — Working Capital</p>
                  <p>
                    Needed ₹5 lakh for inventory. Used LAMF instead of costly
                    personal loans and repaid after sales cycle.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Investor — Opportunity Borrowing</p>
                  <p>
                    Used LAMF for short-term opportunity without disturbing
                    long-term investments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS & HOME LOANS */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="rounded-2xl p-6 bg-AssetArc-bg-light/30">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
              Business & Home Loans — What & Why
            </h2>

            {/* BUSINESS LOANS */}
            <h3 className="text-lg font-semibold text-AssetArc-green-light mb-2 mt-4">
              Business Loans
            </h3>
            <p className="text-white/80 mb-3">
              Provides entrepreneurs with funds for working capital, expansion,
              inventory or machinery purchase.
            </p>

            <h4 className="text-white font-semibold mb-2">How Business Loans Work</h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2 mb-4">
              <li>Submit essential business documents.</li>
              <li>Credit score & turnover analysis.</li>
              <li>Loan approved based on stability.</li>
              <li>Repay through flexible EMIs.</li>
            </ol>

            {/* HOME LOANS */}
            <h3 className="text-lg font-semibold text-AssetArc-green-light mb-2 mt-6">
              Home Loans
            </h3>
            <p className="text-white/80 mb-3">
              Ideal for buying, building or renovating property. Offers tax
              benefits and long repayment tenure.
            </p>

            <h4 className="text-white font-semibold mb-2">How Home Loans Work</h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li>Submit income & property documents.</li>
              <li>Bank verifies eligibility & property value.</li>
              <li>Loan & EMI structure finalised.</li>
              <li>Loan disbursed for purchase or construction.</li>
            </ol>

            {/* CASES */}
            <div className="mt-6 rounded-2xl p-6 bg-AssetArc-bg-light/30 border border-white/10">
              <h4 className="text-white font-semibold mb-3">Real-Life Examples</h4>

              <div className="space-y-4 text-white/80">
                <div>
                  <p className="font-semibold">Trader — Business Loan</p>
                  <p>
                    Needed ₹3 lakh before festive season. Took loan, stocked
                    inventory, increased sales, repaid comfortably.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Young Family — Home Loan</p>
                  <p>
                    Purchased ₹50 lakh home with long-term EMI plan—achieved
                    homeownership early without financial strain.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 w-full max-w-md group hover:border-AssetArc-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.12)] transition-all">
              <Image
                src="/services/loan3.webp"
                alt="Business and Home Loans"
                width={520}
                height={360}
                loading="lazy"
                className="w-full object-contain max-h- sm:max80-h-[420px] group-hover:scale-105 transition-transform duration-300 bg-white/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA after LAMF section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            className="inline-flex items-center gap-3 px-8 py-4 bg-AssetArc-green-accent/5 border-2 border-AssetArc-green-accent/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-bg hover:bg-AssetArc-green-accent transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full" />
            Check Loan Options & Start Application
          </a>
        </div>
      </section>

      {/* WHO SHOULD CONSIDER LOANS */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-AssetArc-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-6 text-center">
            Who Should Consider Loans?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Mutual fund investors needing liquidity",
              "Business owners needing working capital",
              "Entrepreneurs needing fast approvals",
              "Individuals wanting lower rates than personal loans",
              "Property buyers seeking long-term financing",
              "Professionals facing emergencies",
              "Businesses with seasonal cash flow fluctuations",
              "Borrowers wanting to retain market participation",
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-lg p-5 border border-white/10"
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

      {/* WHY ASSETARC */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-6 text-center">
            Why Choose AssetArc for Loan Assistance?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Guidance",
                desc: "We help you choose the right loan based on your financial goals and EMI capacity.",
              },
              {
                title: "Lender Comparison",
                desc: "We compare banks & NBFCs to get you the best rate and EMI.",
              },
              {
                title: "Documentation Support",
                desc: "We help you prepare and submit all required documents.",
              },
              {
                title: "Transparent Explanations",
                desc: "You fully understand charges, terms, and EMI structures.",
              },
              {
                title: "Personalised Recommendations",
                desc: "Suggestions based on your income, profile, and objectives.",
              },
              {
                title: "End-to-End Support",
                desc: "We assist from application to disbursement and repayment guidance.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-AssetArc-bg-light/30 border border-white/10 text-center"
              >
                <h3 className="text-white font-semibold mb-2 text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO GET STARTED */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-AssetArc-bg-light/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-8 text-center">
            How to Get Started with a Loan
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Discuss Your Requirement",
                desc: "Share your financial need and timeline with our specialists.",
              },
              {
                step: "2",
                title: "Select the Right Loan Type",
                desc: "Choose between LAMF, business loan, or home loan.",
              },
              {
                step: "3",
                title: "Submit Required Documents",
                desc: "We guide you on exactly what documents are needed.",
              },
              {
                step: "4",
                title: "Application Processing",
                desc: "We submit applications to trusted lenders and track progress.",
              },
              {
                step: "5",
                title: "Receive Funds & Guidance",
                desc: "Funds disbursed after approval, plus repayment planning support.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 flex items-center justify-center h-12 w-12 rounded-2xl bg-AssetArc-green-light text-black font-semibold">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-AssetArc-bg-light/20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-white mb-3">
            Ready to access funds without disrupting your investments?
          </h3>
          <p className="text-white/80 mb-6">
            Let us help you find the right loan solution with minimal documentation
            and competitive rates.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light hover:bg-AssetArc-green-light/10 transition-all duration-300 font-work-sans"
          >
            Get personalised loan advice
          </a>
        </div>
      </section>
    </Layout>
  );
}
