import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Facebook, Linkedin, Instagram, Send } from 'lucide-react';

// Dynamically import BackToTopButton to reduce initial bundle
const BackToTopButton = dynamic(() => import('./BackToTopButton'), {
  loading: () => null
});

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
                <a href="tel:+919876543210" className="text-white font-montserrat text-base hover:text-AssetArc-green-light transition-colors duration-300 underline">
                  +91 9876543210
                </a>
                <a href="mailto:johndoe@gmail.com" className="text-white font-montserrat text-base hover:text-AssetArc-green-light transition-colors duration-300 underline">
                  johndoe@gmail.com
                </a>
              </div>
              <Link href="/contact" className="flex items-center gap-4 cursor-pointer group hover:text-AssetArc-green-light transition-colors duration-300">
                <span className="text-white font-montserrat text-base group-hover:text-AssetArc-green-light transition-colors duration-300">
                  Get in touch with us
                </span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:text-AssetArc-green-light transition-all duration-300" />
              </Link>
            </div>
          </FooterSection>

          {/* Important Link */}
          <FooterSection title="Important Link">
            <div className="space-y-4">
              <Link href="/services" className="block text-white font-work-sans text-base hover:text-AssetArc-green-light hover:translate-x-2 transition-all duration-300">
                Services
              </Link>
              <Link href="/about" className="block text-white font-work-sans text-base hover:text-AssetArc-green-light hover:translate-x-2 transition-all duration-300">
                About Us
              </Link>
              <Link href="/blog" className="block text-white font-work-sans text-base hover:text-AssetArc-green-light hover:translate-x-2 transition-all duration-300">
                Blog
              </Link>
              <Link href="/careers" className="block text-white font-work-sans text-base hover:text-AssetArc-green-light hover:translate-x-2 transition-all duration-300">
                Careers
              </Link>
              <Link href="/calculators" className="block text-white font-work-sans text-base hover:text-AssetArc-green-light hover:translate-x-2 transition-all duration-300">
                Calculators
              </Link>
              <Link href="/commission-disclosure" className="block text-white font-work-sans text-base hover:text-AssetArc-green-light hover:translate-x-2 transition-all duration-300">
                Commission Disclosure
              </Link>
            </div>
          </FooterSection>

          {/* Download */}
          <FooterSection title="Download">
            <div className="space-y-4">
              <a href="/CoC/revisedcoc.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 cursor-pointer group hover:text-AssetArc-green-light transition-colors duration-300">
                <span className="text-white font-montserrat text-base group-hover:text-AssetArc-green-light transition-colors duration-300">
                  Code of Conduct
                </span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:text-AssetArc-green-light transition-all duration-300" />
              </a>
            </div>
          </FooterSection>

          {/* Holidays Calendar */}
          <FooterSection title="Holidays Calendar">
            <div className="space-y-4">
              <Link href="/nse-holidays" className="block text-white hover:text-AssetArc-green-light hover:translate-x-2 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-between gap-4 p-3 rounded-md hover:bg-white/5 transition-colors duration-200">
                  <div>
                    <div className="text-white font-montserrat text-base group-hover:text-AssetArc-green-light">
                      NSE Holiday List 2026
                    </div>
                    <div className="text-white/70 text-xs mt-1 max-w-[220px]">
                      Republic Day — Jan 26, 2026 · Holi — Mar 03, 2026 · Good Friday — Apr 03, 2026
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-AssetArc-green-light group-hover:translate-x-1 transition-all" />
                </div>
              </Link>

              <Link href="/bse-holidays" className="block text-white hover:text-AssetArc-green-light hover:translate-x-2 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-between gap-4 p-3 rounded-md hover:bg-white/5 transition-colors duration-200">
                  <div>
                    <div className="text-white font-montserrat text-base group-hover:text-AssetArc-green-light">
                      BSE Holiday List 2026
                    </div>
                    <div className="text-white/70 text-xs mt-1 max-w-[220px]">
                      Republic Day — Jan 26, 2026 · Holi — Mar 03, 2026 · Christmas — Dec 25, 2026
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-AssetArc-green-light group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </div>
          </FooterSection>
        </div>

        {/* Back to top fixed button */}
        <BackToTopButton />

        {/* Social Media Links */}
        <div className="flex justify-center gap-8 mb-12 mt-20">
          <a href="https://www.facebook.com/assetarc" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-AssetArc-green-light hover:scale-125 hover:rotate-12 transition-all duration-300">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/company/assetarc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-AssetArc-green-light hover:scale-125 hover:rotate-12 transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="http://instagram.com/assetarc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-AssetArc-green-light hover:scale-125 hover:rotate-12 transition-all duration-300">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://t.me/assetarc" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="group text-white hover:text-AssetArc-green-light hover:scale-125 hover:rotate-12 transition-all duration-300">
            <Send className="w-6 h-6" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/50 mb-8"></div>

        {/* Bottom Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/terms-and-conditions" target="_blank" className="text-white hover:text-AssetArc-green-light font-montserrat text-xs leading-relaxed transition-colors duration-300">
            Terms and Conditions & Cancellation Policy
          </Link>
          <p className="text-white font-montserrat text-xs leading-relaxed">
            © 2026 AssetArc. All Rights Reserved.
          </p>
        </div>

        {/* Logo at bottom */}
        <div className="flex justify-center mt-12">
          <div className="hover:scale-105 transition-transform duration-300">
            <AssetArcLogo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
