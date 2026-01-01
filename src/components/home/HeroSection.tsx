import React from 'react';
//import HeroLogo from './HeroLogo';

const HeroSection = () => {
    return (
        <section className="relative lg:min-h-screen flex items-start lg:items-center justify-center px-8 sm:px-12 lg:px-16 pt-8 sm:pt-8 lg:pt-0 pb-8 lg:pb-0 overflow-hidden">
            {/* Background layer - deferred rendering for LCP optimization */}
            <div className="absolute inset-0" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 100vh' }}>
                {/* Main blur circle - uses CSS containment to avoid blocking LCP */}
                <div className="hidden lg:block absolute w-[871px] h-[887px] bg-stockstrail-bg-light rounded-full blur-100 opacity-60 ios-blur-fallback left-1/2 top-20 -translate-x-1/2" style={{ contain: 'strict' }} />

                {/* Floating particles - DISABLED for performance */}
                <div className="hidden lg:block absolute top-20 left-10 w-2 h-2 bg-stockstrail-green-light/40 rounded-full" />
                <div className="hidden lg:block absolute top-40 right-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full" />
                <div className="hidden lg:block absolute bottom-40 left-20 w-4 h-4 bg-white/20 rounded-full" />
                <div className="hidden lg:block absolute top-1/2 right-10 w-2 h-2 bg-stockstrail-green-light/50 rounded-full" />
                <div className="hidden lg:block absolute bottom-20 right-1/3 w-3 h-3 bg-stockstrail-green-accent/40 rounded-full" />

                {/* Gradient mesh overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-linear-to-br from-stockstrail-green-light/20 via-transparent to-stockstrail-green-accent/10" />
                </div>

                {/* Subtle animated grid pattern - DISABLED for performance */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div
                        className=""
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 1px 1px, rgba(0,255,151,0.25) 1px, transparent 0)",
                            backgroundSize: "50px 50px",
                        }}
                    />
                </div>
            </div>

            {/* Foreground content */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Logo */}
                {/* <div className="animate-slide-in-from-top">
                    <HeroLogo />
                </div> */}

                {/* Heading - Removed animation for LCP optimization */}
                <div className="mt-8">
                    <h1
                        className="font-product-sans text-4xl sm:text-5xl lg:text-7xl font-normal leading-tight lg:leading-20 mb-8"
                        style={{ contentVisibility: 'visible', opacity: 1, transform: 'none', willChange: 'auto' }}
                    >
                        <span className="text-white">
                            Embark on Your
                        </span>
                        <br />
                        <span className="text-white">
                            Journey to Success
                        </span>
                    </h1>
                </div>

                {/* Sub text - LCP element - Zero animation/transition for fastest render */}
                <p
                    className="mt-4 text-[#809393] text-base sm:text-lg lg:text-xl font-work-sans leading-relaxed max-w-[881px] mx-auto mb-8"
                    style={{ contentVisibility: 'visible', opacity: 1, transform: 'none', willChange: 'auto' }}
                >
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

                {/* CTA button - No animation for LCP optimization */}
                <div className="lg:mb-20">
                    <a
                        href="/services"
                        className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium text-base sm:text-lg group"
                    >
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
                        Learn More
                        <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">
                            about our financial services
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
