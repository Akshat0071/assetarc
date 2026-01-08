import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Facebook, Linkedin, Instagram, Send } from 'lucide-react';

// Dynamically import BackToTopButton to reduce initial bundle
const BackToTopButton = dynamic(() => import('./BackToTopButton'), {
  loading: () => null
});

const StockstrailLogo = () => (
  <div className="flex items-center gap-2.5">
    <svg
      width="32"
      height="35"
      viewBox="0 0 32 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect
        x="3.74097"
        y="16.0264"
        width="20.8942"
        height="3.71985"
        fill="url(#paint0_linear)"
      />
      <path
        d="M1.15294 18.553C0.922293 18.3223 0.923909 17.9479 1.15654 17.7192L15.5948 3.52791C16.0954 3.03584 16.8991 3.0393 17.3955 3.53568L18.6805 4.82068C19.183 5.32315 19.1794 6.13889 18.6726 6.63701L6.52575 18.5761C5.032 20.0444 2.63398 20.034 1.15294 18.553Z"
        fill="#00D873"
      />
      <path
        d="M20.498 0.96257C20.9132 0.86584 21.2857 1.23841 21.189 1.65361L19.7088 8.0073C19.6064 8.447 19.0607 8.6029 18.7414 8.2837L13.868 3.41016C13.5487 3.09092 13.7046 2.54519 14.1443 2.44276L20.498 0.96257Z"
        fill="#00D873"
      />
      <path
        d="M30.5214 17.0648C30.6657 17.209 30.6647 17.4433 30.5192 17.5863L15.742 32.1108C15.3414 32.5044 14.6985 32.5017 14.3014 32.1046L12.6547 30.4578C12.2527 30.0559 12.2555 29.4033 12.6609 29.0048L24.8337 17.0402C26.415 15.4859 28.9536 15.4969 30.5214 17.0648Z"
        fill="#00D873"
      />
      <path
        d="M11.0196 34.4984C10.6044 34.5951 10.2318 34.2225 10.3286 33.8073L11.8087 27.4536C11.9112 27.0139 12.4569 26.858 12.7761 27.1773L17.6496 32.0508C17.9688 32.37 17.8129 32.9157 17.3733 33.0182L11.0196 34.4984Z"
        fill="#00D873"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-8.8767"
          y1="14.2993"
          x2="25.1661"
          y2="20.3933"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D873" />
          <stop offset="1" stopColor="#00D873" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <div className="flex items-baseline">
      <span className="text-white font-product-sans text-2xl font-normal">Stocks</span>
      <span className="text-white font-product-sans text-2xl font-normal">trail</span>
    </div>
  </div>
);

