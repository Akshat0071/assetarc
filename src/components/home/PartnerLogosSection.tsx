'use client';

import React from 'react';
import Image from 'next/image';

const PartnerLogosSection = () => {
    const partners = [
        { name: "AngelOne", logo: "/logos/angelone.webp" },
        { name: "Alice Blue", logo: "/logos/aliceblue.webp" },
        { name: "AssetPlus", logo: "/logos/assetplus.webp" },
        { name: "Axis", logo: "/logos/axis.webp" },
        { name: "Bandhan", logo: "/logos/bandhan.webp" },
        { name: "DSP", logo: "/logos/dsp.webp" },
        { name: "Edelweiss", logo: "/logos/edelweis.webp" },
        { name: "Franklin", logo: "/logos/franklin.webp" },
        { name: "Groww", logo: "/logos/groww.webp" },
        { name: "HDFC", logo: "/logos/hdfc.webp" },
        { name: "HDFC SKY", logo: "/logos/hdfcsky.webp" },
        { name: "ICICI", logo: "/logos/icici.webp" },
        { name: "ITI", logo: "/logos/iti.webp" },
        { name: "Kotak", logo: "/logos/kotak.webp" },
        { name: "LIC", logo: "/logos/lic.webp" },
        { name: "Mirae", logo: "/logos/mirae.webp" },
        { name: "Motilal", logo: "/logos/motilal.webp" },
        { name: "Nippon", logo: "/logos/nippon.webp" },
        { name: "PB Partners", logo: "/logos/pbpartners.webp" },
        { name: "PGIM", logo: "/logos/pgim.webp" },
        { name: "PPFAS", logo: "/logos/ppfas.webp" },
        { name: "Quant", logo: "/logos/quant.webp" },
        { name: "Quantum", logo: "/logos/quantum.webp" },
        { name: "SBI", logo: "/logos/sbi.webp" },
        { name: "Shriram", logo: "/logos/shriram.webp" },
        { name: "Tata", logo: "/logos/tata.webp" },
        { name: "Zerodha", logo: "/logos/zerodha.webp" },
    ];

    return (
        <section className="pt-2 pb-8 sm:py-16 relative overflow-hidden lg:pt-10">
            {/* Enhanced background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-1/4 w-4 h-4 bg-stockstrail-green-light/20 rounded-full"></div>
                <div className="absolute bottom-10 right-1/4 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full"></div>
                <div className="absolute top-1/2 left-10 w-2 h-2 bg-white/20 rounded-full"></div>
            </div>

            <div className="relative z-10">
                <div className="animate-slide-in-from-top">
                    <h3 className="text-center font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-10 px-4 sm:px-6 lg:px-8 group hover:scale-105 transition-transform duration-500">
                        OUR PARTNERS
                    </h3>
                </div>
                <div className="w-full bg-[#0F2A2A] border-y border-[#1A3A3A] overflow-hidden hover:border-stockstrail-green-light/30 transition-colors duration-500">
                    <div className="partners-track animate-scroll">
                        {partners.concat(partners).map((partner, i) => (
                            <div key={`partner-${i}`} className="flex items-center justify-center px-4 sm:px-6 py-4 sm:py-4 min-w-[120px] sm:min-w-[200px] group">
                                <Image
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className="h-16 sm:h-20 w-auto object-contain group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
                                    width={160}
                                    height={80}
                                    sizes="(max-width: 640px) 120px, 160px"
                                    quality={60}
                                    draggable={false}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerLogosSection;
