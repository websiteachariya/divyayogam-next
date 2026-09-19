'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, UploadCloud } from 'lucide-react';

export default function FounderProfile() {
  return (
    <section className="pt-3 pb-3 sm:pt-5 sm:pb-5 relative overflow-hidden bg-[#FAF5EF] font-body text-[#352043]">
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
          
          {/* Left Column: Portrait of Arawindhan Ji with Arch Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              {/* Outer Golden Arch Glow */}
              <div className="absolute -inset-3 rounded-t-full bg-gradient-to-tr from-[#C8A34A] via-[#DFC47A] to-[#C8A34A] blur-2xl opacity-40 group-hover:opacity-65 transition-all duration-700" />

              {/* Portrait Arch Frame */}
              <div className="relative rounded-t-full rounded-b-[32px] overflow-hidden border-2 border-[#DFC47A] p-3.5 sm:p-4 shadow-2xl bg-white backdrop-blur-md">
                <div className="relative rounded-t-full rounded-b-2xl overflow-hidden aspect-[4/5] bg-white border border-[#DFC47A]/50 flex items-center justify-center">
                  <Image
                    src="/images/md-fp.webp"
                    alt="Santoshi Shri. Arawindhan Ji — Founder & Spiritual Guide"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#47206A]/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Life of Awakening Human Potential & Purpose */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
              25+ YEARS OF PURPOSEFUL SERVICE
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043] leading-tight">
              A Life of <span className="text-[#8C5D00] italic font-serif">Awakening Human Potential</span>
            </h2>

            <div className="w-20 h-1 bg-[#8C5D00] rounded-full" />

            <div className="space-y-4 text-[#352043] text-base sm:text-lg leading-relaxed">
              <p className="font-normal text-[#352043]">
                For over <strong className="text-[#8C5D00] font-bold">25 years</strong>, Santoshi Shri. Arawindhan Ji has explored one central question:
              </p>
              
              <blockquote className="p-5 sm:p-6 rounded-2xl bg-white/95 border-l-4 border-[#8C5D00] shadow-md font-serif italic text-lg sm:text-xl text-[#351A4A] leading-relaxed backdrop-blur-sm">
                “What is the highest possibility within a human being?”
              </blockquote>

              <p className="text-sm sm:text-base text-[#5E5865] leading-relaxed">
                His journey began with education and evolved through human potential, leadership, wellbeing, meditation and consciousness. From transforming the way people learn, to inspiring the way they lead, and ultimately exploring the way they live and awaken—his work has always moved towards one purpose:
              </p>
            </div>

            {/* PURPOSE CALLOUT CARD - SANDAL LUXURY DESIGN */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-[28px] bg-white/95 border-2 border-[#E9DED3] text-[#352043] shadow-lg relative overflow-hidden backdrop-blur-sm"
            >
              <div className="relative z-10 space-y-2 text-center sm:text-left">
                <span className="text-[#8C5D00] text-xs font-extrabold uppercase tracking-widest font-body">
                  THE CORE MISSION
                </span>
                <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#352043] tracking-tight leading-tight">
                  Develop the human. <br className="hidden sm:inline" />
                  <span className="text-[#8C5D00] italic font-serif">Awaken the being.</span>
                </p>
                <div className="pt-3">
                  <a
                    href="/foundation-story"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8C5D00] hover:bg-[#352043] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all group"
                  >
                    <span>READ FOUNDATION STORY</span>
                    <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
