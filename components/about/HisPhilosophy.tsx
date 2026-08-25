'use client';

import { motion } from 'framer-motion';
import { Sparkles, Activity, Brain, Heart, Compass, Eye } from 'lucide-react';

export default function HisPhilosophy() {
  const wisdomCards = [
    {
      stage: 'KNOWLEDGE',
      title: 'Develops the Mind',
      desc: 'Information and intellectual understanding lay the essential foundation for growth.',
    },
    {
      stage: 'EXPERIENCE',
      title: 'Develops Wisdom',
      desc: 'Direct personal practice transforms abstract concepts into living inner knowing.',
    },
    {
      stage: 'AWARENESS',
      title: 'Transforms Life',
      desc: 'Pure conscious presence awakens the highest possibility within the human being.',
    },
  ];

  const fiveDimensions = [
    { name: 'Body', label: 'Physical Vitality & Health', icon: Activity },
    { name: 'Mind', label: 'Mental Clarity & Peace', icon: Brain },
    { name: 'Heart', label: 'Emotional Balance & Love', icon: Heart },
    { name: 'Intellect', label: 'Discernment & Wisdom', icon: Compass },
    { name: 'Consciousness', label: 'Spiritual Awakening', icon: Eye },
  ];

  return (
    <section className="pt-3 pb-3 sm:pt-5 sm:pb-5 bg-[#FAF5EF] relative overflow-hidden font-body text-[#352043]">
      {/* Rich Visible Sandal Background Image Overlay (con-6.webp) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
            HIS PHILOSOPHY
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#352043] leading-tight">
            “Beyond Achievement. <span className="text-[#8C5D00] italic font-serif">Towards Awareness”</span>
          </h2>

          <p className="text-[#5E5865] text-base sm:text-lg font-serif italic max-w-2xl mx-auto">
            Ji's philosophy is rooted in a simple yet profound understanding of human development.
          </p>

          <div className="w-20 h-1 bg-[#8C5D00] rounded-full mx-auto" />
        </div>

        {/* 3 Wisdom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wisdomCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="rounded-[28px] p-8 bg-white/95 border-2 border-[#E9DED3] hover:border-[#8C5D00] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm"
            >
              <div className="space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#8C5D00]">
                  STEP 0{idx + 1} · {card.stage}
                </span>

                <h3 className="font-heading text-2xl font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm leading-relaxed font-normal text-[#5E5865]">
                  {card.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E9DED3] flex items-center justify-between text-xs font-semibold text-[#8C5D00]">
                <span>{card.stage}</span>
                <span>❖</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* THE WHOLE HUMAN BEING (5 DIMENSIONS) - SANDAL LIGHT LUXURY DESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] bg-white/95 border-2 border-[#E9DED3] p-8 sm:p-12 shadow-xl space-y-8 relative overflow-hidden backdrop-blur-sm"
        >
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold">
              HOLISTIC INTEGRATION
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#352043]">
              Embracing the <span className="text-[#8C5D00] italic font-serif">Whole Human Being</span>
            </h3>
            <p className="text-[#5E5865] text-sm sm:text-base font-normal">
              His work addresses the entirety of human experience across five fundamental dimensions:
            </p>
          </div>

          {/* 5 Dimension Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {fiveDimensions.map((dim, idx) => {
              const IconComp = dim.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-5 rounded-2xl bg-[#FAF5EF] border border-[#E9DED3] text-center space-y-2 hover:bg-white hover:border-[#8C5D00] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#EFE6F7] mx-auto flex items-center justify-center text-[#8C5D00] group-hover:bg-[#8C5D00] group-hover:text-white transition-all">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="font-heading font-extrabold text-lg text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                    {dim.name}
                  </div>
                  <div className="text-xs text-[#5E5865] font-normal leading-tight">
                    {dim.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#E9DED3] text-center max-w-3xl mx-auto space-y-2">
            <p className="text-xs font-bold text-[#8C5D00] uppercase tracking-widest">
              INTEGRATING ANCIENT WISDOM & MODERN SCIENCE
            </p>
            <p className="text-sm sm:text-base text-[#352043] font-serif italic">
              “This vision is reflected in his work across meditation, inner peace, spiritual wellness, chakra awareness and IQ • EQ • SQ.”
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
