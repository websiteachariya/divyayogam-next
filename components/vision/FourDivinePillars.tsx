'use client';

import { motion } from 'framer-motion';
import { Eye, Heart, Flame, Sparkles, Infinity as InfinityIcon } from 'lucide-react';
import { GoldenHeadingUnderline } from './SacredGeometrySvg';

export default function FourDivinePillars() {
  const pillars = [
    {
      num: '01',
      title: 'Awareness',
      subtitle: 'Know the self',
      desc: 'Cultivate observation, presence and inner clarity.',
      icon: Eye,
    },
    {
      num: '02',
      title: 'Harmony',
      subtitle: 'Align the whole being',
      desc: 'Bring balance across body, mind, heart and intellect.',
      icon: Heart,
    },
    {
      num: '03',
      title: 'Stillness',
      subtitle: 'Create space within',
      desc: 'Discover the transformative dimension of meditation and inner peace.',
      icon: Flame,
    },
    {
      num: '04',
      title: 'Evolution',
      subtitle: 'Go beyond the known',
      desc: 'Continuously expand consciousness and human possibility.',
      icon: Sparkles,
    },
    {
      num: '05',
      title: 'Oneness',
      subtitle: 'Experience interconnectedness',
      desc: 'Move from an isolated sense of self towards a deeper relationship with life.',
      icon: InfinityIcon,
    },
  ];

  const flowSteps = ['Awareness', 'Harmony', 'Stillness', 'Evolution', 'Oneness'];

  return (
    <section id="five-pillars" className="pt-3 pb-3 sm:pt-5 sm:pb-5 scroll-mt-24 sm:scroll-mt-28 bg-transparent relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-[11px] font-bold uppercase tracking-widest">
            SACRED FOUNDATION
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043]">
            FIVE PILLARS OF <span className="text-[#8C5D00]">THE VISION</span>
          </h2>
          <GoldenHeadingUnderline />

          <p className="text-[#352043] text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            The core pillars that guide every seeker towards complete self-realization, inner balance, and universal harmony.
          </p>
        </div>

        {/* 5 Pillars Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="luxury-card rounded-[28px] p-6 border border-[#E9DED3] bg-white flex flex-col justify-between space-y-4 shadow-md hover:border-[#8C5D00] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F2E8] border border-[#DFC47A]/40 flex items-center justify-center text-[#8C5D00] group-hover:bg-[#8C5D00] group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-2xl font-bold text-[#8C5D00]">
                      {item.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-serif italic text-xs font-semibold text-[#8C5D00] mt-0.5">
                      {item.subtitle}
                    </p>
                    <p className="text-[#3B2D4A] text-xs font-normal leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E9DED3] flex items-center justify-between text-xs font-semibold text-[#8C5D00]">
                  <span className="uppercase tracking-widest">PILLAR {item.num}</span>
                  <span>❖</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FLOW SUMMARY BANNER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[32px] bg-gradient-to-r from-[#FFFDF9] via-[#FAF5EF] to-[#FFFDF9] border-2 border-[#E9DED3] p-8 text-center space-y-4 shadow-lg"
        >
          <span className="text-[#8C5D00] text-xs font-extrabold uppercase tracking-widest block">
            THE EVOLUTIONARY PATHWAY
          </span>

          <div className="flex flex-wrap items-center justify-center gap-1.5 min-[380px]:gap-3 sm:gap-6 text-xs min-[380px]:text-sm sm:text-xl font-bold font-heading text-[#352043]">
            {flowSteps.map((stepName, sIdx) => (
              <div key={sIdx} className="flex items-center gap-1.5 min-[380px]:gap-3 sm:gap-6">
                <span className="hover:text-[#8C5D00] transition-colors">{stepName}</span>
                {sIdx < flowSteps.length - 1 && (
                  <span className="text-[#8C5D00] text-xs sm:text-sm">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
