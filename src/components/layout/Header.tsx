'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// const StockstrailLogo = () => (
//   <div className="flex items-center gap-2.5">
//     <svg
//       width="32"
//       height="35"
//       viewBox="0 0 32 35"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="w-8 h-8"
//     >
//       <rect
//         x="3.74097"
//         y="16.0264"
//         width="20.8942"
//         height="3.71985"
//         fill="url(#paint0_linear)"
//       />
//       <path
//         d="M1.15294 18.553C0.922293 18.3223 0.923909 17.9479 1.15654 17.7192L15.5948 3.52791C16.0954 3.03584 16.8991 3.0393 17.3955 3.53568L18.6805 4.82068C19.183 5.32315 19.1794 6.13889 18.6726 6.63701L6.52575 18.5761C5.032 20.0444 2.63398 20.034 1.15294 18.553Z"
//         fill="#00D873"
//       />
//       <path
//         d="M20.498 0.96257C20.9132 0.86584 21.2857 1.23841 21.189 1.65361L19.7088 8.0073C19.6064 8.447 19.0607 8.6029 18.7414 8.2837L13.868 3.41016C13.5487 3.09092 13.7046 2.54519 14.1443 2.44276L20.498 0.96257Z"
//         fill="#00D873"
//       />
//       <path
//         d="M30.5214 17.0648C30.6657 17.209 30.6647 17.4433 30.5192 17.5863L15.742 32.1108C15.3414 32.5044 14.6985 32.5017 14.3014 32.1046L12.6547 30.4578C12.2527 30.0559 12.2555 29.4033 12.6609 29.0048L24.8337 17.0402C26.415 15.4859 28.9536 15.4969 30.5214 17.0648Z"
//         fill="#00D873"
//       />
//       <path
//         d="M11.0196 34.4984C10.6044 34.5951 10.2318 34.2225 10.3286 33.8073L11.8087 27.4536C11.9112 27.0139 12.4569 26.858 12.7761 27.1773L17.6496 32.0508C17.9688 32.37 17.8129 32.9157 17.3733 33.0182L11.0196 34.4984Z"
//         fill="#00D873"
//       />
//       <defs>
//         <linearGradient
//           id="paint0_linear"
//           x1="-8.8767"
//           y1="14.2993"
//           x2="25.1661"
//           y2="20.3933"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#00D873" />
//           <stop offset="1" stopColor="#00D873" stopOpacity="0" />
//         </linearGradient>
//       </defs>
//     </svg>
//     <div className="flex items-baseline">
//       <span className="text-white font-product-sans text-2xl font-normal">Stocks</span>
//       <span className="text-white font-product-sans text-2xl font-normal">trail</span>
//     </div>
//   </div>
// );

const StockstrailLogo = () => (
  <div className="flex items-center -ml-2 sm:ml-0" suppressHydrationWarning>
    <Image
      src="/Stockstrailchristmas.webp"
      alt="Stockstrail Christmas Logo"
      width={280}
      height={84}
      priority
      className="w-[120px] h-[54px] sm:w-[280px] sm:h-[84px] object-contain"
    />
  </div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const navCloseTimer = useRef<number | undefined>(undefined);

  const clearCloseTimer = () => {
    if (navCloseTimer.current) {
      clearTimeout(navCloseTimer.current);
      navCloseTimer.current = undefined;
    }
  };

  const openMenu = (name: string) => {
    clearCloseTimer();
    setOpenDropdown(name);
  };

  const closeMenuWithDelay = (delay = 200) => {
    clearCloseTimer();
    navCloseTimer.current = window.setTimeout(() => {
      setOpenDropdown(null);
      navCloseTimer.current = undefined;
    }, delay) as unknown as number;
  };

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Mutual Funds', href: '/services#mutual-funds' },
        { name: 'Fixed Deposit', href: '/services#fd' },
        { name: 'Insurance', href: '/services#insurance' },
        { name: 'Loan', href: '/services#loan' },
        { name: 'Other Services', href: '/services#others' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    {
      name: 'Calculators',
      href: '/calculators',
      hasDropdown: true,
      dropdownItems: [
        { name: 'SIP Calculator', href: '/calculators?tab=SIP' },
        { name: 'Lumpsum Calculator', href: '/calculators?tab=LUMPSUM' },
        { name: 'FD Calculator', href: '/calculators?tab=FD' },
        { name: 'RD Calculator', href: '/calculators?tab=RD' },
        { name: 'EMI Calculator', href: '/calculators?tab=EMI' },
        { name: 'Tax Calculator', href: '/calculators?tab=TAX' },
      ]
    },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stockstrail-bg/80 backdrop-blur-[100px] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 hover:scale-105 transition-all duration-300 group">
            <StockstrailLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center bg-white/5 backdrop-blur-[37.5px] px-14 py-4 rounded-[45px] space-x-16 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => openMenu(item.name)}
                      onMouseLeave={() => closeMenuWithDelay(250)}
                    >
                      <button
                        className="flex items-center gap-2 text-white hover:text-stockstrail-green-light hover:scale-105 transition-all duration-300 font-work-sans font-medium"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.name && (
                        <div
                          className="absolute top-full left-0 mt-2 w-56 bg-stockstrail-bg/95 backdrop-blur-lg border border-white/10 rounded-lg py-2 shadow-lg animate-in slide-in-from-top-2 duration-200"
                          onMouseEnter={() => openMenu(item.name)}
                          onMouseLeave={() => closeMenuWithDelay(250)}
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-white hover:text-stockstrail-green-light hover:bg-white/5 hover:translate-x-1 transition-all duration-300"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-work-sans font-medium transition-all duration-300 text-white hover:text-stockstrail-green-light hover:scale-105"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link href="/lets-talk" className="inline-flex items-center gap-4 px-6 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 font-work-sans font-medium group">
              <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white hover:text-stockstrail-green-light hover:scale-110 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-left py-2 text-white font-work-sans font-medium hover:text-stockstrail-green-light transition-colors duration-300"
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openMobileDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileDropdown === item.name && (
                        <div className="pl-4 space-y-2 mt-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block py-2 text-white/70 hover:text-stockstrail-green-light hover:translate-x-2 transition-all duration-300"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 font-work-sans font-medium transition-all duration-300 text-white hover:text-stockstrail-green-light hover:translate-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/lets-talk" className="inline-flex items-center gap-4 px-6 py-4 bg-transparent border-2 border-white/20 rounded-full text-white font-work-sans font-medium mt-4 w-fit hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 group">
                <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
