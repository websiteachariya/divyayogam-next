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
  Sun,
  Calendar,
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
      color: 'bg-[#352043]',
      light: 'White Light',
      theme: 'Theme: Courage & New Beginnings',
      release: 'Sadness, Depression',
      develop: 'Courage, Confidence',
    },
    {
      day: 'TUESDAY',
      organ: 'Heart • Fire',
      color: 'bg-[#7F1D1D]',
      light: 'Red Light',
      theme: 'Theme: Love & Happiness',
      release: 'Hatred, Cruelty',
      develop: 'Love, Joy',
    },
    {
      day: 'WEDNESDAY',
      organ: 'Spleen • Earth',
      color: 'bg-[#78350F]',
      light: 'Yellow Light',
      theme: 'Theme: Trust & Stability',
      release: 'Worry, Anxiety',
      develop: 'Forgiveness, Peace',
    },
    {
      day: 'THURSDAY',
      organ: 'Liver • Wood',
      color: 'bg-[#14532D]',
      light: 'Green Light',
      theme: 'Theme: Kindness & Patience',
      release: 'Anger, Jealousy',
      develop: 'Kindness, Patience',
    },
    {
      day: 'FRIDAY',
      organ: 'Kidneys • Water',
      color: 'bg-[#1E3A8A]',
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
    <div className="bg-transparent font-body min-h-screen relative overflow-x-hidden">
      
      {/* Fixed Background Image Overlay (con-6.webp Sandal Texture matching Contact & Wellness Page) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      {/* HERO SECTION */}
      <header
        className="relative bg-gradient-to-br from-[#401952] via-[#64287F] to-[#2E0F3D] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-20 sm:pb-24 overflow-hidden text-white bg-cover bg-center"
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

        {/* Curved Bottom Divider matching Wellness page */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#FAF5EF]" fill="currentColor">
            <path d="M0,0 C300,50 900,50 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </header>

      {/* MAIN ORGAN MEDITATION SECTION */}
      <section id="organ-meditation" className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* SECTION TITLE */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-extrabold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
              <span>DAILY SCHOOL PRACTICE ACROSS ACHARIYA SCHOOLS</span>
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#352043] leading-tight">
              12 Noon <span className="text-[#8C5D00] italic font-serif font-normal">Golden Smile</span> Meditation
            </h2>

            <p className="text-base sm:text-lg text-[#352043] font-serif italic max-w-2xl mx-auto font-semibold">
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
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-[#E9DED3] border-l-8 border-l-[#8C5D00] space-y-6 relative overflow-hidden z-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#352043] text-[#DFC47A] flex items-center justify-center shrink-0 shadow-md">
                  <Sun className="w-6 h-6 text-[#DFC47A]" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#352043] tracking-wide leading-snug">
                  THE DAILY PRACTICE &amp;<br />COLLECTIVE CONSCIOUSNESS
                </h3>
              </div>

              <p className="text-[#352043] text-base leading-relaxed font-bold">
                <strong className="text-[#8C5D00]">At Achariya Schools</strong>, every day at <strong>12:00 Noon</strong>, all students, teachers, and staff come together for a few minutes of <strong>Golden Smile Meditation</strong>. This is more than a meditation session; it&apos;s a daily practice that <strong>develops physical health</strong>, emotional balance, mental clarity, spiritual <strong>intelligence</strong>, and global consciousness.
              </p>

              <div className="h-[1px] w-24 bg-[#8C5D00]/40" />

              <p className="text-[#352043] text-base leading-relaxed font-bold">
                When thousands of students meditate together with a common intention of <strong>Oneness and Global Peace</strong>, they cultivate compassion, gratitude, discipline, and emotional resilience.
              </p>
            </motion.div>

            {/* How It Is Performed Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-8 sm:p-10 text-white bg-gradient-to-br from-[#351A4A] via-[#47206A] to-[#200D2E] border-2 border-[#DFC47A] relative overflow-hidden shadow-2xl space-y-6 z-10"
            >
              <div className="flex items-center gap-4 pb-4 border-b border-white/20">
                <div className="w-12 h-12 rounded-full bg-[#C8A34A] text-[#352043] flex items-center justify-center shrink-0 shadow-md font-extrabold">
                  <Sparkles className="w-6 h-6 text-[#352043]" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white tracking-wide">
                  HOW IT IS PERFORMED
                </h3>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-[#F8F2E8] font-semibold">
                {[
                  'Sit comfortably with the spine upright and straight.',
                  'Join the fingers in the prescribed sacred mudra.',
                  'Gently close the eyes and hold a natural smile on the face.',
                  'Observe the breath with deep, conscious relaxation.',
                  'Visualize a specific healing light entering a particular organ.',
                ].map((stepText, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full border-2 border-[#DFC47A] text-[#DFC47A] bg-[#C8A34A]/20 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="leading-snug">{stepText}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* WEEKLY SCHEDULE HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3 pt-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-extrabold uppercase tracking-widest shadow-md">
              <Calendar className="w-3.5 h-3.5 text-[#DFC47A]" />
              <span>WEEKLY SCHEDULE</span>
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#352043]">
              DAILY ORGAN MEDITATION SCHEDULE
            </h2>

            <p className="text-[#352043] font-serif italic text-base sm:text-lg font-bold">
              Each day focuses on one organ, one element, and one positive emotional quality.
            </p>
          </div>

          {/* CUSTOM ORGAN TABS */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 relative z-20">
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
                  className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all cursor-pointer shadow-md ${
                    isActive
                      ? 'bg-[#352043] border-[#DFC47A] text-[#DFC47A] shadow-2xl scale-105'
                      : 'bg-white border-2 border-[#352043]/30 text-[#352043] font-extrabold hover:border-[#8C5D00] shadow-sm'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center p-1.5 transition-colors ${
                      isActive ? 'bg-[#C8A34A]/30' : 'bg-[#352043]/10'
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
                    <div className={`text-[10px] font-extrabold tracking-wider ${isActive ? 'text-[#DFC47A]' : 'text-[#8C5D00]'}`}>
                      {tab.day}
                    </div>
                    <div className={`font-heading font-extrabold text-sm tracking-wide ${isActive ? 'text-white' : 'text-[#352043]'}`}>
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
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-[#E9DED3] mb-24 relative z-10"
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
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 shadow-md">
                      ELEMENT: {currentOrgan.element} <span className="ml-1 text-[#DFC47A]">✦</span>
                    </span>
                  </div>
                </div>

                {/* Right Organ Info */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase bg-[#352043] text-[#DFC47A] shadow-sm">
                      {currentOrgan.day}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#352043]">
                      {currentOrgan.title}
                    </h3>
                  </div>

                  <p className="font-extrabold text-[#8C5D00] text-lg sm:text-xl">
                    Theme: {currentOrgan.theme}
                  </p>

                  <p className="text-[#352043] text-base sm:text-lg leading-relaxed font-bold">
                    {currentOrgan.desc}
                  </p>

                  {/* Release & Develop Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    
                    {/* Release Card */}
                    <div className="p-5 rounded-2xl bg-red-100/90 border-2 border-red-300 space-y-2 shadow-sm">
                      <p className="text-xs font-extrabold text-red-900 tracking-wider uppercase">
                        RELEASE
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {currentOrgan.release.map((item, idx) => (
                          <span key={idx} className="px-3.5 py-1 rounded-full bg-red-700 text-white text-xs font-extrabold shadow-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Develop Card */}
                    <div className="p-5 rounded-2xl bg-emerald-100/90 border-2 border-emerald-300 space-y-2 shadow-sm">
                      <p className="text-xs font-extrabold text-emerald-900 tracking-wider uppercase">
                        DEVELOP
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {currentOrgan.develop.map((item, idx) => (
                          <span key={idx} className="px-3.5 py-1 rounded-full bg-emerald-800 text-white text-xs font-extrabold shadow-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Affirmation Quote Box */}
                  <div className="p-6 rounded-2xl bg-white border-2 border-[#E9DED3] border-l-8 border-l-[#8C5D00] shadow-md">
                    <p className="font-serif italic text-[#352043] text-base sm:text-lg leading-relaxed font-extrabold">
                      {currentOrgan.quote}
                    </p>
                  </div>

                  <p className="text-xs text-[#352043] font-bold flex items-center gap-2 pt-1">
                    <span className="text-[#8C5D00] text-sm">✦</span> {currentOrgan.note}
                  </p>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* SECTION 4: COMPLETE SCHEDULE AT A GLANCE (5-COLUMN SUMMARY GRID) */}
          <div className="mb-24 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-extrabold uppercase tracking-widest shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
                <span>WEEKLY AT A GLANCE</span>
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#352043]">
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
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-[#E9DED3] flex flex-col justify-between"
                >
                  {/* Card Header */}
                  <div className={`${item.color} text-white p-4 text-center space-y-1 shadow-xs`}>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#DFC47A]">
                      {item.day}
                    </div>
                    <div className="font-heading text-base font-extrabold text-white">
                      {item.organ}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 space-y-3 text-center flex-grow text-xs bg-white">
                    <div className="py-1 px-3.5 rounded-full bg-[#352043] text-[#DFC47A] font-extrabold text-[11px] inline-block shadow-sm">
                      {item.light}
                    </div>

                    <p className="text-[#352043] font-serif italic font-extrabold text-xs leading-snug">
                      {item.theme}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-[#E9DED3] text-left">
                      <div className="font-extrabold text-red-700 uppercase text-[10px] tracking-wider">
                        RELEASE:
                      </div>
                      <div className="text-[#352043] font-extrabold text-xs">{item.release}</div>
                    </div>

                    <div className="space-y-1.5 pt-1 text-left">
                      <div className="font-extrabold text-emerald-800 uppercase text-[10px] tracking-wider">
                        DEVELOP:
                      </div>
                      <div className="text-[#352043] font-extrabold text-xs">{item.develop}</div>
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
