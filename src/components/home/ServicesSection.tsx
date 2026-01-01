'use client';

import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
    const services = [
        {
            title: "MUTUAL FUNDS",
            description:
                "Our expertly managed funds offer a convenient way to grow your wealth over time, with the potential for long-term returns and minimal risk.",
            icon: "/piggybank.webp",
            isImage: true,
        },
        {
            title: "FIXED DEPOSIT",
            description:
                "Secure your savings with guaranteed returns through our fixed deposit schemes, offering competitive interest rates and flexible tenure options.",
            icon: "/fd.webp",
            isImage: true,
        },
        {
            title: "INSURANCE",
            description:
                "Protect yourself and your loved ones from life's uncertainties with our comprehensive insurance plans.",
            icon: "/insurance.webp",
            isImage: true,
        },
        {
            title: "LOAN",
            description:
                "Get quick approval for personal, home, and business loans with competitive interest rates and flexible repayment terms.",
            icon: "/loan.webp",
            isImage: true,
        },
        {
            title: "OTHERS",
            description:
                "In addition to our core financial services, we also offer a range of other solutions to support your financial well-being.",
            icon: "/others.webp",
            isImage: true,
        },
    ];

    const getHref = (title: string) => {
        if (title.includes("MUTUAL FUNDS")) return "/services/mutual-funds";
        if (title.includes("FIXED DEPOSIT")) return "/services/fixed-deposit";
        if (title.includes("INSURANCE")) return "/services/insurance";
        if (title.includes("LOAN")) return "/services/loan";
        if (title.includes("OTHERS")) return "/services/others";
        return "/services";
    };

    return (
        <section id="services" className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40"></div>
                {/* Pulsing ring (hero-style) */}
                <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[700px] bg-stockstrail-bg-light rounded-full blur-100 opacity-60 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase mb-8">
                        <span className="text-white">Invest your </span>
                        <span className="gradient-text">money</span>
                        <span className="text-white"> on the go</span>
                    </h2>
                </div>

                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div key={index} className="relative">
                            <div className="bg-stockstrail-bg border-2 border-white/13 rounded-[105px] p-4 sm:p-8 flex flex-col sm:flex-row items-center group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">

                                {/* Icon / Image */}
                                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-8 shrink-0 group-hover:scale-110 group-hover:bg-stockstrail-green-light/20 transition-all duration-300">
                                    {service.isImage ? (
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            className="w-8 h-8 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                            width={48}
                                            height={48}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    ) : (
                                        <span className="text-2xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </span>
                                    )}
                                </div>

                                {/* Text */}
                                <div className="grow text-center">
                                    <h3 className="font-product-sans text-lg sm:text-xl lg:text-2xl font-normal uppercase text-white mb-4 group-hover:text-stockstrail-green-light transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/50 font-work-sans text-xs sm:text-sm lg:text-base leading-relaxed max-w-[662px] mx-auto group-hover:text-white/70 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Arrow Link */}
                                <a
                                    href={getHref(service.title)}
                                    className="w-16 h-16 sm:w-24 sm:h-24 bg-white/20 rounded-full flex items-center justify-center mt-4 sm:mt-0 sm:ml-8 shrink-0 group-hover:bg-stockstrail-gradient group-hover:scale-110 transition-all duration-300 cursor-pointer"
                                    aria-label={`${service.title} link`}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        className="sm:w-[35px] sm:h-[35px] group-hover:scale-110 transition-transform duration-300"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.44141 28.6037L29.0414 7.00366M29.0414 7.00366H12.8414M29.0414 7.00366V23.2037"
                                            stroke="white"
                                            strokeWidth="2.16"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
