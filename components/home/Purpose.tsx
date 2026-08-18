'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Eye,
  Heart,
  Target,
  Compass,
  TrendingUp,
  Users,
  Sparkles,
  Sun,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Quote,
  Feather,
  Flower2,
  RefreshCw,
} from 'lucide-react';

// ============================================================================
// SVG DECORATIVE COMPONENTS
// ============================================================================

// 1. Golden Lotus Flower Icon
function GoldenLotusIcon({ className = "w-6 h-6", strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Petals */}
      <path
        d="M50 20C40 38 22 45 10 52C22 66 38 68 50 82C62 68 78 66 90 52C78 45 60 38 50 20Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Petals */}
      <path
        d="M50 30C42 45 30 50 20 56C30 66 42 66 50 78C58 66 70 66 80 56C70 50 58 45 50 30Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central Bud */}
      <path
        d="M50 40C45 50 40 55 35 60C42 64 48 64 50 72C52 64 58 64 65 60C60 55 55 50 50 40Z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base Stem Line */}
      <path
        d="M35 78C45 81 55 81 65 78"
        stroke="currentColor"
        strokeWidth={strokeWidth * 2}
        strokeLinecap="round"
      />
    </svg>
  );
}

// 2. Lotus Divider with Golden Line Flourish
function LotusDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2 opacity-80">
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C8A34A] to-[#C8A34A]" />
      <GoldenLotusIcon className="w-5 h-5 text-[#C8A34A]" strokeWidth={1.5} />
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C8A34A] to-[#C8A34A]" />
    </div>
  );
}

// 3. Watermark Lotus Outline (Top-Left Background)
function BackgroundLotusWatermark() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full text-[#C8A34A]"
    >
      <path
        d="M100 20C80 55 45 70 20 80C45 105 75 110 100 135C125 110 155 105 180 80C155 70 120 55 100 20Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="3 3"
      />
      <path
        d="M100 38C85 65 55 78 35 88C55 108 82 110 100 128C118 110 145 108 165 88C145 78 115 65 100 38Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M100 55C90 75 70 85 52 92C68 110 88 110 100 122C112 110 132 110 148 92C130 85 110 75 100 55Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.3" />
    </svg>
  );
}

