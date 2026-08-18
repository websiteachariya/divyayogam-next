'use client';

import { motion } from 'framer-motion';
import { Quote, Brain, Compass, Sparkles } from 'lucide-react';
import { GoldenHeadingUnderline } from './SacredGeometrySvg';

export default function StatesOfMind() {
  return (
    <section className="py-24 sm:py-32 bg-transparent relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-[11px] font-bold uppercase tracking-widest">
            STATES OF MIND
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043]">
            From Subconscious to <span className="text-[#8C5D00]">Supra Consciousness</span>
          </h2>
          <GoldenHeadingUnderline />
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Subconscious Mind */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="luxury-card rounded-[32px] p-8 border border-[#E9DED3] bg-white space-y-5 shadow-md hover:border-[#8C5D00] hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#F8F2E8] border border-[#DFC47A]/40 flex items-center justify-center text-[#8C5D00] group-hover:scale-110 transition-transform shadow-sm">
              <Brain className="w-7 h-7 text-[#8C5D00]" />
            </div>

            <h3 className="font-heading text-2xl font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
              The Subconscious Mind
            </h3>

            <p className="text-[#3B2D4A] text-sm font-normal leading-relaxed">
              The subconscious mind stores memories, emotions, beliefs and karmic impressions. Divya Yogam enables the seeker to transcend subconscious patterns and awaken the limitless consciousness of the Self.
            </p>
          </motion.div>

          {/* Supra Consciousness */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="luxury-card rounded-[32px] p-8 border border-[#DFC47A]/60 bg-gradient-to-b from-[#FFFDF9] to-white space-y-5 shadow-lg hover:border-[#8C5D00] hover:shadow-2xl transition-all duration-300 group relative"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#F8F2E8] border border-[#DFC47A]/60 flex items-center justify-center text-[#8C5D00] group-hover:scale-110 transition-transform shadow-sm">
              <Compass className="w-7 h-7 text-[#8C5D00]" />
            </div>

            <h3 className="font-heading text-2xl font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
              Supra Consciousness
            </h3>

            <p className="text-[#3B2D4A] text-sm font-normal leading-relaxed">
              Supra Consciousness is the realm of Divine Awareness where the soul functions free from fear, limitation and conditioning.
            </p>
          </motion.div>

          {/* Beyond Super Consciousness */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="luxury-card rounded-[32px] p-8 border border-[#E9DED3] bg-white space-y-5 shadow-md hover:border-[#8C5D00] hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#F8F2E8] border border-[#DFC47A]/40 flex items-center justify-center text-[#8C5D00] group-hover:scale-110 transition-transform shadow-sm">
              <Sparkles className="w-7 h-7 text-[#8C5D00]" />
            </div>

            <h3 className="font-heading text-2xl font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
              Beyond Super Consciousness
            </h3>

            <p className="text-[#3B2D4A] text-sm font-normal leading-relaxed">
              Super Consciousness expands awareness. Supra Consciousness dissolves the individual into Universal Consciousness.
            </p>
          </motion.div>

        </div>

        {/* Master Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-3xl bg-[#352043] text-white border border-[#DFC47A]/40 text-center max-w-4xl mx-auto space-y-3 shadow-xl"
        >
          <Quote className="w-8 h-8 text-[#DFC47A] mx-auto" />
          <p className="font-serif italic text-lg sm:text-xl text-[#F8F2E8] leading-relaxed max-w-2xl mx-auto">
            &quot;Here, the seeker no longer seeks Truth. The seeker becomes the Living Expression of Truth.&quot;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
