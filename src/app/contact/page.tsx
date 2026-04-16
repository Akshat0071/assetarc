"use client";

import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { Facebook, Linkedin, Instagram, Send } from "lucide-react";

/* ---------------- ICON COMPONENTS ---------------- */

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline mr-2">
    <path
      d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06691 2.16708 8.43376 2.48353C8.80061 2.79999 9.04207 3.23945 9.11999 3.72C9.23662 4.68007 9.47144 5.62273 9.81999 6.53C9.94454 6.88792 9.97366 7.27691 9.9039 7.65088C9.83415 8.02485 9.6682 8.36811 9.42499 8.64L8.08999 9.97C9.51355 12.4379 11.5621 14.4864 14.03 15.91L15.36 14.58C15.6319 14.3368 15.9751 14.1708 16.3491 14.1011C16.7231 14.0313 17.1121 14.0605 17.47 14.185C18.3773 14.5335 19.3199 14.7684 20.28 14.885C20.7658 14.9636 21.2094 15.2072 21.5265 15.5775C21.8437 15.9478 22.0122 16.4226 22 16.92Z"
      fill="#007D42"
    />
  </svg>
);

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline mr-2">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="#25D366" />
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline mr-2">
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      fill="#4285F4"
    />
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline mr-2">
    <path
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      fill="#EA4335"
    />
  </svg>
);

const TelegramIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline mr-2">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.9 1.21-5.38 3.56-.51.35-.97.52-1.38.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.4-.88.03-.24.37-.49 1.02-.74 3.98-1.73 6.64-2.87 7.98-3.43 3.79-1.57 4.58-1.84 5.09-1.84.12 0 .38.03.55.18.14.12.18.28.2.39-.01.13.01.55.01.55z"
      fill="#0088CC"
    />
  </svg>
);

/* ---------------- LOGO BLOCK ---------------- */

const AssetArcLogoBW = () => (
  <div className="flex items-center gap-4 sm:gap-8 group">
    {/* Mobile optimized logo for Android & iPhone */}
    <Image
      src="/assetarclogo.png?v=2"
      alt="AssetArc Logo"
      width={96}
      height={96}
      className="w-20 h-20 xs:w-24 xs:h-24 sm:hidden group-hover:scale-110 transition-transform duration-500 object-contain"
      sizes="(max-width: 390px) 80px, (max-width: 640px) 96px, 0px"
      quality={90}
      priority
      unoptimized
    />

    {/* Desktop logo */}
    <Image
      src="/assetarclogo.png?v=2"
      alt="AssetArc Logo"
      width={300}
      height={300}
      className="hidden sm:block w-36 h-36 lg:w-52 lg:h-52 group-hover:scale-110 transition-transform duration-500 object-contain"
      sizes="(max-width: 768px) 144px, (max-width: 1024px) 192px, 300px"
      quality={90}
      priority
      unoptimized
    />

    <div className="flex items-baseline">
      <span className="text-white font-product-sans text-4xl sm:text-7xl font-bold group-hover:text-AssetArc-green-light transition-colors duration-500">
        Asset
      </span>
      <span className="text-white font-product-sans text-4xl sm:text-7xl font-normal group-hover:text-AssetArc-green-light transition-colors duration-500">
        Arc
      </span>
    </div>
  </div>
);

/* ---------------- MAIN CONTACT PAGE ---------------- */

