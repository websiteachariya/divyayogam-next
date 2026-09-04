'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAutoPlayVideo from '@/components/common/ScrollAutoPlayVideo';
import EventFloatingBar from '@/components/events/EventFloatingBar';
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
  Mail,
  Users,
  Globe,
  Sun,
  UploadCloud
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
      subtitle: 'Global Grand Celebration of Oneness & Initiation',
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
      subtitle: 'Deep cellular rejuvenation, organ meditation & Satsang with Arawindhan Ji',
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
    { price: '₹500', name: 'General Pass', desc: 'General Seating & Shambhala Initiation Entry', badge: 'ENTRY PASS', popular: false, icon: Ticket },
    { price: '₹1,000', name: 'Silver Sadhana Pass', desc: 'Silver Reserved Seating & Prasad', badge: 'SILVER PASS', popular: false, icon: Award },
    { price: '₹2,000', name: 'Gold Oneness Pass', desc: 'Gold Front Row Seating & Special Sadhana Kit', badge: 'GOLD PASS', popular: false, icon: Sparkles },
    { price: '₹5,000', name: 'Diamond Pass', desc: 'VIP Front Block & Exclusive Satsang Access', badge: 'DIAMOND PASS', popular: false, icon: Sun },
    { price: '₹10,000', name: 'VIP Patron Pass', desc: 'Sanctuary Sponsor Access & Personal Blessing', badge: 'PATRON PASS', popular: false, icon: HeartHandshake },
  ];

  const galleryImages = [
    { src: null, isPending: true, title: 'Shambhala Celebration' },
    { src: null, isPending: true, title: 'Oneness Sadhana Gathering' },
    { src: null, isPending: true, title: 'Spiritual Initiation' },
    { src: null, isPending: true, title: 'Consciousness Meditation' },
    { src: null, isPending: true, title: 'Deep Inner Peace' },
    { src: null, isPending: true, title: 'Sanctuary Satsang' },
    { src: null, isPending: true, title: 'Maha Shambhala Moments' },
    { src: null, isPending: true, title: 'Divine Awakening' },
    { src: null, isPending: true, title: 'Cellular Healing Session' },
    { src: null, isPending: true, title: 'Sacred Reflection' },
    { src: null, isPending: true, title: 'Upcoming Celebration' },
    { src: null, isPending: true, title: 'Sanctuary Highlights' },
  ];

  const testimonialVideos = [
    { id: 'GqDjm6amEu0', title: 'Deep Inner Healing Experience' },
    { id: '5Ut6CCT_Gms', title: 'Awakening Consciousness' },
    { id: 'G_otnJtf1qs', title: 'Shambhala Meditation Journey' },
    { id: 'HwA-qgzVWEk', title: 'Shambhala Sadhana Realization' },
    { id: '-UnFkMbnXs8', title: 'Mindfulness & Clarity' },
    { id: 'TXARPCnXUwM', title: 'Shambhala Transformation' },
    { id: 'vq2XTPdfttA', title: 'Soul Connection & Peace' },
    { id: 'VRgLuk0Etjw', title: 'Divine Energy Activation' },
    { id: 'ubDdVwaOKbI', title: 'Higher Consciousness State' },
    { id: 'nu3F8DD1nmo', title: 'Inner Harmony & Love' },
    { id: 'xLCFA-8bjH0', title: 'Peaceful Mind & Purpose' },
    { id: 'PyP9Rs_iI58', title: 'Cellular Health Awakening' },
    { id: 'tSPIoOmVqhg', title: 'Spiritual Alignment Grace' },
    { id: 'lZZxM58Uy7s', title: 'ACHARIYA Culture Blessings' },
  ];

  const outsidePondyEvents = [
    {
      location: 'Erode',
      date: '26, September',
      day: '26',
      month: 'SEPT',
      venue: 'Erode Regional Initiation Center',
      badge: 'ERODE SATSANG',
    },
    {
      location: 'Trichy',
      date: '10, October',
      day: '10',
      month: 'OCT',
      venue: 'Trichy Spiritual Awakening Center',
      badge: 'TRICHY SATSANG',
    },
    {
      location: 'Ettimadai',
      date: '24, October',
      day: '24',
      month: 'OCT',
      venue: 'Ettimadai Oneness Meditation Hall',
      badge: 'ETTIMADAI SATSANG',
    },
    {
      location: 'Chennai',
      date: '31, October',
      day: '31',
      month: 'OCT',
      venue: 'Chennai Shambhala Sanctuary',
      badge: 'CHENNAI SATSANG',
    },
    {
      location: 'Villupuram',
      date: '14, November',
      day: '14',
      month: 'NOV',
      venue: 'Saraswathi School, Villupuram',
      badge: 'SARASWATHI SCHOOL',
    },
    {
      location: 'Villupuram',
      date: '21, November',
      day: '21',
      month: 'NOV',
      venue: 'Villupuram City Oneness Sanctuary',
      badge: 'VILLUPURAM SATSANG',
    },
    {
      location: 'Karaikal',
      date: '28, November',
      day: '28',
      month: 'NOV',
      venue: 'Karaikal Shambhala Meditation Center',
      badge: 'KARAIKAL SATSANG',
    },
  ];

  const guidelines = [
    { icon: CameraOff, title: 'Zero Camera Movement', desc: 'Recording devices and active photography are strictly prohibited inside the meditation sanctuary.' },
    { icon: Ban, title: 'No Movement After Start', desc: 'To maintain the collective energy field, movement is restricted once the initiation commences.' },
    { icon: VolumeX, title: 'Maintain Noble Silence', desc: 'Observe total noble silence before, during, and after the guided Shambhala initiation.' },
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
      <header
        className="relative bg-cover bg-center bg-no-repeat pt-28 sm:pt-32 lg:pt-36 pb-6 sm:pb-8 text-white overflow-hidden font-body"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(53, 26, 74, 0.82), rgba(42, 19, 59, 0.88), rgba(31, 13, 43, 0.94)), url('/images/hp-1.webp')",
        }}
        id="Home"
      >
        {/* Background Mandala Image Asset */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none z-0">
          <Image
            src="/images/golden_lotus_mandala.webp"
            alt="Golden Lotus Mandala"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none z-0">
          <Image
            src="/images/golden_lotus_mandala.webp"
            alt="Golden Lotus Mandala"
            fill
            className="object-contain"
          />
        </div>

        {/* Hero Content Grid (Left Text & Right Large Video Player) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/25 border border-[#DFC47A]/50 text-[#DFC47A] text-xs font-bold uppercase tracking-widest shadow-md backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
                  <span>THE GUIDING LIGHT · SANTOSHI SHRI. ARAWINDHAN JI</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-widest shadow-md backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Live Registration Open</span>
                </div>
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
                Join Arawindhan Ji and thousands of seekers worldwide for the Maha Shambhala initiation, collective meditation, and spiritual awakening.
              </motion.p>

              {/* 4 Feature Badges Grid (Matching User Mockup) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 max-w-xl mx-auto lg:mx-0"
              >
                <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/5 border border-[#DFC47A]/30 backdrop-blur-sm text-center">
                  <div className="w-9 h-9 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/50 flex items-center justify-center text-[#DFC47A] mb-1.5 shadow-xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">One Humanity</span>
                </div>

                <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/5 border border-[#DFC47A]/30 backdrop-blur-sm text-center">
                  <div className="w-9 h-9 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/50 flex items-center justify-center text-[#DFC47A] mb-1.5 shadow-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">Higher Consciousness</span>
                </div>

                <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/5 border border-[#DFC47A]/30 backdrop-blur-sm text-center">
                  <div className="w-9 h-9 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/50 flex items-center justify-center text-[#DFC47A] mb-1.5 shadow-xs">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">Global Meditation</span>
                </div>

                <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/5 border border-[#DFC47A]/30 backdrop-blur-sm text-center">
                  <div className="w-9 h-9 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/50 flex items-center justify-center text-[#DFC47A] mb-1.5 shadow-xs">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">A Better World</span>
                </div>
              </motion.div>

              {/* Callout Quote + Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4 pt-1"
              >
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
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
                    <Play className="w-3.5 h-3.5 fill-[#DFC47A]" />
                    <span>Explore Shambhala</span>
                  </a>
                </div>


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
                  <ScrollAutoPlayVideo
                    src="https://res.cloudinary.com/y2q2jsq0/video/upload/v1787284239/watermark-removed-gemini_generated_video_288afa14_oifrwr.mp4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#351A4A] px-4 py-3 text-center border-t border-[#DFC47A]/40 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-[#DFC47A]/90 uppercase tracking-wider hidden sm:inline">
                    A Brighter Tomorrow Together
                  </span>
                  <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
                    <Sparkles className="w-4 h-4 text-[#DFC47A]" />
                    <span className="text-xs sm:text-sm font-bold text-[#DFC47A] uppercase tracking-wider">
                      Happy Shambhala Initiation Video
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold text-[#DFC47A] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 hidden md:inline">
                    Meditate • Unite • Transform
                  </span>
                </div>
              </motion.div>
            </div>
          </div>



          {/* Ornate Glowing Golden Lotus & Tagline Crest (Matching User Mockup) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="w-full max-w-5xl mx-auto pt-2 pb-2 flex flex-col items-center justify-center relative z-10"
          >
            {/* Clean Horizontal Golden Divider Line with Centered Lotus Emblem */}
            <div className="relative w-full flex items-center justify-center min-h-[50px] my-2">
              {/* Left Line */}
              <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFC47A]/70 to-[#FFEAA7] drop-shadow-[0_0_8px_rgba(223,196,122,0.6)]" />

              {/* Glowing Lotus Crest in Center */}
              <div className="relative mx-3 sm:mx-6 flex flex-col items-center justify-center shrink-0">
                {/* Radiant Backdrop Glow */}
                <div className="absolute w-20 h-20 rounded-full bg-[#FFEAA7]/30 blur-xl pointer-events-none -z-10 animate-pulse" />
                <div className="absolute w-12 h-12 rounded-full bg-[#FFF8DC]/60 blur-md pointer-events-none -z-10" />

                {/* Lotus Emblem SVG */}
                <svg
                  width="68"
                  height="44"
                  viewBox="0 0 68 44"
                  fill="none"
                  className="drop-shadow-[0_0_15px_rgba(255,234,167,0.9)]"
                >
                  {/* Central Radiant Flare Dot */}
                  <circle cx="34" cy="22" r="4" fill="#FFFFFF" className="animate-pulse" />
                  <circle cx="34" cy="22" r="8" fill="#FFEAA7" fillOpacity="0.5" />

                  {/* Lotus Petals Outline */}
                  <path
                    d="M34 4 C37 14, 40 20, 34 29 C28 20, 31 14, 34 4 Z"
                    fill="#FFEAA7"
                    stroke="#FFF8DC"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M34 29 C27 24, 21 16, 23 10 C29 14, 31 22, 34 29 Z"
                    fill="none"
                    stroke="#FFEAA7"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M34 29 C41 24, 47 16, 45 10 C39 14, 37 22, 34 29 Z"
                    fill="none"
                    stroke="#FFEAA7"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M34 30 C23 27, 13 20, 14 14 C22 17, 27 25, 34 30 Z"
                    fill="none"
                    stroke="#DFC47A"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M34 30 C45 27, 55 20, 54 14 C46 17, 41 25, 34 30 Z"
                    fill="none"
                    stroke="#DFC47A"
                    strokeWidth="1.3"
                  />
                  {/* Bottom Golden Ring Arcs */}
                  <path
                    d="M 12 28 Q 34 42 56 28"
                    fill="none"
                    stroke="#FFEAA7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 18 33 Q 34 44 50 33"
                    fill="none"
                    stroke="#DFC47A"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Right Line */}
              <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#DFC47A]/70 to-[#FFEAA7] drop-shadow-[0_0_8px_rgba(223,196,122,0.6)]" />
            </div>

            {/* Tagline Strip: — MEDITATE • CELEBRATE • TRANSFORM — */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-5 pt-1 w-full max-w-full px-2">
              <span className="w-4 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFC47A] to-[#DFC47A] rounded-full shrink" />
              <span className="font-serif text-[#FFEAA7] text-[10px] xs:text-xs sm:text-sm md:text-base font-medium tracking-[0.12em] xs:tracking-[0.2em] sm:tracking-[0.3em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] shrink-0">
                MEDITATE <span className="text-[#DFC47A] mx-0.5 sm:mx-1">•</span> CELEBRATE <span className="text-[#DFC47A] mx-0.5 sm:mx-1">•</span> TRANSFORM
              </span>
              <span className="w-4 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent via-[#DFC47A] to-[#DFC47A] rounded-full shrink" />
            </div>
          </motion.div>
        </div>

        {/* Curved Bottom Edge Divider matching section bg (#FAF5EF) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#FAF5EF]" fill="currentColor">
            <path d="M0,0 C300,50 900,50 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </header>

      {/* 2. LIVE COUNTDOWN & MISSION BANNER */}
      <section className="pt-4 pb-6 sm:pb-8 relative z-20 overflow-hidden">
        {/* Ornate Golden Lotus Crest & Tagline Strip directly above Counter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-5xl mx-auto mb-4 flex flex-col items-center justify-center relative z-10 px-4"
        >
          {/* Clean Horizontal Golden Divider Line with Centered Lotus Emblem */}
          <div className="relative w-full flex items-center justify-center min-h-[50px] my-2">
            {/* Left Line */}
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#8C5D00]/60 to-[#C8A34A] drop-shadow-[0_0_8px_rgba(200,163,74,0.5)]" />

            {/* Glowing Lotus Crest in Center */}
            <div className="relative mx-3 sm:mx-6 flex flex-col items-center justify-center shrink-0">
              {/* Radiant Backdrop Glow */}
              <div className="absolute w-20 h-20 rounded-full bg-[#C8A34A]/25 blur-xl pointer-events-none -z-10 animate-pulse" />
              <div className="absolute w-12 h-12 rounded-full bg-[#FFEAA7]/70 blur-md pointer-events-none -z-10" />

              {/* Lotus Emblem SVG */}
              <svg
                width="68"
                height="44"
                viewBox="0 0 68 44"
                fill="none"
                className="drop-shadow-[0_0_12px_rgba(200,163,74,0.8)]"
              >
                {/* Central Radiant Flare Dot */}
                <circle cx="34" cy="22" r="4" fill="#352043" className="animate-pulse" />
                <circle cx="34" cy="22" r="8" fill="#C8A34A" fillOpacity="0.5" />

                {/* Lotus Petals Outline */}
                <path
                  d="M34 4 C37 14, 40 20, 34 29 C28 20, 31 14, 34 4 Z"
                  fill="#C8A34A"
                  stroke="#8C5D00"
                  strokeWidth="1.2"
                />
                <path
                  d="M34 29 C27 24, 21 16, 23 10 C29 14, 31 22, 34 29 Z"
                  fill="none"
                  stroke="#8C5D00"
                  strokeWidth="1.5"
                />
                <path
                  d="M34 29 C41 24, 47 16, 45 10 C39 14, 37 22, 34 29 Z"
                  fill="none"
                  stroke="#8C5D00"
                  strokeWidth="1.5"
                />
                <path
                  d="M34 30 C23 27, 13 20, 14 14 C22 17, 27 25, 34 30 Z"
                  fill="none"
                  stroke="#C8A34A"
                  strokeWidth="1.3"
                />
                <path
                  d="M34 30 C45 27, 55 20, 54 14 C46 17, 41 25, 34 30 Z"
                  fill="none"
                  stroke="#C8A34A"
                  strokeWidth="1.3"
                />
                {/* Bottom Golden Ring Arcs */}
                <path
                  d="M 12 28 Q 34 42 56 28"
                  fill="none"
                  stroke="#8C5D00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 18 33 Q 34 44 50 33"
                  fill="none"
                  stroke="#C8A34A"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Right Line */}
            <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#8C5D00]/60 to-[#C8A34A] drop-shadow-[0_0_8px_rgba(200,163,74,0.5)]" />
          </div>

          {/* Tagline Strip: — PEACE WITHIN • PROGRESS BEYOND — */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-5 pt-1 w-full max-w-full px-2">
            <span className="w-4 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#8C5D00] to-[#8C5D00] rounded-full shrink" />
            <span className="font-serif text-[#352043] font-extrabold text-[10px] xs:text-xs sm:text-sm md:text-base tracking-[0.12em] xs:tracking-[0.2em] sm:tracking-[0.3em] uppercase drop-shadow-xs shrink-0">
              PEACE WITHIN <span className="text-[#8C5D00] mx-0.5 sm:mx-1">•</span> PROGRESS BEYOND
            </span>
            <span className="w-4 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent via-[#8C5D00] to-[#8C5D00] rounded-full shrink" />
          </div>
        </motion.div>

        {/* Infinite Looping Events Marquee Bar directly above Event Start Date */}
        <EventFloatingBar variant="embedded" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl p-6 sm:p-10 border-2 border-[#DFC47A] shadow-[0_20px_60px_rgba(53,32,67,0.15)] bg-gradient-to-br from-[#FAF5EF]/95 via-white to-[#F8F2E8]/95 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden"
          >
            {/* Background Mandala SVG Accent */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 opacity-10 pointer-events-none">
              <svg width="350" height="350" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.8">
                <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
                <circle cx="100" cy="100" r="75" />
                <circle cx="100" cy="100" r="50" />
              </svg>
            </div>

            {/* Left Logo / Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-[#DFC47A]/30 pb-6 lg:pb-0 lg:pr-8 relative z-10">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-3 group">
                {/* Glowing ring behind image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#DFC47A]/30 to-[#8C5D00]/20 blur-md group-hover:scale-105 transition-transform" />
                <Image
                  src="/images/MD-99.webp"
                  alt="Happy Shambhala Logo"
                  fill
                  className="object-contain drop-shadow-xl relative z-10"
                />
              </div>
              <span className="font-heading font-extrabold text-xl text-[#352043] uppercase tracking-widest flex items-center gap-1.5 justify-center">
                <span>Happy Shambhala</span>
              </span>
              <span className="text-xs text-[#8C5D00] font-bold uppercase tracking-wider mt-1 px-3 py-0.5 rounded-full bg-[#FAF5EF] border border-[#DFC47A]/50 shadow-xs">
                Grand Oneness Gathering 2026
              </span>
            </div>

            {/* Right Date & Live Countdown */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left relative z-10">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#352043] text-[#DFC47A] text-xs font-extrabold uppercase tracking-widest shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-[#DFC47A]" />
                    <span>MAIN EVENT DATE</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8C5D00]/10 text-[#8C5D00] text-xs font-bold border border-[#8C5D00]/30">
                    <span className="w-2 h-2 rounded-full bg-[#8C5D00] animate-pulse" />
                    <span>Live Registration Open</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/60 text-[#8C5D00] text-xs font-extrabold uppercase tracking-wider shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#8C5D00]" />
                    <span>VILLIANUR, PUDUCHERRY</span>
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-0.5">
                  <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#352043] leading-tight">
                    12th DECEMBER 2026,
                  </h2>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8C5D00]/10 border border-[#8C5D00]/30 text-[#8C5D00] font-body not-italic text-xs sm:text-sm md:text-base font-extrabold shadow-xs whitespace-nowrap">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C5D00]" />
                    05:00 PM IST
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#352043] text-[#DFC47A] text-xs sm:text-sm font-extrabold shadow-sm whitespace-nowrap uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-[#DFC47A]" />
                    VILLIANUR
                  </span>
                </div>

                <p className="text-[#5E5865] text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
                  We heartily welcome you to receive the new Impact, Initiation in abundance and redirect the meaning in your life. Become Peaceful, Purposeful and Powerful by participating in <strong className="text-[#352043] underline decoration-[#DFC47A] underline-offset-2">SHAMBHALA 2026</strong>.
                </p>
              </div>

              {/* Animated Countdown Grid */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 pt-1">
                <div className="bg-gradient-to-b from-white to-[#FAF5EF] border border-[#DFC47A]/60 rounded-2xl p-3 sm:p-4 text-center shadow-md hover:border-[#8C5D00] hover:scale-105 transition-all">
                  <span className="font-heading font-extrabold text-2xl sm:text-4xl text-[#352043] block leading-none">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] sm:text-xs font-extrabold text-[#8C5D00] uppercase tracking-wider mt-1.5 block">
                    Days
                  </span>
                </div>

                <div className="bg-gradient-to-b from-white to-[#FAF5EF] border border-[#DFC47A]/60 rounded-2xl p-3 sm:p-4 text-center shadow-md hover:border-[#8C5D00] hover:scale-105 transition-all">
                  <span className="font-heading font-extrabold text-2xl sm:text-4xl text-[#352043] block leading-none">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[10px] sm:text-xs font-extrabold text-[#8C5D00] uppercase tracking-wider mt-1.5 block">
                    Hours
                  </span>
                </div>

                <div className="bg-gradient-to-b from-white to-[#FAF5EF] border border-[#DFC47A]/60 rounded-2xl p-3 sm:p-4 text-center shadow-md hover:border-[#8C5D00] hover:scale-105 transition-all">
                  <span className="font-heading font-extrabold text-2xl sm:text-4xl text-[#352043] block leading-none">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-[10px] sm:text-xs font-extrabold text-[#8C5D00] uppercase tracking-wider mt-1.5 block">
                    Mins
                  </span>
                </div>

                <div className="bg-gradient-to-b from-white to-[#FAF5EF] border-2 border-[#C8A34A] rounded-2xl p-3 sm:p-4 text-center shadow-md hover:scale-105 transition-all">
                  <span className="font-heading font-extrabold text-2xl sm:text-4xl text-[#C8A34A] block leading-none animate-pulse">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-[10px] sm:text-xs font-extrabold text-[#8C5D00] uppercase tracking-wider mt-1.5 block">
                    Secs
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2.5 MAHA SHAMBHALA REGIONAL EVENTS ROADMAP */}
      <section className="py-6 sm:py-10 relative z-20 overflow-hidden" id="OutsidePondy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3.5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-extrabold uppercase tracking-widest shadow-md">
              <MapPin className="w-3.5 h-3.5 text-[#DFC47A]" />
              <span>REGIONAL INITIATION ROADMAP 2026</span>
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#352043] leading-tight">
              Maha Shambhala <span className="font-serif italic font-normal text-[#8C5D00]">Outside Pondyzone</span>
            </h2>

            <p className="text-[#5E5865] text-sm sm:text-base font-serif italic max-w-2xl mx-auto leading-relaxed">
              Experience regional Shambhala initiation sessions hosted across 7 major centers leading up to the Grand Oneness Gathering in Puducherry.
            </p>
          </div>

          {/* Luxury Timeline Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {outsidePondyEvents.map((evt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border-2 border-[#DFC47A]/40 hover:border-[#8C5D00] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 group relative overflow-hidden"
              >
                {/* Shiny Shimmer Background Effect on Hover */}
                <div className="absolute -inset-full top-0 block h-full w-1/2 z-5 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine pointer-events-none" />

                {/* Top Corner Decorative Badge & Sparkle */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FAF5EF] text-[#8C5D00] border border-[#DFC47A]/50 text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                    {evt.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF5EF] border border-[#DFC47A]/40 flex items-center justify-center text-[#DFC47A] group-hover:text-[#8C5D00] group-hover:bg-[#8C5D00]/10 transition-colors">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Location & Date Display */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3.5">
                    {/* Dark Royal Date Box */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#352043] via-[#2A133B] to-[#1F0D2B] text-[#DFC47A] flex flex-col items-center justify-center shrink-0 border-2 border-[#DFC47A]/60 shadow-md group-hover:scale-105 transition-transform">
                      <span className="font-heading font-extrabold text-2xl leading-none">
                        {evt.day}
                      </span>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#DFC47A]/90 mt-1 block">
                        {evt.month}
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="font-heading text-2xl font-extrabold text-[#352043] group-hover:text-[#8C5D00] transition-colors leading-tight">
                        {evt.location}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-[#8C5D00] font-bold">
                        <Calendar className="w-3.5 h-3.5 shrink-0 text-[#8C5D00]" />
                        <span>{evt.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E9DED3] flex items-start gap-2 text-xs text-[#5E5865] font-medium leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#8C5D00] shrink-0 mt-0.5" />
                    <span>{evt.venue}</span>
                  </div>
                </div>

                {/* Card CTA Button */}
                <Link
                  href="#TicketBooking"
                  className="w-full py-3 rounded-full bg-[#FAF5EF] group-hover:bg-[#352043] text-[#352043] group-hover:text-white border-2 border-[#DFC47A]/60 group-hover:border-[#352043] font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 flex items-center justify-center gap-2 relative z-10"
                >
                  <span>Register Interest</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8C5D00] group-hover:text-[#DFC47A] group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}

            {/* Featured Grand Finale Card for Puducherry */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-[#351A4A] via-[#47206A] to-[#1F0D2B] text-white rounded-3xl p-6 border-2 border-[#DFC47A] shadow-2xl hover:shadow-[0_20px_50px_rgba(200,163,74,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 sm:col-span-2 lg:col-span-1 xl:col-span-1 relative overflow-hidden"
            >
              {/* Gold Ambient Glow Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFC47A]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8A34A] text-[#352043] text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  <Sparkles className="w-3 h-3 text-[#352043]" />
                  MAIN EVENT
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#DFC47A] animate-ping" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 rounded-2xl bg-[#C8A34A] text-[#352043] flex flex-col items-center justify-center shrink-0 border-2 border-white/30 shadow-lg">
                    <span className="font-heading font-extrabold text-2xl leading-none">
                      12
                    </span>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#352043] mt-1 block">
                      DEC
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="font-heading text-2xl font-extrabold text-white leading-tight">
                      Puducherry
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#DFC47A] font-bold">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>12th December 2026</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/15 flex items-start gap-2 text-xs text-[#F8F2E8]/90 font-medium leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#DFC47A] shrink-0 mt-0.5" />
                  <span>Grand Oneness Shambhala Sanctuary, Puducherry</span>
                </div>
              </div>

              <Link
                href="#TicketBooking"
                className="w-full py-3 rounded-full bg-[#C8A34A] hover:bg-white text-[#352043] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 relative z-10"
              >
                <span>Book Main Event Pass</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#352043]" />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. FEATURED PROMO VIDEO SECTION */}
      <section className="py-6 relative overflow-hidden">
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
              <ScrollAutoPlayVideo
                src="https://res.cloudinary.com/y2q2jsq0/video/upload/v1783507433/Gx012584_sckw96.mp4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. REGISTER YOUR SLOT / TICKET BOOKING */}
      <section className="py-6 sm:py-10 lg:py-12 relative overflow-hidden bg-transparent border-y border-[#E9DED3]" id="TicketBooking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-[11px] sm:text-xs font-bold uppercase tracking-widest shadow-md">
              <Ticket className="w-3.5 h-3.5 text-[#DFC47A]" />
              <span>SLOT REGISTRATION</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#352043]">
              Register Your <span className="font-serif italic font-normal text-[#8C5D00]">Slot Pass</span>
            </h2>
            <p className="text-[#5E5865] text-xs sm:text-base font-normal max-w-xl mx-auto">
              Secure your participation for the Global Grand Event on Happy Shambhala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ticketTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 border-2 ${
                  tier.popular ? 'border-[#C8A34A] shadow-xl relative sm:scale-[1.02]' : 'border-[#E9DED3] shadow-md'
                } hover:shadow-2xl hover:border-[#8C5D00] sm:hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-4 text-center group overflow-hidden`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#8C5D00] text-white text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow-md whitespace-nowrap z-20">
                    MOST POPULAR
                  </div>
                )}

                <div className="space-y-3 pt-1">
                  {/* Top Image Banner Container / Pending Upload Placeholder Frame */}
                  <div className="relative h-32 sm:h-36 w-full rounded-2xl overflow-hidden border-2 border-dashed border-[#DFC47A]/60 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EF] to-[#F8F2E8] flex flex-col items-center justify-center p-3 text-center group-hover:border-[#C8A34A] transition-all">
                    {tier.image ? (
                      <Image
                        src={tier.image}
                        alt={tier.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[radial-gradient(#C8A34A_1px,transparent_1px)] [background-size:14px_14px] opacity-15 pointer-events-none" />
                        <div className="relative z-10 w-10 h-10 rounded-full bg-white/90 border border-[#C8A34A]/50 shadow-xs flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                          <UploadCloud className="w-5 h-5 text-[#8C5D00]" />
                        </div>
                        <span className="relative z-10 inline-block px-2.5 py-0.5 rounded-full bg-[#8C5D00]/15 text-[#8C5D00] text-[9px] font-extrabold uppercase tracking-widest border border-[#8C5D00]/25 shadow-xs mb-1">
                          Pending Upload
                        </span>
                        <p className="relative z-10 text-[10px] font-bold text-[#352043] leading-tight">
                          Waiting for Image to be Uploaded
                        </p>
                      </>
                    )}
                  </div>

                  <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#FAF5EF] text-[#8C5D00] border border-[#DFC47A]/50 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider">
                    {tier.badge}
                  </span>

                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#352043]">
                    {tier.price}
                  </div>

                  <h4 className="font-heading text-xs sm:text-base font-extrabold text-[#352043]">
                    {tier.name}
                  </h4>

                  <p className="text-[#5E5865] text-[11px] sm:text-xs leading-relaxed font-normal">
                    {tier.desc}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-2.5 sm:py-3 rounded-full bg-[#352043] group-hover:bg-[#8C5D00] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-md transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <span>Book Ticket</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-white" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ONENESS MEDITATION GUIDELINES SECTION */}
      <section className="py-8 sm:py-12 relative overflow-hidden bg-transparent border-t border-[#E9DED3]" id="Guidelines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
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

      {/* 7. ABOUT SHAMBHALA (3 CORE PILLARS SECTION) */}
      <section className="py-8 sm:py-12 relative overflow-hidden bg-transparent border-t border-[#DFC47A]/30" id="Aboutus">
        {/* Background Mandala Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="700" height="700" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.8">
            <circle cx="100" cy="100" r="95" strokeWidth="0.75" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="85" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="75" strokeWidth="0.75" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Pillar Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/95 backdrop-blur-md text-[#352043] rounded-3xl overflow-hidden border-2 border-[#DFC47A]/60 hover:border-[#8C5D00] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden bg-[#FAF5EF]">
                <Image
                  src="/images/service-8.webp"
                  alt="Know Our Mission"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A133B]/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#352043]/85 border border-[#DFC47A]/50 text-[#DFC47A] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-sm shadow-xs">
                    OUR MISSION
                  </span>
                </div>
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#352043] group-hover:bg-[#8C5D00] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 self-start"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-white" />
                </Link>
              </div>
            </motion.div>

            {/* Pillar Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/95 backdrop-blur-md text-[#352043] rounded-3xl overflow-hidden border-2 border-[#DFC47A]/60 hover:border-[#8C5D00] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden bg-[#FAF5EF]">
                <Image
                  src="/images/service-9.webp"
                  alt="What You Will Learn"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A133B]/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#352043]/85 border border-[#DFC47A]/50 text-[#DFC47A] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-sm shadow-xs">
                    WHAT YOU LEARN
                  </span>
                </div>
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#352043] group-hover:bg-[#8C5D00] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 self-start"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-white" />
                </Link>
              </div>
            </motion.div>

            {/* Pillar Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/95 backdrop-blur-md text-[#352043] rounded-3xl overflow-hidden border-2 border-[#DFC47A]/60 hover:border-[#8C5D00] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden bg-[#FAF5EF]">
                <Image
                  src="/images/service-10.webp"
                  alt="Benefits of Meditation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A133B]/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#352043]/85 border border-[#DFC47A]/50 text-[#DFC47A] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-sm shadow-xs">
                    MEDITATION BENEFITS
                  </span>
                </div>
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#352043] group-hover:bg-[#8C5D00] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 self-start"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-white" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. SHAMBHALA PHILOSOPHY (SPLIT FEATURE) */}
      <section className="py-8 sm:py-12 relative overflow-hidden bg-transparent">
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
              <div className="relative group h-[440px] sm:h-[500px] w-full max-w-md rounded-3xl overflow-hidden border-2 border-[#DFC47A] shadow-2xl bg-[#352043]">
                <Image
                  src="/images/011A6549.webp"
                  alt="Shambhala Poster"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A133B]/95 via-[#2A133B]/20 to-transparent group-hover:opacity-95 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 text-center">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#352043]/85 border border-[#DFC47A]/50 text-[#DFC47A] font-heading font-extrabold text-lg sm:text-xl uppercase tracking-widest backdrop-blur-md shadow-md">
                    HAPPY SHAMBHALA
                  </span>
                  <p className="text-xs sm:text-sm text-[#F8F2E8] font-medium leading-relaxed">
                    Global Grand Event &amp; Mass Oneness Initiation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OUR GALLERY SECTION */}
      <section className="py-8 sm:py-12 relative overflow-hidden bg-transparent border-t border-[#DFC47A]/30" id="Gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
              PHOTO HIGHLIGHTS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Our <span className="font-serif italic font-normal text-[#8C5D00]">Gallery</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {galleryImages.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative h-56 sm:h-64 rounded-3xl overflow-hidden border-2 border-[#DFC47A]/60 hover:border-[#8C5D00] shadow-lg hover:shadow-2xl transition-all duration-500 group bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center"
              >
                {item.src && !item.isPending ? (
                  <>
                    <Image
                      src={item.src}
                      alt={item.title || `Shambhala Gallery Image ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Dark Golden Gradient Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A133B]/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex items-end p-4">
                      <div className="space-y-1 text-left w-full">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#352043]/85 border border-[#DFC47A]/50 text-[#DFC47A] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-sm shadow-xs">
                          {item.title || 'Shambhala Celebration'}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Modern Eye-Catching Pending Upload Card Structure */
                  <div className="relative w-full h-full p-6 border-2 border-dashed border-[#DFC47A]/70 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EF] to-[#F8F2E8] flex flex-col items-center justify-center text-center group-hover:border-[#8C5D00] transition-colors">
                    <div className="absolute inset-0 bg-[radial-gradient(#C8A34A_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
                    
                    <div className="relative z-10 w-14 h-14 rounded-full bg-white/90 border-2 border-[#C8A34A]/50 shadow-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C8A34A]/20 to-[#8C5D00]/20 animate-pulse pointer-events-none" />
                      <UploadCloud className="w-7 h-7 text-[#8C5D00]" />
                    </div>

                    <span className="relative z-10 inline-block px-3.5 py-1 rounded-full bg-[#8C5D00]/15 text-[#8C5D00] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest border border-[#8C5D00]/30 shadow-xs mb-1.5">
                      Pending Upload
                    </span>

                    <h4 className="relative z-10 font-heading text-xs sm:text-sm font-bold text-[#352043] leading-tight">
                      Waiting for Image to be Uploaded
                    </h4>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIAL VIDEO GALLERY (ALL 17 VIDEOS) */}
      <section className="py-8 sm:py-12 relative overflow-hidden bg-transparent" id="Testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
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

    </div>
  );
}
