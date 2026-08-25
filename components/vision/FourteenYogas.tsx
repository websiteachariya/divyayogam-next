'use client';

import { motion } from 'framer-motion';
import { Quote, Infinity as InfinityIcon } from 'lucide-react';
import { GoldenHeadingUnderline } from './SacredGeometrySvg';

export default function FourteenYogas() {
  const yogas = [
    'Body Yoga', 'Breath Yoga', 'Mind Yoga', 'Emotional Yoga',
    'Relationship Yoga', 'Karma Yoga', 'Wisdom Yoga', 'Devotion Yoga',
    'Meditation Yoga', 'Service Yoga', 'Abundance Yoga', 'Leadership Yoga',
    'Creativity Yoga', 'Divine Consciousness Yoga'
  ];

  return (
    <section id="fourteen-yogas" className="pt-3 pb-3 sm:pt-5 sm:pb-5 scroll-mt-24 sm:scroll-mt-28 bg-transparent relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-[11px] font-bold uppercase tracking-widest">
            UNIFIED SYSTEM
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043]">
            Fourteen Yogas — <span className="text-[#8C5D00]">Complete Science</span>
          </h2>
          <GoldenHeadingUnderline />

          <p className="text-[#352043] text-base sm:text-lg font-normal leading-relaxed max-w-3xl mx-auto">
            Every dimension of life requires a different Yoga. The Fourteen Yogas integrate body, breath, mind, emotions, relationships, karma, wisdom, devotion, meditation, service, abundance, leadership, creativity, and Divine Consciousness into one unified path.
          </p>
        </div>

        {/* 14 Yogas Pills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto"
        >
          {yogas.map((yoga, idx) => (
            <div
              key={idx}
              className="px-5 py-3 rounded-full bg-white border border-[#E9DED3] text-[#352043] text-sm font-semibold shadow-sm hover:border-[#8C5D00] hover:bg-[#FFFDF9] hover:scale-105 transition-all duration-300 flex items-center gap-2 font-body"
            >
              <InfinityIcon className="w-4 h-4 text-[#8C5D00]" />
              <span>{yoga}</span>
            </div>
          ))}
        </motion.div>

        {/* Master Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-3xl bg-gradient-to-r from-[#FFFDF9] via-white to-[#FFFDF9] border-2 border-[#DFC47A]/60 text-center max-w-3xl mx-auto space-y-2 shadow-lg"
        >
          <Quote className="w-6 h-6 text-[#C8A34A] mx-auto" />
          <p className="font-serif italic text-lg sm:text-xl text-[#352043] leading-relaxed">
            &quot;When these Yogas function together, life itself becomes Yoga.&quot;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
