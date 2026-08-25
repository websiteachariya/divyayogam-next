'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, Users, Compass, Eye } from 'lucide-react';

export default function TheLegacy() {
  const legacyAspects = [
    { label: 'Learnt & Grown', desc: 'Transforming knowledge into daily living wisdom', icon: Compass },
    { label: 'Led with Consciousness', desc: 'Building ethical, heart-centered leaders', icon: Users },
    { label: 'Discovered Themselves', desc: 'Connecting deeply with inner peace and truth', icon: Heart },
    { label: 'Looked Within', desc: 'Turning outward searching into inward awakening', icon: Eye },
  ];

  return (
    <section className="pt-3 pb-3 sm:pt-5 sm:pb-5 bg-[#FAF5EF] text-[#352043] relative overflow-hidden font-body">
      {/* Rich Visible Sandal Background Image Overlay (con-6.webp) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
            THE LEGACY
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#352043] leading-tight">
            “Not What He Created. <br />
            <span className="text-[#8C5D00] italic font-serif">Instead, What He Awakened.”</span>
          </h2>

          <div className="w-20 h-1 bg-[#8C5D00] rounded-full mx-auto" />

          <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#351A4A] font-normal leading-relaxed max-w-3xl mx-auto">
            “The true measure of a mentor is not the number of institutions, programmes or achievements left behind. It is the number of lives transformed.”
          </p>

          <p className="text-base sm:text-lg text-[#5E5865] font-normal max-w-3xl mx-auto leading-relaxed">
            The deeper legacy of Ji's journey is therefore found in people who have learnt, grown, led, discovered themselves—and begun to look within.
          </p>
        </motion.div>

        {/* 4 Legacy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {legacyAspects.map((asp, idx) => {
            const IconComponent = asp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-6 rounded-[24px] bg-white/95 border-2 border-[#E9DED3] text-center space-y-3 hover:border-[#8C5D00] hover:-translate-y-1 transition-all duration-300 shadow-md group backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EFE6F7] mx-auto flex items-center justify-center text-[#8C5D00] group-hover:bg-[#8C5D00] group-hover:text-white transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                  {asp.label}
                </h3>
                <p className="text-xs text-[#5E5865] leading-relaxed">
                  {asp.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
