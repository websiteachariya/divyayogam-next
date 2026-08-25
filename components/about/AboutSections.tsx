'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Globe, Calendar, Heart, ArrowRight } from 'lucide-react';

export default function AboutSections() {
  const stats = [
    { icon: Users, val: '50K+', label: 'Global Members' },
    { icon: Globe, val: '80+', label: 'Countries' },
    { icon: Calendar, val: '500+', label: 'Programs' },
    { icon: Heart, val: '100K+', label: 'Lives Impacted' },
  ];

  return (
    <section className="pt-3 pb-8 sm:pt-5 sm:pb-12 bg-[#FAF5EF] font-body relative overflow-hidden text-[#352043]">
      {/* Rich Visible Sandal Background Image Overlay (con-6.webp) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-widest">
              OUR GATHERINGS
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-[#352043]">
              A Global <span className="text-[#8C5D00] italic font-serif">Community</span>
            </h2>

            <div className="w-16 h-1 bg-[#8C5D00] rounded-full" />

            <p className="text-[#352043] text-base leading-relaxed font-normal">
              Divya Yogam is a global family of seekers, practitioners, and changemakers united by a shared vision of inner awakening and collective transformation.
            </p>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-white/95 border border-[#E9DED3] space-y-1 shadow-sm text-center backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-1.5 text-[#8C5D00]">
                      <Icon className="w-4 h-4 text-[#8C5D00]" />
                      <span className="font-heading font-extrabold text-xl text-[#352043]">
                        {item.val}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#5E5865] font-semibold">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 group font-body"
              >
                <span>EXPLORE OUR COMMUNITY</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-[#47206A] transition-colors" />
              </Link>
            </div>
          </motion.div>

          {/* Right Video / Community Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative group w-full max-w-xl">
              {/* Outer Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#8C5D00]/20 to-[#47206A]/20 blur-xl opacity-50 group-hover:opacity-80 transition-all pointer-events-none" />

              <div className="relative rounded-[28px] overflow-hidden border-4 border-white shadow-2xl bg-black aspect-[16/10]">
                <Image
                  src="/images/about-36.webp"
                  alt="Global Community Gatherings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
