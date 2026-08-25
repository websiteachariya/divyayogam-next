'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  ChevronRight,
  UserCheck,
  Globe,
  Dna,
  Users,
  Scroll,
  Sparkles,
} from 'lucide-react';

export default function VisionPurpose() {
  const purposeList = [
    { text: 'Awaken the higher self', icon: UserCheck },
    { text: 'Uplift the global consciousness', icon: Globe },
    { text: 'Bridge ancient yogic science with modern life', icon: Dna },
    { text: 'Foster a conscious and divine community', icon: Users },
    { text: 'Inspire through wisdom, meditation & service', icon: Scroll },
    { text: 'Facilitate lasting inner transformation for all', icon: Sparkles },
  ];

  return (
    <section id="purpose" className="py-8 sm:py-12 lg:py-14 bg-[#F8F2E8] relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-[11px] font-bold uppercase tracking-widest">
            OUR PURPOSE
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043]">
            We Exist for a <span className="text-[#8C5D00]">Higher Purpose</span>
          </h2>
        </div>

        {/* Dual Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: 6 Stacked Cards */}
          <div className="lg:col-span-6 space-y-3.5">
            {purposeList.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E9DED3] flex items-center justify-between shadow-sm hover:border-[#8C5D00] hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F8F2E8] border border-[#DFC47A]/40 flex items-center justify-center text-[#8C5D00] shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5 text-[#8C5D00]" />
                    </div>
                    <span className="font-heading text-sm sm:text-base font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                      {item.text}
                    </span>
                  </div>

                  <ChevronRight className="w-5 h-5 text-[#C8A34A] group-hover:translate-x-1 transition-transform shrink-0" />
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Group Meditation Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[36px] overflow-hidden luxury-card border-2 border-[#E9DED3] p-3.5 bg-white shadow-2xl group">
              <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/R_RL3430.webp"
                  alt="Group Meditation Session with Sri Aathma Sakshaatkoar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
