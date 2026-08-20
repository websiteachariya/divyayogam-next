'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-transparent font-body">
      {/* HERO SECTION MATCHING SCIENCE & TESTIMONIALS DESIGN */}
      <header className="relative bg-gradient-to-b from-[#351A4A] via-[#2A133B] to-[#200D2E] pt-32 pb-24 text-center text-white overflow-hidden">
        {/* Left Side Accent Image (test-1.webp) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] -translate-x-1/4 sm:translate-x-0 transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Left Sacred Ornament"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Right Side Accent Image (test-1.webp mirrored) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] translate-x-1/4 sm:translate-x-0 scale-x-[-1] transition-all duration-300">
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
            <g strokeWidth="0.75" opacity="0.9">
              <path d="M100,25 C115,55 115,75 100,100 C85,75 85,55 100,25 Z" fill="rgba(223,196,122,0.04)" />
              <path d="M100,175 C115,145 115,125 100,100 C85,125 85,145 100,175 Z" fill="rgba(223,196,122,0.04)" />
              <path d="M25,100 C55,115 75,115 100,100 C75,85 55,85 25,100 Z" fill="rgba(223,196,122,0.04)" />
              <path d="M175,100 C145,115 125,115 100,100 C125,85 145,85 175,100 Z" fill="rgba(223,196,122,0.04)" />
            </g>
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

        {/* Curved Bottom Edge Divider matching Contact section bg (#FAF4EB) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#FAF4EB]" fill="currentColor">
            <path d="M0,0 C300,50 900,50 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </header>

      {/* Main Contact Section */}
      <section className="py-24 relative overflow-hidden bg-[#FAF4EB]">
        {/* Background Image (con-5.png) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/images/con-5.webp"
            alt="Contact Page Background Frame"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

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
                      contact@divyayogam.org
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
                    <p className="text-[#C8A34A] text-sm font-semibold mt-1">
                      +91 (800) 108-YOGA
                    </p>
                    <p className="text-xs text-[#8A8394] font-light">
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
                      Ashram Location
                    </h3>
                    <p className="text-[#C8A34A] text-sm font-semibold mt-1">
                      Divya Yogam Sanctuary, Divine Grace Marg, Sacred Hills
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-[#C8A34A] tracking-wider font-body">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-3.5 rounded-full bg-[#FFFDF9] border border-[#E9DED3] text-[#352043] placeholder:text-[#8A8394] text-sm focus:outline-none focus:border-[#C8A34A] focus:ring-2 focus:ring-[#C8A34A]/20 transition-all font-body"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-[#C8A34A] tracking-wider font-body">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="anand@example.com"
                        className="w-full px-4 py-3.5 rounded-full bg-[#FFFDF9] border border-[#E9DED3] text-[#352043] placeholder:text-[#8A8394] text-sm focus:outline-none focus:border-[#C8A34A] focus:ring-2 focus:ring-[#C8A34A]/20 transition-all font-body"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-[#C8A34A] tracking-wider font-body">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-full bg-[#FFFDF9] border border-[#E9DED3] text-[#352043] placeholder:text-[#8A8394] text-sm focus:outline-none focus:border-[#C8A34A] focus:ring-2 focus:ring-[#C8A34A]/20 transition-all font-body"
                      />
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
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or question here..."
                      className="w-full px-5 py-4 rounded-[20px] bg-[#FFFDF9] border border-[#E9DED3] text-[#352043] placeholder:text-[#8A8394] text-sm focus:outline-none focus:border-[#C8A34A] focus:ring-2 focus:ring-[#C8A34A]/20 transition-all resize-none font-body"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#5A2D82] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-sm shadow-md hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 font-body group"
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
