'use client';

import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-4 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-4 h-4 bg-stockstrail-green-light/20 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full"></div>
                <div className="absolute top-1/2 left-10 w-2 h-2 bg-white/20 rounded-full"></div>
                <div className="absolute top-1/3 right-10 w-5 h-5 bg-stockstrail-green-light/10 rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <div className="animate-slide-in-from-top" style={{ animationDelay: '100ms' }}>
                    <h2 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase mb-8 group">
                        <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">About </span>
                        <span className="gradient-text group-hover:scale-105 transition-transform duration-500 inline-block">AssetArc</span>
                    </h2>
                </div>

                <div className="animate-slide-in-from-top" style={{ animationDelay: '200ms' }}>
                    <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mx-auto mb-12 group-hover:text-stockstrail-green-light transition-colors duration-500">
                        We ensure a secure and safe mutual fund investment platform through a structured and disciplined approach. We offer a wide range of services, including Mutual Funds, Insurance, Fixed Deposits, and more, combining top-tier proprietary and third-party products.
                    </p>
                </div>

                <div className="animate-slide-in-from-top" style={{ animationDelay: '400ms' }}>
                    <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
                        Our goal is to provide quick transaction services tailored to your profile and risk appetite. Partner with us to develop a savings and investment habit, along with a protection plan that helps you achieve your investment goals according to your specific needs. Our advice ensures you choose the best schemes under the SEBI-defined riskometer.
                    </p>
                </div>

                <div className="mt-16">
                    <a
                        href="/lets-talk"
                        className="inline-flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium text-lg group relative z-20 cursor-pointer"
                        style={{ pointerEvents: 'auto' }}
                    >
                        <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
                        Let&apos;s Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
