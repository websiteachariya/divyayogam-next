'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { sendToGoogleSheet } from '@/lib/googleSheet';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const validateField = (field: string, value: string): string => {
    const trimmed = value.trim();
    if (field === 'name') {
      if (!trimmed) return 'Full name is required.';
      if (trimmed.length < 3) return 'Full name must be at least 3 characters.';
      if (!/^[a-zA-Z\s.'-]{3,50}$/.test(trimmed)) return 'Enter a valid name (letters and spaces only).';
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
    if (field === 'message') {
      if (!trimmed) return 'Message is required.';
      if (trimmed.length < 5) return 'Message must be at least 5 characters.';
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

    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const phoneErr = validateField('phone', formData.phone);
    const messageErr = validateField('message', formData.message);

    setErrors({ name: nameErr, email: emailErr, phone: phoneErr, message: messageErr });
    setTouched({ name: true, email: true, phone: true, message: true });

    if (nameErr || emailErr || phoneErr || messageErr) {
      return;
    }

    setIsSubmitted(true);
    await sendToGoogleSheet({
      formType: 'contact',
      ...formData,
    });
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      setErrors({});
      setTouched({});
      setSubmitAttempted(false);
    }, 4000);
  };

  return (
    <div className="bg-transparent font-body min-h-screen relative overflow-x-hidden">
      {/* Fixed Background Image Overlay */}
      <div
        suppressHydrationWarning
        className="fixed inset-0 -z-40 bg-[#FAF5EF] bg-cover bg-center bg-fixed bg-no-repeat pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-b from-[#351A4A] via-[#2A133B] to-[#200D2E] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-14 sm:pb-18 lg:pb-20 text-center text-white overflow-hidden">
        {/* Left Side Accent Image */}
        <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 left-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] -translate-x-1/4 sm:translate-x-0 transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Left Sacred Ornament"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Right Side Accent Image */}
        <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 right-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] translate-x-1/4 sm:translate-x-0 scale-x-[-1] transition-all duration-300">
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
            <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
            CONNECT WITH US
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Reach Out to <span className="text-[#DFC47A] italic font-serif">Divya Yogam</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#F8F2E8] text-base sm:text-lg font-serif italic max-w-2xl mx-auto leading-relaxed"
          >
            Whether you have questions about meditation practices, retreat registration, or personal guidance with Ji, we are here to support your journey.
          </motion.p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-[1px] w-12 bg-[#DFC47A]/60" />
            <span className="text-[#DFC47A] text-xs">❖</span>
            <div className="h-[1px] w-12 bg-[#DFC47A]/60" />
          </div>
        </div>

        {/* Curved Bottom Edge Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#FAF4EB]" fill="currentColor">
            <path d="M0,0 C300,50 900,50 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </header>

      {/* Main Contact Section */}
      <section className="py-8 sm:py-12 lg:py-14 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-bold text-[#352043]">
                  Get in Touch
                </h2>
                <p className="text-[#5E5865] text-base font-light leading-relaxed">
                  Connect with our meditation coordinators and ashram support team.
                </p>
              </div>

              <div className="space-y-6">
                <div className="luxury-card rounded-[28px] p-6 border border-[#E9DED3] flex items-start gap-4 shadow-sm bg-white">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F2E8] border border-[#E9DED3] flex items-center justify-center text-[#C8A34A] shrink-0">
                    <Mail className="w-6 h-6 text-[#C8A34A]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#352043]">
                      Email Us
                    </h3>
                    <p className="text-[#C8A34A] text-sm font-semibold mt-1">
                      info@divyayogam.org
                    </p>
                    <p className="text-xs text-[#8A8394] font-light">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="luxury-card rounded-[28px] p-6 border border-[#E9DED3] flex items-start gap-4 shadow-sm bg-white">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F2E8] border border-[#E9DED3] flex items-center justify-center text-[#C8A34A] shrink-0">
                    <Phone className="w-6 h-6 text-[#C8A34A]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#352043]">
                      Call Support
                    </h3>
                    <div className="text-[#C8A34A] text-sm font-semibold mt-1 flex flex-col space-y-0.5">
                      <span>+91 94425 48809</span>
                      <span>+91 94895 14685</span>
                      <span>+91 93444 97460</span>
                    </div>
                    <p className="text-xs text-[#8A8394] font-light mt-1">
                      Mon - Sat, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>

                <div className="luxury-card rounded-[28px] p-6 border border-[#E9DED3] flex items-start gap-4 shadow-sm bg-white">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F2E8] border border-[#E9DED3] flex items-center justify-center text-[#C8A34A] shrink-0">
                    <MapPin className="w-6 h-6 text-[#C8A34A]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#352043]">
                      Registered Address
                    </h3>
                    <p className="text-[#352043] text-sm font-semibold mt-1">
                      DIVINE GRACE FOUNDATION
                    </p>
                    <p className="text-xs text-[#5E5865] leading-relaxed mt-1">
                      R.S.Nos.222/1, 222/2, Pondy Main Road, Villianur, Puducherry - 605 110.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="luxury-card rounded-[28px] p-8 sm:p-12 border border-[#E9DED3] relative shadow-md bg-white">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#352043] mb-6">
                  Send a Direct Inquiry
                </h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-[#FFFDF9] border border-[#DFC47A] text-[#352043] text-sm font-semibold flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A34A] shrink-0" />
                    <span>Your inquiry has been received! Our team will contact you shortly.</span>
                  </div>
                )}

                {/* Validation Error Alert Banner */}
                {submitAttempted && Object.values(errors).some((err) => err) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-300 text-red-900 text-xs font-semibold flex items-start gap-3"
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

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-[#C8A34A] tracking-wider font-body">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        placeholder="e.g. Anand Kumar"
                        className={`w-full px-4 py-3.5 rounded-full bg-[#FFFDF9] border text-[#352043] placeholder:text-[#8A8394] text-sm focus:outline-none transition-all font-body ${
                          touched.name && errors.name
                            ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E9DED3] focus:border-[#C8A34A]'
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-[#C8A34A] tracking-wider font-body">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="anand@example.com"
                        className={`w-full px-4 py-3.5 rounded-full bg-[#FFFDF9] border text-[#352043] placeholder:text-[#8A8394] text-sm focus:outline-none transition-all font-body ${
                          touched.email && errors.email
                            ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E9DED3] focus:border-[#C8A34A]'
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-[#C8A34A] tracking-wider font-body">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        maxLength={10}
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        placeholder="Enter 10-digit mobile number"
                        className={`w-full px-4 py-3.5 rounded-full bg-[#FFFDF9] border text-[#352043] placeholder:text-[#8A8394] text-sm focus:outline-none transition-all font-body ${
                          touched.phone && errors.phone
                            ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E9DED3] focus:border-[#C8A34A]'
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
                      <label className="text-xs font-semibold uppercase text-[#C8A34A] tracking-wider font-body">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-full bg-[#FFFDF9] border border-[#E9DED3] text-[#352043] text-sm focus:outline-none focus:border-[#C8A34A] focus:ring-2 focus:ring-[#C8A34A]/20 transition-all font-body"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Organ Meditation">Organ Meditation Course</option>
                        <option value="Quantum Habits">Quantum Habits Program</option>
                        <option value="Retreat Registration">Retreat & Event Registration</option>
                        <option value="Ji Consultation">Personal Guidance with Ji</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-[#C8A34A] tracking-wider font-body">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      placeholder="Write your message or question here..."
                      className={`w-full px-5 py-4 rounded-[20px] bg-[#FFFDF9] border text-[#352043] placeholder:text-[#8A8394] text-sm focus:outline-none transition-all resize-none font-body ${
                        touched.message && errors.message
                          ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                          : 'border-[#E9DED3] focus:border-[#C8A34A]'
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#5A2D82] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-sm shadow-md hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 font-body group cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#DFC47A] group-hover:text-[#47206A] transition-colors" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
