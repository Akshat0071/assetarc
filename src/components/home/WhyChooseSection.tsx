'use client';

import React from 'react';
import Image from 'next/image';

const WhyChooseSectionComponent = () => {
    const features = [
        {
            icon: "https://c.animaapp.com/mfilofkpBLsyal/img/frame-3.svg",
            title: "GOAL PLANNING",
            delay: "0ms",
        },
        {
            icon: "https://c.animaapp.com/mfilofkpBLsyal/img/frame-4.svg",
            title: "FREE CONSULTATION",
            delay: "200ms",
        },
        {
            icon: "https://c.animaapp.com/mfilofkpBLsyal/img/frame-2.svg",
            title: "BANK LEVEL\nSECURITY",
            delay: "400ms",
        },
        {
            icon: "https://c.animaapp.com/mfilofkpBLsyal/img/frame-1.svg",
            title: "SAFE AND\nSECURE",
            delay: "600ms",
        },
    ];

    return (
        <section className="w-full py-12 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="w-full h-96 bg-AssetArc-bg-light blur-185 opacity-40"></div>
                {/* Pulsing ring (hero-style) behind Why Choose header */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 w-[640px] h-[640px] bg-AssetArc-bg-light rounded-full blur-100 opacity-55 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase">
                        <span className="text-white">Why Choose </span>
                        <span className="gradient-text">AssetArc</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="-translate-y-4 animate-fade-in opacity-0 bg-AssetArc-bg border-2 border-[#ffffff21] backdrop-blur-[50px] backdrop-brightness-100 [-webkit-backdrop-filter:blur(50px)_brightness(100%)] rounded-[100px] md:rounded-[200px] h-[250px] md:h-[307px] w-full max-w-[250px] mx-auto transition-all duration-300 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-white/20 hover:scale-105 group cursor-pointer"
                            style={
                                { "--animation-delay": feature.delay } as React.CSSProperties
                            }
                        >
                            <div className="flex flex-col items-center justify-center gap-4 md:gap-5 h-full p-6 md:p-8">
                                <Image
                                    className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(0,255,151,0.5)]"
                                    alt="Feature icon"
                                    src={feature.icon}
                                    width={48}
                                    height={48}
                                />
                                <div className="font-normal text-white text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-[0] leading-5 sm:leading-6 md:leading-[26px] lg:leading-[30px] whitespace-pre-line transition-all duration-300 group-hover:text-[#00FF97] group-hover:drop-shadow-[0_0_10px_rgba(0,255,151,0.3)]">
                                    {feature.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSectionComponent;
