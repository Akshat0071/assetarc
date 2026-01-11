'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { addQuery } from '@/lib/database/queries';
import { Facebook, Linkedin, Instagram, Send } from 'lucide-react';

/* ---------------- ICON COMPONENTS ---------------- */

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline mr-2">
    <path
      d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06691 2.16708 8.43376 2.48353C8.80061 2.79999 9.04207 3.23945 9.11999 3.72C9.23662 4.68007 9.47144 5.62273 9.81999 6.53C9.94454 6.88792 9.97366 7.27691 9.9039 7.65088C9.83415 8.02485 9.6682 8.36811 9.42499 8.64L8.08999 9.97C9.51355 12.4379 11.5621 14.4864 14.03 15.91L15.36 14.58C15.6319 14.3368 15.9751 14.1708 16.3491 14.1011C16.7231 14.0313 17.1121 14.0605 17.47 14.185C18.3773 14.5335 19.3199 14.7684 20.28 14.885C20.7658 14.9636 21.2094 15.2072 21.5265 15.5775C21.8437 15.9478 22.0122 16.4226 22 16.92Z"
      fill="#007D42"
    />
  </svg>
);

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

/* ---------------- LOGO BLOCK ---------------- */

const StockstrailLogoBW = () => (
  <div className="flex items-center group">
    {/* Mobile logo */}
    <Image
      src="/stockstrail_logo.gif"
      alt="Stockstrail Logo"
      width={96}
      height={96}
      className="w-20 h-20 xs:w-24 xs:h-24 sm:hidden group-hover:scale-110 transition-transform duration-500 object-contain"
      sizes="(max-width: 390px) 80px, (max-width: 640px) 96px, 0px"
      quality={90}
      priority
    />
    {/* Desktop logo */}
    <Image
      src="/1..gif"
      alt="Stockstrail Logo"
      width={200}
      height={200}
      className="hidden sm:block w-36 h-36 lg:w-36 lg:h-36 group-hover:scale-110 transition-transform duration-500 object-contain"
      sizes="(max-width: 768px) 144px, (max-width: 1024px) 192px, 300px"
      quality={90}
      priority
    />
    <div className="flex items-baseline">
      <span className="text-white font-product-sans text-4xl sm:text-5xl font-bold group-hover:text-stockstrail-green-light transition-colors duration-500">
        Stocks
      </span>
      <span className="text-white font-product-sans text-4xl sm:text-5xl font-normal group-hover:text-stockstrail-green-light transition-colors duration-500">
        trail
      </span>
    </div>
  </div>
);

/* ---------------- PAGE ---------------- */

