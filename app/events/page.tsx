// Divya Yogam Sacred Events Page
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Clock, ArrowRight, Video, Users, Laptop } from 'lucide-react';

export default function EventsPage() {
  const upcomingEvents = [
    {
      titleMain: 'Global Candlelight',
      titleGold: 'Peace Meditation',
      badge: 'GLOBAL EVENT',
      desc: 'Join thousands of seekers around the world as we synchronize intent, light candles, and meditate for collective peace and cellular healing.',
      image: '/images/gal-1.webp',
      meta: [
        { icon: Calendar, label: 'First Sunday of Every Month' },
        { icon: Clock, label: '06:00 PM - 07:30 PM IST' },
        { icon: Video, label: 'Live Virtual Global Zoom' },
      ],
    },
    {
      titleMain: '7-Day Organ Rejuvenation',
      titleGold: '& Silent Retreat',
      badge: 'INTENSIVE RETREAT',
      desc: 'An immersive 7-day residential sanctuary retreat guided by Arawindhan Ji focusing on organ cleansing, Pancha Kosha purification, and silence.',
      image: '/images/011A6549.webp',
      meta: [
        { icon: Calendar, label: 'October 15 - 22, 2026' },
        { icon: MapPin, label: 'Divya Yogam Ashram Sanctuary' },
        { icon: Users, label: 'Full Residential Program' },
      ],
    },
    {
      titleMain: 'Quantum Habits &',
      titleGold: 'Daily Mastery Masterclass',
      badge: 'MASTERCLASS',
      desc: 'Learn practical tools to align your circadian clock, subconscious mind, and morning routines with Vedic spiritual disciplines.',
      image: '/images/011A6598.webp',
      meta: [
        { icon: Calendar, label: 'Saturday, November 14, 2026' },
        { icon: Clock, label: '10:00 AM - 02:00 PM IST' },
        { icon: Laptop, label: 'Hybrid (Online & On-site)' },
      ],
    },
  ];

  return (
    <div className="bg-transparent font-body min-h-screen relative overflow-x-hidden">
      {/* Fixed Background Image Overlay (con-6.webp Sandal Texture matching About Page) */}
      <div
        suppressHydrationWarning
        className="fixed inset-0 -z-40 bg-[#FAF5EF] bg-cover bg-center bg-fixed bg-no-repeat pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      {/* 1. CENTERED HERO BANNER WITH LEFT & RIGHT FLORAL ORNAMENTS (MATCHING BLOG & CONTACT DESIGN) */}
      <header className="relative bg-[#1A072A] text-white overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-12 lg:pb-14 flex flex-col items-center justify-center text-center font-body">
        
        {/* Left Side Accent Image (test-1.webp) - Vertically Centered */}
        <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 left-0 -translate-y-1/2 opacity-70 sm:opacity-80 lg:opacity-90 pointer-events-none z-10 w-24 h-24 min-[420px]:w-32 min-[420px]:h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-[340px] lg:h-[340px] xl:w-[460px] xl:h-[460px] 2xl:w-[540px] 2xl:h-[540px] -translate-x-1/4 sm:translate-x-0 mix-blend-screen transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Left Golden Sacred Ornament"
            fill
            quality={100}
            priority
            unoptimized
            className="object-contain object-left drop-shadow-[0_0_25px_rgba(223,196,122,0.5)]"
          />
        </div>

        {/* Right Side Accent Image (test-1.webp mirrored) - Vertically Centered */}
        <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 right-0 -translate-y-1/2 opacity-70 sm:opacity-80 lg:opacity-90 pointer-events-none z-10 w-24 h-24 min-[420px]:w-32 min-[420px]:h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-[340px] lg:h-[340px] xl:w-[460px] xl:h-[460px] 2xl:w-[540px] 2xl:h-[540px] translate-x-1/4 sm:translate-x-0 scale-x-[-1] mix-blend-screen transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Right Golden Sacred Ornament"
            fill
            quality={100}
            priority
            unoptimized
            className="object-contain object-right drop-shadow-[0_0_25px_rgba(223,196,122,0.5)]"
          />
        </div>

        {/* Center Sacred Geometry Mandala Background Overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center z-0">
          <svg width="650" height="650" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.5">
            <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="80" />
            <circle cx="100" cy="100" r="60" />
            <path d="M100 5 L100 195 M5 100 L195 100" strokeDasharray="2 2" />
            <polygon points="100,20 170,140 30,140" strokeWidth="0.4" />
            <polygon points="100,180 170,60 30,60" strokeWidth="0.4" />
          </svg>
        </div>

        {/* Hero Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20 space-y-4 pt-2 sm:pt-4">
          
          {/* Centered Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#DFC47A]/50 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-md"
          >
            <span className="text-[#DFC47A]">❖</span>
            <span>GATHERINGS &amp; RETREATS</span>
          </motion.div>

          {/* Centered Large Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
          >
            Upcoming Sacred <span className="text-[#DFC47A] italic font-serif font-normal">Events &amp; Initiations</span>
          </motion.h1>

          {/* Centered Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif italic text-base sm:text-lg text-[#F8F2E8]/90 max-w-2xl mx-auto leading-relaxed"
          >
            Join Arawindhan Ji and the Divya Yogam global community for immersive meditation retreats, organ rejuvenation intensives, and sacred celebrations.
          </motion.p>

          {/* Centered Gold Diamond Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3 pt-2"
          >
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#DFC47A]" />
            <span className="text-[#DFC47A] text-xs">❖</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#DFC47A]" />
          </motion.div>

        </div>
      </header>

      {/* 2. EVENTS LIST GRID MATCHING SCREENSHOT MOCKUP WITH CON-6.WEBP BACKGROUND */}
      <section className="py-8 sm:py-12 lg:py-14 relative overflow-hidden">
        {/* Rich Sandal Background Image Overlay (con-6.webp) matching About Page */}
        <div
          className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
          {upcomingEvents.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="rounded-[28px] overflow-hidden border border-[#E9DED3] border-r-4 border-r-[#C8A34A] grid grid-cols-1 lg:grid-cols-12 group shadow-[0_10px_30px_rgba(53,32,67,0.04)] hover:shadow-xl transition-all duration-500 bg-[#FFFDF9]"
            >
              {/* Event Card Image Column */}
              <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden bg-black/10">
                <Image
                  src={event.image}
                  alt={`${event.titleMain} ${event.titleGold}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority={idx === 0}
                />
                
                {/* Top-Left Category Badge matching Screenshot */}
                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-[#2B1439]/90 backdrop-blur-md border border-[#DFC47A]/40 text-[#DFC47A] text-[11px] font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFC47A] animate-pulse" />
                  <span>{event.badge}</span>
                </div>
              </div>

              {/* Event Details Content Column */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                
                {/* Header Title + Sacred Lotus Icon */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#352043] leading-snug group-hover:text-[#C8A34A] transition-colors">
                      {event.titleMain}{' '}
                      <span className="font-serif italic font-normal text-[#C8A34A]">
                        {event.titleGold}
                      </span>
                    </h2>

                    {/* Top Right Sacred Lotus Badge matching Screenshot */}
                    <div className="w-12 h-12 rounded-full border border-[#DFC47A]/50 bg-[#F8F2E8]/80 flex items-center justify-center text-[#C8A34A] shrink-0 shadow-sm">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M12 3C10 7 6 10 2 12C6 14 10 17 12 21C14 17 18 14 22 12C18 10 14 7 12 3Z" fill="rgba(200, 163, 74, 0.25)" />
                      </svg>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#5E5865] text-sm sm:text-base font-light leading-relaxed">
                    {event.desc}
                  </p>

                  {/* Metadata Chips Grid in Light Silk Boxes matching Screenshot */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {event.meta.map((mItem, mIdx) => {
                      const IconComp = mItem.icon;
                      return (
                        <div
                          key={mIdx}
                          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#F8F2E8]/70 border border-[#E9DED3] text-xs font-semibold text-[#352043]"
                        >
                          <IconComp className="w-4 h-4 text-[#C8A34A] shrink-0" />
                          <span className="truncate">{mItem.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Register Action Button matching Screenshot */}
                <div className="pt-4 border-t border-[#E9DED3]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full bg-[#352043] hover:bg-[#C8A34A] text-white hover:text-[#352043] font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <span>REGISTER FOR EVENT</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover/btn:text-[#352043] transition-colors" />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}        </div>
      </section>
    </div>
  );
}
