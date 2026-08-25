'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, User, Sun, Heart, Mountain, Flower2, CheckCircle2 } from 'lucide-react';

export default function InnerJourney() {
  const innerQuestions = [
    {
      title: 'Who am I?',
      icon: User,
    },
    {
      title: 'Why am I here?',
      icon: Flower2,
    },
    {
      title: 'What is the deeper purpose of my life?',
      icon: Sun,
    },
  ];

  const bottomPillars = [
    {
      title: 'Inner Clarity',
      desc: 'Gain clarity about who you truly are.',
      icon: Flower2,
    },
    {
      title: 'Inner Peace',
      desc: 'Experience deep peace from within.',
      icon: Heart,
    },
    {
      title: 'Divine Connection',
      desc: 'Reconnect with your divine essence.',
      icon: Sparkles,
    },
    {
      title: 'Purposeful Living',
      desc: 'Live a life aligned with your true purpose.',
      icon: Mountain,
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-14 bg-[#F8F2E8] relative overflow-hidden font-body">

      {/* 1. Top-Left Golden Sweep Accent (SVG Sweep - Reduced size) */}
      <div className="absolute top-0 left-0 w-[160px] sm:w-[250px] lg:w-[330px] h-[160px] sm:h-[250px] lg:h-[330px] pointer-events-none z-10 opacity-95">
        <svg viewBox="0 0 600 600" fill="none" className="w-full h-full drop-shadow-md">
          <path d="M0 0 H600 C360 180 180 360 0 600 V0 Z" fill="url(#topGoldGradient)" />
          <path d="M0 0 H580 C350 170 170 350 0 580 V0 Z" stroke="#DFC47A" strokeWidth="3" fill="none" opacity="0.85" />
          <circle cx="140" cy="140" r="4" fill="#DFC47A" opacity="0.9" />
          <circle cx="300" cy="80" r="3" fill="#DFC47A" opacity="0.7" />
          <defs>
            <linearGradient id="topGoldGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4A2E00" />
              <stop offset="50%" stopColor="#6B4700" />
              <stop offset="100%" stopColor="#8C5D00" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. Bottom-Right Golden Decorative Watermark (design-1.png) - Moved a little bit up */}
      <div className="absolute bottom-6 sm:bottom-12 lg:bottom-16 -right-6 sm:-right-8 lg:-right-10 w-[350px] sm:w-[480px] lg:w-[620px] h-[350px] sm:h-[480px] lg:h-[620px] pointer-events-none z-0 opacity-80">
        <Image
          src="/images/design-1.webp"
          alt="Golden Decorative Watermark"
          fill
          className="object-contain object-right-bottom drop-shadow-[0_0_15px_rgba(223,196,122,0.35)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 space-y-16 sm:space-y-20">

        {/* Main Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">

          {/* Left Column: Curved Arch Image Shape featuring design-3.png */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            {/* Clean Arch Frame matching reference styling */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[1063/1400] rounded-r-full rounded-l-[28px] overflow-hidden luxury-card border-2 border-[#E9DED3] shadow-xl bg-[#FFFDF9] group">
              <Image
                src="/images/design-3.webp"
                alt="A Call to the Inner Journey - Meditating Woman"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#352043]/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Inner Journey Text & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-8 text-center"
          >
            {/* Header Tag matching reference image pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#8C5D00]/15 text-[#8C5D00] text-xs font-extrabold uppercase tracking-widest shadow-xs">
              <Flower2 className="w-3.5 h-3.5 text-[#8C5D00]" />
              A CALL TO THE INNER JOURNEY
            </div>

            {/* Title matching reference image typography */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#352043] leading-tight">
              Perhaps this is <span className="text-[#8C5D00] italic font-serif">your Moment</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#5E5865] text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl mx-auto">
              There comes a moment in life when the outer world becomes quiet...
              <br className="hidden sm:inline" />
              and a deeper question begins to arise within.
            </p>

            {/* 3 Questions Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 max-w-3xl mx-auto pt-2">
              {innerQuestions.map((q, idx) => {
                const IconComponent = q.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 sm:p-6 rounded-[24px] bg-white border border-[#E9DED3] hover:border-[#8C5D00] shadow-xs text-center transition-all flex flex-col items-center justify-between space-y-4 group min-h-[185px]"
                  >
                    {/* Circle Icon Badge */}
                    <div className="flex items-center gap-1">
                      <span className="text-[11px] text-[#8C5D00] font-serif">❧</span>
                      <div className="w-13 h-13 rounded-full bg-[#FAF5EF] border border-[#E9DED3] flex items-center justify-center text-[#8C5D00] shadow-xs group-hover:bg-[#8C5D00] group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] text-[#8C5D00] font-serif">☙</span>
                    </div>

                    {/* Question Title */}
                    <h3 className="font-serif italic text-base sm:text-lg text-[#352043] font-bold leading-snug">
                      “{q.title}”
                    </h3>

                    {/* Decorative Flourish Line */}
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#DFC47A] to-transparent" />
                  </motion.div>
                );
              })}
            </div>

            {/* Inspirational Paragraph */}
            <div className="space-y-2 max-w-xl mx-auto pt-2">
              <p className="text-[#5E5865] text-xs sm:text-sm font-light leading-relaxed italic font-serif">
                Perhaps that question is not the end of your search. Perhaps it is the beginning of your journey within. Take a moment. Breathe. Look within.
              </p>
              <p className="text-[#352043] text-sm sm:text-base font-bold font-heading">
                Your journey to the Divine begins with a single step.
              </p>
            </div>

            {/* CTA Button matching MEET SANTOSHI SHRI. ARAWINDHAN JI button style */}
            <div className="pt-2">
              <Link
                href="/practices"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-[11px] sm:text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <span>BEGIN YOUR DIVYA YOGAM JOURNEY</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-[#47206A] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Card matching reference image luxury card style (ZERO violet) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card rounded-[32px] p-6 sm:p-10 border-2 border-[#E9DED3] bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EF] to-[#FFFDF9] text-[#352043] shadow-xl space-y-8"
        >
          {/* Top Subhead */}
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#8C5D00]/15 text-[#8C5D00] text-xs font-extrabold uppercase tracking-widest">
              DIVYA YOGAM – THE SPARK
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#352043]">
              Awaken Within. <span className="text-[#8C5D00] italic font-serif">Experience the Divine.</span>
            </h3>
          </div>

          {/* 4 Pillars Grid matching reference image pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {bottomPillars.map((pillar, pIdx) => (
              <div key={pIdx} className="p-4 rounded-2xl bg-white border border-[#E9DED3] text-center space-y-2 shadow-xs hover:border-[#8C5D00] transition-all">
                <CheckCircle2 className="w-5 h-5 text-[#8C5D00] mx-auto" />
                <span className="font-heading text-xs sm:text-sm font-bold text-[#352043] block">
                  {pillar.title}
                </span>
                <span className="text-xs text-[#5E5865] font-light block">
                  {pillar.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Closing Divine Blessings */}
          <div className="pt-6 border-t border-[#E9DED3] text-center space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-serif italic text-[#8C5D00]">
              <span>May every seeker find clarity</span>
              <span className="hidden sm:inline text-[#8C5D00]/40">•</span>
              <span>May every heart experience peace</span>
              <span className="hidden sm:inline text-[#8C5D00]/40">•</span>
              <span>May every life become an expression of Divine Grace</span>
            </div>

            <div className="pt-2 text-center space-y-1">
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#352043]">
                Divya Yogam | Divine Grace Foundation
              </p>
              <p className="text-[11px] font-semibold text-[#8C5D00] uppercase tracking-wider">
                With the Divine Guidance of Santoshi Shri. Arawindhan Ji
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