export default function LetsTalk() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!form.name || !form.phone || !form.email || !form.service || !form.message) {
      setError('Please fill all fields.');
      return;
    }

    const phoneDigits = form.phone.replace(/\D/g, '');
    if (!/^[1-9]\d{9}$/.test(phoneDigits)) {
      setError('Please enter a valid 10-digit number that does not start with 0.');
      return;
    }

    if (form.message.trim().length < 20) {
      setError('Message should be at least 20 characters.');
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await addQuery({
        name: form.name,
        phone: phoneDigits,
        email: form.email,
        service: form.service,
        message: form.message,
      });
      if (error) throw error;

      // 2. Open WhatsApp with pre-filled message
      const whatsappNumber = '919736304663';
      const whatsappMessage = `*New Query from Stockstrail Website*
      
*Name:* ${form.name}
*Phone:* ${form.phone}
*Email:* ${form.email}
*Service:* ${form.service}
*Message:* ${form.message}`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      setSuccess('Thank you! We received your query. Opening WhatsApp...');
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (err) {
      console.error(err);
      const message =
        (err as any)?.message ||
        (typeof err === 'string' ? err : null) ||
        'Failed to submit. Please try again.';
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-4 pb-20 overflow-hidden">
        {/* soft glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[800px] h-[800px] bg-stockstrail-bg-light rounded-full blur-3xl opacity-40 left-1/2 -translate-x-1/2 top-24" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* TOP CENTER LOGO */}
          <div className="flex justify-center mb-8">
            <StockstrailLogoBW />
          </div>

          {/* GRID: LEFT CONTENT / RIGHT FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-8 lg:gap-12 items-start">
            {/* LEFT: heading + text + cards */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                  Let&apos;s plan your
                  <br className="hidden sm:block" /> next financial move together
                </h1>
                <p className="mt-8 mb-8 text-white/70 max-w-xl text- center">
                  Whether you are looking for mutual funds, FDs, insurance, or loans,
                  we help you understand your options and choose what fits your risk profile and goals.
                  Share a bit about your needs and we usually respond the same day.
                </p>
              </div>

              {/* CONTACT CARDS (similar to reference layout) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                {/* Phone */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 hover:border-stockstrail-green-light hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1.5">
                    Phone
                  </p>
                  <a
                    href="tel:+919736304663"
                    className="text-white text-sm font-medium flex items-center"
                  >
                    <PhoneIcon />
                    +91 97363-04663
                  </a>
                  <p className="text-white/50 text-xs mt-1">Available 9am – 8pm IST</p>
                </div>

                {/* WhatsApp */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 hover:border-stockstrail-green-light hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1.5">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919736304663"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-medium flex items-center"
                  >
                    <WhatsAppIcon />
                    +91 97363-04663
                  </a>
                  <p className="text-white/50 text-xs mt-1">Quick questions or follow-ups</p>
                </div>

                {/* Email */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 hover:border-stockstrail-green-light hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all mt-4">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1.5">
                    Email
                  </p>
                  <a
                    href="mailto:connect@stockstrail.in"
                    className="text-white text-sm font-medium flex items-center break-all"
                  >
                    <EmailIcon />
                    connect@stockstrail.in
                  </a>
                  <p className="text-white/50 text-xs mt-1">Usually replies within 12 hours</p>
                </div>

                {/* Socials card */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 hover:border-stockstrail-green-light hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all mt-4">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-2">
                    Socials
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.facebook.com/people/Stockstrail-Stockstrail/100089234534696/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-stockstrail-green-light hover:scale-110 transition-transform"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/stockstrail/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-stockstrail-green-light hover:scale-110 transition-transform"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="http://instagram.com/stockstrail/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-stockstrail-green-light hover:scale-110 transition-transform"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://t.me/stockstrail"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-stockstrail-green-light hover:scale-110 transition-transform"
                    >
                      <Send className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-white/50 text-xs mt-1.5">Follow us for updates and insights</p>
                </div>

                {/* Address */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 hover:border-stockstrail-green-light hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all sm:col-span-2 mt-4">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1.5">
                    Office
                  </p>
                  <a
                    href="https://maps.google.com/maps?q=Near+Punjab+And+Sind+Bank,+V.P.O.+Chintpurni+Teh:Amb,+Distt.-+Una,+Himachal+Pradesh+177110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm leading-snug flex items-start"
                  >
                    <span className="mr-2 mt-0.5">
                      <LocationIcon />
                    </span>
                    Near Punjab And Sind Bank,
                    <br /> V.P.O. Chintpurni Teh: Amb,
                    <br /> Distt. Una, Himachal Pradesh (177110)
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: form card (project intake style) */}
            <div className="w-full bg-white/10 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:border-stockstrail-green-light hover:shadow-[0_0_40px_rgba(0,255,151,0.25)] transition-all">
              <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-2 text-center">
                Query Intake
              </p>
              <h2 className="text-2xl sm:text-3xl font-product-sans text-white mb-2 text-center">
                Tell us about your requirement
              </h2>
              <p className="text-white/60 mb-6 text-sm text-center">
                Share a bit about your goals, risk appetite, and the service you are interested in.
                We read everything carefully and respond with clear next steps.
              </p>

              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block text-white/80 mb-2">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-stockstrail-green-light"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    required
                    inputMode="numeric"
                    maxLength={10}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-stockstrail-green-light"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-stockstrail-green-light"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">
                    Service<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={onChange}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-stockstrail-green-light"
                  >
                    <option value="" className="bg-[#0b1c1b]">
                      Select a service
                    </option>
                    <option value="Mutual Funds" className="bg-[#0b1c1b]">
                      Mutual Funds
                    </option>
                    <option value="Fixed Deposit" className="bg-[#0b1c1b]">
                      Fixed Deposit
                    </option>
                    <option value="Insurance" className="bg-[#0b1c1b]">
                      Insurance
                    </option>
                    <option value="Loan" className="bg-[#0b1c1b]">
                      Loan
                    </option>
                    <option value="Others" className="bg-[#0b1c1b]">
                      Others
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 mb-2">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={4}
                    required
                    minLength={20}
                    className="w-full px-3 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-stockstrail-green-light"
                  />
                </div>

                {error && <div className="text-red-500 text-sm">{error}</div>}
                {success && <div className="text-green-400 text-sm">{success}</div>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 px-6 py-3 bg-white/5 border border-white/30 rounded-full text-white text-sm font-medium hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting…' : 'Submit query'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
