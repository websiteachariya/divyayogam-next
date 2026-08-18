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
    <div className="bg-transparent font-body min-h-screen">
      
      {/* 1. HERO SECTION MATCHING SCREENSHOT MOCKUP (Using event-1.png Background) */}
      <section className="relative pt-36 pb-24 sm:pb-32 overflow-hidden font-body bg-[#2B1439] text-white">
        
        {/* Background Sacred Mountain Sunset Image: event-1.png */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <Image
            src="/images/event-1.webp"
            alt="Sacred Mountain Sunset Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          {/* Subtle gradient overlay to match mockup gold/purple lighting */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B1439]/60 via-[#2B1439]/30 to-[#2B1439]" />
        </div>



        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-5">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-col items-center gap-1.5"
          >
            <div className="w-8 h-8 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/50 flex items-center justify-center text-[#DFC47A] shadow-sm mb-1 backdrop-blur-sm">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3C10 7 6 10 2 12C6 14 10 17 12 21C14 17 18 14 22 12C18 10 14 7 12 3Z" fill="rgba(200, 163, 74, 0.3)" />
              </svg>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFC47A] drop-shadow-sm">
              GATHERINGS &amp; RETREATS
            </span>
          </motion.div>

          {/* Main Title matching Screenshot */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-white drop-shadow-lg"
          >
            Upcoming Sacred <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#DFC47A] drop-shadow-[0_2px_12px_rgba(223,196,122,0.5)]">
              Events &amp; Initiations
            </span>
          </motion.h1>

          {/* Subtitle Description matching Screenshot */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#F8F2E8] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto italic font-body drop-shadow-md"
          >
            Join Arawindhan Ji and the Divya Yogam global community for immersive meditation retreats, organ rejuvenation intensives, and sacred celebrations.
          </motion.p>

        </div>
      </section>

      {/* 2. EVENTS LIST GRID MATCHING SCREENSHOT MOCKUP WITH CON-5.PNG BACKGROUND */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-[#FAF4EB]">
        {/* Background Image (con-5.png) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/images/con-5.webp"
            alt="Events Page Background Frame"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

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
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#352043] hover:bg-[#C8A34A] text-white hover:text-[#352043] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <span>REGISTER FOR EVENT</span>
                    <ArrowRight className="w-4 h-4 text-[#DFC47A] group-hover/btn:text-[#352043] transition-colors" />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}        </div>
      </section>
    </div>
  );
}
