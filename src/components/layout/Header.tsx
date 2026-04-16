'use client';

import { useState, useRef, memo } from 'react';
import Link from 'next/link';

type IconProps = { className?: string };

const IconChevronDown = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMenu = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M4 6h16M4 12h16M4 18h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconX = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M18 6 6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const AssetArcLogo = () => (
  <div className="flex items-center gap-2.5">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/assetarclogo.png?v=2"
      alt="AssetArc Logo"
      width="32"
      height="35"
      className="w-8 h-8 object-contain"
    />
    <div className="flex items-baseline">
      <span className="text-white font-product-sans text-2xl font-normal">Asset</span>
      <span className="text-white font-product-sans text-2xl font-normal">Arc</span>
    </div>
  </div>
);

// const AssetArcLogo = () => (
//   <div className="flex items-center">
//     {/* Using native img to avoid Next.js Image hydration mismatches */}
//     {/* eslint-disable-next-line @next/next/no-img-element */}
//     <img
//       src="/AssetArcchristmas.webp"
//       alt="AssetArc Christmas Logo"
//       width={280}
//       height={84}
//       className="w-[140px] sm:w-[280px] h-auto object-contain"
//       loading="eager"
//       decoding="async"
//     />
//   </div>
// );

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
    }, delay);
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
      ],
    },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
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
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-AssetArc-bg/80 backdrop-blur-none sm:backdrop-blur-[100px] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-80 hover:scale-105 transition-all duration-300 group"
            aria-label="AssetArc Home"
          >
            <AssetArcLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center bg-white/5 backdrop-blur-[37.5px] px-14 py-4 rounded-[45px] space-x-16 hover:bg-white/10 transition-all duration-300">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => openMenu(item.name)}
                      onMouseLeave={() => closeMenuWithDelay(250)}
                    >
                      <button className="flex items-center gap-2 text-white hover:text-AssetArc-green-light transition-all duration-300 font-work-sans font-medium">
                        {item.name}
                        <IconChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      {openDropdown === item.name && (
                        <div
                          className="absolute top-full left-0 mt-2 w-56 bg-AssetArc-bg/95 backdrop-blur-lg border border-white/10 rounded-lg py-2 shadow-lg"
                          onMouseEnter={() => openMenu(item.name)}
                          onMouseLeave={() => closeMenuWithDelay(250)}
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-white hover:text-AssetArc-green-light hover:bg-white/5 transition-all duration-300"
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
                      className="font-work-sans font-medium transition-all duration-300 text-white hover:text-AssetArc-green-light"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/lets-talk"
              className="inline-flex items-center gap-4 px-6 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light transition-all duration-300 font-medium group"
            >
              <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full group-hover:animate-pulse"></div>
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white hover:text-AssetArc-green-light hover:bg-white/10 rounded-lg transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full py-2 text-white font-medium"
                        onClick={() =>
                          setOpenMobileDropdown(
                            openMobileDropdown === item.name ? null : item.name
                          )
                        }
                      >
                        {item.name}
                        <IconChevronDown
                          className={`w-4 h-4 transition-transform ${openMobileDropdown === item.name ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      {openMobileDropdown === item.name && (
                        <div className="pl-4 space-y-2 mt-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block py-2 text-white/70 hover:text-AssetArc-green-light"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 font-medium text-white hover:text-AssetArc-green-light"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                href="/lets-talk"
                className="inline-flex items-center gap-4 px-6 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-AssetArc-green-light hover:text-AssetArc-green-light transition-all duration-300 font-medium group w-fit"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-3 h-3 bg-AssetArc-green-accent rounded-full group-hover:animate-pulse"></div>
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
