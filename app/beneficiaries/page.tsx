'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  GraduationCap,
  Award,
  Heart,
  Briefcase,
  Building2,
  Landmark,
  ShieldCheck,
  Sun,
  HandHeart,
  Users,
  TrendingUp,
  Globe,
  Clock,
  ArrowRight,
  CheckCircle2,
  Quote,
  Activity,
  Compass,
  Smile,
} from 'lucide-react';

// Animated Count-Up Number Component
function CountUpNumber({ end, suffix = '+' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out quad formula
      const currentCount = Math.floor((1 - (1 - progress) * (1 - progress)) * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function BeneficiariesPage() {
  // Who We Serve Data
  const targetGroups = [
    {
      title: 'Students',
      desc: 'Supporting focus, emotional balance, confidence, and conscious living.',
      icon: GraduationCap,
      color: 'from-[#47206A]/10 to-[#C8A34A]/20',
    },
    {
      title: 'Teachers',
      desc: 'Encouraging wellbeing, mindful leadership, and a balanced approach to education.',
      icon: Award,
      color: 'from-[#C8A34A]/15 to-[#8C5D00]/20',
    },
    {
      title: 'Parents',
      desc: 'Promoting family wellness, harmony, and conscious living.',
      icon: Heart,
      color: 'from-[#47206A]/10 to-[#8C5D00]/15',
    },
    {
      title: 'Professionals',
      desc: 'Supporting stress management, clarity, wellbeing, and personal growth.',
      icon: Briefcase,
      color: 'from-[#351A4A]/10 to-[#DFC47A]/20',
    },
    {
      title: 'Corporate Teams',
      desc: 'Bringing mindfulness, wellbeing, and conscious practices into the workplace.',
      icon: Building2,
      color: 'from-[#8C5D00]/15 to-[#47206A]/15',
    },
    {
      title: 'Educational Institutions',
      desc: 'Partnering with institutions to promote holistic wellbeing and inner development.',
      icon: Landmark,
      color: 'from-[#C8A34A]/20 to-[#351A4A]/10',
    },
    {
      title: 'Healthcare Workers',
      desc: 'Supporting those who care for others through wellness and mindfulness initiatives.',
      icon: ShieldCheck,
      color: 'from-[#47206A]/15 to-[#C8A34A]/15',
    },
    {
      title: 'Senior Citizens',
      desc: 'Creating opportunities for meditation, connection, wellbeing, and peaceful living.',
      icon: Sun,
      color: 'from-[#DFC47A]/25 to-[#8C5D00]/15',
    },
    {
      title: 'NGOs & Community Organisations',
      desc: 'Collaborating to extend meaningful outreach and service.',
      icon: HandHeart,
      color: 'from-[#351A4A]/15 to-[#C8A34A]/20',
    },
    {
      title: 'Communities',
      desc: 'Bringing wellness, meditation, awareness, and positive transformation closer to people.',
      icon: Users,
      color: 'from-[#C8A34A]/15 to-[#47206A]/15',
    },
  ];

  // Impact Dashboard Metrics Data
  const impactMetrics = [
    {
      number: 150000,
      suffix: '+',
      title: 'Lives Reached',
      desc: 'People who have participated in our verified programmes and outreach activities.',
      icon: Users,
    },
    {
      number: 1250,
      suffix: '+',
      title: 'Programmes Conducted',
      desc: 'Workshops, outreach programmes, wellness initiatives, and other community activities completed.',
      icon: Activity,
    },
    {
      number: 3500,
      suffix: '+',
      title: 'Volunteers Engaged',
      desc: 'Individuals who have contributed their time, skills, and energy towards our service initiatives.',
      icon: HandHeart,
    },
    {
      number: 8500,
      suffix: '+',
      title: 'Meditation Sessions',
      desc: 'Meditation and mindfulness sessions conducted for individuals and communities.',
      icon: Sparkles,
    },
    {
      number: 180,
      suffix: '+',
      title: 'Communities Served',
      desc: 'Communities reached through our outreach, wellness, and transformation programmes.',
      icon: Globe,
    },
    {
      number: 450,
      suffix: '+',
      title: 'Institutions Partnered',
      desc: 'Schools, colleges, organisations, corporates, NGOs, and other institutions connected through our initiatives.',
      icon: Landmark,
    },
    {
      number: 25,
      suffix: '+',
      title: 'Countries Reached',
      desc: 'Our growing geographical reach across communities and countries.',
      icon: Compass,
    },
    {
      number: 45000,
      suffix: '+',
      title: 'Service Hours',
      desc: 'The collective time contributed through volunteering and community service.',
      icon: Clock,
    },
  ];

  // Focus Criteria Tags
  const focusAreas = [
    'Personal transformation',
    'Greater confidence and clarity',
    'Improved wellbeing',
    'Family and relationship impact',
    'Leadership development',
    'Community transformation',
    'Long-term personal growth',
    'Meaningful volunteer journeys',
  ];

  // Workflow Pipeline Steps
  const workflowSteps = [
    { step: '01', title: 'Community Outreach', desc: 'Engaging communities with structured wellness & mindfulness initiatives.' },
    { step: '02', title: 'People Reached', desc: 'Connecting individuals across schools, homes, healthcare & workspaces.' },
    { step: '03', title: 'Experiences Shared', desc: 'Experiencing deep inner peace, clarity, and holistic healing.' },
    { step: '04', title: 'Lives Transformed', desc: 'Creating lasting personal, family, and emotional balance.' },
    { step: '05', title: 'Communities Strengthened', desc: 'Fostering a global culture of conscious and compassionate living.' },
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

      {/* ═══ HERO SECTION WITH RESPONSIVE LAYOUT & REDUCED OVERLAY ═══ */}
      <header className="relative bg-[#1A072A] text-white overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-20">

        {/* Bottom Left Purple-Gold Floral Ornament (beni-2.webp) - Only visible on lg desktop */}
        <div className="absolute bottom-0 left-0 w-[240px] sm:w-[320px] lg:w-[420px] h-[280px] sm:h-[360px] lg:h-[480px] pointer-events-none z-10 opacity-85 lg:opacity-95 mix-blend-screen hidden lg:block">
          <Image
            src="/images/beni-2.webp"
            alt="Bottom Left Floral Swirl Ornament"
            fill
            quality={100}
            priority
            className="object-contain object-left-bottom drop-shadow-[0_0_25px_rgba(223,196,122,0.4)]"
          />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center">

            {/* Mobile / Tablet Dedicated Image Banner (Appears FIRST on small screens, hidden on lg desktop) */}
            <div className="w-full lg:hidden order-1 relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#DFC47A]/50 aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src="/images/beni-4.webp"
                alt="Divya Yogam Community Meditation Gathering"
                fill
                quality={100}
                priority
                unoptimized
                decoding="async"
                className="object-cover object-center"
              />
              {/* Very Subtle Gradient Overlay for Mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A072A]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Left Content Column (Appears SECOND on mobile, on the LEFT on lg desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:col-span-7 xl:col-span-7 space-y-6 text-left relative z-20 pr-0 lg:pr-6 order-2 lg:order-1"
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#DFC47A]/50 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-md">
                <span className="text-[#DFC47A]">❖</span>
                <span>BENEFICIARIES</span>
              </div>

              {/* Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight">
                Touching Lives. <br />
                <span className="text-[#DFC47A] italic font-serif font-normal">Creating Meaningful Change.</span>
              </h1>

              {/* Paragraph Text */}
              <p className="font-body text-[#F8F2E8]/90 text-sm sm:text-base leading-relaxed max-w-xl">
                At Divya Yogam, our journey is measured not only by the programmes we conduct, but by the people, families, institutions, and communities we touch. Through meditation, wellness, inner transformation, and community outreach initiatives, we strive to create positive and lasting change across different sections of society.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2 font-body">
                <a
                  href="#impact-dashboard"
                  className="px-7 py-3.5 rounded-full bg-[#DFC47A] hover:bg-white text-[#351A4A] font-extrabold text-xs uppercase tracking-wider shadow-[0_10px_25px_rgba(223,196,122,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>Explore Our Impact</span>
                  <ArrowRight className="w-4 h-4 text-[#351A4A] group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/testimonials"
                  className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/15 border-2 border-[#DFC47A] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Read Transformation Stories</span>
                  <ArrowRight className="w-4 h-4 text-[#DFC47A]" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Desktop Split Image Section (Only visible on lg screens with Ultra-Slim Elegant Mask) */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[48%] xl:w-[50%] 2xl:w-[52%] h-full z-10 overflow-hidden pointer-events-none lg:pointer-events-auto hidden lg:block">
          {/* Ultra-Slim Diagonal Curved Wave Mask Layer */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <svg viewBox="0 0 500 650" preserveAspectRatio="none" className="w-full h-full text-[#1A072A]" fill="currentColor">
              <path d="M0,0 L40,0 C15,180 60,420 10,650 L0,650 Z" />
              {/* Golden Glowing Curve Trace Line */}
              <path d="M40,0 C15,180 60,420 10,650" fill="none" stroke="#DFC47A" strokeWidth="2" opacity="0.9" />
            </svg>
          </div>

          {/* Main Photo (beni-4.webp) with minimal overlay */}
          <div className="relative w-full h-full min-h-[360px] lg:min-h-full">
            <Image
              src="/images/beni-4.webp"
              alt="Divya Yogam Community Meditation Gathering"
              fill
              quality={100}
              priority
              unoptimized
              decoding="async"
              className="object-cover object-center"
            />
            {/* Minimal Edge Blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A072A]/20 via-transparent to-transparent opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A072A]/30 via-transparent to-transparent opacity-15 pointer-events-none" />
          </div>
        </div>

        {/* Bottom Smooth Transition Edge */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="relative block w-full h-4 text-[#FAF4EB]" fill="currentColor">
            <path d="M0,0 C600,40 1200,0 1200,40 L0,40 Z" />
          </svg>
        </div>
      </header>

      {/* ═══ SECTION 1: WHO WE SERVE ═══ */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Rich Sandal Background Image Overlay (con-6.webp) matching About Page */}
        <div
          className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
              OUTREACH PILLARS
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A1338]">
              Who We <span className="text-[#8C5D00] italic font-serif">Serve</span>
            </h2>
            <p className="text-[#5A4866] text-base sm:text-lg font-body leading-relaxed">
              Extending wellness, mindfulness, and inner transformation across every pillar of society.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
            {targetGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 5) * 0.08 }}
                  className="bg-gradient-to-b from-white via-[#FFFDF9] to-[#FAF4EB] border border-[#DFC47A]/60 rounded-3xl p-6 shadow-md hover:shadow-2xl hover:border-[#8C5D00] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.color} border border-[#DFC47A]/50 flex items-center justify-center text-[#8C5D00] group-hover:scale-110 group-hover:bg-[#47206A] group-hover:text-[#DFC47A] group-hover:border-[#C8A34A] transition-all duration-300 shadow-sm`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#2A1338] group-hover:text-[#47206A] transition-colors">
                      {group.title}
                    </h3>
                    <p className="font-body text-sm text-[#5A4866] leading-relaxed">
                      {group.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#DFC47A]/25 flex items-center gap-2 text-xs font-semibold text-[#8C5D00] group-hover:text-[#47206A] transition-colors">
                    <span>Holistic Outreach</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══ SECTION 2: OUR IMPACT (IMPACT DASHBOARD & COUNTERS WITH BENI-3.WEBP) ═══ */}
      <section className="py-16 sm:py-20 lg:py-24 relative bg-gradient-to-b from-[#351A4A] via-[#2A133B] to-[#200D2E] text-white overflow-hidden">
        {/* Background Royal Floral Swirl (beni-3.webp) - Only visible on lg desktop */}
        <div className="absolute top-28 sm:top-36 lg:top-44 -left-10 sm:-left-12 lg:-left-16 w-[340px] sm:w-[480px] lg:w-[600px] h-[85%] pointer-events-none z-0 opacity-80 sm:opacity-85 lg:opacity-90 mix-blend-screen hidden lg:block">
          <Image
            src="/images/beni-3.webp"
            alt="Royal Lotus Swirl Ornament (beni-3)"
            fill
            quality={100}
            priority
            unoptimized
            className="object-contain object-left-top drop-shadow-[0_0_30px_rgba(223,196,122,0.6)]"
          />
        </div>

        {/* Background Sacred Vector Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <svg width="800" height="800" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.5">
            <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="75" />
            <circle cx="100" cy="100" r="55" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest shadow-md backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
              VERIFIED IMPACT DASHBOARD
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Our <span className="text-[#DFC47A] italic font-serif">Impact</span>
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#F8F2E8]/90">
              Every Number Represents a Life Touched
            </p>
            <p className="text-[#F8F2E8]/80 text-sm sm:text-base max-w-2xl mx-auto font-body">
              Our impact dashboard brings together verified information from Divya Yogam&apos;s outreach programmes and initiatives.
            </p>
          </div>

          {/* 8 Dashboard Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, idx) => {
              const MetricIcon = metric.icon;
              return (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="bg-white/10 backdrop-blur-md border border-[#DFC47A]/35 rounded-3xl p-6 shadow-xl hover:border-[#DFC47A] hover:bg-white/15 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#DFC47A]/20 border border-[#DFC47A]/40 flex items-center justify-center text-[#DFC47A] group-hover:scale-110 group-hover:bg-[#DFC47A] group-hover:text-[#351A4A] transition-all duration-300">
                        <MetricIcon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-[#DFC47A] border border-[#DFC47A]/30">
                        Verified
                      </span>
                    </div>

                    <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#DFC47A] tracking-tight pt-2">
                      <CountUpNumber end={metric.number} suffix={metric.suffix} />
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#DFC47A] transition-colors">
                      {metric.title}
                    </h3>

                    <p className="font-body text-xs text-[#F8F2E8]/75 leading-relaxed">
                      {metric.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Disclaimer Note Box */}
          <div className="max-w-3xl mx-auto bg-[#47206A]/60 backdrop-blur-md border border-[#DFC47A]/40 rounded-2xl p-4 sm:p-5 text-center flex items-center justify-center gap-3 text-xs sm:text-sm text-[#F8F2E8] shadow-md">
            <ShieldCheck className="w-5 h-5 text-[#DFC47A] shrink-0" />
            <p>
              <strong className="text-[#DFC47A]">Note:</strong> Impact figures shown on this page are based on verified programme records and are updated periodically.
            </p>
          </div>

        </div>
      </section>

      {/* ═══ SECTION 3: STORIES OF TRANSFORMATION ═══ */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Rich Sandal Background Image Overlay (con-6.webp) matching About Page */}
        <div
          className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
              DEEP PERSONAL EXPERIENCES
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A1338]">
              Stories of <span className="text-[#8C5D00] italic font-serif">Transformation</span>
            </h2>
            <p className="font-serif italic text-lg sm:text-xl font-bold text-[#351A4A]">
              Beyond Statistics. Real People. Real Experiences.
            </p>
            <p className="text-[#5A4866] text-base sm:text-lg font-body leading-relaxed pt-1">
              Numbers show the scale of our work. Stories show its meaning. Every programme creates opportunities for transformation—whether it is a student discovering greater confidence, a professional finding inner balance, a family experiencing greater harmony, or a community coming together through wellbeing.
            </p>
          </div>

          {/* 4-Step Interactive Transformation Pipeline */}
          <div className="bg-gradient-to-r from-[#47206A] via-[#351A4A] to-[#2A1338] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border-2 border-[#DFC47A]/50 relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#DFC47A]">
                A Journey Can Begin With One Moment.
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#F8F2E8]/80">
                Through the experiences shared by our beneficiaries, discover how meditation, conscious living, wellness practices, and spiritual guidance create meaningful change.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {[
                { phase: '01', name: 'Challenge', desc: 'Identifying stress, lack of focus, emotional imbalance, or health friction.' },
                { phase: '02', name: 'Experience', desc: 'Participating in guided meditation, organ wellness, and conscious living practices.' },
                { phase: '03', name: 'Transformation', desc: 'Unlocking inner peace, enhanced clarity, confidence, and physical vitality.' },
                { phase: '04', name: 'Impact', desc: 'Spreading positive influence across family, workplace, and local community.' },
              ].map((step, idx) => (
                <div
                  key={step.name}
                  className="bg-white/10 backdrop-blur-md border border-[#DFC47A]/30 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-[#DFC47A] text-[#351A4A]">
                      Phase {step.phase}
                    </span>
                    <h4 className="font-heading text-xl font-bold text-white pt-1">
                      {step.name}
                    </h4>
                    <p className="font-body text-xs text-[#F8F2E8]/80 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-[#DFC47A] z-20">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* What We Look For Grid */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-[#2A1338] text-center">
              What We Look For &amp; Nurture
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 bg-gradient-to-r from-white to-[#FAF4EB] border border-[#DFC47A]/50 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#8C5D00] transition-all duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#8C5D00] shrink-0" />
                  <span className="font-heading font-semibold text-sm text-[#351A4A]">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══ SECTION 4: VOICES FROM OUR COMMUNITY (TESTIMONIAL QUOTES) ═══ */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden border-y border-[#DFC47A]/30">
        {/* Rich Sandal Background Image Overlay (con-6.webp) matching About Page */}
        <div
          className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
              HEARTFELT REFLECTIONS
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A1338]">
              Voices From Our <span className="text-[#8C5D00] italic font-serif">Community</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Quote Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-[#DFC47A] rounded-3xl p-8 shadow-xl relative hover:shadow-2xl hover:border-[#8C5D00] transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-[#DFC47A]/50 absolute top-6 right-6" />
              <div className="space-y-4 relative z-10">
                <p className="font-serif italic text-lg sm:text-xl text-[#351A4A] leading-relaxed">
                  &ldquo;My journey with Divya Yogam helped me pause, reflect, and discover a deeper sense of balance within myself.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#DFC47A]/30">
                <p className="font-heading font-bold text-sm text-[#8C5D00]">
                  — Beneficiary, Community Wellness Programme
                </p>
              </div>
            </motion.div>

            {/* Quote Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-[#DFC47A] rounded-3xl p-8 shadow-xl relative hover:shadow-2xl hover:border-[#8C5D00] transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-[#DFC47A]/50 absolute top-6 right-6" />
              <div className="space-y-4 relative z-10">
                <p className="font-serif italic text-lg sm:text-xl text-[#351A4A] leading-relaxed">
                  &ldquo;The experience gave our students a new perspective on mindfulness, confidence, and conscious living.&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#DFC47A]/30">
                <p className="font-heading font-bold text-sm text-[#8C5D00]">
                  — Educator, Educational Outreach Programme
                </p>
              </div>
            </motion.div>
          </div>

          <p className="text-center text-xs text-[#5A4866] italic font-body">
            *Beneficiary stories and testimonials are published with appropriate permission and consent.*
          </p>

        </div>
      </section>

      {/* ═══ SECTION 5: SEE THE IMPACT (WORKFLOW PIPELINE) ═══ */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Rich Sandal Background Image Overlay (con-6.webp) matching About Page */}
        <div
          className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
              COLLECTIVE PARTICIPATION
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A1338]">
              See the <span className="text-[#8C5D00] italic font-serif">Impact</span>
            </h2>
            <p className="font-serif italic text-xl font-bold text-[#351A4A]">
              From Service to Transformation
            </p>
            <p className="text-[#5A4866] text-base font-body">
              Our impact is built through collective participation.
            </p>
          </div>

          {/* Workflow Pipeline Process Diagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((ws) => (
              <div
                key={ws.step}
                className="bg-white border-2 border-[#DFC47A]/70 rounded-2xl p-5 text-center shadow-md hover:border-[#47206A] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between"
              >
                <div className="w-10 h-10 rounded-full bg-[#47206A] text-[#DFC47A] font-extrabold text-sm flex items-center justify-center mb-3 shadow-sm">
                  {ws.step}
                </div>
                <h4 className="font-heading font-bold text-base text-[#2A1338] mb-2">
                  {ws.title}
                </h4>
                <p className="font-body text-xs text-[#5A4866] leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#47206A] via-[#351A4A] to-[#47206A] rounded-2xl p-6 text-center text-[#F8F2E8] shadow-lg border border-[#DFC47A]/40 font-body text-sm sm:text-base leading-relaxed italic font-serif">
            &ldquo;Every workshop, every meditation session, every volunteer contribution, and every personal story becomes part of a larger journey towards conscious and compassionate living.&rdquo;
          </div>

        </div>
      </section>

      {/* ═══ SECTION 6: OUR COMMITMENT & CALL TO ACTION WITH BENI-1.WEBP IMAGE ═══ */}
      <section className="py-16 sm:py-20 lg:py-24 relative bg-gradient-to-b from-[#351A4A] via-[#2A133B] to-[#1F0B2E] text-white">
        
        {/* Background Sacred Vector Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <svg width="700" height="700" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.6">
            <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="75" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* RIGHT IMAGE CARD WITH BENI-1.WEBP (Appears FIRST on sm & md screens, ON THE RIGHT on lg desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:col-span-5 order-1 lg:order-2 relative"
            >
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Outer Golden Glow */}
                <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-tr from-[#DFC47A]/35 via-[#C8A34A]/20 to-transparent blur-lg pointer-events-none" />

                {/* Main Image Frame (beni-1.webp) */}
                <div className="relative rounded-[28px] overflow-hidden border-2 border-[#DFC47A] shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3] group min-h-[320px] sm:min-h-[380px] lg:min-h-[440px]">
                  <Image
                    src="/images/beni-1.webp"
                    alt="Divya Yogam Spiritual Transformation & Inner Awakening (beni-1)"
                    fill
                    quality={100}
                    priority
                    unoptimized
                    decoding="async"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B2E]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>

            {/* LEFT TEXT CONTENT COLUMN (Appears SECOND on sm & md screens, ON THE LEFT on lg desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:col-span-7 order-2 lg:order-1 space-y-8 text-center lg:text-left"
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest shadow-md backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-[#DFC47A]" />
                <span>TRANSPARENT &amp; MEASURABLE</span>
              </div>

              {/* Our Commitment Heading & Narrative */}
              <div className="space-y-4">
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                  Our <span className="text-[#DFC47A] italic font-serif">Commitment</span>
                </h2>
                <p className="text-[#F8F2E8]/90 text-base sm:text-lg font-body leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We believe meaningful impact should be <strong className="text-[#DFC47A]">credible, transparent, and measurable</strong>. Our beneficiary statistics are maintained through verified programme records, while stories and testimonials are shared with appropriate consent. We continuously work to understand who we serve, how we reach them, and the difference our initiatives create.
                </p>
              </div>

              {/* Gold Divider Line */}
              <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-[#DFC47A]/60 via-[#DFC47A]/30 to-transparent mx-auto lg:mx-0" />

              {/* Together We Awaken Headline & 3 Pill Buttons */}
              <div className="space-y-6 pt-2">
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#DFC47A] leading-snug">
                  Together, We Awaken the Divine Within.
                </h3>

                {/* 3 Responsive Action Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 font-body">
                  <Link
                    href="/practices"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#DFC47A] hover:bg-white text-[#351A4A] font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Explore Our Initiatives</span>
                    <ArrowRight className="w-4 h-4 text-[#351A4A] group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/testimonials"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border-2 border-[#DFC47A] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Read Transformation Stories</span>
                    <ArrowRight className="w-4 h-4 text-[#DFC47A]" />
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#47206A] hover:bg-[#8C5D00] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 border border-[#DFC47A]/40"
                  >
                    <span>Join Our Community</span>
                    <ArrowRight className="w-4 h-4 text-[#DFC47A]" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
