import type { Metadata } from "next";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Insurance — Term & Health Plans | AssetArc",
  description:
    "Compare term and health insurance plans, see real-life examples, and get tailored guidance to protect your family's finances.",
  keywords:
    "term insurance, health insurance, life cover, family protection, AssetArc insurance",
  alternates: {
    canonical: "https://assetarc.in/services/insurance",
  },
  openGraph: {
    title: "Insurance — Term & Health Plans | AssetArc",
    description:
      "Secure your family's future with Term & Health Insurance. Compare plans and get guidance from AssetArc.",
    url: "https://assetarc.in/services/insurance",
    locale: "en_IN",
    type: "website",
    images: ["/assetarclogo.png"],
  },
};

export default function Insurance() {
  return (
    <Layout>
      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-72 bg-AssetArc-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-6">
            Secure Your Family&apos;s Future with Insurance
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Protection that gives you peace of mind — compare term and health
            plans, understand how they work, and get personalised recommendations
            from AssetArc.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO + OVERVIEW */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-product-sans text-white mb-4">
              Insurance — Complete Service Overview
            </h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Insurance provides financial protection against unexpected events
              so your family, health, and finances remain secure. At AssetArc
              we help you choose the right plans based on your needs, income,
              family size and long-term goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Term Insurance",
                  desc: "High life cover at affordable premiums — pays a lump-sum (Sum Assured) to the nominee if the policyholder passes away.",
                  link: "https://insurance.assetplus.in/284122/term",
                },
                {
                  title: "Health Insurance",
                  desc: "Covers medical expenses from illness, accidents, surgery or hospitalisation. Includes cashless treatment and family options.",
                  link: "https://insurance.assetplus.in/284122/health",
                },
                {
                  title: "Guidance & Support",
                  desc: "We compare plans across insurers, assist with purchase & claims, and provide unbiased recommendations.",
                },
                {
                  title: "Claims Assistance",
                  desc: "Hassle-free support and step-by-step help to simplify claims.",
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-AssetArc-green-light text-sm hover:underline"
                    >
                      Explore {item.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR IMAGE + EXAMPLE */}
          <aside className="rounded-2xl p-10 bg-AssetArc-bg-light/40 border border-white/10">
            <Image
              src="/services/insurance2.webp"
              alt="Insurance overview"
              width={480}
              height={320}
              loading="lazy"
              className="w-full h-36 sm:h-44 md:h-56 object-contain rounded-lg mb-4 bg-white/5"
            />
            <h4 className="text-white font-semibold mb-3">Quick Example</h4>
            <p className="text-white/80 mb-2">
              For ~₹500/month you could secure a ₹50 lakh term insurance cover —
              protecting education, mortgage and lifestyle goals for your family.
            </p>
            <a
              href="https://insurance.assetplus.in/284122"
              className="inline-block text-AssetArc-green-light underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-AssetArc-green-light"
            >
              Get personalised insurance advice
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
            Get Personalised Insurance Guidance
          </a>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TERM INSURANCE SECTION */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-AssetArc-bg-light/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 w-full max-w-md group hover:border-AssetArc-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.12)] transition-all">
              <Image
                src="/services/insurance3.webp"
                alt="Term Insurance"
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
              Term Insurance — What & Why
            </h2>
            <p className="text-white/80 mb-4">
              Term insurance gives a high life cover at a low cost. It ensures
              your family can continue meeting goals and obligations if you are
              not there to provide for them.
            </p>

            <h4 className="text-white font-semibold mb-2">Why buy term insurance?</h4>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>High coverage at low premiums (₹50L, ₹1Cr)</li>
              <li>Protects family from income loss & loans</li>
              <li>Simple structure — pay premium, nominee receives sum assured</li>
              <li>Ideal for young professionals and families</li>
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-2">How it works</h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li>Choose coverage (e.g., ₹1 crore)</li>
              <li>Select policy term (10–40 years)</li>
              <li>Pay premiums regularly</li>
              <li>
                If death occurs within term, nominee receives the sum assured
              </li>
            </ol>

            {/* Real case examples */}
            <div className="rounded-2xl p-6 bg-AssetArc-bg-light/30 border border-white/10 mt-6">
              <h4 className="text-white font-semibold mb-3">Realistic Cases</h4>

              <div className="space-y-4 text-white/80">
                <div>
                  <p className="font-semibold">Rahul — 35, family breadwinner</p>
                  <p>
                    Buys ₹1 crore cover at ~₹12,000/year. On claim, family clears
                    home loan and funds children’s education.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Pooja — 28, supporting parents</p>
                  <p>
                    Buys ₹50 lakh plan ensuring parents&apos; financial safety in case
                    of loss.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://insurance.assetplus.in/284122/term"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-AssetArc-green-light rounded-full text-AssetArc-green-light hover:bg-AssetArc-green-light/10 transition-all"
              >
                Explore Term Insurance Plans
              </a>
            </div>

            {/* Mid-page CTA after Term Insurance
            <div className="mt-8">
              <a
                href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-AssetArc-green-accent/5 border-2 border-AssetArc-green-accent/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-bg hover:bg-AssetArc-green-accent transition-all duration-300 font-work-sans font-medium"
              >
                <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full" />
                Talk to an Insurance Expert
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HEALTH INSURANCE SECTION */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* CONTENT */}
          <div className="rounded-2xl p-6 bg-AssetArc-bg-light/30">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
              Health Insurance — What & Why
            </h2>
            <p className="text-white/80 mb-4">
              Health insurance protects you from high medical bills and offers
              cashless treatment at network hospitals, preserving your savings.
            </p>

            <h4 className="text-white font-semibold mb-2">Key benefits</h4>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Cashless treatment at network hospitals</li>
              <li>Family floater plans</li>
              <li>Protection from rising healthcare costs</li>
              <li>Cashless or reimbursement claims</li>
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-2">How it works</h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li>Select sum insured (₹3L–₹10L+)</li>
              <li>Pay annual premium</li>
              <li>Use network hospitals or claim reimbursement</li>
            </ol>

            {/* Real Case Examples */}
            <div className="mt-6 rounded-2xl p-6 bg-AssetArc-bg-light/30 border border-white/10">
              <h4 className="text-white font-semibold mb-3">Health — Real Cases</h4>
              <div className="space-y-4 text-white/80">
                <div>
                  <p className="font-semibold">Mr. Sharma — Dengue</p>
                  <p>₹78,000 bill fully covered by cashless claim.</p>
                </div>

                <div>
                  <p className="font-semibold">Mrs. Kavita — Surgery</p>
                  <p>₹1.2 lakh gallbladder surgery covered.</p>
                </div>

                <div>
                  <p className="font-semibold">Young Family</p>
                  <p>₹58,000 treatment covered under family floater.</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://insurance.assetplus.in/284122/health"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-AssetArc-green-light rounded-full text-AssetArc-green-light hover:bg-AssetArc-green-light/10 transition-all"
              >
                Explore Health Insurance Plans
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 w-full max-w-md group hover:border-AssetArc-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.12)] transition-all">
              <Image
                src="/services/insurance4.webp"
                alt="Term Insurance"
                width={520}
                height={360}
                loading="lazy"
                className="w-full object-contain max-h- sm:max80-h-[420px] group-hover:scale-105 transition-transform duration-300 bg-white/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* COMPARISON TABLE */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-AssetArc-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-6 text-center">
            Health Insurance vs Term Insurance
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr>
                  <th className="pb-3 text-white/80">Feature</th>
                  <th className="pb-3 text-white/80">Term Insurance</th>
                  <th className="pb-3 text-white/80">Health Insurance</th>
                </tr>
              </thead>

              <tbody>
                {[
                  [
                    "Purpose",
                    "Protects family after death",
                    "Covers medical expenses during life",
                  ],
                  [
                    "Payout",
                    "Lump sum (Sum Assured)",
                    "Hospital bills & treatment costs",
                  ],
                  [
                    "Duration",
                    "10–40 years long-term",
                    "Annual or multi-year renewals",
                  ],
                  ["Beneficiary", "Nominee / Family", "Policyholder"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/6">
                    <td className="py-4 text-white/80 font-semibold">{row[0]}</td>
                    <td className="py-4 text-white/70">{row[1]}</td>
                    <td className="py-4 text-white/70">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-white/70 mt-6 text-sm text-center">
            Both play different roles — term insurance protects family income
            after death while health insurance protects your savings during
            medical emergencies. Most households benefit from having both.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHO SHOULD BUY */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-6 text-center">
            Who should consider insurance?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Individuals with dependents",
              "Salaried employees with loans",
              "Single earning members",
              "Parents planning long-term safety",
              "Working individuals",
              "Families with children",
              "Senior citizens",
              "People with medical history",
            ].map((item, idx) => (
              <div
                key={idx}
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

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-AssetArc-bg-light/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-white mb-3">
            Ready to protect what matters?
          </h3>
          <p className="text-white/80 mb-6">
            Share basic details and we’ll suggest the right term & health plans
            for your needs.
          </p>

          <a
            href="https://insurance.assetplus.in/284122"
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light hover:bg-AssetArc-green-light/10 transition-all font-work-sans"
          >
            Get personalised insurance advice
          </a>
        </div>
      </section>
    </Layout>
  );
}
