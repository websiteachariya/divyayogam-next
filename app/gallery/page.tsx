'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Sparkles,
  Users,
  Flame,
  Globe,
  Heart,
  Sun,
  Home,
  Maximize2,
  X,
} from 'lucide-react';

interface GalleryCard {
  src: string;
  title: string;
  category: string;
  icon: any;
}

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState<GalleryCard | null>(null);

  // Gallery items using valid high-resolution existing image files
  const galleryItems: GalleryCard[] = [
    {
      src: '/images/gal-1.webp',
      title: 'Rituals & Ceremonies',
      category: 'RITUALS & CEREMONIES',
      icon: Sparkles,
    },
    {
      src: '/images/011A6549.webp',
      title: 'Satsang & Discourses',
      category: 'SATSANG & DISCOURSES',
      icon: Users,
    },
    {
      src: '/images/gal-2.webp',
      title: 'Ashram Life',
      category: 'ASHRAM LIFE',
      icon: Home,
    },
    {
      src: '/images/011A6598.webp',
      title: 'Candle Light Meditation',
      category: 'CANDLE LIGHT MEDITATION',
      icon: Flame,
    },
    {
      src: '/images/0I5A6953.webp',
      title: 'Group Meditations',
      category: 'GROUP MEDITATIONS',
      icon: Users,
    },
    {
      src: '/images/0I5A7629.webp',
      title: 'Global Gatherings',
      category: 'GLOBAL GATHERINGS',
      icon: Globe,
    },
    {
      src: '/images/0I5A7685.webp',
      title: 'Mass Meditation',
      category: 'MASS MEDITATION',
      icon: Flame,
    },
    {
      src: '/images/0I5A7729.webp',
      title: 'Spiritual Events',
      category: 'SPIRITUAL EVENTS',
      icon: Sparkles,
    },
    {
      src: '/images/0I5A8707.webp',
      title: 'Workshops & Healing',
      category: 'WORKSHOPS & HEALING',
      icon: Heart,
    },
    {
      src: '/images/0I5A9336.webp',
      title: 'Devotion & Prayer',
      category: 'DEVOTION & PRAYER',
      icon: Heart,
    },
    {
      src: '/images/0I5A9374.webp',
      title: 'Unity & Oneness',
      category: 'UNITY & ONENESS',
      icon: Users,
    },
    {
      src: '/images/2D7A0565.webp',
      title: 'Divine Energy',
      category: 'DIVINE ENERGY',
      icon: Sun,
    },
  ];

  return (
    <div className="bg-transparent font-body min-h-screen">

      {/* 1. SACRED PHOTO GALLERY HERO HEADER (FULLY RESPONSIVE & REDUCED VERTICAL GAP) */}
      <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 md:pb-24 overflow-hidden font-body bg-[#2B1439] text-white">

        {/* Background Image Layer (con-1.png) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-25 mix-blend-overlay z-0">
          <Image
            src="/images/con-1.webp"
            alt="Gallery Hero Section Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Deep Royal Purple Ambient Glow */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-gradient-to-b from-[#2A0E3D]/80 via-[#1E092D]/80 to-[#2B1439]/80" />
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5E2B7E]/40 via-transparent to-transparent" />

        {/* Left Side Accent Image (test-1.webp) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] -translate-x-1/4 sm:translate-x-0 transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Left Sacred Ornament"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Right Side Accent Image (test-1.webp mirrored) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] translate-x-1/4 sm:translate-x-0 scale-x-[-1] transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Right Sacred Ornament"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Hero Content Center */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-20 text-center space-y-3 sm:space-y-4">

          {/* Eyebrow Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-full bg-[#2A0E3D]/80 border border-[#C8A34A]/80 text-[#DFC47A] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(200,163,74,0.3)] backdrop-blur-md"
          >
            {/* Golden Lotus SVG Emblem in Pill */}
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#DFC47A" strokeWidth="1.8">
              <path d="M12 3C10 7 6 10 2 12C6 14 10 17 12 21C14 17 18 14 22 12C18 10 14 7 12 3Z" fill="rgba(223, 196, 122, 0.3)" />
            </svg>
            <span>VISUAL ARCHIVES</span>
          </motion.div>

          {/* Main Title: Sacred Photo Gallery */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg"
          >
            Sacred Photo{' '}
            <span className="font-serif italic font-normal text-[#DFC47A] drop-shadow-[0_2px_12px_rgba(223,196,122,0.6)]">
              Gallery
            </span>
          </motion.h1>

          {/* Thin Golden Rule Divider with Center Diamond Ornament */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center justify-center gap-3 py-1"
          >
            <div className="h-[1px] w-12 sm:w-20 md:w-24 bg-gradient-to-r from-transparent to-[#DFC47A]" />
            <div className="w-2.5 h-2.5 rotate-45 border border-[#DFC47A] bg-[#C8A34A]/40" />
            <div className="h-[1px] w-12 sm:w-20 md:w-24 bg-gradient-to-l from-transparent to-[#DFC47A]" />
          </motion.div>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#F8F2E8] text-sm sm:text-base lg:text-lg font-serif italic leading-relaxed max-w-2xl mx-auto opacity-90 drop-shadow-sm px-2"
          >
            Glimpses of spiritual evolution, candlelight meditation gatherings, and ashram life.
          </motion.p>

          {/* Glowing Golden Lotus Emblem at Bottom Center (gallery-3.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2 sm:pt-3 flex justify-center"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 drop-shadow-[0_0_35px_rgba(255,205,85,0.95)]">
              <Image
                src="/images/gallery-3.webp"
                alt="Glowing Golden Lotus Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

        </div>

        {/* Curved Golden Bottom Boundary Wave Transition into Silk Background */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
          <svg
            className="relative block w-full h-10 sm:h-14 lg:h-16 text-[#F8F2E8]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
              fill="currentColor"
              stroke="#DFC47A"
              strokeWidth="2.5"
            />
          </svg>
        </div>

      </section>

      {/* 2. GALLERY GRID (FULLY RESPONSIVE 1/2/3 COLUMNS WITH CON-1.PNG BACKGROUND) */}
      <section className="py-16 sm:py-24 relative z-20 overflow-hidden bg-[#FAF4EB]">
        {/* Full Section Background Image (con-1.png) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/images/con-1.webp"
            alt="Sacred Gallery Background Frame"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onClick={() => setSelectedImg(item)}
                  className="relative group rounded-3xl p-1.5 sm:p-2 bg-gradient-to-br from-[#DFC47A] via-[#47206A] to-[#C8A34A] hover:from-[#C8A34A] hover:via-[#6B2D9C] hover:to-[#DFC47A] cursor-pointer shadow-lg hover:shadow-[0_18px_40px_rgba(71,32,106,0.4)] hover:-translate-y-1.5 transition-all duration-500"
                >
                  {/* Inner Rectangular Container (Clean edge-to-edge image, no inside borders) */}
                  <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-[#2B1439]">
                    {/* Photo Image */}
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      priority={idx < 3}
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B1439]/90 via-black/20 to-transparent group-hover:from-[#2B1439]/95 transition-all duration-300" />

                    {/* Bottom Category Badge Pill with Gold/Violet Styling */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-20 flex items-center justify-between pointer-events-none">
                      <div className="inline-flex items-center gap-2.5 sm:gap-3 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#47206A]/95 via-[#3B104E]/95 to-[#20052C]/95 backdrop-blur-md border border-[#DFC47A]/50 group-hover:border-[#DFC47A] shadow-lg text-white transition-all duration-300">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/60 flex items-center justify-center text-[#DFC47A] shrink-0">
                          <IconComp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#DFC47A] group-hover:text-white transition-colors truncate">
                          {item.category}
                        </span>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-[#47206A]/90 backdrop-blur-md border border-[#DFC47A]/60 flex items-center justify-center text-[#DFC47A] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-md">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#2B1439] rounded-3xl p-4 sm:p-6 border-2 border-[#DFC47A]/50 overflow-hidden shadow-2xl space-y-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImg(null)}
                aria-label="Close image"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#DFC47A] hover:bg-[#C8A34A] text-[#2B1439] flex items-center justify-center transition-colors shadow-md cursor-pointer font-bold"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-black/20 border border-[#DFC47A]/30">
                <Image
                  src={selectedImg.src}
                  alt={selectedImg.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image Title Banner */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-2 pt-2">
                <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#DFC47A]">
                  {selectedImg.title}
                </h3>
                <span className="px-3.5 py-1 rounded-full bg-white/10 border border-[#DFC47A]/30 text-xs font-semibold text-white uppercase tracking-wider">
                  {selectedImg.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
