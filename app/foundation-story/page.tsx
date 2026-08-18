'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  UploadCloud,
  Flower2,
  Heart,
  Compass,
  Sun,
  BookOpen,
  ArrowRight,
  Quote,
  HelpCircle,
  Flame,
  Calendar,
} from 'lucide-react';

// ============================================================================
// SVG DECORATIVE COMPONENTS
// ============================================================================

function GoldenLotusIcon({ className = "w-6 h-6", strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M50 20C40 38 22 45 10 52C22 66 38 68 50 82C62 68 78 66 90 52C78 45 60 38 50 20Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 30C42 45 30 50 20 56C30 66 42 66 50 78C58 66 70 66 80 56C70 50 58 45 50 30Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 40C45 50 40 55 35 60C42 64 48 64 50 72C52 64 58 64 65 60C60 55 55 50 50 40Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M35 78C45 81 55 81 65 78" stroke="currentColor" strokeWidth={strokeWidth * 2} strokeLinecap="round" />
    </svg>
  );
}

function LotusDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-3 opacity-85">
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-[#C8A34A] to-[#C8A34A]" />
      <GoldenLotusIcon className="w-5 h-5 text-[#C8A34A]" strokeWidth={1.5} />
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-[#C8A34A] to-[#C8A34A]" />
    </div>
  );
}

