'use client';

import React from 'react';

const DisclaimerSection = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Enhanced background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-4 h-4 bg-stockstrail-green-light/20 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full"></div>
                <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/20 rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto text-center">
                <div className="animate-slide-in-from-top">
                    <h2 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase mb-8 text-white group hover:scale-105 transition-transform duration-500">
                        DISCLAIMER
                    </h2>
                </div>

                <div className="space-y-8 text-center">
                    <div className="animate-slide-in-from-top" style={{ animationDelay: '200ms' }}>
                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
                            <span className="text-white">www.assetarc.in is an online website of </span>
                            <span className="text-stockstrail-green-light inline-block font-bold"> Akshat Bansal</span>
                            <span className="text-white">, who is registered as an AMFI Registered Mutual Fund Distributor. This website is intended to provide educational and informative content related to investments and also facilitates online transactions in Mutual Funds.</span>
                        </p>
                    </div>

                    <div className="animate-slide-in-from-top" style={{ animationDelay: '400ms' }}>
                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
                            <span className="text-white">We do not charge any fees for the calculators or information provided on this website. Our earnings come in the form of commissions received from the respective Mutual Fund companies.</span>
                        </p>
                    </div>

                    <div className="animate-slide-in-from-top" style={{ animationDelay: '600ms' }}>
                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
                            <span className="text-white">Please note that investments in Mutual Funds are subject to market risks. The website does not guarantee any specific returns, financial outcomes, or achievement of investment goals.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DisclaimerSection;
