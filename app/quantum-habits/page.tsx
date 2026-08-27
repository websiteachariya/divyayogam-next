'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  Star,
  ArrowRight,
  Sun,
  Flame,
  Wind,
  Heart,
  BookOpen,
  Sparkles,
  Zap,
  Users,
  Globe,
  Award,
  GraduationCap,
  Feather,
  Activity,
  Eye,
  Target,
  Compass,
  Crown,
  HeartHandshake,
} from 'lucide-react';

export default function QuantumHabitsPage() {
  const [activeWisdomTab, setActiveWisdomTab] = useState<'koshas' | 'chakras'>('koshas');

  const pillarsTop = [
    {
      step: '01',
      title: 'MEDITATION',
      subtitle: 'Daily stillness connects you with your inner self and higher consciousness.',
      icon: Sun,
      color: 'text-amber-500 bg-amber-50 border-amber-200',
      checks: ['Reduces stress & anxiety', 'Improves focus & clarity', 'Enhances self-awareness'],
    },
    {
      step: '02',
      title: 'YOGA',
      subtitle: 'Unite your body, mind and breath through sacred movement.',
      icon: Flame,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      checks: ['Improves flexibility & health', 'Balances hormones', 'Boosts energy & vitality'],
    },
    {
      step: '03',
      title: 'BREATHWORK',
      subtitle: 'Conscious breathing transforms your energy and emotions.',
      icon: Wind,
      color: 'text-blue-500 bg-blue-50 border-blue-200',
      checks: ['Calms the nervous system', 'Increases lung capacity', 'Enhances emotional balance'],
    },
    {
      step: '04',
      title: 'AFFIRMATIONS',
      subtitle: 'Positive words create positive vibration and powerful transformation.',
      icon: Sparkles,
      color: 'text-pink-500 bg-pink-50 border-pink-200',
      checks: ['Reprograms subconscious mind', 'Builds self-confidence', 'Attracts positivity'],
    },
  ];

  const pillarsBottom = [
    {
      step: '05',
      title: 'GRATITUDE',
      subtitle: 'Gratitude shifts your focus from lack to abundance.',
      icon: Heart,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      checks: ['Improves mental health', 'Strengthens relationships', 'Attracts more blessings'],
    },
    {
      step: '06',
      title: 'SEVA (SERVICE)',
      subtitle: 'Selfless service purifies the ego and expands your heart.',
      icon: Zap,
      color: 'text-orange-500 bg-orange-50 border-orange-200',
      checks: ['Creates compassion', 'Builds humility', 'Connects you to humanity'],
    },
    {
      step: '07',
      title: 'SELF-REFLECTION',
      subtitle: 'Daily reflection helps you learn, grow and evolve consciously.',
      icon: BookOpen,
      color: 'text-teal-600 bg-teal-50 border-teal-200',
      checks: ['Increases self-awareness', 'Helps correct mistakes', 'Supports personal growth'],
    },
  ];

  const benefits = [
    { title: 'Inner Peace', icon: Feather },
    { title: 'Emotional Balance', icon: Heart },
    { title: 'Better Health', icon: Activity },
    { title: 'Mental Clarity', icon: Eye },
    { title: 'High Energy', icon: Zap },
    { title: 'Strong Relationships', icon: Users },
    { title: 'Self-Discipline', icon: Target },
    { title: 'Confidence', icon: Award },
    { title: 'Purpose & Direction', icon: Compass },
    { title: 'Spiritual Growth', icon: Crown },
    { title: 'Compassion', icon: HeartHandshake },
    { title: 'Global Consciousness', icon: Globe },
  ];

  const scheduleDays = [
    {
      day: 'MON',
      habit: 'Meditation',
      tagline: 'Inner Stillness & Awareness',
      color: 'bg-[#64287F]',
    },
    {
      day: 'TUE',
      habit: 'Yoga',
      tagline: 'Strength & Flexibility',
      color: 'bg-[#EA580C]',
    },
    {
      day: 'WED',
      habit: 'Breathwork',
      tagline: 'Energy & Balance',
      color: 'bg-[#CA8A04]',
    },
    {
      day: 'THU',
      habit: 'Affirmations',
      tagline: 'Positive Mindset & Beliefs',
      color: 'bg-[#16A34A]',
    },
    {
      day: 'FRI',
      habit: 'Gratitude',
      tagline: 'Abundance & Joy',
      color: 'bg-[#2563EB]',
    },
    {
      day: 'SAT',
      habit: 'Seva (Service)',
      tagline: 'Compassion & Contribution',
      color: 'bg-[#4F46E5]',
    },
    {
      day: 'SUN',
      habit: 'Self-Reflection',
      tagline: 'Growth & Awakening',
      color: 'bg-[#9333EA]',
    },
  ];

  const koshas = [
    { step: '01', name: 'ANNAMAYA KOSHA', type: 'Physical Body', desc: 'The Sheath of Nourishment. Sustained by wholesome food, movement, and rest.' },
    { step: '02', name: 'PRANAMAYA KOSHA', type: 'Vital Energy Body', desc: 'The Sheath of Life Force. Balances breath, prana, and cellular vitality.' },
    { step: '03', name: 'MANOMAYA KOSHA', type: 'Mental Body', desc: 'The Sheath of Mind. Governs thoughts, emotions, and mental clarity.' },
    { step: '04', name: 'VIJNANAMAYA KOSHA', type: 'Wisdom Body', desc: 'The Sheath of Higher Intelligence. Realm of intuition and spiritual insight.' },
    { step: '05', name: 'ANANDAMAYA KOSHA', type: 'Bliss Body', desc: 'The Sheath of Divine Bliss. Innermost state of pure joy and oneness.' },
  ];

  const chakras = [
    { name: 'MULADHARA', english: 'Root Chakra', desc: 'Stability, Security & Survival', color: 'bg-red-500/10 text-red-700 border-red-200' },
    { name: 'SWADHISTHANA', english: 'Sacral Chakra', desc: 'Creativity, Pleasure & Emotions', color: 'bg-orange-500/10 text-orange-700 border-orange-200' },
    { name: 'MANIPURA', english: 'Solar Plexus', desc: 'Power, Confidence & Purpose', color: 'bg-amber-500/10 text-amber-700 border-amber-200' },
    { name: 'ANAHATA', english: 'Heart Chakra', desc: 'Love, Compassion & Healing', color: 'bg-emerald-500/10 text-emerald-700 border-emerald-200' },
    { name: 'VISHUDDHA', english: 'Throat Chakra', desc: 'Expression, Truth & Communication', color: 'bg-sky-500/10 text-sky-700 border-sky-200' },
    { name: 'AJNA', english: 'Third Eye Chakra', desc: 'Intuition, Wisdom & Insight', color: 'bg-indigo-500/10 text-indigo-700 border-indigo-200' },
    { name: 'SAHASRARA', english: 'Crown Chakra', desc: 'Spirituality, Unity & Enlightenment', color: 'bg-purple-500/10 text-purple-700 border-purple-200' },
  ];

  const testimonials = [
    {
      quote: '"Quantum Habits changed my life completely. I am calmer, happier and more focused than ever before."',
      name: 'Ananya R.',
      role: 'Student',
      avatar: '/images/01.webp',
    },
    {
      quote: '"These daily practices brought more peace, health and positivity into my life and family."',
      name: 'Mahesh S.',
      role: 'Teacher',
      avatar: '/images/02.webp',
    },
    {
      quote: '"I feel more connected to myself and the universe. This is truly life changing."',
      name: 'Meera K.',
      role: 'Professional',
      avatar: '/images/03.webp',
    },
  ];

  const stats = [
    { val: '25,000+', label: 'Active Practitioners', icon: Users },
    { val: '500+', label: 'Schools & Institutions', icon: GraduationCap },
    { val: '12', label: 'Countries Reached', icon: Globe },
    { val: '1M+', label: 'Lives Positively Impacted', icon: Heart },
    { val: '10+', label: 'Years of Transformation', icon: Award },
  ];

  return (
    <div className="bg-transparent font-body min-h-screen text-[#475569] relative">

      {/* HERO SECTION WITH QH-3.PNG BACKGROUND & GRAPHIC */}
      <header
        className="relative bg-gradient-to-br from-[#401952] via-[#64287F] to-[#2E0F3D] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-20 sm:pb-24 overflow-hidden text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(64, 25, 82, 0.95) 0%, rgba(100, 40, 127, 0.96) 60%, rgba(46, 15, 61, 0.98) 100%), url('/images/qh-3.webp')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 text-center lg:text-left">
            
            {/* Hero Left Title Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#C8A34A]/20 border border-[#C8A34A]/40 text-[#C8A34A] text-xs font-bold uppercase tracking-widest">
                SCIENTIFIC SPIRITUAL PRACTICES
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-none">
                <span className="text-white">QUANTUM </span>
                <span className="text-[#C8A34A] filter drop-shadow-[0_4px_20px_rgba(212,175,54,0.4)]">HABITS</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/95 font-serif italic max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Transform Your Daily Life into Higher Consciousness
              </p>
            </motion.div>

            {/* Hero Right Featured Image: qh-1.png */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative text-center flex justify-center"
            >
              <div className="relative inline-flex items-center justify-center group">
                {/* Glowing Golden Aura Disk */}
                <div
                  className="absolute w-[360px] h-[360px] rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(212,175,54,0.5) 0%, transparent 70%)',
                    filter: 'blur(25px)',
                  }}
                />

                <div className="relative rounded-3xl overflow-hidden border-2 border-[#C8A34A]/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-black/40">
                  <Image
                    src="/images/qh-3.webp"
                    alt="Quantum Habits Radiant Meditating Lotus Silhouette"
                    width={450}
                    height={450}
                    className="w-full h-auto max-h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Curved Bottom Arch Divider */}
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

      {/* SECTION 2: THE 7 PILLARS OF DIVINE LIVING */}
      <section className="py-8 sm:py-12 lg:py-14 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-5 py-2 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-widest">
              A DAILY PRACTICE FOR TRANSFORMATION
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#64287F] leading-tight">
              THE 7 PILLARS OF DIVINE LIVING
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-serif max-w-2xl mx-auto">
              Simple yet powerful daily habits to align your body, mind, emotions and energy with the highest version of yourself. Start small. Stay consistent. Transform completely.
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="h-[1px] w-14 bg-[#C8A34A]" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#C8A34A">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
              </svg>
              <div className="h-[1px] w-14 bg-[#C8A34A]" />
            </div>
          </div>

          {/* Top 4 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillarsTop.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-xl hover:border-[#C8A34A] transition-all group text-center"
                >
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center border ${pillar.color} shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A34A]">
                      {pillar.step} · {pillar.title}
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                      {pillar.subtitle}
                    </p>

                    <div className="pt-2 space-y-2 text-left border-t border-slate-100">
                      {pillar.checks.map((chk, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-[#C8A34A] shrink-0" />
                          <span>{chk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom 3 Pillars (Centered) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pillarsBottom.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-xl hover:border-[#C8A34A] transition-all group text-center"
                >
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center border ${pillar.color} shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A34A]">
                      {pillar.step} · {pillar.title}
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                      {pillar.subtitle}
                    </p>

                    <div className="pt-2 space-y-2 text-left border-t border-slate-100">
                      {pillar.checks.map((chk, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-[#C8A34A] shrink-0" />
                          <span>{chk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DEEP-DIVE WISDOM SECTION: PANCHAKOSHA & CHAKRAS */}
      <section className="py-8 sm:py-12 lg:py-14 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-5 py-2 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-widest">
              DEEP YOGIC WISDOM
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#64287F]">
              Panchakosha &amp; Seven Chakras
            </h3>

            {/* Tab Switcher */}
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setActiveWisdomTab('koshas')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeWisdomTab === 'koshas'
                    ? 'bg-[#64287F] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                5 Panchakosha Sheaths
              </button>
              <button
                onClick={() => setActiveWisdomTab('chakras')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeWisdomTab === 'chakras'
                    ? 'bg-[#64287F] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                7 Energy Chakras
              </button>
            </div>
          </div>

          {activeWisdomTab === 'koshas' ? (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {koshas.map((k, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#FDFBF7] border border-slate-200 space-y-2 text-center">
                  <span className="text-[10px] font-extrabold text-[#C8A34A] tracking-widest uppercase">
                    Step {k.step}
                  </span>
                  <h4 className="font-heading font-bold text-sm text-[#64287F]">
                    {k.name}
                  </h4>
                  <div className="text-[11px] font-semibold text-slate-500 font-serif italic">
                    {k.type}
                  </div>
                  <p className="text-xs text-slate-600 font-light leading-relaxed pt-1">
                    {k.desc}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
              {chakras.map((c, idx) => (
                <div key={idx} className={`p-4 rounded-2xl border text-center space-y-1 ${c.color}`}>
                  <div className="font-heading font-extrabold text-xs tracking-wider">
                    {c.name}
                  </div>
                  <div className="text-[10px] font-semibold opacity-90">
                    {c.english}
                  </div>
                  <p className="text-[11px] opacity-80 pt-1 leading-snug">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* SECTION 3: 12 TRANSFORMATIONAL BENEFITS WITH QH-1.PNG */}
      <section
        className="py-20 text-white relative overflow-hidden bg-cover bg-center w-full"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(100, 40, 127, 0.95) 0%, rgba(64, 25, 82, 0.98) 100%), url('/images/qh-1.webp')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-[#DFC47A] text-xs font-bold uppercase tracking-widest border border-white/20">
              HOLISTIC BENEFITS
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#C8A34A]">
              12 TRANSFORMATIONAL BENEFITS
            </h2>

            <p className="text-[#E9DED3] text-base sm:text-lg font-serif max-w-2xl mx-auto">
              Quantum Habits create a positive ripple effect in every area of your life.
            </p>
          </div>

          {/* 12 Benefits Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="bg-white/10 border border-white/15 rounded-2xl p-5 text-center space-y-3 hover:border-[#DFC47A] hover:bg-white/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#DFC47A]/20 border border-[#DFC47A]/40 mx-auto flex items-center justify-center text-[#DFC47A] group-hover:scale-110 transition-transform shadow-sm">
                    <IconComp className="w-5 h-5 text-[#DFC47A]" />
                  </div>
                  <div className="font-heading text-sm sm:text-base font-bold text-white leading-snug">
                    {b.title}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: 7 DAYS, 7 HABITS, 7 CHANCES TO TRANSFORM */}
      <section className="py-8 sm:py-12 lg:py-14 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-5 py-2 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-widest">
              DAILY PRACTICE SCHEDULE
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#64287F]">
              7 DAYS, 7 HABITS, 7 CHANCES TO TRANSFORM.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-serif max-w-2xl mx-auto">
              Follow this weekly flow to build powerful quantum habits.
            </p>
          </div>

          {/* 7 Day Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {scheduleDays.map((sd, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div className={`${sd.color} text-white p-4 text-center space-y-1`}>
                  <div className="text-xs font-extrabold tracking-widest uppercase">
                    {sd.day}
                  </div>
                  <div className="font-heading text-sm font-bold">
                    {sd.habit}
                  </div>
                </div>

                <div className="p-4 text-center space-y-2">
                  <p className="text-slate-600 text-xs font-serif italic leading-relaxed">
                    {sd.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: INSPIRING TRANSFORMATIONS */}
      <section className="py-8 sm:py-12 lg:py-14 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-5 py-2 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-widest">
              INSPIRING TRANSFORMATIONS
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#64287F]">
              THE EXPERIENCE OF OUR SEEKERS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FDFBF7] rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-6 flex flex-col justify-between hover:border-[#C8A34A] transition-all"
              >
                <p className="font-serif italic text-slate-700 text-base leading-relaxed">
                  {t.quote}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C8A34A] relative shrink-0">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                    <div className="flex items-center gap-1 text-amber-400 pt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: POWERING LIVES WORLDWIDE */}
      <section
        className="py-20 text-white relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(64, 25, 82, 0.96) 0%, rgba(43, 20, 62, 0.98) 100%), url('/images/bg-6.webp')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-[#DFC47A] text-xs font-bold uppercase tracking-widest border border-white/20">
              OUR GLOBAL IMPACT
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              POWERING <span className="text-[#C8A34A]">LIVES</span> WORLDWIDE
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {stats.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3"
                >
                  <IconComp className="w-6 h-6 text-[#DFC47A] mx-auto opacity-80" />
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#C8A34A]">
                    {s.val}
                  </div>
                  <div className="text-xs text-white/80 font-medium">
                    {s.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 7: BEGIN YOUR TRANSFORMATION TODAY WITH QH-2.PNG */}
      <section className="py-8 sm:py-12 lg:py-14 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-sm border border-black/5 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Image Graphic: qh-2.png */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#C8A34A]/40 shadow-2xl">
                  <Image
                    src="/images/qh-2.webp"
                    alt="Begin Transformation Sunrise Meditating Silhouette"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right CTA Text */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div>
                  <span className="text-[#B89324] font-bold text-xs uppercase tracking-widest">
                    YOUR NEXT STEP
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#64287F] mt-1">
                    BEGIN YOUR TRANSFORMATION TODAY
                  </h2>
                </div>

                <p className="text-slate-600 text-base sm:text-lg font-serif italic leading-relaxed">
                  Small daily habits. Infinite transformation. Your journey to a Higher Life starts now.
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full bg-[#64287F] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all duration-300 font-body"
                  >
                    <span>START YOUR JOURNEY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
