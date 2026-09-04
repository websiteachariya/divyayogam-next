/*  */'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, HeartPulse, HandHeart, Sparkles, UploadCloud } from 'lucide-react';
import { SacredGeometryMandala, GoldenHeadingUnderline } from './SacredGeometrySvg';

export default function FounderMessage() {
  const pillars = [
    { label: 'Wisdom', icon: BookOpen },
    { label: 'Meditation', icon: HeartPulse },
    { label: 'Service', icon: HandHeart },
    { label: 'Oneness', icon: Sparkles },
  ];

  return (
    <section id="founder-vision" className="pt-3 pb-3 sm:pt-5 sm:pb-5 scroll-mt-24 sm:scroll-mt-28 bg-transparent relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Founder Image with Sacred Geometry Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Sacred Geometry Mandala Background Vector Left */}
            <div className="absolute -left-16 -top-12 opacity-30 pointer-events-none hidden sm:block">
              <SacredGeometryMandala className="w-96 h-96 text-[#C8A34A]" />
            </div>

            {/* Founder Card Frame - Waiting for Image to be Uploaded */}
            <div className="relative mx-auto max-w-sm sm:max-w-md rounded-[36px] overflow-hidden luxury-card border-2 border-[#DFC47A]/70 p-3 bg-white shadow-2xl group">
              <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EF] to-[#F8F2E8] aspect-[4/5] flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-[#DFC47A]/60">
                
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
                    Founder message photograph will be updated soon
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Gold Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-[11px] font-bold uppercase tracking-widest">
              FOUNDER&apos;S VISION
            </div>

            {/* Section Heading */}
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043] leading-tight">
                A Message from <br />
                <span className="text-[#8C5D00]">Sri Aathma Sakshaatkoar</span>
              </h2>
              <GoldenHeadingUnderline className="py-3 justify-center lg:justify-start" />
            </div>

            {/* Subtext Quote */}
            <p className="text-[#352043] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 italic">
              &quot;Divya Yogam is not just a practice. It is a sacred journey from the human to the Divine.&quot;
            </p>

            {/* 4 Feature Pills Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white border border-[#E9DED3] shadow-sm hover:border-[#8C5D00] hover:shadow-md transition-all group"
                  >
                    <IconComponent className="w-4 h-4 text-[#8C5D00] group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-semibold text-[#352043] font-body">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 font-body group"
              >
                <span>KNOW MORE</span>
                <ArrowRight className="w-4 h-4 text-[#DFC47A] group-hover:text-[#47206A] transition-colors" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
