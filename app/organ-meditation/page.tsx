'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  GraduationCap,
  Sparkles,
  Target,
  Award,
  HeartHandshake,
  Globe,
  Quote,
  CheckCircle2,
  UploadCloud,
} from 'lucide-react';

export default function OrganMeditationPage() {
  const [activeTab, setActiveTab] = useState<'mon' | 'tue' | 'wed' | 'thu' | 'fri'>('mon');

  const organData = {
    mon: {
      day: 'MONDAY',
      title: 'LUNG MEDITATION',
      element: 'METAL',
      theme: 'Courage & New Beginnings',
      desc: 'The lungs represent our ability to receive life through every breath. Students visualize Bright White Light filling both lungs while breathing slowly and deeply.',
      release: ['Sadness', 'Depression', 'Emotional Burdens'],
      develop: ['Courage', 'Boldness', 'Righteousness', 'Confidence'],
      quote: '"With every breath, I release sadness. I breathe in courage, confidence, and positive energy."',
      note: 'Helps enhance light the soul with enthusiasm, emotional freshness, and a positive mindset.',
      img: '/images/organ-lungs.webp',
      glowGradient: 'radial-gradient(circle, #E2E8F0 0%, #0F172A 100%)',
    },
    tue: {
      day: 'TUESDAY',
      title: 'HEART MEDITATION',
      element: 'FIRE',
      theme: 'Love & Happiness',
      desc: 'The heart is the center of love and joy. Students visualize Bright Red Light filling the heart, fostering unconditional love and compassion.',
      release: ['Hatred', 'Cruelty', 'Bitterness'],
      develop: ['Love', 'Joy', 'Happiness'],
      quote: '"I release hatred and cruelty. I fill my heart with unconditional love and boundless joy."',
      note: 'Cleanses emotional stress, fosters forgiveness, and expands inner harmony.',
      img: '/images/organ-heart.webp',
      glowGradient: 'radial-gradient(circle, #FECACA 0%, #7F1D1D 100%)',
    },
    wed: {
      day: 'WEDNESDAY',
      title: 'SPLEEN MEDITATION',
      element: 'EARTH',
      theme: 'Trust & Stability',
      desc: 'The spleen is deeply connected to stability and trust. Students visualize Bright Yellow Light entering the spleen, grounding their emotions and bringing peace.',
      release: ['Worry', 'Anxiety', 'Overthinking'],
      develop: ['Forgiveness', 'Peace', 'Trust'],
      quote: '"I release worry and anxiety. I embrace complete peace, trust, and grounding."',
      note: 'Calms the nervous system, aids digestion of thoughts, and centers consciousness.',
      img: '/images/organ-spleen.webp',
      glowGradient: 'radial-gradient(circle, #FEF08A 0%, #713F12 100%)',
    },
    thu: {
      day: 'THURSDAY',
      title: 'LIVER MEDITATION',
      element: 'WOOD',
      theme: 'Kindness & Patience',
      desc: 'The liver governs emotional flow. Students visualize Bright Green Light entering the liver, melting away frustration and nurturing profound kindness.',
      release: ['Anger', 'Jealousy', 'Frustration'],
      develop: ['Kindness', 'Patience', 'Tolerance'],
      quote: '"I release anger and jealousy. I welcome kindness, infinite patience, and gentleness."',
      note: 'Smooths prana circulation, relieves tension, and nurtures clear vision.',
      img: '/images/organ-liver.webp',
      glowGradient: 'radial-gradient(circle, #BBF7D0 0%, #14532D 100%)',
    },
    fri: {
      day: 'FRIDAY',
      title: 'KIDNEY MEDITATION',
      element: 'WATER',
      theme: 'Confidence & Strength',
      desc: 'The kidneys store our vital energy. Students visualize Bright Blue Light entering the kidneys, dissolving fear and building an unshakable inner strength.',
      release: ['Fear', 'Insecurity', 'Timidity'],
      develop: ['Confidence', 'Calmness', 'Bravery'],
      quote: '"I release fear and insecurity. I draw upon inner strength, confidence, and profound calm."',
      note: 'Stores vital jing energy, restores resilience, and dissolves deep anxiety.',
      img: '/images/organ-kidneys.webp',
      glowGradient: 'radial-gradient(circle, #BFDBFE 0%, #1E3A8A 100%)',
    },
  };

  const currentOrgan = organData[activeTab];

  const atAGlanceData = [
    {
      day: 'MONDAY',
      organ: 'Lungs • Metal',
      color: 'bg-[#64287F]',
      light: 'White Light',
      theme: 'Theme: Courage & New Beginnings',
      release: 'Sadness, Depression',
      develop: 'Courage, Confidence',
    },
    {
      day: 'TUESDAY',
      organ: 'Heart • Fire',
      color: 'bg-[#B91C1C]',
      light: 'Red Light',
      theme: 'Theme: Love & Happiness',
      release: 'Hatred, Cruelty',
      develop: 'Love, Joy',
    },
    {
      day: 'WEDNESDAY',
      organ: 'Spleen • Earth',
      color: 'bg-[#A16207]',
      light: 'Yellow Light',
      theme: 'Theme: Trust & Stability',
      release: 'Worry, Anxiety',
      develop: 'Forgiveness, Peace',
    },
    {
      day: 'THURSDAY',
      organ: 'Liver • Wood',
      color: 'bg-[#15803D]',
      light: 'Green Light',
      theme: 'Theme: Kindness & Patience',
      release: 'Anger, Jealousy',
      develop: 'Kindness, Patience',
    },
    {
      day: 'FRIDAY',
      organ: 'Kidneys • Water',
      color: 'bg-[#1D4ED8]',
      light: 'Blue Light',
      theme: 'Theme: Confidence & Strength',
      release: 'Fear, Insecurity',
      develop: 'Confidence, Calmness',
    },
  ];

  const benefitsData = [
    {
      title: 'ACADEMIC EXCELLENCE',
      desc: 'Improves concentration, memory retention, and overall academic performance.',
      icon: GraduationCap,
    },
    {
      title: 'STRESS RELIEF',
      desc: 'Significantly reduces exam stress, anxiety, and emotional imbalances.',
      icon: Sparkles,
    },
    {
      title: 'SELF-DISCIPLINE',
      desc: 'Fosters emotional maturity, inner discipline, and self-control.',
      icon: Target,
    },
    {
      title: 'CHARACTER VIRTUES',
      desc: 'Builds confidence, courage, patience, kindness, and righteousness.',
      icon: Award,
    },
    {
      title: 'HEALTHY RELATIONSHIPS',
      desc: 'Nurtures empathy and harmony with teachers, peers, and family.',
      icon: HeartHandshake,
    },
    {
      title: 'SOCIAL RESPONSIBILITY',
      desc: 'Develops gratitude, active citizenship, and global citizenship.',
      icon: Globe,
    },
  ];

  return (
    <div className="bg-transparent font-body min-h-screen text-[#475569] relative">
      
      {/* Fixed Full-Screen Background Image bg-6.webp Overlay */}
      <div
        className="fixed inset-0 -z-40 bg-cover bg-center bg-fixed bg-no-repeat pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/bg-6.webp')" }}
      />

      {/* HERO SECTION (EXACT MATCHING QUANTUM HABITS BACKGROUND) */}
      <header
        className="relative bg-gradient-to-br from-[#401952] via-[#64287F] to-[#2E0F3D] pt-32 pb-36 overflow-hidden text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(64, 25, 82, 0.95) 0%, rgba(100, 40, 127, 0.96) 60%, rgba(46, 15, 61, 0.98) 100%), url('/images/qh-3.webp')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-center lg:text-left">
            
            {/* Hero Left Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-none">
                <span className="text-[#C8A34A] block filter drop-shadow-[0_4px_20px_rgba(212,175,54,0.3)]">GOLDEN SMILE</span>
                <span className="text-white block mt-1">MEDITATION</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/95 font-serif italic max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Inner Peace, Emotional Well-being<br />
                &amp; Holistic Development
              </p>
            </motion.div>

            {/* Hero Right Blended Artwork (Integrated directly into section background) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end items-center"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] group">
                {/* Radial Golden & Violet Ambient Glow */}
                <div
                  className="absolute inset-0 rounded-full opacity-60 blur-2xl pointer-events-none animate-pulse"
                  style={{ background: 'radial-gradient(circle, rgba(200,163,74,0.45) 0%, rgba(100,40,127,0.25) 60%, transparent 80%)' }}
                />

                <Image
                  src="/images/organ-img.webp"
                  alt="Organ Meditation Graphic"
                  fill
                  className="object-contain filter drop-shadow-[0_10px_35px_rgba(200,163,74,0.5)] transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Curved Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-16 text-[#FDFBF7]"
            fill="currentColor"
          >
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </header>

      {/* MAIN ORGAN MEDITATION SECTION */}
      <section id="organ-meditation" className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* SECTION TITLE */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-5 py-2 rounded-full font-bold royal-gold-badge text-xs uppercase tracking-widest">
              DAILY SCHOOL PRACTICE ACROSS ACHARIYA SCHOOLS
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#64287F] leading-tight">
              12 Noon <span className="text-[#8C5D00] italic font-serif">Golden Smile</span> Meditation
            </h2>

            <p className="text-base sm:text-lg text-[#352043] font-serif max-w-2xl mx-auto font-normal">
              A Daily Practice for Inner Peace, Emotional Well-being &amp; Holistic Development
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="h-[1px] w-14 bg-[#8C5D00]" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#8C5D00">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
              </svg>
              <div className="h-[1px] w-14 bg-[#8C5D00]" />
            </div>
          </div>

          {/* OVERVIEW & HOW IT IS PERFORMED CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            
            {/* Overview Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border-l-4 border-[#8C5D00] space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#64287F]/10 flex items-center justify-center text-[#64287F] shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#64287F] tracking-wide leading-snug">
                  THE DAILY PRACTICE &amp;<br />COLLECTIVE CONSCIOUSNESS
                </h3>
              </div>

              <p className="text-[#352043] text-base leading-relaxed font-normal">
                <strong>At Achariya Schools</strong>, every day at <strong>12:00 Noon</strong>, all students, teachers, and staff come together for a few minutes of <strong>Golden Smile Meditation</strong>. This is more than a meditation session; it&apos;s a daily practice that <strong>develops physical health</strong>, emotional balance, mental clarity, spiritual <strong>intelligence</strong>, and global consciousness.
              </p>

              <div className="h-[1px] w-24 bg-[#8C5D00]/40" />

              <p className="text-[#352043] text-base leading-relaxed font-normal">
                When thousands of students meditate together with a common intention of <strong>Oneness and Global Peace</strong>, they cultivate compassion, gratitude, discipline, and emotional resilience.
              </p>
            </motion.div>

            {/* How It Is Performed Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-8 sm:p-10 text-white bg-gradient-to-br from-[#64287F] to-[#401952] relative overflow-hidden shadow-xl"
            >
              {/* BG Silhouette Watermark */}
              <div className="absolute right-0 bottom-0 opacity-15 w-60 h-60 pointer-events-none">
                <Image
                  src="/images/organ-img.webp"
                  alt="Silhouette"
                  width={240}
                  height={240}
                  className="w-full h-full object-contain rounded-2xl opacity-20 filter drop-shadow-md"
                />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-white/20">
                  <div className="w-12 h-12 rounded-full bg-[#C8A34A]/20 flex items-center justify-center text-[#C8A34A] shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-wide">
                    HOW IT IS PERFORMED
                  </h3>
                </div>

                <ul className="space-y-4 text-sm sm:text-base text-white/90">
                  {[
                    'Sit comfortably with the spine upright and straight.',
                    'Join the fingers in the prescribed sacred mudra.',
                    'Gently close the eyes and hold a natural smile on the face.',
                    'Observe the breath with deep, conscious relaxation.',
                    'Visualize a specific healing light entering a particular organ.',
                  ].map((stepText, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full border border-[#C8A34A] text-[#C8A34A] bg-[#C8A34A]/10 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </div>
                      <div className="pt-1">{stepText}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>

          {/* WEEKLY SCHEDULE HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3 pt-6">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-10 bg-[#8C5D00]/50" />
              <span className="text-[#8C5D00] font-bold text-xs uppercase tracking-widest">
                WEEKLY SCHEDULE
              </span>
              <div className="h-[1px] w-10 bg-[#8C5D00]/50" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#64287F]">
              DAILY ORGAN MEDITATION SCHEDULE
            </h2>

            <p className="text-[#352043] font-serif italic text-base sm:text-lg font-normal">
              Each day focuses on one organ, one element, and one positive emotional quality.
            </p>
          </div>

          {/* CUSTOM ORGAN TABS */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {[
              { id: 'mon', day: 'MON', name: 'LUNGS', img: '/images/organ-lungs.webp' },
              { id: 'tue', day: 'TUE', name: 'HEART', img: '/images/organ-heart.webp' },
              { id: 'wed', day: 'WED', name: 'SPLEEN', img: '/images/organ-spleen.webp' },
              { id: 'thu', day: 'THU', name: 'LIVER', img: '/images/organ-liver.webp' },
              { id: 'fri', day: 'FRI', name: 'KIDNEYS', img: '/images/organ-kidneys.webp' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-3 px-6 py-2.5 rounded-full border transition-all cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-[#64287F] border-[#64287F] text-white shadow-lg scale-105'
                      : 'bg-white border-black/5 text-[#64287F] hover:bg-white/80'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center p-1.5 transition-colors ${
                      isActive ? 'bg-[#C8A34A]/25' : 'bg-[#C8A34A]/10'
                    }`}
                  >
                    <Image
                      src={tab.img}
                      alt={tab.name}
                      width={30}
                      height={30}
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  </div>
                  <div className="text-left leading-tight">
                    <div className={`text-[10px] font-extrabold tracking-wider ${isActive ? 'text-white/70' : 'text-slate-400'}`}>
                      {tab.day}
                    </div>
                    <div className={`font-heading font-bold text-sm tracking-wide ${isActive ? 'text-white' : 'text-[#64287F]'}`}>
                      {tab.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ACTIVE ORGAN PANEL */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-black/5 mb-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Glow Circle & Element Tag */}
                <div className="lg:col-span-5 text-center space-y-6">
                  <div
                    className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-full flex items-center justify-center p-6 shadow-2xl"
                    style={{ background: currentOrgan.glowGradient }}
                  >
                    {/* Inner Glass Glow Circle */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 shadow-[inset_0_0_40px_rgba(255,255,255,0.5)] pointer-events-none" />

                    <Image
                      src={currentOrgan.img}
                      alt={currentOrgan.title}
                      width={180}
                      height={180}
                      className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]"
                    />
                  </div>

                  <div>
                    <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 border border-slate-200 text-slate-700">
                      ELEMENT: {currentOrgan.element} <span className="ml-1 text-[#8C5D00]">✦</span>
                    </span>
                  </div>
                </div>

                {/* Right Organ Info */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-slate-100 text-slate-800">
                      {currentOrgan.day}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#64287F]">
                      {currentOrgan.title}
                    </h3>
                  </div>

                  <p className="font-bold text-[#352043] text-base">
                    Theme: {currentOrgan.theme}
                  </p>

                  <p className="text-[#352043] text-base leading-relaxed font-normal">
                    {currentOrgan.desc}
                  </p>

                  {/* Release & Develop Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    
                    {/* Release Card */}
                    <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/10 space-y-2">
                      <p className="text-xs font-extrabold text-red-500 tracking-wider uppercase">
                        RELEASE
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {currentOrgan.release.map((item, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Develop Card */}
                    <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-2">
                      <p className="text-xs font-extrabold text-emerald-600 tracking-wider uppercase">
                        DEVELOP
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {currentOrgan.develop.map((item, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Affirmation Quote Box */}
                  <div className="p-6 rounded-2xl bg-[#C8A34A]/10 border-l-4 border-[#8C5D00]">
                    <p className="font-serif italic text-[#352043] text-base sm:text-lg leading-relaxed font-normal">
                      {currentOrgan.quote}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 font-medium flex items-center gap-2 pt-1">
                    <span className="text-[#8C5D00]">✦</span> {currentOrgan.note}
                  </p>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* SECTION 4: COMPLETE SCHEDULE AT A GLANCE (5-COLUMN SUMMARY GRID) */}
          <div className="mb-24 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[#8C5D00] font-bold text-xs uppercase tracking-widest">
                WEEKLY AT A GLANCE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#64287F]">
                COMPLETE SCHEDULE AT A GLANCE
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {atAGlanceData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col justify-between"
                >
                  {/* Card Header */}
                  <div className={`${item.color} text-white p-4 text-center space-y-1`}>
                    <div className="text-xs font-extrabold uppercase tracking-wider opacity-90">
                      {item.day}
                    </div>
                    <div className="font-heading text-base font-bold">
                      {item.organ}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 space-y-3 text-center flex-grow text-xs">
                    <div className="py-1 px-2 rounded bg-slate-100 text-slate-800 font-bold inline-block">
                      {item.light}
                    </div>

                    <p className="text-slate-800 font-serif italic font-medium">
                      {item.theme}
                    </p>

                    <div className="space-y-1 pt-2 border-t border-slate-100 text-left">
                      <div className="font-extrabold text-red-500 uppercase text-[10px]">
                        RELEASE:
                      </div>
                      <div className="text-slate-800 font-medium">{item.release}</div>
                    </div>

                    <div className="space-y-1 pt-1 text-left">
                      <div className="font-extrabold text-emerald-600 uppercase text-[10px]">
                        DEVELOP:
                      </div>
                      <div className="text-slate-800 font-medium">{item.develop}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SECTION 5: TRANSFORMATIVE IMPACT WITH BG-6.WEBP */}
          <section
            className="rounded-3xl p-8 sm:p-14 text-white mb-24 relative overflow-hidden shadow-2xl bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(100, 40, 127, 0.94) 0%, rgba(64, 25, 82, 0.98) 100%), url('/images/bg-6.webp')",
            }}
          >
            {/* Background Lines */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <svg width="400" height="400" viewBox="0 0 100 100" fill="none" stroke="#DFC47A" strokeWidth="0.5">
                <circle cx="50" cy="50" r="45" />
                <polygon points="50,5 93,75 7,75" />
                <polygon points="50,95 93,25 7,25" />
              </svg>
            </div>

            <div className="relative z-10 space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-[#DFC47A] font-bold text-xs uppercase tracking-widest">
                  BENEFITS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                  TRANSFORMATIVE IMPACT
                </h2>
                <p className="text-[#E9DED3] text-sm sm:text-base font-light">
                  Empowering students with holistic physical, mental, and spiritual strength through daily practice.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefitsData.map((benefit, idx) => {
                  const IconComp = benefit.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[#DFC47A] transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#DFC47A]/20 flex items-center justify-center text-[#DFC47A]">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-white tracking-wide">
                        {benefit.title}
                      </h3>
                      <p className="text-[#E9DED3] text-xs sm:text-sm font-light leading-relaxed">
                        {benefit.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SECTION 6: THE ACHARIYA VISION (NURTURING SPIRITUAL & GLOBAL LEADERS) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[36px] bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EF] to-[#F8F2E8] p-8 sm:p-12 shadow-xl border-2 border-[#DFC47A]/60 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Waiting for Image to be Uploaded Spotlight Frame */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#C8A34A] via-[#DFC47A] to-[#8C5D00] opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-xl pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#DFC47A]/70 shadow-2xl bg-white/95 backdrop-blur-md p-4">
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EF] to-[#F8F2E8] aspect-[4/5] flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-[#DFC47A]/70">
                    
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#C8A34A_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

                    {/* Pulsing Icon Badge */}
                    <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 backdrop-blur-sm border-2 border-[#C8A34A]/60 shadow-lg flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C8A34A]/20 to-[#8C5D00]/20 animate-pulse pointer-events-none" />
                      <UploadCloud className="w-9 h-9 sm:w-10 sm:h-10 text-[#8C5D00]" />
                    </div>

                    {/* Text Details */}
                    <div className="relative z-10 space-y-2 max-w-[240px]">
                      <span className="inline-block px-3.5 py-1 rounded-full bg-[#8C5D00]/15 text-[#8C5D00] text-[11px] font-extrabold uppercase tracking-widest border border-[#8C5D00]/30 shadow-xs">
                        Pending Upload
                      </span>
                      <h4 className="font-heading text-base sm:text-lg font-bold text-[#352043] leading-snug">
                        Waiting for Image to be Uploaded
                      </h4>
                      <p className="text-xs text-[#5E5865] font-light">
                        Achariya vision photograph will be updated here
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-block px-4 py-1 rounded-full bg-[#8C5D00]/10 text-[#8C5D00] text-xs font-bold uppercase tracking-widest border border-[#8C5D00]/20">
                    THE ACHARIYA VISION
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#64287F] mt-2 leading-tight">
                    Nurturing Spiritual &amp; Global <span className="text-[#8C5D00] italic font-serif font-normal">Leaders</span>
                  </h2>
                </div>

                <p className="text-[#352043] text-sm sm:text-base leading-relaxed font-normal">
                  The daily 12 Noon Golden Smile Meditation reflects Achariya&apos;s commitment to nurturing not only academic excellence but also spiritual intelligence, emotional wellness, and character development. By dedicating a few minutes each day to mindful breathing, positive visualization, and inner reflection, students learn to become peaceful individuals, responsible citizens, and compassionate global leaders.
                </p>

                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#64287F] to-[#401952] text-[#FCE8A6] text-xs font-bold tracking-wide shadow-md border border-[#DFC47A]/40">
                  <Sparkles className="w-4 h-4 text-[#DFC47A]" />
                  <span>Our Shared Intention ✦ Together Every Noon</span>
                </div>

                <div className="p-6 rounded-2xl bg-white border-l-4 border-[#8C5D00] shadow-sm relative">
                  <Quote className="w-6 h-6 text-[#8C5D00] absolute top-4 left-4 opacity-30" />
                  <p className="font-serif italic text-[#352043] text-lg sm:text-xl leading-relaxed pl-6 font-semibold">
                    &ldquo;May the whole world live in peace, harmony, and oneness.&rdquo;
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
