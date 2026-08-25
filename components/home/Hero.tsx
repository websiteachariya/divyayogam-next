'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-28 sm:pt-32 md:pt-36 lg:pt-36 pb-16 sm:pb-20 bg-[#F8F2E8] font-body overflow-hidden">

      {/* DESKTOP LAYOUT BACKGROUND IMAGE (>= 1024px / lg:) */}
      <div className="hidden lg:block absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/banner-4.webp"
          alt="Awaken Within - Divya Yogam Meditation"
          fill
          quality={100}
          unoptimized
          decoding="async"
          className="object-cover object-[55%_center] min-[1100px]:object-[72%_center] min-[1400px]:object-[90%_center] 2xl:object-[95%_center] opacity-95 transition-all duration-700 contrast-[1.02] saturate-[1.03]"
        />
        {/* Solid Sandal Gradient Overlay on Left Side for 100% Text Readability & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F2E8] via-[#F8F2E8] via-[#F8F2E8]/90 to-transparent lg:w-[56%] min-[1100px]:w-[58%] min-[1400px]:w-[52%] z-10 pointer-events-none" />
      </div>

      {/* LEFT SIDE BACKGROUND DECO-13 GOLDEN LOTUS MANDALA */}
      <div className="absolute top-1/2 -translate-y-1/2 mt-4 sm:mt-6 lg:mt-8 -left-36 sm:-left-44 lg:-left-52 opacity-15 sm:opacity-25 md:opacity-35 pointer-events-none w-[280px] sm:w-[400px] lg:w-[540px] h-[280px] sm:h-[400px] lg:h-[540px] z-10 block min-[1000px]:hidden min-[1650px]:block">
        <Image
          src="/images/deco-13.webp"
          alt="Sacred Golden Lotus Mandala Deco"
          fill
          decoding="async"
          className="object-contain drop-shadow-[0_0_15px_rgba(223,196,122,0.2)]"
        />
      </div>

      {/* MOBILE & TABLET TOP FEATURED IMAGE (< 1024px / lg:hidden) */}
      <div className="block lg:hidden w-full relative z-10 pt-0 pb-2 px-0">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] max-h-[380px] sm:max-h-[460px] rounded-none overflow-hidden">
          <Image
            src="/images/banner-4.webp"
            alt="Awaken Within - Divya Yogam Meditation"
            fill
            sizes="100vw"
            quality={100}
            unoptimized
            priority
            decoding="async"
            className="object-cover object-[85%_center] contrast-[1.02] saturate-[1.03]"
          />
          {/* Subtle Bottom Gradient Fade into #F8F2E8 */}
          <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-transparent to-[#F8F2E8]" />
        </div>
      </div>

      {/* HERO MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex-1 flex flex-col justify-center mt-2 sm:mt-6 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">

          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 xl:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start pt-2 sm:pt-4 max-w-xl mx-auto lg:mx-0"
          >
            {/* Guidance Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-[#8C5D00]" />
              <span>WITH THE DIVINE GUIDANCE OF SANTOSHI SHRI. ARAWINDHAN JI</span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2A1338] leading-[1.15]">
              Awaken Within. <br className="hidden sm:inline" />
              <span className="text-[#8C5D00] italic font-serif">Experience the Divine.</span>
            </h1>

            {/* Sub-headline */}
            <p className="font-serif italic text-lg sm:text-xl font-bold text-[#351A4A] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] leading-snug">
              A journey of self-discovery, inner awakening and conscious living
            </p>

            {/* Body Paragraph */}
            <p className="font-body text-[#3B3045] text-base sm:text-lg font-normal leading-relaxed">
              Welcome to a space where you can pause, reflect, reconnect and discover the deeper dimensions of your own being. <span className="font-semibold text-[#351A4A]">Your journey within begins here.</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 font-body">
              <Link
                href="/practices"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-xs uppercase tracking-wider shadow-[0_15px_35px_rgba(71,32,106,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Begin Your Journey</span>
                <div className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-[#47206A]/20 flex items-center justify-center text-xs text-[#DFC47A] group-hover:text-[#47206A] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border-2 border-[#DFC47A] hover:border-[#C8A34A] text-[#47206A] font-semibold text-xs uppercase tracking-wider shadow-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Join Our Community</span>
                <div className="w-6 h-6 rounded-full bg-[#47206A]/10 group-hover:bg-[#47206A] flex items-center justify-center text-xs text-[#47206A] group-hover:text-white transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}