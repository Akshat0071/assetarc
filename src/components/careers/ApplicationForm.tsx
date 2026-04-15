'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle, Upload, Loader2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentLocation: string;
  linkedinUrl: string;
  totalExperience: string;
  currentCompany: string;
  expectedCTC: string;
  noticePeriod: string;
  applyingFor: string;
  whyJoin: string;
}

const INITIAL_FORM: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  currentLocation: '',
  linkedinUrl: '',
  totalExperience: '',
  currentCompany: '',
  expectedCTC: '',
  noticePeriod: '',
  applyingFor: '',
  whyJoin: '',
};

export default function ApplicationForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [step, setStep] = useState(1);
  const [resumeName, setResumeName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep1 = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.firstName.trim()) errs.firstName = 'Required';
    if (!form.lastName.trim()) errs.lastName = 'Required';
    if (!form.email.trim()) errs.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.phone.trim()) errs.phone = 'Required';
    else if (!/^\+?[\d\s-]{10,}$/.test(form.phone)) errs.phone = 'Invalid phone';
    if (!form.currentLocation.trim()) errs.currentLocation = 'Required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.totalExperience.trim()) errs.totalExperience = 'Required';
    if (!form.applyingFor.trim()) errs.applyingFor = 'Required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    if (step === 2 && validateStep2()) setStep(3);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="application-form" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur border border-AssetArc-green-light/30 rounded-2xl p-10 sm:p-14">
            <CheckCircle className="w-16 h-16 text-AssetArc-green-light mx-auto mb-6" />
            <h2 className="font-product-sans text-3xl text-white mb-4">
              Application Submitted!
            </h2>
            <p className="text-white/60 font-work-sans text-lg leading-relaxed mb-2">
              Thank you, {form.firstName}! We&apos;ve received your application for{' '}
              <span className="text-AssetArc-green-light font-medium">{form.applyingFor || 'the role'}</span>.
            </p>
            <p className="text-white/50 font-work-sans text-base">
              Our team will review your profile and get back to you within 5-7 business days.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const inputCls =
    'w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 font-work-sans text-sm hover:border-AssetArc-green-light/30 focus:border-AssetArc-green-light focus:ring-1 focus:ring-AssetArc-green-light/30 focus:outline-none transition-colors duration-200';
  const labelCls = 'block text-white/60 text-xs font-work-sans mb-1.5 uppercase tracking-wider';
  const errorCls = 'text-red-400 text-xs mt-1 font-work-sans';

  return (
    <section id="application-form" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
            <span className="text-white">Apply </span>
            <span className="gradient-text">Now</span>
          </h2>
          <p className="text-white/60 text-lg font-work-sans">
            Take the first step towards your career at AssetArc.
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-product-sans font-bold transition-all duration-300 ${s <= step
                    ? 'bg-AssetArc-green-light text-AssetArc-bg shadow-[0_0_12px_rgba(0,255,151,0.3)]'
                    : 'bg-white/10 text-white/40'
                  }`}
              >
                {s < step ? '✓' : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-16 sm:w-24 h-0.5 transition-colors duration-300 ${s < step ? 'bg-AssetArc-green-light/60' : 'bg-white/10'
                    }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-5 animate-fade-in">
              <h3 className="font-product-sans text-xl text-white mb-6">Personal Information</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>First Name *</label>
                  <input
                    type="text"
                    className={inputCls}
                    placeholder="John"
                    value={form.firstName}
                    onChange={(e) => update('firstName', e.target.value)}
                  />
                  {errors.firstName && <p className={errorCls}>{errors.firstName}</p>}
                </div>
                <div>
                  <label className={labelCls}>Last Name *</label>
                  <input
                    type="text"
                    className={inputCls}
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={(e) => update('lastName', e.target.value)}
                  />
                  {errors.lastName && <p className={errorCls}>{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Email *</label>
                  <input
                    type="email"
                    className={inputCls}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                  {errors.email && <p className={errorCls}>{errors.email}</p>}
                </div>
                <div>
                  <label className={labelCls}>Phone *</label>
                  <input
                    type="tel"
                    className={inputCls}
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                  {errors.phone && <p className={errorCls}>{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Current Location *</label>
                  <input
                    type="text"
                    className={inputCls}
                    placeholder="Mumbai, Maharashtra"
                    value={form.currentLocation}
                    onChange={(e) => update('currentLocation', e.target.value)}
                  />
                  {errors.currentLocation && <p className={errorCls}>{errors.currentLocation}</p>}
                </div>
                <div>
                  <label className={labelCls}>LinkedIn Profile</label>
                  <input
                    type="url"
                    className={inputCls}
                    placeholder="https://linkedin.com/in/..."
                    value={form.linkedinUrl}
                    onChange={(e) => update('linkedinUrl', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Professional Details */}
          {step === 2 && (
            <div className="space-y-5 animate-fade-in">
              <h3 className="font-product-sans text-xl text-white mb-6">Professional Details</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Applying For *</label>
                  <input
                    id="applying-for"
                    type="text"
                    className={inputCls}
                    placeholder="e.g. Senior Financial Advisor"
                    value={form.applyingFor}
                    onChange={(e) => update('applyingFor', e.target.value)}
                  />
                  {errors.applyingFor && <p className={errorCls}>{errors.applyingFor}</p>}
                </div>
                <div>
                  <label className={labelCls}>Total Experience (years) *</label>
                  <input
                    type="text"
                    className={inputCls}
                    placeholder="e.g. 3"
                    value={form.totalExperience}
                    onChange={(e) => update('totalExperience', e.target.value)}
                  />
                  {errors.totalExperience && <p className={errorCls}>{errors.totalExperience}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Current Company</label>
                  <input
                    type="text"
                    className={inputCls}
                    placeholder="Company name"
                    value={form.currentCompany}
                    onChange={(e) => update('currentCompany', e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelCls}>Expected CTC (LPA)</label>
                  <input
                    type="text"
                    className={inputCls}
                    placeholder="e.g. 10"
                    value={form.expectedCTC}
                    onChange={(e) => update('expectedCTC', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className={labelCls}>Notice Period (days)</label>
                <input
                  type="text"
                  className={inputCls}
                  placeholder="e.g. 30"
                  value={form.noticePeriod}
                  onChange={(e) => update('noticePeriod', e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 3: Resume & Cover Letter */}
          {step === 3 && (
            <div className="space-y-5 animate-fade-in">
              <h3 className="font-product-sans text-xl text-white mb-6">Resume & Motivation</h3>

              {/* Resume upload */}
              <div>
                <label className={labelCls}>Resume / CV *</label>
                <label className="flex items-center justify-center gap-3 w-full border-2 border-dashed border-white/20 rounded-xl py-8 cursor-pointer hover:border-AssetArc-green-light/40 hover:bg-AssetArc-green-light/5 transition-all duration-200">
                  <Upload className="w-5 h-5 text-white/50" />
                  <span className="text-white/50 font-work-sans text-sm">
                    {resumeName || 'Click to upload your resume (PDF, max 5MB)'}
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setResumeName(file.name);
                    }}
                  />
                </label>
              </div>

              {/* Motivation */}
              <div>
                <label className={labelCls}>Why do you want to join AssetArc?</label>
                <textarea
                  className={`${inputCls} min-h-[120px] resize-y`}
                  placeholder="Tell us what excites you about AssetArc and how you'd like to contribute..."
                  value={form.whyJoin}
                  onChange={(e) => update('whyJoin', e.target.value)}
                  maxLength={500}
                />
                <p className="text-white/30 text-xs font-work-sans mt-1 text-right">
                  {form.whyJoin.length}/500
                </p>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center gap-2 text-white/60 font-work-sans text-sm hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Previous
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn-primary rounded-full px-8 py-3 text-sm font-work-sans font-semibold inline-flex items-center gap-2"
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary rounded-full px-8 py-3 text-sm font-work-sans font-semibold inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
