'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-[88px] sm:pt-[96px] md:pt-[100px] lg:pt-44 pb-12 lg:pb-12 bg-[#F8F2E8] font-body overflow-hidden">

      {/* DESKTOP LAYOUT BACKGROUND IMAGE (>= 1024px / lg: ONLY) */}
      <div className="hidden lg:block absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/banner-6.webp"
          alt="Awaken Within - Divya Yogam Meditation"
          fill
          quality={100}
          unoptimized
          decoding="async"
          className="object-cover object-[78%_center] min-[1280px]:object-[82%_center] min-[1440px]:object-[84%_center] opacity-95 transition-all duration-700 contrast-[1.02] saturate-[1.03]"
        />
        {/* Solid Sandal Gradient Overlay on Left Side for 100% Text Readability & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F2E8] via-[#F8F2E8] via-[#F8F2E8]/90 to-transparent lg:w-[56%] xl:w-[52%] min-[1440px]:w-[48%] z-10 pointer-events-none" />
      </div>

      {/* LEFT SIDE BACKGROUND DECO-13 GOLDEN LOTUS MANDALA (lg screen) */}
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
            src="/images/banner-6.webp"
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

      {/* DESKTOP ONLY BOTTOM FEATURE CARD BAR (>= 1024px / lg: ONLY - Hidden on sm & md) */}
      <div className="hidden lg:block w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-8 mb-2">
        <div className="bg-[#FAF5ED]/90 backdrop-blur-md border border-[#E8DCCB] rounded-[24px] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.06)] grid grid-cols-4 gap-6 items-center">
          
          {/* Feature 1 */}
          <div className="group cursor-pointer flex items-center gap-4 pr-2 p-2 rounded-2xl transition-all duration-300 hover:bg-white/60">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D4AF37]/50 bg-gradient-to-br from-[#FFFDF9] to-[#F5EBDA] group-hover:from-[#47206A] group-hover:to-[#351A4A] group-hover:border-[#C8A34A] flex items-center justify-center text-[#9E7526] group-hover:text-[#DFC47A] shadow-[0_0_12px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_20px_rgba(71,32,106,0.35)] group-hover:scale-110 shrink-0 transition-all duration-300">
              <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M16 11.5 C13 13.5 10 16 10 20 L7 25 C6 26.5 8 27.5 9.5 26.5 L12 24 C13.5 23 14.5 22 16 22 C17.5 22 18.5 23 20 24 L22.5 26.5 C24 27.5 26 26.5 25 25 L22 20 C22 16 19 13.5 16 11.5 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-bold text-[#2A1338] group-hover:text-[#47206A] text-base leading-tight transition-colors duration-300">Ancient Wisdom</h3>
              <p className="font-body text-[#5A4866] text-xs leading-snug mt-1">Timeless teachings for modern living.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group cursor-pointer flex items-center gap-4 px-4 border-l border-[#DFC47A]/35 p-2 rounded-2xl transition-all duration-300 hover:bg-white/60">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D4AF37]/50 bg-gradient-to-br from-[#FFFDF9] to-[#F5EBDA] group-hover:from-[#47206A] group-hover:to-[#351A4A] group-hover:border-[#C8A34A] flex items-center justify-center text-[#9E7526] group-hover:text-[#DFC47A] shadow-[0_0_12px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_20px_rgba(71,32,106,0.35)] group-hover:scale-110 shrink-0 transition-all duration-300">
              <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                <path d="M16 7 C14 10 12 13 16 16 C20 13 18 10 16 7 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 10 C12 12 10 14 12 16 C14 16 15.5 15 16 16 C16.5 15 18 16 20 16 C22 14 20 12 16 10 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M6 21 C9 19 12 20 14 22 C15 23 16 24 16 25 M26 21 C23 19 20 20 18 22 C17 23 16 24 16 25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-bold text-[#2A1338] group-hover:text-[#47206A] text-base leading-tight transition-colors duration-300">Inner Transformation</h3>
              <p className="font-body text-[#5A4866] text-xs leading-snug mt-1">Tools and practices for deep inner change.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group cursor-pointer flex items-center gap-4 px-4 border-l border-[#DFC47A]/35 p-2 rounded-2xl transition-all duration-300 hover:bg-white/60">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D4AF37]/50 bg-gradient-to-br from-[#FFFDF9] to-[#F5EBDA] group-hover:from-[#47206A] group-hover:to-[#351A4A] group-hover:border-[#C8A34A] flex items-center justify-center text-[#9E7526] group-hover:text-[#DFC47A] shadow-[0_0_12px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_20px_rgba(71,32,106,0.35)] group-hover:scale-110 shrink-0 transition-all duration-300">
              <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="10" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="22" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 13 L16 11 M16 6 L16 4 M12 7 L10.5 5.5 M20 7 L21.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M11 25 C11 20 13.5 18 16 18 C18.5 18 21 20 21 25" stroke="currentColor" strokeWidth="1.6" fill="none" />
                <path d="M6 26 C6 23 8 21 10 21" stroke="currentColor" strokeWidth="1.4" fill="none" />
                <path d="M26 26 C26 23 24 21 22 21" stroke="currentColor" strokeWidth="1.4" fill="none" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-bold text-[#2A1338] group-hover:text-[#47206A] text-base leading-tight transition-colors duration-300">Global Community</h3>
              <p className="font-body text-[#5A4866] text-xs leading-snug mt-1">Connect with like-minded souls worldwide.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="group cursor-pointer flex items-center gap-4 pl-4 border-l border-[#DFC47A]/35 p-2 rounded-2xl transition-all duration-300 hover:bg-white/60">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D4AF37]/50 bg-gradient-to-br from-[#FFFDF9] to-[#F5EBDA] group-hover:from-[#47206A] group-hover:to-[#351A4A] group-hover:border-[#C8A34A] flex items-center justify-center text-[#9E7526] group-hover:text-[#DFC47A] shadow-[0_0_12px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_20px_rgba(71,32,106,0.35)] group-hover:scale-110 shrink-0 transition-all duration-300">
              <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                <path d="M24 7 C14 7 7 14 7 24 C17 24 24 17 24 7 Z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.15" strokeLinejoin="round" />
                <path d="M7 24 C12 19 17 14 24 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 19 L15 19 M16 15 L18 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-bold text-[#2A1338] group-hover:text-[#47206A] text-base leading-tight transition-colors duration-300">Holistic Well-being</h3>
              <p className="font-body text-[#5A4866] text-xs leading-snug mt-1">Mind, body, and spirit in perfect harmony.</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}