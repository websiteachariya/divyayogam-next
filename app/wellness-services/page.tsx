'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Heart,
  Sun,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Flower2,
  Compass,
  Feather,
  Activity,
  Flame,
  Smile,
  UserCheck,
  Leaf,
  BellRing,
  Brain,
  Users,
  Award,
  Clock,
  ChevronRight,
  Phone,
  Mail
} from 'lucide-react';

export default function WellnessServicesPage() {
  const purposes = [
    {
      title: 'Awaken Human Potential',
      desc: 'Every individual carries the potential to live with greater vitality, clarity and purpose.',
      icon: Flame,
    },
    {
      title: 'Nurture Holistic Well-being',
      desc: 'We encourage practices that support physical wellness, mental clarity, emotional balance and inner peace.',
      icon: Heart,
    },
    {
      title: 'Inspire Conscious Living',
      desc: 'Wellness becomes meaningful when it becomes a way of life — through mindful choices, disciplined routines, self-awareness and a deeper connection with ourselves and the world around us.',
      icon: Compass,
    },
  ];

  const approaches = [
    {
      title: 'Natural Lifestyle Practices',
      desc: 'Simple daily rituals designed to encourage disciplined and conscious living.',
      icon: Leaf,
    },
    {
      title: 'Mindfulness & Meditation',
      desc: 'Practices that cultivate awareness, calmness, concentration and inner reflection.',
      icon: Flower2,
    },
    {
      title: 'Sound & Breath Practices',
      desc: 'Guided practices using sound, vibration and conscious breathing as tools for relaxation and mental focus.',
      icon: BellRing,
    },
    {
      title: 'Healthy Living',
      desc: 'Encouraging nourishing food, regular routines, physical activity, adequate rest and a closer connection with nature.',
      icon: Sun,
    },
    {
      title: 'Inner Well-being',
      desc: 'Creating space for self-reflection, gratitude, emotional harmony and spiritual connection.',
      icon: Feather,
    },
  ];

  const services = [
    {
      badge: 'HOLISTIC PROGRAM',
      title: 'Holistic Wellness Programs',
      desc: 'Personalized wellness journeys designed around lifestyle, age and individual needs.',
      icon: Leaf,
    },
    {
      badge: 'MINDFUL MOVEMENT',
      title: 'Yoga & Mindful Movement',
      desc: 'Gentle practices supporting flexibility, body awareness, relaxation and a balanced lifestyle.',
      icon: Activity,
    },
    {
      badge: 'INNER STILLNESS',
      title: 'Meditation & Inner Stillness',
      desc: 'Guided meditation and self-reflection practices to cultivate calmness, awareness and inner peace.',
      icon: Flower2,
    },
    {
      badge: 'SOUND & VIBRATION',
      title: 'Sound & Vibrational Wellness',
      desc: 'Guided Saptha Mahakriya practices presented as part of the Divya Yogam wellness approach, combining sound, breath and focused awareness.',
      icon: BellRing,
    },
    {
      badge: 'NATURAL RITUALS',
      title: 'Natural Wellness Rituals',
      desc: 'Traditional lifestyle practices such as oil pulling and other natural routines incorporated into a structured wellness program.',
      icon: Sun,
    },
    {
      badge: 'EMOTIONAL BALANCE',
      title: 'Mind & Emotional Wellness',
      desc: 'Programs focused on stress management, concentration, emotional balance, positive habits and conscious living.',
      icon: Brain,
    },
    {
      badge: 'FAMILY HARMONY',
      title: 'Family & Community Wellness',
      desc: 'Wellness experiences that encourage healthy families, positive relationships, responsible living and harmonious communities.',
      icon: Users,
    },
  ];

  const stages = [
    {
      stage: 'Foundation',
      age: 'Ages 6–12',
      desc: 'Building healthy routines, awareness, positive habits and a joyful relationship with wellness.',
      badge: 'STAGE 1',
    },
    {
      stage: 'Empowerment',
      age: 'Ages 13–19',
      desc: 'Supporting concentration, self-discipline, stress management and emotional awareness.',
      badge: 'STAGE 2',
    },
    {
      stage: 'Excellence',
      age: 'Ages 20–35',
      desc: 'Encouraging vitality, purposeful living, physical well-being and career–life balance.',
      badge: 'STAGE 3',
    },
    {
      stage: 'Harmony',
      age: 'Ages 36–55',
      desc: 'Focusing on sustainable wellness, emotional resilience, family well-being and healthy lifestyle practices.',
      badge: 'STAGE 4',
    },
    {
      stage: 'Grace',
      age: 'Ages 56+',
      desc: 'Encouraging graceful ageing, gentle movement, inner peace, reflection and spiritual connection.',
      badge: 'STAGE 5',
    },
  ];

  const pillars = [
    {
      icon: Activity,
      name: 'BODY',
      desc: 'Nourish the body through healthy routines, movement, rest and natural wellness practices.',
    },
    {
      icon: Brain,
      name: 'MIND',
      desc: 'Develop concentration, awareness, clarity and resilience.',
    },
    {
      icon: Heart,
      name: 'EMOTIONS',
      desc: 'Create space for emotional balance, positivity and healthy relationships.',
    },
    {
      icon: Feather,
      name: 'SPIRIT',
      desc: 'Cultivate stillness, self-reflection, gratitude and a deeper connection with the inner self.',
    },
  ];

  const dailySteps = [
    { step: '1', title: 'Wake Early', desc: 'Rise before dawn to embrace sacred cosmic energy.' },
    { step: '2', title: 'Begin Natural Ritual', desc: 'Engage in traditional lifestyle practices like oil pulling & cleansing.' },
    { step: '3', title: 'Mindful Breath & Sound', desc: 'Practice sound, vibration & Saptha Mahakriya breathwork.' },
    { step: '4', title: 'Meditate & Reconnect', desc: 'Cultivate stillness, self-reflection & deep awareness.' },
    { step: '5', title: 'Nourish Consciously', desc: 'Choose wholesome, natural & balanced food.' },
    { step: '6', title: 'Live With Discipline', desc: 'Apply self-awareness to work, relationships & actions.' },
    { step: '7', title: 'Healthier, Happier Life', desc: 'Experience true harmony, vitality & divine fulfillment.' },
  ];

  return (
    <div className="bg-transparent font-body min-h-screen relative overflow-x-hidden">
      {/* Fixed Background Image Overlay (con-6.webp Sandal Texture matching Contact & Events Page) */}
        <div
          className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
          }}
        />

      {/* 1. HERO SECTION MATCHING EVENTS & CONTACT PAGE DESIGN */}
      <header className="relative bg-gradient-to-b from-[#351A4A] via-[#2A133B] to-[#200D2E] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 text-center text-white overflow-hidden font-body">
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
          <svg width="600" height="600" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.8">
            <circle cx="100" cy="100" r="95" strokeWidth="0.75" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="85" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="75" strokeWidth="0.75" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest shadow-md backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
            <span>DIVINE GRACE • HOLISTIC LIVING</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-md"
          >
            Divya Yogam <span className="text-[#DFC47A] italic font-serif font-normal">Wellness &amp; Healing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif italic text-lg sm:text-2xl text-[#F8F2E8] max-w-2xl mx-auto leading-relaxed"
          >
            Healing the Body. Calming the Mind. Awakening the Spirit.
          </motion.p>



          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#C8A34A] text-[#352043] font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg"
          >
            <Sun className="w-4 h-4 text-[#352043]" />
            <span>Healthy Body • Peaceful Mind • Divine Life</span>
          </motion.div>
        </div>

        {/* Curved Bottom Edge Divider matching section bg */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#FAF5EF]" fill="currentColor">
            <path d="M0,0 C300,50 900,50 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </header>

      {/* 2. OUR PURPOSE SECTION */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Compass className="w-3.5 h-3.5 text-[#DFC47A]" />
              MISSION &amp; FOUNDATION
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Our <span className="font-serif italic font-normal text-[#8C5D00]">Purpose</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-normal max-w-xl mx-auto">
              Guiding individuals toward conscious living, vitality, and inner tranquility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {purposes.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/95 rounded-3xl p-8 border-2 border-[#E9DED3] shadow-lg hover:shadow-2xl hover:border-[#8C5D00] hover:-translate-y-2 transition-all duration-300 space-y-4 text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
                    <IconComp className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-extrabold text-[#352043]">
                    {item.title}
                  </h3>
                  <p className="text-[#5E5865] text-xs sm:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. THE DIVYA YOGAM APPROACH */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent border-t border-[#DFC47A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Leaf className="w-3.5 h-3.5 text-[#DFC47A]" />
              HOLISTIC PHILOSOPHY
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              The Divya Yogam <span className="font-serif italic font-normal text-[#8C5D00]">Approach</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-normal max-w-2xl mx-auto">
              A Natural Path to Holistic Wellness — rooted in the understanding that everyday habits influence the way we experience life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white/95 rounded-3xl p-6 border-2 border-[#E9DED3] shadow-md hover:shadow-xl transition-all space-y-3 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF5EF] text-[#8C5D00] border border-[#DFC47A]/50 flex items-center justify-center shrink-0 shadow-xs">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading text-base font-extrabold text-[#352043]">
                      {item.title}
                    </h4>
                    <p className="text-[#5E5865] text-xs leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WELLNESS SERVICES GRID */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent border-t border-[#DFC47A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Flower2 className="w-3.5 h-3.5 text-[#DFC47A]" />
              OFFERINGS &amp; PROGRAMS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Wellness <span className="font-serif italic font-normal text-[#8C5D00]">Services</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-normal max-w-xl mx-auto">
              Comprehensive natural rituals, Saptha Mahakriya sound practices, and emotional well-being pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white/95 rounded-3xl p-7 border-2 border-[#E9DED3] shadow-lg hover:shadow-2xl hover:border-[#8C5D00] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EF] text-[#8C5D00] border border-[#DFC47A]/50 text-[10px] font-extrabold uppercase tracking-wider">
                        <IconComp className="w-3.5 h-3.5 text-[#8C5D00]" />
                        <span>{srv.badge}</span>
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#352043] text-[#DFC47A] flex items-center justify-center shadow-xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-extrabold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-[#5E5865] text-xs sm:text-sm leading-relaxed font-normal">
                      {srv.desc}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C5D00] group-hover:text-[#352043] uppercase tracking-wider pt-2 border-t border-[#E9DED3]"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. A WELLNESS JOURNEY FOR EVERY STAGE OF LIFE (5 STAGES) WITH QH-1.WEBP BACKGROUND */}
      <section
        className="py-16 sm:py-24 text-white relative overflow-hidden bg-cover bg-center w-full"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(100, 40, 127, 0.95) 0%, rgba(64, 25, 82, 0.98) 100%), url('/images/qh-1.webp')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-bold uppercase tracking-widest shadow-md">
              <Clock className="w-3.5 h-3.5 text-[#DFC47A]" />
              LIFE STAGE WELLNESS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
              A Wellness Journey For <span className="font-serif italic font-normal text-[#DFC47A]">Every Stage of Life</span>
            </h2>
            <p className="text-[#F8F2E8]/90 text-sm sm:text-base font-serif italic max-w-xl mx-auto">
              Structured around Foundation, Empowerment, Excellence, Harmony and Grace.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {stages.map((stg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white/10 border border-[#DFC47A]/40 rounded-3xl p-6 text-center space-y-4 backdrop-blur-md hover:bg-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#C8A34A] text-[#352043] text-[10px] font-extrabold uppercase tracking-wider">
                    {stg.badge}
                  </span>
                  <div className="font-heading text-2xl font-extrabold text-white">
                    {stg.stage}
                  </div>
                  <div className="text-xs font-bold text-[#DFC47A] uppercase tracking-wider">
                    {stg.age}
                  </div>
                  <p className="text-xs text-[#F8F2E8]/90 leading-relaxed font-normal">
                    {stg.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR WELLNESS PHILOSOPHY (HEALTH -> HAPPINESS -> PURPOSE -> POTENTIAL) */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Award className="w-3.5 h-3.5 text-[#DFC47A]" />
              CORE FORMULA
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Our Wellness <span className="font-serif italic font-normal text-[#8C5D00]">Philosophy</span>
            </h2>
          </div>

          {/* Flow Stepper Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/95 rounded-2xl p-5 border border-[#E9DED3] shadow-md space-y-2">
              <span className="font-heading font-extrabold text-2xl text-[#8C5D00] block">Health</span>
              <p className="text-xs text-[#5E5865]">Caring for the body creates a foundation for well-being.</p>
            </div>
            <div className="bg-white/95 rounded-2xl p-5 border border-[#E9DED3] shadow-md space-y-2">
              <span className="font-heading font-extrabold text-2xl text-[#8C5D00] block">Happiness</span>
              <p className="text-xs text-[#5E5865]">A peaceful, clear mind experiences greater happiness.</p>
            </div>
            <div className="bg-white/95 rounded-2xl p-5 border border-[#E9DED3] shadow-md space-y-2">
              <span className="font-heading font-extrabold text-2xl text-[#8C5D00] block">Purpose</span>
              <p className="text-xs text-[#5E5865]">Happiness aligned with purpose reveals deeper meaning.</p>
            </div>
            <div className="bg-white/95 rounded-2xl p-5 border border-[#E9DED3] shadow-md space-y-2">
              <span className="font-heading font-extrabold text-2xl text-[#C8A34A] block">Potential</span>
              <p className="text-xs text-[#5E5865]">Purpose-guided actions unlock our highest potential.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border-2 border-[#DFC47A] shadow-xl text-center max-w-3xl mx-auto space-y-2">
            <p className="font-serif italic text-base sm:text-lg text-[#352043] leading-relaxed">
              &quot;Divya Yogam is a journey towards a healthy body, a happy mind and a meaningful life.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* 7. THE DIVINE GRACE EXPERIENCE */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent border-t border-[#DFC47A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
              SANCTUARY AMBIENCE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              The Divine Grace <span className="font-serif italic font-normal text-[#8C5D00]">Experience</span>
            </h2>
            <p className="text-lg font-serif italic text-[#8C5D00] font-semibold">
              Pause. Breathe. Reconnect. Heal.
            </p>
            <p className="text-[#5E5865] text-sm sm:text-base max-w-2xl mx-auto">
              Our wellness environment is designed to create a gentle transition from the pace of everyday life into a space of calm and conscious presence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/95 rounded-3xl p-6 border-2 border-[#E9DED3] shadow-md text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EF] text-[#8C5D00] border border-[#DFC47A]/50 flex items-center justify-center mx-auto shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-heading text-xl font-extrabold text-[#352043] block">Clean</span>
              <p className="text-xs text-[#5E5865]">Like a medical wellness centre</p>
            </div>
            <div className="bg-white/95 rounded-3xl p-6 border-2 border-[#E9DED3] shadow-md text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EF] text-[#8C5D00] border border-[#DFC47A]/50 flex items-center justify-center mx-auto shadow-xs">
                <Flower2 className="w-6 h-6" />
              </div>
              <span className="font-heading text-xl font-extrabold text-[#352043] block">Calm</span>
              <p className="text-xs text-[#5E5865]">Like a meditation sanctuary</p>
            </div>
            <div className="bg-white/95 rounded-3xl p-6 border-2 border-[#E9DED3] shadow-md text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EF] text-[#8C5D00] border border-[#DFC47A]/50 flex items-center justify-center mx-auto shadow-xs">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-heading text-xl font-extrabold text-[#352043] block">Natural</span>
              <p className="text-xs text-[#5E5865]">Like an Ayurvedic retreat</p>
            </div>
            <div className="bg-white/95 rounded-3xl p-6 border-2 border-[#E9DED3] shadow-md text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EF] text-[#8C5D00] border border-[#DFC47A]/50 flex items-center justify-center mx-auto shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="font-heading text-xl font-extrabold text-[#352043] block">Sacred</span>
              <p className="text-xs text-[#5E5865]">Like a space for inner reflection</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR FOUR PILLARS */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent border-t border-[#DFC47A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DFC47A]" />
              CORE FOUNDATIONS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Our Four <span className="font-serif italic font-normal text-[#8C5D00]">Pillars</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base max-w-xl mx-auto">
              Structured around the overall well-being of the body, mind, emotions and spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((plr, idx) => {
              const IconComp = plr.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white/95 rounded-3xl p-7 border-2 border-[#E9DED3] shadow-lg text-center space-y-4 hover:shadow-2xl hover:border-[#8C5D00] transition-all group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
                    <IconComp className="w-8 h-8 text-[#DFC47A]" />
                  </div>
                  <h3 className="font-heading text-xl font-extrabold text-[#352043]">
                    {plr.name}
                  </h3>
                  <p className="text-[#5E5865] text-xs leading-relaxed font-normal">
                    {plr.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. YOUR DAILY WELLNESS RITUAL FLOW */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent border-t border-[#DFC47A]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Sun className="w-3.5 h-3.5 text-[#DFC47A]" />
              DAILY FLOW
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Your Daily <span className="font-serif italic font-normal text-[#8C5D00]">Wellness Ritual</span>
            </h2>
            <p className="font-heading text-sm sm:text-base font-bold text-[#8C5D00] uppercase tracking-wider">
              Wake • Cleanse • Breathe • Vibrate • Meditate • Nourish • Live
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {dailySteps.map((stp, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/95 p-4 rounded-2xl border border-[#E9DED3] shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#352043] text-[#DFC47A] font-extrabold text-sm flex items-center justify-center shrink-0">
                  {stp.step}
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-heading font-extrabold text-sm text-[#352043]">{stp.title}</h4>
                  <p className="text-xs text-[#5E5865]">{stp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHY DIVINE GRACE? */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent border-t border-[#DFC47A]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
              THE DIFFERENCE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Why <span className="font-serif italic font-normal text-[#8C5D00]">Divine Grace?</span>
            </h2>
            <p className="font-serif italic text-lg text-[#5E5865]">
              &quot;Because wellness is not simply the absence of illness.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-[#E9DED3] shadow-xs font-bold text-xs text-[#352043] uppercase tracking-wider flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8C5D00]" />
              <span>Vitality</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#E9DED3] shadow-xs font-bold text-xs text-[#352043] uppercase tracking-wider flex items-center justify-center gap-2">
              <Sun className="w-4 h-4 text-[#8C5D00]" />
              <span>Clarity</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#E9DED3] shadow-xs font-bold text-xs text-[#352043] uppercase tracking-wider flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-[#8C5D00]" />
              <span>Emotional Harmony</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#E9DED3] shadow-xs font-bold text-xs text-[#352043] uppercase tracking-wider flex items-center justify-center gap-2">
              <Flower2 className="w-4 h-4 text-[#8C5D00]" />
              <span>Inner Peace</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#E9DED3] shadow-xs font-bold text-xs text-[#352043] uppercase tracking-wider flex items-center justify-center gap-2">
              <Compass className="w-4 h-4 text-[#8C5D00]" />
              <span>Conscious Living</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. BEGIN YOUR JOURNEY (CTA BANNER) */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-3xl p-8 sm:p-14 text-white border-2 border-[#DFC47A] shadow-2xl text-center space-y-8 bg-cover bg-center overflow-hidden relative"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(100, 40, 127, 0.95) 0%, rgba(64, 25, 82, 0.98) 100%), url('/images/qh-1.webp')",
            }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-bold uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 text-[#DFC47A]" />
              BEGIN YOUR JOURNEY
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
              Discover a More <span className="text-[#DFC47A] font-serif italic font-normal">Conscious Way of Living</span>
            </h2>

            <div className="space-y-1 font-serif italic text-base sm:text-xl text-[#F8F2E8]/90 max-w-xl mx-auto">
              <p>Your body deserves care.</p>
              <p>Your mind deserves peace.</p>
              <p>Your spirit deserves space.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-[#C8A34A] hover:bg-white text-[#352043] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Start Your Wellness Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#DFC47A]/50 text-[#DFC47A] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300"
              >
                <span>Book a Consultation</span>
              </Link>
            </div>

            <div className="border-t border-white/20 pt-6 space-y-1 text-xs text-[#DFC47A] font-heading font-extrabold uppercase tracking-widest">
              <p>DIVINE GRACE: Divya Yogam</p>
              <p className="text-white/80 font-normal text-[11px] capitalize tracking-normal">
                Healthy Body • Peaceful Mind • Divine Life | Awaken Human Potential • Nurture Holistic Well-being • Inspire Conscious Living
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
