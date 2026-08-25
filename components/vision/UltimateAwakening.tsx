'use client';

import { motion } from 'framer-motion';
import { Quote, Sparkles, Heart, Sun } from 'lucide-react';
import { GoldenHeadingUnderline } from './SacredGeometrySvg';

export default function UltimateAwakening() {
  const truths = [
    { subject: 'Every Soul', truth: 'carries Divine Potential', icon: Sparkles },
    { subject: 'Every Life', truth: 'has a Divine Purpose', icon: Heart },
    { subject: 'Every Human Being', truth: 'is destined to awaken', icon: Sun },
  ];

  return (
    <section className="pt-3 pb-3 sm:pt-5 sm:pb-5 scroll-mt-24 sm:scroll-mt-28 bg-[#2D1A39] text-[#F8F2E8] relative overflow-hidden font-body border-t border-[#DFC47A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DFC47A]/15 border border-[#DFC47A]/40 text-[#DFC47A] text-[11px] font-bold uppercase tracking-widest">
            THE ULTIMATE AWAKENING
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            The Vision of <span className="text-[#DFC47A]">Divya Yogam</span>
          </h2>
          <GoldenHeadingUnderline />
        </div>

        {/* 3 Core Truth Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {truths.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-3xl bg-white/5 border border-[#DFC47A]/30 backdrop-blur-md text-center space-y-4 shadow-xl hover:border-[#DFC47A] hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#DFC47A]/15 border border-[#DFC47A]/40 flex items-center justify-center text-[#DFC47A] mx-auto group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7" />
                </div>

                <span className="text-xs uppercase tracking-widest text-[#DFC47A] font-semibold block">
                  {item.subject}
                </span>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-[#DFC47A] transition-colors">
                  {item.truth}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Master Vision Final Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-14 rounded-[36px] bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-2 border-[#DFC47A]/50 backdrop-blur-xl text-center max-w-4xl mx-auto space-y-4 shadow-2xl relative overflow-hidden"
        >
          <Quote className="w-10 h-10 text-[#DFC47A] mx-auto" />
          <p className="font-serif italic text-lg sm:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
            &quot;Divya Yogam is not merely a practice. It is a Sacred Journey from the Human to the Divine, from Knowledge to Wisdom, from Separation to Oneness, and from the Limited Self to Infinite Consciousness.&quot;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
