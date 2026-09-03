// Divya Yogam Sacred Events Page - Timeline Mockup Matching User Screenshot
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Sparkles, Calendar, Compass, Sun, Star, Heart } from 'lucide-react';

export default function EventsPage() {
  const eventsByMonth = [
    {
      monthHeader: 'SEPTEMBER 2026',
      events: [
        {
          day: '05',
          month: 'SEP',
          title: '108 Days Mala',
          badge: 'MALA SADHANA',
          desc: 'Sacred 108 days spiritual Sadhana and Mala initiation guided by Arawindhan Ji for deep inner transformation, cellular rejuvenation, and divine alignment.',
          location: 'Divya Yogam Sanctuary',
          href: '/contact',
        },
        {
          day: '11–12',
          month: 'SEP',
          title: 'Ayngara Session',
          badge: 'SACRED SESSION',
          desc: 'Immersive two-day Ayngara spiritual awakening session with Arawindhan Ji focusing on divine sacred movement, breathwork, and inner stillness.',
          location: 'Puducherry Main Center',
          href: '/contact',
        },
        {
          day: '15',
          month: 'SEP',
          title: 'Goal Sheet Enrichment',
          badge: 'ENRICHMENT PROGRAM',
          desc: 'Transformative Goal Sheet Enrichment program designed to align life purpose, spiritual goals, conscious daily discipline, and vision fulfillment.',
          location: 'Hybrid (Online & On-Site)',
          href: '/contact',
        },
        {
          day: '26',
          month: 'SEP',
          title: 'Maha Shambala @ Erode',
          badge: 'REGIONAL TOUR',
          desc: 'Sacred Maha Shambala regional tour gathering guided by Arawindhan Ji in Erode for community meditation and divine grace.',
          location: 'Erode Sanctuary',
          href: '/contact',
        },
      ],
    },
    {
      monthHeader: 'OCTOBER 2026',
      events: [
        {
          day: '10',
          month: 'OCT',
          title: 'Maha Shambala @ Trichy',
          badge: 'REGIONAL TOUR',
          desc: 'Immersive regional Satsang and Maha Shambala initiation session with Arawindhan Ji in Trichy.',
          location: 'Trichy Center',
          href: '/contact',
        },
        {
          day: '24',
          month: 'OCT',
          title: 'Maha Shambala @ Ettimadai',
          badge: 'REGIONAL TOUR',
          desc: 'Sacred meditation gathering and community awakening session in Ettimadai.',
          location: 'Ettimadai Sanctuary',
          href: '/contact',
        },
        {
          day: '31',
          month: 'OCT',
          title: 'Maha Shambala @ Chennai',
          badge: 'REGIONAL TOUR',
          desc: 'Special Chennai regional Maha Shambala celebration and guided organ meditation with Arawindhan Ji.',
          location: 'Chennai Main Hall',
          href: '/contact',
        },
      ],
    },
    {
      monthHeader: 'NOVEMBER 2026',
      events: [
        {
          day: '04',
          month: 'NOV',
          title: '48 Days Mala',
          badge: 'INTENSIVE SADHANA',
          desc: '48 days intense spiritual Mala practice focusing on Pancha Kosha purification, energy activation, and silent inner contemplation.',
          location: 'Divya Yogam Sanctuary',
          href: '/contact',
        },
        {
          day: '14',
          month: 'NOV',
          title: 'Maha Shambala @ Saraswathi School',
          badge: 'REGIONAL TOUR',
          desc: 'Youth and community mindfulness gathering at Saraswathi School, Villupuram.',
          location: 'Villupuram',
          href: '/contact',
        },
        {
          day: '21',
          month: 'NOV',
          title: 'Maha Shambala @ Villupuram',
          badge: 'REGIONAL TOUR',
          desc: 'Regional tour Sadhana and Maha Shambala gathering in Villupuram town.',
          location: 'Villupuram Sanctuary',
          href: '/contact',
        },
        {
          day: '28',
          month: 'NOV',
          title: 'Maha Shambala @ Karaikal',
          badge: 'REGIONAL TOUR',
          desc: 'Spiritual initiation and Maha Shambala coastal gathering in Karaikal.',
          location: 'Karaikal Sanctuary',
          href: '/contact',
        },
      ],
    },
    {
      monthHeader: 'DECEMBER 2026',
      events: [
        {
          day: '01',
          month: 'DEC',
          title: '21 Days Mala',
          badge: 'SACRED SADHANA',
          desc: '21 days sacred Mala practice for inner emotional healing, spiritual purity, and deepening meditation experiences.',
          location: 'Divya Yogam Sanctuary',
          href: '/contact',
        },
        {
          day: '12',
          month: 'DEC',
          title: 'Shambala @ Villianur',
          badge: 'COMMUNITY GATHERING',
          desc: 'Sacred Shambala meditation and spiritual celebration gathering at the Villianur main sanctuary.',
          location: 'Villianur, Puducherry',
          href: '/contact',
        },
        {
          day: '21',
          month: 'DEC',
          title: 'Grand Maha Shambala',
          badge: 'MAHA SHAMBALA',
          desc: 'Grand Maha Shambala culmination gathering of divine grace, collective meditation, sacred satsang, and awakening.',
          location: 'Divya Yogam Main Center',
          href: '/contact',
        },
      ],
    },
  ];

  const outsidePondyEvents = [
    { location: 'Erode', date: '26, September 2026', icon: Compass },
    { location: 'Trichy', date: '10, October 2026', icon: MapPin },
    { location: 'Ettimadai', date: '24, October 2026', icon: Sun },
    { location: 'Chennai', date: '31, October 2026', icon: Star },
    { location: 'Saraswathi School, Villupuram', date: '14, November 2026', icon: Sparkles },
    { location: 'Villupuram', date: '21, November 2026', icon: MapPin },
    { location: 'Karaikal', date: '28, November 2026', icon: Heart },
  ];

  return (
    <div className="bg-transparent font-body min-h-screen relative overflow-x-hidden">
      {/* Fixed Background Image Overlay (con-6.webp Sandal Texture matching Contact Page) */}
      <div
        suppressHydrationWarning
        className="fixed inset-0 -z-40 bg-[#FAF5EF] bg-cover bg-center bg-fixed bg-no-repeat pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      {/* 1. HERO BANNER MATCHING CONTACT & SCIENCE PAGE DESIGN */}
      <header className="relative bg-gradient-to-b from-[#351A4A] via-[#2A133B] to-[#200D2E] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-14 sm:pb-18 lg:pb-20 text-center text-white overflow-hidden font-body">
        {/* Left Side Accent Image (test-1.webp) */}
        <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 left-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] -translate-x-1/4 sm:translate-x-0 transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Left Sacred Ornament"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Right Side Accent Image (test-1.webp mirrored) */}
        <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 right-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] translate-x-1/4 sm:translate-x-0 scale-x-[-1] transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Right Sacred Ornament"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Background Mandala SVG */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
          <svg width="550" height="550" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.8">
            <circle cx="100" cy="100" r="95" strokeWidth="0.75" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="85" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="75" strokeWidth="0.75" />
            <g strokeWidth="0.75" opacity="0.9">
              <path d="M100,25 C115,55 115,75 100,100 C85,75 85,55 100,25 Z" fill="rgba(223,196,122,0.04)" />
              <path d="M100,175 C115,145 115,125 100,100 C85,125 85,145 100,175 Z" fill="rgba(223,196,122,0.04)" />
              <path d="M25,100 C55,115 75,115 100,100 C75,85 55,85 25,100 Z" fill="rgba(223,196,122,0.04)" />
              <path d="M175,100 C145,115 125,115 100,100 C125,85 145,85 175,100 Z" fill="rgba(223,196,122,0.04)" />
            </g>
          </svg>
        </div>

        {/* Hero Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest shadow-md backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
            SACRED EVENTS &amp; REGIONAL TOUR
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Upcoming Sacred <span className="text-[#DFC47A] italic font-serif font-normal">Events &amp; Initiations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#F8F2E8] text-base sm:text-lg font-serif italic max-w-2xl mx-auto leading-relaxed"
          >
            Explore upcoming Mala Sadhanas, Ayngara sessions, Goal Sheet Enrichment, and the Maha Shambala Outside Pondy Zone regional schedule.
          </motion.p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-[1px] w-12 bg-[#DFC47A]/60" />
            <span className="text-[#DFC47A] text-xs">❖</span>
            <div className="h-[1px] w-12 bg-[#DFC47A]/60" />
          </div>
        </div>

        {/* Curved Bottom Edge Divider matching section bg (#FAF5EF) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#FAF5EF]" fill="currentColor">
            <path d="M0,0 C300,50 900,50 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </header>

      {/* 2. TIMELINE EVENTS SECTION */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        {/* Rich Sandal Background Image Overlay (con-6.webp) matching Contact Page */}
        <div
          className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
          }}
        />



        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-14">

          {eventsByMonth.map((group, gIdx) => (
            <div key={gIdx} className="space-y-8">

              {/* Centered Bold Month Header matching Screenshot */}
              <div className="text-center space-y-1">
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#352043] tracking-widest uppercase">
                  {group.monthHeader}
                </h2>
                <div className="w-16 h-0.5 bg-[#DFC47A] mx-auto rounded-full" />
              </div>

              {/* Vertical Timeline Container with Left Gold Line */}
              <div className="relative border-l-2 border-[#DFC47A]/70 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-6">
                {group.events.map((event, eIdx) => (
                  <motion.div
                    key={eIdx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: eIdx * 0.1 }}
                    className="relative group bg-white border border-[#E9DED3] rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#C8A34A] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6"
                  >
                    {/* Left Date Box Column matching Screenshot */}
                    <div className="relative bg-[#FAF5EF] border border-[#E9DED3] rounded-2xl w-24 sm:w-28 py-4 flex flex-col items-center justify-center text-center shrink-0 shadow-xs">
                      {/* Floating Icon Circle Badge */}
                      <div className="absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full bg-[#352043] border-2 border-[#DFC47A] flex items-center justify-center text-[#DFC47A] shadow-md group-hover:scale-110 group-hover:bg-[#C8A34A] group-hover:text-[#352043] transition-all">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>

                      <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#C8A34A] leading-none">
                        {event.day}
                      </span>
                      <span className="text-[10px] font-bold uppercase text-[#8C5D00] tracking-widest mt-1">
                        {event.month}
                      </span>
                    </div>

                    {/* Middle Content Column matching Screenshot */}
                    <div className="flex-1 space-y-2">
                      <span className="inline-block px-3 py-0.5 rounded-full border border-[#C8A34A]/40 text-[#8C5D00] text-[10px] font-bold uppercase tracking-wider bg-[#F8F2E8]">
                        {event.badge}
                      </span>

                      <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#352043] group-hover:text-[#C8A34A] transition-colors leading-tight">
                        {event.title}
                      </h3>

                      <p className="text-[#5E5865] text-xs sm:text-sm font-light leading-relaxed max-w-xl">
                        {event.desc}
                      </p>
                    </div>

                    {/* Right Location & Action Column matching Screenshot */}
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-[#E9DED3] shrink-0">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5E5865]">
                        <MapPin className="w-4 h-4 text-[#C8A34A] shrink-0" />
                        <span className="truncate max-w-[180px]">{event.location}</span>
                      </div>

                      <Link
                        href={event.href}
                        className="px-5 py-2.5 rounded-full bg-[#352043] hover:bg-[#C8A34A] text-white hover:text-[#352043] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center gap-2 group/btn"
                      >
                        <span>VIEW DETAILS</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover/btn:text-[#352043] transition-colors" />
                      </Link>
                    </div>

                  </motion.div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 3. MAHA SHAMBALA OUTSIDE PONDYZONE REGIONAL TOUR SECTION */}
      <section className="py-14 sm:py-16 relative overflow-hidden bg-transparent border-t border-[#E9DED3]">
        {/* Rich Sandal Background Image Overlay (con-6.webp) matching Contact Page */}
        <div
          className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
          }}
        />



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/50 text-xs font-bold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
              REGIONAL TOUR SCHEDULE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#352043] leading-tight">
              Maha Shambala <span className="font-serif italic font-normal text-[#8C5D00]">Outside Pondy Zone</span>
            </h2>
            <p className="text-[#352043] text-sm sm:text-base font-semibold max-w-xl mx-auto leading-relaxed">
              Join Arawindhan Ji on our regional tour across Erode, Trichy, Ettimadai, Chennai, Villupuram, and Karaikal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {outsidePondyEvents.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="bg-white rounded-3xl p-5 border-2 border-[#E9DED3] shadow-md hover:shadow-2xl hover:border-[#8C5D00] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#352043] border border-[#DFC47A]/50 flex items-center justify-center text-[#DFC47A] group-hover:bg-[#8C5D00] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-extrabold text-[#352043] group-hover:text-[#8C5D00] transition-colors leading-tight">
                        {item.location}
                      </h4>
                      <span className="text-[10px] font-bold text-[#8C5D00] uppercase tracking-wider block mt-0.5">Maha Shambala</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E9DED3] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-[#352043] font-bold">
                      <Calendar className="w-3.5 h-3.5 text-[#8C5D00]" />
                      <span>{item.date}</span>
                    </div>

                    <Link
                      href="/contact"
                      className="px-4 py-1.5 rounded-full bg-[#352043] group-hover:bg-[#8C5D00] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 flex items-center gap-1.5 group/btn"
                    >
                      <span>Join</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
