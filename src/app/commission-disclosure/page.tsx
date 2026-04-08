"use client";

import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";

const CommissionDisclosure = () => {
  return (
    <Layout>
      <SEO
        title="Commission Disclosure - AssetArc"
        description="Transparent commission disclosure for AssetArc's services."
        url="/commission-disclosure"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-product-sans text-4xl sm:text-5xl font-normal gradient-text mb-6 text-center">
            Website Commission Disclosure
          </h1>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              We are an{" "}
              <span className="font-semibold">AMFI-registered Mutual Fund Distributor</span>,
              earning commissions solely through product distribution.
            </p>

            <p className="text-white/70 mb-4">
              In line with regulatory guidelines and our commitment to transparency, we
              proactively disclose our commission structure, ensuring clients have a clear
              understanding of our earnings. This information is readily available on our website
              for complete transparency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-white/3 border border-white/6 rounded-lg p-4 text-center">
                <h3 className="text-white font-semibold mb-2">EQUITY BROKERAGE</h3>
                <p className="text-white/70 text-sm">
                  Commissions earned from equity transactions and distribution of equity-linked
                  products.
                </p>
              </div>

              <div className="bg-white/3 border border-white/6 rounded-lg p-4 text-center">
                <h3 className="text-white font-semibold mb-2">DEBT BROKERAGE</h3>
                <p className="text-white/70 text-sm">
                  Commissions from debt funds and fixed-income product distribution.
                </p>
              </div>

              <div className="bg-white/3 border border-white/6 rounded-lg p-4 text-center">
                <h3 className="text-white font-semibold mb-2">COMMODITY BROKERAGE</h3>
                <p className="text-white/70 text-sm">
                  Commissions from commodity-linked investment solutions and services (if
                  applicable).
                </p>
              </div>

              <div className="bg-white/3 border border-white/6 rounded-lg p-4 text-center">
                <h3 className="text-white font-semibold mb-2">HYBRID BROKERAGE</h3>
                <p className="text-white/70 text-sm">
                  Commissions earned for hybrid products that combine equity and debt strategies.
                </p>
              </div>
            </div>

            <p className="text-white/70 mt-6">
              If you would like a detailed breakdown of commission rates for a specific product,
              please{" "}
              <a href="/lets-talk" className="text-AssetArc-green-light underline">
                contact us
              </a>{" "}
              and we will provide the complete information.
            </p>

            <div className="mt-6">
              <a
                href="/CoC/revisedcoc.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 bg-transparent border-2 border-white/10 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light transition-all duration-200"
              >
                View Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommissionDisclosure;