const Contact = () => {
  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-20">

        {/* Background Floating Animated Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-AssetArc-green-light/30 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-AssetArc-green-accent/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-10 w-5 h-5 bg-AssetArc-green-light/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-5 w-3 h-3 bg-AssetArc-green-accent/30 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/3 right-5 w-4 h-4 bg-white/10 rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto relative">

          {/* MOBILE LAYOUT */}
          <div className="lg:hidden space-y-12">

            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 hover:scale-105 transition-transform duration-500">
                <AssetArcLogoBW />
              </div>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-white/80 text-xl mb-4 group-hover:text-AssetArc-green-light transition-colors duration-300">Get in touch</h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">We welcome your inquiries by phone or e-mail</p>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-6 text-white/90">
              <div className="group">
                <h2 className="text-white text-sm uppercase tracking-widest mb-2 group-hover:text-AssetArc-green-light transition-colors duration-300">Address</h2>

                <a
                  href="https://maps.google.com/maps?q=Near+Punjab+And+Sind+Bank,+V.P.O.+Chintpurni+Teh:Amb,+Distt.-+Una,+Himachal+Pradesh+177110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-AssetArc-green-light block p-3 rounded-lg transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)]"
                >
                  <LocationIcon />
                  Near Punjab And Sind Bank,<br /> V.P.O. Chintpurni Teh:Amb,<br /> Distt.- Una, Himachal Pradesh (177110)
                </a>
              </div>

              {/* Email */}
              <div className="group">
                <h2 className="text-white text-sm uppercase tracking-widest mb-2">Email</h2>
                <a
                  href="mailto:akshatbansa04@gmail.com"
                  className="underline block p-3 rounded-lg hover:text-AssetArc-green-light hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,255,151,0.2)] transition-all duration-300"
                >
                  <EmailIcon /> akshatbansa04@gmail.com
                </a>
              </div>

              {/* Socials */}
              <div className="group">
                <h2 className="text-white text-sm uppercase tracking-widest mb-2">Socials</h2>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <a href="https://www.facebook.com/people/AssetArc/100089234534696/" target="_blank" className="hover:text-AssetArc-green-light hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/company/assetarc/" target="_blank" className="hover:text-AssetArc-green-light hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="http://instagram.com/assetarc/" target="_blank" className="hover:text-AssetArc-green-light hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://t.me/assetarc" target="_blank" className="hover:text-AssetArc-green-light hover:scale-110 transition-transform">
                    <Send className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Call & WhatsApp */}
            <div className="space-y-6 text-white/90">
              <div className="group">
                <h2 className="text-white text-sm uppercase tracking-widest mb-2">Call Us</h2>
                <a
                  href="tel:+918219890171"
                  className="underline block p-2 rounded-lg hover:text-AssetArc-green-light hover:bg-white/5 hover:scale-105 transition-all duration-300"
                >
                  <PhoneIcon /> +91 8219890171
                </a>
              </div>

              <div className="group">
                <h2 className="text-white text-sm uppercase tracking-widest mb-2">WhatsApp</h2>
                <a
                  href="https://wa.me/918219890171"
                  target="_blank"
                  className="underline block p-2 rounded-lg hover:text-AssetArc-green-light hover:bg-white/5 hover:scale-105 transition-all duration-300"
                >
                  <WhatsAppIcon /> +91 8219890171
                </a>
              </div>
            </div>
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden lg:block relative min-h-[480px]">

            {/* Top Left */}
            <div className="absolute top-0 left-0 space-y-6 text-white/90 max-w-sm">
              {/* Address */}
              <div>
                <h2 className="text-white text-sm uppercase tracking-widest mb-2">Address</h2>
                <a
                  href="https://maps.google.com/maps?q=Near+Punjab+And+Sind+Bank,+V.P.O.+Chintpurni+Teh:Amb,+Distt.-+Una,+Himachal+Pradesh+177110"
                  target="_blank"
                  className="block p-3 rounded-lg hover:bg-white/5 hover:text-AssetArc-green-light transition-all"
                >
                  <LocationIcon />
                  Near Punjab And Sind Bank,<br /> V.P.O. Chintpurni Teh:Amb,<br /> Distt.- Una, Himachal Pradesh (177110)
                </a>
              </div>

              {/* Email */}
              <div>
                <h2 className="text-white text-sm uppercase tracking-widest mb-2">Email</h2>
                <a
                  href="mailto:connect@assetarc.in"
                  className="underline block p-3 rounded-lg hover:bg-white/5 hover:text-AssetArc-green-light transition-all"
                >
                  <EmailIcon /> connect@assetarc.in
                </a>
              </div>

              {/* Socials */}
              <div>
                <h2 className="text-white text-sm uppercase tracking-widest mb-2">Socials</h2>
                <div className="flex items-center gap-4 p-3">
                  <a href="https://www.facebook.com/people/AssetArc/100089234534696/" target="_blank" className="hover:text-AssetArc-green-light hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/company/assetarc/" target="_blank" className="hover:text-AssetArc-green-light hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="http://instagram.com/assetarc/" target="_blank" className="hover:text-AssetArc-green-light hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://t.me/assetarc" target="_blank" className="hover:text-AssetArc-green-light hover:scale-110 transition-transform">
                    <Send className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Center Logo */}
            <div className="absolute top-1/2 left-[53%] -translate-x-1/2 -translate-y-1/2 text-center">
              <AssetArcLogoBW />
              <h3 className="text-white/80 text-xl mt-6 mb-4 group-hover:text-AssetArc-green-light transition-colors duration-300">Get in touch</h3>
              <p className="text-center text-white/60 group-hover:text-white/80 transition-colors duration-300">We welcome your inquiries by phone or e-mail</p>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0 space-y-6 text-white/90 max-w-sm">
              <div>
                <h2 className="text-white text-sm uppercase tracking-widest mb-2">Call Us</h2>
                <a
                  href="tel:+919736304663"
                  className="underline block p-2 rounded-lg hover:bg-white/5 hover:text-AssetArc-green-light transition-all"
                >
                  <PhoneIcon /> +91 97363-04663
                </a>
              </div>

              <div>
                <h2 className="text-white text-sm uppercase tracking-widest mb-2">WhatsApp</h2>
                <a
                  href="https://wa.me/919736304663"
                  target="_blank"
                  className="underline block p-2 rounded-lg hover:bg-white/5 hover:text-AssetArc-green-light transition-all"
                >
                  <WhatsAppIcon /> +91 97363-04663
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
