'use client';

import { motion } from 'framer-motion';
import { Sparkles, Quote, Sun, Zap, Heart, Eye, Infinity as InfinityIcon } from 'lucide-react';
import { GoldenHeadingUnderline } from './SacredGeometrySvg';

export default function SubtleArchitecture() {
  const bodies = [
    { name: 'Physical Body', kosha: 'Annamaya Kosha', desc: 'The physical vessel nourished by food, posture, and clean rest.', icon: Sun },
    { name: 'Energy Body', kosha: 'Pranamaya Kosha', desc: 'The subtle life force regulating vital prana through breath.', icon: Zap },
    { name: 'Mental Body', kosha: 'Manomaya Kosha', desc: 'The realm of thoughts, desires, and emotional patterns.', icon: Heart },
    { name: 'Wisdom Body', kosha: 'Vijnanamaya Kosha', desc: 'Higher intellect and intuitive discernment awakened by truth.', icon: Eye },
    { name: 'Bliss Body', kosha: 'Anandamaya Kosha', desc: 'The innermost core of divine joy and unconditioned peace.', icon: InfinityIcon },
  ];

  return (
    <section className="pt-3 pb-3 sm:pt-5 sm:pb-5 scroll-mt-24 sm:scroll-mt-28 bg-transparent relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-[11px] font-bold uppercase tracking-widest">
            SUBTLE ARCHITECTURE
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043]">
            From the Five Bodies to the <span className="text-[#8C5D00]">Seven Chakras</span>
          </h2>
          <GoldenHeadingUnderline />

          <p className="text-[#352043] text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Human existence functions through five subtle bodies: Physical Body, Energy Body, Mental Body, Wisdom Body, and Bliss Body.
          </p>
        </div>

        {/* 5 Subtle Bodies Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {bodies.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="luxury-card rounded-[28px] p-6 border border-[#E9DED3] bg-white flex flex-col justify-between space-y-4 shadow-sm hover:border-[#8C5D00] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F2E8] border border-[#DFC47A]/40 flex items-center justify-center text-[#8C5D00] group-hover:scale-110 transition-transform shadow-sm">
                    <IconComponent className="w-6 h-6 text-[#8C5D00]" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                    {item.name}
                  </h3>

                  <span className="inline-block px-3 py-1 rounded-full royal-gold-badge text-[10px] font-bold uppercase tracking-wider">
                    {item.kosha}
                  </span>

                  <p className="text-[#3B2D4A] text-xs font-normal leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Awakening of the Seven Chakras Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card rounded-[32px] p-8 sm:p-12 border-2 border-[#DFC47A]/60 bg-gradient-to-r from-white via-[#FFFDF9] to-[#F8F2E8] shadow-xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[#8C5D00] font-bold text-xs uppercase tracking-wider font-body">
              <Sparkles className="w-4 h-4 text-[#8C5D00]" />
              <span>DIVINE EVOLUTION</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#352043]">
              Awakening of the Seven Chakras
            </h3>

            <p className="text-[#352043] text-sm sm:text-base font-normal leading-relaxed">
              When these five bodies become purified and harmonised, the Seven Divine Chakras naturally awaken. The awakening of the chakras is not merely the activation of energy centres; it is the flowering of Divine Consciousness within the human system.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#F8F2E8] border border-[#DFC47A]/40 space-y-2 text-center lg:text-left shadow-sm">
            <Quote className="w-6 h-6 text-[#C8A34A]" />
            <p className="text-[#352043] font-serif italic text-sm leading-relaxed">
              &quot;Purification of the 5 Subtle Bodies leads to the natural flowering of Divine Energy through the 7 Chakras.&quot;
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
