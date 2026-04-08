'use client';

import React from 'react';

const CalculatorsSection = () => {
    const calculators = [
        {
            title: "SIP Calculator",
            description: "Calculate the maturity amount of your Systematic Investment Plan with compound growth.",
            icon: "/logos/sip.webp",
            isImage: true,
            href: "/calculators?tab=SIP",
        },
        {
            title: "Lumpsum Calculator",
            description: "Find out how your one-time investment will grow over time with market returns.",
            icon: "/logos/lumpsum.webp",
            isImage: true,
            href: "/calculators?tab=LUMPSUM",
        },
        {
            title: "FD Calculator",
            description: "Calculate interest earned on your Fixed Deposit and maturity amount.",
            icon: "/logos/fd.webp",
            isImage: true,
            href: "/calculators?tab=FD",
        },
        {
            title: "RD Calculator",
            description: "Plan your Recurring Deposit investments and track growth over time.",
            icon: "/logos/rd.webp",
            isImage: true,
            href: "/calculators?tab=RD",
        },
        {
            title: "EMI Calculator",
            description: "Calculate your monthly EMI for loans and plan your repayment strategy.",
            icon: "/logos/emi.webp",
            isImage: true,
            href: "/calculators?tab=EMI",
        },
        {
            title: "Tax Calculator",
            description: "Estimate your tax liability and optimize your investment for tax savings.",
            icon: "/logos/tax.webp",
            isImage: true,
            href: "/calculators?tab=TAX",
        },
    ];

    return (
        <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="w-full h-96 bg-AssetArc-bg-light blur-185 opacity-40"></div>
                {/* Pulsing ring (hero-style) behind Calculators header */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 w-[620px] h-[620px] bg-AssetArc-bg-light rounded-full blur-100 opacity-50 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase mb-6">
                        <span className="text-white">Financial </span>
                        <span className="gradient-text">Tools</span>
                    </h2>
                    <p className="text-white/70 text-sm sm:text-base lg:text-lg font-work-sans max-w-2xl mx-auto">
                        Use our free calculators to plan your investments, loans, and savings with precision
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {calculators.map((calculator, index) => (
                        <a
                            key={index}
                            href={calculator.href}
                            className="group relative bg-AssetArc-bg border border-white/10 rounded-2xl p-8 hover:border-AssetArc-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Background glow on hover */}
                            <div className="absolute inset-0 bg-AssetArc-green-light/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon */}
                                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {calculator.isImage ? (
                                        /* eslint-disable-next-line @next/next/no-img-element */
                                        <img
                                            src={calculator.icon}
                                            alt={`${calculator.title} icon`}
                                            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                            width={80}
                                            height={80}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    ) : (
                                        <div className="text-5xl">{calculator.icon}</div>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="font-product-sans text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 group-hover:text-AssetArc-green-light transition-colors duration-300">
                                    {calculator.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/60 text-xs sm:text-sm lg:text-base font-work-sans leading-relaxed mb-6 grow group-hover:text-white/80 transition-colors duration-300">
                                    {calculator.description}
                                </p>

                                {/* Button */}
                                <div className="inline-flex items-center gap-2 text-AssetArc-green-light font-work-sans font-semibold text-sm sm:text-base group-hover:gap-4 transition-all duration-300">
                                    <span>Open Calculator</span>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="group-hover:translate-x-2 transition-transform duration-300"
                                    >
                                        <path
                                            d="M5 12H19M19 12L12 5M19 12L12 19"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16">
                    <a
                        href="/calculators"
                        className="inline-flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light hover:bg-AssetArc-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium group"
                    >
                        <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
                        View All Calculators
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CalculatorsSection;
