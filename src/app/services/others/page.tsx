import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';

export const metadata: Metadata = {
  title:
    'Complete Financial Protection Services | Motor Insurance, Demat & More | AssetArc',
  description:
    'Comprehensive financial and protection services including Motor Insurance, Demat accounts, Travel Insurance, ULIPs, and Guaranteed Plans. Expert guidance for complete financial coverage.',
  keywords:
    'motor insurance, demat account, travel insurance, ULIP, guaranteed plans, financial services',
  openGraph: {
    title:
      'Complete Financial Protection Services | Motor Insurance, Demat & More | AssetArc',
    description:
      'Comprehensive financial and protection services including Motor Insurance, Demat accounts, Travel Insurance, ULIPs, and Guaranteed Plans.',
    url: 'https://assetarc.in/services/others',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Complete Financial Protection Services | Motor Insurance, Demat & More | AssetArc',
    description:
      'Comprehensive financial and protection services including Motor Insurance, Demat accounts, Travel Insurance, ULIPs, and Guaranteed Plans.',
  },
};

export default function Others() {
  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-6">
            Complete Financial Protection Services
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Beyond investments and loans, AssetArc offers a comprehensive range of financial and protection services
            designed to support you at every stage of life.
          </p>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
              <Image
                src="/services/others2.webp"
                alt="Financial Protection Services"
                width={720}
                height={420}
                loading="lazy"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold text-stockstrail-green-light mb-6">
                Other Financial & Protection Services
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                In addition to mutual funds, fixed deposits, loans, and insurance, AssetArc offers a range of
                additional financial and protection services. These services are designed to support clients at every
                stage of life, ensuring convenience, security, and long-term financial planning.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                Each service is explained in simple, professional language so you understand exactly what you are
                opting for. Our team provides expert guidance and comprehensive support to ensure you get the best value
                from every service.
              </p>
              <p className="text-white/80 leading-relaxed">
                From protecting your vehicle on the road to securing your investments in the market, from planning
                travel protection to building long-term wealth with traditional plans—we have you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA after intro */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full" />
            Explore Additional Services — Get Help
          </a>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Choose These Additional Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                Complete Protection
              </h3>
              <p className="text-white/80">
                Comprehensive coverage for life, health, vehicle, travel, and investments across all circumstances and
                life stages.
              </p>
            </div>

            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                Expert Guidance
              </h3>
              <p className="text-white/80">
                Professional recommendations tailored to your needs, with clear explanations of benefits, terms, and
                coverage details.
              </p>
            </div>

            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                Multi-Provider Comparison
              </h3>
              <p className="text-white/80">
                We compare plans from multiple companies to help you find the best value, coverage options, and
                competitive rates.
              </p>
            </div>

            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                Transparent Recommendations
              </h3>
              <p className="text-white/80">
                Client-focused suggestions based on your actual needs without hidden charges or unnecessary upgrades.
              </p>
            </div>

            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                Complete Support
              </h3>
              <p className="text-white/80">
                Assistance with documentation, application, claim processing, renewals, and ongoing service throughout
                the policy term.
              </p>
            </div>

            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                Peace of Mind
              </h3>
              <p className="text-white/80">
                Know that you and your assets are protected with the right coverage at the right cost for your specific
                situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Our Financial & Protection Services
          </h2>

          <div className="space-y-8">
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Motor Insurance</h3>
              <p className="text-white/80 mb-4">
                Motor insurance provides financial protection against accidents, theft, damage, and third-party
                liabilities for your vehicle. It is mandatory for all vehicles in India and ensures unexpected repair
                or legal expenses do not become a financial burden.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-semibold mb-2">Coverage Types:</p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Third-Party Liability (minimum legal requirement)</li>
                    <li>• Comprehensive (own vehicle + third-party)</li>
                    <li>• Add-On covers (zero depreciation, roadside assist, etc.)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Why Important:</p>
                  <p className="text-white/70">
                    Legally mandated protection against high repair costs, third-party claims, and legal expenses.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Travel Insurance</h3>
              <p className="text-white/80 mb-4">
                Travel insurance protects you from unexpected expenses during domestic or international travel. It
                ensures financial safety in medical emergencies, baggage loss, flight delays, or trip cancellations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-semibold mb-2">Coverage Includes:</p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Medical emergency treatment costs</li>
                    <li>• Baggage loss or delay coverage</li>
                    <li>• Trip cancellation or interruption refunds</li>
                    <li>• Passport loss support</li>
                    <li>• Personal accident protection</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Ideal For:</p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Families on vacation</li>
                    <li>• Students traveling abroad</li>
                    <li>• Frequent travellers</li>
                    <li>• Corporate work trips</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">
                Traditional Life Insurance Plans
              </h3>
              <p className="text-white/80 mb-4">
                AssetArc offers long-term life insurance products combining insurance protection with wealth creation
                for long-term financial planning and goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-stockstrail-bg-light/50 rounded-lg p-5 border border-white/5">
                  <p className="text-white font-semibold mb-2">ULIPs (Unit Linked Insurance Plans)</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Investment + insurance in one</li>
                    <li>• Choice of funds (equity, debt, hybrid)</li>
                    <li>• Long-term wealth creation potential</li>
                    <li>• Tax benefits under Section 80C</li>
                  </ul>
                  <p className="text-white/60 text-xs mt-3">
                    Ideal for: Long-term goals, market-linked returns seekers
                  </p>
                </div>

                <div className="bg-stockstrail-bg-light/50 rounded-lg p-5 border border-white/5">
                  <p className="text-white font-semibold mb-2">Guaranteed Return Plans</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Fixed, assured maturity amount</li>
                    <li>• Life insurance protection included</li>
                    <li>• Risk-free, stable returns</li>
                    <li>• Predictable financial planning</li>
                  </ul>
                  <p className="text-white/60 text-xs mt-3">
                    Ideal for: Conservative investors, disciplined saving
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA after 'Our Financial & Protection Services' */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stockstrail-green-accent/5 border-2 border-stockstrail-green-accent/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-bg hover:bg-stockstrail-green-accent transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full" />
            Get Help Choosing The Right Service
          </a>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Who Should Consider These Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Vehicle owners seeking mandatory insurance protection',
              'Aspiring stock market investors needing a Demat account',
              'Frequent travellers wanting travel protection',
              'Anyone with medical or property at-risk assets',
              'Long-term wealth builders with market risk appetite (ULIPs)',
              'Conservative investors preferring guaranteed returns',
              'Families planning education or retirement goals',
              'Business owners protecting personal and business assets',
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-5 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300"
              >
                <div className="text-stockstrail-green-light text-2xl font-bold">→</div>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            How to Get Started
          </h2>

          <div className="space-y-4">
            {[
              'Identify which service best fits your situation and financial need.',
              'Discuss your requirements and timeline with our specialists.',
              'Receive personalized recommendations comparing multiple providers and plans.',
              'Submit required documentation with our guidance and support.',
              'Once enrolled, enjoy ongoing support with renewals, claims, and service assistance.',
            ].map((step, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300"
              >
                <div className="shrink-0 w-8 h-8 bg-stockstrail-green-light rounded-full flex items-center justify-center text-black font-semibold">
                  {index + 1}
                </div>
                <p className="text-white/80 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Choose AssetArc for These Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'One-Stop Solution',
                desc: 'All your financial protection and investment needs in one place with consistent support.',
              },
              {
                title: 'Expert Comparison',
                desc: 'We analyze plans from multiple providers to ensure you get the best coverage at competitive rates.',
              },
              {
                title: 'Transparent Guidance',
                desc: 'Clear, jargon-free explanations so you understand exactly what you are buying and why.',
              },
              {
                title: 'Complete Documentation',
                desc: 'We guide you through all required paperwork and handle submission processes on your behalf.',
              },
              {
                title: 'Ongoing Support',
                desc: 'From purchase through claims and renewals, we are there to assist you throughout the policy term.',
              },
              {
                title: 'Client-Focused',
                desc: 'Recommendations based on your actual needs, not commissions, with your best interests in mind.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm group-hover:text-white/90 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold text-white mb-4">
            Ready to Secure Your Complete Financial Future?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Let us help you choose the right protection and services with transparent guidance and professional support
            at every step.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 transition-all duration-300 font-work-sans focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stockstrail-green-light"
          >
            Get Personalized Recommendations
          </a>
        </div>
      </section>
    </Layout>
  );
}
