'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, Quote, Sun, Heart, Flame, Compass, Globe, UploadCloud } from 'lucide-react';

export default function VisionMission() {
  const essenceSteps = [
    { title: 'Know Yourself', desc: 'Discover the person within.' },
    { title: 'Awaken', desc: 'Expand awareness and consciousness.' },
    { title: 'Experience', desc: 'Move from belief to inner experience.' },
    { title: 'Transform', desc: 'Bring inner awakening into everyday life.' },
    { title: 'Serve', desc: 'Let your transformation become a source of goodness for others' },
  ];

  const whatIsSpaces = [
    'Quiet the mind',
    'Open the heart',
    'Experience grace',
    'Live with purpose',
    'Awaken awareness',
    'Discover inner strength',
  ];

  const shifts = [
    { from: 'Restlessness', to: 'Peace' },
    { from: 'Confusion', to: 'Clarity' },
    { from: 'Seeking', to: 'Experiencing' },
    { from: 'Self', to: 'the Divine' },
  ];

  const foundationPillars = [
    'Awaken Individuals',
    'Strengthen Families',
    'Enrich Communities',
    'Serve Humanity',
  ];


  return (
    <section className="py-20 sm:py-28 bg-[#F8F2E8] relative overflow-hidden font-body">

      {/* Background Sacred Geometric Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <svg width="800" height="800" viewBox="0 0 100 100" fill="none" stroke="#DFC47A" strokeWidth="0.5">
          <circle cx="50" cy="50" r="48" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="38" />
          <circle cx="50" cy="50" r="28" strokeDasharray="1 1" />
          <path d="M50 2 C62 25 75 38 98 50 C75 62 62 75 50 98 C38 75 25 62 2 50 C25 38 38 25 50 2 Z" />
        </svg>
      </div>

      {/* Background Golden Flower Blossom (deco-18.webp) Left Side - Displayed on all screen sizes */}
      <div className="absolute top-24 sm:top-44 lg:top-64 -left-16 sm:-left-20 lg:-left-28 opacity-35 sm:opacity-40 pointer-events-none w-[260px] sm:w-[380px] lg:w-[520px] h-[260px] sm:h-[380px] lg:h-[520px] z-0">
        <Image
          src="/images/deco-18.webp"
          alt="Golden Flower Blossom Deco-18"
          fill
          className="object-contain drop-shadow-[0_0_20px_rgba(223,196,122,0.35)]"
          priority
        />
      </div>

      {/* Background Golden Vine Ornament (deco-17.webp) Right Side - Full height with reduced width */}
      <div className="absolute top-1/2 -right-8 sm:-right-16 lg:-right-24 xl:-right-32 -translate-y-1/2 opacity-35 sm:opacity-55 lg:opacity-65 pointer-events-none w-[200px] sm:w-[340px] lg:w-[520px] xl:w-[620px] h-[900px] sm:h-[1400px] lg:h-[2300px] xl:h-[2700px] z-0">
        <Image
          src="/images/deco-17.webp"
          alt="Golden Vine Ornament Deco-17"
          fill
          className="object-contain object-right drop-shadow-[0_0_30px_rgba(223,196,122,0.45)]"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-24">

        {/* 1. THE GUIDING LIGHT: Portrait of Ji + MD Sir_4 + deco-2.webp */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Portrait of Arawindhan Ji */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative group w-full max-w-md z-10">
              {/* Outer Golden Arch Glow */}
              <div className="absolute -inset-2 rounded-t-full bg-gradient-to-tr from-[#C8A34A] via-[#DFC47A] to-[#8C5D00] opacity-30 group-hover:opacity-50 transition-all duration-700 pointer-events-none" />

              {/* Portrait Arch Frame with Waiting for Image to be Uploaded Placeholder */}
              <div className="relative rounded-t-full rounded-b-[28px] overflow-hidden luxury-card border-2 border-[#E9DED3] p-3 sm:p-4 shadow-xl bg-white">
                <div className="relative rounded-t-full rounded-b-2xl overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EF] to-[#F8F2E8] aspect-[4/5] flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-[#DFC47A]/60">
                  
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#C8A34A_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

                  {/* Pulsing Icon Badge */}
                  <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 backdrop-blur-sm border-2 border-[#C8A34A]/50 shadow-md flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C8A34A]/20 to-[#8C5D00]/20 animate-pulse pointer-events-none" />
                    <UploadCloud className="w-9 h-9 sm:w-10 sm:h-10 text-[#8C5D00]" />
                  </div>

                  {/* Text Container */}
                  <div className="relative z-10 space-y-2 max-w-[220px]">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-[#8C5D00]/10 text-[#8C5D00] text-[11px] font-bold uppercase tracking-widest border border-[#8C5D00]/20">
                      Pending Upload
                    </span>
                    <h4 className="font-heading text-base sm:text-lg font-bold text-[#352043] leading-snug">
                      Waiting for Image to be Uploaded
                    </h4>
                    <p className="text-xs text-[#5E5865] font-light">
                      Image will appear here once uploaded
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: THE GUIDING LIGHT Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A34A]" />
              THE GUIDING LIGHT
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#352043] leading-tight">
              Santoshi Shri. <span className="text-[#8C5D00] italic font-serif">Arawindhan Ji</span>
            </h2>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#8C5D00]">
              <span>Spiritual Master</span>
              <span>•</span>
              <span>Mahaavadhani</span>
              <span>•</span>
              <span>Spiritual Guide to Inner Transformation</span>
            </div>

            <p className="text-[#5E5865] text-base sm:text-lg leading-relaxed font-light">
              Every meaningful journey benefits from a guiding light. Santoshi Shri. Arawindhan Ji’s spiritual guidance encourages individuals to look beyond the external and discover the awareness, wisdom and divine potential within.
            </p>

            <p className="text-[#5E5865] text-base leading-relaxed font-light">
              His approach brings together spiritual wisdom, inner exploration and conscious living, helping seekers make spirituality an experience rather than merely an idea.
            </p>

            {/* Master Quote Box */}
            <div className="p-5 sm:p-6 rounded-[24px] bg-gradient-to-r from-[#FFFDF9] via-[#FAF5EF] to-[#FFFDF9] border-2 border-[#E9DED3] shadow-md space-y-1 relative text-left">
              <Quote className="w-5 h-5 text-[#8C5D00]" />
              <p className="font-serif italic text-base sm:text-lg text-[#351A4A] font-semibold">
                “The Divine is not far away. The journey to experience it begins within.”
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <span>Meet Santoshi Shri. Arawindhan Ji</span>
                <ArrowRight className="w-4 h-4 text-[#DFC47A] group-hover:text-[#47206A] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* 2. THE ESSENCE OF DIVYA YOGAM & WHAT IS DIVYA YOGAM? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 pt-4 relative">

          {/* Center Decorative Vector Icon Emblem (Hidden on small/mobile screens) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden lg:flex flex-col items-center justify-center h-4/5">
            <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-[#DFC47A]/35 to-transparent absolute top-1/2 -translate-y-1/2" />
            <div className="relative z-10 p-1.5 rounded-full bg-[#FAF5EF] border border-[#DFC47A]/50 shadow-md">
              <div className="w-11 h-11 rounded-full bg-white border-2 border-[#DFC47A] shadow-inner flex items-center justify-center text-[#8C5D00]">
                <Sparkles className="w-5 h-5 text-[#8C5D00]" />
              </div>
            </div>
          </div>

          {/* ESSENCE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="luxury-card rounded-[32px] p-7 sm:p-9 border-2 border-[#E9DED3] bg-white space-y-6 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8C5D00]/10 text-[#8C5D00] text-xs font-bold uppercase tracking-widest">
                THE ESSENCE OF DIVYA YOGAM
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#352043]">
                The Journey <span className="text-[#8C5D00] italic font-serif">Begins Within</span>
              </h3>

              <p className="text-[#5E5865] text-sm sm:text-base leading-relaxed font-light">
                Divya Yogam is not merely about learning spirituality. It is about experiencing it, living it and allowing it to transform the way we see ourselves and life.
              </p>

              {/* 5 Essence Steps */}
              <div className="space-y-3 pt-2">
                {essenceSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-[#FAF5EF] border border-[#E9DED3]">
                    <CheckCircle2 className="w-5 h-5 text-[#8C5D00] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-heading text-sm font-bold text-[#352043] block">
                        {step.title}
                      </span>
                      <span className="text-xs text-[#5E5865] font-light">
                        {step.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pathway Flow */}
            <div className="pt-4 border-t border-[#E9DED3] space-y-2">
              <span className="text-[10px] font-extrabold text-[#8C5D00] uppercase tracking-widest block">
                Let your transformation become a source of goodness for others
              </span>
              <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-bold font-heading text-[#352043] bg-[#F8F2E8] p-3 rounded-xl border border-[#DFC47A]/40">
                <span>Know</span>
                <span className="text-[#8C5D00]">→</span>
                <span>Awaken</span>
                <span className="text-[#8C5D00]">→</span>
                <span>Experience</span>
                <span className="text-[#8C5D00]">→</span>
                <span>Transform</span>
                <span className="text-[#8C5D00]">→</span>
                <span className="text-[#8C5D00]">Serve</span>
              </div>
              <p className="text-xs italic font-serif text-[#5E5865] text-center pt-1">
                “When we transform within, life begins to transform around us.”
              </p>
            </div>
          </motion.div>

          {/* WHAT IS DIVYA YOGAM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="luxury-card rounded-[32px] p-7 sm:p-9 border-2 border-[#E9DED3] bg-white space-y-6 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8C5D00]/10 text-[#8C5D00] text-xs font-bold uppercase tracking-widest">
                WHAT IS DIVYA YOGAM?
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#352043]">
                A Path of <span className="text-[#8C5D00] italic font-serif">Inner Awakening</span>
              </h3>

              <p className="text-[#5E5865] text-sm sm:text-base leading-relaxed font-light">
                Divya Yogam is a spiritual journey that guides an individual towards a deeper understanding of self, consciousness, life and the Divine. It creates a space to:
              </p>

              {/* 6 Bullet Points Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {whatIsSpaces.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FAF5EF] border border-[#E9DED3]">
                    <div className="w-2 h-2 rounded-full bg-[#8C5D00]" />
                    <span className="text-xs font-semibold text-[#352043]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Center Emblem & Icon Motif in between space */}
            <div className="my-auto py-3 flex flex-col items-center justify-center text-center space-y-2">
              <div className="flex items-center justify-center gap-4 w-full px-2">
                <div className="h-px bg-gradient-to-r from-transparent via-[#DFC47A] to-transparent flex-1" />
                <div className="relative group">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#DFC47A] to-[#8C5D00] opacity-30 blur-xs group-hover:opacity-60 transition-all" />
                  <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-[#FFFDF9] to-[#FAF5EF] border-2 border-[#DFC47A] flex items-center justify-center text-[#8C5D00] shadow-md">
                    <Sun className="w-5 h-5 text-[#8C5D00]" />
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#DFC47A] to-transparent flex-1" />
              </div>
              <p className="font-serif italic text-xs text-[#8C5D00] max-w-xs font-medium">
                “A journey from the finite self to infinite consciousness”
              </p>
            </div>

            {/* 4 Shifts */}
            <div className="pt-4 border-t border-[#E9DED3] space-y-2">
              <span className="text-[10px] font-extrabold text-[#8C5D00] uppercase tracking-widest block">
                PARADIGM INNER SHIFTS
              </span>
              <div className="grid grid-cols-2 gap-2">
                {shifts.map((shift, sIdx) => (
                  <div key={sIdx} className="p-2.5 rounded-xl bg-[#F8F2E8] border border-[#DFC47A]/30 text-center text-xs">
                    <span className="text-[#5E5865] block text-[10px]">From {shift.from}</span>
                    <span className="font-bold text-[#8C5D00] font-heading">to {shift.to}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3. DIVINE GRACE FOUNDATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card rounded-[32px] p-8 sm:p-10 border-2 border-[#E9DED3] bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EF] to-[#FFFDF9] shadow-xl space-y-6 relative overflow-hidden"
        >
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#8C5D00]/15 text-[#8C5D00] text-xs font-extrabold uppercase tracking-widest">
              DIVINE GRACE FOUNDATION
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#352043]">
              Awakening Consciousness. <span className="text-[#8C5D00] italic font-serif">Enriching Lives. Serving Humanity.</span>
            </h3>
            <p className="text-[#5E5865] text-sm sm:text-base leading-relaxed font-light">
              Divine Grace Foundation is the holistic wellness foundation through which the vision of Divya Yogam is nurtured and shared. Our endeavour is to create meaningful spaces where individuals can discover inner peace, higher awareness, purposeful living and a deeper connection with the Divine.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-2">
            {foundationPillars.map((pillarText, pIdx) => (
              <div key={pIdx} className="p-4 rounded-2xl bg-white border border-[#E9DED3] text-center space-y-2 shadow-xs hover:border-[#8C5D00] transition-all">
                <CheckCircle2 className="w-5 h-5 text-[#8C5D00] mx-auto" />
                <span className="font-heading text-xs sm:text-sm font-bold text-[#352043] block">
                  {pillarText}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <span>Discover Divine Grace Foundation</span>
              <ArrowRight className="w-4 h-4 text-[#DFC47A] group-hover:text-[#47206A] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
