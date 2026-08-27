'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function VisionHero() {
  return (
    <section className="relative w-full min-h-[75vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden font-body pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-20 sm:pb-24 lg:pb-28">
      {/* Background Image - Full Width Hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vision_sacred_sunset_hero.webp"
          alt="Sacred Sunset Spiritual Awakening - Divya Yogam Vision"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Multilayer Rich Gradient Vignette for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A1439]/95 via-[#2A1439]/70 to-[#2A1439]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A1439] via-transparent to-black/40" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8 text-center sm:text-left">

          {/* Gold Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DFC47A]/20 border border-[#DFC47A]/50 text-[#DFC47A] text-xs font-bold uppercase tracking-widest backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
            THE VISION
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Awaken the Inner Being. <br />
            <span className="text-[#DFC47A] drop-shadow-[0_4px_20px_rgba(223,196,122,0.4)]">
              Elevate the Human Experience.
            </span>
          </motion.h1>

          {/* Subtitle Statement */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#F8F2E8]/90 text-base sm:text-xl font-light leading-relaxed max-w-2xl"
          >
            To nurture a world of conscious, balanced and awakened individuals who recognise their inner potential, live with greater awareness and contribute to the wellbeing of the world around them.
          </motion.p>

          {/* Flow Pathway Pill */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="inline-flex flex-wrap items-center justify-center gap-1.5 min-[380px]:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-white/10 border border-[#DFC47A]/40 text-[#DFC47A] text-[11px] min-[380px]:text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md text-center"
          >
            <span>From self-awareness</span>
            <span>→</span>
            <span>inner harmony</span>
            <span>→</span>
            <span>conscious living</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2"
          >
            <Link
              href="#the-mission"
              className="px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full bg-[#C8A34A] hover:bg-[#DFC47A] text-[#2A1439] font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-xl hover:shadow-[0_10px_30px_rgba(200,163,74,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2 font-body group"
            >
              <span>DISCOVER OUR MISSION</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2A1439] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#five-pillars"
              className="px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-[#DFC47A]/60 backdrop-blur-md font-semibold text-[11px] sm:text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 font-body group"
            >
              <span>FIVE PILLARS</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}




