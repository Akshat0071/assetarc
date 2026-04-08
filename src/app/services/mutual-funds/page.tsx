import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Mutual Funds Investment Guide | Grow Your Wealth with AssetArc',
  description:
    "Learn about mutual funds, how they work, and why they're ideal for wealth creation. Get professional fund management, diversification, and low entry barriers with AssetArc.",
  keywords:
    'mutual funds, SIP, wealth creation, investment, equity funds, debt funds, hybrid funds',
  openGraph: {
    title: 'Mutual Funds Investment Guide | Grow Your Wealth with AssetArc',
    description:
      "Learn about mutual funds, how they work, and why they're ideal for wealth creation.",
    url: 'https://assetarc.in/services/mutual-funds',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutual Funds Investment Guide | Grow Your Wealth with AssetArc',
    description:
      "Learn about mutual funds, how they work, and why they're ideal for wealth creation.",
  },
};

export default function MutualFunds() {
  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-96 bg-AssetArc-bg-light blur-185 opacity-40" />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-6">
            Invest Smarter with Mutual Funds
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Grow your wealth steadily with expert-managed portfolios. Start investing with as little as ₹100 through SIPs
            and benefit from professional fund management.
          </p>
        </div>
      </section>



      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 group hover:border-AssetArc-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
              <Image
                src="/services/mf2.webp"
                alt="What is Mutual Fund"
                loading="lazy"
                width={720}
                height={420}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold text-AssetArc-green-light mb-6">
                What is a Mutual Fund?
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                A mutual fund is an investment vehicle that collects money from multiple investors and invests it in a
                diversified portfolio such as stocks, bonds, government securities, and other financial instruments.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                These funds are managed by professional fund managers who make investment decisions on behalf of
                investors. Mutual funds allow individuals to begin investing with small amounts while benefiting from
                diversification and expert management.
              </p>
              <p className="text-white/80 leading-relaxed">
                Instead of tracking markets daily or picking individual stocks, you can simply invest and let
                professionals handle the portfolio management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA after 'What is a Mutual Fund' */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light hover:bg-AssetArc-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full" />
            Secure Your First SIP — Start Now
          </a>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-AssetArc-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Invest in Mutual Funds?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-AssetArc-green-light mb-3 group-hover:text-white transition-colors">
                Low Entry Barrier
              </h3>
              <p className="text-white/80">
                Investors can start with small contributions through SIPs. Many funds allow investments starting from as
                low as ₹100.
              </p>
            </div>

            <div className="bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-AssetArc-green-light mb-3 group-hover:text-white transition-colors">
                Professional Management
              </h3>
              <p className="text-white/80">
                Qualified fund managers analyse markets, financial data, and company performance to make informed
                investment decisions.
              </p>
            </div>

            <div className="bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-AssetArc-green-light mb-3 group-hover:text-white transition-colors">
                Diversification
              </h3>
              <p className="text-white/80">
                A single mutual fund invests across various companies and sectors, helping reduce risk compared to
                individual stocks.
              </p>
            </div>

            <div className="bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-AssetArc-green-light mb-3 group-hover:text-white transition-colors">
                Higher Returns Potential
              </h3>
              <p className="text-white/80">
                Over the long term, mutual funds—especially equity-oriented funds—have historically delivered higher
                returns compared to savings accounts.
              </p>
            </div>

            <div className="bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-AssetArc-green-light mb-3 group-hover:text-white transition-colors">
                Liquidity
              </h3>
              <p className="text-white/80">
                Investors can redeem their mutual fund units easily, except in schemes with lock-in periods such as
                ELSS.
              </p>
            </div>

            <div className="bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-AssetArc-green-light mb-3 group-hover:text-white transition-colors">
                Passive Investing
              </h3>
              <p className="text-white/80">
                No need to monitor markets daily or make frequent trading decisions. Let professionals handle it for
                you.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Types of Mutual Funds
          </h2>

          <div className="space-y-8">
            <div className="bg-AssetArc-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-AssetArc-green-light mb-3">Equity Funds</h3>
              <p className="text-white/80 mb-4">
                Equity funds invest primarily in the shares of companies. These funds aim for long-term capital growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-semibold mb-2">Suitable for:</p>
                  <p className="text-white/70">
                    Long-term investors, individuals looking to grow wealth, and those comfortable with market
                    fluctuations.
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Expected return:</p>
                  <p className="text-white/70">Typically higher, but dependent on market performance.</p>
                </div>
              </div>
            </div>

            <div className="bg-AssetArc-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-AssetArc-green-light mb-3">Debt Funds</h3>
              <p className="text-white/80 mb-4">
                Debt funds invest in fixed-income instruments such as government bonds, corporate bonds, certificates
                of deposit, and other debt securities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-semibold mb-2">Suitable for:</p>
                  <p className="text-white/70">Conservative investors, short-term goals, and individuals seeking stability.</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Expected return:</p>
                  <p className="text-white/70">Moderate and relatively stable.</p>
                </div>
              </div>
            </div>

            <div className="bg-AssetArc-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-AssetArc-green-light mb-3">Hybrid Funds</h3>
              <p className="text-white/80 mb-4">
                Hybrid funds invest in a mix of equity and debt instruments. The combination provides both growth
                potential and stability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-semibold mb-2">Suitable for:</p>
                  <p className="text-white/70">New investors and those who want balanced risk and returns.</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Expected return:</p>
                  <p className="text-white/70">Balanced growth with moderate stability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA after 'Types of Mutual Funds' */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-AssetArc-green-accent/5 border-2 border-AssetArc-green-accent/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-bg hover:bg-AssetArc-green-accent transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full" />
            Compare SIP Plans & Get Personalized Advice
          </a>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-AssetArc-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            How Mutual Funds Work
          </h2>

          <div className="space-y-4">
            {[
              'An investor selects a mutual fund and invests either through SIP or lump sum.',
              'The fund manager pools the money of all investors.',
              'The pooled amount is invested in a diversified range of financial instruments.',
              'The value of the investments grows or falls based on market performance.',
              'Investors earn returns through capital appreciation, dividends, or interest.',
              'Investors can redeem their units at the prevailing NAV (Net Asset Value) whenever they need to exit the investment.',
            ].map((step, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300"
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

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            SIP vs Lump Sum
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-AssetArc-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-AssetArc-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-AssetArc-green-light mb-4">
                SIP (Systematic Investment Plan)
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex gap-3">
                  <span className="text-AssetArc-green-light">✓</span>
                  <span>Investing a fixed amount every month</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-AssetArc-green-light">✓</span>
                  <span>Ideal for salaried individuals or beginners</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-AssetArc-green-light">✓</span>
                  <span>Provides the benefit of rupee-cost averaging</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-AssetArc-green-light">✓</span>
                  <span>Builds discipline and habit of saving</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-AssetArc-green-light/10 border border-AssetArc-green-light/20 rounded-lg">
                <p className="text-sm text-white/80">
                  <strong className="text-white">Example:</strong> A monthly SIP of ₹2,000 for 15 years may potentially
                  grow into ₹10–12 lakh depending on the fund&apos;s performance.
                </p>
              </div>
            </div>

            <div className="bg-AssetArc-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-AssetArc-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-AssetArc-green-light mb-4">Lump Sum Investment</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex gap-3">
                  <span className="text-AssetArc-green-light">✓</span>
                  <span>Investing a large amount at once</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-AssetArc-green-light">✓</span>
                  <span>Suitable for those with surplus funds available</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-AssetArc-green-light">✓</span>
                  <span>Can be a good option if market valuations are attractive</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-AssetArc-green-light">✓</span>
                  <span>Allows immediate capital deployment</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-AssetArc-green-light/10 border border-AssetArc-green-light/20 rounded-lg">
                <p className="text-sm text-white/80">
                  <strong className="text-white">Flexibility:</strong> You can combine both SIP and lump sum to optimize
                  your investment strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-AssetArc-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Illustrative Examples
          </h2>

          <div className="space-y-6">
            <div className="bg-AssetArc-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300">
              <p className="text-AssetArc-green-light font-semibold mb-2">Example 1:</p>
              <p className="text-white/80">
                Investing ₹1,000 per month for 10 years may grow to approximately ₹2–2.5 lakh depending on market
                conditions.
              </p>
            </div>

            <div className="bg-AssetArc-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300">
              <p className="text-AssetArc-green-light font-semibold mb-2">Example 2:</p>
              <p className="text-white/80">
                Investing ₹5,000 per month for 20 years may create a corpus of ₹50–60 lakh, assuming consistent market
                performance.
              </p>
            </div>

            <div className="bg-AssetArc-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300">
              <p className="text-AssetArc-green-light font-semibold mb-2">Example 3:</p>
              <p className="text-white/80">
                Investing ₹1,00,000 in a debt fund for one year may yield around ₹6,000–8,000 in returns, depending on
                interest rate conditions.
              </p>
            </div>

            <div className="bg-AssetArc-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300">
              <p className="text-white font-semibold mb-2 text-sm">⚠️ Disclaimer:</p>
              <p className="text-white/70 text-sm">
                These are illustrative examples only. Actual returns may vary based on market performance, fund
                selection, and investment period. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Who Should Invest in Mutual Funds?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Individuals aiming to build long-term wealth',
              'Salaried professionals with regular income',
              "Parents planning for children's education",
              'Investors seeking higher returns than fixed deposits',
              'First-time investors who prefer professional management',
              'Anyone looking to diversify their investment portfolio',
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-AssetArc-green-light/30 transition-all duration-300"
              >
                <div className="text-AssetArc-green-light text-2xl font-bold">→</div>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-AssetArc-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Understanding Risks
          </h2>

          <div className="space-y-4 mb-8">
            {[
              'Market volatility may cause fluctuations in value',
              'Returns are not guaranteed',
              'Short-term losses are possible',
              'Choosing unsuitable funds may affect performance',
            ].map((risk, index) => (
              <div key={index} className="flex gap-4 items-start bg-AssetArc-bg-light/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <span className="text-red-400 font-bold">!</span>
                <p className="text-white/80">{risk}</p>
              </div>
            ))}
          </div>

          <div className="bg-AssetArc-green-light/10 border-l-4 border-AssetArc-green-light rounded-lg p-6">
            <p className="text-white/90">
              <strong className="text-AssetArc-green-light">How to Manage Risk:</strong> These risks can be managed
              through long-term investing, diversification across different fund types, and selecting well-performing
              funds aligned with your risk profile.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Choose AssetArc for Mutual Funds?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'AMFI-Registered', desc: 'Licensed mutual fund distributor ensuring compliance and transparency.' },
              { title: 'Transparent Guidance', desc: 'Recommendations based on your financial goals and risk tolerance.' },
              {
                title: 'Expert Selection',
                desc: 'Assistance in choosing from 100+ mutual fund schemes across all categories.',
              },
              { title: 'SIP Planning', desc: 'Customized SIP amounts tailored to your financial objectives and budget.' },
              { title: 'Paperless Process', desc: 'Simple, quick, and entirely online investment process.' },
              { title: 'Ongoing Support', desc: 'Portfolio reviews, rebalancing, and continuous support.' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-AssetArc-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-AssetArc-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-AssetArc-green-light mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-AssetArc-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            How to Start Investing in 6 Simple Steps
          </h2>

          <div className="space-y-4">
            {[
              'Share your basic details and complete KYC verification',
              'Discuss your financial goals with AssetArc experts',
              'Choose between SIP (monthly) or lump sum investment',
              'Receive personalized fund recommendations',
              'Complete a simple online investment process',
              'Track and manage your portfolio anytime on the platform',
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
              href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light hover:bg-AssetArc-green-light/10 hover:scale-110 transition-all duration-300 font-work-sans font-medium group"
            >
              <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              Start Your Mutual Fund Journey Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
