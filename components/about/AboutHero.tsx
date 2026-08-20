'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function AboutHero() {
  return (
    <header className="relative bg-gradient-to-b from-[#2B083A] via-[#3B104E] to-[#20052C] pt-28 sm:pt-36 pb-20 sm:pb-24 text-center text-white overflow-hidden font-body">

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

      {/* Background Sacred Geometric Circular Mandala Watermark SVG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none z-0">
        <svg width="700" height="700" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.5">
          <circle cx="100" cy="100" r="96" strokeWidth="0.6" strokeDasharray="2 2" />
          <circle cx="100" cy="100" r="86" strokeWidth="0.4" />
          <circle cx="100" cy="100" r="76" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="60" strokeWidth="0.4" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="44" strokeWidth="0.5" />
          <g strokeWidth="0.4" opacity="0.7">
            <path d="M100,10 C115,50 115,70 100,100 C85,70 85,50 100,10 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M100,190 C115,150 115,130 100,100 C85,130 85,150 100,190 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M10,100 C50,115 70,115 100,100 C70,85 50,85 10,100 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M190,100 C150,115 130,115 100,100 C130,85 150,85 190,100 Z" fill="rgba(223,196,122,0.03)" />
          </g>
        </svg>
      </div>

      {/* Ambient Center Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C8A34A]/20 blur-3xl rounded-full pointer-events-none z-0" />

      {/* Banner Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20 space-y-5">

        {/* Top Header Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/10 border border-[#DFC47A]/40 text-[#DFC47A] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] shadow-lg backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
          DIVYA YOGAM · ABOUT THE MASTER
        </motion.div>

        {/* Main Title: Santoshi Shri. Arawindhan Ji */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Santoshi Shri. <span className="text-[#DFC47A] italic font-serif font-normal drop-shadow-[0_2px_12px_rgba(223,196,122,0.35)]">Arawindhan Ji</span>
          </h1>

          {/* Subtitle Bar with Golden Diamond Bullets */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-[#DFC47A] text-[10px] sm:text-xs lg:text-sm font-semibold uppercase tracking-[0.16em] font-body flex-wrap max-w-3xl mx-auto pt-1">
            <span>SPIRITUAL MASTER</span>
            <span className="text-[#C8A34A] text-[9px]">◆</span>
            <span>MAHAAVADHANI</span>
            <span className="text-[#C8A34A] text-[9px]">◆</span>
            <span>SPIRITUAL GUIDE TO INNER TRANSFORMATION</span>
          </div>
        </motion.div>

        {/* Sub-headline Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-white/95 max-w-2xl mx-auto font-normal leading-relaxed pt-1"
        >
          “A Life of Awakening Human Potential”
        </motion.p>

        {/* Golden Lotus Flourish Divider */}
        <div className="relative w-full max-w-xs mx-auto h-8 pt-1 pointer-events-none">
          <Image
            src="/images/deco-15.webp"
            alt="Sacred Lotus Divider"
            fill
            className="object-contain drop-shadow-[0_0_12px_rgba(223,196,122,0.6)]"
          />
        </div>

      </div>

      {/* Smooth Curved Bottom Edge Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-14 text-[#FAF7F2]"
          fill="currentColor"
        >
          <path d="M0,0 C300,45 900,45 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </header>
  );
}

