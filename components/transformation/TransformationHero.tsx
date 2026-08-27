'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function TransformationHero() {
  return (
    <header className="relative bg-gradient-to-b from-[#351A4A] via-[#2A133B] to-[#200D2E] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-14 sm:pb-18 lg:pb-20 text-center text-white overflow-hidden font-body">
      
      {/* Left Side Accent Image (test-1.webp) */}
      <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 left-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] -translate-x-1/4 sm:translate-x-0 transition-all duration-300">
        <Image
          src="/images/test-1.webp"
          alt="Left Sacred Ornament"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Right Side Accent Image (test-1.webp mirrored) */}
      <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 right-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] translate-x-1/4 sm:translate-x-0 scale-x-[-1] transition-all duration-300">
        <Image
          src="/images/test-1.webp"
          alt="Right Sacred Ornament"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      {/* Intricate Background Lotus Mandala Vector */}
      <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
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
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest shadow-md backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
          LIVING EVIDENCE
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Journey of <span className="text-[#DFC47A] italic font-serif font-normal">Inner Transformation</span>
        </motion.h1>

        {/* Subtitle / Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#F8F2E8] text-base sm:text-lg font-serif italic max-w-2xl mx-auto leading-relaxed"
        >
          &ldquo;When the inner light is rekindled, every aspect of life—health, relationships, and purpose—naturally blossoms.&rdquo;
        </motion.p>

        {/* Gold Diamond Line Divider */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <div className="h-[1px] w-12 bg-[#DFC47A]/60" />
          <span className="text-[#DFC47A] text-xs">❖</span>
          <div className="h-[1px] w-12 bg-[#DFC47A]/60" />
        </div>
      </div>

      {/* Curved Bottom Edge Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#F8F2E8]" fill="currentColor">
          <path d="M0,0 C300,50 900,50 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </header>
  );
}