// 4. Center Orbital Mandala Emblem
function CenterMandalaEmblem() {
  return (
    <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto flex items-center justify-center">
      {/* Outer Dashed Orbiting Ring */}
      <div className="absolute inset-0 rounded-full border border-dashed border-[#C8A34A]/40 animate-[spin_40s_linear_infinite]" />
      
      {/* Orbiting Decorative Dots */}
      <div className="absolute inset-2 rounded-full border border-[#DFC47A]/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C8A34A] shadow-[0_0_8px_#C8A34A]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#3B104E]" />
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#C8A34A]" />
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#DFC47A]" />
      </div>

      {/* Inner Glowing Mandala Sphere */}
      <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#4A1460] via-[#3B104E] to-[#250634] border-2 border-[#DFC47A]/50 shadow-[0_0_35px_rgba(74,20,96,0.35)] flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-500">
        {/* Subtle Radial Shimmer Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(223,196,122,0.25)_0%,transparent_70%)] pointer-events-none" />
        
        {/* Center Golden Lotus Graphic */}
        <div className="relative z-10 text-[#FCE8A6] flex flex-col items-center">
          <GoldenLotusIcon className="w-14 h-14 sm:w-16 sm:h-16 text-[#FCE8A6] drop-shadow-[0_0_12px_rgba(252,232,166,0.6)]" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Purpose() {
  // 01 — Seven-Step Inner Journey Data
  const sevenSteps = [
    {
      step: '01',
      title: 'Awareness',
      desc: 'Become aware of your true self',
      icon: GoldenLotusIcon,
      highlight: false,
    },
    {
      step: '02',
      title: 'Acceptance',
      desc: 'Accept yourself completely',
      icon: Heart,
      highlight: false,
    },
    {
      step: '03',
      title: 'Release',
      desc: 'Let go of what no longer serves you',
      icon: Feather,
      highlight: false,
    },
    {
      step: '04',
      title: 'Realignment',
      desc: 'Realign with your inner wisdom',
      icon: RefreshCw,
      highlight: false,
    },
    {
      step: '05',
      title: 'Expansion',
      desc: 'Expand your consciousness',
      icon: Sparkles,
      highlight: false,
    },
    {
      step: '06',
      title: 'Integration',
      desc: 'Integrate the shift within',
      icon: Flower2,
      highlight: false,
    },
    {
      step: '07',
      title: 'Transformation',
      desc: 'Live the awakened You',
      icon: Sun,
      highlight: true,
    },
  ];

  // 02 — Shift Within Pill Items (Right Grid)
  const shiftPills = [
    { label: 'Clarity', icon: Eye, href: '/practices' },
    { label: 'Purpose', icon: Target, href: '/practices' },
    { label: 'Alignment', icon: Compass, href: '/practices' },
    { label: 'Peace', icon: Heart, href: '/practices' },
    { label: 'Growth', icon: TrendingUp, href: '/practices' },
    { label: 'Connection', icon: Users, href: '/practices' },
  ];

  // 03 — Steps of Inner Awakening Data (Bottom Strip)
  const pathSteps = [
    {
      title: 'Daily Practices',
      desc: 'Simple practices to center your mind',
      icon: GoldenLotusIcon,
    },
    {
      title: 'Guided Meditations',
      desc: 'Meditations to deepen your connection',
      icon: Feather,
    },
    {
      title: 'Wisdom Teachings',
      desc: 'Timeless wisdom for modern living',
      icon: BookOpen,
    },
    {
      title: 'Self Reflection',
      desc: 'Tools for inner clarity and growth',
      icon: Heart,
    },
    {
      title: 'Sacred Community',
      desc: 'A space to grow together',
      icon: Users,
    },
    {
      title: 'Ongoing Support',
      desc: 'Guidance every step of the way',
      icon: Sparkles,
    },
    {
      title: 'Transform Your Life',
      desc: 'Live with purpose, peace and joy',
      icon: Sun,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden font-body text-[#352043]">
      
      {/* Purpose-1 Background Image Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-35 mix-blend-multiply"
        style={{ backgroundImage: "url('/images/purpose-1.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/60 via-transparent to-[#FAF7F2]/60 pointer-events-none z-0" />

      {/* Top Left Background Watermark Lotus */}
      <div className="absolute -top-16 -left-16 w-80 h-80 sm:w-96 sm:h-96 opacity-20 pointer-events-none z-0">
        <BackgroundLotusWatermark />
      </div>


      {/* Subtle Warm Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-radial from-[#F4E8D6]/60 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-radial from-[#EFE0F3]/40 to-transparent blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-24">

        {/* ======================================================================== */}
        {/* SECTION 1: THE SEVEN-STEP INNER JOURNEY */}
        {/* ======================================================================== */}
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/90 border border-[#E5DACD] text-[#8C6B28] text-[11px] font-semibold tracking-[0.2em] uppercase shadow-xs">
              DIVYA YOGAM
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3B104E] tracking-tight">
              The Seven-Step <span className="text-[#C8A34A] italic font-serif font-normal">Inner Journey</span>
            </h2>

            <LotusDivider />

            <p className="text-[#7A6B82] text-sm sm:text-base font-light pt-1">
              The seven steps to reconnect from within.
            </p>
          </div>

          {/* 7-Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4 items-stretch">
            {sevenSteps.map((item, idx) => {
              const IconComp = item.icon;
              const isHighlight = item.highlight;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className={
                    isHighlight
                      ? 'bg-gradient-to-b from-[#4A1460] via-[#3B104E] to-[#2B083A] text-white border border-[#DFC47A]/60 shadow-[0_10px_30px_rgba(59,16,78,0.35)] rounded-[22px] p-5 flex flex-col items-center text-center justify-between relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300'
                      : 'bg-white/90 backdrop-blur-xs border border-[#EFE7DE] shadow-[0_4px_20px_rgba(75,25,80,0.04)] rounded-[22px] p-5 flex flex-col items-center text-center justify-between hover:shadow-xl hover:border-[#C8A34A]/50 hover:-translate-y-1.5 transition-all duration-300 group'
                  }
                >
                  {/* Subtle Card Background Shimmer for Highlight */}
                  {isHighlight && (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(252,232,166,0.15)_0%,transparent_70%)] pointer-events-none" />
                  )}

                  {/* Top Step Number Badge */}
                  <div className="w-full flex justify-center mb-3">
                    <span
                      className={
                        isHighlight
                          ? 'w-8 h-8 rounded-full bg-white/15 border border-[#DFC47A]/40 flex items-center justify-center text-xs font-bold text-[#FCE8A6] shadow-xs'
                          : 'w-8 h-8 rounded-full bg-[#F7F2EC] border border-[#E5DACD] flex items-center justify-center text-xs font-bold text-[#8C6B28] group-hover:bg-[#8C6B28] group-hover:text-white group-hover:border-[#8C6B28] transition-colors'
                      }
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Icon & Details */}
                  <div className="flex flex-col items-center space-y-2 relative z-10 my-auto">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <IconComp
                        className={
                          isHighlight
                            ? 'w-7 h-7 text-[#FCE8A6] drop-shadow-[0_0_8px_rgba(252,232,166,0.7)] group-hover:scale-110 transition-transform'
                            : 'w-6 h-6 text-[#C8A34A] group-hover:scale-110 transition-transform'
                        }
                      />
                    </div>

                    <h3
                      className={
                        isHighlight
                          ? 'font-heading text-sm font-bold text-[#FCE8A6]'
                          : 'font-heading text-sm font-bold text-[#3B104E] group-hover:text-[#8C6B28] transition-colors'
                      }
                    >
                      {item.title}
                    </h3>

                    <p
                      className={
                        isHighlight
                          ? 'text-[11px] text-[#F0E4D7] leading-tight font-light max-w-[130px]'
                          : 'text-[11px] text-[#7A6B82] leading-tight font-light max-w-[130px]'
                      }
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* Highlight Bottom Flourish */}
                  {isHighlight && (
                    <div className="mt-3 pt-2 border-t border-white/10 w-full flex justify-center">
                      <div className="h-[1px] w-8 bg-[#DFC47A]/60" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ======================================================================== */}
        {/* SECTION 2: A SHIFT WITHIN (BANNER SECTION) */}
        {/* ======================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] bg-gradient-to-r from-[#F9F1F8] via-[#FAF3FA] to-[#FBF5FB] border border-[#EEDEEB] p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(75,25,80,0.05)] overflow-hidden"
        >
          {/* Left Edge Fluid Purple Gradient Swirl */}
          <div className="absolute left-0 top-0 bottom-0 w-48 sm:w-64 bg-gradient-to-r from-[#4A1460]/20 via-[#4A1460]/5 to-transparent pointer-events-none rounded-l-[32px]" />

          {/* Decorative Subtle Wave Curves on Left Banner Edge */}
          <svg
            className="absolute left-0 top-0 bottom-0 h-full w-40 sm:w-56 text-[#4A1460]/10 pointer-events-none"
            viewBox="0 0 200 400"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C80,100 120,250 0,400 Z" />
            <path d="M0,0 C120,120 60,300 0,400 Z" opacity="0.5" />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Heading, Subtitle & Quote Box */}
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/90 border border-[#E5DACD] text-[#8C6B28] text-[10px] font-semibold tracking-[0.2em] uppercase shadow-2xs mb-2">
                  THE JOURNEY WITHIN
                </span>
                
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3B104E]">
                  A Shift <span className="text-[#C8A34A] italic font-serif font-normal">Within</span>
                </h3>

                <div className="flex justify-center lg:justify-start">
                  <LotusDivider />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#7A6B82] leading-relaxed font-light max-w-md mx-auto lg:mx-0">
                This journey is not about becoming someone new. It&apos;s about returning to who you truly are.
              </p>

              {/* Quote Card */}
              <div className="mt-4 p-4 sm:p-4.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#EEDEEB] shadow-xs relative overflow-hidden flex items-start gap-3">
                <Quote className="w-6 h-6 text-[#4A1460] shrink-0 fill-[#4A1460]/10" />
                <p className="text-xs font-medium text-[#4A1460] italic leading-relaxed">
                  “True transformation begins the moment you choose to look within.”
                </p>
                {/* Background Lotus Watermark in Quote */}
                <GoldenLotusIcon className="absolute -right-3 -bottom-3 w-16 h-16 text-[#C8A34A]/10 pointer-events-none" />
              </div>
            </div>

            {/* Center Column: Orbital Mandala Emblem */}
            <div className="lg:col-span-3 flex justify-center my-2 lg:my-0">
              <CenterMandalaEmblem />
            </div>

            {/* Right Column: 6 Interactive Shift Pills */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              {shiftPills.map((pill, pIdx) => {
                const PillIcon = pill.icon;
                return (
                  <Link
                    key={pIdx}
                    href={pill.href}
                    className="bg-white rounded-2xl p-3 sm:p-3.5 flex items-center justify-between border border-[#EEDEEB] shadow-[0_2px_10px_rgba(75,25,80,0.03)] hover:shadow-md hover:border-[#4A1460]/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-[#F6EDF8] border border-[#EEDEEB] text-[#4A1460] flex items-center justify-center shrink-0 group-hover:bg-[#4A1460] group-hover:text-white transition-colors duration-300">
                        <PillIcon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#3B104E] group-hover:text-[#4A1460] transition-colors truncate">
                        {pill.label}
                      </span>
                    </div>

                    <ChevronRight className="w-4 h-4 text-[#B3A4C0] group-hover:text-[#4A1460] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                );
              })}
            </div>

          </div>
        </motion.div>

        {/* ======================================================================== */}
        {/* SECTION 3: STEPS OF INNER AWAKENING & CTA BANNER */}
        {/* ======================================================================== */}
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/90 border border-[#E5DACD] text-[#8C6B28] text-[11px] font-semibold tracking-[0.2em] uppercase shadow-xs">
              YOUR PATH FORWARD
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3B104E] tracking-tight">
              Steps of <span className="text-[#C8A34A] italic font-serif font-normal">Inner Awakening</span>
            </h2>

            <LotusDivider />

            <p className="text-[#7A6B82] text-sm sm:text-base font-light pt-1">
              Small steps. Deep shifts. Lasting transformation.
            </p>
          </div>

          {/* 7 Path Steps Horizontal Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 divide-y sm:divide-y-0 sm:divide-x divide-[#EFE7DE] bg-white/80 backdrop-blur-xs rounded-[24px] border border-[#EFE7DE] shadow-[0_4px_25px_rgba(75,25,80,0.04)] overflow-hidden">
            {pathSteps.map((step, sIdx) => {
              const PathIcon = step.icon;
              return (
                <motion.div
                  key={sIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: sIdx * 0.06 }}
                  className="p-4 sm:p-5 flex flex-col items-center text-center space-y-2.5 hover:bg-[#FDFBF7] transition-colors group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-full bg-[#F7F2EC] border border-[#E8DDD0] flex items-center justify-center text-[#8C6B28] group-hover:bg-[#4A1460] group-hover:text-white group-hover:border-[#4A1460] transition-all duration-300 shadow-2xs">
                    <PathIcon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading text-xs sm:text-sm font-bold text-[#3B104E] leading-tight group-hover:text-[#8C6B28] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-[11px] text-[#7A6B82] font-light leading-relaxed max-w-[130px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Action CTA Banner Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-full bg-gradient-to-r from-[#2B083A] via-[#481462] to-[#2B083A] border border-[#DFC47A]/40 p-4 sm:p-5 shadow-[0_10px_35px_rgba(43,8,58,0.35)] flex flex-col sm:flex-row items-center justify-between gap-4 overflow-hidden"
          >
            {/* Background Decorative Watermark Lotus on Right */}
            <GoldenLotusIcon className="absolute right-6 top-1/2 -translate-y-1/2 w-32 h-32 text-[#DFC47A]/10 pointer-events-none" strokeWidth={1} />

            <div className="flex items-center gap-4 text-center sm:text-left relative z-10 px-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5C1A78] to-[#2E0B3F] border border-[#DFC47A]/60 flex items-center justify-center text-[#FCE8A6] shadow-md shrink-0 hidden sm:flex">
                <GoldenLotusIcon className="w-7 h-7 text-[#FCE8A6]" strokeWidth={1.5} />
              </div>

              <div className="space-y-0.5">
                <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-white tracking-wide">
                  Begin Your Spiritual Journey Today
                </h3>
                <p className="text-xs text-[#E3D5E8] font-light">
                  Take the first step towards a more awakened you.
                </p>
              </div>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/practices"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E3C582] via-[#DFC47A] to-[#C8A34A] hover:from-[#F0D593] hover:to-[#D4AF37] text-[#2B083A] font-extrabold text-xs tracking-wider uppercase px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span>BEGIN YOUR JOURNEY</span>
                <ArrowRight className="w-4 h-4 text-[#2B083A] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

