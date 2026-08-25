'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Sun, Heart, Compass, Users, ArrowRight } from 'lucide-react';

export default function Founder() {
  const valuePills = [
    { icon: Compass, text: 'Authentic', sub: 'Rooted in timeless wisdom' },
    { icon: Users, text: 'Inclusive', sub: 'Open to all seeking growth' },
    { icon: Sparkles, text: 'Transformative', sub: 'Experience real inner change' },
    { icon: Heart, text: 'Heart-Centered', sub: 'Guided with love and compassion' },
  ];

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-[#FAF5EF] font-body">

      {/* Background Soft Silk / Frame Overlay (con-6.webp) */}
      <div
        className="absolute inset-0 opacity-35 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/images/con-6.webp')" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Founder Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Portrait Column with Arch Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              {/* Outer Golden Arch Glow */}
              <div className="absolute -inset-2 rounded-t-full bg-gradient-to-tr from-[#C8A34A] via-[#DFC47A] to-[#C8A34A] blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700" />

              {/* Portrait Arch Frame matching Reference UI */}
              <div className="relative rounded-t-full rounded-b-[28px] overflow-hidden luxury-card border-2 border-[#E9DED3] p-3 sm:p-4 shadow-lg bg-white">
                <div className="relative rounded-t-full rounded-b-2xl overflow-hidden bg-gradient-to-b from-[#FFFDF9] to-[#F8F2E8] aspect-[4/5] flex items-center justify-center">
                  <Image
                    src="/images/MD Sir_4.webp"
                    alt="Arawindhan Ji - Founder of Divya Yogam"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#47206A]/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column matching Reference UI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full royal-gold-badge text-[11px] uppercase tracking-widest font-semibold">
              FOUNDER & SPIRITUAL GUIDE
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043] leading-tight">
              Guided by <span className="text-[#8C5D00]">Arawindhan Ji,</span> <br />
              Awakening <span className="text-[#8C5D00]">The Divine Within.</span>
            </h2>

            {/* Sacred Golden Lotus Underline Divider (deco-15.png) */}
            <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-xl h-10 sm:h-14 lg:h-16 my-1 pointer-events-none">
              <Image
                src="/images/deco-15.webp"
                alt="Sacred Golden Lotus Underline Divider"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(223,196,122,0.45)]"
              />
            </div>

            <p className="text-[#352043] text-sm sm:text-base leading-relaxed font-normal">
              Divya Yogam is a path of inner awakening, founded on ancient wisdom and perfected through experience. We offer a space to heal, grow, and transform in body, mind, and spirit.
            </p>

            <p className="text-[#3B2D4A] text-xs sm:text-sm leading-relaxed font-normal">
              Our mission is to make spiritual practices accessible to all and inspire a life of peace, purpose, and profound joy.
            </p>

            {/* 4 Value Pills matching Reference UI */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {valuePills.map((pill, idx) => {
                const IconComponent = pill.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center text-center p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E9DED3] text-[#352043] hover:border-[#8C5D00] transition-all duration-300 shadow-sm"
                  >
                    <IconComponent className="w-5 h-5 text-[#8C5D00] mb-1.5" />
                    <span className="font-heading font-bold text-xs sm:text-sm text-[#352043]">{pill.text}</span>
                    <span className="text-[10px] text-[#5E5865] font-light leading-tight mt-1">{pill.sub}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 group font-body"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#DFC47A] group-hover:text-[#47206A] transition-colors" />
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
