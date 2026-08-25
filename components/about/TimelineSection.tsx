'use client';

import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

export default function TimelineSection() {
  const steps = [
    { title: '25+ YEARS', subtitle: 'A Journey Begins', desc: 'Starting with a profound inquiry into human possibility.' },
    { title: 'EDUCATION', subtitle: 'Learning Reimagined', desc: 'Reimagining education beyond academic limits.' },
    { title: 'HUMAN POTENTIAL', subtitle: 'Possibilities Expanded', desc: 'Unlocking memory, creativity, emotional & life skills.' },
    { title: 'LEADERSHIP', subtitle: 'People Empowered', desc: 'Inspiring conscious, value-driven corporate & institutional leaders.' },
    { title: 'WELLBEING', subtitle: 'Life Harmonised', desc: 'Bringing equilibrium to body, mind, emotion & energy.' },
    { title: 'MEDITATION', subtitle: 'The Journey Turns Inward', desc: 'Experiencing profound stillness and inner awareness.' },
    { title: 'CONSCIOUSNESS', subtitle: 'Awareness Deepens', desc: 'Exploring higher dimensions of human existence.' },
    { title: 'DIVYA YOGAM', subtitle: 'The Journey Within', desc: 'Harmonising the outer and inner journey into oneness.', featured: true },
  ];

  return (
    <section className="pt-3 pb-3 sm:pt-5 sm:pb-5 bg-[#FAF5EF] text-[#352043] relative overflow-hidden font-body">
      {/* Full Height Sandal Background Image Overlay (con-6.webp) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
            THE TIMELINE · 25+ YEARS
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#352043] leading-tight">
            A Journey of <span className="text-[#8C5D00] italic font-serif">Spiritual Evolution</span>
          </h2>

          <p className="text-[#5E5865] text-base sm:text-lg font-serif italic">
            From outer achievements to inner awakening.
          </p>

          <div className="w-20 h-1 bg-[#8C5D00] rounded-full mx-auto" />
        </div>

        {/* Timeline Path Flow */}
        <div className="relative max-w-3xl mx-auto">
          {/* Glowing Golden Vertical Spine: Left at 20px on Mobile (left-5), Centered on SM+ (sm:left-1/2) */}
          <div className="absolute left-5 sm:left-1/2 top-6 bottom-6 -translate-x-1/2 w-1 sm:w-1.5 bg-gradient-to-b from-[#8C5D00] via-[#C8A34A] to-[#8C5D00] rounded-full opacity-60 shadow-[0_0_12px_rgba(140,93,0,0.3)] z-0" />

          <div className="space-y-8 sm:space-y-14 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isFinal = !!step.featured;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="relative flex flex-row items-center group"
                >
                  {/* Left Side Content Card (on sm+ when even) */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:order-2 sm:text-left sm:pl-10'}`}>
                    <div className={`p-5 sm:p-7 rounded-[28px] border-2 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm ${
                      isFinal
                        ? 'bg-gradient-to-br from-[#FFFDF9]/95 via-[#FAF5EF]/95 to-[#FFFDF9]/95 text-[#352043] border-[#8C5D00] ring-4 ring-[#8C5D00]/15'
                        : 'bg-white/95 border-[#E9DED3] hover:border-[#8C5D00] text-[#352043]'
                    }`}>
                      {isFinal && (
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#8C5D00] text-white text-[10px] font-bold uppercase tracking-wider mb-2 sm:mb-0 sm:absolute sm:top-3 sm:right-3">
                          <Star className="w-3 h-3 fill-white" />
                          DESTINATION OF AWAKENING
                        </div>
                      )}

                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#8C5D00] block mb-1">
                        STEP 0{idx + 1}
                      </span>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                        {step.title}
                      </h3>

                      <p className="font-serif italic font-medium text-sm sm:text-base mt-1 text-[#8C5D00]">
                        {step.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm leading-relaxed mt-2 text-[#5E5865] font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Node Badge Circle - Sitting Side-by-Side at Left-5 on Mobile, Center on SM+ */}
                  <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-extrabold text-xs sm:text-sm shadow-lg transition-all duration-300 ${
                      isFinal
                        ? 'bg-[#8C5D00] text-white ring-4 ring-[#8C5D00]/40 scale-110 sm:scale-125 shadow-xl'
                        : 'bg-[#351A4A] text-[#DFC47A] border-2 border-[#8C5D00] group-hover:scale-115 group-hover:bg-[#8C5D00] group-hover:text-white'
                    }`}>
                      {idx + 1}
                    </div>
                  </div>

                  {/* Empty Column Placeholder for SM+ */}
                  <div className={`hidden sm:block sm:w-1/2 ${isEven ? 'order-2' : 'order-1'}`} />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
