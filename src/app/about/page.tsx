'use client';

import Layout from '@/components/layout/Layout';
import Image from "next/image";
export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[700px] h-[700px] bg-stockstrail-bg-light rounded-full blur-100 opacity-40 left-1/2 -translate-x-1/2 top-24" />
          <div className="absolute top-20 left-16 w-3 h-3 bg-stockstrail-green-light/30 rounded-full animate-ping" />
          <div className="absolute bottom-24 right-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-bounce" />
          <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-4">About Us</h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-6 font-semibold">
            Honest Guidance. Simple Explanations. Confident Financial Decisions.
          </p>
          <p className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto mb-6">
            Most people don&apos;t avoid investing because they lack money—<br />
            They avoid it because they lack clarity.
          </p>
          <p className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto mb-6">
            The financial world often feels overwhelming, filled with jargon, sales-driven advice, and fear of making mistakes. Stockstrail was created to change that.
            Our purpose is to make financial planning simple, transparent, and accessible for every person, regardless of experience or background.
          </p>
          <p className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto mb-8">
            We believe financial confidence begins with understanding—and our role is to guide you with clarity at every step.
          </p>
          <div className="inline-block px-6 py-3 bg-stockstrail-green-light/10 border border-stockstrail-green-light/30 rounded-full">
            <p className="text-stockstrail-green-light font-product-sans text-lg sm:text-xl font-medium">
              Not for Profit, for People
            </p>
          </div>
        </div>
      </section>

      {/* Purpose section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
              <span className="gradient-text">Our Purpose</span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Most people don&apos;t avoid investing because they lack money—They avoid it because they lack clarity.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 hover:border-stockstrail-green-light/50 transition-colors duration-300">
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Stockstrail helps young professionals, first-time investors, and families build long-term financial stability through disciplined investing, honest advice, and simple explanations.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              We aim to break the myth that investing is complicated or meant only for experts. With the right guidance, anyone can start building wealth confidently and responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[400px] bg-stockstrail-bg-light blur-185 opacity-20" />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
              <span className="text-white">Our </span>
              <span className="gradient-text">Story</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/50 transition-colors duration-300">
              <h3 className="text-2xl font-product-sans mb-4 text-stockstrail-green-light">The Beginning</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Stockstrail began with a simple realisation: People genuinely want to invest, but they often feel confused and overwhelmed. Not because they lack capability, but because financial concepts were never explained in a simple, human manner. Stockstrail was built to change this experience.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/50 transition-colors duration-300">
              <h3 className="text-2xl font-product-sans mb-4 text-stockstrail-green-light">Our Four Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold mb-1">Clear Communication</p>
                    <p className="text-white/70">Making complex concepts simple and understandable</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold mb-1">Ethical Recommendations</p>
                    <p className="text-white/70">Research-backed, honest advice that prioritises your interests</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold mb-1">Realistic Expectations</p>
                    <p className="text-white/70">No shortcuts, no pressure, no confusing jargon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold mb-1">Consistent Support</p>
                    <p className="text-white/70">Long-term partnership mindset, not transactional relationships</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/50 transition-colors duration-300">
              <p className="text-white/80 text-lg leading-relaxed">
                This approach has helped us earn the trust of <span className="text-stockstrail-green-light font-semibold">200+ clients</span> across India, all of whom wanted something financial services rarely offer today—Someone who listens, explains, and genuinely cares about their financial wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
              <span className="text-white">Meet the </span>
              <span className="gradient-text">Founder</span>
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 hover:border-stockstrail-green-light/50 transition-colors duration-300">
            <div className="mb-6">
              <h3 className="text-3xl font-product-sans text-stockstrail-green-light mb-2">Akshat Bansal</h3>
              <p className="text-white/70 text-lg">AMFI-Registered Mutual Fund Distributor</p>
            </div>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Akshat founded AssetArc with a clear intention: To make financial planning feel simple, honest, and approachable for everyday individuals. He observed how families struggled with decisions, how young earners felt lost, and how first-time investors carried more fear than guidance—and decided to provide a solution rooted in clarity and trust.
            </p>

           <div className="mb-6">
  <h4 className="text-xl font-product-sans text-stockstrail-green-light mb-4">
    Professional Certifications
  </h4>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Certification 1 */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-stockstrail-green-light/50 transition-colors duration-300">
      <div className="mb-3">
        <p className="text-white font-semibold mb-3">
          AMFI-Registered Mutual Fund Distributor
        </p>

        <div className="w-full bg-white/10 p-2 rounded-lg">
          <Image
            src="/about_us/fund_distributor.jpg"
            alt="NISM-Series V-A Mutual Fund Distributors Certification"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>
      </div>

      <p className="text-white/70 text-sm">
        NISM-Series V-A: Mutual Fund Distributors Certification
      </p>
    </div>

    {/* Certification 2 */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-stockstrail-green-light/50 transition-colors duration-300">
      <div className="mb-3">
        <p className="text-white font-semibold mb-3">SEBI Registered</p>

        <div className="w-full bg-white/10 p-2 rounded-lg">
          <Image
            src="/about_us/sebi.jpg"
            alt="SEBI Investor Certification Examination"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>
      </div>

      <p className="text-white/70 text-sm">SEBI – Investor Certification Examination</p>
    </div>
  </div>
</div>


            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-product-sans text-stockstrail-green-light mb-3">Founder&apos;s Philosophy</h4>
              <p className="text-white/80 italic text-lg">
                &quot;When money is explained with clarity and honesty, people make better decisions—not just for their finances, but for their lives.&quot;
              </p>
            </div>

            <p className="text-white/70 text-base mt-6">
              Along with advisory, he creates financial education content to simplify SIPs, compounding, insurance, and long-term planning, helping individuals build confidence even before they start investing.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[400px] bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
              <span className="text-white">What </span>
              <span className="gradient-text">We Do</span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              We provide comprehensive financial solutions tailored to your goals and lifestyle.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 hover:border-stockstrail-green-light transition-colors duration-300 mb-10">
            <h3 className="text-white text-2xl font-product-sans mb-6 text-center">Our Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                <p className="text-white/80 leading-relaxed"><span className="font-semibold">Understand</span> your goals, responsibilities, and financial background</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                <p className="text-white/80 leading-relaxed"><span className="font-semibold">Analyse</span> your risk comfort and investment horizon</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                <p className="text-white/80 leading-relaxed"><span className="font-semibold">Recommend</span> clear, simple strategies suited to your life</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                <p className="text-white/80 leading-relaxed"><span className="font-semibold">Build</span> a disciplined long-term plan</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                <p className="text-white/80 leading-relaxed"><span className="font-semibold">Provide</span> regular reviews and continuous support</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                <p className="text-white/80 leading-relaxed"><span className="font-semibold">Assist</span> with documentation, claims, and financial processes</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/50 transition-colors duration-300">
            <p className="text-white/80 text-lg leading-relaxed">
              Our goal is to make every financial decision feel <span className="text-stockstrail-green-light font-semibold">simple, clear, and well-supported.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase">
            <span className="text-white">Our </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/70 mt-4 max-w-3xl mx-auto">
            Comprehensive solutions covering investment planning, protection, and financial support.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
            title: "Mutual Funds",
            desc: "SIP Planning, Goal-Based Investment, Professional Fund Selection.",
            href: "/services/mutual-funds",
          },{
            title: "Fixed Deposit",
            desc: "Guaranteed Returns, Flexible Tenures, Easy Management.",
            href: "/services/fixed-deposit",
          },{
            title: "Insurance",
            desc: "Term Insurance, Health Insurance, ULIPs & Guaranteed Plans.",
            href: "/services/insurance",
          },{
            title: "Loans",
            desc: "Loan Against Mutual Funds, Home Loans, Business Loans.",
            href: "/services/loan",
          }].map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="block  bg-stockstrail-bg border-2 border-[#ffffff21] rounded-2xl p-6 text-left hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              <div className="text-white text-xl font-semibold mb-2">{s.title}</div>
              <div className="text-white/70 text-sm leading-relaxed">{s.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
              <span className="text-white">Our </span>
              <span className="gradient-text">Philosophy</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/50 transition-colors duration-300">
              <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-4">Simplicity</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                We break down financial concepts into clear, understandable guidance.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/50 transition-colors duration-300">
              <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-4">Transparency</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                No unrealistic promises. No hidden conditions. Every recommendation is honest and accountable.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/50 transition-colors duration-300">
              <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-4">Education-First</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                We help you understand the &quot;why&quot; behind every strategy.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/50 transition-colors duration-300">
              <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-4">Long-Term Discipline</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                We prioritise sustainable wealth creation—not short-term reactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[400px] bg-stockstrail-bg-light blur-185 opacity-20" />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
              <span className="text-white">Why </span>
              <span className="gradient-text">Clients Trust Stockstrail</span>
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 hover:border-stockstrail-green-light/50 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="text-white font-semibold text-lg mb-1">Certified & Compliant</p>
                  <p className="text-white/70">SEBI / NISM registered advisory</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="text-white font-semibold text-lg mb-1">Trusted by 200+</p>
                  <p className="text-white/70">Clients across India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="text-white font-semibold text-lg mb-1">Clear Communication</p>
                  <p className="text-white/70">Jargon-free explanations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="text-white font-semibold text-lg mb-1">Personalised Planning</p>
                  <p className="text-white/70">Goal-based strategies</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="text-white font-semibold text-lg mb-1">Transparent Processes</p>
                  <p className="text-white/70">Zero pressure approach</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="text-white font-semibold text-lg mb-1">Long-Term Partner</p>
                  <p className="text-white/70">Not just transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 text-center relative">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[300px] bg-stockstrail-bg-light blur-185 opacity-30" />
        </div>
        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
          <h3 className="text-2xl font-product-sans mb-4">
            <span className="text-white">Your Financial Journey Begins With </span>
            <span className="gradient-text">Understanding</span>
          </h3>
          <p className="text-white/70 mb-6">At Stockstrail, we believe every person deserves financial clarity and the confidence to take control of their future. With honest advice, simple explanations, and disciplined planning, we guide you step-by-step toward long-term financial security.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/lets-talk" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 font-work-sans font-medium group">
              <div className="w-2 h-2 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
