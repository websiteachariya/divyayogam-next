'use client';

import { motion } from 'framer-motion';
import { Sparkles, HeartPulse, Flame, Sun } from 'lucide-react';
import { GoldenHeadingUnderline } from './SacredGeometrySvg';

export default function AdvancedProgrammes() {
  const transformations = [
    { text: 'Living', result: 'becomes Meditation', icon: HeartPulse },
    { text: 'Action', result: 'becomes Worship', icon: Flame },
    { text: 'Life', result: 'becomes Expression', icon: Sun },
  ];

  return (
    <section className="pt-3 pb-3 sm:pt-5 sm:pb-5 scroll-mt-24 sm:scroll-mt-28 bg-transparent relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-[11px] font-bold uppercase tracking-widest">
            HIGHER INITIATIONS
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043]">
            Advanced Consciousness <span className="text-[#8C5D00]">Programmes</span>
          </h2>
          <GoldenHeadingUnderline />

          <p className="text-[#352043] text-base sm:text-lg font-normal leading-relaxed max-w-3xl mx-auto">
            These advanced spiritual initiations are designed for sincere seekers who aspire to move beyond self-improvement into Self-Realisation. Each programme progressively awakens deeper dimensions of consciousness, allowing Divine Intelligence to guide every aspect of life.
          </p>
        </div>

        {/* Functioning from All States Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card rounded-[32px] p-8 sm:p-12 border-2 border-[#DFC47A]/60 bg-white shadow-xl space-y-8 max-w-4xl mx-auto"
        >
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-[#8C5D00] font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#8C5D00]" />
              <span>COSMIC REALIZATION</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#352043]">
              Functioning from All States of Consciousness
            </h3>

            <p className="text-[#352043] text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
              Ordinary people function through the conscious and subconscious mind. The awakened seeker functions through every level of consciousness—from physical awareness to Cosmic Consciousness—bringing clarity, compassion, creativity and Divine Presence into every action.
            </p>
          </div>

          {/* 3 Transformation Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {transformations.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F8F2E8] border border-[#E9DED3] text-center space-y-2 hover:border-[#8C5D00] hover:shadow-md transition-all group"
                >
                  <IconComponent className="w-6 h-6 text-[#8C5D00] mx-auto group-hover:scale-110 transition-transform" />
                  <span className="text-xs uppercase tracking-wider text-[#6B4200] font-bold block">
                    {item.text}
                  </span>
                  <span className="font-heading text-base font-bold text-[#352043] block">
                    {item.result}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