export default function FoundationStoryPage() {
  // Story in One Glance Data
  const storyGlance = [
    {
      label: 'A Need',
      desc: 'The need for inner balance in an increasingly demanding world.',
      icon: Heart,
    },
    {
      label: 'A Question',
      desc: 'How can we live more consciously?',
      icon: HelpCircle,
    },
    {
      label: 'An Inspiration',
      desc: 'Years of exploration into human potential, wellbeing and inner awareness.',
      icon: Sparkles,
    },
    {
      label: 'A Vision',
      desc: 'To nurture conscious individuals and harmonious lives.',
      icon: Sun,
    },
    {
      label: 'A Beginning',
      desc: 'Divya Yogam — a space for the journey within.',
      icon: GoldenLotusIcon,
    },
  ];

  return (
    <div className="bg-[#FAF7F2] font-body min-h-screen text-[#352043] relative overflow-hidden">
      
      {/* Purpose-1 Background Image Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-35 mix-blend-multiply"
        style={{ backgroundImage: "url('/images/purpose-1.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF7F2]/40 to-[#FAF7F2]/60 pointer-events-none z-0" />

      {/* ======================================================================== */}
      {/* HERO BANNER SECTION (MATCHING MASTER BANNER DESIGN) */}
      {/* ======================================================================== */}
      <header className="relative bg-gradient-to-b from-[#2B083A] via-[#3B104E] to-[#20052C] pt-28 sm:pt-36 pb-20 sm:pb-24 text-center text-white overflow-hidden font-body">
        
        {/* Left Side Ornate Gold & Purple Floral Flourish (test-1.webp) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none w-44 h-44 sm:w-72 sm:h-72 lg:w-[450px] lg:h-[450px] z-10 opacity-95 transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Left Ornate Sacred Flourish"
            fill
            className="object-contain object-left drop-shadow-[0_0_20px_rgba(223,196,122,0.25)]"
            priority
          />
        </div>

        {/* Right Side Ornate Gold & Purple Floral Flourish (test-1.webp Mirrored) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none w-44 h-44 sm:w-72 sm:h-72 lg:w-[450px] lg:h-[450px] scale-x-[-1] z-10 opacity-95 transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Right Ornate Sacred Flourish"
            fill
            className="object-contain object-right drop-shadow-[0_0_20px_rgba(223,196,122,0.25)]"
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
            DIVYA YOGAM · FOUNDATION STORY
          </motion.div>

          {/* Main Title: When the Search Became a Path */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              When the Search <span className="text-[#DFC47A] italic font-serif font-normal drop-shadow-[0_2px_12px_rgba(223,196,122,0.35)]">Became a Path</span>
            </h1>

            {/* Subtitle Bar with Golden Diamond Bullets */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-[#DFC47A] text-[10px] sm:text-xs lg:text-sm font-semibold uppercase tracking-[0.16em] font-body flex-wrap max-w-3xl mx-auto pt-1">
              <span>WHY DIVYA YOGAM BORN?</span>
              <span className="text-[#C8A34A] text-[9px]">◆</span>
              <span>WHAT WAS THE NEED?</span>
              <span className="text-[#C8A34A] text-[9px]">◆</span>
              <span>WHAT INSPIRED ITS CREATION?</span>
            </div>
          </motion.div>

          {/* Sub-headline Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-white/95 max-w-2xl mx-auto font-normal leading-relaxed pt-1"
          >
            “The Movement from Developing Potential to Discovering the Self”
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

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20 sm:space-y-28">

        {/* ======================================================================== */}
        {/* SECTION 1: FOUNDATION STORY & FOUNDER SPOTLIGHT FRAME */}
        {/* ======================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Arch Spotlight Frame (with Pending Upload Toggle) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group w-full max-w-md">
              {/* Outer Golden Arch Glow */}
              <div className="absolute -inset-3 rounded-t-full bg-gradient-to-tr from-[#C8A34A] via-[#DFC47A] to-[#8C5D00] blur-2xl opacity-35 group-hover:opacity-60 transition-all duration-700 pointer-events-none" />

              {/* Portrait Arch Container */}
              <div className="relative rounded-t-full rounded-b-[32px] overflow-hidden border-2 border-[#DFC47A]/70 p-4 shadow-2xl bg-white/95 backdrop-blur-md">
                <div className="relative rounded-t-full rounded-b-2xl overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EF] to-[#F8F2E8] aspect-[4/5] flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-[#DFC47A]/70">
                  <div className="absolute inset-0 bg-[radial-gradient(#C8A34A_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

                  <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 backdrop-blur-sm border-2 border-[#C8A34A]/60 shadow-lg flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C8A34A]/20 to-[#8C5D00]/20 animate-pulse pointer-events-none" />
                    <UploadCloud className="w-9 h-9 sm:w-10 sm:h-10 text-[#8C5D00]" />
                  </div>

                  <div className="relative z-10 space-y-2 max-w-[240px]">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-[#8C5D00]/15 text-[#8C5D00] text-[11px] font-extrabold uppercase tracking-widest border border-[#8C5D00]/30 shadow-xs">
                      Pending Upload
                    </span>
                    <h4 className="font-heading text-base sm:text-lg font-bold text-[#352043] leading-snug">
                      Waiting for Image to be Uploaded
                    </h4>
                    <p className="text-xs text-[#5E5865] font-light">
                      Founder story photograph will be updated here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Foundation Story Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#8C5D00]/10 text-[#8C5D00] text-[11px] font-extrabold uppercase tracking-widest border border-[#8C5D00]/20">
                FOUNDATION STORY
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#3B104E] leading-tight">
                When the Search <span className="text-[#C8A34A] italic font-serif font-normal">Became a Path</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#5E5865] font-light leading-relaxed">
              <p className="p-4 rounded-2xl bg-white/80 border-l-4 border-[#C8A34A] shadow-xs text-[#352043] font-serif italic text-base sm:text-lg">
                “There comes a point in life when doing more is no longer the answer. The question becomes deeper: How do we live with greater awareness? Divya Yogam was conceived from this deeper enquiry.”
              </p>

              <p>
                The experience of working with people across education, leadership, human development and wellbeing revealed a fundamental need—not simply for better performance, but for inner balance, clarity and conscious living.
              </p>

              <p className="font-semibold text-[#3B104E]">
                Thus began the movement from developing potential to discovering the self.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ======================================================================== */}
        {/* SECTION 2: WHY DIVYA YOGAM (BECAUSE THE INNER LIFE MATTERS) */}
        {/* ======================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[32px] bg-gradient-to-br from-[#FAF3FA] via-[#FFFDF9] to-[#F8EBF6] border-2 border-[#EEDEEB] p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3B104E]/10 text-[#3B104E] text-xs font-bold uppercase tracking-widest border border-[#3B104E]/20">
              WHY DIVYA YOGAM
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3B104E]">
              Because the <span className="text-[#C8A34A] italic font-serif font-normal">Inner Life Matters</span>
            </h2>

            <LotusDivider />

            <div className="space-y-4 text-sm sm:text-base text-[#5E5865] font-light leading-relaxed pt-2">
              <p className="text-base sm:text-lg font-medium text-[#352043]">
                The world teaches us how to move forward. Divya Yogam creates a space to look within.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-center">
                <div className="p-5 rounded-2xl bg-white/90 border border-[#DFC47A]/50 shadow-xs space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#FAF5EF] text-[#8C5D00] flex items-center justify-center mx-auto">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-[#3B104E]">Stillness</h4>
                  <p className="text-xs text-[#7A6B82]">Amidst movement</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/90 border border-[#DFC47A]/50 shadow-xs space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#FAF5EF] text-[#8C5D00] flex items-center justify-center mx-auto">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-[#3B104E]">Awareness</h4>
                  <p className="text-xs text-[#7A6B82]">Amidst distraction</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/90 border border-[#DFC47A]/50 shadow-xs space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#FAF5EF] text-[#8C5D00] flex items-center justify-center mx-auto">
                    <Sun className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-[#3B104E]">Meaning</h4>
                  <p className="text-xs text-[#7A6B82]">Amidst achievement</p>
                </div>
              </div>

              <p className="pt-4 font-serif italic text-base sm:text-lg font-semibold text-[#8C5D00]">
                “Its purpose is not to add another pursuit to life—instead, it helps us experience life more consciously.”
              </p>
            </div>
          </div>
        </motion.div>

        {/* ======================================================================== */}
        {/* SECTION 3: THE INSPIRATION, VISION & INCEPTION */}
        {/* ======================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: THE INSPIRATION */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 backdrop-blur-xs border border-[#E9DED3] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#C8A34A]/50 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EF] border border-[#DFC47A]/50 flex items-center justify-center text-[#8C5D00] group-hover:bg-[#8C5D00] group-hover:text-white transition-colors">
                <Sparkles className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-extrabold text-[#8C5D00] uppercase tracking-widest">THE INSPIRATION</span>
                <h3 className="font-heading text-lg font-bold text-[#3B104E]">A Deeper Dimension of Wellbeing</h3>
              </div>

              <p className="text-xs sm:text-sm text-[#5E5865] font-light leading-relaxed">
                The foundation of Divya Yogam grew from an expanding exploration of meditation, inner peace, spiritual wellness, human potential and consciousness. It brings together inner dimensions with the realities of everyday life.
              </p>
            </div>
          </motion.div>

          {/* Card 2: THE VISION */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/90 backdrop-blur-xs border border-[#E9DED3] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#C8A34A]/50 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EF] border border-[#DFC47A]/50 flex items-center justify-center text-[#8C5D00] group-hover:bg-[#8C5D00] group-hover:text-white transition-colors">
                <Sun className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-extrabold text-[#8C5D00] uppercase tracking-widest">THE VISION</span>
                <h3 className="font-heading text-lg font-bold text-[#3B104E]">A Way of Living</h3>
              </div>

              <p className="text-xs sm:text-sm text-[#5E5865] font-light leading-relaxed">
                To make conscious living a way of life and create an environment where individuals pause, reflect, reconnect and discover a deeper sense of self, balance and purpose—not an escape from life, but a deeper way of experiencing it.
              </p>
            </div>
          </motion.div>

          {/* Card 3: INCEPTION [2000] */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-[#4A1460] via-[#3B104E] to-[#2B083A] text-white rounded-[28px] p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-[#DFC47A]/60 group relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-[#DFC47A]/40 flex items-center justify-center text-[#FCE8A6]">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#DFC47A]/20 text-[#FCE8A6] text-xs font-bold border border-[#DFC47A]/30">
                  EST. 2000
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-extrabold text-[#FCE8A6] uppercase tracking-widest">INCEPTION</span>
                <h3 className="font-heading text-lg font-bold text-[#FCE8A6]">The Beginning of a New Chapter</h3>
              </div>

              <p className="text-xs sm:text-sm text-[#F0E4D7] font-light leading-relaxed">
                Divya Yogam marks the beginning of a dedicated space for inner exploration and conscious living—born from a simple belief: <strong className="text-white">The deepest transformation begins within.</strong>
              </p>
            </div>
          </motion.div>

        </div>

        {/* ======================================================================== */}
        {/* SECTION 4: THE STORY IN ONE GLANCE (5 PILLARS GRID) */}
        {/* ======================================================================== */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block px-4 py-1 rounded-full bg-white/90 border border-[#E5DACD] text-[#8C6B28] text-[11px] font-bold tracking-[0.2em] uppercase shadow-xs">
              SUMMARY
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#3B104E]">
              The Story <span className="text-[#C8A34A] italic font-serif font-normal">in One Glance</span>
            </h2>
            <LotusDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {storyGlance.map((item, idx) => {
              const GlanceIcon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white rounded-2xl p-5 border border-[#E9DED3] shadow-xs hover:shadow-lg hover:border-[#C8A34A] transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-full bg-[#FAF5EF] text-[#8C5D00] text-xs font-bold flex items-center justify-center border border-[#DFC47A]/40">
                        0{idx + 1}
                      </span>
                      <GlanceIcon className="w-5 h-5 text-[#C8A34A] group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-heading text-sm font-extrabold text-[#3B104E] group-hover:text-[#8C5D00] transition-colors">
                        {item.label}
                      </h4>
                      <p className="text-xs text-[#5E5865] font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ======================================================================== */}
        {/* CLOSING QUOTE & CTA BANNER */}
        {/* ======================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-full bg-gradient-to-r from-[#2B083A] via-[#481462] to-[#2B083A] border border-[#DFC47A]/40 p-6 sm:p-8 shadow-2xl text-center space-y-4 overflow-hidden"
        >
          <GoldenLotusIcon className="absolute right-8 top-1/2 -translate-y-1/2 w-40 h-40 text-[#DFC47A]/10 pointer-events-none" strokeWidth={1} />

          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <Quote className="w-8 h-8 text-[#DFC47A] mx-auto opacity-75" />
            <p className="font-serif italic text-lg sm:text-2xl font-bold text-white leading-relaxed">
              “When the search moves inward, the journey becomes meaningful.”
            </p>

            <div className="pt-2">
              <Link
                href="/practices"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E3C582] via-[#DFC47A] to-[#C8A34A] hover:from-[#F0D593] hover:to-[#D4AF37] text-[#2B083A] font-extrabold text-xs tracking-wider uppercase shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <span>EXPLORE OUR PRACTICES</span>
                <ArrowRight className="w-4 h-4 text-[#2B083A] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
