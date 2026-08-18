'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Eye, Flame, Compass, Infinity as InfinityIcon, Sun, Quote, UploadCloud } from 'lucide-react';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Awareness',
    text: 'See yourself clearly',
    icon: Eye,
  },
  {
    number: '02',
    title: 'Stillness',
    text: 'Create space within',
    icon: Flame,
  },
  {
    number: '03',
    title: 'Balance',
    text: 'Bring every dimension of life into harmony',
    icon: Compass,
  },
  {
    number: '04',
    title: 'Oneness',
    text: 'Experience connection beyond the individual self',
    icon: InfinityIcon,
  },
  {
    number: '05',
    title: 'Conscious Living',
    text: 'Let awareness guide everyday life',
    icon: Sun,
  },
];

export default function CorePurpose() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF5EF] relative overflow-hidden font-body border-t border-[#E9DED3]">
      {/* Full Height Sandal Background Image Overlay (con-6.webp) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-20">
        
        {/* Top 2-Column Split: Candle Satsang Photo + Our Philosophy Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Candle-lit Satsang Photo Spotlight Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-md group">
              {/* Outer Golden Glow Halo */}
              <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-tr from-[#C8A34A] via-[#DFC47A] to-[#8C5D00] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />
              
              {/* Portrait Frame - Waiting for Image to be Uploaded */}
              <div className="relative rounded-[32px] overflow-hidden luxury-card border-2 border-[#DFC47A]/70 p-3 sm:p-4 bg-white/95 backdrop-blur-sm shadow-2xl">
                <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EF] to-[#F8F2E8] aspect-[4/5] flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-[#DFC47A]/60">
                  
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
                      Philosophy photograph will be updated soon
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: OUR PHILOSOPHY Narrative & Mantra Banner */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A34A]" />
                OUR PHILOSOPHY
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043] leading-tight">
                The Path <span className="text-[#8C5D00] italic font-serif">Within</span>
              </h2>

              <p className="text-[#5E5865] text-base sm:text-lg leading-relaxed font-light">
                Divya Yogam is a journey of awareness, inner balance and conscious living— bringing together the physical, mental, emotional, intellectual and spiritual dimensions of human life.
              </p>
            </div>

            {/* Mantra Banner: Know. Experience. Awaken. */}
            <div className="p-5 sm:p-6 rounded-[24px] bg-gradient-to-r from-[#FFFDF9]/95 via-[#FAF5EF]/95 to-[#FFFDF9]/95 border-2 border-[#E9DED3] shadow-md flex items-center justify-between text-[#8C5D00] backdrop-blur-sm">
              <span className="font-heading text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-[#352043]">
                Know <span className="text-[#8C5D00]">·</span> Experience <span className="text-[#8C5D00]">·</span> Awaken
              </span>
              <Sparkles className="w-6 h-6 text-[#8C5D00] shrink-0" />
            </div>

          </motion.div>

        </div>

        {/* Middle Section: SPIRITUAL PRINCIPLES (5 Principles Cards) */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C5D00] block">
              SPIRITUAL PRINCIPLES
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#352043]">
              Five Principles. <span className="text-[#8C5D00] italic font-serif">One Way of Living</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PRINCIPLES.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="luxury-card rounded-[24px] p-5 sm:p-6 border border-[#E9DED3] bg-white/95 backdrop-blur-sm space-y-4 shadow-sm hover:shadow-xl hover:border-[#8C5D00] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-[#F8F2E8] border border-[#DFC47A]/50 flex items-center justify-center text-[#8C5D00] group-hover:bg-[#8C5D00] group-hover:text-white transition-all duration-300 shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-heading text-lg font-bold text-[#8C5D00]">
                        {item.number}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-heading text-lg font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[#5E5865] text-xs sm:text-sm font-light leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E9DED3] text-[10px] font-bold text-[#8C5D00] uppercase tracking-wider">
                    PRINCIPLE {item.number}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Spotlight Card: THE DIVYA YOGAM PATH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card rounded-[32px] p-8 sm:p-10 border-2 border-[#E9DED3] bg-gradient-to-br from-[#FFFDF9]/95 via-[#FAF5EF]/95 to-[#FFFDF9]/95 backdrop-blur-sm shadow-xl space-y-6 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8C5D00]/15 border border-[#8C5D00]/40 text-[#8C5D00] text-xs uppercase tracking-widest font-extrabold">
            THE DIVYA YOGAM PATH
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#352043]">
            From the Outer Self <span className="text-[#8C5D00] italic font-serif">to the Inner Self</span>
          </h3>

          <p className="text-[#5E5865] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Divya Yogam follows a progressive movement—from self-observation to self-awareness, from inner balance to deeper experience.
          </p>

          <div className="pt-4 border-t border-[#E9DED3] flex items-center justify-center gap-3 max-w-xl mx-auto">
            <Quote className="w-5 h-5 text-[#8C5D00] shrink-0" />
            <p className="font-serif italic text-base sm:text-lg text-[#351A4A] font-semibold">
              “It is not a belief system to be followed. It is an experience to be explored.”
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