const FooterSection = ({
  title,
  children,
  className = ""
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`flex flex-col gap-4 ${className}`}>
    <h3 className="text-white font-montserrat font-semibold text-lg uppercase">
      {title}
    </h3>
    <div className="flex flex-col gap-4">
      {children}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-black/75 py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Our Service */}
          <FooterSection title="Our Service">
            <div className="space-y-4">
              <p className="text-white font-montserrat text-base leading-relaxed max-w-none">
                Mon-Fri 7 a.m. to 10 p.m. Sat. and Sun. 8 a.m. to 6 p.m.
              </p>
              <p className="text-white font-montserrat text-base">
                Financial advice Monday to Friday, 8 a.m. to 6 p.m.
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:+919736304663" className="text-white font-montserrat text-base hover:text-stockstrail-green-light transition-colors duration-300 underline">
                  +91 97363-04663
                </a>
                <a href="mailto:connect@stockstrail.in" className="text-white font-montserrat text-base hover:text-stockstrail-green-light transition-colors duration-300 underline">
                  connect@stockstrail.in
                </a>
              </div>
              <Link href="/contact" className="flex items-center gap-4 cursor-pointer group hover:text-stockstrail-green-light transition-colors duration-300">
                <span className="text-white font-montserrat text-base group-hover:text-stockstrail-green-light transition-colors duration-300">
                  Get in touch with us
                </span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:text-stockstrail-green-light transition-all duration-300" />
              </Link>
            </div>
          </FooterSection>

          {/* Important Link */}
          <FooterSection title="Important Link">
            <div className="space-y-4">
              <Link href="/services" className="block text-white font-work-sans text-base hover:text-stockstrail-green-light hover:translate-x-2 transition-all duration-300">
                Services
              </Link>
              <Link href="/blog" className="block text-white font-work-sans text-base hover:text-stockstrail-green-light hover:translate-x-2 transition-all duration-300">
                Blog
              </Link>
              <Link href="/calculators" className="block text-white font-work-sans text-base hover:text-stockstrail-green-light hover:translate-x-2 transition-all duration-300">
                Calculators
              </Link>
              <Link href="/commission-disclosure" className="block text-white font-work-sans text-base hover:text-stockstrail-green-light hover:translate-x-2 transition-all duration-300">
                Commission Disclosure
              </Link>
            </div>
          </FooterSection>

          {/* Download */}
          <FooterSection title="Download">
            <div className="space-y-4">
              <a href="/CoC/revisedcoc.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 cursor-pointer group hover:text-stockstrail-green-light transition-colors duration-300">
                <span className="text-white font-montserrat text-base group-hover:text-stockstrail-green-light transition-colors duration-300">
                  Code of Conduct
                </span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:text-stockstrail-green-light transition-all duration-300" />
              </a>
            </div>
          </FooterSection>

          {/* Holidays Calendar */}
          <FooterSection title="Holidays Calendar">
            <div className="space-y-4">
              <Link href="/nse-holidays" className="block text-white hover:text-stockstrail-green-light hover:translate-x-2 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-between gap-4 p-3 rounded-md hover:bg-white/5 transition-colors duration-200">
                  <div>
                    <div className="text-white font-montserrat text-base group-hover:text-stockstrail-green-light">
                      NSE Holiday List 2026
                    </div>
                    <div className="text-white/70 text-xs mt-1 max-w-[220px]">
                        Republic Day — Jan 26, 2026 · Holi — Mar 03, 2026 · Good Friday — Apr 03, 2026
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-stockstrail-green-light group-hover:translate-x-1 transition-all" />
                </div>
              </Link>

              <Link href="/bse-holidays" className="block text-white hover:text-stockstrail-green-light hover:translate-x-2 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-between gap-4 p-3 rounded-md hover:bg-white/5 transition-colors duration-200">
                  <div>
                    <div className="text-white font-montserrat text-base group-hover:text-stockstrail-green-light">
                      BSE Holiday List 2026
                    </div>
                    <div className="text-white/70 text-xs mt-1 max-w-[220px]">
                      Republic Day — Jan 26, 2026 · Holi — Mar 03, 2026 · Christmas — Dec 25, 2026
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-stockstrail-green-light group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </div>
          </FooterSection>
        </div>

        {/* Back to top fixed button */}
        <BackToTopButton />

        {/* Social Media Links */}
        <div className="flex justify-center gap-8 mb-12 mt-20">
          <a href="https://www.facebook.com/people/Stockstrail-Stockstrail/100089234534696/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-stockstrail-green-light hover:scale-125 hover:rotate-12 transition-all duration-300">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/company/stockstrail/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-stockstrail-green-light hover:scale-125 hover:rotate-12 transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="http://instagram.com/stockstrail/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-stockstrail-green-light hover:scale-125 hover:rotate-12 transition-all duration-300">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://t.me/stockstrail" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="group text-white hover:text-stockstrail-green-light hover:scale-125 hover:rotate-12 transition-all duration-300">
            <Send className="w-6 h-6" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/50 mb-8"></div>

        {/* Bottom Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/terms-and-conditions" target="_blank" className="text-white hover:text-stockstrail-green-light font-montserrat text-xs leading-relaxed transition-colors duration-300">
            Terms and Conditions & Cancellation Policy
          </Link>
          <p className="text-white font-montserrat text-xs leading-relaxed">
            © 2026 Stockstrail. All Rights Reserved.
          </p>
        </div>

        {/* Logo at bottom */}
        <div className="flex justify-center mt-12">
          <div className="hover:scale-105 transition-transform duration-300">
            <StockstrailLogo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
