import React from 'react';
//import HeroLogo from './HeroLogo';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-start lg:items-center justify-center px-8 sm:px-12 lg:px-16 pt-24 sm:pt-20 lg:pt-0 lg:pb-0 overflow-hidden">

            {/* LCP Content - Render first with no dependencies */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Heading */}
                <div className="mt-8">
                    <h1 className="font-product-sans text-4xl sm:text-5xl lg:text-7xl font-normal leading-tight lg:leading-20 mb-8">
                        <span className="text-white">Embark on Your</span>
                        <br />
                        <span className="text-white">Journey to Success</span>
                    </h1>
                </div>

                {/* Sub text - LCP element */}
                <p className="mt-4 text-[#809393] text-base sm:text-lg lg:text-xl font-work-sans leading-relaxed max-w-[881px] mx-auto mb-8">
                    Achieve financial independence with Stockstrail. Our expert guidance
                    and innovative tools help you navigate investing and reach your
                    long-term goals. Whether you&apos;re a beginner or experienced investor,
                    stay ahead and attain
                </p>

                {/* Subheading - No animation for LCP optimization */}
                <div>
                    <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal mb-8 group">
                        <span className="gradient-text group-hover:scale-105 transition-transform duration-500 inline-block">
                            Financial Freedom
                        </span>
                    </h2>
                </div>

                {/* CTA button */}
                <div className="lg:mb-20">
                    <a
                        href="/services"
                        className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium text-base sm:text-lg group"
                    >
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
                        Learn More
                        <span className="sr-only">about our financial services</span>
                    </a>
                </div>
            </div>

            {/* Background layer - Rendered AFTER LCP content for paint optimization */}
            <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
                {/* Main blur circle - deferred with CSS containment */}
                <div 
                    className="hidden lg:block absolute w-[871px] h-[887px] bg-stockstrail-bg-light rounded-full opacity-60 ios-blur-fallback left-1/2 top-20 -translate-x-1/2"
                    style={{ filter: 'blur(120px)', contain: 'strict', contentVisibility: 'auto' }}
                />
            </div>
        </section>
    );
};

export default HeroSection;
