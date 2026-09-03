'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Video,
  Ticket,
  HeartHandshake,
  VolumeX,
  CameraOff,
  UserCheck,
  Ban,
  Play,
  ChevronLeft,
  ChevronRight,
  Heart,
  ExternalLink,
  Award,
  Phone,
  Mail
} from 'lucide-react';

export default function HappyShambhalaLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'all' | 'tickets' | 'guidelines'>('all');

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-12-12T17:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: 'Maha Shambhala 2026',
      subtitle: 'Global Grand Celebration of Oneness & Sacred Initiation',
      bgImage: '/images/banner-1.webp',
      badge: 'DECEMBER 12, 2026',
    },
    {
      title: 'Global Grand Celebration of Oneness',
      subtitle: 'Awakening potentials for an enlightened, harmonious society',
      bgImage: '/images/banner-2.webp',
      badge: 'SPIRITUAL AWAKENING',
    },
    {
      title: 'Get Ready For Spiritual Experience',
      subtitle: 'Deep cellular rejuvenation, organ meditation & sacred Satsang with Arawindhan Ji',
      bgImage: '/images/banner-3.webp',
      badge: 'ACHARIYA SANCTUARY',
    },
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  const ticketTiers = [
    { price: '₹500', name: 'General Pass', desc: 'General Seating & Shambhala Initiation Entry', badge: 'ENTRY PASS', popular: false },
    { price: '₹1,000', name: 'Silver Sadhana Pass', desc: 'Silver Reserved Seating & Sacred Prasad', badge: 'SILVER PASS', popular: false },
    { price: '₹2,000', name: 'Gold Oneness Pass', desc: 'Gold Front Row Seating & Special Sadhana Kit', badge: 'GOLD PASS', popular: true },
    { price: '₹5,000', name: 'Diamond Pass', desc: 'VIP Front Block & Exclusive Satsang Access', badge: 'DIAMOND PASS', popular: false },
    { price: '₹10,000', name: 'VIP Patron Pass', desc: 'Sanctuary Sponsor Access & Personal Blessing', badge: 'PATRON PASS', popular: false },
  ];

  const galleryImages = [
    '/images/01.webp',
    '/images/02.webp',
    '/images/03.webp',
    '/images/04.webp',
    '/images/05.webp',
    '/images/06.webp',
    '/images/07.webp',
    '/images/08.webp',
    '/images/09.webp',
    '/images/011.webp',
    '/images/012.webp',
    '/images/gallery-1.webp',
  ];

  const testimonialVideos = [
    { id: 'GqDjm6amEu0', title: 'Deep Inner Healing Experience' },
    { id: '5Ut6CCT_Gms', title: 'Awakening Consciousness' },
    { id: 'G_otnJtf1qs', title: 'Sacred Meditation Journey' },
    { id: 'XA0KtAyh6dE', title: 'Life Rejuvenation Witness' },
    { id: 'g1z50SgRisM', title: 'Cellular Peace & Harmony' },
    { id: '46wRINY7-EA', title: 'Oneness Meditation Grace' },
    { id: '-UnFkMbnXs8', title: 'Mindfulness & Clarity' },
    { id: 'TXARPCnXUwM', title: 'Shambhala Transformation' },
    { id: 'vq2XTPdfttA', title: 'Soul Connection & Peace' },
    { id: 'VRgLuk0Etjw', title: 'Divine Energy Activation' },
    { id: 'ubDdVwaOKbI', title: 'Higher Consciousness State' },
    { id: 'nu3F8DD1nmo', title: 'Inner Harmony & Love' },
    { id: 'HwA-qgzVWEk', title: 'Sacred Sadhana Realization' },
    { id: 'xLCFA-8bjH0', title: 'Peaceful Mind & Purpose' },
    { id: 'PyP9Rs_iI58', title: 'Cellular Health Awakening' },
    { id: 'tSPIoOmVqhg', title: 'Spiritual Alignment Grace' },
    { id: 'lZZxM58Uy7s', title: 'ACHARIYA Culture Blessings' },
  ];

  const guidelines = [
    { icon: CameraOff, title: 'Zero Camera Movement', desc: 'Recording devices and active photography are strictly prohibited inside the meditation sanctuary.' },
    { icon: Ban, title: 'No Movement After Start', desc: 'To maintain the sacred collective energy field, movement is restricted once the initiation commences.' },
    { icon: VolumeX, title: 'Maintain Sacred Silence', desc: 'Observe total noble silence before, during, and after the guided Shambhala initiation.' },
    { icon: ShieldAlert, title: 'Strictly Adults Only', desc: 'For deep meditation concentration, infants and children below 12 years are not permitted.' },
    { icon: UserCheck, title: 'Designated Entry & Exit', desc: 'Please strictly follow specified movement pathways guided by Divya Yogam volunteers.' },
    { icon: CheckCircle2, title: 'Cleanliness & Zero Littering', desc: 'Respect the pristine sanctuary environment. Keep all personal belongings organized.' },
  ];

  return (
    <div className="bg-transparent font-body min-h-screen relative overflow-x-hidden">
      {/* Fixed Background Image Overlay (con-6.webp Sandal Texture matching Events Page) */}
      <div
          className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
          }}
        />

      {/* 1. HERO SECTION WITH LEFT CONTENT & RIGHT VIDEO PLAYER BOX */}
      <header className="relative bg-gradient-to-b from-[#351A4A] via-[#2A133B] to-[#200D2E] pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 text-white overflow-hidden font-body" id="Home">
        {/* Background Mandala SVG */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
          <svg width="600" height="600" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.8">
            <circle cx="100" cy="100" r="95" strokeWidth="0.75" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="85" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="75" strokeWidth="0.75" />
          </svg>
        </div>

        {/* Hero Content Grid (Left Text & Right Large Video Player) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest shadow-md backdrop-blur-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
                <span>GLOBAL GRAND CELEBRATION OF ONENESS</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
              >
                Happy <span className="text-[#DFC47A] italic font-serif font-normal block sm:inline">Shambhala 2026</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif italic text-base sm:text-lg text-[#F8F2E8] leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Join Arawindhan Ji and thousands of seekers worldwide for the sacred Maha Shambhala initiation, collective meditation, and spiritual awakening.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <a
                  href="#TicketBooking"
                  className="px-7 py-3.5 rounded-full bg-[#C8A34A] hover:bg-white text-[#352043] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Book Tickets Now</span>
                </a>
                <a
                  href="#Aboutus"
                  className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#DFC47A]/50 text-[#DFC47A] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300 flex items-center gap-2"
                >
                  <span>Explore Shambhala</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Right Large Video Player Column */}
            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden border-4 border-[#DFC47A] shadow-2xl bg-black group"
              >
                <div className="aspect-video w-full relative">
                  <video
                    autoPlay
                    loop
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://res.cloudinary.com/y2q2jsq0/video/upload/v1787284239/watermark-removed-gemini_generated_video_288afa14_oifrwr.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="bg-[#351A4A] px-4 py-3 text-center border-t border-[#DFC47A]/40 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#DFC47A]" />
                  <span className="text-xs sm:text-sm font-bold text-[#DFC47A] uppercase tracking-wider">
                    Happy Shambhala Sacred Initiation Video
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Curved Bottom Edge Divider matching section bg (#FAF5EF) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#FAF5EF]" fill="currentColor">
            <path d="M0,0 C300,50 900,50 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </header>

      {/* 2. LIVE COUNTDOWN & MISSION BANNER */}
      <section className="py-10 relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#DFC47A] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Logo / Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-[#E9DED3] pb-6 lg:pb-0 lg:pr-8">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-3">
                <Image
                  src="/images/MD-99.webp"
                  alt="Happy Shambhala Logo"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
              <span className="font-heading font-extrabold text-lg text-[#352043] uppercase tracking-widest">
                Happy Shambhala
              </span>
              <span className="text-xs text-[#8C5D00] font-bold uppercase tracking-wider mt-0.5">
                Grand Oneness Gathering
              </span>
            </div>

            {/* Right Date & Live Countdown */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#352043] text-[#DFC47A] text-xs font-extrabold uppercase tracking-widest">
                  <Calendar className="w-3.5 h-3.5 text-[#DFC47A]" />
                  <span>EVENT START DATE</span>
                </span>

                <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#352043]">
                  12th DECEMBER 2026, <span className="text-[#8C5D00]">05:00 PM IST</span>
                </h2>

                <p className="text-[#5E5865] text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
                  We heartily welcome you to receive the new Impact, Initiation in abundance and redirect the meaning in your life. Become Peaceful, Purposeful and Powerful by participating in <strong className="text-[#352043]">SHAMBHALA 2026</strong>.
                </p>
              </div>

              {/* Animated Countdown Grid */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0 pt-2">
                <div className="bg-[#FAF5EF] border border-[#E9DED3] rounded-2xl p-3 text-center shadow-xs">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#352043] block leading-none">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#8C5D00] uppercase tracking-wider mt-1 block">
                    Days
                  </span>
                </div>

                <div className="bg-[#FAF5EF] border border-[#E9DED3] rounded-2xl p-3 text-center shadow-xs">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#352043] block leading-none">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#8C5D00] uppercase tracking-wider mt-1 block">
                    Hours
                  </span>
                </div>

                <div className="bg-[#FAF5EF] border border-[#E9DED3] rounded-2xl p-3 text-center shadow-xs">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#352043] block leading-none">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#8C5D00] uppercase tracking-wider mt-1 block">
                    Mins
                  </span>
                </div>

                <div className="bg-[#FAF5EF] border border-[#E9DED3] rounded-2xl p-3 text-center shadow-xs">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#C8A34A] block leading-none">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#8C5D00] uppercase tracking-wider mt-1 block">
                    Secs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROMO VIDEO SECTION */}
      <section className="py-10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] text-xs font-bold uppercase tracking-widest">
              <Video className="w-3.5 h-3.5 text-[#DFC47A]" />
              <span>FEATURED VIDEO HIGHLIGHT</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#352043]">
              Experience the Spirit of <span className="font-serif italic font-normal text-[#8C5D00]">Happy Shambhala</span>
            </h2>
          </div>

          <div className="bg-white p-3 rounded-3xl border-2 border-[#E9DED3] shadow-xl max-w-4xl mx-auto">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source
                  src="https://res.cloudinary.com/y2q2jsq0/video/upload/v1783507433/Gx012584_sckw96.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SHAMBHALA (3 CORE PILLARS SECTION) */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent border-t border-[#DFC47A]/30" id="Aboutus">
        {/* Background Mandala Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="700" height="700" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.8">
            <circle cx="100" cy="100" r="95" strokeWidth="0.75" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="85" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="75" strokeWidth="0.75" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
              ABOUT SHAMBHALA
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Global Grand Event on <span className="font-serif italic font-normal text-[#8C5D00]">Happy Shambhala</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-serif italic max-w-xl mx-auto">
              Bringing together people of all ages to explore their minds, transform inner experiences, and awaken collective wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white text-[#352043] rounded-3xl overflow-hidden border-2 border-[#DFC47A]/60 shadow-xl hover:shadow-2xl hover:border-[#C8A34A] hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 w-full overflow-hidden bg-[#FAF5EF]">
                <Image
                  src="/images/service-8.webp"
                  alt="Know Our Mission"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-extrabold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                    KNOW OUR MISSION !
                  </h3>
                  <p className="text-[#5E5865] text-xs sm:text-sm leading-relaxed font-normal">
                    Shambhala in ACHARIYA brings people together of all ages and all areas of life who are interested in exploring their own minds, transforming experience, and awakening our potentials for an enlightened society.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C5D00] group-hover:text-[#352043] uppercase tracking-wider pt-2"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Pillar Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white text-[#352043] rounded-3xl overflow-hidden border-2 border-[#DFC47A]/60 shadow-xl hover:shadow-2xl hover:border-[#C8A34A] hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 w-full overflow-hidden bg-[#FAF5EF]">
                <Image
                  src="/images/service-9.webp"
                  alt="What You Will Learn"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-extrabold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                    WHAT YOU WILL LEARN?
                  </h3>
                  <p className="text-[#5E5865] text-xs sm:text-sm leading-relaxed font-normal">
                    The inner search and the spiritual path are basic requirements like both sides of a coin to bring transformation in the behavior of mankind. SHAMBHALA creates a path towards oneness by awakening or expanding consciousness.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C5D00] group-hover:text-[#352043] uppercase tracking-wider pt-2"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Pillar Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white text-[#352043] rounded-3xl overflow-hidden border-2 border-[#DFC47A]/60 shadow-xl hover:shadow-2xl hover:border-[#C8A34A] hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 w-full overflow-hidden bg-[#FAF5EF]">
                <Image
                  src="/images/service-10.webp"
                  alt="Benefits of Meditation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-extrabold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                    BENEFITS OF MEDITATION?
                  </h3>
                  <p className="text-[#5E5865] text-xs sm:text-sm leading-relaxed font-normal">
                    Activates swirling of energy through our Chakras, emerging and connecting to the movement of Celestial bodies in the cosmos and the spiraling journey of planet Earth as it travels through the Universe.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C5D00] group-hover:text-[#352043] uppercase tracking-wider pt-2"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. SHAMBHALA PHILOSOPHY (SPLIT FEATURE) */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Card */}
            <div className="lg:col-span-7 bg-white/95 rounded-3xl p-8 sm:p-10 border-2 border-[#E9DED3] shadow-lg space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
                DEEP INNER TRANSFORMATION
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#352043] leading-tight">
                Shambhala @ <span className="font-serif italic font-normal text-[#8C5D00]">ACHARIYA</span>
              </h2>

              <p className="text-[#5E5865] text-sm sm:text-base leading-relaxed">
                The human is a wonderful being, evolved through millions of forms and intrinsically endowed with tremendous qualities and infinite potentials. The physical body is fantastically sophisticated, with the capability of a vast spectrum of energy and action. At the same time, within each of us, the characters of past unconscious deeds also get accumulated.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-heading font-extrabold text-[#352043] text-base sm:text-lg">
                  We Enrich &amp; Empower Our Seekers To Be:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-[#352043]">
                  <div className="flex items-center gap-2 bg-[#FAF5EF] p-3 rounded-xl border border-[#E9DED3]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C5D00] shrink-0" />
                    <span>Physically Healthy</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FAF5EF] p-3 rounded-xl border border-[#E9DED3]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C5D00] shrink-0" />
                    <span>Mentally Strong</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FAF5EF] p-3 rounded-xl border border-[#E9DED3]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C5D00] shrink-0" />
                    <span>Intellectually Sharp</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FAF5EF] p-3 rounded-xl border border-[#E9DED3]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C5D00] shrink-0" />
                    <span>Emotionally Balanced</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FAF5EF] p-3 rounded-xl border border-[#E9DED3] sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8C5D00] shrink-0" />
                    <span>Spiritually Aligned to ACHARIYA Culture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Poster Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative h-[420px] sm:h-[480px] w-full max-w-md rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-[#352043]">
                <Image
                  src="/images/011A6549.webp"
                  alt="Shambhala Poster"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#352043]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 text-center">
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#DFC47A] uppercase tracking-wider block">
                    HAPPY SHAMBHALA
                  </span>
                  <span className="text-xs text-white/90 font-medium block">
                    Global Grand Event &amp; Mass Oneness Initiation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR GALLERY SECTION */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent border-t border-[#DFC47A]/30" id="Gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
              PHOTO HIGHLIGHTS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Our <span className="font-serif italic font-normal text-[#8C5D00]">Gallery</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative h-48 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#DFC47A]/60 shadow-lg group bg-white"
              >
                <Image
                  src={img}
                  alt={`Shambhala Gallery Image ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-xs font-bold text-[#DFC47A] uppercase tracking-wider">Shambhala Celebration</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL VIDEO GALLERY (ALL 17 VIDEOS) */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent" id="Testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] text-xs font-bold uppercase tracking-widest shadow-md">
              <Video className="w-3.5 h-3.5 text-[#DFC47A]" />
              SEEKER TESTIMONIALS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Our Testimonial <span className="font-serif italic font-normal text-[#8C5D00]">Gallery</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-normal max-w-xl mx-auto">
              Real experiences and spiritual transformations shared by Happy Shambhala participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialVideos.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                className="bg-white/95 rounded-3xl overflow-hidden border-2 border-[#E9DED3] shadow-md hover:shadow-xl transition-all p-2 space-y-2"
              >
                <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-black">
                  <iframe
                    suppressHydrationWarning
                    src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="px-3 py-1.5 flex items-center justify-between">
                  <span className="font-heading text-xs font-extrabold text-[#352043] truncate max-w-[220px]">
                    {video.title}
                  </span>
                  <span className="text-[10px] font-bold text-[#8C5D00] uppercase tracking-wider">Testimonial</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. REGISTER YOUR SLOT / TICKET BOOKING */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent border-y border-[#E9DED3]" id="TicketBooking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Ticket className="w-3.5 h-3.5 text-[#DFC47A]" />
              SLOT REGISTRATION
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Register Your <span className="font-serif italic font-normal text-[#8C5D00]">Slot Pass</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-normal max-w-xl mx-auto">
              Secure your participation for the Global Grand Event on Happy Shambhala.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {ticketTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-white/95 rounded-3xl p-6 border-2 ${tier.popular ? 'border-[#C8A34A] shadow-xl relative scale-[1.02]' : 'border-[#E9DED3] shadow-md'} hover:shadow-2xl hover:border-[#8C5D00] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 text-center group`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#8C5D00] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div className="space-y-3 pt-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FAF5EF] text-[#8C5D00] border border-[#DFC47A]/50 text-[10px] font-extrabold uppercase tracking-wider">
                    {tier.badge}
                  </span>
                  <div className="font-heading text-3xl font-extrabold text-[#352043]">
                    {tier.price}
                  </div>
                  <h4 className="font-heading text-base font-extrabold text-[#352043]">
                    {tier.name}
                  </h4>
                  <p className="text-[#5E5865] text-xs leading-relaxed font-normal">
                    {tier.desc}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-3 rounded-full bg-[#352043] group-hover:bg-[#8C5D00] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <span>Book Ticket</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-white" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTRIBUTE / DONATION BANNER */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-[#351A4A] via-[#47206A] to-[#200D2E] rounded-3xl p-8 sm:p-12 text-white border-2 border-[#DFC47A] shadow-2xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-bold uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 text-[#DFC47A]" />
              SUPPORT THE SACRED CAUSE
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
              Contribute &amp; <span className="text-[#DFC47A] font-serif italic font-normal">Sponsor Oneness</span>
            </h2>

            <p className="text-[#F8F2E8]/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Your valuable support enables us to provide free meditation sessions, spiritual literature, and community welfare initiatives across Puducherry and India.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C8A34A] hover:bg-white text-[#352043] font-extrabold text-xs sm:text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-4 h-4 text-[#352043]" />
                <span>Donate &amp; Contribute Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ONENESS MEDITATION GUIDELINES SECTION */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent border-t border-[#E9DED3]" id="Guidelines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <ShieldAlert className="w-3.5 h-3.5 text-[#DFC47A]" />
              SANCTUARY RULES
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Oneness Meditation <span className="font-serif italic font-normal text-[#8C5D00]">Guidelines</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-normal max-w-xl mx-auto">
              Kindly take this checklist into consideration for a peaceful initiation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Guidelines Checklist */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guidelines.map((rule, idx) => {
                const IconComp = rule.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#FAF5EF] rounded-2xl p-5 border border-[#E9DED3] shadow-xs flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 flex items-center justify-center shrink-0 shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-heading text-sm font-extrabold text-[#352043]">
                        {rule.title}
                      </h4>
                      <p className="text-[#5E5865] text-xs leading-relaxed font-normal">
                        {rule.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Guideline Video Container */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF5EF] p-4 rounded-3xl border-2 border-[#E9DED3] shadow-lg space-y-3">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
                  <iframe
                    suppressHydrationWarning
                    src="https://www.youtube.com/embed/5Ut6CCT_Gms?enablejsapi=1"
                    title="Meditation Guidelines Video"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-center text-xs font-bold text-[#352043] uppercase tracking-wider">
                  Watch Orientation &amp; Guidance Instructions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
