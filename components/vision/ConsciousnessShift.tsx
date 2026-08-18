'use client';

import { motion } from 'framer-motion';
import { Quote, Box, Heart, Sparkles } from 'lucide-react';
import { SacredGeometryMandala, MerkabaHypercubeSvg, GoldenHeadingUnderline } from './SacredGeometrySvg';

export default function ConsciousnessShift() {
  const dimensions = [
    {
      dim: '3D',
      title: 'Physical Awareness',
      desc: 'Rooted in material reality, dualistic thinking, and physical senses.',
      icon: Box,
    },
    {
      dim: '4D - 5D',
      title: 'Heart & Wisdom Dimensions',
      desc: 'Love replaces fear, intuition flourishes, and cosmic wisdom awakens.',
      icon: Heart,
    },
    {
      dim: '6D',
      title: 'Divine Unity & Oneness',
      desc: 'Living in unity consciousness, free from separation and illusion.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#2D1A39] text-[#F8F2E8] relative overflow-hidden font-body border-t border-[#DFC47A]/20">
      {/* Background Glowing 3D Merkaba Hypercube */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
        <MerkabaHypercubeSvg className="w-[600px] h-[600px] text-[#DFC47A]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading & Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DFC47A]/15 border border-[#DFC47A]/40 text-[#DFC47A] text-[11px] font-bold uppercase tracking-widest">
              CONSCIOUSNESS SHIFT
            </div>

            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Journey from <span className="text-[#DFC47A]">3D to 6D</span>
              </h2>
              <GoldenHeadingUnderline className="py-3 justify-center lg:justify-start" />
            </div>

            <p className="text-[#DFC47A]/85 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Human life begins in the Third Dimension of physical awareness. As consciousness expands, one gradually experiences higher dimensions where love replaces fear, wisdom replaces confusion, and unity replaces separation.
            </p>

            {/* Quote Box */}
            <div className="p-6 rounded-3xl bg-white/5 border border-[#DFC47A]/30 backdrop-blur-md relative overflow-hidden space-y-3 max-w-xl mx-auto lg:mx-0 text-left shadow-xl">
              <Quote className="w-8 h-8 text-[#DFC47A]/40" />
              <p className="text-white text-base sm:text-lg font-serif italic leading-relaxed">
                &quot;The journey from the Third Dimension to the Sixth Dimension is not a journey through space; it is an elevation of consciousness. Through disciplined spiritual practice, the seeker experiences this Divine Evolution.&quot;
              </p>
            </div>
          </motion.div>

          {/* Right Column: 3 Dimension Cards */}
          <div className="lg:col-span-6 space-y-5">
            {dimensions.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="p-6 rounded-3xl bg-white/5 border border-[#DFC47A]/25 backdrop-blur-md hover:border-[#DFC47A] hover:bg-white/10 transition-all duration-300 group shadow-md flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#DFC47A]/15 border border-[#DFC47A]/30 flex items-center justify-center text-[#DFC47A] shrink-0 group-hover:scale-110 transition-transform mt-1">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#DFC47A] transition-colors">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-[#DFC47A]/20 border border-[#DFC47A]/40 text-[#DFC47A] font-heading font-bold text-xs">
                        {item.dim}
                      </span>
                    </div>

                    <p className="text-[#DFC47A]/80 text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
