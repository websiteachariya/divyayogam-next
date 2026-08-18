'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function JourneyEssence() {
  const fiveSteps = [
    { title: 'Learn', sub: 'Acquire truth & clarity' },
    { title: 'Experience', sub: 'Embody through practice' },
    { title: 'Become Aware', sub: 'Witness with stillness' },
    { title: 'Transform', sub: 'Evolve from within' },
    { title: 'Awaken', sub: 'Realise higher divine nature' },
  ];

  const shifts = [
    { from: 'From knowing more', to: 'to becoming more.' },
    { from: 'From achieving outwardly', to: 'to awakening inwardly.' },
    { from: 'From human potential', to: 'to higher consciousness.' },
  ];

  return (
    <section className="py-24 bg-[#FAF5EF] text-[#352043] relative overflow-hidden font-body">
      {/* Rich Visible Sandal Background Image Overlay (con-6.webp) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
            THE ESSENCE OF HIS BEAUTIFUL JOURNEY
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#352043] leading-tight">
            The Pathway to <span className="text-[#8C5D00] italic font-serif">Self-Realization</span>
          </h2>

          <div className="w-20 h-1 bg-[#8C5D00] rounded-full mx-auto" />
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {fiveSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-[24px] bg-white/95 border-2 border-[#E9DED3] text-center space-y-2 hover:border-[#8C5D00] hover:shadow-lg transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-full bg-[#EFE6F7] text-[#8C5D00] text-xs font-bold flex items-center justify-center mx-auto group-hover:bg-[#8C5D00] group-hover:text-white transition-colors">
                {idx + 1}
              </div>
              <h3 className="font-heading text-xl font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-[#5E5865] leading-relaxed">
                {step.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3 TRANSFORMATIONAL SHIFTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {shifts.map((shift, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="p-7 rounded-[28px] bg-white/95 border-2 border-[#E9DED3] text-center space-y-3 shadow-sm hover:border-[#8C5D00] transition-all hover:scale-105 backdrop-blur-sm"
            >
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#8C5D00]">
                PARADIGM SHIFT 0{idx + 1}
              </span>
              <p className="text-sm text-[#5E5865] font-normal line-through opacity-75">
                {shift.from}
              </p>
              <div className="text-xs text-[#8C5D00]">↓</div>
              <p className="font-heading font-extrabold text-xl sm:text-2xl text-[#352043]">
                {shift.to}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CLOSING MANTRA BANNER - SANDAL LIGHT LUXURY DESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-[32px] bg-white/95 border-2 border-[#E9DED3] text-[#352043] text-center space-y-4 shadow-xl backdrop-blur-sm"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#8C5D00]" />
            <span className="text-[#8C5D00] text-xs font-bold uppercase tracking-widest">
              THE CORE SPIRIT
            </span>
            <div className="h-[1px] w-12 bg-[#8C5D00]" />
          </div>

          <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#352043] leading-tight max-w-4xl mx-auto">
            “This is the journey of Ji and This is the <span className="text-[#8C5D00] italic font-serif">CORE spirit of Divya Yogam.”</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
