'use client';

import { motion } from 'framer-motion';
import { Quote, Box, Heart, Compass, Sparkles } from 'lucide-react';
import { MerkabaHypercubeSvg } from './SacredGeometrySvg';

export default function ConsciousEvolution() {
  const dimensions = [
    {
      dim: '3D',
      title: 'Fear & Separation',
      desc: 'Survival mindset, ego-driven life',
      icon: Box,
    },
    {
      dim: '4D',
      title: 'Heart & Wisdom',
      desc: 'Love, peace, inner balance, divine connection',
      icon: Heart,
    },
    {
      dim: '5D',
      title: 'Divine Union & Oneness',
      desc: 'Living with compassion, unity and higher purpose',
      icon: Compass,
    },
    {
      dim: '6D',
      title: 'Pure Consciousness',
      desc: 'Expanding beyond all limitations into truth',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#2D1A39] text-[#F8F2E8] relative overflow-hidden font-body border-t border-[#DFC47A]/20">
      {/* Background Glowing 3D Merkaba Hypercube Right */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 opacity-25 pointer-events-none hidden lg:block">
        <MerkabaHypercubeSvg className="w-[600px] h-[600px] text-[#DFC47A]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading & Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Gold Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DFC47A]/15 border border-[#DFC47A]/40 text-[#DFC47A] text-[11px] font-bold uppercase tracking-widest">
              CONSCIOUS EVOLUTION
            </div>

            {/* Title */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Journey from <span className="text-[#DFC47A]">3D to 6D</span>
            </h2>

            {/* Description */}
            <p className="text-[#DFC47A]/80 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Human life begins in the 3rd Dimension of physical perception. As we evolve through spiritual practices and higher awareness, we transcend to multidimensional realizations.
            </p>

            {/* Quote Box */}
            <div className="p-6 rounded-3xl bg-white/5 border border-[#DFC47A]/30 backdrop-blur-md relative overflow-hidden space-y-3 max-w-xl mx-auto lg:mx-0 text-left shadow-xl">
              <Quote className="w-8 h-8 text-[#DFC47A]/40" />

              <p className="text-white text-base sm:text-lg font-serif italic leading-relaxed">
                &quot;We are here not to fit in the world but to evolve&quot;
              </p>

              <div className="pt-2 border-t border-[#DFC47A]/20 flex items-center justify-between text-xs">
                <span className="text-[#DFC47A] uppercase tracking-wider font-semibold">
                  INTEGRIS MENTIS
                </span>
                <span className="text-[#DFC47A]/70 font-light">
                  — Sri Aathma Sakshaatkoar
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Dimension Grid Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {dimensions.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="p-6 rounded-3xl bg-white/5 border border-[#DFC47A]/25 backdrop-blur-md hover:border-[#DFC47A] hover:bg-white/10 transition-all duration-300 group shadow-md space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#DFC47A]/15 border border-[#DFC47A]/30 flex items-center justify-center text-[#DFC47A] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-[#DFC47A]/20 border border-[#DFC47A]/40 text-[#DFC47A] font-heading font-bold text-xs">
                      {item.dim}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#DFC47A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#DFC47A]/75 text-xs font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
