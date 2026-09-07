'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  HeartHandshake,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Award,
  Users,
  Calendar,
  ArrowRight,
} from 'lucide-react';

import { sendToGoogleSheet } from '@/lib/googleSheet';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    motivation: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const validateField = (field: string, value: string): string => {
    const trimmed = value.trim();
    if (field === 'fullName') {
      if (!trimmed) return 'Full name is required.';
      if (trimmed.length < 3) return 'Full name must be at least 3 characters.';
      if (!/^[a-zA-Z\s.'-]{3,50}$/.test(trimmed)) return 'Enter a valid name (letters only).';
    }
    if (field === 'email') {
      if (!trimmed) return 'Email address is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Enter a valid email address.';
    }
    if (field === 'phone') {
      if (!trimmed) return 'Phone number is required.';
      if (trimmed.length !== 10) return 'Phone number must be exactly 10 digits.';
      if (!/^[6-9]\d{9}$/.test(trimmed)) return 'Phone number must start with 6, 7, 8, or 9.';
    }
    if (field === 'city') {
      if (!trimmed) return 'City / Location is required.';
    }
    return '';
  };

  const handleInputChange = (field: string, rawValue: string) => {
    let value = rawValue;
    if (field === 'phone') {
      value = rawValue.replace(/\D/g, '');
    }
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (touched[field] || submitAttempted) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, formData[field as keyof typeof formData]),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    const nameErr = validateField('fullName', formData.fullName);
    const emailErr = validateField('email', formData.email);
    const phoneErr = validateField('phone', formData.phone);
    const cityErr = validateField('city', formData.city);

    setErrors({ fullName: nameErr, email: emailErr, phone: phoneErr, city: cityErr });
    setTouched({ fullName: true, email: true, phone: true, city: true });

    if (nameErr || emailErr || phoneErr || cityErr) {
      return;
    }

    setIsSubmitted(true);
    await sendToGoogleSheet({
      formType: 'volunteer',
      ...formData,
    });
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        motivation: '',
      });
      setErrors({});
      setTouched({});
      setSubmitAttempted(false);
    }, 5000);
  };

  return (
    <div className="bg-transparent font-body min-h-screen relative overflow-x-hidden">
      {/* Fixed Background Overlay */}
      <div
        suppressHydrationWarning
        className="fixed inset-0 -z-40 bg-[#FAF5EF] bg-cover bg-center bg-fixed bg-no-repeat pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.55), rgba(250, 245, 239, 0.70)), url('/images/con-6.webp')",
        }}
      />

      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-b from-[#351A4A] via-[#2A133B] to-[#200D2E] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-16 sm:pb-20 text-center text-white overflow-hidden">
        {/* Left Side Accent Image */}
        <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 left-0 -translate-y-1/2 opacity-60 sm:opacity-75 pointer-events-none w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-[340px] lg:h-[340px] -translate-x-1/4 sm:translate-x-0">
          <Image
            src="/images/test-1.webp"
            alt="Left Sacred Ornament"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Right Side Accent Image */}
        <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 right-0 -translate-y-1/2 opacity-60 sm:opacity-75 pointer-events-none w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-[340px] lg:h-[340px] translate-x-1/4 sm:translate-x-0 scale-x-[-1]">
          <Image
            src="/images/test-1.webp"
            alt="Right Sacred Ornament"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Background Mandala SVG */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
          <svg width="550" height="550" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.8">
            <circle cx="100" cy="100" r="95" strokeWidth="0.75" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="85" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="75" strokeWidth="0.75" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest shadow-md backdrop-blur-sm"
          >
            <HeartHandshake className="w-3.5 h-3.5 text-[#DFC47A]" />
            SACRED SEVAK SERVICE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Become a <span className="text-[#DFC47A] italic font-serif">Volunteer (Sevak)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#F8F2E8] text-base sm:text-lg font-serif italic max-w-2xl mx-auto leading-relaxed"
          >
            Serve humanity and participate in spreading Organ Meditation, Shambhala Gatherings, and Sacred Transformation. Offer your time, skills, and devotion.
          </motion.p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-[1px] w-12 bg-[#DFC47A]/60" />
            <span className="text-[#DFC47A] text-xs">❖</span>
            <div className="h-[1px] w-12 bg-[#DFC47A]/60" />
          </div>
        </div>

        {/* Bottom Curved Edge */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#FAF4EB]" fill="currentColor">
            <path d="M0,0 C300,50 900,50 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </header>

      {/* SEVAK PILLARS & ENROLLMENT SECTION */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          


          {/* VOLUNTEER REGISTRATION FORM CARD */}
          <div className="luxury-card rounded-[32px] p-8 sm:p-12 md:p-14 border-2 border-[#DFC47A]/60 bg-gradient-to-br from-white via-[#FAF5EF]/95 to-[#F8F2E8]/95 shadow-xl relative overflow-hidden space-y-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] text-xs font-extrabold uppercase tracking-widest shadow-md">
                <HeartHandshake className="w-4 h-4 text-[#DFC47A]" />
                JOIN OUR VOLUNTEER FAMILY
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#352043] leading-tight">
                Sevak Registration <span className="text-[#8C5D00] font-serif italic">Form</span>
              </h2>

              <p className="text-[#5E5865] text-sm sm:text-base font-serif italic leading-relaxed">
                Please fill out your details below. Our volunteer coordination team will contact you for upcoming sessions and retreats.
              </p>
            </div>

            {/* Success Alert */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-900 text-sm font-semibold flex items-center gap-3.5 shadow-sm max-w-2xl mx-auto"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-bold text-emerald-950 text-base">Volunteer Application Received!</p>
                  <p className="text-xs text-emerald-800 font-normal mt-0.5">
                    Thank you for offering your sacred service. Our Sevak team will get in touch with you shortly.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Error List Alert Banner */}
            {submitAttempted && Object.values(errors).some((err) => err) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-red-50 border border-red-300 text-red-900 text-xs font-semibold flex items-start gap-3 max-w-2xl mx-auto"
              >
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-red-950 text-sm">Please correct the error(s) below:</p>
                  <ul className="list-disc list-inside mt-1 space-y-0.5 text-red-800 text-[11px]">
                    {Object.values(errors)
                      .filter(Boolean)
                      .map((err, idx) => (
                        <li key={idx}>{err}</li>
                      ))}
                  </ul>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto" noValidate>
              
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5 font-body">
                    <User className="w-3.5 h-3.5 text-[#8C5D00]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    onBlur={() => handleBlur('fullName')}
                    placeholder="Enter your complete name"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm font-medium transition-colors bg-white focus:outline-none ${
                      touched.fullName && errors.fullName
                        ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                        : 'border-[#DFC47A]/60 focus:border-[#8C5D00]'
                    }`}
                  />
                  {touched.fullName && errors.fullName && (
                    <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5 font-body">
                    <Mail className="w-3.5 h-3.5 text-[#8C5D00]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="your.name@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm font-medium transition-colors bg-white focus:outline-none ${
                      touched.email && errors.email
                        ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                        : 'border-[#DFC47A]/60 focus:border-[#8C5D00]'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5 font-body">
                    <Phone className="w-3.5 h-3.5 text-[#8C5D00]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    onBlur={() => handleBlur('phone')}
                    placeholder="Enter 10-digit mobile number"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm font-medium transition-colors bg-white focus:outline-none ${
                      touched.phone && errors.phone
                        ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                        : 'border-[#DFC47A]/60 focus:border-[#8C5D00]'
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5 font-body">
                    <MapPin className="w-3.5 h-3.5 text-[#8C5D00]" />
                    <span>City / Location *</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    onBlur={() => handleBlur('city')}
                    placeholder="e.g. Puducherry, Chennai, Trichy"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm font-medium transition-colors bg-white focus:outline-none ${
                      touched.city && errors.city
                        ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                        : 'border-[#DFC47A]/60 focus:border-[#8C5D00]'
                    }`}
                  />
                  {touched.city && errors.city && (
                    <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                      <span>{errors.city}</span>
                    </p>
                  )}
                </div>
              </div>



              {/* Row 4: Motivation Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5 font-body">
                  <span>Brief Motivation / Skills</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Tell us a bit about your experience or why you wish to volunteer..."
                  className="w-full px-4 py-3 rounded-xl border border-[#DFC47A]/60 text-sm font-medium bg-white text-[#352043] placeholder-[#8A8394] focus:outline-none focus:border-[#8C5D00] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#8C5D00] via-[#C8A34A] to-[#8C5D00] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 mx-auto group cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4 text-[#FFF8E7] group-hover:rotate-12 transition-transform" />
                <span>Submit Sevak Application</span>
                <Send className="w-4 h-4 text-[#FFF8E7] group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
